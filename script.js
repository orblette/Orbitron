let moon = document.getElementById("moon");
let stars = document.getElementById("stars")
let text = document.getElementById("text")

window.addEventListener("scroll", function(){
  let value = window.scrollY;
  stars.style.left = value * 0.4 + "px";
  moon.style.top = value * 1.05 + "px";
  text.style.letterSpacing = value * 0.2 + "px";
})