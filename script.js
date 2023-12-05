const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function videoconAnimation() {
    var videocon = document.querySelector("#video-container");
    var playbtn = document.querySelector("#play");
    videocon.addEventListener("mouseenter", function () {
      gsap.to(playbtn, {
        scale: 1,
        opacity: 1,
      });
    });
    videocon.addEventListener("mouseleave", function () {
      gsap.to(playbtn, {
        scale: 0,
        opacity: 0,
      });
    });
    document.addEventListener("mousemove", function (dets) {
      gsap.to(playbtn, {
        left: dets.x - 70,
        top: dets.y - 80,
      });
    });
  }
  videoconAnimation();

function loadingAnimation() {
    gsap.from("#page1 h1", {
        y:100,
        opacity:0,
        delay:0.5,
        duration:0.7,
        stagger:0.3
    })
    gsap.from("#page1 #video-container", {
        scale:0.7,
        opacity:0,
        delay:1.3,
        duration:0.5,
    
    })
}
loadingAnimation()

document.addEventListener("mousemove",function(dets){
  gsap.to("#cursor",{
    left:dets.x,
    top:dets.y
  })
})

document.querySelector("#child1").addEventListener("mouseenter",function(){
  gsap.to("#cursor",{
    transform: "translate(-50%,-50%) scale(1)"
  })
})

document.querySelector("#child1").addEventListener("mouseleave",function(){
  gsap.to("#cursor",{
    transform: "translate(-50%,-50%) scale(0)"
  })
})

document.querySelector("#child1").addEventListener("mouseenter",function(){
  gsap.to("#cursor",{
    transform: "translate(-50%,-50%) scale(1)"
  })
})

document.querySelector("#child1").addEventListener("mouseleave",function(){
  gsap.to("#cursor",{
    transform: "translate(-50%,-50%) scale(0)"
  })
})

document.querySelector("#child2").addEventListener("mouseenter",function(){
  gsap.to("#cursor",{
    transform: "translate(-50%,-50%) scale(1)"
  })
})

document.querySelector("#child2").addEventListener("mouseleave",function(){
  gsap.to("#cursor",{
    transform: "translate(-50%,-50%) scale(0)"
  })
})

document.querySelector("#child3").addEventListener("mouseenter",function(){
  gsap.to("#cursor",{
    transform: "translate(-50%,-50%) scale(1)"
  })
})

document.querySelector("#child3").addEventListener("mouseleave",function(){
  gsap.to("#cursor",{
    transform: "translate(-50%,-50%) scale(0)"
  })
})

document.querySelector("#child4").addEventListener("mouseenter",function(){
  gsap.to("#cursor",{
    transform: "translate(-50%,-50%) scale(1)"
  })
})

document.querySelector("#child4").addEventListener("mouseleave",function(){
  gsap.to("#cursor",{
    transform: "translate(-50%,-50%) scale(0)"
  })
})