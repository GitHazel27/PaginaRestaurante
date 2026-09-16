<script setup lang="ts">
  import type { Burger } from '@/constants/menu';

  defineProps<{
    dish: Burger;
    quantity: number;
  }>();

  const emit = defineEmits<{
    incrementar: [];
    desincrementar: [];
  }>();
</script>

<template>
  <article class="dish">
    <div class="dish-image-wrapper">
      <img v-if="dish.image" :src="dish.image" :alt="dish.name" class="dish-image" />
    </div>
    <div class="dish-info">
      <h3>{{ dish.name }}</h3>
      <small>{{ dish.calories }}</small>
      <p><b>{{ dish.price }}</b></p>
    </div>
    <div class="quantity-control">
      <button type="button" aria-label="Disminuir cantidad" @click="emit('desincrementar')">-</button>
      <strong>{{ quantity }}</strong>
      <button type="button" aria-label="Aumentar cantidad" @click="emit('incrementar')">+</button>
    </div>
  </article>
</template>

<style scoped>
.dish {
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow: hidden;
  padding-bottom: 16px;
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid rgba(142, 69, 5, 0.16);
  border-radius: 12px;
  box-shadow: 0 5px 14px rgba(91, 48, 18, 0.12);
}

.dish-image-wrapper {
  width: 100%;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  background: #ffffff;
}

.dish-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.25s ease;
}

.dish:hover .dish-image {
  transform: scale(1.04);
}

.dish-info {
  display: grid;
  gap: 6px;
  padding: 0 12px;
}

.dish small{
  font-family: sans-serif;
  color: #765c49;
}

.dish h3,
.dish p {
  margin: 0;
  font-family: sans-serif;
}

.dish p {
  margin-top: 4px;
  font-size: 1rem;
}

.quantity-control {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: #ff973051;
  font-family: sans-serif;
  align-self: center;
  width: 110px;
  min-height: 38px;
  border-radius: 50px;
}

button {
  width: 30px;
  height: 30px;
  padding: 0;
  color: #020202;
  background: none;
  border: 0;
  border-radius: 6px;
  cursor: pointer;
  font-size: 20px;
}

button:hover{
  width: 30px;
  height: 30px;
  padding: 0;
  color: #ffffff;
  background: #ff9830;
  border: 0;
  border-radius: 50px;
}
</style>