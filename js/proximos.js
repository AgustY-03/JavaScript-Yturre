let usuario = localStorage.getItem('usuarioActivo');
console.log(usuario);
if(usuario != null){
  document.getElementById('login').style.display = "none"
  document.getElementById('logout').style.display = "block"
}

let productos;
obtenerJSON()

async function obtenerJSON(){
    const JSON_prox = '../json/proximo.json';
    const respuesta = await fetch(JSON_prox);
    const data = await respuesta.json();
    productos = data;
    panelDeLanzamiento();    
}

let car = JSON.parse(localStorage.getItem('saveStateCarro'));
if(car != null){
    document.getElementById('carrito').style.display = 'block';
}

let paneles = document.getElementById('lanzamiento');
paneles.setAttribute('class', 'd-flex flex-wrap');

function panelDeLanzamiento(){
    for (const lanza of productos){
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

document.getElementById('login').addEventListener('click', iniciarSesion);

function iniciarSesion(){
    Swal.fire({
        title: 'Login Form',
        html: `<input type="text" id="login" class="swal2-input" placeholder="Usuario">
        <input type="password" id="password" class="swal2-input" placeholder="Contraseña">`,
        confirmButtonText: 'Sign in',
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