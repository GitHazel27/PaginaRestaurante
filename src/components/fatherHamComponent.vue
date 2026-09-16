<script setup lang="ts">
    import { menuHamburguesas } from '@/constants/menu';
    import type { Burger } from '@/constants/menu';
    import childDishComponent from './childDishComponent.vue';
    import { inject, type Ref } from 'vue';

    const updateCart = inject<(dish: Burger, change: number) => void>('updateCart');
    const cart = inject<Ref<{ dish: Burger; quantity: number }[]>>('cart');

    function getQuantity(dish: Burger) {
        return cart?.value.find((item) => item.dish.id === dish.id)?.quantity ?? 0;
    }

    function changeQuantity(dish: Burger, change: number) {
        updateCart?.(dish, change);
    }
</script>

<template>
    <section class="hamburguesas">
        <childDishComponent
            v-for="dish in menuHamburguesas"
            :key="dish.id"
            :dish="dish"
            :quantity="getQuantity(dish)"
            @incrementar="changeQuantity(dish, 1)"
            @desincrementar="changeQuantity(dish, -1)"
        />
    </section>
</template>

<style scoped>
.hamburguesas {
    display: grid;
    grid-template-columns: repeat(4, minmax(220px, 280px));
    justify-content: center;
    gap: 20px;
}

.hamburguesas h2 {
    margin: 0;
    grid-column: 1 / -1;
}

@media (max-width: 800px) {
    .hamburguesas {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

@media (max-width: 520px) {
    .hamburguesas {
        grid-template-columns: 1fr;
    }
}
</style>