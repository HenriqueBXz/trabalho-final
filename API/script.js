const pageInput = document.getElementById("pageInput");
const searchBtn = document.getElementById("searchBtn");
const resultsDiv = document.getElementById("results");

async function fetchCharacters(page) {
  resultsDiv.innerHTML = "<p>Carregando...</p>";

  try {
    const response = await fetch(`https://dragonball-api.com/api/characters?page=${page}`);
    const data = await response.json();

    if (data.error) {
      resultsDiv.innerHTML = "<p>Página inválida!</p>";
      return;
    }

    resultsDiv.innerHTML = "";
    data.items.forEach((character) => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <div>
          <img src="${character.image}" alt="${character.name}">
        </div>
        <section>
          <h3>${character.name}</h3>
          <p><strong>Race:</strong> ${character.race}</p>
          <p><strong>Gender:</strong> ${character.gender}</p>
          <p><strong>Ki:</strong> ${character.ki}</p>
          <p><strong>Affiliation:</strong> ${character.affiliation}</p>
        </section>
      `;
      resultsDiv.appendChild(card);
    });

  } catch (error) {
    resultsDiv.innerHTML = "<p>Erro ao buscar personagens!</p>";
  }
}

searchBtn.addEventListener("click", () => {
  const page = pageInput.value.trim();
  if (page) {
    fetchCharacters(page);
  } else {
    resultsDiv.innerHTML = "<p>Digite um número de página!</p>";
  }
});

// Carrega a página 1 ao abrir
fetchCharacters(1);

// Toggle do menu hamburger
document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  if (toggleButton && menu) {
    toggleButton.addEventListener("click", function () {
      menu.classList.toggle("show");
    });
  }
});
