const products = [
    {id: 1, name:'product1', price: 10},
    {id: 2, name: 'product2', price: 20},
    {id : 3, name: 'product3', price: 30},
];
const productsContainer = document.getElementById('products');
const cartContainer = document.getElementById('cart');
const checkoutButton= document.getElementById('checkout-button');
checkoutButton.addEventListener('click', () => {
    alert('Checkout Complete');
});

const clearButton=document.getElementById('clear-button');
clearButton.addEventListener('click', () => clearCart());
function displayProducts () {
    productsContainer.innerHTML='';
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.classList.remove('product');
        productElement.innerHTML = `<span>${product.name}-${product.price}</span>
        <button onClick="addToCart(${product.id})">Add</button>
        `;
        productsContainer.appendChild(productElement);

    });

}

const cart=[];
function addToCart(productId) {
    const product = products.find(p=>p.id === productId);
    if(product){
        cart.push(product);
        renderCart();
    }
}

function removeFromCart(index) {
    if(cart[index])
    {
        cart.splice(index,1);
        renderCart();

     }
        
}

function clearCart() {
    cart.splice(0,cart.length);
    renderCart();
}

function renderCart() {
    cartContainer.innerHTML="";
    cart.forEach((item,index) => {
        const cartElement= document.createElement('div');
        cartElement.classList.add('cart'); 
        cartElement.classList.remove('cart');
        cartElement.innerHTML=`${item.name}-${item.price} <button onClick="removeFromCart(${index})">-</button>`;
        cartContainer.appendChild(cartElement);
    });
}

displayProducts();