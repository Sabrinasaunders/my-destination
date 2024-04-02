document.addEventListener("DOMContentLoaded", function () {
  const initialPosition = [51.505, -0.09];

  // Initialize the map on the "mapid" div with a given center and zoom level
  const map = L.map("mapid").setView(initialPosition, 13);

  // Add an OpenStreetMap tile layer to the map
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors",
  }).addTo(map);

  // Create a marker that can be moved, initially placed at the same position as the map's center
  let marker = L.marker(initialPosition, {
    draggable: true,
  }).addTo(map);

  // Event listener for the marker drag end event to update form fields with the new position
  marker.on("dragend", function (e) {
    updateFormFields(marker.getLatLng());
  });

  // Event listener for click event on the map to move the marker and update form fields
  map.on("click", function (e) {
    marker.setLatLng(e.latlng);
    updateFormFields(e.latlng);
  });

  // Function to update latitude and longitude input fields based on passed coordinates
  function updateFormFields(latlng) {
    document.getElementById("latitude").value = latlng.lat.toFixed(5);
    document.getElementById("longitude").value = latlng.lng.toFixed(5);
  }
});
