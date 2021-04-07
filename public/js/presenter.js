var mySocket = io();
mySocket.on("connection", () => {
    console.log(("connect"));
})

mySocket.emit("presenter","")
//DOM Elements
var audioElement;
const playTrackButton = document.getElementById("playFile")
const musicTestButton = document.getElementById("musicTest")
const musicStopButton = document.getElementById("stopMusic")
const start = document.getElementById("start")
const st = document.getElementById("stop")
const distortionSlider=document.getElementById("distortion")
const gainSlider=document.getElementById("gain")
const muteBox=document.getElementById("muteBox")
const feedBackBox=document.getElementById("feedBackBox")
const musicGainSlider = document.getElementById("musicGain")
const guestGainSlider = document.getElementById("guestGain")
const recordPodcastBox=document.getElementById("recordPodcast")



var sampleRate=10000
var bufferSize=8192
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

st.disabled = true
playTrackButton.disabled = true
start.disabled = false
var serialize = serialijse.serialize;
var deserialize = serialijse.deserialize;
var play = false
var chunks = []


fetch('http://localhost:19080/user/songList')
  .then(
    function(response) {
      response.json().then((data) => {
        console.log(data);
        let liste = document.createElement("select")
        liste.id="songList"
        for (let i = 0; i < data.length; i++){
          let audio = document.createElement("audio");
          let option = document.createElement("option")
          option.value = "audio" + i
          option.innerHTML = data[i]
          liste.append(option)
          audio.id = 'audio' + i
          audio.src = "/sounds/" + data[i]
          audio.crossOrigin="anonymous"
          document.getElementById("controls").append(audio)
        }
        document.getElementById("controls").append(liste)
    })
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });


