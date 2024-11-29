const fetchDataClient = async () => {
  const response = await fetch("./data/clientes.json");
  const data = await response.json();
  return data;
};

const generarTarjetasClientes = async () => {
  const proyectos = await fetchDataClient();
  const container = document.querySelector(".ClientCardContainer");

  proyectos.forEach((proyecto) => {
    // Crear el contenedor del artículo
    const card = document.createElement("article");
    card.classList.add("ClientCard");

    // Crear y agregar el título
    const title = document.createElement("h3");
    title.textContent = `Proyecto de ${proyecto.empresa}`;
    card.appendChild(title);

    // Crear y agregar el cliente
    const client = document.createElement("p");
    client.textContent = `Cliente: ${proyecto.cliente}`;
    card.appendChild(client);

    // Crear y agregar la descripción
    const description = document.createElement("p");
    description.textContent = proyecto.desc || "Sin descripción disponible.";
    card.appendChild(description);

    // Crear y agregar la imagen (si existe)
    if (proyecto.img) {
      const image = document.createElement("img");
      image.src = proyecto.img;
      image.width = 400;
      image.alt = proyecto.cliente;
      card.appendChild(image);
    }

    // Crear y agregar el comentario
    const comment = document.createElement("p");
    comment.textContent = proyecto.comentario;
    card.appendChild(comment);

    // Crear y agregar el enlace (si existe)
    const link = document.createElement("a");
    link.target = "_blank";
    link.textContent = "Visitar la web";
    link.href = "#";
    if (proyecto.url) {
      link.href = proyecto.url;
    }
    card.appendChild(link);

    // Agregar la tarjeta al contenedor
    container.appendChild(card);
  });
};

// Ejecutar la función
generarTarjetasClientes();
