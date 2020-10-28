var dark=true;

//Form
const amerForm = document.getElementById('amerForm')
amerForm.addEventListener('submit', async(e)=>{
    e.preventDefault()

    const mainPanel = document.getElementById('feedBackPnl')
    mainPanel.style.opacity = 100;
    const loading = document.getElementById('loading')
    if(loading.classList.contains('hide')){
        loading.classList.remove('hide')
    }
    const stext = document.getElementById('sText')
    if(stext.classList.contains('hide')){
        stext.classList.remove('hide')
    }
    stext.innerHTML = "Please wait"

    await sleep(200)


    const amerData = new URLSearchParams(new FormData(amerForm))
    fetch('https://portfoliofeedback69.herokuapp.com/send', {method: 'post', body: amerData, mode: 'cors'})
    .then((res)=>{
        if(res.status == 200){
            showStatus(true);
        }else{
            showStatus(false);
        }
        return;
    }).catch((err)=>{
        showStatus(false);
        return;
    })
})

function showStatus(res){
    const okIco = document.getElementById('sIcoOk')
    const errorIco = document.getElementById('sIcoErr')
    const stext = document.getElementById('sText')
    const sBtn = document.getElementById('sBtn')
    const mainPanel = document.getElementById('feedBackPnl')

    const loading = document.getElementById('loading')
    if(!loading.classList.contains('hide')){
        console.log("None")
        //loading.style['display'] = 'none'
        loading.classList.add('hide')
    }
    
    if(res){
        if(okIco.classList.contains('hide')){
            okIco.classList.remove('hide')
        }
        if(!errorIco.classList.contains('hide')){
            errorIco.classList.add('hide')
        }
        stext.innerHTML = "Thank you for contacting with me"


        if(sBtn.classList.contains('hide')){
            sBtn.classList.remove('hide')
        }
        sBtn.innerHTML = "Close"
    }else{
        if(errorIco.classList.contains('hide')){
            errorIco.classList.remove('hide')
        }
        if(!okIco.classList.contains('hide')){
            okIco.classList.add('hide')
        }
        stext.innerHTML = "Something went wrong"

        if(sBtn.classList.contains('hide')){
            sBtn.classList.remove('hide')
        }
        sBtn.innerHTML = "Try Again"
    }
    mainPanel.style.opacity = 100;
    mainPanel.style.pointerEvents = 'visible'
    return;
}

function hideStatus(){
    const mainPanel = document.getElementById('feedBackPnl')
    const okIco = document.getElementById('sIcoOk')
    const errorIco = document.getElementById('sIcoErr')
    const stext = document.getElementById('sText')
    const sBtn = document.getElementById('sBtn')
    mainPanel.style.opacity = 0;
    mainPanel.style.pointerEvents = 'none'
    
    if(!okIco.classList.contains('hide')){
        okIco.classList.add('hide')
    }

    if(!errorIco.classList.contains('hide')){
        errorIco.classList.add('hide')
    }

    if(!stext.classList.contains('hide')){
        stext.classList.add('hide')
    }

    if(!sBtn.classList.contains('hide')){
        sBtn.classList.add('hide')
    }

    //Removing data from Form
    document.getElementById('fName').innerText = ''
    document.getElementById('fEmail').innerText = ''
    document.getElementById('fMessage').innerText = ''
    return;
}



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
    document.getElementById(activeSection).style["opacity"]="0";
    await sleep(180);
    document.getElementById(activeSection).style["display"]="none";
    document.getElementById(id).style["display"]="block";
    await sleep(100);
    document.getElementById(id).style["opacity"]="100";
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

const repos = [
    {
        org: false,
        user: "epicX67",
        repo: "documents_KrunkerResourceSwapper",
        download: {
            btntxt: 'Download',
            url: 'https://github.com/epicX67/documents_KrunkerResourceSwapper/archive/master.zip'
        }
    },
    {
        org: false,
        user: "epicX67",
        repo: "epicX67.github.io"
    },
    {
        org: true,
        user: "SHRP-Devices",
        repo: "device_coolpad_c103"
    },
    {
        org: true,
        user: "SKYHAWK-Recovery-Project",
        repo: "shrp_bootable_recovery"
    },
    {
        org: true,
        user: "SKYHAWK-Recovery-Project",
        repo: "shrp_build"
    },

    {
        org: true,
        user: "Xperiement",
        repo: "build_pc",
        download: {
            btntxt: 'Try',
            url: 'https://xperiement.github.io/build_pc/'
        }
    },

    {
        org: true,
        user: "SHRP-Devices",
        repo: "device_data"
    },


    {
        org: true,
        user: "SKYHAWK-Recovery-Project",
        repo: "shrp_theme_builder"
    },

    {
        org: true,
        user: "SKYHAWK-Recovery-Project",
        repo: "skyhawk-recovery-project.github.io",
        download: {
            btntxt: 'Visit',
            url: 'https://skyhawk-recovery-project.github.io'
        }
    },

    {
        org: true,
        user: "SKYHAWK-Recovery-Project",
        repo: "themeBuilder_extraResources",
        download: {
            btntxt: 'Download letest',
            url: 'https://github.com/SKYHAWK-Recovery-Project/themeBuilder_extraResources/archive/master.zip'
        }
    },
]

const myEmail = "souravgain605@gmail.com";
const orgName = "Sourav Gain"
const username = "epicX67"
var commits = []
const promises = []

