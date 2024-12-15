/* mainProducts.js */

/* Array de productos (JSON) */

let products = [
    {
        id: 1,
        model: "Hellfire Extreme",
        color: "Blood Burst",
        body: "Fresno del pantano",
        neck: "Arce canadiense tostado",
        fretboard: "Ébano",
        inlays: "Números romanos",
        scale: "25,5\"",
        radio: "14\"",
        frets: "24 X-Jumbo de acero inoxidable",
        nut: "42mm Floyd Rose 1500 Series",
        tensor: "Doble acción",
        tuners: "Grover Rotomatic 18:1",
        bridge: "Floyd Rose 1500 Series",
        pickups: "Sustainiac&reg;/Dimarzio DP155",
        electronics: "Dimarzio",
        finishing: "Multifoil brillante",
        image: "img/Hellfire Extreme.png",
        price: 2500.00
    },
    {
        id: 2,
        model: "Stardust II",
        color: "Charcoal Satin",
        body: "Caoba hondureña",
        neck: "Arce canadiense tostado",
        fretboard: "Palo de Rosa",
        inlays: "Perladas",
        scale: "25,5\"",
        radio: "14\"",
        frets: "24 Jumbo",
        nut: "42mm Grafito",
        tensor: "Doble accióm",
        tuners: "Grover Rotomatic",
        bridge: "Tune-O-Matic",
        pickups: "Dimarzio DP211/DP212",
        electronics: "Dimarzio",
        finishing: "Satinada",
        image: "img/Stardust II.png",
        price: 2500.00
    },
    {
        id: 3,
        model: "Red Special Tribute",
        color: "Original Red",
        body: "Cerezo americano",
        neck: "Caoba hondureña",
        fretboard: "Palisandro de la India",
        inlays: "Nácar",
        scale: "25,5\"",
        radio: "12\"",
        frets: "24 Dunlop 6100",
        nut: "42mm Hueso",
        tensor: "Doble acción",
        tuners: "Gotoh",
        bridge: "Wilkinson Wov08",
        pickups: "Fender Noiseless",
        electronics: "CTS Electronics",
        finishing: "Red Special brillante",
        image: "img/Red Special Tribute.png",
        price: 3000.00
    },
    {
        id: 4,
        model: "FrankenStrat SE",
        color: "Red/White/Black Striped Relic",
        body: "Tilo americano",
        neck: "Arce canadiense",
        fretboard: "Arce canadiense",
        inlays: "Acrílicas negras",
        scale: "25,5\"",
        radio: "14\"",
        frets: "22 Jumbo",
        nut: "43mm Floyd Rose&reg; 1000 Series",
        tensor: "Doble acción",
        tuners: "Gotoh",
        bridge: "Floyd Rose&reg; 1000 Series",
        pickups: "GF '59 Standard Vintage",
        electronics: "Dimarzio",
        finishing: "Relic",
        image: "img/Frankenstrat SE.png",
        price: 3000.00
    },
    {
        id: 5,
        model: "Shark Tail",
        color: "Black Satin",
        body: "Caoba hondureña",
        neck: "Arce canadiense tostado",
        fretboard: "Ébano",
        inlays: "-",
        scale: "25,5\"",
        radio: "14\"",
        frets: "24 X-Jumbo acero inoxidable",
        nut: "42mm Floyd Rose&reg; 1000 Series",
        tensor: "Doble acción",
        tuners: "Grover Rotomatic",
        bridge: "Floyd Rose&reg; 1000 Series",
        pickups: "EMG 81 Active",
        electronics: "Dimarzio",
        finishing: "Satinada",
        image: "img/Shark tail.png",
        price: 3000.00
    },
    {
        id: 6,
        model: "Snow Storm",
        color: "Snow White",
        body: "Aliso americano",
        neck: "Arce canadiense tostado",
        fretboard: "Ébano",
        inlays: "-",
        scale: "27\" Baritone",
        radio: "12\"",
        frets: "24 X-Jumbo acero inoxidable",
        nut: "42mm Hueso",
        tensor: "Doble acción",
        tuners: "Kluson Locking",
        bridge: "TonePros Locking TOM w/ String Thru",
        pickups: "EMG 707/81-7",
        electronics: "CTS Electronics",
        finishing: "Brillante",
        image: "img/Snow Storm.png",
        price: 3000.00
    }
];

