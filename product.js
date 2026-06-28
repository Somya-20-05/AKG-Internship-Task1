 let btn = document.querySelector("button");
 
 // 1. Listing page se save ki hui id lo
let id = localStorage.getItem("productId");

async function getProduct() {

    let url = "https://dummyjson.com/products?limit=194";

    let res = await fetch(url);
    let data = await res.json();

    // 2. Usi id wala product dhoondo
    let product = data.products.find((item) => item.id == id);

    if (!product) {
        console.log("Product not found");
        return;
    }

    // 3. HTML me details dikhao
    document.getElementById("image").src = product.thumbnail;
    document.getElementById("title").textContent = product.title;
    document.getElementById("price").textContent = "₹ " + product.price;
    document.getElementById("description").textContent = product.description;

    btn.addEventListener("click" , () => {
         let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));
        window.location.href = "cart.html";
    })
}

getProduct();