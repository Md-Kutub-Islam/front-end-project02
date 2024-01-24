// cursor work 
const cursor = document.querySelector("#cursor")
const cursorBlur = document.querySelector("#cursor-blur")
document.addEventListener('mousemove', (dets) => {
  cursor.style.left = dets.x+"px"
  cursor.style.top = dets.y+"px"
  cursorBlur.style.left = dets.x-150+"px"
  cursorBlur.style.top = dets.y-150+"px"
})





gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "110px",
    scrollTrigger: {
      trigger: "#nav",
      scroller: "body",
      // markers:true,
      start: "top -10%",
      end: "top -11%",
      scrub: 1,
    },
  });


  // cursor work 
  gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
      trigger: "#main",
      scroller: "body",
      markers: true,
      start: "top -25%",
      end: "top -70%",
      scrub: 2
    }
  })