const RCarro = []

class Productos {
    constructor (obj){
        this.id = obj.id;
        this.nombre = obj.manga
        this.precio = parseFloat(obj.precio);
    }
}

const renderCarro = JSON.parse(localStorage.getItem('saveStateCarro'));

function renderCarrito(){
    let body = document.getElementById('tablebody');
    for(const render of renderCarro){
        RCarro.push(new Productos(render));
    } 
    console.table(RCarro)
    for(const carro of RCarro){
        body.innerHTML += `
            <tr>
                <td>${RCarro.id}</td>
                <td>${RCarro.nombre}</td>
                <td>${RCarro.precio}</td>
            </tr>
        `;
    }
}

renderCarrito();