function githubRedirect() {
    window.location.href="https://github.com/Ultrabugs";
}

function clock() {
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    // if our hour, minute, second only contains 1 in length
    // We add 0 at the start of it.
    if(hour.toString().length == 1) {
        hour = '0'+hour;
    }
     if(minute.toString().length == 1) {
        minute = '0'+minute;
    }
     if(second.toString().length == 1) {
        second = '0'+second;
    }
    let timeNow = hour + ':' + minute +':' + second;
    return timeNow;

}

const bewgsyWaterMark = document.querySelector('.bewgsy');
const timer = document.querySelector('.clock');

bewgsyWaterMark.addEventListener('click', (githubRedirect));

const dateNow = new Date();

setInterval(function() {
    currentTime = clock();
    timer.textContent = currentTime;
}, 1000);



 