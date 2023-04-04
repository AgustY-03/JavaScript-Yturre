// Variables.
let nombreUsuario = 'test1';
let contraUsuario = 'test1';
let contraVerificacion;
let opcionSesion;
let nombreSesion;
let contraSesion;
let bandSesion=1;
let bandSesion2=1;
let operacion;
let operacionOpcion;
let carritoTotal = 0;
let total = 0;
let mensaje;
let pagoCarrito;;
// Vectores de objetos

const productos = [{id: 1, manga: 'SUPER DRAGON BALL HEROES: DARK DEMON REALM MISSION!', num: 01, editorial: 'IVREA', demografia: 'SHONEN', precio: 1800},
                   {id: 2, manga: 'ONE PIECE', num: 37, editorial: 'IVREA', demografia: 'SHONEN', precio: 1800},
                   {id: 3, manga: 'KAIJU N8', num: 03, editorial: 'IVREA', demografia: 'SHONEN', precio: 1800},
                   {id: 4, manga: 'RANKING OF KINGS', num: 04, editorial: 'IVREA', demografia: 'SHONEN', precio: 2000},
                   {id: 5, manga: 'WE NEVER LEARN', num: 18, editorial: 'IVREA', demografia: 'SHONEN', precio: 1800},
                   {id: 6, manga: 'BLACK PARADOX', num: null, editorial: 'IVREA', demografia: 'SEINEN', precio: 3900},
                   {id: 7, manga: 'BLACK CLOVER', num: 23, editorial: 'IVREA', demografia: 'SHONEN', precio: 1800},
                   {id: 8, manga: 'SAINT SEIYA: NEXT DIMENSION (NUEVA EDICION)', num: 12, editorial: 'IVREA', demografia: 'SHONEN', precio: 3500},
                   {id: 9, manga: 'MUSHOKU TENSEI', num: 05, editorial: 'PANINI MANGA', demografia: 'SEINEN', precio: 2200},
                   {id: 10, manga: 'WIND BREAKER', num: 02, editorial: 'PANINI MANGA', demografia: 'SHONEN', precio: 2100},
                   {id: 11, manga: 'MUSHISHI', num: 01, editorial: 'PANINI MANGA', demografia: 'SEINEN', precio: 2800},
                   {id: 12, manga: 'PERFECT WORLD', num: 05, editorial: 'PANINI MANGA', demografia: 'JOSEI', precio: 2100}];

const carrito = [];
const v_filtrado = [];

// Pagina.

opcionSesion = prompt('Bienvenido a Kogarashi Store\n1-Iniciar sesión\n2-Registrarse');

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
}

function iniciarSesion(){
    nombreSesion = prompt('Ingrese el nombre de usuario:')
    do{
        if(bandSesion==0){
            alert('El nombre de usuario no existe, volve a intentarlo.');
            nombreSesion = prompt('Ingrese el nombre de usuario:')
        }else{
            bandSesion=0;
        }
    }while(nombreSesion != nombreUsuario || nombreSesion == '');
    if(nombreSesion == nombreUsuario){
        contraSesion = prompt('Ingresa la contraseña:');
        do{
            if(bandSesion2==0){
                alert('La contraseña es incorrecta, volve a intentarlo.');
                contraSesion = prompt('Ingresa la contraseña:')
            }else{
                bandSesion2=0;
            }
        }while(contraSesion != contraUsuario || contraSesion == '');
        alert('¡Sesion iniciada! Bienvenido ' + nombreUsuario);
    }
}

function Operaciones(){
    let fin;
    while(operacionOpcion != 'n'){
        operacionOpcion = prompt('¿Que desea ver? (n-cerrar sesion)\n1-Ver productos\n2-Ofertas\n3-Futuros lanzamientos\n4-Carrito\n5-Agregar productos');
        switch(operacionOpcion){
            case '1':
                ventaProductos();
                mensaje='s';
                break;
            case '2':
                alert('OFERTAS:\n* 2x1 en mangas B6 hasta el 20/3\n* 10% de descuento pagando con Santander\n* 3 cuotas sin intereses con American Express\nPulsa ENTER para regresar');
                break;
            case '3':
                alert('Por ahora no hay nuevos lanzamiento ¡les mantendremos al tanto de futuras noticas!\nPulsa ENTER para regresar');
                break;
            case '4':
                console.table(carrito);
                alert('El total a pagar es $' + carritoTotal);
                pagoCarrito = prompt('¿Desea realizar la compra o continuar comprando?\n1-Realizar la compra\n2-Continuar comprando');
                if(pagoCarrito == '1'){
                    fin = finalizarPago(carrito, carritoTotal);
                    if(fin != 'n'){
                        carrito.splice(0, carrito.length);
                        carritoTotal = 0;
                    }
                }
                break;
            case '5':
                agregadoDeProductos();
                console.table(productos);
                break;
            case 'n':
                alert('¡Esperamos que regreses pronto!');
                break;
            default:
                alert('Esa opcion no existe, ingresa una valida.\nPulsa ENTER para regresar');
                break;
        }
    }
}

