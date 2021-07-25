function clickMenuButton() {
    if(menuButtonState == false) {
        document.getElementById("lsNav").style.width = "250px";
        menuButtonState = true
    } else {
        document.getElementById("lsNav").style.width = "0";
        menuButtonState = false;
    }
}

var menuButtonState = false;