const products=document.getElementById("products")

async function getUser() {
    const imgDiv=document.createElement("div")
  try {
    const response = await fetch(
      "https://fakestoreapi.com/products"
    );
    const data = await response.json();
    const res=data.map(item=>{
   
        const itemLists=`
        <div class="itemDiv">
        <img src="${item.image}" width=200px height=200px class="itemImg">
        <div class="descDiv">
        <h1 style="text-align:center">${item.category}</h1>
    
        <p>${item.title}</p>
        <p class="pText">Price:</p>
        <span>${item.price} $</span>
        <p class="pText">Description:</p>
        <p>${item.description}</p>
        
    
        
        </div>
        </div>
        `
        console.log(itemLists)
        imgDiv.classList.add("itemDiv")
        return itemLists;
        

    })
    products.innerHTML=res.join("")
    products.classList.add("product-grid")
  } catch (error) {
    console.log("Error:", error);
  }
}
getUser();