var map = L.map('map', {
    center: [-17.645875, -71.345271],
    zoom: 18,
    minZoom: 10,
    maxZoom: 20,
    maxBounds: [[-17.8681,-71.5245], [-15.9593,-69.9777]]
});

var basemapOSM = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <ahref="http://osm.org/copyright"> OpenStreetMap</a> contributor'
});
basemapOSM.addTo(map);
