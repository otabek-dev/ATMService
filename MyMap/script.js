// let map = L.map('map', { doubleClickZoom: false }).locate({ setView: true, maxZoom: 16 });
// // var map = L.map('map').setView([41.319083, 69.222635], 20);

// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);
const tg = window.Telegram.WebApp;
tg.expand();

const key = 'Nsk4b8GeYz7KTFXj5fbR';
const map = L.map('map').locate({ setView: true, maxZoom: 16 });
const mtLayer = L.maptilerLayer({
    apiKey: key,
    style: L.MaptilerStyle.STREETS, // optional
}).addTo(map);

// var map = L.map('map').fitWorld();

// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 20,
//     attribution: '© OpenStreetMap'
// }).addTo(map);

// map.locate({ setView: true, maxZoom: 16 });

function onLocationFound(e) {
    var radius = e.accuracy;

    L.marker(e.latlng).addTo(map)
        .bindPopup("You are within " + radius + " meters from this point").openPopup();

    L.circle(e.latlng, radius).addTo(map);
}

map.on('locationfound', onLocationFound);

function onLocationError(e) {
    alert(e.message);
}

map.on('locationerror', onLocationError);

var ATMs = L.layerGroup([
    L.marker([41.309760, 69.274823]).bindPopup('This is ATM.'), 
    L.marker([41.309286, 69.279196]).bindPopup('This is ATM'), 
    L.marker([41.308191, 69.279333]).bindPopup('This is ATM'), 
    L.marker([41.307503, 69.279023]).bindPopup('This is ATM'),
    L.marker([41.308503, 69.279123]).bindPopup('This is ATM')
]);

ATMs.addTo(map);
tg.ready();
