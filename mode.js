const moon=document.getElementById("moon")
const sun=document.getElementById("sun")
const navContainer=document.querySelector(".nav-container")
const mode=localStorage.getItem("mode")
console.log(mode)
 if(mode=="dark")
 {
    sun.style.display="none";
    moon.style.display="inline";
    navContainer.style.color="red"
 }
 else{
    moon.style.display="none";
    sun.style.display="inline";
    navContainer.style.color="#D3D3D3";
 }
sun.addEventListener("click",()=>{
    sun.style.display="none";
    moon.style.display="inline";
    navContainer.style.color="red";
    localStorage.setItem("mode","dark");
})

moon.addEventListener("click",()=>{
    moon.style.display="none";
    sun.style.display="inline";
    navContainer.style.color="#D3D3D3";
    localStorage.setItem("mode","light");
})
