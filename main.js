function sleep(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
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
    var sections=["introduction","education","work","email"];
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

    //var x=document.querySelectorAll('.enabled');
    //for(var i=0;i<x.length;i++){
    //    x[i].style.color=color;
    //}
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