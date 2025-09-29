const botaoCarrinho = document.getElementById("addCarrinho");
const produto = document.getElementById("produto");
const listaCarrinho = document.querySelector(".dropdown-menu");

let carrinho = JSON.parse(sessionStorage.getItem("carrinho")) || [];

function atualizarCarrinho() {
  listaCarrinho.innerHTML = "";

  if (carrinho.length === 0) {
    listaCarrinho.innerHTML = "<li class='dropdown-item'>Carrinho vazio</li>";
    return;
  }

  carrinho.forEach((item, index) => {
    const li = document.createElement("li");
    li.classList.add("dropdown-item", "d-flex", "justify-content-between", "align-items-center");
    li.innerHTML = `
      ${item}
      <button class="btn btn-sm btn-danger ms-2 remover" data-index="${index}">
        <i class="bi bi-trash"></i>
      </button>
    `;
    listaCarrinho.appendChild(li);
  });
}

function salvarCarrinho() {
  sessionStorage.setItem("carrinho", JSON.stringify(carrinho));
}

botaoCarrinho.addEventListener("click", () => {
  carrinho.push(produto.textContent);
  salvarCarrinho();
  atualizarCarrinho();
});

listaCarrinho.addEventListener("click", (e) => {
  if (e.target.closest(".remover")) {
    const index = e.target.closest(".remover").dataset.index;
    carrinho.splice(index, 1);
    salvarCarrinho();
    atualizarCarrinho();
  }
});

atualizarCarrinho();
