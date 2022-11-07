
// animazione icone




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
    delay: 2500
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
    duration: 2800,
    easing: "easeOutExpo",
    delay: 2000
  });

