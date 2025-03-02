![Secret Friend](https://github.com/user-attachments/assets/c50dfb88-3d3a-4f56-8931-c2e3de104046)

# Amigo Secreto

Es una aplicación web interactiva que permite a los usuarios organizar un sorteo de "Amigo Secreto". Los usuarios pueden agregar los nombres de sus amigos y realizar el sorteo para asignar al azar a cada persona un amigo secreto.

![Status](https://img.shields.io/badge/Status-Finished-green)
![Documentation](https://img.shields.io/badge/Documentation-In_Progress-yellow)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## Índice

- [Funcionalidades](#funcionalidades)
- [Tecnologías usadas](#tecnologías-usadas)
- [Instalación](#instalación)
- [Uso](#uso)
- [Lógica del Sortear](#lógica-del-sortear)
- [Instrucciones de uso](#instrucciones-de-uso)
- [Estilos](#estilos)
- [Contribuciones](#contribuciones)
- [Autor](#autor)

## Funcionalidades

- **Añadir amigos**: Los usuarios pueden ingresar los nombres de sus amigos en un campo de texto.
- **Listar amigos**: Los nombres ingresados se muestran en una lista interactiva.
- **Sortear amigos secretos**: Una vez ingresados todos los nombres, los usuarios pueden hacer clic en un botón para realizar el sorteo y asignar un amigo secreto aleatorio.
- **Mostrar Resultados**: Una vez que se realiza el sorteo, el nombre del amigo secreto se muestra en pantalla.

## Tecnologías usadas

- **HTML5**: Estructura y contenido de la página.
- **CSS3**: Estilos y diseño visual.
- **JavaScript**: Funcionalidad interactiva, como agregar amigos, mostrar la lista y realizar el sorteo.

## Instalación

1. Clona este repositorio en tu máquina local:
   ```bash
   git clone https://github.com/hemmanuelmiceli/amigo-secreto

## Uso
Añadir amigos: Ingresa los nombres de tus amigos en el campo de texto y haz clic en el botón "Añadir". Los nombres se agregarán a una lista visible.
Sortear amigos secretos: Cuando todos los amigos estén agregados, haz clic en "Sortear amigo secreto" para asignar un amigo secreto a uno de los participantes de manera aleatoria.

## Lógica del Sortear
El código JavaScript funciona de la siguiente manera:

Agregar amigo: Cuando el usuario escribe un nombre en el campo de texto y hace clic en el botón "Añadir", el nombre se agrega a un arreglo llamado amigos. La lista de amigos se actualiza automáticamente en el DOM.

Sortear amigo secreto: Al hacer clic en el botón "Sortear amigo", se selecciona un nombre aleatorio del arreglo amigos utilizando la función Math.random(), y el nombre sorteado se muestra en la sección de resultados. Si no se han añadido amigos, se muestra una alerta pidiendo agregar amigos primero.

## Instrucciones de uso
 **Agregar amigos:**

+ Ingresa el nombre de un amigo en el campo de texto y haz clic en el botón Añadir.
+ Repite el proceso para agregar más amigos.

 **Sortear un amigo secreto:**

+ Una vez que hayas agregado amigos, haz clic en Sortear amigo para seleccionar un amigo secreto aleatorio.
+ El nombre del amigo secreto aparecerá debajo del botón.

## Estilos
El diseño visual de la aplicación se gestiona mediante el archivo style.css. Algunas características destacadas incluyen:

Paleta de colores: Se han definido variables CSS para los colores principales, como el color del fondo, los botones y el texto.
Estilo responsivo: La aplicación está diseñada para ser vista correctamente tanto en pantallas grandes como pequeñas.
Botones interactivos: Los botones cambian de color cuando el usuario pasa el mouse sobre ellos.

## Contribuciones
Si deseas contribuir a este proyecto, siéntete libre de hacer un fork del repositorio, realizar tus mejoras y enviar un pull request.

## Autor
<a href="https://github.com/hemmanuelmiceli" target="_blank">
  <img src="https://img.shields.io/badge/Author-Emmanuel_Miceli-blue" alt="Author">
</a>




