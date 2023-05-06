
let proximos;
obtenerJSON()

async function obtenerJSON(){
    const JSON_prod = '../json/proximo.json';
    const respuesta = await fetch(JSON_prod);
    const data = await respuesta.json();
    proximos = data;
    panelDeLanzamiento();    
}

let car = JSON.parse(localStorage.getItem('saveStateCarro'));
if(car != null){
    document.getElementById('carrito').style.display = 'block';
}

let paneles = document.getElementById('lanzamiento');
paneles.setAttribute('class', 'd-flex flex-wrap');

function panelDeLanzamiento(){
    for (const lanza of proximos) {
    const panel = document.createElement("div");
    panel.setAttribute('class', 'separacion')
    
    panel.innerHTML += `
    <div id="${lanza.id}">
        <div class="shadow panel">
            <img src="${lanza.portada}" alt="manga${lanza.id}" class="img-fluid">
            <div class="mangaTitulo shadow">
                <p class="estiloTitulo"> ${lanza.manga} ${lanza.num}</p>
                <p class="estiloTitulo">FECHA: ${lanza.fecha}</p>
            </div>
        </div>
    </div>
    `;

    paneles.appendChild(panel);
    }
}

panelDeLanzamiento()