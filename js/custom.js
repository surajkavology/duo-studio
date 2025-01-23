 // Initialize Lenis
const lenis = new Lenis();

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

let cursor = document.getElementById("cursor")

let main = document.querySelector("#main")

main.addEventListener("mousemove", function(elem){
    
  gsap.to("#cursor",{
    x: elem.x -25 / 2,
    y: elem.y -25 / 2,
    duration:0.2
  })
});

let hoverMenu = document.querySelector(".hover-fixed-menu")
let menuLinks = document.querySelectorAll(".site-nav li")
let marquSpan = document.querySelectorAll(".hover-fixed-menu span")

// for (let i = 0; i < 6; index++) {
//     const element = array[index];
    
// }

menuLinks.forEach(function(item){
item.addEventListener("mouseenter", function(){
    gsap.to(hoverMenu, {
        opacity: 1,             
        visibility: "visible",  
        duration: 0.5,          
        ease: "power1.inOut"    
      });
let link = item.querySelector("a")
let = itemText =  link.innerText

marquSpan.forEach(function(val){
val.textContent = itemText
})
// marquSpan.textContent = itemText
// console.log(itemText)
});
item.addEventListener("mouseleave", function(){
    gsap.to(hoverMenu, {
        opacity: 0,             
        visibility: "hidden",   
        duration: 0.5,          
        ease: "power1.inOut"    
      });
});
});
 
 document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger)

  gsap.from(".site-banner-content h2",{
    y:90,
    rotate:15,
    duration:1,
    opacity:0
  })

  let tl = gsap.timeline({
    scrollTrigger:{
      trigger:".site-banner",
      start:"50% 50%",
      end:"200% 50%",
      marker:true,
      scrub:1,
    },
  });


    tl.to(".site-banner-content h2:first-child", {
        x: -200,
    }, "anim")
    tl.to(".site-banner-content h2:last-child", {
        x: 200
    }, "anim")

    tl.to("#main",{
        backgroundColor:"#fff",
        duration:0.5
    })

    tl.to(".banner-video-wrap video",{
      width: "100%",
      duration: 1,
    })

 });


const workVideo = document.querySelector(".seclected-work .item video")

workVideo.addEventListener("mouseenter", function(){
  cursor.style.width = "100px";
  cursor.style.height = "22px";
  cursor.style.lineHeight = "22px";
  cursor.style.borderRadius = "10px";
  cursor.style.textAlign = "center";
  cursor.textContent = "play";

});


workVideo.addEventListener("mouseleave", function(){
  cursor.style.width = "25px";
  cursor.style.height = "25px";
  cursor.style.lineHeight = "22px";
  cursor.style.borderRadius = "50%";
  cursor.style.textAlign = "center";
  cursor.textContent = "";

});

let mentionClient = document.querySelector(".mention-client-content")
let clientBG = document.querySelector(".client-hover-bg")
let clientList = document.querySelectorAll(".mention-client li")
// let bgImg = mentionClient.querySelectorAll("img")



mentionClient.addEventListener("mouseenter", function(){
  gsap.to(clientBG,{
    opacity: 1,
    scale:1,
    duration:0.5
  })

});


clientList.forEach(function(li){
  li.addEventListener("mouseenter",function(){
    let bgImg =  li.querySelector("img")
    clientBG.style.backgroundImage = `url(${bgImg.src})`
  });
});


mentionClient.addEventListener("mouseleave", function(){
  gsap.to(clientBG,{
    opacity: 0,
    scale:0,
    duration:0.5
  })

});


mentionClient.addEventListener("mousemove", function(dets){
  let width =  clientBG.getBoundingClientRect().width
  let height =  clientBG.getBoundingClientRect().height
  gsap.to(clientBG,{
    x: dets.clientX - width / 2,
    y: dets.clientY - height / 2 - 100 
    
  })
  // console.log(dets.clientY, dets.clientX)
});




