const container = document.querySelector('.container');
const text = document.querySelector('#text');

// The complete rotation of the pointer is 7.5 seconds
const totalTime = 7500;
const breathTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

function breathAnimation(){
    text.innerHTML = 'Breath In!';
    container.className = 'container grow';

    setTimeout(()=>{
        text.innerText = 'Hold';

        setTimeout(()=>{
            text.innerText = 'Breathe Out!';
            container.className = 'container shrink';
        }, holdTime )
    }, breathTime);
}

setInterval(breathAnimation, totalTime);