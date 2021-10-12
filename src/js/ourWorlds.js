let obj = [
    { imgpath: "../assets/ourWorld/northShore.jpg", headtag: "North Shore Preserve" ,tag:"Kaua'i, Hawaii"},
    { imgpath: "../assets/ourWorld/jamesIsland.jpg", headtag: "James Island" ,tag:"Southern Gulf Islands, British Columbia, Canada"},
    { imgpath: "../assets/ourWorld/playaGrande.jpg", headtag: "Costeterra" ,tag:"Comporta, Portugal"},
    { imgpath: "../assets/ourWorld/gozzerRanch.jpg", headtag: "Barbuda Ocean Club" ,tag:"Barbuda, West Indies"},
    { imgpath: "../assets/ourWorld/hideaway.jpg", headtag: "Driftwood" ,tag:"Austin, Texas"},
    { imgpath: "../assets/ourWorld/makenaAndy.jpg", headtag: "Troubadour" ,tag:"Nashville, Tennessee"},
    { imgpath: "../assets/ourWorld/playaGrande.jpg", headtag: "Playa Grande" ,tag:"Rio San Juan, Dominican Republic"},
    { imgpath: "../assets/ourWorld/mountaintop.jpg", headtag: "Chileno Bay" ,tag:"Cabo San Lucas, Mexico"},
    { imgpath: "../assets/ourWorld/yellowstone.jpg", headtag: "The Summit" ,tag:"Las Vegas, Nevada"},
    { imgpath: "../assets/ourWorld/dunedeck.jpg", headtag: "Dune Deck" ,tag:"Westhampton Beach, NY"},
    { imgpath: "../assets/ourWorld/siloRidge.jpg", headtag: "Silo Ridge" ,tag:"Amenia, NY"},
    { imgpath: "../assets/ourWorld/makenaAndy.jpg", headtag: "Makena" ,tag:"Maui, Hawaii"},
    { imgpath: "../assets/ourWorld/jamesIsland.jpg", headtag: "Yellowstone Club " ,tag:"Big Sky, Montana"},
    { imgpath: "../assets/ourWorld/gozzerRanch.jpg", headtag: "Gozzer Ranch" ,tag:"Coeur d'Alene, Idaho"},
    { imgpath: "../assets/ourWorld/elDorado.jpg", headtag: "El Dorado" ,tag:"Los Cabos, Mexico"},
    { imgpath: "../assets/ourWorld/madison.jpg", headtag: "Madison" ,tag:"La Quinta, California"},
    { imgpath: "../assets/ourWorld/kukio.jpg", headtag: "Baker's Bay" ,tag:"Great Guana Cay, Bahamas"},
    { imgpath: "../assets/ourWorld/hideaway.jpg", headtag: "Hideaway" ,tag:"La Quinta, California"},
    { imgpath: "../assets/ourWorld/mountaintop.jpg", headtag: "Mountaintop" ,tag:"Cashiers, North Carolina"},
    { imgpath: "../assets/ourWorld/mirabel.jpeg", headtag: "Mirabel" ,tag:"Scottsdale, Arizona"},
    { imgpath: "../assets/ourWorld/kukio.jpg", headtag: "Kuki'o" ,tag:"Kohala, Hawaii"},
    { imgpath: "../assets/ourWorld/vaquero.jpg", headtag: "Vaquero" ,tag:"Westlake, Texas"},
    { imgpath: "../assets/ourWorld/ironhouse.jpg", headtag: "Iron Horse" ,tag:"Whitefish, Montana"},
    { imgpath: "../assets/ourWorld/estancia.jpg", headtag: "Cordevalle" ,tag:"Silicon Valley, California"}
]

function settingInnerHtml(item){
    var string  = '<a class="col-lg-3 col-md-4 col-sm-6 box" href="#"><div><img id="img-sec" class="image" src="' + item.imgpath + '" alt=""></div><h2>' + item.headtag +'</h2><p> ' + item.tag + '</p></a>';
        return string;
}

document.getElementById("ourworld-photos").innerHTML = obj.map(settingInnerHtml).join("");