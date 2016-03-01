document.addEventListener("DOMContentLoaded", function () {

    if (navigator.geolocation) {
        //code goes here to find position
        var params = {
            enableHighAccuracy: false,
            timeout: 9999,
            maximumAge: 60000
        };

        navigator.geolocation.getCurrentPosition(reportPosition, gpsError, params);

        //        var canvas = document.createElement("canvas");
        //        document.querySelector("#output").appendChild(canvas);

    } else {
        //browser does not support geolocation api
        alert("Sorry, but your browser does not support location based awesomeness.")
    }
});

function reportPosition(position) {

    var latlon = position.coords.latitude + "," + position.coords.longitude;

    var img_url = "http://maps.googleapis.com/maps/api/staticmap?center= " + latlon + "&zoom=14&size=400x400&sensor=false";

    document.getElementById("mapholder").innerHTML = "<img src='" + img_url + "'>";

    var marker = new google.maps.Marker({
        map: map,
        position: latlon,
        title: "You are here"
    });
}

function gpsError(error) {
    var errors = {
        1: 'Permission denied',
        2: 'Position unavailable',
        3: 'Request timeout'
    };
    alert("Error: " + errors[error.code]);
} 