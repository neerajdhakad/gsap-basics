// function breakTheText() {
//   var h1 = document.querySelector("h1");
//   var h1Text = h1.textContent;

//   let splittedTxt = h1Text.split(""); // returns an array of the letters

//   var clutter = "";

//   splittedTxt.forEach(function (elem) {
//     clutter += `<span>${elem}</span>`;
//   });
//   h1.innerHTML = clutter;
// }

function breakTheTextForLeftAndRightAnimation() {
  var h1 = document.querySelector("h1");
  var h1Text = h1.textContent;

  let splittedTxt = h1Text.split(""); // returns an array of the letters

  let halfValue = splittedTxt.length / 2;
  let clutter = "";

  splittedTxt.forEach(function (elem, idx) {
    if (idx < halfValue) {
      clutter += `<span class="left">${elem}</span>`;
    } else {
      clutter += `<span class="right">${elem}</span>`;
    }
  });
  h1.innerHTML = clutter;
}
// breakTheText()
breakTheTextForLeftAndRightAnimation();

// On inline elements translate y don't work
// gsap.from("h1 span",{
//     y:50,
//     opacity:0,
//     duration:0.5,
//     delay:0.5,
//     stagger:-0.15 // If value is in - then , it will move in reverse
// })

// Left to right Animation

gsap.from("h1 .left", {
  y: 50,
  duration: 0.6,
  delat: 0.5,
  stagger: 0.15,
  opacity: 0,
});
gsap.from("h1 .right", {
  y: 80,
  duration: 0.6,
  delat: 0.5,
  stagger: -0.15,
  opacity: 0,
});
