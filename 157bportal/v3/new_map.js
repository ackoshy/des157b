

Parse.initialize("780TP5VOUodOaclLqTDGZFcVcyJCS6aFNDS19F7c","VNEcSwhx9Pok25g7pGad8UVzboFRsaPuWBXToFCe"); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
Parse.serverURL = 'https://parseapi.back4app.com/'

placePins();
async function placePins() {
    const person = Parse.Object.extend("Person");
    const query = new Parse.Query(person); 
    try {
        const results = await query.ascending('name').find();
        //console.log(results);
        results.forEach(function(eachFriend){
            const id = eachFriend.id;
            const address = JSON.parse(eachFriend.get('name'));
            console.log(address); 
            const geocoder = new google.maps.Geocoder();
            geocoder.geocode({ address: address }, (results, status) => {
                if (status === "OK") {
                    // Display response in the console 
                  
                    address_string = address; 
                    console.log("PRINTING"); 
                    console.log(address_string); 
    
   
                    resultsMap.setCenter(address_string);
        
                    // Add the marker with the obtained location
                    new google.maps.Marker({
                        map: resultsMap,
                        position: address,
                    });
                } else {
                    alert("Geocode error: " + status);
                }
            });
           

        });
    } catch (error) {
        console.error('Error while fetching friends', error);
    }
}


var objectId_list = []; 
// 1. Initialize a basic map
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: {
            lat: -34.397,
            lng: 150.644
        }
    });

    // 2. Initialize the GeoCoder API
    const geocoder = new google.maps.Geocoder();

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
           
           
          
         
          //  coordinates = [coords_obj.nb, coords_obj.ob]; 
            // console.log("PRINTING COORDINATES");
            // console.log(coords_obj)
            // console.log(coordinates); 
            // Set the location of the map obtained by the API
     
            console.log(results[0].geometry.location); 
            resultsMap.setCenter(results[0].geometry.location);
            address_string = JSON.stringify(results[0].geometry.location); 
            
            saveNewPerson(address_string);


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




async function saveNewPerson(address_string) {
    const person = new Parse.Object("Person");
     

    //map.set("address", "address_string");
    console.log("PRINTING"); 
    console.log(address_string); 
    ad = JSON.parse(address_string); 
    ; 
    person.set("name", address_string);
   
    try {
      let result = await person.save()

      alert('New object created with objectId: ' + result.id);
      

      } catch(error) {
          alert('Failed to create new object, with error code: ' + error.message);
      }
    
    } 
  
  

 