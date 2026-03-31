document.addEventListener("DOMContentLoaded", function () {

/* BOTÕES DE DOWNLOAD */

window.baixarPassageira = function () {
    window.location.href = //"https://dl.dropboxusercontent.com/scl/fi/jmn7hi8md9r5ge0aj1whm/Kiva-Drive.apk?rlkey=sczaee06m93le3ca8gl1lm0i3"
};

window.baixarMotorista = function () {
    window.location.href = //"https://dl.dropboxusercontent.com/scl/fi/oxv9jyusnefoj3acwuwmk/Kiva-Motorista.apk?rlkey=p485tef0ku8p5voyl51s8331p"
};



/* ANIMAÇÃO AO ROLAR */

function reveal(){

    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach((element)=>{

        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 100;

        if(elementTop < windowHeight - revealPoint){
            element.classList.add("active");
        }

    });

}

window.addEventListener("scroll", reveal);




const mapElement = document.getElementById("map");

if(mapElement){

var map = L.map("map").setView([-16.6864,-49.2643],12);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{
attribution:"© OpenStreetMap"
}).addTo(map);



setTimeout(function(){
map.invalidateSize();
},200);




var carIcon = L.icon({
iconUrl:"https://cdn-icons-png.flaticon.com/512/744/744465.png",
iconSize:[40,40],
iconAnchor:[20,20]
});



var car = L.marker([-16.6864,-49.2643],{icon:carIcon}).addTo(map);




var route=[
[-16.6864,-49.2643],
[-16.6900,-49.2700],
[-16.6950,-49.2600],
[-16.7000,-49.2550],
[-16.7050,-49.2500]
];

var i=0;




function moveCar(){

car.setLatLng(route[i]);

i++;

if(i>=route.length){
i=0;
}

}

setInterval(moveCar,2000);




L.marker([-16.6900,-49.2700]).addTo(map)
.bindPopup("🚗 Motorista disponível");

L.marker([-16.6950,-49.2600]).addTo(map)
.bindPopup("📍 Corrida iniciada");

L.marker([-16.7000,-49.2550]).addTo(map)
.bindPopup("🧭 Corrida em andamento");

}

});