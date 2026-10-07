function agregarImagen(enlace) {
  const url = prompt("Ingrese la URL de una imagen:");

  if (!url) {
    return;
  }

  enlace.style.display = "none";

  const imagen = document.createElement("img");
  imagen.src = url;
  imagen.alt = "Imagen agregada";

  imagen.onclick = function () {
    alert(imagen.src);
  };

  const nuevoEnlace = document.createElement("a");
  nuevoEnlace.href = "#";
  nuevoEnlace.textContent = "Agregar otra imagen";

  nuevoEnlace.onclick = function (evento) {
    evento.preventDefault();
    agregarImagen(this);
  };

  const contenedor = document.getElementById("contenedor");

  contenedor.appendChild(imagen);
  contenedor.appendChild(nuevoEnlace);
}
