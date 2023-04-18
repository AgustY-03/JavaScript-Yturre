// Variables.

// Vectores de objetos

const novedades = [{id: 1, 
                    manga: 'SUPER DRAGON BALL HEROES: DARK DEMON REALM MISSION!', 
                    portada: 'img/portada/sdbh-1.webp', 
                    num: 01, 
                    editorial: 'IVREA', 
                    demografia: 'SHONEN', 
                    precio: 1800,
                    enlace: 'SDBH.DDRM01' },
                   {id: 2, 
                    manga: 'ONE PIECE',
                    portada: 'img/portada/op-37.webp', 
                    num: 37, 
                    editorial: 'IVREA', 
                    demografia: 'SHONEN', 
                    precio: 1800,
                    enlace: 'OP.37'},
                   {id: 3, 
                    manga: 'KAIJU N8',
                    portada: 'img/portada/kaiju8-3.webp',  
                    num: 03, 
                    editorial: 'IVREA', 
                    demografia: 'SHONEN', 
                    precio: 1800,
                    enlace: 'KN8.03'},
                   {id: 4, 
                    manga: 'RANKING OF KINGS',
                    portada: 'img/portada/rankingOfKings-4.webp',  
                    num: 04, 
                    editorial: 'IVREA', 
                    demografia: 'SHONEN', 
                    precio: 2000,
                    enlace: 'ROK.04'},
                   {id: 5, 
                    manga: 'WE NEVER LEARN',
                    portada: 'img/portada/weNeverLearn-18.webp',  
                    num: 18, 
                    editorial: 'IVREA', 
                    demografia: 'SHONEN', 
                    precio: 1800,
                    enlace: 'WNL.18'},
                   {id: 6, 
                    manga: 'BLACK PARADOX',
                    portada: 'img/portada/blackParadox.webp',  
                    num: " ", 
                    editorial: 'IVREA', 
                    demografia: 'SEINEN', 
                    precio: 3900,
                    enlace: 'BP'},
                   {id: 7, 
                    manga: 'BLACK CLOVER',
                    portada: 'img/portada/blackClover-23.webp',  
                    num: 23, 
                    editorial: 'IVREA', 
                    demografia: 'SHONEN', 
                    precio: 1800,
                    enlace: 'BC.23'},
                   {id: 8, 
                    manga: 'SAINT SEIYA: NEXT DIMENSION (NUEVA EDICION)',
                    portada: 'img/portada/saintSeiya-12.webp',  
                    num: 12, 
                    editorial: 'IVREA', 
                    demografia: 'SHONEN', 
                    precio: 3500,
                    enlace: 'SSND.12'},
                   {id: 9, 
                    manga: 'MUSHOKU TENSEI',
                    portada: 'img/portada/mushokuTensei-5.jpeg',  
                    num: 05, 
                    editorial: 'PANINI MANGA', 
                    demografia: 'SEINEN', 
                    precio: 2200,
                    enlace: 'MT.05'},
                   {id: 10, 
                    manga: 'WIND BREAKER',
                    portada: 'img/portada/windBreaker-2.jpeg',  
                    num: 02, 
                    editorial: 'PANINI MANGA', 
                    demografia: 'SHONEN', 
                    precio: 2100,
                    enlace: 'WB.02'},
                   {id: 11, 
                    manga: 'MUSHISHI',
                    portada: 'img/portada/mushishi-1.jpeg',  
                    num: 01, 
                    editorial: 'PANINI MANGA', 
                    demografia: 'SEINEN', 
                    precio: 2800,
                    enlace: 'MSS.01'},
                   {id: 12, 
                    manga: 'PERFECT WORLD',
                    portada: 'img/portada/perfectWorld-5.webp',  
                    num: 05, 
                    editorial: 'PANINI MANGA', 
                    demografia: 'JOSEI', 
                    precio: 2100,
                    enlace: 'PW.05'}
                   ];

