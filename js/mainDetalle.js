/* mainDetalle.js */

/* lee sessionStorage para enterarse el ID del producto a mostrar */
let id = sessionStorage.getItem ('producto');

/* Los indices del array estan basados en 0, mientras que los ID parten de 1 */
let idx = id - 1;

let details = [
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

/* Crea una referencia al <main> de detail.html */
const main = document.getElementById("detail-block");
main.innerHTML = `
            <div class="detail-image">
                <img src="${details[idx].image}" alt="${details[idx].model}">
            </div>

            <div>
                <h2>${details[idx].model}</h2>
                <h4>${details[idx].color}</h4>
                <h4 class="price">$ ${details[idx].price}</h4>
                <a class="btn-add-cart" href="${idx}">Agregar al carrito</a>
            </div>

            <div>
                <table>
                    <tr>
                        <th colspan="2">Descripción</th>
                    </tr>
                    <tr>
                        <th>Modelo</th>
                        <td>${details[idx].model}</td>
                    </tr>
                    <tr>
                        <th>Color</th>
                        <td>${details[idx].color}</td>
                    </tr>
                    <tr>
                        <th>Cuerpo</th>
                        <td>${details[idx].body}</td>
                    </tr>
                    <tr>
                        <th>Mango</th>
                        <td>${details[idx].neck}</td>
                    </tr>
                    <tr>
                        <th>Diapasón</th>
                        <td>${details[idx].fretboard}</td>
                    </tr>
                    <tr>
                        <th>Incrustaciones</th>
                        <td>${details[idx].inlays}</td>
                    </tr>
                    <tr>
                        <th>Escala</th>
                        <td>${details[idx].scale}</td>
                    </tr>
                    <tr>
                        <th>Radio</th>
                        <td>${details[idx].radio}</td>
                    </tr>
                    <tr>
                        <th>Trastes</th>
                        <td>${details[idx].frets}</td>
                    </tr>
                    <tr>
                        <th>Cejilla</th>
                        <td>${details[idx].nut}</td>
                    </tr>
                    <tr>
                        <th>Tensor</th>
                        <td>${details[idx].tensor}</td>
                    </tr>
                    <tr>
                        <th>Clavijas</th>
                        <td>${details[idx].tuners}</td>
                    </tr>
                    <tr>
                        <th>Puente</th>
                        <td>${details[idx].bridge}</td>
                    </tr>
                    <tr>
                        <th>Micrófonos</th>
                        <td>${details[idx].pickups}</td>
                    </tr>
                    <tr>
                        <th>Electrónica</th>
                        <td>${details[idx].electronics}</td>
                    </tr>
                    <tr>
                        <th>Terminación</th>
                        <td>${details[idx].finishing}</td>
                    </tr>
                </table>
            </div>`;
