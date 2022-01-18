

(function() {
            'use strict';
            console.log('reading');
            const myVideo = document.querySelector('#myVideo');
            const fs = document.querySelector('.fa-expand');
            const line1 = document.querySelector('#line1');
            const line2 = document.querySelector('#line2');
            const line3 = document.querySelector('#line3');
            const line4 = document.querySelector('#line4');
            const line5 = document.querySelector('#line5');
            

            const lyrics = {
            start: [0, 11,16,21, 26],
            stop: [9,15,20,25, 30],
            line: [line1, line2, line3, line4, line5]
        }
            const loading = document.querySelector('.fa-dove'); 
            const intervalID = setInterval(checkTime, 1000);

            function checkTime() {
                for (let i = 0; i < lyrics.start.length; i++) {
                    if (lyrics.start[i] < myVideo.currentTime && myVideo.currentTime < lyrics.stop[i]) {
                        lyrics.line[i].className = "showing";
                    } else {
                        lyrics.line[i].className = "hidden";
                    }
                }
            }

            myVideo.addEventListener('playing', function() {
                loading.style.display = 'none'; 
            })

            fs.addEventListener('click', function() {
                if (!document.fullscreenElement) {
                    document.documentElement.requestFullscreen();
                } else {
                    document.exitFullscreen();
                }
            });
        })();

