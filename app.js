


const icon = document.querySelector(".icon")
const navlinks = document.querySelector(".nav-links")
const links = document.querySelectorAll(".nav-links li")
const img = document.getElementsByClassName("bg_image")

icon.addEventListener("click",() => {

navlinks.classList.toggle('open');
links.forEach(link => {
    link.classList.toggle('fade');
})


 img[0].style.top = 20 + "px";
 img[0].style.left = -80 + "px";
 img[0].style.transition =  "all 1.2s ease-out"; 

})

s = document.getElementById("typo")
var txt = "shreyas."
var i = 0


myfun = ()=> {
console.log('hello')
if(i < txt.length){
s.innerHTML += txt.charAt(i)
i++
setTimeout(myfun,300)
}
}
window.onload = myfun()