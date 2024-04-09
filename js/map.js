var map;
async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");
  map = new Map(document.getElementById("map"), {
    center: {lat: 41.83584308012992, lng: -87.62586149478142},
    zoom: 10,
  });

  const marker = new google.maps.Marker({
    position: {lat: 41.83584308012992, lng: -87.62586149478142},
    map: map,
    title: "MTCC"
  });

  const infoWindow = new google.maps.InfoWindow({
    content: "This is the McCormick Tribune Campus Center.",
  });
  infoWindow.open(map, marker);

  map.addListener("center_changed", () => {
    window.setTimeout(() => {
      map.panTo(marker.position);
    }, 3000);
  });
  marker.addListener("click", () => {
    map.setZoom(17);
    map.setCenter(marker.position);
  });

}
google.maps.event.addDomListener(window, 'load', initMap)
