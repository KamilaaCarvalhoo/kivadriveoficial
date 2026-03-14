document.addEventListener("DOMContentLoaded", function () {

/* BOTÕES DE DOWNLOAD */

window.baixarPassageira = function () {
    alert("https://www.dropbox.com/scl/fi/75ona2vur50naamhwzf9q/Kiva-Drive.apk?rlkey=tz4k421np4172fjhzv0uidy9q&st=sh1kus3c&dl=1");
};

window.baixarMotorista = function () {
    window.location.href = "https://www.dropbox.com/scl/fi/hvtehfhtufsm35v5wca66/Kiva-Motoristas.apk?rlkey=6wvo8mto2ry87kgafg77efaui&st=fmvksf41&dl=1";
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