fetch('/user/podcastList')
  .then(
    function(response) {
      response.json().then((data) => {
        console.log(data);
        
      
          for (let i = 0; i < data.length; i++){
                let card = document.createElement("div")
          card.classList.add("card")
              let title = document.createElement("p")
              title.innerHTML = data[i]
              card.append(title)
          let audio = document.createElement("audio");
          audio.id = 'audio' + i
          audio.src = "/podcasts/" + data[i]
            audio.crossOrigin = "anonymous"
              audio.controls = true;
              card.append(audio)
          document.getElementById("podcastList").append(card)
        }
       
    })
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
