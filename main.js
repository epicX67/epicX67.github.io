function onNav(){
    document.getElementById("buttonLayout").style["height"]="190px";
    document.getElementById("button1").style["visibility"]="visible";
    document.getElementById("button2").style["visibility"]="visible";
    document.getElementById("button3").style["visibility"]="visible";
    document.getElementById("button4").style["visibility"]="visible";
    document.getElementById("button1").style["opacity"]="100%";
    document.getElementById("button2").style["opacity"]="100%";
    document.getElementById("button3").style["opacity"]="100%";
    document.getElementById("button4").style["opacity"]="100%";
    document.getElementById("onSwitcher").style["visibility"]="hidden";
    document.getElementById("onSwitcher").style["opacity"]="none";
    document.getElementById("offSwitcher").style["visibility"]="visible";
    document.getElementById("offSwitcher").style["opacity"]="100%";
}

function offNav() {
    document.getElementById("buttonLayout").style["height"]="0px";
    document.getElementById("button1").style["visibility"]="hidden";
    document.getElementById("button2").style["visibility"]="hidden";
    document.getElementById("button3").style["visibility"]="hidden";
    document.getElementById("button4").style["visibility"]="hidden";
    document.getElementById("button1").style["opacity"]="0%";
    document.getElementById("button2").style["opacity"]="0%";
    document.getElementById("button3").style["opacity"]="0%";
    document.getElementById("button4").style["opacity"]="0%";
    document.getElementById("onSwitcher").style["opacity"]="100%";
    document.getElementById("onSwitcher").style["visibility"]="visible";
    document.getElementById("offSwitcher").style["opacity"]="0%";
    document.getElementById("offSwitcher").style["visibility"]="hidden";
}