export function renderProduct(product) {
  const cardEl = document.createElement("div");
  cardEl.classList.add("col-md-4", "mb-4");

  const innerHtml = `
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text">${product.description}</p>
          <p class="card-text"><strong>Precio: S/. ${product.price}</strong></p>
          <button class="btn btn-primary" data-product-id="${product.id}">
            Agregar al carrito
          </button>
        </div>
      </div>
    `;

  cardEl.innerHTML = innerHtml;
  return cardEl;
}

