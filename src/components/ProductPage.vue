<template>
  <div>
    <h2>Royal Gadgets</h2>

    <h2>Cart items: {{ cart.items.length }}</h2>

    <div v-for="product in products" :key="product.id">
        <h3>{{ product.name }}</h3>
        <p>#{{ product.price.toLocaleString() }}</p>

        <button @click="cart.addToCart(product)">Add to Cart</button>
    </div>

    <h2>Shopping Cart</h2>
    <div v-for="item in cart.items" :key="item.id">
        <p>
            {{ item.name }} - Quantity: {{ item.quantity }}
        </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
    import { useCartStore } from '../stores/cart';

    const cart = useCartStore()

    const products = [
        {
            id: 1,
            name: 'Laptop',
            price: 230000
        },
        {
            id: 2,
            name: 'Phone',
            price: 430000
        },
        {
            id: 3,
            name: 'Headphone',
            price: 84000
        }
    ]
</script>

<style>

</style>