/* dyna-site.js */

/* Lee sessionStorage para enterarse que <main> insertar */
let main = sessionStorage.getItem ('main');

var listCarts = [];

/* Array de productos */
let products = [
    {
        id: 0,
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
        id: 1,
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
        id: 2,
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
        id: 3,
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
        id: 4,
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
        id: 5,
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

/* Guarda en sessionStorage el parámetro main de la próxima página a cargar */
function loadMain(the_value) {
    sessionStorage.setItem('main', the_value);
}

/* Guarda en sessionStorage el ID del producto a mostrar su detalle */
function abrirDetalle(the_id) {
    sessionStorage.setItem ('detalle', the_id);
}

/* Elementos del DOM del carrito */
const listCart = document.querySelector('.listCart');
const total = document.querySelector('.total');

function addToCart(the_id) {
    /* verifico si el producto está en el carrito, si no lo agrego */
    if(listCarts[the_id] == null) {
        
        /* Copiar el producto de la lista al carrito */
        listCarts[the_id] = JSON.parse(JSON.stringify(products[the_id]));

        /* Inicializo la cantidad del producto en 1 */
        listCarts[the_id].quantity = 1;
    }  
    console.log(listCarts);
    reloadCart();
}

/* Función para cambiar la cantidad de un producto en el carrito */
function changeQuantity(key, quantity){
    /* Verificar si la nueva cantidad es 0 */
    if(quantity == 0){

        /* Eliminar el producto del carrito si la cantidad es 0 */
        delete listCarts[key];

    } else {
        /* Actualizar la cantidad del producto y recalcular el precio total */
        listCarts[key].quantity = quantity;
        listCarts[key].price = quantity * products[key].price;
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
    listCarts.forEach((value, key) => {
        
        /* Calcular el precio total y la cantidad de productos en el carrito */
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        
        /* Verificar si el producto no es nulo */
        if (value != null) {
        
            /* Crear elementos HTML para mostrar el producto en el carrito */
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="${value.image}"/></div>
                <div class="product-name">${value.model}</div>
                <div class="product-price">$ ${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;

            /* Agregar el nuevo elemento al carrito */
            listCart.appendChild(newDiv);        
        }
    });

    /* Mostrar el precio total y la cantidad de productos en el carrito */
    total.innerText = "$ " + totalPrice.toLocaleString();
    listCarts.quantity.innerText = count;   
}

/* main tiene el valor de la seccion <main> que se necesita cargar */ 
switch (main) {
    case 'acerca':
        const mainAcercaJS = `
            <h1>Acerca de <span>fx guitars</span></h1>
            <div class="acerca-frame">
                <div class="acerca-blabla">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam quasi quae laboriosam accusantium alias incidunt minus adipisci earum temporibus quos obcaecati fugiat dolorum voluptate sapiente perspiciatis inventore quidem eveniet culpa animi in ratione, aut modi! Voluptatibus, blanditiis, sunt eius odit omnis veniam nulla dicta deserunt ea, laboriosam laborum beatae rem quis doloribus incidunt quisquam recusandae eveniet. Repudiandae, placeat. Temporibus voluptatum quia delectus, ut quos saepe aliquid officia aspernatur excepturi veritatis beatae velit, ipsam quidem vitae. Nam aliquid odio officia molestias aspernatur a nesciunt, corrupti quasi repellat itaque, nihil numquam consequatur deleniti dolores at tempore quae culpa laudantium expedita ex fuga!</p>
                    <img src="img/construccion-1.jpg" alt="Construcción">
                </div>
                <div class="acerca-blabla">
                    <img src="img/construccion-2.jpg" alt="Construcción">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam quasi quae laboriosam accusantium alias incidunt minus adipisci earum temporibus quos obcaecati fugiat dolorum voluptate sapiente perspiciatis inventore quidem eveniet culpa animi in ratione, aut modi! Voluptatibus, blanditiis, sunt eius odit omnis veniam nulla dicta deserunt ea, laboriosam laborum beatae rem quis doloribus incidunt quisquam recusandae eveniet. Repudiandae, placeat. Temporibus voluptatum quia delectus, ut quos saepe aliquid officia aspernatur excepturi veritatis beatae velit, ipsam quidem vitae. Nam aliquid odio officia molestias aspernatur a nesciunt, corrupti quasi repellat itaque, nihil numquam consequatur deleniti dolores at tempore quae culpa laudantium expedita ex fuga!</p>
                </div>
                <div class="acerca-blabla">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam quasi quae laboriosam accusantium alias incidunt minus adipisci earum temporibus quos obcaecati fugiat dolorum voluptate sapiente perspiciatis inventore quidem eveniet culpa animi in ratione, aut modi! Voluptatibus, blanditiis, sunt eius odit omnis veniam nulla dicta deserunt ea, laboriosam laborum beatae rem quis doloribus incidunt quisquam recusandae eveniet. Repudiandae, placeat. Temporibus voluptatum quia delectus, ut quos saepe aliquid officia aspernatur excepturi veritatis beatae velit, ipsam quidem vitae. Nam aliquid odio officia molestias aspernatur a nesciunt, corrupti quasi repellat itaque, nihil numquam consequatur deleniti dolores at tempore quae culpa laudantium expedita ex fuga!</p>
                    <img src="img/construccion-3.jpg" alt="Construcción">
                </div>
                <div class="acerca-blabla">
                    <img src="img/electronica.png" alt="Electrónica">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam quasi quae laboriosam accusantium alias incidunt minus adipisci earum temporibus quos obcaecati fugiat dolorum voluptate sapiente perspiciatis inventore quidem eveniet culpa animi in ratione, aut modi! Voluptatibus, blanditiis, sunt eius odit omnis veniam nulla dicta deserunt ea, laboriosam laborum beatae rem quis doloribus incidunt quisquam recusandae eveniet. Repudiandae, placeat. Temporibus voluptatum quia delectus, ut quos saepe aliquid officia aspernatur excepturi veritatis beatae velit, ipsam quidem vitae. Nam aliquid odio officia molestias aspernatur a nesciunt, corrupti quasi repellat itaque, nihil numquam consequatur deleniti dolores at tempore quae culpa laudantium expedita ex fuga!</p>
                </div>
            </div>`;

            document.querySelector("main").innerHTML = mainAcercaJS;    
        break;
        
    case 'contacto':
        const mainContactoJS = `
            <div id="mainContacto">
                <div id="contacto-container">
                    <h2>Contacto</h2>

                    <form action="https://formspree.io/f/xyzyklpj" method="POST">
                    <!--  action="https://formspree.io/f/xyzyklpj" -->
                        <div>               
                            <label for="nombre">Nombre:</label>
                            <input type="text" name="nombre" required>
                        </div>

                        <div> 
                            <label for="email">Correo electrónico:</label>
                            <input type="text" name="email" required>
                        </div>

                        <div> 
                            <label for="mensaje">Mensaje:</label>
                            <textarea name="mensaje" rows=4 required></textarea>
                        </div>

                        <button type="submit" title="Haga clic para enviar">Enviar</button>
                    </form>
                </div>
            </div>`;

            document.querySelector("main").innerHTML = mainContactoJS;
        break;
        
    case 'detalle':
        /* Lee sessionStorage para enterarse el ID del producto a mostrar */
        let id = sessionStorage.getItem ('detalle');

        const mainDetalleJS = `
            <div id="detail-block">
                <div class="detail-image">
                    <img src="${products[id].image}" alt="${products[id].model}">
                </div>

                <div>
                    <h2>${products[id].model}</h2>
                    <h4>${products[id].color}</h4>
                    <h4 class="price">$ ${products[id].price}</h4>
                    <a class="btn-add-cart" href="index.html" onclick="loadMain('productos')">Volver</a>
                </div>

                <div>
                    <table>
                        <tr>
                            <th colspan="2">Descripción</th>
                        </tr>
                        <tr>
                            <th>Modelo</th>
                            <td>${products[id].model}</td>
                        </tr>
                        <tr>
                            <th>Color</th>
                            <td>${products[id].color}</td>
                        </tr>
                        <tr>
                            <th>Cuerpo</th>
                            <td>${products[id].body}</td>
                        </tr>
                        <tr>
                            <th>Mango</th>
                            <td>${products[id].neck}</td>
                        </tr>
                        <tr>
                            <th>Diapasón</th>
                            <td>${products[id].fretboard}</td>
                        </tr>
                        <tr>
                            <th>Incrustaciones</th>
                            <td>${products[id].inlays}</td>
                        </tr>
                        <tr>
                            <th>Escala</th>
                            <td>${products[id].scale}</td>
                        </tr>
                        <tr>
                            <th>Radio</th>
                            <td>${products[id].radio}</td>
                        </tr>
                        <tr>
                            <th>Trastes</th>
                            <td>${products[id].frets}</td>
                        </tr>
                        <tr>
                            <th>Cejilla</th>
                            <td>${products[id].nut}</td>
                        </tr>
                        <tr>
                            <th>Tensor</th>
                            <td>${products[id].tensor}</td>
                        </tr>
                        <tr>
                            <th>Clavijas</th>
                            <td>${products[id].tuners}</td>
                        </tr>
                        <tr>
                            <th>Puente</th>
                            <td>${products[id].bridge}</td>
                        </tr>
                        <tr>
                            <th>Micrófonos</th>
                            <td>${products[id].pickups}</td>
                        </tr>
                        <tr>
                            <th>Electrónica</th>
                            <td>${products[id].electronics}</td>
                        </tr>
                        <tr>
                            <th>Terminación</th>
                            <td>${products[id].finishing}</td>
                        </tr>
                    </table>
                </div>    
            </div>`;

            document.querySelector("main").innerHTML = mainDetalleJS;
        break;
        
    case 'productos': 
        /* Crea referencia al <main> de productos.html */
        const main = document.querySelector("main");

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
                <a href="index.html" onclick="abrirDetalle(${product.id}); loadMain('detalle')"><img src="${product.image}" alt="${product.model}"></a>
                <div>
                    <h3>${product.model}</h3>
                    <h5>${product.color}</h5>
                    <h5 class="price">$ ${product.price}</h5>
                    <a class="btn-add-cart" onclick="addToCart(${product.id})">Agregar al carrito</a>
                    <a class="btn-more-info" href="index.html" onclick="abrirDetalle(${product.id}); loadMain('detalle')">Ver detalles</a>
                </div>`;

            section.appendChild(article);
        });

        break;  

    case 'index':  
    default:
        const mainIndexJS = `
        <section class="panel-image">
            <div class="panel-text">
                <h1>Diseños exclusivos</h1>
                <p>en guitarras eléctricas</p>
                <a href="index.html" onclick="loadMain('productos')">Ver</a>
            </div>
        </section>
        
        <h1>Feedback</h1>

        <section class="panel-opinion">
            <article>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe iusto facere vel in illo rerum voluptatum officiis ut ex. Perspiciatis quia, minus id reiciendis nisi optio repellat delectus voluptas harum!</p>
                <h4>Roberto Lasarte. FrankenStrat SE</h4>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
            </article>

            <article>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe iusto facere vel in illo rerum voluptatum officiis ut ex. Perspiciatis quia, minus id reiciendis nisi optio repellat delectus voluptas harum!</p>
                <h4>Esteban Morales. Hellfire Extreme</h4>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
            </article>

            <article>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe iusto facere vel in illo rerum voluptatum officiis ut ex. Perspiciatis quia, minus id reiciendis nisi optio repellat delectus voluptas harum!</p>
                <h4>Lucas Guagliardi. Shark Tail</h4>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
            </article>

            <article>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe iusto facere vel in illo rerum voluptatum officiis ut ex. Perspiciatis quia, minus id reiciendis nisi optio repellat delectus voluptas harum!</p>
                <h4>Franco Maldini. Stardust II</h4>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
            </article>

            <article>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe iusto facere vel in illo rerum voluptatum officiis ut ex. Perspiciatis quia, minus id reiciendis nisi optio repellat delectus voluptas harum!</p>
                <h4>Eduardo "Eddie" Zunino. FrankenStrat SE</h4>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
            </article>

            <article>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe iusto facere vel in illo rerum voluptatum officiis ut ex. Perspiciatis quia, minus id reiciendis nisi optio repellat delectus voluptas harum!</p>
                <h4>Carlos Vega. Stardust II</h4>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
            </article>

            <article>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe iusto facere vel in illo rerum voluptatum officiis ut ex. Perspiciatis quia, minus id reiciendis nisi optio repellat delectus voluptas harum!</p>
                <h4>Mariano Glek. Red Special Tribute</h4>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
            </article>

            <article>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe iusto facere vel in illo rerum voluptatum officiis ut ex. Perspiciatis quia, minus id reiciendis nisi optio repellat delectus voluptas harum!</p>
                <h4>Matias Salerno. Snow Storm</h4>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
            </article>
        </section>

        <section id="location">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.8847752943725!2d-58.44201382534119!3d-34.607075072953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca6cda7c2933%3A0x1fd294c08cebcbce!2sDr.%20Desiderio%20Fernando%20Davel%20600-502%2C%20C1414%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1730760464633!5m2!1ses-419!2sar" width="100%" height="600" style="border:none;" allowfullscreen="false" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </section>`;

        document.querySelector("main").innerHTML = mainIndexJS;
}
