// Variables.

// Vectores de objetos

const novedades = [{id: 1, 
                    manga: 'SUPER DRAGON BALL HEROES: DARK DEMON REALM MISSION!', 
                    portada: 'img/portada/sdbh-1.webp', 
                    num: 01, 
                    editorial: 'IVREA', 
                    demografia: 'SHONEN', 
                    precio: 1800,
                    carac:`• Serie de 3 tomos.<br>
                           • Tomo de aproximadamente 200 páginas.<br>
                           • Formato tankoubon con sobrecubierta.`,
                    info: `Tras haber quedado atrapado en un espacio vacío del espaciotiempo, Trunks se ve obligado a convertirse en un Guardián del Tiempo y a sumarse a la eterna lucha contra los Destructores de la historia.<br>
                    La trama se desarrolla en una realidad alternativa del Dragon World y nos presenta literalmente un sinfín de personajes de diferentes universos y líneas temporales (canónicos y no tanto) reunidos para arrojar toneladas de fan service para alegría de todos.`
                    },
                   {id: 2, 
                    manga: 'ONE PIECE',
                    portada: 'img/portada/op-37.webp', 
                    num: 37, 
                    editorial: 'IVREA', 
                    demografia: 'SHONEN', 
                    precio: 1800,
                    carac: `• Tomo de aproximadamente 200 páginas.<br>
                            • Formato tankoubon con sobrecubierta.<br>
                            • Incluye desplegable a color.`,
                    info: `One Piece relata las aventuras de Monkey D. Luffy, un joven que, inspirado en Shanks, un pirata que le salvó la vida, desea convertirse en el Rey de los Piratas y encontrar el tesoro conocido como One Piece, que pertenecía a Gol D. Roger, quien antes de ser ejecutado, hace 24 años, contó al mundo sobre la existencia de su tesoro.<br>
                    Esto dio inicio a lo que se conoce como "la Gran era de los piratas": innumerables piratas se dispusieron a buscar ese tesoro, causando grandes problemas al Gobierno Mundial.<br>
                    Luffy iniciará sus aventuras, reclutando amigos y nakamas que lo ayuden a cumplir su sueño.`
                    },
                   {id: 3, 
                    manga: 'KAIJU N8',
                    portada: 'img/portada/kaiju8-3.webp',  
                    num: 03, 
                    editorial: 'IVREA', 
                    demografia: 'SHONEN', 
                    precio: 1800,
                    carac:`• Tomo de aproximadamente 200 páginas.<br>
                           • Formato tankoubon con sobrecubierta.<br>
                           • Incluye páginas a color.`,
                    info: `¡Un hombre, descontento con el trabajo que ha tenido que hacer en la vida, se ve envuelto en un acontecimiento inesperado...! ¡Se convierte en un Kaiju, una criatura monstruosa, dandole asi una nueva oportunidad de lograr lo que siempre soño!`
                    },
                   {id: 4, 
                    manga: 'RANKING OF KINGS',
                    portada: 'img/portada/rankingOfKings-4.webp',  
                    num: 04, 
                    editorial: 'IVREA', 
                    demografia: 'SHONEN', 
                    precio: 2000,
                    carac:`• Tomo de aproximadamente 200 páginas.<br>
                    • Formato B6 con sobrecubierta.<br>                 
                    • Incluye páginas a color.`,
                    info: `Bojji es un príncipe sordomudo que habita en un mundo fantástico repleto de criaturas mágicas.<br>
                    Pese a no destacar en nada, y siendo incapaz siquiera de empuñar una espadita de niño, sueña con algún día convertirse en el rey más grande del mundo, pese a que todos los que lo conocen lo tildan de "completo inútil".<br>
                    Todo cambia cuando conoce a Kage, una sombra (literalmente) que es uno de los pocos sobrevivientes de un clan de asesinos y que intenta robarle las pocas pertenencias que Bojji llevaba encima. De alguna manera, Kage logra comprender al príncipe y se convierte en su primer amigo verdadero, dando así inicio a la aventura que Bojji tanto anhela.<br>
                    Mientras tanto, en la oscuridad, un poder amenaza con devastar al reino.`
                    },
                   {id: 5, 
                    manga: 'WE NEVER LEARN',
                    portada: 'img/portada/weNeverLearn-18.webp',  
                    num: 18, 
                    editorial: 'IVREA', 
                    demografia: 'SHONEN', 
                    precio: 1800,
                    carac:`• Tomo de aproximadamente 200 páginas.<br>
                    • Formato B6 con sobrecubierta.<br>                  
                    • Incluye páginas a color.`,
                    info: `La historia se centra en Yuiga Nariyuki, un estudiante de clase social pobre que nacio con la inteligencia de una persona ordinaria, sin destacar en nada. Se esfuerza al maximo por ser el mejor de la clase y obtener una beca en la universidad, donde aspira graduarse y darle a su familia una mejor vida. Por cosas del destino se ve envuelto en una situacion de la que no puede escapar si quiere obtener su beca universitaria: Ser el tutor de... ¡¿Unas genios?!`
                    },
                   {id: 6, 
                    manga: 'BLACK PARADOX',
                    portada: 'img/portada/blackParadox.webp',  
                    num: " ", 
                    editorial: 'IVREA', 
                    demografia: 'SEINEN', 
                    precio: 3900,
                    carac:`• Tomo ÚNICO de aproximadamente 240 páginas.<br>
                    • Formato A5 con sobrecubierta.<br>
                    ​• Incluye historia extra íntegramente a color.`,
                    info: `La historia narra las vivencias de cuatro personas que se conocen online y deciden hacer un viaje con un objetivo en común: ponerle fin a sus vidas de forma rápida e indolora. Sin embargo, sus planes se complicarán cuando el primer intento... no les salga bien y al segundo terminen descubriendo un pasadizo a otro mundo, uno con unas piedras preciosas invaluables y poderosas con el potencial de cambiarles su destino... Pero nadie entiende bien cuál es su verdadera naturaleza y mientras más puertas a otros mundos se abren, los cuatro se ven forzados a replantearse su vida y su muerte.`
                    },
                   {id: 7, 
                    manga: 'BLACK CLOVER',
                    portada: 'img/portada/blackClover-23.webp',  
                    num: 23, 
                    editorial: 'IVREA', 
                    demografia: 'SHONEN', 
                    precio: 1800,
                    carac:`• Tomo de aproximadamente 200 páginas.<br>
                    • Formato tankoubon con sobrecubierta.`,
                    info: `En una iglesia ubicada en una aldea remota del Reino Trebol, viven Aste y Yuno, quienes han sido amigos desde que fueron abandonados de bebes en ese lugar. Yuno posee un enorme poder magico y es muy habil para lanzar hechizos; en contraste, Aste nunca ha podido usar magia. En un mundo donde eres juzgado segun tu procedencia y poder magico. Asta busca demostrar que cualquiera puede convertirse en alguien asombroso. Esta es su resolucion: convertirse en el Rey Mago. Inspirado por el, Yuno se propone lo mismo.`
                    },
                   {id: 8, 
                    manga: 'SAINT SEIYA: NEXT DIMENSION (NUEVA EDICION)',
                    portada: 'img/portada/saintSeiya-12.webp',  
                    num: 12, 
                    editorial: 'IVREA', 
                    demografia: 'SHONEN', 
                    precio: 3500,
                    carac:`• Tomo de aproximadamente 200 páginas.<br>
                    • Formato B6, sobrecubierta con laca sectorizada.<br>  
                    ​• Integramente a color.`,
                    info: `Ambientado más de dos siglos antes de los sucesos de Saint Seiya, la serie original, este manga relata la sangrienta Guerra Sagrada que se llevará la vida de la gran mayoría de los Caballeros.<br>
                    Tenma, el recién nombrado caballero de Pegaso y Alone, la reencarnación de Hades, son dos amigos de toda la vida cuyos destinos los obligan a enfrentarse entre sí en una batalla épica de la que depende el futuro de la humanidad.`
                    },
                   {id: 9, 
                    manga: 'MUSHOKU TENSEI',
                    portada: 'img/portada/mushokuTensei-5.jpeg',  
                    num: 05, 
                    editorial: 'PANINI MANGA', 
                    demografia: 'SEINEN', 
                    precio: 2200,
                    carac:`• Tomo de aproximadamente 172 páginas.<br>
                           • Formato tankoubon con sobrecubierta.`,
                    info:`¿Qué pasa cuando un desempleado de más de 40 años pierde su vida salvando a otros? Pues que reencarna en un mundo de espadas y hechicería, ¡claro! Rudeus conserva todos los recuerdos de su vida anterior y es por eso que en esta vida se ha propuesto esforzarse para vivir su vida al máximo. Aprenderá de hechicería y de técnicas de la espada para sentir la satisfacción que no pudo obtener antes de morir.`
                    },
                   {id: 10, 
                    manga: 'WIND BREAKER',
                    portada: 'img/portada/windBreaker-2.jpeg',  
                    num: 02, 
                    editorial: 'PANINI MANGA', 
                    demografia: 'SHONEN', 
                    precio: 2100,
                    carac:`• Tomo de aproximadamente 192 páginas.<br>
                           • Formato tankoubon con sobrecubierta.`,
                    info: `Haruka Sakura es un estudiante de nuevo ingreso en la preparatoria Furin. Él decidió ir a esta escuela con un objetivo: derrocar al jefe de la pandilla de la Furin. Está por verse si lo logrará o no.`
                    },
                   {id: 11, 
                    manga: 'MUSHISHI',
                    portada: 'img/portada/mushishi-1.jpeg',  
                    num: 01, 
                    editorial: 'PANINI MANGA', 
                    demografia: 'SEINEN', 
                    precio: 2800,
                    carac:`• Tomo de aproximadamente 240 páginas.<br>
                    • Formato tankoubon con sobrecubierta.`,
                    info: `Los Mushi son unas formas de vida muy extrañas, una especie de espíritus de la naturaleza capaces de realizar proezas mágicas no siempre benficiosas para los humanos. Sólo Ginko, el maestro de los bichos, tiene el poder de enfrentarse a ellos y detener la plaga que asola el mundo.`
                    },
                   {id: 12, 
                    manga: 'PERFECT WORLD',
                    portada: 'img/portada/perfectWorld-5.webp',  
                    num: 05, 
                    editorial: 'PANINI MANGA', 
                    demografia: 'JOSEI', 
                    precio: 2100,
                    carac:`• Tomo de aproximadamente 172 páginas.<br>
                    • Formato tankoubon con sobrecubierta.`,
                    info: `¿Cuáles son las barreras que plantea una relación con una persona con discapacidad? Tsugumi Kawana, de 26 años, consiguió un trabajo en una empresa de diseño de interiores. Una noche, en una cena de trabajo con clientes de un estudio de arquitectura, se reencuentra con el que fue su primer amor de la preparatoria, Itsuki Ayukawa, y sus sentimientos hacia él empiezan a revivir. Al descubrir que ahora va en silla de ruedas, piensa que su amor será imposible.`
                    }
                   ];

