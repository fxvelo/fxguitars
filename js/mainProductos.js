/* products.js */

/* Array de productos (JSON) */

let products = [
    {
        id: 1,
        model: "Hellfire Extreme",
        color: "Blood Burst",
        price: "$ 2500,00",
        image: "img/Hellfire Extreme.png",
        link:  "detail-hellfire.html"
    },
    {
        id: 2,
        model: "Stardust II",
        color: "Charcoal Satin",
        price: "$ 2500,00",
        image: "img/Stardust II.png",
        link:  "detail-stardust2.html"
    },
    {
        id: 3,
        model: "Red Special Tribute",
        color: "Original Red",
        price: "$ 3000,00",
        image: "img/Red Special Tribute.png",
        link:  "detail-red-special.html"
    },
    {
        id: 4,
        model: "FrankenStrat SE",
        color: "Red/White/Black Striped Relic",
        price: "$ 3000,00",
        image: "img/Frankenstrat SE.png",
        link:  "detail-evh.html"
    },
    {
        id: 5,
        model: "Shark Tail",
        color: "Black Satin",
        price: "$ 3000,00",
        image: "img/Shark tail.png",
        link:  "detail-shark-tail.html"
    },
    {
        id: 6,
        model: "Snow Storm",
        color: "Snow White",
        price: "$ 3000,00",
        image: "img/Snow Storm.png",
        link:  "detail-snow-storm.html"
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
        <a href="${product.link}"><img src="${product.image}" alt="${product.model}"></a>
        <div>
            <h3>${product.model}</h3>
            <h5>${product.color}</h5>
            <h5 class="price">${product.price}</h5>
            <a class="btn-add-cart" href="${product.link}">Ver detalles</a>
        </div> 
    `;

    section.appendChild(article);
});