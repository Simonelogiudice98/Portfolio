
// animazione icone


window.addEventListener('load', function(){
    console.log(muoviAngular());
    muoviAngular();
    muoviHtml();
})




var id = null;

function muoviAngular(){
    let direction = true;
    let iconaAngular = document.getElementById('angularIcon')
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame,10);
    function frame(){
        if(pos == 350){
            direction = false;
        }else if(pos == 0){
            direction = true;
        }
        if(direction == true){
            pos++;
            
            iconaAngular.style.top = pos + 'px';
            iconaAngular.style.left = pos + 'px';
            
        }else{
            pos--;
            iconaAngular.style.top = pos + 'px';
            iconaAngular.style.left = pos + 'px';

        }
    }
}
function muoviHtml(){
    let direction2 = true;
    let iconaHtml = document.getElementById('htmlIcon')
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame,10);
    function frame(){
        if(pos == 350){
            direction2 = false;
        }else if(pos == 0){
            direction2 = true;
        }
        if(direction2 == true){
            pos++;
            
            iconaHtml.style.bottom = pos + 'px';
            iconaHtml.style.right = pos + 'px';
            
        }else{
            pos--;
            iconaHtml.style.bottom = pos + 'px';
            iconaHtml.style.left = pos + 'px';

        }
    }
}


// ANIMAZIONE LETTERE


var wrapper = document.querySelector('.nome')

anime.timeline({loop: true})
  .add({
    targets: '.t1 .nome',
    scale: [0.3,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 1000,
    delay: (el, i) => 70 * (i+1)
  }).add({
    targets: '.t1 .line',
    scaleX: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 1000,
    offset: '-=875',
    delay: (el, i, l) => 80 * (l - i)
  }).add({
    targets: '.t1 ',
    opacity: 0,
    duration: 2000,
    easing: "easeOutExpo",
    delay: 2000
  });


// animazione wd

anime.timeline({loop: true})
  .add({
    targets: '.t2 .wD',
    scale: [14,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 800,
    delay: (el, i) => 800 * i
  }).add({
    targets: '.t2',
    opacity: 0,
    duration: 2000,
    easing: "easeOutExpo",
    delay: 2000
  });

