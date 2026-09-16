<script setup lang="ts">
    import { menuPostres } from '@/constants/menu';
    import type { Postre } from '@/constants/menu';
    import childPostresComponent from './childPostresComponent.vue';
    import { inject, type Ref } from 'vue';

    const updateCart = inject<(dish: Postre, change: number) => void>('updateCart');
    const cart = inject<Ref<{ dish: Postre; quantity: number }[]>>('cart');

    function getQuantity(dish: Postre) {
        return cart?.value.find((item) => item.dish.id === dish.id)?.quantity ?? 0;
    }

    function changeQuantity(dish: Postre, change: number) {
        updateCart?.(dish, change);
    }
</script>

<template>
    <section class="postres">
        <childPostresComponent
            v-for="dish in menuPostres"
            :key="dish.id"
            :dish="dish"
            :quantity="getQuantity(dish)"
            @incrementar="changeQuantity(dish, 1)"
            @desincrementar="changeQuantity(dish, -1)"
        />
    </section>
</template>

<style scoped>
.postres {
    display: grid;
    grid-template-columns: repeat(4, minmax(220px, 280px));
    justify-content: center;
    gap: 20px;
}

.postres h2 {
    margin: 0;
    grid-column: 1 / -1;
}

@media (max-width: 800px) {
    .postres {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

@media (max-width: 520px) {
    .postres {
        grid-template-columns: 1fr;
    }
}
</style>