// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
let modal = document.getElementById("modal")
let hearts = document.querySelectorAll("span.like-glyph")
// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", () => {
  hideModal();
  hearts.forEach(elem => elem.addEventListener("click", (e)=>{
    console.log("im clicked!")
    let modalMessage = document.querySelector("#modal-message")
    mimicServerCall()
    .catch(function(error){
      let errorMessage = error
      modalMessage.innerText = error
      console.log(error)
      revealModal()
    })
    .then(function(resolve){
      if(modal.hidden === true){
      console.log(resolve)
      if(elem.innerText === EMPTY_HEART){
        elem.classList.add("activated-heart")
        elem.innerText = FULL_HEART
        }
      else if(elem.innerText === FULL_HEART){
        elem.classList.remove("activated-heart")
        elem.innerText = EMPTY_HEART
        }
      }
    })
  }))
})

function hideModal(){
  modal.hidden = true
}
function revealModal(){
  modal.hidden = false
  setTimeout(function(){
    modal.hidden = true
  }, 3000)
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
