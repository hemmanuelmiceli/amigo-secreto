![Banner Amigo Secreto](https://github.com/user-attachments/assets/bebff93b-ba3d-4b60-b45c-d9adacdc2602)

# Amigo Secreto

Es una aplicación web interactiva que permite a los usuarios organizar un sorteo de "Amigo Secreto". Los usuarios pueden agregar los nombres de sus amigos y realizar el sorteo para asignar al azar a cada persona un amigo secreto.

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)
![GitHub stars](https://img.shields.io/github/stars/tu-usuario/amigo-secreto?style=social)
![Contributors](https://img.shields.io/github/contributors/tu-usuario/amigo-secreto)
![Forks](https://img.shields.io/github/forks/tu-usuario/amigo-secreto?style=social)

## Índice

- [Características](#características)
- [Tecnologías usadas](#tecnologías-usadas)
- [Instalación](#instalación)
- [Uso](#uso)
- [Lógica del Sortear](#lógica-del-sortear)
- [Estilos](#estilos)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)
- [Autor](#autor)

## Características

- **Añadir amigos**: Los usuarios pueden ingresar los nombres de sus amigos en un campo de texto.
- **Listar amigos**: Los nombres ingresados se muestran en una lista interactiva.
- **Sortear amigos secretos**: Una vez ingresados todos los nombres, los usuarios pueden hacer clic en un botón para realizar el sorteo y asignar un amigo secreto aleatorio.
- **Interfaz responsiva**: El diseño está optimizado para verse bien en dispositivos móviles y de escritorio.

## Tecnologías usadas

- **HTML5**: Estructura y contenido de la página.
- **CSS3**: Estilos y diseño visual.
- **JavaScript**: Funcionalidad interactiva, como agregar amigos, mostrar la lista y realizar el sorteo.

## Instalación

1. Clona este repositorio en tu máquina local:
   ```bash
   git clone https://github.com/tu-usuario/amigo-secreto.git

##Uso
Añadir amigos: Ingresa los nombres de tus amigos en el campo de texto y haz clic en el botón "Añadir". Los nombres se agregarán a una lista visible.
Sortear amigos secretos: Cuando todos los amigos estén agregados, haz clic en "Sortear amigo secreto" para asignar un amigo secreto a uno de los participantes de manera aleatoria.

##Lógica del Sortear
El código JavaScript funciona de la siguiente manera:

Agregar amigo: Cuando el usuario escribe un nombre en el campo de texto y hace clic en el botón "Añadir", el nombre se agrega a un arreglo llamado amigos. La lista de amigos se actualiza automáticamente en el DOM.

Sortear amigo secreto: Al hacer clic en el botón "Sortear amigo", se selecciona un nombre aleatorio del arreglo amigos utilizando la función Math.random(), y el nombre sorteado se muestra en la sección de resultados. Si no se han añadido amigos, se muestra una alerta pidiendo agregar amigos primero.

##Estilos
El diseño visual de la aplicación se gestiona mediante el archivo style.css. Algunas características destacadas incluyen:

Paleta de colores: Se han definido variables CSS para los colores principales, como el color del fondo, los botones y el texto.
Estilo responsivo: La aplicación está diseñada para ser vista correctamente tanto en pantallas grandes como pequeñas.
Botones interactivos: Los botones cambian de color cuando el usuario pasa el mouse sobre ellos.
##Contribuciones
Si deseas contribuir a este proyecto, siéntete libre de hacer un fork del repositorio, realizar tus mejoras y enviar un pull request.

##Licencia
Este proyecto está bajo la licencia MIT. Para más detalles, consulta el archivo LICENSE.

##Autor
Emmanuel

Este proyecto fue creado como parte de mi aprendizaje en desarrollo web.