function sumadorTotal(precio){
    let total = 0;
    total = total + precio;
    return total;
}

function ventaProductos(){
    alert('Revisar la consola.\n(ENTER para continuar)');
    console.table(productos);
    while(mensaje != 'n'){
        const mangaOpcion = parseInt(prompt('¿Que manga desea comprar? o desea realizar un filtrado (0-filtrado)\n(Introducir ID)'));
        if(mangaOpcion != 0){
            const buscado = productos.find((manga) => manga.id === mangaOpcion); 
        if(buscado != undefined){
            carrito.push(buscado);
            carritoTotal += sumadorTotal(buscado.precio);
            alert('Llevas acumulado $' + carritoTotal);
        }else{
            alert('El ID ingresado es invalido\nVolve a intentarlo.');
        }

        do{
            if(buscado != undefined){
                mensaje = prompt('¿Desea comprar otro producto? (s-Si / n-No)');
            }else{
                mensaje = prompt('¿Desea comprar algun producto? (s-Si / n-No)');
            }

            if(mensaje == 's' && mensaje == 'n'){
                alert('El valor ingresador no pertenece a ninguna de las opciones.\nVolve a intentarlo.');
            }
        }while(mensaje != 's' && mensaje != 'n');
        }else{
            let filtro = filtrado();
            if(filtro != 3){
                console.table(v_filtrado);
                const mangaOpcion = parseInt(prompt('¿Que manga desea comprar?\n(Introducir ID)'));
                const buscado = v_filtrado.find((manga) => manga.id === mangaOpcion); 
                if(buscado != undefined){
                    carrito.push(buscado);
                    carritoTotal += sumadorTotal(buscado.precio);
                    alert('Llevas acumulado $' + carritoTotal);
                }else{
                alert('El ID ingresado es invalido\nVolve a intentarlo.');
                }
                do{
                    if(buscado != undefined){
                        mensaje = prompt('¿Desea comprar otro producto? (s-Si / n-No)');
                    }else{
                        mensaje = prompt('¿Desea comprar algun producto? (s-Si / n-No)');
                    }
        
                    if(mensaje == 's' && mensaje == 'n'){
                        alert('El valor ingresador no pertenece a ninguna de las opciones.\nVolve a intentarlo.');
                    }
                }while(mensaje != 's' && mensaje != 'n');
            }else{
                ventaProductos();
            }
        }
    }
}

function filtrado(){
    let mensaje2;
    let opcionFiltrado;
    let i = 0;
    while(filtrado != '3'){
        const filtrado_ = prompt('¿Que tipo de filtrado desea realizar?\n1-Demografia\n2-Editorial\n3-Volver atras');
        switch(filtrado_){
            case '1':
                while(opcionFiltrado != '5'){
                    opcionFiltrado = prompt('Seleccione la demografia:\n1-Shonen\n2-Seinen\n3-Shoujo\n4-Josei\n5-Volver atras');
                    switch(opcionFiltrado){
                        case '1':
                            const buscado2 = productos.filter((manga) => manga.demografia.includes('SHONEN'));
                            for (i=0; i<buscado2.length;i++){
                                v_filtrado.push(buscado2[i]);
                            }
                            opcionFiltrado = '5';
                            break;
                        case '2':
                            const buscado3 = productos.filter((manga) => manga.demografia.includes('SEINEN')); 
                            for (i=0; i<buscado3.length;i++){
                                v_filtrado.push(buscado3[i]);
                            }
                            opcionFiltrado = '5';
                            break;
                        case '3':
                            alert('Aun no tenemos manga de demografia "Shoujo" a la venta');
                            opcionFiltrado = '5';
                            break;
                        case '4':
                            const buscado4 = productos.filter((manga) => manga.demografia.includes('JOSEI'));
                            for (i=0; i<buscado4.length;i++){
                                v_filtrado.push(buscado4[i]);
                            }
                            opcionFiltrado = '5';
                            break;
                        case '5':
                            break;
                        default:
                            alert('La opcion seleccionada no existe.\nVuelva a intentarlo.');
                            break;
                    }
                }
                break;
            case '2':
                while(opcionFiltrado != '3'){
                    opcionFiltrado = prompt('Seleccione la editorial:\n1-Ivrea\n2-Panini manga\n3-Volver atras');
                    switch(opcionFiltrado){
                        case '1':
                            const buscado5 = productos.filter((manga) => manga.editorial.includes('IVREA')); 
                            for (i=0; i<buscado5.length;i++){
                                v_filtrado.push(buscado5[i]);
                            }
                            opcionFiltrado = '3';
                            break;
                        case '2':
                            const buscado6 = productos.filter((manga) => manga.editorial.includes('PANINI MANGA')); 
                            for (i=0; i<buscado6.length;i++){
                                v_filtrado.push(buscado6[i]);
                            }
                            opcionFiltrado = '3';
                            break;
                        case '3':
                            break;
                        default:
                            alert('La opcion seleccionada no existe.\nVuelva a intentarlo.');
                            break;
                    }
                }
                break;
            case '3':
                break;
            default:
                alert('La opcion seleccionada no existe.\nVuelva a intentarlo.');
                break;
            }
    }
}       

