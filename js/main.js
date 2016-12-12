function removeTransition(e) {
    if(e.propertyName != 'transform') return; //Skip if is not a transform
    this.classList.remove('playing');
}

function playSound(e) {  
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; //Stop the function of running all together
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}


const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown',playSound);