/*

La seccion "main" de productos.html contiene <section id="product-container"> que será
llenada dinamicamente con los <article> de cada producto mediante JS segun la plantilla

            <article class="product-item">
                <a href=products.link><img src=products.image alt=products.model></a>
                <div>
                    <h3>products.model</h3>
                    <h5>products.color</h5>
                    <h5 class="price">products.price</h5>
                    <a class="btn-add-cart" href=products.link>Ver detalles</a>
                </div>    
            </article>
*/

/* Crea referencia al <main> de productos.html */
const main = document.querySelector("#mainProductos");

/* Crea y agrega <section id="product-container"> */
const section = document.createElement("section");
section.id = "product-container";
main.appendChild(section);

/* Genera las entradas de productos */
products.forEach(product => {
    /* Crea y agrega <article class="product-item"> */
    const article = document.createElement("article");
    article.classList.add("product-item");
    
    article.innerHTML = `
        <a href="detalle.html" onclick="abrirDetalle(${product.id})"><img src="${product.image}" alt="${product.model}"></a>
        <div>
            <h3>${product.model}</h3>
            <h5>${product.color}</h5>
            <h5 class="price">$ ${product.price}</h5>
            <a class="btn-add-cart" onclick="addToCart(${product.id})">Agregar al carrito</a>
            <a class="btn-more-info" href="detalle.html" onclick="abrirDetalle(${product.id})">Ver detalles</a>
        </div> 
    `;

    section.appendChild(article);
});

/* Elementos del DOM del carrito */
const cartIcon = document.querySelector('#cart-btn');
const cart = document.querySelector('.cart');
const closeCart = document.querySelector('.cart-close');
const list = document.querySelector('.list');
const listCart = document.querySelector('.listCart');
const total = document.querySelector('.total');
const quantity = document.querySelector('.quantity');

/* Evento para mostrar el carrito al hacer clic en el icono del carrito */
cartIcon.addEventListener('click', () => {
    cart.classList.add('active');
});

/* Evento para cerrar el carrito al hacer clic en el botón de cerrar */
closeCart.addEventListener('click', () => {
    cart.classList.remove('active');
});

let listCards = [];

function abrirDetalle(the_id) {
    /* En realidad guarda en sessionStorage the_id para que mainDetalle.js levante los datos del producto con id = the_id */
    sessionStorage.setItem ('detalle', the_id);
}

/* Función para cambiar la cantidad de un producto en el carrito */
function changeQuantity(key, quantity){
    /* Verificar si la nueva cantidad es 0 */
    if(quantity == 0){

        /* Eliminar el producto del carrito si la cantidad es 0 */
        delete listCards[key];

    } else {
        /* Actualizar la cantidad del producto y recalcular el precio total */
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }

    /* Actualizar la visualización del carrito */
    reloadCart();
}

function reloadCart() {
    /* Limpio el contenido del carrito */
    listCart.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    
    /* Iterar sobre los productos en el carrito */
    listCart.forEach((value, key) => {
        
        /* Calcular el precio total y la cantidad de productos en el carrito */
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        
        /* Verificar si el producto no es nulo */
        if(value != null) {
        
            /* Crear elementos HTML para mostrar el producto en el carrito */
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="${value.image}"/></div>
                <div class="product-name">${value.name}</div>
                <div class="product-price">${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;

                /* Agregar el nuevo elemento al carrito */
                listCart.appendChild(newDiv);        
        
        }
    })
    /* Mostrar el precio total y la cantidad de productos en el carrito */
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}

        
function addToCart (the_id) {
    /* verifico si el producto está en el carrito, si no lo agrego */
    if(listCards[key] == null) {
        /* Copiar el producto de la lista al carrito */
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        
        /* Inicializo la cantidad del producto en 1 */
        listCards[key].quantity = 1;
    }  
    reloadCart();
}
