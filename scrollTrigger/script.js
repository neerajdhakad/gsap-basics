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
    // scrollTrigger:"#page2 #box", -- just to apply ST , upr-upr se
    // Advance
    scrollTrigger:{
        trigger:"#page2 #box",
        scroller:"body",
        markers:true,
        start:"top 60%",
        // scrub -> true (It can be a boolean value)
        scrub:2 ,// makes the animation smooth and It makes the animation between scroll-start and scroll-end , usi k beech m chlta h or khtm hota h
        // pin:true // while scrolling element vhi par ruk gya
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
