<script setup lang="ts">
</script>

<template>
<footer class="site-footer">
	<div class="footer-content">
		<div class="footer-brand">
			<h2>Restaurante</h2>
			<p>Sabor hecho al momento, para compartirlo contigo.</p>
		</div>

		<nav class="footer-links" aria-label="Enlaces del pie de página">
			<a href="#inicio">Inicio</a>
			<a href="#nuestro-menu">Menú</a>
			<a href="#cupones">Cupones</a>
			<a href="#restaurantes">Restaurantes</a>
		</nav>

		<div class="footer-contact">
			<h3>Contáctanos</h3>
			<a href="tel:+529999999999">+52 999 999 9999</a>
			<a href="mailto:hola@restaurante.com">hola@restaurante.com</a>
		</div>
	</div>
	<div class="footer-bottom">
		<small>© 2026 Restaurante. Todos los derechos reservados.</small>
	</div>
</footer>
</template>

<style scoped>
.site-footer {
	padding: 48px 24px 20px;
	color: #fff;
	background: #2f1807;
	font-family: sans-serif;
}

.footer-content {
	display: grid;
	grid-template-columns: 1.5fr 1fr 1fr;
	gap: 40px;
	max-width: 1100px;
	margin: 0 auto;
}

.footer-brand h2,
.footer-contact h3,
.footer-brand p {
	margin: 0;
}

.footer-brand h2 {
	color: #ff9830;
}

.footer-brand p {
	max-width: 260px;
	margin-top: 10px;
	color: #ead8c7;
	line-height: 1.5;
}

.footer-links,
.footer-contact {
	display: grid;
	align-content: start;
	gap: 12px;
}

.footer-links a,
.footer-contact a {
	color: #fff4e8;
	text-decoration: none;
}

.footer-links a:hover,
.footer-contact a:hover {
	color: #ff9830;
}

.footer-contact h3 {
	color: #ff9830;
}

.footer-bottom {
	max-width: 1100px;
	margin: 36px auto 0;
	padding-top: 16px;
	color: #c9ad95;
	border-top: 1px solid rgba(255, 244, 232, 0.2);
	text-align: center;
}

@media (max-width: 700px) {
	.footer-content {
		grid-template-columns: 1fr;
		gap: 28px;
	}
}
</style>