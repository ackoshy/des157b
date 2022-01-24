
var key = 0; 
async function getData(){
    const artists = ["Taylor Swift", "Giveon", "Miley Cyrus", "Childish Gambino", "Troy Sivane", "Justin Bieber", "HAIM", "Lorde", "Maude Lautor", "Sara Keys"]; 
    const mySongs = await fetch("data/jsondata.json"); 
    const data = await mySongs.json(); 
    document.querySelector("#title").innerHTML = outputTitle(data); 
    document.querySelector("#artist").innerHTML = outputArtist(data); 
    document.querySelector("#album").innerHTML = outputAlbum(data); 
    document.querySelector("#bottomAlbum").innerHTML = outputbottomAlbum(data); 
    document.querySelector("#songNumber").innerHTML = outputNumber(data); 
    document.querySelector("#bottomArtist").innerHTML = outputbottomArtist(data); 
    //document.getElementById("albumCover").src="images/spotifyc.png";
    switchImage(data); 
    key +=1; 
}
function outputArtist(data){
    let html = ''; 
        console.log(data[key]["artist"]); 
        html +='<h5>'
        html += [data[key]["artist"]]; 
        html += '</h5'; 
    return html 
}
function outputTitle(data){
    let html = ''; 
        console.log(data[key]["title"]); 
        html +='<h3>'
        html += [data[key]["title"]]; 
        html += '</h3'; 
    return html 
}
function outputAlbum(data){
    let html = ''; 
        html +='<h3>'
        html += [data[key]["album"]]; 
        html += '</h3'; 
    return html 
}
function outputNumber(data){
    let html = ''; 
        html += [data[key]["number"]]; 
    return html 
}
function outputbottomAlbum(data){
    let html = ''; 
        html +='<h3>'
        html += [data[key]["album"]]; 
        html += '</h3'; 
    return html 
}
function outputbottomArtist(data){
    let html = ''; 
        console.log(data[key]["artist"]); 
        html +='<h5>'
        html += [data[key]["artist"]]; 
        html += '</h5'; 
    return html 
}

function switchImage(data){
    document.getElementById("albumCover").src=[data[key]["src"]];
    document.getElementById("albumBottom").src=[data[key]["src"]];

}

