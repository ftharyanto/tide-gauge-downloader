var mymap = L.map('mapid').setView([-1.248089, 115.419], 4);

// function for filtering coordinates based on network id
function filterCoordinates(network_id) {
  var coordinates = [];

  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'data_sensor_status.json', true);
  xhr.onload = function () {
    var data = JSON.parse(this.response);
    data.forEach(function (item) {
      if (item.net_id === network_id) {
        coordinates.push([
          `${item.lokasi} (${item.station_id})`,
          parseFloat(item.lat),
          parseFloat(item.lon),
        ]);
      }
    });
    console.log(coordinates);
  };
  xhr.send();
  return coordinates;
}

var network_id = ['BY', 'CT', 'ID', 'T1', 'T2', 'TS', 'WL'];
var BY = filterCoordinates(network_id[0]);

console.log(typeof BY, BY.length, BY);

L.tileLayer(
  'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw',
  {
    maxZoom: 18,
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
      'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
  }
).addTo(mymap);

var locations = [
  ['Locations 1', -1.248089, 115.419],
  ['Locations 2', -1.348089, 113.419],
  ['Locations 3', -1.448089, 115.419],
  ['Locations 4', -1.548089, 115.419],
  ['Locations 5', -1.648089, 115.419],
];
console.log(typeof locations, locations);
for (var i = 0; i < locations.length; i++) {
  marker = new L.marker([locations[i][1], locations[i][2]]).bindPopup(locations[i][0]).addTo(mymap);
}

var popup = L.popup();

function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent('You clicked the map at ' + e.latlng.toString())
    .openOn(mymap);
}

mymap.on('click', onMapClick);
