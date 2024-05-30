import L from 'https://esm.sh/leaflet@1.9.4';
import DraggableLines from 'https://esm.sh/leaflet-draggable-lines@1.0.3';

// Initialize the map and set its view to your chosen geographical coordinates and a zoom level
const map = L.map('map').setView([63.635308, 23], 6);

// Add a tile layer to the map (the background map image)
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

new L.Polyline([
    [63.635308, 23],
    [65.984461, 24.70641]
], { color: '#0000ff', weight: 10 }).addTo(map);

const draggable = new DraggableLines(map);
draggable.enable();