//sign up
function signUp(){
    const firstName=document.getElementById("firstName").value
    const lastName=document.getElementById("lastName").value
    const email=document.getElementById("signUpmail").value
    const password=document.getElementById("signUppass").value
    const confPass=document.getElementById("confpass").value
    const user={
        firstName,
        lastName,
        email,
        password,
        confPass,
    }
    
    if(password===confPass){
        localStorage.setItem("user",JSON.stringify(user))
        alert("Sign Up Successfully");
    }
    else{
        alert("Two passwords must be match!!")
    }
}
//login
function login(){
    const loginEmail=document.getElementById("lemail").value
    const loginPassword=document.getElementById("lpass").value
    const savedUser=JSON.parse(localStorage.getItem("user"));
    console.log("savedUser",savedUser);
    if (savedUser && savedUser.email === loginEmail && savedUser.password === loginPassword){
        localStorage.setItem("isLoggedIn", "true");
        alert("Login successfully!");
        window.location.href = "home.html";
    }else{
        alert("Invalid email or password. Please try again!!.");
    }
}
//log out
function logout(){
    localStorage.removeItem("isLoggedIn");
    alert("Logout successfully!!");
    window.location.href="index.html";
}
//dark mode & light mode
const container=document.getElementById("container-bg")
const moon=document.getElementById("moon")
const sun=document.getElementById("sun")
const text=document.getElementById("text")
const logoutBtn=document.getElementById("logoutBtn")

sun.addEventListener("click",()=>{
    container.style.backgroundColor="black";
    text.style.color="white";
    logoutBtn.style.backgroundColor="violet";
    logoutBtn.style.color="white";
    sun.style.display="none";
    moon.style.display="inline";
    localStorage.setItem("mode","dark");
})

moon.addEventListener("click",()=>{
    container.style.backgroundColor="white";
    logoutBtn.style.backgroundColor="lightblue";
    text.style.color="black";
    sun.style.display="inline";
    moon.style.display="none";
    localStorage.setItem("mode","light");
})
const mode=localStorage.getItem("mode")
 console.log(mode)
 if(mode=="dark")
 {
    container.style.backgroundColor="black";
    text.style.color="white";
    logoutBtn.style.backgroundColor="violet";
    logoutBtn.style.color="white";
    sun.style.display="none";
    moon.style.display="inline";
 }
 else{
    container.style.backgroundColor="white";
    logoutBtn.style.backgroundColor="lightblue";
    text.style.color="black";
    sun.style.display="inline";
    moon.style.display="none";
 }