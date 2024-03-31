const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#Post-name").value.trim();
  const location_map = document.querySelector("#Post-map").value.trim();
  const description = document.querySelector("#Post-desc").value.trim();

  if (name && location_map && description) {
    const response = await fetch(`/api/Posts`, {
      method: "POST",
      body: JSON.stringify({ name, location_map, description }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to create travelPost");
    }
  }
};
let map;
let marker;

function initMap() {
  const initialPosition = { lat: -34.397, lng: 150.644 }; // Default location

  map = new google.maps.Map(document.getElementById("map"), {
    center: initialPosition,
    zoom: 8,
  });

  map.addListener("click", (e) => {
    placeMarkerAndPanTo(e.latLng, map);
  });
}

function placeMarkerAndPanTo(latLng, map) {
  if (marker) {
    marker.setPosition(latLng);
  } else {
    marker = new google.maps.Marker({
      position: latLng,
      map: map,
    });
  }
  map.panTo(latLng);
  document.querySelector(
    "#travelPost-map"
  ).value = `${latLng.lat()}, ${latLng.lng()}`;
}

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/Posts/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to delete Post");
    }
  }
};

document
  .querySelector(".new-Post-form")
  .addEventListener("submit", newFormHandler);

document
  .querySelector(".Post-list")
  .addEventListener("click", delButtonHandler);
