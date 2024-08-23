if (!localStorage.getItem('botScore')){
  localStorage.setItem('botScore', 0)
}



document.querySelector('button').addEventListener('click', addAnothaOne) // click event calls our function

function addAnothaOne(){
  // get item and store it
  // manipulate it
  // set it in local storage
  let botScoreVal = Number(localStorage.getItem('botScore'))
  botScoreVal += 1
  localStorage.setItem('botScore', botScoreVal)

}




