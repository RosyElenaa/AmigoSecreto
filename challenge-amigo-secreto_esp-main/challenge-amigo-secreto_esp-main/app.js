let listaNombres = [];

function agregarAmigo(){
       let nombre = document.getElementById('amigo').value;
       let nombreConMayuscula = nombreIndividuo(nombre);


       if(nombre == ''){
        alert('Error');
        return;
        } 

        else if(listaNombres.includes(nombreConMayuscula)){
            alert("Este nombre ya ha sido ingresado.");
            document.getElementById('amigo').focus();
        }

        else{
            listaNombres.push(nombreConMayuscula);
            console.log(listaNombres);
            imprimirListaAmigos();
            document.getElementById('amigo').focus();
        }
    
    limpiarCaja();
}

function imprimirListaAmigos(){
    let listaAmigos = document.getElementById('listaAmigos');


    listaAmigos.innerHTML = '';


    for(let i=0; i < listaNombres.length; i++){
        listaAmigos.innerHTML += `<li>${listaNombres[i]}<li>`;
    }
}

function limpiarCaja() {
    document.getElementById('amigo').value = '';
    document.getElementById('amigo').focus;
}

function sortearAmigo(){

    let amigoSorteado = listaNombres[Math.floor(Math.random() * listaNombres.length)];


    if(listaNombres.length < 2){
        alert("Ingresa al menos dos amigos para realizar el sorteo.");
        return;
    }

    document.getElementById('resultado').innerHTML = `Tu amigo elegido es: ${amigoSorteado}`;

   
    document.querySelector('ul').innerHTML = '';
    document.getElementById('botonSortear').disabled = true;
    console.log(amigoSorteado);

}

function reiniciar(){
    listaNombres = [];
    document.getElementById('resultado').innerHTML = '';
    document.getElementById('listaAmigos').innerHTML = '0 amigos';
    document.getElementById('botonSortear').disabled = false;
    limpiarCaja();
}

document.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        document.getElementById("botonAñadir").click();
    }
});



function nombreIndividuo(str) {
    if (str.length === 0) return str;
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}