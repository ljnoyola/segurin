/* A partir de la página web proporcioanda, completar el código javasecrip para que:
1.- Cuando se pinche sobre elprimer enlace, se oculte su sección relacioada
2.- Cuando se vuelava a picnhar sobre el mismo enlace, se muestreotra vez esa sección de contenidos

style='display:block;' //muestra
style='display:none' //oculta*/

function presioname() {
    var parrafos=document.getElementById("boton");//traer elemmentos por id id="boton"
    parrafos.style.display='none';
    }

    document.getElementById('boton').onClick = presioname;
