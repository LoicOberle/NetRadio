var mySocket = io();

mySocket.on("connection", () => {
    console.log(("connect"));
})

mySocket.emit("streamer","")
var deserialize = serialijse.deserialize;
var context = new AudioContext()
var buffer, bufferSource;
var musicBuffer,musicBufferSource
const playButton = document.getElementById("playButton");
let imgButton = document.getElementById("imgButton");
let adresseSite = "http://localhost:19080/";
var play = false

var sampleRate=10000
var bufferSize=8192

mySocket.on('stream', function (packet) {

    console.log("receiving voice");
    buffer = context.createBuffer(1, bufferSize, sampleRate)
    bufferSource = context.createBufferSource()
    buffer.copyToChannel(deserialize(packet), 0)
    bufferSource.buffer = buffer
    bufferSource.connect(context.destination)

    if (play) {
        bufferSource.start()
    } else {
        try {
            bufferSource.stop()
        } catch (error) {
            console.log(error)
        }
    }
});


mySocket.on('musicStream', function (packet) {

    console.log("receiving music");
    musicBuffer = context.createBuffer(1, bufferSize, sampleRate)
    musicBufferSource = context.createBufferSource()
    musicBuffer.copyToChannel(deserialize(packet), 0)
    musicBufferSource.buffer = musicBuffer
    musicBufferSource.connect(context.destination)

    if (play) {
        musicBufferSource.start()
    } else {
        try {
            musicBufferSource.stop()
        } catch (error) {
            console.log(error)
        }
    }

});

playButton.addEventListener("click", () => {
    play = !play
    console.log("test");
    console.log(imgButton.src);
    if(imgButton.src == adresseSite + "images/playIcon.png"){
        imgButton.src = adresseSite + "images/pause-button.png";
    }else{
        imgButton.src = adresseSite + "images/playIcon.png";
    }
})