let usuario = localStorage.getItem('usuarioActivo');
console.log(usuario);
if(usuario != null){
  document.getElementById('login').style.display = "none"
  document.getElementById('logout').style.display = "block"
}

const carrito = JSON.parse(localStorage.getItem('saveStateCarro')) || [];

let car = JSON.parse(localStorage.getItem('saveStateCarro'));
if(car != null){
    document.getElementById('carrito').style.display = 'block';
}

let productos;
obtenerJSON()

async function obtenerJSON(){
    const JSON_prod = './json/productos.json';
    const respuesta = await fetch(JSON_prod);
    const data = await respuesta.json();
    productos = data;
    productos.sort((a,b) => b.id - a.id )
    panelDeNovedades();     
}

let paneles = document.getElementById('novedades');
paneles.setAttribute('class', 'd-flex flex-wrap');

// Organizacion de paneles en el index

function panelDeNovedades() {
	for (const prod of productos) {
		const panel = document.createElement("div");
        panel.setAttribute('class', 'separacion')

		panel.innerHTML += `
        <div id="${prod.id}">
            <div class="shadow panel">
                <img src="${prod.portada}" alt="manga${prod.id}" class="img-fluid">
                <div class="mangaTitulo shadow">
                    <p class="estiloTitulo">${prod.manga} - ${prod.num}</p>
                    <button id="${prod.id}" type="button" class="btn btn-primary btn-position" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        Ver mas
                    </button>
                </div>
            </div>
        </div>
        `;
		paneles.appendChild(panel);
		const btnVerMas = document.getElementById(prod.id);

		btnVerMas.addEventListener("click", mostrarModalPreview);
	}

}

// Mostrar Modal en index

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
                <img src="${encontrado.portada}" alt="manga" class="imginfo shadow">
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

// Funcion save state de Carrito

document.getElementById('verCarro').addEventListener('click', saveLocalCarrito);
document.getElementById('nav-links').addEventListener('click', saveLocalCarrito);

function saveLocalCarrito(){
    localStorage.setItem('saveStateCarro', JSON.stringify(carrito));
}

document.getElementById('login').addEventListener('click', iniciarSesion);

function iniciarSesion(){
    Swal.fire({
        title: 'Iniciar sesion',
        html: `<input type="text" id="login" class="swal2-input" placeholder="Usuario">
        <input type="password" id="password" class="swal2-input" placeholder="Contraseña">`,
        confirmButtonText: 'Ingresar',
        focusConfirm: false,
        preConfirm: () => {
          const login = Swal.getPopup().querySelector('#login').value
          const password = Swal.getPopup().querySelector('#password').value
          if (!login || !password) {
            Swal.showValidationMessage(`Por favor, ingrese su usuario y contraseña`)
          }
          return { login: login, password: password }
        }
      }).then((result) => {
        localStorage.setItem('usuarioActivo', result.value.login);
        Swal.fire(`
          ¡Bienvenido ${result.value.login}!
        `.trim())
        document.getElementById('login').style.display = 'none';
        document.getElementById('logout').style.display = 'block';
      })
}

document.getElementById('logout').addEventListener('click', cerrarSesion);

function cerrarSesion(){
    document.getElementById('login').style.display = 'block';
    document.getElementById('logout').style.display = 'none';
    localStorage.removeItem('usuarioActivo');
    localStorage.removeItem('direccion');
    localStorage.removeItem('localidad');
    localStorage.removeItem('cp');
    Swal.fire({
        title: 'Esperamos que vuelvas pronto.',
        text: 'Te vamos a extrañar 😭',
        imageUrl: 'https://personalanimesreview.files.wordpress.com/2016/08/large-1.gif?w=760',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        background: '#ffa420'
      })
}