// Elaborar un algoritmo que pida un número del 1 al 7 y entregue como resultado el nombre del día 
// correspondiente a la semana

// Por ejemplo:

// Si el usuario ingresa el número 1, entonces se le debe dar como resultado "Lunes"

let dia;
let respuesta;

dia = Number(prompt("Ingrese el día de la semana del 1 a 7"))
console.log('El dia de la semana es: '+ diaSemana(dia));

function diaSemana(dia) {
    switch(dia){
        case 1:
            respuesta="Lunes"
            alert('Hoy es Lunes');
        break;
        case 2:
            respuesta="Martes"
            alert('Hoy es Martes');
        break;
        case 3:
            respuesta="Miercoles"
            alert('Hoy es Miercoles');
        break;
        case 4:
            respuesta="Jueves"
            alert('Hoy es Jueves');
        break;
        case 5:
            respuesta="Viernes"
            alert('Hoy es Viernes');
        break;
        case 6:
            respuesta="Sabado"
            alert('Hoy es Sabado');
        break;
        case 7:
            respuesta="Domingo"
            alert('Hoy es Domingo');
        break;
        default:
            respuesta="Lunes"
            // alert('Dia de la semana no valído');
            alert('Error comando');
    }
    return respuesta;
}