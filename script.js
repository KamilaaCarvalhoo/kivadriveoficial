document.addEventListener("DOMContentLoaded", function () {
  /* REDIRECIONAMENTO AUTOMÁTICO */

  const userAgent = navigator.userAgent.toLowerCase();

  if (userAgent.includes("android")) {
    setTimeout(() => {
      window.location.href =
        "https://play.google.com/store/apps/details?id=com.kivamotorista.kivaapp";
    }, 1500);
  }

  /* BOTÕES DE DOWNLOAD */

  window.baixarPassageira = function () {
    window.location.href =
      "https://play.google.com/store/apps/details?id=com.kivadrive.passageira";
  };

  window.baixarMotorista = function () {
    window.location.href =
      "https://play.google.com/store/apps/details?id=com.kivamotorista.kivaapp";
  };

  /* ANIMAÇÃO AO ROLAR */

  function reveal() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach((element) => {
      const windowHeight = window.innerHeight;
      const elementTop = element.getBoundingClientRect().top;
      const revealPoint = 100;

      if (elementTop < windowHeight - revealPoint) {
        element.classList.add("active");
      }
    });
  }

  reveal();

  window.addEventListener("scroll", reveal);

  /* MAPA */

  const mapElement = document.getElementById("map");

  if (mapElement) {
    const map = L.map("map").setView([-16.6864, -49.2643], 12);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap",
    }).addTo(map);

    setTimeout(() => {
      map.invalidateSize();
    }, 200);

    const carIcon = L.icon({
      iconUrl: "https://cdn-icons-png.flaticon.com/512/744/744465.png",
      iconSize: [40, 40],
      iconAnchor: [20, 20],
    });

    const car = L.marker([-16.6864, -49.2643], { icon: carIcon }).addTo(map);

    const route = [
      [-16.6864, -49.2643],
      [-16.69, -49.27],
      [-16.695, -49.26],
      [-16.7, -49.255],
      [-16.705, -49.25],
    ];

    let i = 0;

    function moveCar() {
      car.setLatLng(route[i]);

      i++;

      if (i >= route.length) {
        i = 0;
      }
    }

    setInterval(moveCar, 2000);

    L.marker([-16.69, -49.27]).addTo(map).bindPopup("🚗 Motorista disponível");

    L.marker([-16.695, -49.26]).addTo(map).bindPopup("📍 Corrida iniciada");

    L.marker([-16.7, -49.255]).addTo(map).bindPopup("🧭 Corrida em andamento");
  }
});
