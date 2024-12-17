/* headerFooter.js */

/* Guarda en sessionStorage el parámetro main de la próxima página a cargar */
function loadMain(value) {
    sessionStorage.setItem('main', value);
}

/* Header */
const headerJS = `
        <a id="logo" href="index.html" onclick="loadMain('index')">fx guitars</a>

        <nav id="navbar">
            <a href="index.html" onclick="loadMain('index')">Inicio</a>
            <a href="productos.html" onclick="loadMain('productos')">Productos</a>
            <a href="acerca.html" onclick="loadMain('acerca')">Acerca de</a>
            <a href="contacto.html" onclick="loadMain('contacto')">Contacto</a>
        </nav>

        <div id="icons">
            <div id="cart-btn"><i class="fa-solid fa-cart-shopping"></i></div>
            <div><i class="fas fa-user"></i></div>
            <div id="menu-btn"><i class="fas fa-bars"></i></div>
        </div>
        
        <!--Cart-->
        <div id="cart">
            <h3 class="cart-title">Carrito</h3>

            <!--Cart content-->
            <ul class="listCart"></ul>
            <div class="checkout">
                <div class="total">$ 0 </div>
                <div class="cart-close">Cerrar</div>
            </div>
        </div>`;

document.querySelector("header").innerHTML = headerJS;

/* Footer */
const footerJS = `
        <div id="footer-content">
            <div class="footer-box">
                <a id="footer-logo" href="#">fx guitars</a>

                <div class="social">
                    <a href="#" class="fab fa-facebook" alt="Facebook"></a>
                    <a href="#" class="fa-brands fa-square-instagram" alt="Instagram"></a>
                    <a href="#" class="fab fa-twitter" alt="X"></a>
                </div>
            </div>

            <div class="footer-box">
                <h3>Contactanos</h3>
                <a href="#">+ 54 9 11 7777 7777</a>
                <a href="contacto.html">fxguitars@gmail.com</a>
                <a href="index.html#location">Dr. Desiderio Fernando Davel 600, C1414 Cdad. Autónoma de Buenos Aires</a>
            </div>

            <div class="footer-box">
                <h3>Enlaces</h3>
                <a href="index.html">Inicio</a>
                <a href="productos.html">Productos</a>
                <a href="acerca.html">Acerca de</a>
                <a href="contacto.html">Contacto</a>
            </div>

            <div class="footer-box">
                <h3>Novedades</h3>
                <p>Suscribite para recibir novedades:</p>
                <form action="#" method="post">
                    <input type="email" name="" id="" placeholder="Email...">
                    <input type="submit" value="Suscribirse">
                </form>
            </div>
        </div>

        <div id="copyright">&copy; 2024 · Fernando Velo · 24233</div>`;

document.querySelector("footer").innerHTML = footerJS;

/* Muestra/oculta el menu hamburguesa */
const navbar = document.querySelector('#navbar');
document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
}
 
/* Muestra/oculta el carrito de compras */
const cartShop = document.querySelector('#cart');
document.querySelector('#cart-btn').onclick = () => {
    cartShop.classList.toggle('active');
}
