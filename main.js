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


function test(id,Container,Ico,Label){
    removeStatus();

    document.getElementById(Container).classList.add("enabled");
    document.getElementById(Ico).classList.add("enabled");
    document.getElementById(Label).classList.add("enabled");
    changeSection(id);
}
function removeStatus(){
    document.getElementById("introCon").classList.remove("enabled");
    document.getElementById("introIco").classList.remove("enabled");
    document.getElementById("introLabel").classList.remove("enabled");
    document.getElementById("eduCon").classList.remove("enabled");
    document.getElementById("eduIco").classList.remove("enabled");
    document.getElementById("eduLabel").classList.remove("enabled");
    document.getElementById("workCon").classList.remove("enabled");
    document.getElementById("workIco").classList.remove("enabled");
    document.getElementById("workLabel").classList.remove("enabled");
    document.getElementById("emailCon").classList.remove("enabled");
    document.getElementById("emailIco").classList.remove("enabled");
    document.getElementById("emailLabel").classList.remove("enabled");
}