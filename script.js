/* Smooth hover animation for cards */

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

card.addEventListener("mousemove", (e) => {

const rect = card.getBoundingClientRect();

const x = e.clientX - rect.left;
const y = e.clientY - rect.top;

card.style.background =
`radial-gradient(circle at ${x}px ${y}px,
rgba(255,215,0,0.25),
rgba(255,255,255,0.05))`;

});

card.addEventListener("mouseleave", () => {

card.style.background = "rgba(255,255,255,0.05)";

});

});


/* Smooth scroll (future sections support) */

document.querySelectorAll("a[href^='#']").forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href"))
.scrollIntoView({
behavior:"smooth"
});

});

});
const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;
const y=e.clientY-rect.top;

const centerX=rect.width/2;
const centerY=rect.height/2;

const rotateX=(y-centerY)/20;
const rotateY=(centerX-x)/20;

card.style.transform=
`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="rotateX(0) rotateY(0)";

});

});
/* loader hide */

window.addEventListener("load",()=>{

setTimeout(()=>{
document.getElementById("loader").style.opacity="0";

setTimeout(()=>{
document.getElementById("loader").style.display="none";
},600);

},1500);

});


/* magnetic cursor */

const cursor=document.querySelector(".cursor");

document.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px";
cursor.style.top=e.clientY+"px";

});


/* magnetic effect on cards */

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;
const y=e.clientY-rect.top;

const centerX=rect.width/2;
const centerY=rect.height/2;

const rotateX=(y-centerY)/20;
const rotateY=(centerX-x)/20;

card.style.transform=
`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="rotateX(0) rotateY(0)";

});

});

<script>

let slider = document.querySelector(".testimonial-slider");

let scrollAmount = 0;

setInterval(()=>{

scrollAmount += 320;

if(scrollAmount >= slider.scrollWidth){
scrollAmount = 0;
}

slider.scrollTo({
left:scrollAmount,
behavior:"smooth"
});

},3000);

</script>