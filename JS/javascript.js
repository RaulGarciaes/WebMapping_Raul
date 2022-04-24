var map = L.map('map').setView([58.373523, 26.716045], 12);

const osm =
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
 maxZoom: 19,
 attribution: 'OpenStreetMap contributors',
})
osm.addTo(map)

async function addDGeoJson() {
 const response = await fetch(C:\Users\ragae\WebMapping\Lab2_WebProject\geojsons\tartu_city_districts_edu.geojson)
 const data = await response.json()
 const polygons = L.geoJson(data)
 L.geoJson(data).addTo(map);
}
addGeoJson();
