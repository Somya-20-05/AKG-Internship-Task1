let Product = document.querySelector(".products");
let btn = document.querySelector("button");


 async function dataFetch(){
    let Url = "https://dummyjson.com/products?limit=194";

    let res =  await fetch(Url);
    let data = await res.json();
    console.log(data.products[0].thumbnail);

    data.products.forEach((product) => {
       let div =  document.createElement("div");
       div.classList.add("card");
       let image = document.createElement("img");
       image.src = product.thumbnail;
       let h2 = document.createElement("h2");
       h2.textContent = product.title;
       let para = document.createElement("p");
       para.classList.add("price");
       para.textContent = "₹ " + product.price;
       let h3 = document.createElement("h3");
       h3.textContent = product.category;
       let p = document.createElement("p");
       p.textContent = product.description;
       let btn = document.createElement("button");
       btn.textContent = "View Details";
       div.appendChild(image);
       div.appendChild(h2);
       div.appendChild(para);
       div.appendChild(h3);
       div.appendChild(p);
       div.appendChild(btn);

       Product.appendChild(div);

    btn.addEventListener("click" , function(){
    localStorage.setItem("productId" , product.id);// product ki id save krne ke liye
    window.location.href = "product.html";
    });

    

});

}

dataFetch();


