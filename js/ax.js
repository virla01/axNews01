// Menu principal
/* const contenedor = document.querySelector('#header');

document.querySelector('#boton-menu').addEventListener('click', () => {
    contenedor.classList.toggle('active');
}); */

var coll = document.getElementsByClassName("tar-item");
var i;
for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        console.log(coll.height + "px");
    });
}