var atlanta = document.getElementsByClassName('loc1');

function initMap() {
	var atl = {lat:  33.753746, lng: -84.386330};
  var uluru = {lat: -25.363, lng: 131.044};
  var alpha = {lat: 33.935101, lng: -84.360924};
  console.log(atl.lat);
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: atl
  });
  var marker = new google.maps.Marker({
    position: alpha,
    map: map
  });
  var marker = new google.maps.Marker({
    position: atl,
    map: map
  });
}
