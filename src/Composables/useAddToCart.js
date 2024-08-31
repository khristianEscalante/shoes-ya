// composables/useCart.js
import { useCartStore } from "@/stores/cart";

export function useCart() {
    const cartStore = useCartStore();

    // Función para agregar un producto al carrito
    const addToCart = (product) => {
        cartStore.addToCart(product);
    };

    // Función para eliminar un producto del carrito
    const removeFromCart = (productId) => {
        cartStore.removeFromCart(productId);
    };

    // Función para incrementar la cantidad de un producto
    const increaseQuantity = (productId) => {
        cartStore.increaseQuantity(productId);
    };

    // Función para disminuir la cantidad de un producto
    const decreaseQuantity = (productId) => {
        cartStore.decreaseQuantity(productId);
    };

    // Función para vaciar el carrito completamente
    const clearCart = () => {
        cartStore.clearCart();
    };


    return {
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
    };
}
