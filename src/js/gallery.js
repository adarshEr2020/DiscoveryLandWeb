let obj = [
    { imgpath: "../assets/gallery/outdoor.jpg", tag: "Outdoor Pursuits" },
    { imgpath: "../assets/gallery/golf.jpg", tag: "Golf" },
    { imgpath: "../assets/gallery/lifestyle.jpeg", tag: "Lifestyle" },
    { imgpath: "../assets/gallery/landscapes.jpg", tag: "Landscapes" },
    { imgpath: "../assets/gallery/clubhouse.jpg", tag: "Clubhouse" },
    { imgpath: "../assets/gallery/wellness.jpg", tag: "Wellness" },
]

function settingInnerHtml(item) {
    let string = '<a class="box" href="#"><div><img class="image" src=" ' + item.imgpath + '"></div><p> ' + item.tag + '</p></a>';
    return string;
}

document.getElementById("gallery-photos").innerHTML = obj.map(settingInnerHtml).join("");