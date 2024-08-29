document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    const comentarios = document.getElementById("comentarios");
    const modal = new bootstrap.Modal(document.getElementById("confirmationModal"));

    const nombresArray = [
      "Ana Pérez", "Carlos López", "Luisa García", "José Martínez", 
      "María Rodríguez", "Pedro Sánchez", "Sofía Ramírez", "Miguel Hernández",
      "Laura Jiménez", "Fernando Díaz"
    ];

    const comentariosArray = [
      "Un lugar maravilloso para visitar con la familia.",
      "Semuc Champey es impresionante, lo recomiendo totalmente.",
      "Una experiencia inolvidable, quiero volver pronto.",
      "El entorno natural es increíble, un lugar único en el mundo.",
      "Los guías turísticos son muy amables y conocedores del lugar.",
      "Perfecto para un viaje de aventura, la naturaleza en su máximo esplendor.",
      "Una maravilla natural que todos deben conocer.",
      "El agua es tan cristalina que puedes ver el fondo, impresionante.",
      "Una joya escondida en Guatemala, cada paso es una vista espectacular.",
      "Un destino que no se puede dejar de visitar, simplemente hermoso."
    ];

    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }

    shuffleArray(nombresArray);
    shuffleArray(comentariosArray);

    const selectedNombres = nombresArray.slice(0, 3);
    const selectedComentarios = comentariosArray.slice(0, 3);

    selectedNombres.forEach((nombre, index) => {
      const comentarioCard = document.createElement("div");
      comentarioCard.className = "card mb-3";
      comentarioCard.innerHTML = `
        <div class="card-body">
          <h5 class="card-title">${nombre}</h5>
          <p class="card-text">${selectedComentarios[index]}</p>
        </div>
      `;
      comentarios.appendChild(comentarioCard);
    });

    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      if (!contactForm.checkValidity()) {
        event.stopPropagation();
        contactForm.classList.add("was-validated");
        return;
      }

      const nombre = document.getElementById("nombre").value;
      const mensaje = document.getElementById("mensaje").value;

      const nuevoComentarioCard = document.createElement("div");
      nuevoComentarioCard.className = "card mb-3";
      nuevoComentarioCard.innerHTML = `
        <div class="card-body">
          <h5 class="card-title">${nombre}</h5>
          <p class="card-text">${mensaje}</p>
        </div>
      `;
      comentarios.insertBefore(nuevoComentarioCard, comentarios.firstChild);

      console.log("Datos enviados:");
      console.log("Nombre:", nombre);
      console.log("Mensaje:", mensaje);

      modal.show();

      contactForm.reset();
      contactForm.classList.remove("was-validated");
    });
  });