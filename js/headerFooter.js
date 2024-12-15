/* headerFooter.js */

/* Header */
const headerJS = `
        <a id="logo" href="index.html">fx guitars</a>

        <nav id="navbar">
            <a href="index.html">Inicio</a>
            <a href="productos.html">Productos</a>
            <a href="acerca.html">Acerca de</a>
            <a href="contacto.html">Contacto</a>
        </nav>

        <div id="icons">
            <div id="cart-btn"><i class="fa-solid fa-cart-shopping"></i></div>
            <div><i class="fas fa-user"></i></div>
            <div id="menu-btn"><i class="fas fa-bars"></i></div>
        </div>
        
        <!--Cart-->
        <div class="cart">
            <h1 class="card-title">Shopping Cart</h1>

            <!--Cart content-->
            <ul class="listCart"></ul>
            <div class="checkout">
                <div class="total">$ 0 </div>
                <div class="cart-close">Cerrar</div>
            </div>
        </div>`;

document.querySelector("header").innerHTML = headerJS;

/* Redirecciona a productos.html cada vez que se hace clic en el icono del carrito */
document.getElementById("cart-btn").addEventListener("click", () => {
    window.location.href = "productos.html";
});

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
