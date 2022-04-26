let map = L.map('map').setView([58.373523, 26.716045], 12)
var Stadia_AlidadeSmoothDark = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
	maxZoom: 20,
	attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
});
Stadia_AlidadeSmoothDark.addTo(map)
function popUPinfo(feature, layer) {
 layer.bindPopup(feature.properties.NIMI)
}
async function addDistrictsGeoJson(url) {
 const response = await fetch(url)
 const data = await response.json()
 const polygons = L.geoJson(data, {
 onEachFeature: popUPinfo,
 })
 polygons.addTo(map)
}
addDistrictsGeoJson('geojsons/tartu_city_districts_edu.geojson')
async function addCelltowersGeoJson(url) {
 const response = await fetch(url)
 const data = await response.json()
 const markers = L.geoJson(data)
 markers.addTo(map)
}
addCelltowersGeoJson('geojsons/tartu_city_celltowers_edu.geojson')
function defaultMapSettings() {
 map.setView([58.373523, 26.716045], 12)
}
