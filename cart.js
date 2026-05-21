// Cart
//GET Method
const getButton=document.querySelector(".get-btn")
const postButton=document.querySelector(".post-btn")
const putButton=document.querySelector(".put-btn")
const deleteButton=document.querySelector(".delete-btn")
const result=document.querySelector(".result")

getButton.addEventListener("click",()=>{
    fetch("https://fakestoreapi.com/products/6")
    .then((resolve)=>resolve.json())
    .then((data)=>{
        result.innerHTML=`
        <div class="get-container">
        <div class="get-img">
        <img src= "${data.image}" >
        </div>
        <div class="get-content">
        <h2><strong>Title : ${data.title}</strong></h2><br>
        <p><strong>Price : </strong>${data.price}</p><br>
        <p><strong>Category : </strong>${data.category}</p><br>
        <p><strong>Description : </strong>${data.description}</strong></p>
        </div>
        </div>
        `
    })
    .catch((error)=>{
        console.log(error)
    })
})

//POST Method
postButton.addEventListener("click",()=>{
    fetch("https://fakestoreapi.com/products",{
        method:"POST",
        headers: {"Content-Type": "application/json"

            },
        body: JSON.stringify({
            title: "Classic Black Overdized T-shirt",
            price: "29.99",
            category: "Men's Fashion",
            description: "Comfortable oversized black t-shirt made with soft cotton fabric. Perfectfor casual daily wear and street style outfits.",
            image:"https://img.freepik.com/premium-psd/tshirt-mockup_1129442-1438.jpg"
            
    })
    
    })
    .then((resolve)=>resolve.json())
    .then((data)=>{
        result.innerHTML=`
        <div>
        <img src= "${data.image}" width="200" height="200">
        <h2><strong>Title : ${data.title}</strong></h2><br>
        <p><strong>Price : </strong>${data.price}</p><br>
        <p><strong>Category : </strong>${data.category}</p><br>
        <p><strong>Description : </strong>${data.description}</strong></p>
        </div>
        `   
    })
    .catch((error)=>{
        console.log(error)
    })
})

//PUT Method
putButton.addEventListener("click",()=>{
    fetch("https://fakestoreapi.com/products/1",{
        method:"PUT",
        headers: {"Content-Type": "application/json"

            },
        body: JSON.stringify({
            title: "Premium White Graphic T-Shirt",
            price: 34.99,
            category: "Unisex Fashion",
            description: "Updated version with premium cotton material, stylish graphic print, and a more comfortable oversized fit for everyday fashion.",
            image:"https://thfvnext.bing.com/th/id/OIP.s2yAEYxDps8tArT_6X8oTQHaHa?w=208&h=208&c=7&r=0&o=7&cb=thfvnextfalcon&dpr=1.3&pid=1.7&rm=3"
            
    })
    
    })
    .then((resolve)=>resolve.json())
    .then((data)=>{
        result.innerHTML=`
        <div>
        <img src="${data.image}" width="200" height="200">
        <h2><strong>Title : ${data.title}</strong></h2><br>
        <p><strong>Price : </strong>${data.price}</p><br>
        <p><strong>Category : </strong>${data.category}</p><br>
        <p><strong>Description : </strong>${data.description}</strong></p>
        </div>
        ` 
    })
    .catch((error)=>{
        console.log(error)
    })
})


//DELETE Method
deleteButton.addEventListener("click",()=>{
    fetch("https://fakestoreapi.com/products/1",{
        method : "DELETE"
    })
    .then((response)=>{
        if(response.ok){
            result.innerHTML= `
            <h3>Deleted Successfully</h3>
            <p>The selected t-shirt product has been successfully removed from the store inventory.</p>
            `

        }
    })
})