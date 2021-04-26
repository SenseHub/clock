function clock() {
    const H = new Date().getHours();
    const M = new Date().getMinutes();
    const S = new Date().getSeconds();

    const hours = document.getElementById("Hours");
    const minutes = document.getElementById("Minutes");
    const seconds = document.getElementById("Seconds");

    if (H < 10) {
        hours.innerHTML = "0" + H;
    } else {
        hours.innerHTML = H;
    }
    if (M < 10) {
        minutes.innerHTML ="0" + M;
    } else {
        Minutes.innerHTML = M;
    }
    if (S < 10) {
        seconds.innerHTML = "0" + S;
    } else {
        seconds.innerHTML = S;
    }
}

const interval = setInterval(clock, 1000);