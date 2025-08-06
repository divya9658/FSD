function fun() {
    var time = window.prompt("Set Timer for: ");
    var interval = setInterval(function () {
        time = time - 1;
        document.getElementsByClassName("minutes")[0].innerText = parseInt(time / 60);
        document.getElementsByClassName("seconds")[0].innerText = parseInt(time % 60);
    }, 1000);
    setTimeout(function () {
        clearInterval(interval);
        window.alert("The timer you set is finished!!");
    }, time * 1000);
}