getRecentActivity();

async function getRecentActivity(){
    const forLoop = async _ => {
        for (let i = 0; i < repos.length; i++) {
            var repoName = repos[i].repo
            var tmpObj = fetchAll('https://api.github.com/repos/' + repos[i].user + '/' + repos[i].repo + '/commits', repoName, repos[i].download)
            commits.push(tmpObj)
            
        }
    }
    try{
        await forLoop()
    }finally{
        Promise.all(commits).then((res)=>{
            commits = res
            for (let i = 0; i < commits.length - 1; i++) {
                for(let j = 0; j < commits.length - i - 1; j++){
                    if (!isNewer(commits[j+1].time, commits[j].time)) {
                        var tmp = commits[j+1];
                        commits[j+1] = commits[j];
                        commits[j] = tmp;
                    } else {
                    }
                }
            }
            for(let l = 0; l < commits.length; l++){
                renderCard(commits[l]);
            }
        })
    } 
}

async function fetchAll(url, repoName, downloadObj){
    let x = await fetch(url)
    let values = await x.json()
    for (let i = 0; i < values.length; i++) {
        if (values[i].commit.author.email == myEmail || values[i].commit.author.name == username || values[i].commit.author.email == orgName) {
            const value = {
                "repoName": repoName,
                "msg": values[i].commit.message,
                "url": values[i].html_url,
                "time": getTimeObj(values[i].commit.author.date),
                "download": downloadObj
            }
            return value;
        }
    }
}

function renderCard(data){
    var list = document.getElementById('recentList');

    var card = document.createElement('div');
    card.classList.add("card")
    

    var commitTime = document.createElement('div');
    commitTime.classList.add("commitTime")
    commitTime.innerHTML = getTime(data.time);

    var repoName = document.createElement('div');
    repoName.classList.add("repoName")
    repoName.innerHTML = data.repoName;

    var commitName = document.createElement('div');
    commitName.classList.add("commitName")
    commitName.innerHTML = data.msg

    var a = document.createElement('a');
    a.classList.add("commitLink", "blueColor", "blueBtn")
    a.innerHTML = "Open"
    a.setAttribute('target', 'blank')
    a.setAttribute('href', data.url)

    card.appendChild(commitTime)
    card.appendChild(repoName)
    card.appendChild(commitName)
    card.appendChild(a)

    if(data.download){
        var b = document.createElement('a');
        b.classList.add("commitLink", "blueColor", "blueBtn")
        b.innerHTML = data.download.btntxt
        b.setAttribute('href', data.download.url)
        b.setAttribute('target', 'blank')
        card.appendChild(b)
    }
    list.appendChild(card)
}


function isNewer(t1, t2){
    // {
    //     "year" : dateData[0],
    //     "month" : dateData[1],
    //     "date" : dateData[2],
    //     "hour" : timeData[0],
    //     "minute" : timeData[1],
    //     "second" : timeData[2],
    // }

    if(t1.year != t2.year){
        return t1.year < t2.year ? true : false;
    }

    if(t1.month != t2.month){
        return t1.month < t2.month ? true : false;
    }

    if(t1.date != t2.date){
        return t1.date < t2.date ? true : false;
    }

    if(t1.hour != t2.hour){
        return t1.hour < t2.hour ? true : false;
    }

    if(t1.minute != t2.minute){
        return t1.minute < t2.minute ? true : false;
    }

    return t1.second < t2.second ? true : false;
}


function getTimeObj(commitTime){
    var tmp,tmp2;
    var date = commitTime.substring(0, commitTime.indexOf('T'));
    var dateData = date.split('-')
    var time = commitTime.substring(commitTime.indexOf('T') + 1, commitTime.indexOf('Z'));
    var timeData = time.split(':')

    return ({
        "year" : dateData[0],
        "month" : dateData[1],
        "date" : dateData[2],
        "hour" : timeData[0],
        "minute" : timeData[1],
        "second" : timeData[2],
    })
    //Year month date
    //Hour mint sec
}

function getTime(T){



    var today = new Date();
    var currYear = today.getUTCFullYear();
    var currMonth = today.getUTCMonth()+1;
    var currDay = today.getUTCDate();

    var currHour = today.getUTCHours();
    var currMinute = today.getUTCMinutes();
    var currSecond = today.getUTCSeconds();


    
    if(currYear - T.year != 0){
        return ((currYear - T.year) + (currYear - T.year == 1 ? " year ago" : " years ago"))
    }

    if(currMonth - T.month != 0){
        return ((currMonth - T.month) + (currMonth - T.month == 1 ? " month ago" :  " months ago"))
    }

    if(currDay - T.date != 0){
        return ((currDay - T.date) + (currDay - T.date == 1 ? " day ago" : " days ago"))
    }


    if(currHour - T.hour != 0){
        return ((currHour - T.hour) + (currHour - T.hour == 1 ? " h ago" : " hrs ago"))
    }

    if(currMinute - T.minute != 0){
        return ((currMinute - T.minute) + (currMinute - T.minute == 1 ? " min ago" : " mins ago"))
    }

    if(currSecond - T.second != 0){
        return ((currSecond - T.second) + (currSecond - T.second == 1 ? " sec ago" : " secs ago"))
    }

    //Year month date
    //Hour mint sec
}
