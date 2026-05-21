const products=document.getElementById("products")

async function getProduct() {
    const imgDiv=document.createElement("div")
  try {
    const response = await fetch(
      "https://fakestoreapi.com/products"
    );
    const data = await response.json();
    const res=data.map(item=>{
   
        const itemLists=`
        <div class="itemDiv">
            <div class="image-container">
                <div><center><img src="${item.image}" width=200px height=200px class="itemImg"></center></div>
                <div class="btn"><button class="addCart" data-id="${item.id}">Add to Cart</button></div>
            </div>
            <div class="descDiv">
                <h1 style="text-align:center">${item.category}</h1>
                <p>${item.title}</p>
                <p>Price:<span> ${item.price} $</span></p>
                <b>Description:</b><div class="description">${item.description}</div>
            </div>
        </div>
        `;
        
        imgDiv.classList.add("itemDiv")
        return itemLists;
    })
    products.innerHTML=res.join("")
    products.classList.add("product-grid")
    products.addEventListener('click', (event) => {
    if (event.target.classList.contains('addCart')) {
        const productId = event.target.dataset.id;
        console.log("Product ID ", productId);
        handleAddToCart(productId);
    }
});

async function handleAddToCart(id) {
    fetch("https://fakestoreapi.com/carts${id}",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify({

        })
    })
}
  } catch (error) {
    console.log("Error:", error);
  }
}
getProduct();

const addCart=document.querySelector(".addCart")
const field=document.getElementById("field")
var count=0;
addCart.addEventListener("click",()=>{
  count++;
  console.log(count)
field.textContent=count
})







 /*async function singleProduct(id){
  const singleContainer=document.getElementById("single-container");
  console.log(id);
try{
    const response=await fetch("https://fakestoreapi.com/products/id")
    const data = await response.json();
    window.location.href="singleProduct.html"; 
    const res=`<div>
    <p>Title:${data.title}</p>
    </div>
    `;
    singleContainer.innerHTML=res;
    console.log(res);
    return res;
}
catch(err){
  console.log(err);
}
}
*/
