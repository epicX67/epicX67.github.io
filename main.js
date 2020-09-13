var dark=true;

function switchMode(){
    if(dark){
        document.getElementById("switchMode").innerHTML='<i class="fas fa-lightbulb"></i>';
        document.documentElement.style.setProperty("--primary-background-color" , "#f8f8f8");
        document.documentElement.style.setProperty("--secondary-background-color" , "#f3f3f3");

        document.documentElement.style.setProperty("--button-bg-color" , "#eaeaea");
        document.documentElement.style.setProperty("--button-border-color" , "#e0e0e0");

        document.documentElement.style.setProperty("--basic-text-color" , "#303030");
        document.documentElement.style.setProperty("--disabled-ico-color" , "#3f546f");


        document.documentElement.style.setProperty("--light-blue-color" , "#2196F3");
        document.documentElement.style.setProperty("--light-green-color" , "#4CAF50");
        document.documentElement.style.setProperty("--light-orange-color" , "#FF9800");
        document.documentElement.style.setProperty("--light-red-color" , "#F44336");
        document.documentElement.style.setProperty("--light-purple-color" , "#4e41ff");
        document.documentElement.style.setProperty("--light-pink-color" , "#ff34c2");

        document.documentElement.style.setProperty("--light-semi-blue-color" , "#2196F3");
        document.documentElement.style.setProperty("--light-semi-green-color" , "#4CAF50");
        document.documentElement.style.setProperty("--light-semi-orange-color" , "#FF9800");
        document.documentElement.style.setProperty("--light-semi-red-color" , "#ff3e31");
        document.documentElement.style.setProperty("--light-semi-purple-color" , "#4e41ff");
        document.documentElement.style.setProperty("--light-semi-pink-color" , "#ff34c2");


        document.documentElement.style.setProperty("--nameFilter" , "invert(41%) sepia(62%) saturate(5332%) hue-rotate(297deg) brightness(103%) contrast(101%)");
        document.documentElement.style.setProperty("--emailFilter" , "invert(21%) sepia(79%) saturate(3700%) hue-rotate(242deg) brightness(100%) contrast(103%)");
        document.documentElement.style.setProperty("--msgFilter" , "invert(55%) sepia(62%) saturate(416%) hue-rotate(73deg) brightness(94%) contrast(91%)");
        dark=false;
    }else{
        document.getElementById("switchMode").innerHTML='<i class="far fa-lightbulb">';
        document.documentElement.style.setProperty("--primary-background-color" , "#232931");
        document.documentElement.style.setProperty("--secondary-background-color" , "#292F39");

        document.documentElement.style.setProperty("--button-bg-color" , "#323B49");
        document.documentElement.style.setProperty("--button-border-color" , "#2E3746");

        document.documentElement.style.setProperty("--basic-text-color" , "#E3E3E3");
        document.documentElement.style.setProperty("--disabled-ico-color" , "#637183");

        document.documentElement.style.setProperty("--light-blue-color" , "#BDF3FF");
        document.documentElement.style.setProperty("--light-green-color" , "#bdffdb");
        document.documentElement.style.setProperty("--light-orange-color" , "#ffeabd");
        document.documentElement.style.setProperty("--light-red-color" , "#ffc1bd");
        document.documentElement.style.setProperty("--light-purple-color" , "#c1bdff");
        document.documentElement.style.setProperty("--light-pink-color" , "#ffbdeb");

        document.documentElement.style.setProperty("--light-semi-blue-color" , "#bdf3ffa4");
        document.documentElement.style.setProperty("--light-semi-green-color" , "#bdffdba4");
        document.documentElement.style.setProperty("--light-semi-orange-color" , "#ffeabda4");
        document.documentElement.style.setProperty("--light-semi-red-color" , "#ffc1bda4");
        document.documentElement.style.setProperty("--light-semi-purple-color" , "#c1bdffa4");
        document.documentElement.style.setProperty("--light-semi-pink-color" , "#ffbdeba4");

        document.documentElement.style.setProperty("--nameFilter" , "invert(71%) sepia(31%) saturate(579%) hue-rotate(292deg) brightness(114%) contrast(106%)");
        document.documentElement.style.setProperty("--emailFilter" , "invert(71%) sepia(6%) saturate(1807%) hue-rotate(204deg) brightness(104%) contrast(105%)");
        document.documentElement.style.setProperty("--msgFilter" , "invert(89%) sepia(24%) saturate(401%) hue-rotate(83deg) brightness(103%) contrast(104%)");
        dark=true;
    }
}


function sleep(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}

function link(index){
    var links=[
        "http://www.ecmt.in/",//College Site
        "https://skyhawkrecovery.github.io/", //SHRP Site
        "https://github.com/SKYHAWK-Recovery-Project/shrp_theme_builder/releases", //SHRP Theme builder releases
        "https://github.com/epicX67/flutterApp_RPSGame", // Simple RPS Game
        "https://www.github.com/epicX67/documents_KrunkerResourceSwapper", //Krunker Ui Mod

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