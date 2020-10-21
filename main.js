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
const myEmail = "souravgain605@gmail.com";
const orgName = "Sourav Gain"
const username = "epicX67"
getRecentActivity();

function getRecentActivity(){
    const repos = [
        {
            org: false,
            user: "epicX67",
            repo: "documents_KrunkerResourceSwapper"
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
    ]


    const data = fetchData(repos);
}

function fetchData(repos){
    var data;

    for(i = 0; i < repos.length; i++){
        var repoName = repos[i].repo;
        processNext('https://api.github.com/repos/' + repos[i].user + '/' + repos[i].repo + '/commits', repoName)
    }
}

function processNext(url, repoName){
    fetch(url)
    .then(res =>{
        res.json()
        .then(values=>{
            console.log(repoName)
            filterData(values, repoName);
        })
    })

}

function filterData(data, repoName){
    var j = 0;
    for(i = 0; i < data.length; i++){
        if(data[i].commit.author.email == myEmail || data[i].commit.author.name == username || data[i].commit.author.email == orgName){
            renderCard(data[i], repoName);
            return;
        }
    }
}


function renderCard(data, repoN){
    var list = document.getElementById('recentList');

    var card = document.createElement('div');
    card.classList.add("card")
    

    var commitTime = document.createElement('div');
    commitTime.classList.add("commitTime")
    commitTime.innerHTML = getTime(data.commit.author.date);

    var repoName = document.createElement('div');
    repoName.classList.add("repoName")
    repoName.innerHTML = repoN;

    var commitName = document.createElement('div');
    commitName.classList.add("commitName")
    commitName.innerHTML = data.commit.message

    var a = document.createElement('a');
    a.classList.add("commitLink", "blueColor", "blueBtn")
    a.innerHTML = "Open"
    a.setAttribute('href', data.html_url)

    card.appendChild(commitTime)
    card.appendChild(repoName)
    card.appendChild(commitName)
    card.appendChild(a)
    list.appendChild(card)
}

function getRepoName(x){
    return x.substring(29, x.indexOf('/', 30));
}

function getTime(commitTime){
    var tmp,tmp2;
    var date = commitTime.substring(0, commitTime.indexOf('T'));
    var dateData = date.split('-')
    var time = commitTime.substring(commitTime.indexOf('T') + 1, commitTime.indexOf('Z'));
    var timeData = time.split(':')





    var today = new Date();
    var currYear = today.getFullYear();
    var currMonth = today.getMonth()+1;
    var currDay = today.getDate();

    var currHour = today.getHours();
    var currMinute = today.getMinutes();
    var currSecond = today.getSeconds();


    
    if(currYear - dateData[0] != 0){
        return (currYear - dateData[0]) + " years ago"
    }

    if(currMonth - dateData[1] != 0){
        return (currMonth - dateData[1]) + " months ago"
    }

    if(currDay - dateData[2] != 0){
        return (currDay - dateData[2]) + " days ago"
    }


    if(currHour - timeData[0] != 0){
        return (currHour - timeData[0]) + "h ago"
    }

    if(currMinute - timeData[1] != 0){
        return (currMinute - timeData[1]) + "min ago"
    }

    if(currSecond - timeData[2] != 0){
        return (currSecond - timeData[2]) + "sec ago"
    }

    //Year month date
    //Hour mint sec
}

// const ref = {
//     "sha": "81c1bb37bb45f6c48c7bdf2f6e4b06f8105af12b",
//     "node_id": "MDY6Q29tbWl0MjA3NTkzODgwOjgxYzFiYjM3YmI0NWY2YzQ4YzdiZGYyZjZlNGIwNmY4MTA1YWYxMmI=",
//     "commit": {
//       "author": {
//         "name": "Giovanni Gualtieri",
//         "email": "ggualtierone@gmail.com",
//         "date": "2020-10-13T07:40:28Z"
//       },
//       "committer": {
//         "name": "GitHub",
//         "email": "noreply@github.com",
//         "date": "2020-10-13T07:40:28Z"
//       },
//       "message": "Merge pull request #33 from corsicanu/android-9.0\n\nMerge teamwin/android_bootable_recovery",
//       "tree": {
//         "sha": "27de2985e68a6b76aed4494f930c3be9c8020ac6",
//         "url": "https://api.github.com/repos/SKYHAWK-Recovery-Project/shrp_bootable_recovery/git/trees/27de2985e68a6b76aed4494f930c3be9c8020ac6"
//       },
//       "url": "https://api.github.com/repos/SKYHAWK-Recovery-Project/shrp_bootable_recovery/git/commits/81c1bb37bb45f6c48c7bdf2f6e4b06f8105af12b",
//       "comment_count": 0,
//       "verification": {
//         "verified": true,
//         "reason": "valid",
//         "signature": "-----BEGIN PGP SIGNATURE-----\n\nwsBcBAABCAAQBQJfhVnsCRBK7hj4Ov3rIwAAdHIIADwhow6LAU6CAku0slnnw6Qq\nZr+IqbOx+WAv5asLtXs8+PABK2lv5ai0yKnPn8SQh64G+osHNadx72V/zkSMdeIc\nSBdg1acVlI+JrItpupolwSF8CUo8JuyFudo/qSTD3t4U17ShIWl2vyakdUFHITAX\nkMZR/I6C1h9fPXZyiDjIWgT0Zx4OUKL7DOyV4PvAThYJR7Q5LLvVnJtmkzVnEc5o\nSYWjIm5EW4vXeC92j1qHQxf4x85Zg+NLdYcv+X+qB4unqLOqLMgI4fxVmAze9NQr\n1u/+0581NCUUAgf+mqHOezqOPUpADcJ5ynxdv1duglY7JAToT1/P69AofUpxEhA=\n=da4E\n-----END PGP SIGNATURE-----\n",
//         "payload": "tree 27de2985e68a6b76aed4494f930c3be9c8020ac6\nparent 8e868908f1697e1844bf14856b9753da66459403\nparent c2da625a44dc795b84247ace1aa582e3ef8dac77\nauthor Giovanni Gualtieri <ggualtierone@gmail.com> 1602574828 +0200\ncommitter GitHub <noreply@github.com> 1602574828 +0200\n\nMerge pull request #33 from corsicanu/android-9.0\n\nMerge teamwin/android_bootable_recovery"
//       }
//     },
//     "url": "https://api.github.com/repos/SKYHAWK-Recovery-Project/shrp_bootable_recovery/commits/81c1bb37bb45f6c48c7bdf2f6e4b06f8105af12b",
//     "html_url": "https://github.com/SKYHAWK-Recovery-Project/shrp_bootable_recovery/commit/81c1bb37bb45f6c48c7bdf2f6e4b06f8105af12b",
//     "comments_url": "https://api.github.com/repos/SKYHAWK-Recovery-Project/shrp_bootable_recovery/commits/81c1bb37bb45f6c48c7bdf2f6e4b06f8105af12b/comments",
//     "author": {
//       "login": "Giovix92",
//       "id": 19226770,
//       "node_id": "MDQ6VXNlcjE5MjI2Nzcw",
//       "avatar_url": "https://avatars0.githubusercontent.com/u/19226770?v=4",
//       "gravatar_id": "",
//       "url": "https://api.github.com/users/Giovix92",
//       "html_url": "https://github.com/Giovix92",
//       "followers_url": "https://api.github.com/users/Giovix92/followers",
//       "following_url": "https://api.github.com/users/Giovix92/following{/other_user}",
//       "gists_url": "https://api.github.com/users/Giovix92/gists{/gist_id}",
//       "starred_url": "https://api.github.com/users/Giovix92/starred{/owner}{/repo}",
//       "subscriptions_url": "https://api.github.com/users/Giovix92/subscriptions",
//       "organizations_url": "https://api.github.com/users/Giovix92/orgs",
//       "repos_url": "https://api.github.com/users/Giovix92/repos",
//       "events_url": "https://api.github.com/users/Giovix92/events{/privacy}",
//       "received_events_url": "https://api.github.com/users/Giovix92/received_events",
//       "type": "User",
//       "site_admin": false
//     },
//     "committer": {
//       "login": "web-flow",
//       "id": 19864447,
//       "node_id": "MDQ6VXNlcjE5ODY0NDQ3",
//       "avatar_url": "https://avatars3.githubusercontent.com/u/19864447?v=4",
//       "gravatar_id": "",
//       "url": "https://api.github.com/users/web-flow",
//       "html_url": "https://github.com/web-flow",
//       "followers_url": "https://api.github.com/users/web-flow/followers",
//       "following_url": "https://api.github.com/users/web-flow/following{/other_user}",
//       "gists_url": "https://api.github.com/users/web-flow/gists{/gist_id}",
//       "starred_url": "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
//       "subscriptions_url": "https://api.github.com/users/web-flow/subscriptions",
//       "organizations_url": "https://api.github.com/users/web-flow/orgs",
//       "repos_url": "https://api.github.com/users/web-flow/repos",
//       "events_url": "https://api.github.com/users/web-flow/events{/privacy}",
//       "received_events_url": "https://api.github.com/users/web-flow/received_events",
//       "type": "User",
//       "site_admin": false
//     },
//     "parents": [
//       {
//         "sha": "8e868908f1697e1844bf14856b9753da66459403",
//         "url": "https://api.github.com/repos/SKYHAWK-Recovery-Project/shrp_bootable_recovery/commits/8e868908f1697e1844bf14856b9753da66459403",
//         "html_url": "https://github.com/SKYHAWK-Recovery-Project/shrp_bootable_recovery/commit/8e868908f1697e1844bf14856b9753da66459403"
//       },
//       {
//         "sha": "c2da625a44dc795b84247ace1aa582e3ef8dac77",
//         "url": "https://api.github.com/repos/SKYHAWK-Recovery-Project/shrp_bootable_recovery/commits/c2da625a44dc795b84247ace1aa582e3ef8dac77",
//         "html_url": "https://github.com/SKYHAWK-Recovery-Project/shrp_bootable_recovery/commit/c2da625a44dc795b84247ace1aa582e3ef8dac77"
//       }
//     ]
//   },


  
// var today = new Date();
// var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
// var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
// var dateTime = date+' '+time;
//2018-8-3 11:12:40