const productos = [{id: 1, 
                    manga: 'SUPER DRAGON BALL HEROES: DARK DEMON REALM MISSION!', 
                    portada: 'img/portada/sdbh-1.webp', 
                    num: 01, 
                    editorial: 'IVREA', 
                    demografia: 'SHONEN', 
                    precio: 1800,},
                   {id: 2, 
                    manga: 'ONE PIECE',
                    portada: 'img/portada/op-37.webp', 
                    num: 37, 
                    editorial: 'IVREA', 
                    demografia: 'SHONEN', 
                    precio: 1800,},
                   {id: 3, 
                    manga: 'KAIJU N8',
                    portada: 'img/portada/kaiju8-3.webp',  
                    num: 03, 
                    editorial: 'IVREA', 
                    demografia: 'SHONEN', 
                    precio: 1800,},
                   {id: 4, 
                    manga: 'RANKING OF KINGS',
                    portada: 'img/portada/rankingOfKings-4.webp',  
                    num: 04, 
                    editorial: 'IVREA', 
                    demografia: 'SHONEN', 
                    precio: 2000,},
                   {id: 5, 
                    manga: 'WE NEVER LEARN',
                    portada: 'img/portada/weNeverLearn-18.webp',  
                    num: 18, 
                    editorial: 'IVREA', 
                    demografia: 'SHONEN', 
                    precio: 1800,},
                   {id: 6, 
                    manga: 'BLACK PARADOX',
                    portada: 'img/portada/blackParadox.webp',  
                    num: " ", 
                    editorial: 'IVREA', 
                    demografia: 'SEINEN', 
                    precio: 3900,},
                   {id: 7, 
                    manga: 'BLACK CLOVER',
                    portada: 'img/portada/blackClover-23.webp',  
                    num: 23, 
                    editorial: 'IVREA', 
                    demografia: 'SHONEN', 
                    precio: 1800,},
                   {id: 8, 
                    manga: 'SAINT SEIYA: NEXT DIMENSION (NUEVA EDICION)',
                    portada: 'img/portada/saintSeiya-12.webp',  
                    num: 12, 
                    editorial: 'IVREA', 
                    demografia: 'SHONEN', 
                    precio: 3500,},
                   {id: 9, 
                    manga: 'MUSHOKU TENSEI',
                    portada: 'img/portada/mushokuTensei-5.jpeg',  
                    num: 05, 
                    editorial: 'PANINI MANGA', 
                    demografia: 'SEINEN', 
                    precio: 2200,},
                   {id: 10, 
                    manga: 'WIND BREAKER',
                    portada: 'img/portada/windBreaker-2.jpeg',  
                    num: 02, 
                    editorial: 'PANINI MANGA', 
                    demografia: 'SHONEN', 
                    precio: 2100,},
                   {id: 11, 
                    manga: 'MUSHISHI',
                    portada: 'img/portada/mushishi-1.jpeg',  
                    num: 01, 
                    editorial: 'PANINI MANGA', 
                    demografia: 'SEINEN', 
                    precio: 2800,},
                   {id: 12, 
                    manga: 'PERFECT WORLD',
                    portada: 'img/portada/perfectWorld-5.webp',  
                    num: 05, 
                    editorial: 'PANINI MANGA', 
                    demografia: 'JOSEI', 
                    precio: 2100,}
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