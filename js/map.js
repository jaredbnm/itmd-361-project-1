var map;
async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");
  map = new Map(document.getElementById("map"), {
    center: {lat: 41.8349, lng: -87.6270},
    zoom: 13,
  });

  
}
