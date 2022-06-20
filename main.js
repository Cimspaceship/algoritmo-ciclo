
let mensaje = prompt("ingresar mensaje para la consola")

let numero = parseInt(prompt("ingrese la cantidad de repeticiones para el mensaje"))


if (mensaje !="" && !isNaN(numero) ){

    for (let i=0; i<=numero; i++) {
        console.log(`${mensaje}  ${i}`)
    }
}

else if (mensaje == "" && (isNaN(numero)) || numero == "") {
    alert("por favor no sea chistoso y complete los campos como se debe")
}

else if (mensaje == "") {
    alert("inserte el mensaje para la consola")
}

else if (isNaN(numero)) {
    alert("inserte un numero de mensajes válido")
}



