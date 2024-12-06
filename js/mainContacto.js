/* mainContacto.js */

/* <main> de contacto.html */
const mainContactoJS = `
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
</div>`;

document.querySelector("#mainContacto").innerHTML = mainContactoJS;
