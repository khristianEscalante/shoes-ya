// stores/cartStore.js
import { defineStore } from 'pinia';

export const useCartStore = defineStore('cartStore', {
    state: () => ({
        cart: [], // Array para almacenar los productos en el carrito
    }),
    actions: {
        addToCart(product) {
            // Verificar si el producto ya está en el carrito
            const existingProduct = this.cart.find(item => item.id === product.id);
            if (existingProduct) {
                existingProduct.quantity += 1; // Si existe, incrementar la cantidad
            } else {
                this.cart.push({ ...product, quantity: 1 }); // Si no, agregar al carrito con cantidad 1
            }
        },
        removeFromCart(productId) {
            // Filtrar el carrito para eliminar el producto con el id especificado
            this.cart = this.cart.filter(item => item.id !== productId);
        },
        increaseQuantity(productId) {
            // Encontrar el producto y aumentar su cantidad
            const product = this.cart.find(item => item.id === productId);
            if (product) {
                product.quantity += 1;
            }
        },
        decreaseQuantity(productId) {
            // Encontrar el producto y disminuir su cantidad
            const product = this.cart.find(item => item.id === productId);
            if (product && product.quantity > 1) {
                product.quantity -= 1;
            } else {
                // Si la cantidad es 1, eliminar el producto del carrito
                this.removeFromCart(productId);
            }
        },
        clearCart() {
            // Limpiar todos los productos del carrito
            this.cart = [];
        },
    },
    getters: {
        cartTotal() {
            // Calcular el total del carrito
            return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
        },
        cartItemCount() {
            // Calcular el número total de productos en el carrito
            return this.cart.reduce((total, item) => total + item.quantity, 0);
        },
    },
    persist: {
        enabled: true,
        strategies: [
            {
                key: 'cartStore',
                storage: localStorage,
            },
        ],
    },
});
