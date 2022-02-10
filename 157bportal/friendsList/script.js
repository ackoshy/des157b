Parse.initialize("UP0VGtqzEiybYxUdnlZJRmdcbIFa3JbIhblmXZN2","BPOH7LmPpiLj6AHhM5hkktIbceIbtjyNUNkGw2w9"); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
Parse.serverURL = 'https://parseapi.back4app.com/'
const newBtn = document.getElementById("newbtn"); 
const editBtns = document.querySelectorAll(".fa-edit"); 
const addFriendForm = document.getElementById("entry-form"); 
const editFriendForm = document.getElementById("edit-friend"); 
const friendList = document.querySelector("main ol"); 
const inputs = document.querySelectorAll("#entry-form input:not([type=submit])"); 

async function displayEntry(){
    const friends = Parse.Object.extend("Friends"); 
    const query = new Parse.Query(friends); 
    const results = await query.ascending("entry").find(); 
    console.log(results); 

    results.forEach(function(eachEntry){
        const id = eachEntry.id; 
        const entry = eachEntry.get('lname'); 
        const date = eachEntry.get('fname'); 
        const theListItem = document.createElement('li'); 
        theListItem.setAttribute("id", `r-${id}`); 
        theListItem.innerHTML = `
        <li>
        <div class="name"> ${date} <div><button onclick="myFunction()" id="myBtn">View Entry</button></div> <span id="dots"></span><span id="more">${entry}</span>
        </div>
    </li>`
    friendList.append(theListItem); 
    });      
}
displayEntry(); 

addFriendForm.addEventListener('submit', function(event){
    event.preventDefault(); 
    console.log;("submitting new friend"); 
    addFriend(); 

}); 

for(let i=0; i<editBtns.length; i++){
    editBtns[i].addEventListener('click',function(event){
        event.preventDefault(); 
        editFriendForm.className = "edit-friend-onscreen"; 
    }); 
}


async function addFriend(){
    console.log("in add friend"); 
    const newEntry = {}; 

    for(let i=0; i<inputs.length; i++){
        let key = inputs[i].getAttribute("name"); 
        let value = inputs[i].value; 
        newEntry[key] = value; 
    }


    if(newEntry.date != "" && newEntry.entry != "" ){
       const newEntryData = new Parse.Object('Friends'); 
       newEntryData.set('date', newEntry.date); 
       newEntryData.set('entry', newEntry.entry); 

       const result = await newEntryData.save(); 
       resetFormFields(); 
       /* addFriendForm.className = "add-friend-offscreen";  */
       friendList.innerHTML = ''; 
       displayEntry(); 
       
    }
    else{
        /* addFriendForm.className = "add-friend-offscreen";  */
    }

    function resetFormFields(){
        document.getElementById("date").value = ""; 
        document.getElementById("entry").value = ""; 
    }
}

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "View Entry";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }

