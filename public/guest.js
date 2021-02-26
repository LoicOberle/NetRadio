
var mySocket = io();
mySocket.on("connection", () => {
    console.log(("connect"));
})
mySocket.emit("guest","")
var sampleRate=10000
var bufferSize=8192
var nom

var buffer1, bufferSource1;
var buffer2, bufferSource2;
var buffer3, bufferSource3;
var buffer4, bufferSource4;
var buffer5, bufferSource5;
var buffer6, bufferSource6;
var buffer7, bufferSource7;
var buffer8, bufferSource8;
var buffer9, bufferSource9;
var buffer10, bufferSource10;


nom=prompt("Entrez votre slot")
var serialize = serialijse.serialize;
var deserialize = serialijse.deserialize;
var volumeSlider=document.getElementById("volume")
navigator.mediaDevices.getUserMedia({
    video: false,
    audio: true
}).then(function (stream) {
    var context = new AudioContext({ sampleRate: sampleRate })
    

    var source = context.createMediaStreamSource(stream)
    var volumeNode=context.createGain()
     //Node pour envoyer l'audio au serveur
    var scriptNode = context.createScriptProcessor(bufferSize, 1, 1);
    scriptNode.onaudioprocess = (e) => {
        var inputBuffer = e.inputBuffer;
        //console.log(inputBuffer.getChannelData(0));
       // console.log("send");
        //chunks.push(inputBuffer.getChannelData(0))
        mySocket.emit(nom,  serialize(inputBuffer.getChannelData(0)))

    }
    volumeSlider.addEventListener("input", () => {
        volumeNode.gain.value=volumeSlider.value/100.0
    })
    source.connect(volumeNode)
    volumeNode.connect(scriptNode)
    scriptNode.connect(context.destination)

    if (nom != "guestStream1") {
        mySocket.on('guestStream1', (packet) => {
        //    console.log("receive from 1");
               buffer1 = context.createBuffer(1, bufferSize, sampleRate)
    bufferSource1 = context.createBufferSource()
    buffer1.copyToChannel(deserialize(packet), 0)
    bufferSource1.buffer = buffer1
    bufferSource1.connect(context.destination)
     bufferSource1.start()
           });
    }
     if (nom != "guestStream2") {
           mySocket.on('guestStream2', (packet) => {
               // console.log("receive from 2");
               buffer2 = context.createBuffer(1, bufferSize, sampleRate)
    bufferSource2 = context.createBufferSource()
    buffer2.copyToChannel(deserialize(packet), 0)
    bufferSource2.buffer = buffer2
    bufferSource2.connect(context.destination)
     bufferSource2.start()
           });
    }
     if (nom != "guestStream3") {
           mySocket.on('guestStream3',(packet) => {
              //  console.log("receive from 3");
               buffer3 = context.createBuffer(1, bufferSize, sampleRate)
    bufferSource3 = context.createBufferSource()
    buffer3.copyToChannel(deserialize(packet), 0)
    bufferSource3.buffer = buffer3
    bufferSource3.connect(context.destination)
     bufferSource3.start()
           });
    }
     if (nom != "guestStream4") {
           mySocket.on('guestStream4', (packet) => {
              //  console.log("receive from 4");
               buffer4 = context.createBuffer(1, bufferSize, sampleRate)
    bufferSource4 = context.createBufferSource()
    buffer4.copyToChannel(deserialize(packet), 0)
    bufferSource4.buffer = buffer1
    bufferSource4.connect(context.destination)
     bufferSource4.start()
           });
    }
     if (nom != "guestStream5") {
           mySocket.on('guestStream5', (packet) => {
               // console.log("receive from 5");
               buffer5 = context.createBuffer(1, bufferSize, sampleRate)
    bufferSource5 = context.createBufferSource()
    buffer5.copyToChannel(deserialize(packet), 0)
    bufferSource5.buffer = buffer5
    bufferSource5.connect(context.destination)
     bufferSource5.start()
           });
    }
     if (nom != "guestStream6") {
         mySocket.on('guestStream6', (packet) => {
               // console.log("receive from 6");
               buffer6 = context.createBuffer(1, bufferSize, sampleRate)
    bufferSource6 = context.createBufferSource()
    buffer6.copyToChannel(deserialize(packet), 0)
    bufferSource6.buffer = buffer6
    bufferSource6.connect(context.destination)
     bufferSource6.start()
           });
    }
     if (nom != "guestStream7") {
           mySocket.on('guestStream7', (packet) => {
               // console.log("receive from 7");
               buffer7 = context.createBuffer(1, bufferSize, sampleRate)
    bufferSource7 = context.createBufferSource()
    buffer7.copyToChannel(deserialize(packet), 0)
    bufferSource7.buffer = buffer7
    bufferSource7.connect(context.destination)
     bufferSource7.start()
           });
    }
     if (nom != "guestStream8") {
         mySocket.on('guestStream8', (packet) => {
               // console.log("receive from 8");
               buffer8 = context.createBuffer(1, bufferSize, sampleRate)
    bufferSource8 = context.createBufferSource()
    buffer8.copyToChannel(deserialize(packet), 0)
    bufferSource8.buffer = buffer8
    bufferSource8.connect(context.destination)
     bufferSource8.start()
           });
    }
     if (nom != "guestStream9") {
           mySocket.on('guestStream9', (packet) => {
               // console.log("receive from 9");
               buffer9 = context.createBuffer(1, bufferSize, sampleRate)
    bufferSource9 = context.createBufferSource()
    buffer9.copyToChannel(deserialize(packet), 0)
    bufferSource9.buffer = buffer9
    bufferSource9.connect(context.destination)
     bufferSource9.start()
           });
    }
     if (nom != "guestStream10") {
           mySocket.on('guestStream10', (packet) => {
               // console.log("receive from 10");
               buffer10 = context.createBuffer(1, bufferSize, sampleRate)
    bufferSource10 = context.createBufferSource()
    buffer10.copyToChannel(deserialize(packet), 0)
    bufferSource10.buffer = buffer10
    bufferSource10.connect(context.destination)
     bufferSource10.start()
           });
    }

 mySocket.on('musicStream', function (packet) {
    //console.log(deserialize(packet));
     // console.log("receiving music");
    musicBuffer = context.createBuffer(1, bufferSize, sampleRate)
    musicBufferSource = context.createBufferSource()
    musicBuffer.copyToChannel(deserialize(packet), 0)
    musicBufferSource.buffer = musicBuffer
    musicBufferSource.connect(context.destination)
      musicBufferSource.start()


});

   

})

