<script setup lang="ts">
import { ref, computed, provide } from 'vue';
import { useRoute } from 'vue-router';
import type { Burger, Snack, Postre } from './constants/menu';
import cuponesComponent from './components/cuponesComponent.vue';
import RestaurantesComponent from './components/restaurantesComponent.vue';

type MenuItem = Burger | Snack | Postre;

const route = useRoute();

const routerViewColor = computed(() => {
  if (route.path === '/hamburguesas') return 'router-view-content--burgers';
  if (route.path === '/postres') return 'router-view-content--desserts';
  if (route.path === '/snacks') return 'router-view-content--snacks';
  return '';
});

const cart = ref<{ dish: MenuItem; quantity: number }[]>([]);

const totalItemsCount = computed(() => {
  return cart.value.reduce((acc, item) => acc + item.quantity, 0);
});

const totalCartPrice = computed(() => {
  return cart.value.reduce((acc, item) => {
    return acc + Number.parseFloat(item.dish.price.replace('$', '')) * item.quantity;
  }, 0);
});

function updateCart(dish: MenuItem, change: number) {
  const existingItem = cart.value.find((item) => item.dish.id === dish.id);

  if (!existingItem && change > 0) {
    cart.value.push({ dish, quantity: change });
  } else if (existingItem) {
    existingItem.quantity += change;
    if (existingItem.quantity <= 0) {
      cart.value = cart.value.filter((item) => item.dish.id !== dish.id);
    }
  }
}

provide('updateCart', updateCart);
provide('cart', cart);
</script>

<template>
<div>
      <header>
        <nav>
           <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#nuestro-menu">Menú</a></li>
            <li><a href="#cupones">Cupones</a></li>
            <li><a href="#restaurantes">Restaurantes</a></li>
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
  <h1>HOLAA</h1>
</section>
<section id="menu" class="menu">
  <div id="nuestro-menu" class="nuestro-menu">
      <h2>Nuestro menú</h2>
  </div>
  <div class="router-content">
    <div class="menu-panel">
      <div class="menu-tabs" role="tablist" aria-label="Categorías del menú">
        <RouterLink to="/hamburguesas" class="menu-tab menu-tab--burgers">Hamburguesas</RouterLink>
        <RouterLink to="/snacks" class="menu-tab menu-tab--snacks">Snacks</RouterLink>
        <RouterLink to="/postres" class="menu-tab menu-tab--desserts">Postres</RouterLink>
        
      </div>
      <div class="router-view-content" :class="routerViewColor">
        <RouterView></RouterView>
      </div>
    </div>
  </div>
</section>
<section id="seccion-cupones"class="seccion-cupones">
  <div id="cupones" class="cupones-title">
    <h2>Cupones</h2>
  </div>
  <h3>Consulta todos los cupones disponibles</h3>
  <cuponesComponent></cuponesComponent>
</section>
<section id="seccion-restaurantes"class="seccion-restaurantes">
  <div id="restaurantes" class="restaurantes">
    <h2>Restaurantes</h2>
  </div>
  <div class="restaurantes-heading">
    <svg width="30px" height="30px" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true"><path stroke="#8e4505" stroke-width="12" d="M96 22a51.88 51.88 0 0 0-36.77 15.303A52.368 52.368 0 0 0 44 74.246c0 16.596 4.296 28.669 20.811 48.898a163.733 163.733 0 0 1 20.053 28.38C90.852 163.721 90.146 172 96 172c5.854 0 5.148-8.279 11.136-20.476a163.723 163.723 0 0 1 20.053-28.38C143.704 102.915 148 90.841 148 74.246a52.37 52.37 0 0 0-15.23-36.943A51.88 51.88 0 0 0 96 22Z"/><circle cx="96" cy="74" r="20" stroke="#8e4505" stroke-width="12"/></svg>
    <h3>Encuentra tu restaurante más cercano</h3>
  </div>
  <RestaurantesComponent></RestaurantesComponent>
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

.seccion-cupones{
  padding-bottom: 50px;
}

.seccion-restaurantes{
  padding-bottom: 50px;
}

.menu {
  text-align: center;
  padding-top: 100px;
  padding-bottom: 50px;
}

.router-content {
  padding: 0 24px;
}

.restaurantes{
      scroll-margin-top: 100px;
  width: 100vw;
  margin-left: calc(50% - 50vw);
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
  font-size: 50px;
  background-color: #492301;
  color:#ffffff;
  height: 100px;
}

.cupones-title{
    scroll-margin-top: 100px;
  width: 100vw;
  margin-left: calc(50% - 50vw);
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
  font-size: 50px;
  background-color: #492301;
  color:#ffffff;
  height: 100px;
}

.nuestro-menu{
  scroll-margin-top: 100px;
  width: 100vw;
  margin-left: calc(50% - 50vw);
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
  font-size: 50px;
  background-color: #492301;
  color:#ffffff;
  height: 100px;
}

.seccion-restaurantes h3 {
  margin: 0;
  padding: 14px 22px;
  color: #8e4505;
  font-weight: bold;
  font-family: sans-serif;
  font-size: 20px;
  text-decoration: none;
  text-align: center;
}

.restaurantes-heading {
  padding: 14px 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
}

.seccion-cupones h3{
    padding: 14px 22px;
  color: #8e4505;
  font-weight: bold;
  font-family: sans-serif;
  font-size: 20px;
  text-decoration: none;
  text-align: center;
}

.menu-tabs {
  display: flex;
  justify-content: center;
  gap: 8px;
  padding: 0 20px;
  margin-top: 40px;
}

.menu-tab {
  padding: 14px 22px;
  color: #8e4505;
  font-weight: bold;
  font-family: sans-serif;
  font-size: 20px;
  text-decoration: none;
  border-bottom: 3px solid transparent;
  transition: color 0.2s ease, background-color 0.2s ease, border-color 0.2s ease;
}

.menu-tab--burgers:hover,
.menu-tab--burgers.router-link-active {
  color: #8e4505;
  background: #ff973051;
  border-bottom-color: #ff973051;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

.menu-tab--desserts:hover,
.menu-tab--desserts.router-link-active {
  color: #8e4505;
  background: #e02a0154;
  border-bottom-color: #e02a0154;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

.menu-tab--snacks:hover,
.menu-tab--snacks.router-link-active {
  color: #8e4505;
  background: #0082c361;
  border-bottom-color: #0082c361;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  
}

.router-view-content {
  width: 100%;
  max-width: 100%;
  height: auto;
  box-sizing: border-box;
  padding: 24px;
}

.router-view-content--burgers {
  background: #ff973051;
  border-radius: 16px;
}

.router-view-content--desserts {
  background: #e02a0154;
  border-radius: 16px;
}

.router-view-content--snacks {
  background: #0082c361;
  border-radius: 16px;
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


header nav a:hover {
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

@media (max-width: 700px) {
  .menu-tabs {
    justify-content: flex-start;
    overflow-x: auto;
  }

  .menu-tab {
    flex: 0 0 auto;
    padding: 12px 16px;
  }

  .router-content {
    padding: 0 16px;
  }

  .router-view-content {
    padding: 16px;
  }
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