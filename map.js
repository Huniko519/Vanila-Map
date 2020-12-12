function Maps() {
}

Maps.prototype.createMap = function(element, options) {
	Maps.prototype.map = new google.maps.Map(element, options);
	Maps.prototype.infoWindow = new google.maps.InfoWindow();
	Maps.prototype.markers = new Array();
};

Maps.prototype.addMarker = function(id, lat, lng, title, html, icon) {
	var marker = new google.maps.Marker({
		position: new google.maps.LatLng(lat, lng),
		map: Maps.prototype.map,
		title: title,
		html: html,
		icon: icon,
	});
	marker.addListener('click', function() {
		var infoWindow = Maps.prototype.infoWindow;
		infoWindow.setContent(marker.html);
		infoWindow.open(Maps.prototype.map, marker);
	});
	Maps.prototype.markers[id] = marker;
};

Maps.prototype.openMarker = function(id) {
	var marker = Maps.prototype.markers[id];
	var infoWindow = Maps.prototype.infoWindow;
	infoWindow.setContent(marker.html);
	infoWindow.open(Maps.prototype.map, marker);
};