const productos = [{id: 1, 
                    manga: 'SUPER DRAGON BALL HEROES: DARK DEMON REALM MISSION!', 
                    portada: 'img/portada/sdbh-1.webp', 
                    num: 01, 
                    editorial: 'IVREA', 
                    demografia: 'SHONEN', 
                    precio: 1800,
                    enlace: 'SDBH.DDRM01' },
                   {id: 2, 
                    manga: 'ONE PIECE',
                    portada: 'img/portada/op-37.webp', 
                    num: 37, 
                    editorial: 'IVREA', 
                    demografia: 'SHONEN', 
                    precio: 1800,
                    enlace: 'OP.37'},
                   {id: 3, 
                    manga: 'KAIJU N8',
                    portada: 'img/portada/kaiju8-3.webp',  
                    num: 03, 
                    editorial: 'IVREA', 
                    demografia: 'SHONEN', 
                    precio: 1800,
                    enlace: 'KN8.03'},
                   {id: 4, 
                    manga: 'RANKING OF KINGS',
                    portada: 'img/portada/rankingOfKings-4.webp',  
                    num: 04, 
                    editorial: 'IVREA', 
                    demografia: 'SHONEN', 
                    precio: 2000,
                    enlace: 'ROK.04'},
                   {id: 5, 
                    manga: 'WE NEVER LEARN',
                    portada: 'img/portada/weNeverLearn-18.webp',  
                    num: 18, 
                    editorial: 'IVREA', 
                    demografia: 'SHONEN', 
                    precio: 1800,
                    enlace: 'WNL.18'},
                   {id: 6, 
                    manga: 'BLACK PARADOX',
                    portada: 'img/portada/blackParadox.webp',  
                    num: " ", 
                    editorial: 'IVREA', 
                    demografia: 'SEINEN', 
                    precio: 3900,
                    enlace: 'BP'},
                   {id: 7, 
                    manga: 'BLACK CLOVER',
                    portada: 'img/portada/blackClover-23.webp',  
                    num: 23, 
                    editorial: 'IVREA', 
                    demografia: 'SHONEN', 
                    precio: 1800,
                    enlace: 'BC.23'},
                   {id: 8, 
                    manga: 'SAINT SEIYA: NEXT DIMENSION (NUEVA EDICION)',
                    portada: 'img/portada/saintSeiya-12.webp',  
                    num: 12, 
                    editorial: 'IVREA', 
                    demografia: 'SHONEN', 
                    precio: 3500,
                    enlace: 'SSND.12'},
                   {id: 9, 
                    manga: 'MUSHOKU TENSEI',
                    portada: 'img/portada/mushokuTensei-5.jpeg',  
                    num: 05, 
                    editorial: 'PANINI MANGA', 
                    demografia: 'SEINEN', 
                    precio: 2200,
                    enlace: 'MT.05'},
                   {id: 10, 
                    manga: 'WIND BREAKER',
                    portada: 'img/portada/windBreaker-2.jpeg',  
                    num: 02, 
                    editorial: 'PANINI MANGA', 
                    demografia: 'SHONEN', 
                    precio: 2100,
                    enlace: 'WB.02'},
                   {id: 11, 
                    manga: 'MUSHISHI',
                    portada: 'img/portada/mushishi-1.jpeg',  
                    num: 01, 
                    editorial: 'PANINI MANGA', 
                    demografia: 'SEINEN', 
                    precio: 2800,
                    enlace: 'MSS.01'},
                   {id: 12, 
                    manga: 'PERFECT WORLD',
                    portada: 'img/portada/perfectWorld-5.webp',  
                    num: 05, 
                    editorial: 'PANINI MANGA', 
                    demografia: 'JOSEI', 
                    precio: 2100,
                    enlace: 'PW.05'}
                   ];

const carrito = [];
const v_filtrado = [];

let paneles = document.getElementById('novedades');
paneles.setAttribute('class', 'd-flex flex-wrap')

// Organizacion de paneles en el index

function panelDeNovedades() {
	for (const novedad of novedades) {
		const panel = document.createElement("div");
        panel.setAttribute('class', 'separacion')

		panel.innerHTML += `
        <div id="${novedad.id}">
            <div class="shadow panel">
                <img src="${novedad.portada}" alt="manga${novedad.id}" class="img-fluid">
                <div class="mangaTitulo shadow">
                    <p class="estiloTitulo">${novedad.manga} ${novedad.num}</p>
                    <button id="${novedad.id}" type="button" class="btn btn-primary btn-position" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        Ver mas
                    </button>
                </div>
            </div>
        </div>
        `;
		paneles.appendChild(panel);
		const btnVerMas = document.getElementById(novedad.id);

		btnVerMas.addEventListener("click", mostrarModalPreview);
	}

}

// Mostrar Modal en index

function mostrarModalPreview(e) {
	const id = parseInt(e.target.id);

	const prevContainer = document.querySelector("#prev-container");
	prevContainer.innerHTML = "";
	const encontrado = novedades.find((p) => p.id == id);

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
                • Tomo de aproximadamente 200 páginas.<br>• Incluye desplegable a color.<br>• Formato tankoubon con sobrecubierta.
                </p>
                <p class="infoinfo">One Piece relata las aventuras de Monkey D. Luffy, un joven que, inspirado en Shanks, un pirata que le salvó la vida, desea convertirse en el Rey de los Piratas y encontrar el tesoro conocido como One Piece, que pertenecía a Gol D. Roger, quien antes de ser ejecutado, hace 24 años, contó al mundo sobre la existencia de su tesoro.</p>
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

    // Agregado de objetos al carrito
    const agregarAlCarritoButton = document.querySelector(`#car${encontrado.id}`);
    agregarAlCarritoButton.addEventListener("click", () => {
    carrito.push(encontrado);
    console.table(carrito);
    document.getElementById('carrito').style.display = 'block';
    });

    
}

panelDeNovedades();

// Funcion save state de Carrito

document.getElementById('verCarro').addEventListener('click', saveLocalCarrito);

function saveLocalCarrito(){
    localStorage.setItem('saveStateCarro', JSON.stringify(carrito));
}



// Pagina.

/* opcionSesion = prompt('Bienvenido a Kogarashi Store\n1-Iniciar sesión\n2-Registrarse');

if(opcionSesion == '1'){
    iniciarSesion();
    Operaciones();
}else if(opcionSesion == '2'){
    nombreUsuario = prompt('Ingrese el nombre de usuario que desea:');
    while(nombreUsuario==''){
        alert('Nombre invalido, ingresa un nombre valido');
        nombreUsuario = prompt('Ingrese el nombre de usuario que desea:');
    }
    contraUsuario = prompt('Ingrese la contraseña:');
    while(contraUsuario==''){
        alert('Contraseña invalida, ingresa un contraseña valida');
        contraUsuario = prompt('Ingrese la contraseña:');
    }
    contraVerificacion = prompt('Ingrese nuevamente la misma contraseña:');
    while(contraVerificacion != contraUsuario){
        alert('La contraseña no es la misma, intentelo nuevamente');
        contraVerificacion = prompt('Ingrese nuevamente la misma contraseña:');
    }
    alert('¡Se ha registrado correctamente!');
    alert('Ahora sera redirigido al apartado "Iniciar sesion"');
    iniciarSesion();
    Operaciones();
}else{
    alert('La opcion ingresada no existe');
} */