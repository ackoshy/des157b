(function() {
    'use strict';

    const button = document.querySelector('button');
    const body = document.querySelector('body');
    const banner = document.querySelector('#banner');
    const sections = document.querySelectorAll('section')
    let mode = 'dark';

    var modal = document.getElementById("myModal");

    // this assings the button that opens the overlay     
    var btn = document.getElementById("myBtn");

     // this gets the span elem that closes the overlay 
    var span = document.getElementsByClassName("close")[0];
    //opens 
    btn.onclick = function() {
    modal.style.display = "block";
    }
    //closes 
    span.onclick = function() {
    modal.style.display = "none";
    }

    // outside = close
    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

    buttonSwitch.addEventListener('click', function() {
        if (mode === 'dark') {
            body.className = 'switch';
            banner.className = 'switch'; 
            bannerOne.className = 'switch';
            bannerTwo.className = 'switch';
            bannerThree.className = 'switch'; 
            bannerFour.className = 'switch'; 
            replaceOne.className = 'switch'; 
            replaceTwo.className = 'switch'; 
            replaceThree.className = 'switch'; 
            replaceFour.className = 'switch'; 
            buttonSwitch.className = 'switch'; 
            button.className = 'switch';
            for (const section of sections) {
                section.className = 'switch';
            } 
            mode = 'light';
        } else {
            body.removeAttribute('class');
            banner.removeAttribute('class');
            bannerOne.removeAttribute('class'); 
            bannerTwo.removeAttribute('class'); 
            bannerThree.removeAttribute('class'); 
            bannerFour.removeAttribute('class'); 
            button.removeAttribute('class');
            replaceOne.removeAttribute('class'); 
            replaceTwo.removeAttribute('class');  
            replaceThree.removeAttribute('class'); 
            replaceFour.removeAttribute('class'); 
            for (const section of sections) {
                section.removeAttribute('class');
            }
            mode = 'dark'
        }
    })
})()