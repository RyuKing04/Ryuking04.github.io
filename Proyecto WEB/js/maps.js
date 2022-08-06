var mapa;
var marker;

var LatLng; //Latitud y Longitud 


//Función que "enciende" el mapa
function initMap() {
  LatLng = { lat: 10.001758, lng: -83.031327 }; //Objeto Coordenadas de la UTN

  //Creamos el mapa que recibe del HTML y un objeto con el zoom y coordenadas
  mapa = new google.maps.Map(document.getElementById("map"), {
    center: LatLng,
    zoom: 17,
    mapTypeId: 'roadmap',
  });

  //marcador por defecto
  marker = new google.maps.Marker({
    position: LatLng,
    map: mapa,
    title: "Tienda OSAM",
  });
}
10.001758, -83.031327