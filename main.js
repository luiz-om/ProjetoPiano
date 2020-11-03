// get all keys
const keys = document.querySelectorAll('.key')

console.log(keys)
// play notes
function playNote(event) {
    // console.log(event.target.dataset.key)
    // console.log(event.keyCode)

let audioKeyCode = getKeyCode(event)

//console.log(audioKeyCode)

// type or pressed key
const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`)


//if key exists
const isKeyExists = key

if (!isKeyExists) {
    return
}
addPlayingClass(key)
//play audio
playAudio(audioKeyCode)

function addPlayingClass(key){
    key.classList.toggle('playing')
}


}

// keyboard type
function getKeyCode(event){
    let keyCode;

const isKeyboard = event.type ==="keydown"
if (isKeyboard) {
    keyCode = event.keyCode
}else{
    keyCode = event.target.dataset.key
}
return keyCode
}

function playAudio(audioKeyCode){
    const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`)
audio.currentTime=0
audio.play();
}
function removePlayingClass(event){
   event.target.classList.remove('playing')
}

// type or pressed key 
keys.forEach(function (key) {
key.addEventListener('click',playNote)
key.addEventListener('transitionend', removePlayingClass)
})
//addEventListener é um escutador eventos
window.addEventListener("keydown", playNote)