// Importar las clases y funciones de los archivos separados
import { Product } from "./model/producto.js";
import { renderProduct } from "./view/productoView.js";
import { updateCartCount, addToCart} from "./controller/productoController.js";

// Crear los objetos de modelo y vista
const products = [
    new Product(1, "Camiseta", "Una camiseta muy bonita", 15.99),
    new Product(2, "Pantalones", "Unos pantalones muy cómodos", 25.99),
    new Product(3, "Zapatos", "Unos zapatos muy elegantes", 49.99),
];

// Renderizar los productos en la página web
const productListEl = document.getElementById("product-list");
products.forEach(product => {
    //const addToCartBtn = cardEl.querySelector('.btn-primary');
    //addToCartBtn.addEventListener('click', handleAddToCartClick);
    
    //const addToCartHandler = `handleAddToCartClick('${product.name}', cart)`;
    const cardEl = renderProduct(product);
    const addToCartBtn = cardEl.querySelector('.btn-primary');
    addToCartBtn.addEventListener('click', addToCart);
    productListEl.appendChild(cardEl);
});

// Actualizar el contador del carrito
updateCartCount();