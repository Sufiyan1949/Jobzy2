var category = new Array();
var jobList = new Array();


function loadData() {
    const xhttp = new XMLHttpRequest();
    xhttp.open("POST", "PhpApi-master/site/categories.php", true);
    xhttp.send();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const obj = JSON.parse(this.responseText);
            obj.forEach(element => {
                category.push({
                    cid: element.cid,
                    name: element.name,
                    img: element.img
                });
            });
        }
    };
    xhttp.onload = function () {
        if (document.title == "Jobs") {
            setOtherCategory(document.querySelector(".sideCategoryContainer"));
        }
        else if (document.title == "Jobzy: Search Jobs and Internship" || document.title == "Job Categories")
            setCategory(document.querySelector(".categoryCardGrid"));
    }

}

loadData();

function setCategory(parent) {
    var child = "";
    var len = ((category.length >= 12) ? 12 : category.length);
    if (document.title == "Job Categories")
        len = category.length;

    for (let i = 0; i < len; i++) {
        const obj = category[i];
        if (i == 11 && document.title != "Job Categories")
            child += '<div class="categoryCard" onclick="window.location.href ="category.html"><h3>+' + (category.length - 12) + '</h3><p>Explore all</p></div>';
        else
            child += `<div class="categoryCard" onclick="getJobs(${obj.cid})"><img src="assets/images/web.svg" alt=""><h3>${ obj.name}</h3><p>210 Jobs</p></div>`;
    }
    parent.innerHTML = child;
}

function setOtherCategory(parent) {
    var child = "<h3>Other Categories</h3>";
    var len = category.length;

    for (let i = 0; i < len; i++) {
        const obj = category[i];
        child += '<div class="otherCategoryCard" onclick="getJobs(1)"><div class="flex"><img src="assets/images/web.svg" alt=""><div class="text"><h3>' + obj.name + '</h3><p>210 Jobs</p></div></div></div>';
    }
    parent.innerHTML = child;




    var isSideCategoryScroll = false;
    var isJobListScroll = false;
    var leftDiv = document.getElementById('left');
    var rightDiv = document.getElementById('right');


    leftDiv.onscroll = function () {
        if (!isSideCategoryScroll) {
            isJobListScroll = true;
            rightDiv.scrollTop = this.scrollTop;
        }
        isSideCategoryScroll = false;
    }

    rightDiv.onscroll = function () {
        if (!isJobListScroll) {
            isSideCategoryScroll = true;
            leftDiv.scrollTop = this.scrollTop;
        }
        isJobListScroll = false;
    }
}



function searchJobsUsingCategory(cid) {
    list = new Array();
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "PhpApi-master/site/getcategorysjob.php?cid=" + cid, true);
    xhttp.send();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const obj = JSON.parse(this.responseText);
            obj.forEach(element => {
                list.push({
                    jid: element.jid,
                    title: element.title,
                    description: element.description,
                    duration: element.duration,
                    location: element.location,
                    company_name: element.company_name,
                    skills: element.skills,
                    links: element.links,
                    publishedOn: element.publishedOn,
                    cid: element.cid
                });
            });
        }
    };
    xhttp.onload = function () {
        //setCategory(div);
    }
}
function searchJobs(parameters) {
    jobList = new Array();
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "PhpApi-master/site/getjobs.php?title=" + parameters["title"] + "&location=" + parameters["location"], true);
    xhttp.send();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const obj = JSON.parse(this.responseText);
            console.log(this.responseText);
            obj.forEach(element => {
                jobList.push({
                    jid: element.jid,
                    title: element.title,
                    description: element.description,
                    duration: element.duration,
                    location: element.location,
                    company_name: element.company_name,
                    skills: element.skills,
                    links: element.links,
                    publishedOn: element.publishedOn,
                    cid: element.cid
                });
            });
        }
    };
    xhttp.onload = function () {
        setJobs();
    }
}


function getJobs(cid) {
    console.log(cid);
    alert(cid);
    jobList = new Array();
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "PhpApi-master/site/getcategorysjob.php?cid=" + cid, true);
    xhttp.send();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const obj = JSON.parse(this.responseText);
            obj.forEach(element => {
                jobList.push({
                    jid: element.jid,
                    title: element.title,
                    description: element.description,
                    duration: element.duration,
                    location: element.location,
                    company_name: element.company_name,
                    skills: element.skills,
                    links: element.links,
                    publishedOn: element.publishedOn,
                    cid: element.cid
                });
            });
        }
    };
    xhttp.onload = function () {
        setJobs();
    }
}


function setJobs() {
    var child = "<h3>Jobs</h3>";
    var len = jobList.length;
    console.log(len);
    for (let i = 0; i < len; i++) {
        const obj = jobList[i];
        var skills = obj.skills.split(",");
        var sk = "";
        skills.forEach(str => {
            sk += `<p class="skills">${str}</p>`;
        })
        child += `<div class="popularJobsCard ">
        <div class="upperContainer flex">
            <div class="text">
                <h3>${obj.title}</h3>
                <h5>${obj.company_name}</h5>
                <div class="flex">
                    <img class="location" src="assets/images/location.svg" alt="icon location">
                    <p>${obj.location}</p>
                </div>
                <div class="flex">
                    <p>${obj.publishedOn}</p>
                </div>
            </div>
            <div class="brandIcon">

            </div>
        </div>
        <div class="lowerContainer">
            <p>${obj.description}</p>
            <div class="skillsContainer flex">
                ${sk}
            </div>
        </div>
    </div>`;
    }
    document.querySelector(".jobsListContainer").innerHTML = child;
}







function signup(email, pass, cpass) {
    const xhttp = new XMLHttpRequest();
    xhttp.open("POST", "PhpApi-master/site/Registeruser.php", true);
    xhttp.send();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
        }
    };
    xhttp.onload = function () {

    }
}
