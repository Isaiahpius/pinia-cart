import { defineStore } from "pinia";

export const useCartStore = defineStore('carts', {
    state: () => ({
        items: [] as {
            id: number
            name: string
            price: number
            quantity: number
        }[]
    }),

    actions: {
        addToCart(product: {
            id: number
            name: string
            price: number
        }) {
            const existingItem = this.items.find(
                item => item.id === product.id
            )
            if (existingItem) {
                existingItem.quantity++
            } else {
                this.items.push({
                    ...product, quantity: 1
                })
            }
        }
    }
})