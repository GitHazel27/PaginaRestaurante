<script setup lang="ts">
defineProps<{
    animateButton: boolean;
}>();
</script>

<template>
<div class="inicio-content">
    <img
        src="https://www.marthadebayle.com/wp-content/uploads/2023/05/mejores-hamburguesas-de-mexico.jpg"
        alt="Hamburguesa del restaurante"
    />
    <div class="inicio-overlay" aria-hidden="true"></div>
    <div class="inicio-copy">
        <p class="inicio-eyebrow">Sabor hecho al momento</p>
        <h1>Tu próxima hamburguesa favorita</h1>
        <a
            href="#nuestro-menu"
            class="inicio-button"
            :class="{ 'inicio-button--slide-up': animateButton }"
        >
            Ver menú
        </a>
    </div>
</div>
</template>

<style scoped>
.inicio-content {
    position: relative;
    width: 100vw;
    margin-left: calc(50% - 50vw);
    box-sizing: border-box;
    height: 700px;
    overflow: hidden;
}

.inicio-content img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.inicio-overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.45);
}

.inicio-copy {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 14px;
    padding: 24px;
    color: #fff;
    text-align: center;
}

.inicio-eyebrow,
.inicio-copy h1 {
    margin: 0;
}

.inicio-eyebrow {
    font-family: sans-serif;
    font-size: 1rem;
    font-weight: bold;
    letter-spacing: 0.08em;
    text-transform: uppercase;
}

.inicio-copy h1 {
    max-width: 720px;
    font-family: sans-serif;
    font-size: clamp(2rem, 5vw, 4.5rem);
    line-height: 1.05;
}

.inicio-button {
    padding: 12px 24px;
    color: #492301;
    background: #ff9830;
    border-radius: 50px;
    font-family: sans-serif;
    font-weight: bold;
    text-decoration: none;
    transition: background-color 0.2s ease, transform 0.2s ease;
}

.inicio-button--slide-up {
    animation: slide-up 0.7s ease-out both;
}

@keyframes slide-up {
    from {
        opacity: 0;
        transform: translateY(70px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.inicio-button:hover {
    background: #ffc078;
    transform: translateY(-2px);
}

@media (max-width: 700px) {
    .inicio-content {
        height: 480px;
    }
}
</style>