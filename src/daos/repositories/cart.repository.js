import getDAOS from "../daos.factory.js";

const { cartsDAO } = getDAOS();

export class CartRepository {
    constructor() {
        this.dao = cartsDAO;
    }

    async getAllCarts() {
        try {
            const carts = await this.dao.getAll();
            return carts;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async getCart(cartId) {
        try {
            const cart = await this.dao.getCart(cartId);
            return cart;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async deleteProductFromCart(cartId, productId) {
        try {
            const updatedCart = await this.dao.deleteProductByIdFromCart(cartId, productId);
            return updatedCart;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async saveProductToCart(idProduct, idCart, quantity) {
        try {
            const cart = await this.dao.saveCart(idProduct, idCart, quantity);
            return cart;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async updateCart(cartId, products) {
        try {
            const updatedCart = await this.dao.updateCartById(cartId, products);
            return updatedCart;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async updateProductQuantity(cartId, productId, quantity) {
        try {
            const updatedCart = await this.dao.updateProductQuantity(cartId, productId, quantity);
            return updatedCart;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async deleteAllProductsFromCart(cartId) {
        try {
            const cart = await this.dao.deleteAllProductsFromCart(cartId);
            return cart;
        } catch (error) {
            throw new Error(error.message);
        }
    }
}