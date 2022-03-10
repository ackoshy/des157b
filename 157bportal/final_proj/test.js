 
let map;



function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });

  geocoder = new google.maps.Geocoder(); 
  document.getElementById("submit-btn").addEventListener("click", () => {
    geocodeAddress(geocoder, map);
});




  // When the user clicks on the button

//   document.getElementById("submit-btn").addEventListener("click",()=>{
//       geocodeAddress(geocoder,map)
//   })

  
}



window.getCoordinates = function( address, callback ) {
    // var coordinates; 
    // gecoder.geocode({address: address}, function(results, status)
    // coordinates = results[0].geometry.location; 
    // callback(coordinates); 
    // })     
}



