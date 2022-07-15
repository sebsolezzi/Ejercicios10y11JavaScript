const botonEdad = document.querySelector('.button');
const botonDia = document.querySelector('.buttonDia');
botonEdad.addEventListener('click', analizarEdad);
botonDia.addEventListener('click', analizarDia);

function analizarEdad(e) {

    e.preventDefault();
    const edad = parseInt(document.querySelector('.inputnumber').value);
    const sexo = document.querySelector('.sexo').value;

    if (edad === '' || sexo === '') {
        alert('Es necesario completar los campos');
        return;
    }

    if (edad >= 18 && sexo === "masculino") {
        alert('Eres un hombre mayor de edad. Puedes entrar');
    } else if (edad >= 20 && sexo === "femenino") {
        alert('Eres una mujer mayor de edad. Puedes entrar');
    }
    else {
        alert('No reunes las condiciones para entrar');
    }
}

function analizarDia(e) {
    e.preventDefault();
    const diaSemana = document.querySelector('.inputdia')
    
    switch (diaSemana.value.toLowerCase()) {
        case "lunes":
            alert("Hoy es lunes. Toca jugar al futbol y comer liviano");
            break;
        case "martes":
            alert("Hoy es martes. Toca correr 8km y comer proteinas");
            break;
        case "miércoles":
            alert("Hoy es miércoles. Toca andar en bicicleta y comer frutas");
            break;
        case "jueves":
            alert("Hoy es jueves. Toca caminar y comer liviano");
            break;
        case "viernes":
            alert("Hoy es viernes. Toca correr 8km y consumir salvado de trigo");
            break;
        case "sábado":
            alert("Hoy es sábado. Toca jugar al futbol y comer asado");
            break;
        case "domingo":
            alert("Hoy es domingo. Toca descansar");
            break;
        default:
            alert("Escribe el día de la semana correctamente.");
    }
    diaSemana.value = "";
}