function finalizarPago(productos, total){
    let metodo;
    let DoC;
    let tarjeta = '';
    let codigo = '';
    let nombreTitular = '';
    let vencimiento = '';
    alert('Los productos a pagar son:\n(Revisar consola)\nCon un total a pagar de $' + total);
    console.table(productos);
    while(metodo != 'a' && metodo != 'n'){
        metodo = prompt('Los metodos de pago son:\na-Tarjeta de credito/debito\nb-Efectivo\nn-Volver atras');
        switch(metodo){
            case 'a':
                while(DoC != 'debito' && DoC != 'credito'){
                    DoC = prompt('Ingrese el tipo de tarjeta debito o credito.\n(Ingrese correctamente debito o credito)');
                    if(DoC != 'debito' && DoC != 'credito'){
                        alert('El tipo de tarjeta ingresado no es valido.');
                    }
                }
                while(nombreTitular == ''){
                    nombreTitular = prompt('Ingrese el nombre/es y apellido del titutal.');
                    if(nombreTitular == ''){
                        alert('Nombre y apellido invalidos');
                    }
                }
                while(tarjeta == ''){
                    tarjeta = prompt('Ingrese la tarjeta de ' + DoC);
                    if(tarjeta == ''){
                        alert('Numero de tarjeta invalida');
                    }
                }
                while(vencimiento == ''){
                    vencimiento = prompt('Ingrese la fecha de vencimiento.\n(Con este formato: nov-24)');
                    if(vencimiento == ''){
                        alert('vencimiento invalido');
                    }
                }
                while(codigo == ''){
                    codigo = prompt('Ingrese el codigo de seguridad.');
                    if(codigo == ''){
                        alert('Codigo invalido');
                    }
                }
                alert('¡Gracias por la compra!\nLos productos le estaran llegando a la brevedad.');
                break;
            case 'b':
                alert('Nuestro sistema de pago en efectivo no se encuentra en funcionamiento en estos momentos...');
            case 'n':
                break;
            default:
                alert('La opcion seleccionada no existe.');
        }
    }

    return metodo;
}

function agregadoDeProductos(){
    let agregar = 's';
    while(agregar == 's'){
        let id = parseInt(prompt('Ingresa el ID:'));
        while((productos.length+1) > id){
            alert('Ya existe un producto con ese ID.');
            id = parseInt(prompt('Ingresa el ID diferente:'));
        }
        let manga = prompt('Ingrese el nombre del manga:\n'); 
        let num = parseInt(prompt('Ingrese el numero del manga:'));
        let editorial = prompt('Ingrese la editorial:');
        while(editorial != 'IVREA' && editorial != 'PANINI MANGA'){
            alert('No trabajamos con la editorial puesta.');
            editorial = prompt('Ingrese la editorial diferente:');
        }
        let demografia = prompt('Ingrese la demografia:');
        while(demografia != 'SHONEN' && demografia != 'SEINEN' && demografia != 'SHOUJO' && demografia != 'JOSEI'){
            alert('La demografia puesta no existe.');
            demografia = prompt('Ingrese la demografia difente:');
        }
        let precio = parseInt(prompt('Ingrese el precio:'));
        productos.push({id, manga, num, editorial, demografia, precio});
        agregar = prompt('¿Desea agregar algun producto mas?');
    }
}