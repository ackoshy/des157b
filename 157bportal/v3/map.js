(function() {
    'use strict';

    // initialize AOS here
    AOS.init();
    var map = L.map('map').setView([38.5428375, -121.7447074], 15);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZG5haXIyMDAxIiwiYSI6ImNreXg1ejNzaDBmaXIydnAzOW9oaTVzdGUifQ.QLzdTdmyXb2fhXKbYz8jjg', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiZG5haXIyMDAxIiwiYSI6ImNreXg1ejNzaDBmaXIydnAzOW9oaTVzdGUifQ.QLzdTdmyXb2fhXKbYz8jjg'
    }).addTo(map);


    // Thai Canteen
    var marker1 = L.marker([38.5424669, -121.7409905]).addTo(map);
    // Sam's Mediterreanenan
    var marker2 = L.marker([38.5496209, -121.7459485]).addTo(map);
    // Temple Coffee
    var marker3 = L.marker([38.544123, -121.7391475]).addTo(map);
    // Crepeville
    var marker4 = L.marker([38.5439255, -121.7439648]).addTo(map);
    // Dutch Bros
    var marker5 = L.marker([38.5396844, -121.7389706]).addTo(map);
    // Lazi Cow
    var marker6 = L.marker([38.5464708, -121.740028]).addTo(map);
    marker1.bindPopup("<b>Thai Canteen</b>").openPopup();
    marker2.bindPopup("<b>Sam's Mediterreanenan</b>").openPopup();
    marker3.bindPopup("<b>Temple Coffee</b>").openPopup();
    marker4.bindPopup("<b>Crepeville</b>").openPopup();
    marker5.bindPopup("<b>Dutch Bros</b>").openPopup();
    marker6.bindPopup("<b>Lazi Cow</b>").openPopup();


})();

