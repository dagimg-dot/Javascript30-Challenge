function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if(!audio) return; // this stops the function if the desired key is not down
    audio.currentTime = 0; //this rewinds the playtim of the sound in case he click it many times before finishing the previous one
    audio.play();
    key.classList.add('playing')
}
function removeTransition(e) {
    if (e.propertyName !== 'transform') return
    this.classList.remove('playing')
}
const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend', removeTransition))
window.addEventListener('keydown',playSound);