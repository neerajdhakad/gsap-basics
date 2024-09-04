function page1Animation(){
    var tl = gsap.timeline()

tl.from("nav h1 , nav h4 , nav button",{
    y:-30,
    opacity:0,
    delay:0.5,
    duration:0.7,
    stagger:0.2
})
tl.from(".center-part1 h1",{
    x:-550,
    duration:0.7,
    opacity:0, 
})
tl.from(".center-part1 p",{
    x:-100,
    duration:0.4,
    opacity:0, 
})
tl.from(".center-part1 button",{ 
    duration:0.4,
    opacity:0, 
})
tl.from(".center-part2 img",{
    opacity:0, 
    duration:0.7,
},"-=0.5") // It will be in timeline , but if we do this then it will run in the timeline 1s earlier
tl.from(".section1bottom img",{
    opacity:0,
    y:30,
    stagger:0.15,
    duration:0.6
})
} 

function page2Animation(){
    
var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".section2",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top -20%",
        scrub:2
    }
})


tl2.from("container .services",{
    y:30,
    opacity:0, 
    duration:0.5
})
//Line 1
tl2.from(".elem.line1.left",{
    x:-300,
    opacity:0,
    duration:0.5
},"anim1")
tl2.from(".elem.line1.right",{
    x:300,
    opacity:0,
    duration:0.5
},"anim1")
//Line 2
tl2.from(".elem.line2.left",{
    x:-300,
    opacity:0,
    duration:0.5
},"anim2")
tl2.from(".elem.line2.right",{
    x:300,
    opacity:0,
    duration:0.5
} ,"anim2")

// tl2.from(".services h3",{
//     x:-100,
//     opacity:0,
//     delay:1,
//     duration:0.5,
//     scrollTrigger:{
//         trigger:".services h3",
//         scroller:"body",
//         markers:true,
//         start:"top 50%",
//     }
// }) 
}

page1Animation()
page2Animation()