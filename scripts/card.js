// cards.js
const fetchData = async () => {
  const response = await fetch("./data/card.json");
  const data = await response.json();
  return data;
};

const DibujarCard = async () => {
  const data = await fetchData();

  const cardContainer = document.querySelector(".cardContainer");
  data.map((element) => {
    cardContainer.innerHTML += `
        <article class="card">
          <img src="${element.img}" alt="" />
          <p class="ename">${element.name}</p>
          <p class="edesc">${element.shortDesc}</p>
          <a class="verMas" href="${element.url}" target="_blank">Conocenos</a>
        </article>
      `;
  });
};

DibujarCard();
