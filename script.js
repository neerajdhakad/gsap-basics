gsap.to("#page1 #box",{
    scale:1.5,
    backgroundColor:"crimson", 
    border: "50px solid white",
    duration:4,
    delay:1,
    y:20,
    rotate:360,
    borderRadius:"100%",
})
gsap.from("#page2 #box",{
    x:800,
    opacity:0,
    duration:2,
    delay:1,
    borderRadius:"100%",
    scrollTrigger:{
        trigger:"#page2 #box",
        scroller:"body",
        markers:true,
        scrub:2 ,// makes the animation smooth
        // pin:true
    }
})
gsap.from("#page3 #box",{
    x:800,
    opacity:0,
    duration:2,
    delay:1,
    borderRadius:"100%",
    scrollTrigger:{
        trigger:"#page2 #box",
        scroller:"body",
        markers:true,
        scrub:2
    }
})
