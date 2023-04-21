let RCarro = JSON.parse(localStorage.getItem('saveStateCarro')) || [];

function renderCarrito(){
    let montoAPagar = 0;
    let body = document.getElementById('tablebody');
    for(const carro of RCarro){
        body.innerHTML += `
            <tr>
                <td>${carro.id}</td>
                <td>${carro.manga} ${carro.num}</td>
                <td>${carro.editorial}</td>
                <td>$${carro.precio}</td>
            </tr>
        `;
        // Incrementar total.
        montoAPagar = montoAPagar + carro.precio;
        document.getElementById('total').innerText = 'Total a pagar $: '+montoAPagar;
    }
}

renderCarrito();

const finalizar = document.getElementById('finalizarCompra')
finalizar.addEventListener('click', () =>{
    if(RCarro && RCarro.length >= 1){
    const finalizarModal = document.getElementById('modalFinalizar');
    finalizarModal.innerHTML = `
    <div id="modal-container">
        <div id="modal2" class="hidden">
        <h3>Formulario de pago</h3>
            <button id="close-modal2" class="btn btn-danger">Cerrar</button>
            <div id="modal-content">
          <form id="finalizarPagoModal">
            <div class="form-position">
              <div class="nombreModal form-width">
                <label class="input_label" for="nombre">Nombre:</label>
                <input type="text" id="nombreCliente" class="input_sector input_position" placeholder="Ingresa tu nombre" name="nombreCliente" required>
              </div>
               <div class="apellidoModal form-width">
                <label class="input_label" for="apellido">Apellido:</label>
                <input type="text" id="apellidoCliente" class="input_sector input_position" placeholder="Ingresa tu apellido" name="apellidoCliente" required>
              </div>
              <div class="tarjetaModal form-width">
                <label class="input_label" for="tarjeta"> Tarjeta de debito/credito:</label>
                <input type="number" id="tarjetaCliente" class="input_sector input_position" placeholder="EJ: 5427 8217 0217 9192" name="tarjetaCliente" required>
              </div>
              <div class="cvvModal form-width">
                <label class="input_label cvvt" for="CVV" >CVV:</label>
                <input type="number" id="cvv" class="input_sector" class="input_sector input_position" placeholder="EJ: 512" name="cvvCliente" required>
              </div>
              <div class="vencimientoModal" form-width">
                <label class="input_label" for="fecha">Fecha de vencimiento:</label>
                <div>
                    <select type="number" id="mes" class="input_sector mespad" placeholder="2" required>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                    <input type="number" id="anio" class="input_sector aniowidth" placeholder="25" required>
                </div>
              </div>
              <div class="direccionCliente form-width">
                <div class="direcCliente">
                  <label class="input_label" for="direccion">Direccion:</label>
                  <input type="text" id="direccionCliente" class="input_sector input_position" placeholder="Av. Siempreviva 742" required>
                </div>
                <div class="CPCliente">
                  <label class="input_label" for="direccion">Codigo postal:</label>
                  <input type="text" id="cpCliente" class="input_sector input_position" placeholder="2314" required>
                </div>
                <div class="localidadCliente">
                  <label class="input_label" for="direccion">Localidad:</label>
                  <input type="text" id="localidadCliente" class="input_sector input_position" placeholder="La Matanza" required>
                </div>
              </div>
              <button id ="finalizar" class="btn btn-success btnposition">
                          <span>Pagar</span>
              </button>
          </form>
              </div>
          </div>
        </div>
    </div>
    `;

    const closeModal2 = () => {
        finalizarModal.innerHTML = "";
        document.body.style.overflow = 'auto';
    };

    document.getElementById('finalizar').addEventListener('click', completarPedido);

    function completarPedido(event) {
        event.preventDefault();
        const form = document.getElementById('finalizarPagoModal');
        if (form.checkValidity()) {
            setTimeout(closeModal2, 0);
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'COMPLETADO',
                text: 'El pedido llegara a la brevedad',
                showConfirmButton: false,
                timer: 1500
              })
            resetCarrito();
        } else {
            form.reportValidity();
        }
    }

    function resetCarrito(){
        RCarro = [];
        localStorage.removeItem('saveStateCarro');
        document.getElementById('tablebody').innerHTML = "";
        document.getElementById('total').innerHTML = "Total a pagar $:"
    }

    const cerrarModalPago = document.querySelector("#close-modal2");
    cerrarModalPago.addEventListener("click", closeModal2);
    }
    
});

document.getElementById('vaciarCompra').addEventListener('click', vaciarCarrito);

function vaciarCarrito(){
    RCarro = [];
    localStorage.removeItem('saveStateCarro');
    document.getElementById('tablebody').innerHTML = "";
    document.getElementById('total').innerHTML = "Total a pagar $:"
}

