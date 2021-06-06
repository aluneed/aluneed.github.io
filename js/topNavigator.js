function lsNav() {
    if(lsnavState == false) {
        document.getElementById("lsNav").style.width = "250px";
        lsnavState = true
    } else {
        document.getElementById("lsNav").style.width = "0";
        lsnavState = false;
    }
}

var lsnavState = false;