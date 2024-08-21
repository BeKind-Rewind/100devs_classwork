//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch) // click event calls our function

function getFetch(){
  const choice = document.querySelector('input').value.toLowerCase() // grabs value from input
  const url = `https://api.nasa.gov/planetary/apod?api_key=tdXdWueYeMTHnIb14olBzm4OshzIS8doXqO3a4WW&date=${choice}` //plugs that value into the url

  fetch(url) // makes the fetch with it
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        if( data.media_type === 'image') {
          document.querySelector('img').src = data.hdurl
        } else if ( data.media_type === 'video') {
          document.querySelector('iframe').src = data.url
        }
        
        document.querySelector('h3').innerText = data.explanation
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

