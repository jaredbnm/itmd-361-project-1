var map;
async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");
  map = new Map(document.getElementById("map"), {
    center: {lat: 41.83584308012992, lng: -87.62586149478142},
    zoom: 13,
  });
  

}
google.maps.event.addDomListener(window, 'load', initMap)
