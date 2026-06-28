let container = document.querySelector(".cart-items");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addCart() {

    container.innerHTML = "";
    let total = 0;

    cart.forEach((product, index) => {

        let div = document.createElement("div");
        div.classList.add("product");

        div.innerHTML = `
            <img src="${product.thumbnail}" alt="">

            <div class="info">
                <h3>${product.title}</h3>
                <p>${product.description}</p>

                <div class="links">
                    <a href="#" class="remove">Remove</a>
                </div>
            </div>

            <div class="price">₹${product.price}</div>

            <div class="qty">
                <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>more</option>
                </select>
            </div>

            <div class="total">₹${product.price}</div>
        `;

        div.querySelector(".remove").addEventListener("click", (e) => {
            e.preventDefault();

            cart.splice(index, 1);
            localStorage.setItem("cart", JSON.stringify(cart));

            addCart();
        });

        container.appendChild(div);

        total += product.price;
    });

    document.getElementById("items").textContent = cart.length;
    document.getElementById("total").textContent = total;
}

addCart();