navigator.mediaDevices.getUserMedia({
    video: false,
    audio: true
}).then(function (stream) {
    console.log(stream);
    //WebAudio api Nodes
    var context = new AudioContext({sampleRate: sampleRate})
    var distorsionNode = context.createWaveShaper();
    var gainNode = context.createGain()
    var musicGainNode=context.createGain()
    var guestGainNode=context.createGain()

    var destinationNode = context.createMediaStreamDestination()
    var recorder=new MediaRecorder(destinationNode.stream)

   var source2;//= context.createMediaElementSource(audioElement);
    var source = context.createMediaStreamSource(stream)


    //Node pour envoyer l'audio au serveur
    var scriptNode = context.createScriptProcessor(bufferSize, 1, 1);
    scriptNode.onaudioprocess = (e) => {
        var inputBuffer = e.inputBuffer;
          //console.log(inputBuffer.getChannelData(0));
       //console.log("send");
        //chunks.push(inputBuffer.getChannelData(0))
        mySocket.emit("stream", serialize(inputBuffer.getChannelData(0)))

    }
    var musicScriptNode=context.createScriptProcessor(bufferSize,1,1)
    musicScriptNode.onaudioprocess = (e) => {
        var inputBuffer = e.inputBuffer;
          //console.log(inputBuffer.getChannelData(0));
        //console.log("send");
        //chunks.push(inputBuffer.getChannelData(0))
        mySocket.emit("musicStream", serialize(inputBuffer.getChannelData(0)))

    }
    //source.connect(scriptNode)
    source.connect(distorsionNode);
    distorsionNode.connect(gainNode)
   //  guestGainNode.connect(scriptNode)
    gainNode.connect(scriptNode)
    //scriptNode.connect(destinationNode)
 // source2.connect(musicGainNode)
  musicGainNode.connect(musicScriptNode)

    //Permet de tester la musique pour ajuster le volume etc
  musicTestButton.addEventListener("click", () => {
    console.log('test');
      console.log('playing sound '+document.getElementById("songList").value);
    audioElement = document.getElementById(document.getElementById("songList").value);

    if (source2==undefined) {
    source2 = context.createMediaElementSource(audioElement);
      }
     
 
    
       source2.connect(musicGainNode)
        musicGainNode.connect(context.destination)
        
        audioElement.play()
        audioElement.onended = () => {
         
            musicGainNode.disconnect(context.destination)
           
        }
    })
  
  musicStopButton.addEventListener('click', () => {
    audioElement.pause()
    let temp=audioElement.src
    audioElement.src = ""
    audioElement.src=temp
     source2.disconnect(musicGainNode)
    // musicGainNode.disconnect(context.destination)
  })
  
  ///////////////Gestion de la voix des invités///////////////////////////
  /*
  mySocket.on("guestStream1", (packet) => {
   // console.log("message reçu de guest1");
     buffer1 = context.createBuffer(1, bufferSize, sampleRate)
    bufferSource1 = context.createBufferSource()
    buffer1.copyToChannel(deserialize(packet), 0)
    bufferSource1.buffer = buffer1
    bufferSource1.connect(guestGainNode)
  
    bufferSource1.start()
    })
    mySocket.on("guestStream2", (packet) => {
   // console.log("message reçu de guest2");
     buffer2 = context.createBuffer(1, bufferSize, sampleRate)
    bufferSource2 = context.createBufferSource()
    buffer2.copyToChannel(deserialize(packet), 0)
    bufferSource2.buffer = buffer2
    bufferSource2.connect(guestGainNode)
   
    bufferSource2.start()
    })
     mySocket.on("guestStream3", (packet) => {
   // console.log("message reçu de guest3");
     buffer3 = context.createBuffer(1, bufferSize, sampleRate)
    bufferSource3 = context.createBufferSource()
    buffer3.copyToChannel(deserialize(packet), 0)
    bufferSource3.buffer = buffer3
    bufferSource3.connect(guestGainNode)
  
    bufferSource3.start()
    })
    mySocket.on("guestStream4", (packet) => {
   // console.log("message reçu de guest4");
     buffer4 = context.createBuffer(1, bufferSize, sampleRate)
    bufferSource4 = context.createBufferSource()
    buffer4.copyToChannel(deserialize(packet), 0)
    bufferSource4.buffer = buffer4
    bufferSource4.connect(guestGainNode)
   
    bufferSource4.start()
    })
     mySocket.on("guestStream5", (packet) => {
  //  console.log("message reçu de guest5");
     buffer5 = context.createBuffer(1, bufferSize, sampleRate)
    bufferSource5 = context.createBufferSource()
    buffer5.copyToChannel(deserialize(packet), 0)
    bufferSource5.buffer = buffer5
    bufferSource5.connect(guestGainNode)
   
    bufferSource5.start()
    })
    mySocket.on("guestStream6", (packet) => {
  //  console.log("message reçu de guest6");
     buffer6 = context.createBuffer(1, bufferSize, sampleRate)
    bufferSource6= context.createBufferSource()
    buffer6.copyToChannel(deserialize(packet), 0)
    bufferSource6.buffer = buffer6
    bufferSource6.connect(guestGainNode)
    
    bufferSource6.start()
    })
     mySocket.on("guestStream7", (packet) => {
   // console.log("message reçu de guest7");
     buffer7 = context.createBuffer(1, bufferSize, sampleRate)
    bufferSource7 = context.createBufferSource()
    buffer7.copyToChannel(deserialize(packet), 0)
    bufferSource7.buffer = buffer7
    bufferSource7.connect(guestGainNode)
  
    bufferSource7.start()
    })
    mySocket.on("guestStream8", (packet) => {
    //console.log("message reçu de guest8");
     buffer8 = context.createBuffer(1, bufferSize, sampleRate)
    bufferSource8 = context.createBufferSource()
    buffer8.copyToChannel(deserialize(packet), 0)
    bufferSource8.buffer = buffer8
    bufferSource8.connect(guestGainNode)
 
    bufferSource8.start()
    })
     mySocket.on("guestStream9", (packet) => {
  //  console.log("message reçu de guest9");
     buffer9 = context.createBuffer(1, bufferSize, sampleRate)
    bufferSource9 = context.createBufferSource()
    buffer9.copyToChannel(deserialize(packet), 0)
    bufferSource9.buffer = buffer9
    bufferSource9.connect(guestGainNode)
   
    bufferSource9.start()
    })
    mySocket.on("guestStream10", (packet) => {
   // console.log("message reçu de guest10");
     buffer10 = context.createBuffer(1, bufferSize, sampleRate)
    bufferSource10 = context.createBufferSource()
    buffer10.copyToChannel(deserialize(packet), 0)
      bufferSource10.buffer = buffer10
         bufferSource10.connect(guestGainNode)
      
   
  
    bufferSource10.start()
    })
    */
  /////////////////////////////////////////////////////
  
    playTrackButton.addEventListener("click", () => {
        
        //source.disconnect(scriptNode)         -> Ligne a decommenter si on veut couper le micro pendant que la musique joue
        audioElement = document.getElementById(document.getElementById("songList").value);

    if (source2==undefined) {
    source2 = context.createMediaElementSource(audioElement);
      }
     
 
    
       source2.connect(musicGainNode)
      musicGainNode.connect(musicScriptNode)
      musicScriptNode.connect(context.destination)
        musicGainNode.connect(destinationNode)
        playTrackButton.style.backgroundColor="red"
        audioElement.play()
        audioElement.onended = () => {
            playTrackButton.style.backgroundColor="green"
            musicGainNode.disconnect(musicScriptNode)
             musicScriptNode.disconnect(context.destination)
            musicGainNode.disconnect(destinationNode)
            //source.connect(scriptNode)  -> Ligne a decommenter si on veut couper le micro pendant que la musique joue
        }
    })
    start.addEventListener("click", () => {
        document.getElementById("finalRecording").controls=false
        st.disabled = false
        playTrackButton.disabled = false
        start.disabled = true

       // gainNode.connect(context.destination);
         if (!muteBox.checked) {
           scriptNode.connect(context.destination);
           //musicScriptNode.connect(context.destination)
       } else {
           scriptNode.disconnect(context.destination);
             //musicScriptNode.disconnect(context.destination)
        }
      gainNode.connect(destinationNode)
      musicGainNode.connect(destinationNode)
         chunks = []
        recorder.start()
      console.log(recorder.state);
       
    })

    muteBox.addEventListener("change", () => {
       if (!muteBox.checked) {
         scriptNode.connect(context.destination);
        // musicScriptNode.connect(context.destination)
       } else {
           scriptNode.disconnect(context.destination);
          //  musicScriptNode.disconnect(context.destination)
        }
    })
      feedBackBox.addEventListener("change", () => {
       if (feedBackBox.checked) {
           gainNode.connect(context.destination);
         musicGainNode.connect(context.destination)
         //guestGainNode.connect(context.destination)
       } else {
           gainNode.disconnect(context.destination);
            musicGainNode.disconnect(context.destination)
           //  guestGainNode.disconnect(context.destination)
        }
    })

    distortionSlider.addEventListener("input", () => {
         distorsionNode.curve = makeDistortionCurve(distortionSlider.value*1.0);
    })
    gainSlider.addEventListener("input", () => {
          gainNode.gain.value = gainSlider.value / 100.0
    })
    musicGainSlider.addEventListener("input", () => {
        
        musicGainNode.gain.value = musicGainSlider.value / 100.0
        console.log(musicGainNode.gain.value);
        
    })
     /* guestGainSlider.addEventListener("input", () => {
        
        guestGainNode.gain.value = guestGainSlider.value / 100.0
       // console.log(guestGainSlider.gain.value);
        
    })*/

  st.addEventListener("click", () => {
      console.log('stopping recording');
        st.disabled = true
        playTrackButton.disabled = true
        start.disabled = false
    scriptNode.disconnect(context.destination);
    try {
      musicScriptNode.disconnect(context.destination);
         musicGainNode.disconnect(destinationNode)
    } catch (err) {
      
    }
       
         gainNode.disconnect(destinationNode)
     
        
         recorder.stop()
       //stopRecording()
    })


     recorder.ondataavailable = function(e) {
  chunks.push(e.data);
}
    recorder.onstop = function (evt) {
        if (recordPodcastBox.checked) {
          const clipName = prompt("Entrer un nom pour l'enregistrement");
      
       // Make blob out of our blobs, and open it.
     console.log("recording stopped");
        var blob = new Blob(chunks, { 'type': 'audio/mpeg' });
        sendAudioFile(blob,clipName)
        chunks = []
        console.log(blob);
          blobToDataURL(blob, (res) => {
           console.log(res);
          })
      
        document.getElementById("finalRecording").src = URL.createObjectURL(blob);
        document.getElementById("finalRecording").controls=true
     };
     }
       

 

});

//Fonction pour la distortion du noeud associé
function makeDistortionCurve(amount) {
  var k = typeof amount === 'number' ? amount : 50,
    n_samples = 44100,
    curve = new Float32Array(n_samples),
    deg = Math.PI / 180,
    i = 0,
    x;
  for ( ; i < n_samples; ++i ) {
    x = i * 2 / n_samples - 1;
    curve[i] = ( 3 + k ) * x * 20 * deg / ( Math.PI + k * Math.abs(x) );
  }
  return curve;
};

//Transforme le blob en url, pour y acceder sur le lecteur audio
function blobToDataURL(blob, callback) {
    var a = new FileReader();
    a.onload = function(e) {callback(e.target.result);}
    a.readAsDataURL(blob);
}

//Envoi le fichier audio sur le serveur, en specifiant son nom
const sendAudioFile = (file,name) => {
  const formData = new FormData();
  formData.append('audioBlob', file,name+".mp3");
  return fetch('http://localhost:19080/audioUpload', {
    method: 'POST',
      body: formData,
     headers: {
          'enctype': 'multipart/form-data' // the enctype is important to work with multer on the server
        }
  });
};