// Crear un arreglo vacío para almacenar los nombres de los amigos
let amigos = [];

// Obtener los elementos del DOM
const input = document.getElementById('amigo');
const botonAgregar = document.querySelector('.button-add');
//Obtener el elemento de la lista.
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado'); 


// Función para agregar un amigo
function agregarAmigo() {
  const nombre = input.value.trim(); // Obtener el valor y eliminar espacios en blanco

  // Valida si el text box esta vacio
  if (nombre === '') {
    alert('Por favor, inserte un nombre.');
  } else {
    // Suma amigo a la lista
    amigos.push(nombre);

    // Actualizamos la lista
    actualizarLista();

    // Limpia text box
    input.value = '';
  }
}

// Función para actualizar la lista de amigos en el DOM
function actualizarLista() {
  // Limpiar la lista existente: Establecer lista.innerHTML = "", para evitar duplicados.
    listaAmigos.innerHTML = '';

  // Iterar sobre el arreglo y crear elementos de lista (<li>) para cada título.
  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement('li');//Por cada ciclo se crea un elemento
    li.textContent = amigos[i];
    listaAmigos.appendChild(li);//agrgamos elemento
  }
}

// Función para sortear un amigo secreto de manera aleatoria
function sortearAmigo() {
  // Verifica si hay amigos en el array
  if (amigos.length === 0) {
    alert('No hay amigos para sortear.');
    return;
  }

  // Generar un índice aleatorio.
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);

  // Obtener el nombre sorteado usando el índice aleatorio
  const amigoSorteado = amigos[indiceAleatorio];

  // Mostrar el nombre sorteado en el elemento resultado
  resultado.innerHTML = `¡El amigo secreto es: <strong>${amigoSorteado}</strong>!`;
}


