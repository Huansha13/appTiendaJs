import { Cart } from "../model/producto.js";
const cart = new Cart();

export function addToCart(event) {
  // Obtener el botón desde el event.target
  const button = event.target;

  // Crear un elemento i para el icono
  const icon = document.createElement("i");

  // Agregar las nuevas clases de Font Awesome al elemento i
  icon.classList.add("fas", "fa-shopping-cart");

  // Agregar un margen derecho al elemento i para darle espacio
  icon.style.marginRight = "5px";

  // Agregar el elemento i como un hijo del botón
  button.appendChild(icon);

  const productid = event.target.dataset.productId;
  cart.addItem(productid);

  // Cambiar la clase del botón de primary a success
  button.classList.remove("btn-primary");
  button.classList.add("btn-success");


  // Actualiza el contador del carrito
  updateCartCount();

  // Después de 1 segundos
  setTimeout(() => {

    // Cambiar la clase del botón de success a primary
    button.classList.remove("btn-success");
    button.classList.add("btn-primary");

    //Eliminación del elemento i
    icon.remove();
  }, 1000);
}

export function updateCartCount() {
  const cartCountEl = document.getElementById("cart-count");
  cartCountEl.innerHTML = cart.getItemCount();
}

