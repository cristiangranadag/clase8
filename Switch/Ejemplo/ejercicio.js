'use stric';

// switch(expression) {
//     case x:
//         // code block
//         break;
//     case y:
//         // code block
//         break;
//     default:
            // code block
// }


// let genero;

// switch(genero) {
//     case Mujer:
//         instrucciones
//         break;
//     case Hombre:
//         instrucciones
//         break;
//     default:
// }


let horas;
function Calcular(){
    date = Number(document.getElementById('date').value);
    alert('El dia de la semana es ' + EjercicioCase(date))
}

function EjercicioCase(horas){
    switch(horas) {
        case 0:
    day = "Sunday";
    break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
    default:
        alert('Dia de la semana no valido')
    };

    return day
}