var category = new Array();
var div = document.querySelector(".categoryCardGrid");

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
            console.log(category);
        }
    };
    xhttp.onload = function () {
        setCategory(div);
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
        console.log(obj);
        if (i == 11 && document.title != "Job Categories")
            child += '<div class="categoryCard" onclick="window.location.replace ="category.html"><h3>+' + (category.length - 12) + '</h3><p>Explore all</p></div>';
        else
            child += '<div class="categoryCard" onclick="getJobs(' + obj.cid + ')"><img src="assets/images/web.svg" alt=""><h3>' + obj.name + '</h3><p>210 Jobs</p></div>';
    }
    parent.innerHTML = child;
}
