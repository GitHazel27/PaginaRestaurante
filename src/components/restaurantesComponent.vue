<script setup lang="ts">
import restaurante from '@/assets/imagenes/restaurante.jpeg'
</script>

<template>
<section class="restaurantes-content">
	<div class="ubicaciones">
		<a href="https://maps.app.goo.gl/Z2KmtYtHDsp7mkwV7" target="_blank" rel="noopener noreferrer">
			Altabrisa FS
		</a>
		<a href="https://maps.app.goo.gl/9PKUcL2xxskbWyx78" target="_blank" rel="noopener noreferrer">
			Macroplaza
		</a>
        <a href="https://maps.app.goo.gl/jk3WdkqNXm3gDrTeA" target="_blank" rel="noopener noreferrer">
			Prol. Paseo Montejo
		</a>
        <a href="https://maps.app.goo.gl/R2ueEjXfVq6Rzopp8" target="_blank" rel="noopener noreferrer">
			Sucursal Oriente
		</a>
        <a href="https://maps.app.goo.gl/R2ueEjXfVq6Rzopp8" target="_blank" rel="noopener noreferrer">
			Francisco de Montejo
		</a>
        <a href="https://maps.app.goo.gl/9c9AfCFzkQ6D4VZ48" target="_blank" rel="noopener noreferrer">
			Santa Fe Caucel
		</a>
	</div>
	<div class="restaurante-imagen">
		<img :src="restaurante" alt="Interior del restaurante" />
	</div>
</section>
</template>

<style scoped>
.restaurantes-content {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 32px;
	align-items: center;
	max-width: 1100px;
	margin: -20px auto;
	padding: 40px 24px;
}

.ubicaciones {
	display: grid;
	gap: 16px;
	justify-items: start;
}

.ubicaciones a {
	width: 100%;
	box-sizing: border-box;
	padding: 14px 18px;
	color: #492301;
	background: #fff4e8;
	border: 1px solid #ead8c7;
	border-radius: 8px;
	font-family: sans-serif;
	font-weight: bold;
	text-decoration: none;
	transition: background-color 0.2s ease, transform 0.2s ease;
}

.ubicaciones a:hover {
	background: #ffdfbd;
	transform: translateX(4px);
}

.restaurante-imagen {
	overflow: hidden;
	border-radius: 12px;
}

.restaurante-imagen img {
	display: block;
	width: 100%;
	aspect-ratio: 4 / 3;
	object-fit: cover;
}

@media (max-width: 700px) {
	.restaurantes-content {
		grid-template-columns: 1fr;
		padding: 28px 16px;
	}
}
</style>