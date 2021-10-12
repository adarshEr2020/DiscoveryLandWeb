console.log("hello header.js");
document.getElementById("header").innerHTML = `
<header>
    <a href="" class="logo-content" id="logo-div">
        <img src="./src/assets/logo.svg" alt="logo" class="img-tag">
    </a>

    <ul class="nav-items" id="nav-items">
        <li class="nav-link">
            <a href="../src/pages/aboutDLC.html">About DLC</a>
        </li>
        <li class="nav-link">
            <a href="../src/pages/ourWorlds.html">Our Worlds</a>
        </li>
        <li class="nav-link">
            <a href="../src/pages/experinces.html">Experiences</a>
        </li>
        <li class="nav-link">
            <a href="../src/pages/gallery.html">Gallery</a>
        </li>
        <li class="nav-link">
            <a href="">Press</a>
        </li>
    </ul>

    <div class="dropdown">
        <a href="javascript:void(0);" onclick="myFunction()" class="drpdwn-btn"><i class="fa fa-bars"></i>
        </a>
    </div>
</header>

<div id="menu" class="menu-content">
    <div class="logo-btn">
        <a href="/Home.html" class="logo-content">
            <img src="./src/assets/logo.svg" alt="logo">
        </a>
        <div class="dropdown">
        <a href="javascript:void(0);" onclick="myFunction()" class="drpdwn-btn"><i class="fa fa-bars"></i>
        </a>
    </div>
</div>
<div class="a-div">
    <a class="drpdwn-a" href="../pages/magazine.html">Magazine</a>
</div>
<div class="a-div">
    <a class="drpdwn-a" href="../pages/company.html">Company</a>
</div>
<div class="a-div">
    <a class="drpdwn-a" href="../pages/foundation.html">Foundation</a>
</div>
<div class="a-div">
    <a class="drpdwn-a" href="../pages/careers.html">Careers</a>
</div>
<div class="a-div">
    <a class="drpdwn-a" href="../pages/contact.html">Contact</a>
</div>
</div>`;

function myFunction() {
var drpdwn = document.getElementById("menu");
if (drpdwn.style.display === "block") {
document.getElementById("logo-div").style.display = "flex"
document.getElementById("nav-items").style.display = "flex";
drpdwn.style.display = "none";
} else {
document.getElementById("nav-items").style.display = "none";
drpdwn.style.display = "block";
document.getElementById("logo-div").style.display = "none"

}
}