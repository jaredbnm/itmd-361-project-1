var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 41.8262786, lng: -87.6285002},
    zoom: 8
  });
}