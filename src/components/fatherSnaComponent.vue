<script setup lang="ts">
    import { menuSnacks } from '@/constants/menu';
    import type { Snack } from '@/constants/menu';
    import childSnaComponent from './childSnaComponent.vue';
    import { inject, type Ref } from 'vue';

    const updateCart = inject<(dish: Snack, change: number) => void>('updateCart');
    const cart = inject<Ref<{ dish: Snack; quantity: number }[]>>('cart');

    function getQuantity(dish: Snack) {
        return cart?.value.find((item) => item.dish.id === dish.id)?.quantity ?? 0;
    }

    function changeQuantity(dish: Snack, change: number) {
        updateCart?.(dish, change);
    }
</script>

<template>
    <section class="snacks">
        <childSnaComponent
            v-for="dish in menuSnacks"
            :key="dish.id"
            :dish="dish"
            :quantity="getQuantity(dish)"
            @incrementar="changeQuantity(dish, 1)"
            @desincrementar="changeQuantity(dish, -1)"
        />
    </section>
</template>

<style scoped>
.snacks {
    display: grid;
    grid-template-columns: repeat(4, minmax(220px, 280px));
    justify-content: center;
    gap: 20px;
}

.snacks h2 {
    margin: 0;
    grid-column: 1 / -1;
}

@media (max-width: 800px) {
    .snacks {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

@media (max-width: 520px) {
    .snacks {
        grid-template-columns: 1fr;
    }
}
</style>