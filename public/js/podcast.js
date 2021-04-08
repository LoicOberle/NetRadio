fetch('http://localhost:19080/user/podcastList')
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
          document.getElementById("container").append(audio)
        }
        document.getElementById("container").append(liste)
    })
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
