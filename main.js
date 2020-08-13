function sleep(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}

function link(index){
    var links=[
        "http://www.ecmt.in/",//College Site
        "https://skyhawkrecovery.github.io/", //SHRP Site
        "https://github.com/SKYHAWK-Recovery-Project/shrp_theme_builder/releases", //SHRP Theme builder releases
        "https://github.com/epicX67/flutterApp_RPSGame", // Simple RPS Game
        "https://www.github.com/epicX67", //Krunker Ui Mod

        "https://drive.google.com/open?id=1qBjhQff5f7znv91xsdM4dr15kQyTg0Tu", //Archives for cool 1 dual
        "https://mega.nz/folder/KdYCXYRL#Z-qJy_ci8Z7Kz1hXLu3XBA", //Archives for Flame 6
        "https://mega.nz/folder/mMJi0aqJ#iL4wCX75M64WTuLXrAQ0uA", //Archives for modding guides

        "https://t.me/epicx67", //Telegram Acc
        "https://www.youtube.com/c/epicspicy?sub_confirmation=1", //Youtube Channel
        "https://www.github.com/epicX67", //Github Acc
        "",

]
    window.open(links[index]);
}

async function changeSection(id){
    var activeSection=getActiveSection();
    if(activeSection==id){
        return;
    }
    document.getElementById(activeSection).style["opacity"]="0%";
    await sleep(180);
    document.getElementById(activeSection).style["display"]="none";
    document.getElementById(id).style["display"]="block";
    await sleep(100);
    document.getElementById(id).style["opacity"]="100%";
}

function getActiveSection(){
    var sections=["introduction","education","work","follow","email"];
    for(var i=0;i<sections.length;i++){
        if(document.getElementById(sections[i]).style.display!="none"){
            return sections[i];
        }
    }
}
function getColor(id){
    if(id=="introduction"){
        return "blueColor";
    }else if(id=="education"){
        return "greenColor";
    }else if(id=="work"){
        return "pinkColor";
    }else if(id=="follow"){
        return "redColor";
    }else if(id=="email"){
        return "orangeColor";
    }
}

function test(id,Container,Ico,Label){
    removeStatus();
    var color=getColor(id);

    document.getElementById(Container).classList.add("enabledPanel");
    document.getElementById(Ico).classList.add(color);
    document.getElementById(Label).classList.add(color);


    changeSection(id);
}
function removeStatus(){
    document.getElementById("introCon").classList.remove("enabledPanel");
    removeColorAttributes('introIco');
    removeColorAttributes('introLabel');
    document.getElementById("eduCon").classList.remove("enabledPanel");
    removeColorAttributes('eduIco');
    removeColorAttributes('eduLabel');
    document.getElementById("workCon").classList.remove("enabledPanel");
    removeColorAttributes('workIco');
    removeColorAttributes('workLabel');
    document.getElementById("followCon").classList.remove("enabledPanel");
    removeColorAttributes('followIco');
    removeColorAttributes('followLabel');
    document.getElementById("emailCon").classList.remove("enabledPanel");
    removeColorAttributes('emailIco');
    removeColorAttributes('emailLabel');
}
function removeColorAttributes(id){
    var colors=["blueColor","greenColor","orangeColor","redColor","purpleColor","pinkColor"];
    for(var i=0; i<colors.length;i++){
        if(document.getElementById(id).classList.contains(colors[i])){
            document.getElementById(id).classList.remove(colors[i]);
        }
    }
}