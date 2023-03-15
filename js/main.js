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
let switchOpcion;
let mensaje;
let total=0;

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
    operacionOpcion = prompt('¿Que desea ver? (n-cerrar sesion)\n1-Ver productos\n2-Ofertas\n3-Futuros lanzamientos');
    switch(operacionOpcion){
        case '1':
            while(mensaje != 'n'){
                switchOpcion = prompt('¿Que manga desea comprar?\n1-MOSHOKU TENSEI N.1 $2.200\n2-NEON GENESIS EVANGELION N.1 $1.795\n3-BLACK CLOVER N.2 $1.795\n4-UZUMAKI (Tomo unico) $4.900');
                switch(switchOpcion){
                    case '1':
                        alert('Agregaste MOSHOKU TENSEI N.1 al carrito');
                        sumadorTotal(2200);
                        break;
                    case '2':
                        alert('Agregaste NEON GENESIS EVANGELION N.1 al carrito');
                        sumadorTotal(1795);
                        break;
                    case '3':
                        alert('Agregaste BLACK CLOVER N.2 al carrito');
                        sumadorTotal(1795);
                        break;
                    case '4':
                        alert('Agregaste UZUMAKI (Tomo unico) al carrito');
                        sumadorTotal(4900);
                        break;
                    default:
                        alert('El codigo del producto no existe');
                        break;
                }
                mensaje = prompt('¿Desea comprar otro producto? (s-Si / n-No)');
            }
            mensaje='s';
            Operaciones();
            break;
        case '2':
            alert('OFERTAS:\n* 2x1 en mangas B6 hasta el 20/3\n* 10% de descuento pagando con Santander\n* 3 cuotas sin intereses con American Express\nPulsa ENTER para regresar');
            Operaciones();
            break;
        case '3':
            alert('Por ahora no hay nuevos lanzamiento ¡les mantendremos al tanto de futuras noticas!\nPulsa ENTER para regresar');
            Operaciones();
            break;
        case 'n':
            alert('¡Esperamos que regreses pronto!');
            break;
        default:
            alert('Esa opcion no existe, ingresa una valida.\nPulsa ENTER para regresar');
            Operaciones();
            break;
    }
}

function sumadorTotal(precio){
    total = total + precio;
    alert('Llevas gastado $' + total);
}
