<script setup lang="ts">
import { ref, computed } from 'vue';
import fatherCatComponent from './components/fatherHamComponent.vue';
import type { CartItem, Dish } from './constants/menu';

// Variable reactiva para almacenar los platillos del pedido
const cart = ref<CartItem[]>([]);

// Contador dinámico reactivo: suma total de piezas pedidas
const totalItemsCount = computed(() => {
  return cart.value.reduce((acc, item) => acc + item.quantity, 0);
});

// Costo total de la orden
const totalCartPrice = computed(() => {
  return cart.value.reduce((acc, item) => acc + item.dish.price * item.quantity, 0);
});

// Lógica para agregar o incrementar el platillo
function handleAddDishToCart(dish: Dish) {
  const existingItem = cart.value.find((item) => item.dish.id === dish.id);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.value.push({ dish, quantity: 1 });
  }
}

// Vaciar o reiniciar el carrito
function clearCart() {
  cart.value = [];
}
</script>

<template>
<div>
      <header>
        <nav>
           <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#menu">Menú</a></li>
            <li><a href="#restaurantes">Restaurantes</a></li>
            <li><a href="#cupones">Cupones</a></li>
            <li>
              <span class="badge">{{ totalItemsCount }}</span>
              <span v-if="totalItemsCount > 0" class="cart-total-badge">
              (${{ totalCartPrice.toFixed(2) }})
              </span>
              <div class="carrito">
              <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="Interface / Shopping_Cart_02">
              <path id="Vector" d="M3 3H3.26835C3.74213 3 3.97943 3 4.17267 3.08548C4.34304 3.16084 4.48871 3.28218 4.59375 3.43604C4.71269 3.61026 4.75564 3.8429 4.84137 4.30727L7.00004 16L17.4218 16C17.875 16 18.1023 16 18.29 15.9199C18.4559 15.8492 18.5989 15.7346 18.7051 15.5889C18.8252 15.4242 18.8761 15.2037 18.9777 14.7631L18.9785 14.76L20.5477 7.95996L20.5481 7.95854C20.7023 7.29016 20.7796 6.95515 20.6947 6.69238C20.6202 6.46182 20.4635 6.26634 20.2556 6.14192C20.0184 6 19.6758 6 18.9887 6H5.5M18 21C17.4477 21 17 20.5523 17 20C17 19.4477 17.4477 19 18 19C18.5523 19 19 19.4477 19 20C19 20.5523 18.5523 21 18 21ZM8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20C9 20.5523 8.55228 21 8 21Z" stroke="#00000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              </svg>
              </div>
            </li>
           </ul> 
        </nav>
    </header>
</div>
<section id="inicio" class="inicio">
  <h1>HOLAAAAA</h1>
</section>
<section id="menu" class="menu">
  <div class="router-content">
    <RouterLink to="/hamburguesas">Hamburguesas</RouterLink>
    <RouterLink to="/postres">Postres</RouterLink>
    <RouterLink to="snacks">Snacks</RouterLink>
    <RouterView></RouterView>
  </div>
</section>

</template>

<style scoped>

  h1 {
      font-size: 300px;
  }

  header{
    font-family: sans-serif;
    font-weight: bold;
    position: sticky;
    top: 0;
    z-index: 1000;
    background-color: #fff;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}
header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
}

main {
    padding-top: 80px;
}

.inicio{
    padding-top: 100px;

}

.router-content {
  padding-top: 300px;
}

nav{
    max-width: 100%;
    width: 100%;
    background-color: #ffffff;
    border-radius: 10px;
    width: 100%;
    height: 80px;
    display: block;
    padding: 10px 14px;
    /*box-shadow: 0 8px 25px rgb(4, 4, 4);*/
}

nav ul {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 2rem;
    margin: 0;
    padding: 0 2rem;
    list-style: none;
    margin-top: 1rem;
}

nav a {
    color: #8e4505;
    font-weight: bold;
    font-size: 1.2rem;
    text-decoration: none;
}

html {
    scroll-behavior: smooth;
}

.nav-link {
    color: #000;
    text-decoration: none;
    transition: color 0.3s ease;
}

nav a:hover {
    color: #e02a01;
    background-color: #fbf5f5;
    border: 3px solid #ff9830;
    border-radius: 30px;
    padding: 5px 10px;
    transform: translateY(-10px);
    box-shadow:0 15px 25px rgba(15, 15, 15, 0.124);
    box-sizing: border-box;
    transition:transform 0..3s ease ;
}

.carrito {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 45px;
    border-radius: 20%;
    background-color: #8e4505;
}

.carrito svg{
    stroke: #ffffff;
}


.nav-links {
  display: flex;
  gap: 1.5rem;
}

.nav-link {
  color: #cbd5e0;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: #e67e22;
  font-weight: 700;
}


.badge {
  background: #e67e22;
  color: white;
  border-radius: 50%;
  padding: 0.15rem 0.5rem;
  font-size: 0.85rem;
}

.cart-total-badge {
  color: #48bb78;
  font-size: 0.85rem;
}

</style>