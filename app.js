// El principal objetivo de este desafío es fortalecer 
// tus habilidades en lógica de programación. Aquí deberás desarrollar 
// la lógica para resolver el problema.

let friends = [];

//Funcion para limpiar cajas de texto
function cleanbox(){
    document.getElementById("amigo").value = "";
}

//Funcion para solicitar nombre y validar que el campo esta lleno y es valido
function agregarAmigo(){
    let userinput = document.getElementById("amigo");
    let name = userinput.value;

    //condicion para validar que la entrada no esta vacia
    if (name.trim() === ""){
        alert("Agrega un nombre antes de continuar");
        
        //condicion para agregar el nombre a la lista si la entrada es valida
    } else {
        friends.push(name);
        cleanbox();
        console.log(`lista de amigos: ${friends}`);
        displayfriends();
    }
}

//Funcion para mostar la lista de amigos en el HTML
function displayfriends(){
    //obtener el elemento de la lista
    const friendslist = document.getElementById("listaAmigos");

    //evitar duplicar los nombres en la lista
    friendslist.innerHTML = "";

    //iteracion para agregar los nombres a la lisa
    for (let i = 0; i < friends.length; i++) {
        const friendName = friends[i];
         //crear el elemento <li>
        const listItem = document.createElement("li");

        //asignarle el nombre como texto
        listItem.textContent = friendName;

        //agregar el <li> a la lista <ul>
        friendslist.appendChild(listItem);
    }

}

//Funcion para el sorteo aleatorio
function sortearAmigo() {
    //validar si hay amigos en el arreglo
    if (friends.length === 0) {
        alert("Agrega al menos dos amigos antes de sortear.");
        return;
    }

    //generar un índice aleatorio
    const randomIndex = Math.floor(Math.random() * friends.length);

    //obtener el nombre sorteado usando el índice aleatorio
    const randomFriend = friends[randomIndex];

    //mostrar el resultado en el HTML
    const resultElement = document.getElementById("resultado");
    resultElement.innerHTML = `¡El amigo sorteado es: <strong>${randomFriend}</strong>!`;
}