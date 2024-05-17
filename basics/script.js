// to -> INITIAL to FINAL position 
// from -> FINAL to INITIAL position 

gsap.to("#box",{
    x:1000,
    duration:2,
    delay:2, 
    rotate:360, // To rotate
    backgroundColor: "#111111",
    borderRadius:"100%",
}) 

gsap.to("#yoyo",{
    x: 1200,
    duration: 1,
    delay: 1,
    rotate: 360,
    repeat : -1, // This means that I->F then again I->F
    yoyo: true // Initial to Final then Final to Initial
})

gsap.from("#intro",{
    opacity:1,
    duration:2,
    delay:4
})
gsap.from("h2",{
    duration:2,
    delay:1,
    color:"red",
    opacity:0,
    y:20,
    stagger:1 // Ek naam k bht saare log h to , unhe ek-ek kar k chalana h (1-2-3)
    // stagger:1 // ulta chalega , pehle 3-2-1 
    // stagger:0.3 // thoda sa fast ho jata h  
})
gsap.from("#fromY",{
    duration:1,
    delay:1,
    opacity:0,
    y:20
})


let tl = gsap.timeline()

tl.to("#box1",{
    delay:1,
    duration:2,
    x:1000
})
tl.from("#box2",{
    duration:2,
    x:1000
})
tl.to("#box3",{
    duration:2,
    x:1000
})