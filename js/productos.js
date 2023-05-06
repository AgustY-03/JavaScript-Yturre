
const carrito = JSON.parse(localStorage.getItem('saveStateCarro')) || [];

let productos;
obtenerJSON()

async function obtenerJSON(){
    const JSON_prod = '../json/productos.json';
    const respuesta = await fetch(JSON_prod);
    const data = await respuesta.json();
    productos = data;
    productos.sort((a,b) => b.id - a.id )
    renderProductos();    
}

let prodPanel = document.getElementById('prod-panel');
prodPanel.setAttribute('class', 'd-flex flex-wrap');

// Render de productos

function renderProductos(){
    for(let i=0 ; i<=7 ; i++){
        const prod_panel = document.createElement('div');
        prod_panel.setAttribute('class', 'prod-separation');

        prod_panel.innerHTML += `
            <div id="${productos[i].id}" class="col-xl-3">
                <div class="shadow panel">
                    <img src="../${productos[i].portada}" alt="manga1" class="img-fluid">
                    <div class="mangaTitulo shadow">
                        <p class="estiloTitulo">${productos[i].manga} - ${productos[i].num}</p>
                        <button id="${productos[i].id}" type="button" class="btn btn-primary btn-position" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            Ver mas
                        </button>
                    </div>
                </div>
            </div>
        `;

        prodPanel.appendChild(prod_panel)

        const btnVerMas = document.getElementById(productos[i].id);

		btnVerMas.addEventListener("click", mostrarModalPreview);
    }

    document.getElementById('prodButton1').addEventListener("click", () => {

        document.getElementById('prodButton1').setAttribute('class' , 'page-item disabled');
        document.getElementById('prodButton2').setAttribute('class' , 'page-item');
    
        let prodPanel = document.getElementById('prod-panel');
        prodPanel.setAttribute('class', 'd-flex flex-wrap');
    
        prodPanel.innerHTML = "";
    
        for(let i=0 ; i<=7 ; i++){
            const prod_panel = document.createElement('div');
            prod_panel.setAttribute('class', 'prod-separation');
    
            prod_panel.innerHTML += `
                <div id="${productos[i].id}" class="col-xl-3">
                    <div class="shadow panel">
                        <img src="../${productos[i].portada}" alt="manga1" class="img-fluid">
                        <div class="mangaTitulo shadow">
                            <p class="estiloTitulo">${productos[i].manga} - ${productos[i].num}</p>
                            <button id="${productos[i].id}" type="button" class="btn btn-primary btn-position" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                Ver mas
                            </button>
                        </div>
                    </div>
                </div>
            `;
    
            prodPanel.appendChild(prod_panel)

            const btnVerMas = document.getElementById(productos[i].id);

		    btnVerMas.addEventListener("click", mostrarModalPreview);
        }
    });
    
    const render2 = document.getElementById('prodButton2')
    render2.addEventListener("click", () => {
    
        document.getElementById('prodButton2').setAttribute('class' , 'page-item disabled');
        document.getElementById('prodButton1').setAttribute('class' , 'page-item');
        
        let prodPanel = document.getElementById('prod-panel');
        prodPanel.setAttribute('class', 'd-flex flex-wrap');
    
        prodPanel.innerHTML = "";
    
        for(let i=7 ; i<=15 ; i++){
            const prod_panel = document.createElement('div');
            prod_panel.setAttribute('class', 'prod-separation');
    
            prod_panel.innerHTML += `
                <div id="${productos[i].id}" class="col-xl-3">
                    <div class="shadow panel">
                        <img src="../${productos[i].portada}" alt="manga1" class="img-fluid">
                        <div class="mangaTitulo shadow">
                            <p class="estiloTitulo">${productos[i].manga} - ${productos[i].num}</p>
                            <button id="${productos[i].id}" type="button" class="btn btn-primary btn-position" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                Ver mas
                            </button>
                        </div>
                    </div>
                </div>
            `;
    
            prodPanel.appendChild(prod_panel)
            const btnVerMas = document.getElementById(productos[i].id);

		    btnVerMas.addEventListener("click", mostrarModalPreview);
        }
    });

    document.getElementById('filtrador').addEventListener('click', filtrarProductos);
}

function mostrarModalPreview(e) {
	const id = parseInt(e.target.id);

	const prevContainer = document.querySelector("#prev-container");
	prevContainer.innerHTML = "";
	const encontrado = productos.find((p) => p.id == id);

	const ModalPreview = document.createElement("div");
	ModalPreview.innerHTML = `
    <div id="modal-container">
        <div id="modal" class="hidden">
            <button id="close-modal" class="btn">Cerrar</button>
            <div id="modal-content">
                <h2 class="titleinfo">${encontrado.manga} ${encontrado.num}</h2>
                <p class="precio">$${encontrado.precio}</p>
                <img src="../${encontrado.portada}" alt="manga" class="imginfo shadow">
                <div class="demoinfo">
                    <h4>Demografia:</h4>
                    <p class="center demo">${encontrado.demografia}</p>
                </div>
                <div class="editoinfo">
                    <h4>Editorial:</h4>
                    <p class="center demo2">${encontrado.editorial}</p>
                </div>
                <button id="car${encontrado.id}" type="button" class="btn btn-outline-success carrito"> 🛒 AGREGAR AL CARRITO</button>
                <p class="miniinfo">
                ${encontrado.carac}
                </p>
                <p class="infoinfo">${encontrado.info}</p>
            </div>
        </div>
    </div>

    `;

    document.body.style.overflow = 'hidden';

    // Funcion para cerrar el modal
    const closeModal = () => {
        ModalPreview.remove();
        document.body.style.overflow = 'auto';
    };

    prevContainer.appendChild(ModalPreview);

    const cerrarModalButton = document.querySelector("#close-modal");
    cerrarModalButton.addEventListener("click", closeModal);

    const cerrarModal2Button = document.querySelector(`#car${encontrado.id}`);
    cerrarModal2Button.addEventListener("click", closeModal);

    // Agregado de objetos al carrito
    const agregarAlCarritoButton = document.querySelector(`#car${encontrado.id}`);
    agregarAlCarritoButton.addEventListener("click", () => {
    carrito.push(encontrado);
    console.table(carrito);
    Swal.fire({
        icon: 'success',
        title: '¡Agregado al carrito!',
        text: `${encontrado.manga} ${encontrado.num} se ha agregado al carrito`,
        timer: 3000
      })
    document.getElementById('carrito').style.display = 'block';
    });

    
}

let car = JSON.parse(localStorage.getItem('saveStateCarro'));
if(car != null){
    document.getElementById('carrito').style.display = 'block';
}

document.getElementById('verCarro').addEventListener('click', saveLocalCarrito);

function saveLocalCarrito(){
    localStorage.setItem('saveStateCarro', JSON.stringify(carrito));
}

function filtrarProductos(){

    document.getElementById('edit').addEventListener('click', filtrarEditorial);

}

function filtrarEditorial(){
    
}