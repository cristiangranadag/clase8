/** Elaborar un algoritmo que pida el número final de la placa de un vehículo y permita 
 * determinar que día tiene pico y placa.
 * 
 * Placas terminadas en - Dia 
 * 0-1                  - Lunes
 * 2-7                  - Martes
 * 9-4                  - Miercoles
 * 5-3                  - Jueves
 * 6-8                  - Viernes
 */

let numero;
let Respuesta;
let dia;
numero = parseInt(prompt('Ingresa el número final de la placa '));
dia = pico_Placa(numero)
alert("El dia de pico y placa para su vehículo es: " + dia)

function pico_Placa(num) {

    switch (num) {
        case 0:
        case 1:
            respuesta = "Lunes"
            break;

        case 2:
        case 7:
            respuesta = "Martes"
            break;
        case 9:
        case 4:
            respuesta = "Miercoles"
            break;
        case 5:
        case 3:
            respuesta = "Jueves"
            break;
        case 6:
        case 8:
            respuesta = "Viernes"
            break;
        default:
            alert("Error, ingrese número del 0 de 9");
    }
    return respuesta;
}
