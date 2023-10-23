// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        },
        subtotalWithDiscount: 0
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        },
        subtotalWithDiscount: 0
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]

// => Reminder, it's extremely important that you debug your code. 
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster. 
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {

    let producte = products.find(product => product.id === id);
    let producteTrobat = cart.find(product => product.id === id);

    if (producteTrobat) {
        producteTrobat.quantity++;
    } else {
        cart.push({ ...producte, quantity: 1 })
    }
    console.log("Contingut del carret: ", cart);
    applyPromotionsCart();
    calculateTotal();
}


// Exercise 2
function cleanCart() {
    cart = [];
    console.log("Carret buidat amb èxit.")
    const cartList = document.getElementById("cart_list");
    cartList.innerHTML = "";
    const totalElement = document.getElementById("total_price");
    totalElement.innerHTML = "";
}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    let total = 0;
    for (let product of cart) {
        total += product.subtotalWithDiscount;
        console.log("Preu total: ", total);
    }
    return total;

}

// Exercise 4
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"

    for (let product of cart) {

        if (product.offer && product.quantity >= product.offer.number) {
            let descompte = product.price * (1 - product.offer.percent / 100);
            product.subtotalWithDiscount = descompte * product.quantity;
        } else {
            product.subtotalWithDiscount = product.price * product.quantity;
        }
        total += product.subtotalWithDiscount;
    }
}
// Exercise 5
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    const cartList = document.getElementById("cart_list");
    cartList.innerHTML = "";

    for (let product of cart) {
        const row = document.createElement("tr");

        const productName = document.createElement("th");
        productName.textContent = product.name;

        const price = document.createElement("td");
        price.textContent = product.price.toFixed(2);

        const quantity = document.createElement("td");
        quantity.textContent = product.quantity;

        const subtotalWithDiscount = document.createElement("td");
        subtotalWithDiscount.textContent = product.subtotalWithDiscount.toFixed(2);

        row.appendChild(productName);
        row.appendChild(price);
        row.appendChild(quantity);
        row.appendChild(subtotalWithDiscount);

        cartList.appendChild(row);
    }
    const totalPrice = calculateTotal();
    const totalElement = document.getElementById("total_price");
    totalElement.textContent = totalPrice.toFixed(2);
}


// ** Nivell II **

// Exercise 7
function removeFromCart(id) {
    let producteTrobat = cart.findIndex(product => product.id === id);

    if (producteTrobat !== -1) {
        if (cart[producteTrobat].quantity > 1) {
            cart[producteTrobat].quantity--;
        } else {
            cart.splice(producteTrobat, 1);}
    }

    applyPromotionsCart();
    calculateTotal();
    printCart();
}

function open_modal() {
    printCart();
}