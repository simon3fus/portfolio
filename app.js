const hero = document.querySelector(".hero");
const headline = document.querySelector("#headline");

const tl = new TimelineMax();
tl.fromTo (hero, 1.5, {height: "0%"}, {height: "100%", ease: Power2.easeInOut})
.fromTo (hero, 1.8, {width: "0%"}, {width:"100%", ease: Power2.easeInOut}, "-=1.5")
.fromTo (headline, 1.2, {x: "50%", opacity:"0"}, {x:"0%",opacity:"1", ease: Power2.easeInOut}, "-=0.8");