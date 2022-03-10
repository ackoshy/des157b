

Parse.initialize("780TP5VOUodOaclLqTDGZFcVcyJCS6aFNDS19F7c","VNEcSwhx9Pok25g7pGad8UVzboFRsaPuWBXToFCe"); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
Parse.serverURL = 'https://parseapi.back4app.com/'
console.log("HELLO")

// 1. Initialize a basic map
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        // zoom: 8,
        // center: {
        //     lat: -34.397,
        //     lng: 150.644
        // }
    });

    // 2. Initialize the GeoCoder API
    const geocoder = new google.maps.Geocoder();
    ; 
    retrievePerson();
    // 3. So when the user clicks on the submit BTN, geocode the given address if possible
    document.getElementById("submit-btn").addEventListener("click", () => {
        geocodeAddress(geocoder, map);
    });
}

// Handle conversion of text address to coordinates
function geocodeAddress(geocoder, resultsMap) {
    const address = document.getElementById("address").value;

    // Search for the address with the API
    geocoder.geocode({ address: address }, (results, status) => {
        if (status === "OK") {
            // Display response in the console 
            // Set the location of the map obtained by the API
            // console.log(results[0].geometry.location); 
            resultsMap.setCenter(results[0].geometry.location);
            address_string = JSON.stringify(results[0].geometry.location); 
            // console.log(address_string.lat);
            // console.log(address_string.lng); 
            saveNewPerson(address_string, address);

            // Add the marker with the obtained location
            new google.maps.Marker({
                map: resultsMap,
                position: results[0].geometry.location,
            });
        } else {
            alert("Geocode error: " + status);
        }
    });
}


async function saveNewPerson(address_string, address) {
    console.log("IN SAVE");
      
    const person = new Parse.Object("Person");
    console.log("PRINTING"); 
    ad = JSON.parse(address_string); 
    console.log(ad.lat); 
    console.log(ad.lng); 
    person.set('lat', ad.lat);
    person.set('lng', ad.lng);
    console.log(address); 
    person.set('name', address); 


    try {
      let result = await person.save()
      alert('New object created with objectId: ' + result.id);
      retrieveNew(result);
      } catch(error) {
          alert('Failed to create new object, with error code: ' + error.message);
      }
    } 

    async function retrieveNew(result){
        const person = new Parse.Query("Person");
        try {
          console.log(result.id);
          const results = await person.get(result.id);
          
          leafletMap(result); 
      }  
      catch{
          console.log("ERROR"); 
      }
    }

    async function retrievePerson() {
        //Create your Parse Query, and define the class it will be searched
        const person = new Parse.Query("Person");
        try {
           console.log("HI"); 
          const results = await person.find();
          leafletMap(results); 
        }  
        catch{
            console.log("ERROR"); 
        }
    }

    async function leafletMap(results) {
        'use strict';
        console.log("IN MAP"); 
        // initialize AOS here
        AOS.init();
        console.log("HELLO"); 
        var map = L.map('map').setView([38.5428375, -121.7447074], 1);
        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZG5haXIyMDAxIiwiYSI6ImNreXg1ejNzaDBmaXIydnAzOW9oaTVzdGUifQ.QLzdTdmyXb2fhXKbYz8jjg', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: 'pk.eyJ1IjoiZG5haXIyMDAxIiwiYSI6ImNreXg1ejNzaDBmaXIydnAzOW9oaTVzdGUifQ.QLzdTdmyXb2fhXKbYz8jjg'
        }).addTo(map);

        for(let result of results){
            const lat = result.get("lat");   
            const lng = result.get("lng"); 
            const address = result.get("name"); 
            // console.log(lat); 
            // console.log(address); 
            // console.log(lng); 
           var marker1 = L.marker([lat, lng]).addTo(map);
           marker1.bindPopup(address).openPopup();
        }
    }
    
 