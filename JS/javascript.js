var map = L.map('map').setView([58.373523, 26.716045], 12);
async function addDistrictsGeoJson() {
 const response = await fetch()
 const data = await response.json()
 const polygons = L.geoJson(data)
 L.geoJson(data).addTo(map)
}
addDistrictsGeoJson()
const osm =
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
 maxZoom: 19,
 attribution: 'OpenStreetMap contributors',
})
osm.addTo(map)
