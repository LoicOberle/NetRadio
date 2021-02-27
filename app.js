const express = require('express');
const app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
const multer  = require('multer') //use multer to upload blob data
const upload = multer(); // set multer to be the upload variable (just like express, see above ( include it, then use it/set it up))
const fs = require('fs');
var swig = require('swig');

var swig = new swig.Swig();
app.engine('html', swig.renderFile);
app.set('view engine', 'html');

let websockets = []

io.on("connection", function (ws) {
    console.log('New Socket connection');
    websockets.push(ws)
    console.log(websockets.length);
    ws.on("streamer", (data) => {
        ws.join("streamerRoom")
    })
    ws.on("guest", (data) => {
        ws.join("guestRoom")
    })
    ws.on("presenter", (data) => {
        ws.join("presenterRoom")
    })
    ws.on("stream", (data) => {

        //io.emit("stream", data)
        io.to("streamerRoom").emit("stream",data)
    })
     ws.on("musicStream", (data) => {

        //io.emit("musicStream", data)
         io.to("streamerRoom").to("guestRoom").emit("musicStream",data)
         //io.to("guestRoom").emit("musicStream",data)
    })
    ws.on("guestStream1", (data) => {

        //io.emit("guestStream1", data)
        ws.to("guestRoom").to("presenterRoom").emit("guestStream1",data)
    })
     ws.on("guestStream2", (data) => {

        //io.emit("guestStream2", data)
         ws.to("guestRoom").to("presenterRoom").emit("guestStream2",data)
    })
     ws.on("guestStream3", (data) => {

        //io.emit("guestStream3", data)
          ws.to("guestRoom").to("presenterRoom").emit("guestStream3",data)
    })
     ws.on("guestStream4", (data) => {

       // io.emit("guestStream4", data)
         ws.to("guestRoom").to("presenterRoom").emit("guestStream4",data)
    })
     ws.on("guestStream5", (data) => {

       // io.emit("guestStream5", data)
           ws.to("guestRoom").to("presenterRoom").emit("guestStream5",data)
    })
    ws.on("guestStream6", (data) => {

        //io.emit("guestStream6", data)
          ws.to("guestRoom").to("presenterRoom").emit("guestStream6",data)
    })
    ws.on("guestStream7", (data) => {

        //io.emit("guestStream7", data)
          ws.to("guestRoom").to("presenterRoom").emit("guestStream7",data)
    })
    ws.on("guestStream8", (data) => {

        //io.emit("guestStream8", data)
          ws.to("guestRoom").to("presenterRoom").emit("guestStream8",data)
    })
    ws.on("guestStream9", (data) => {

       // io.emit("guestStream9", data)
         ws.to("guestRoom").to("presenterRoom").emit("guestStream9",data)
    })
    ws.on("guestStream10", (data) => {

       // io.emit("guestStream10", data)
         ws.to("guestRoom").to("presenterRoom").emit("guestStream10",data)
    })

    ws.on("disconnect", function () {
        websockets = websockets.filter(function (otherWS) {
            return ws !== otherWS
        })
    })

})



app.use(express.static("public"));
app.get('/', (req, res) => {
    res.render('./containers/index', { title: 'Superhero API' });
});
app.post('/audioUpload', upload.single("audioBlob"), (req, res) => {
    console.log(req.file);
  let uploadLocation = __dirname + '/public/podcasts/' + req.file.originalname // where to save the file to. make sure the incoming name has a .wav extension

  fs.writeFileSync(uploadLocation, Buffer.from(new Uint8Array(req.file.buffer))); // write the blob to the server as a file
  res.sendStatus(200); //send back that everything went ok

});
app.get('/streamer', (req, res) => {
    res.sendFile("streamer.html", {
        root: "public"
    })
});
app.get('/presenter', (req, res) => {
    res.sendFile("presenter.html", {
        root: "public"
    })
});

app.get('/guest', (req, res) => {
    res.sendFile("guest.html", {
        root: "public"
    })
});
http.listen(process.env.PORT || 5000, () => {
    console.log(`Server started on port`);
});