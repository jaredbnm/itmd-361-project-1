// map
var map;
async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");
  map = new Map(document.getElementById("map"), {
    mapId: "fc3dca03f9606ead",
    center: {lat: 41.83584308012992, lng: -87.62586149478142},
    zoom: 10,
  });

  const marker = new google.maps.Marker({
    position: {lat: 41.83584308012992, lng: -87.62586149478142},
    map: map,
    title: "MTCC",
    draggable: true
  });

  const infoWindow = new google.maps.InfoWindow({
    content: "Drag me to move around",
  });
  infoWindow.open(map, marker);

  map.addListener("center_changed", () => {
    window.setTimeout(() => {
      map.panTo(marker.position);
    }, 2000);
  });
  marker.addListener("click", () => {
    map.setZoom(17);
    map.setCenter(marker.position);
  });

}
google.maps.event.addDomListener(window, 'load', initMap)

// image slider
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}