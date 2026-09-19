<script setup lang="ts">
import cupon1 from '@/assets/imagenes/cupon1.jpeg';
import cupon2 from '@/assets/imagenes/cupon2.jpeg';
import cupon3 from '@/assets/imagenes/cupon3.jpeg';
import cupon4 from '@/assets/imagenes/cupon4.jpeg';
import cupon5 from '@/assets/imagenes/cupon5.jpeg';
import cupon6 from '@/assets/imagenes/cupon6.jpeg';
import cupon7 from '@/assets/imagenes/cupon7.jpeg';
import cupon8 from '@/assets/imagenes/cupon8.jpeg';
import cupon9 from '@/assets/imagenes/cupon9.jpeg';
import cupon10 from '@/assets/imagenes/cupon10.jpeg';
import cupon11 from '@/assets/imagenes/cupon11.jpeg';

const cupones=[{
    idCupon: 1,
    titulo: '2x1 Whopper',
    imagen: cupon1
},
{
    idCupon: 2,
    titulo: '50% de descuento',
    imagen: cupon2
},
{
    idCupon: 3,
    titulo: 'Papas grandes',
    imagen: cupon3
},
{
    idCupon: 4,
    titulo: 'Combo personal',
    imagen: cupon4
},
{
    idCupon: 5,
    titulo: 'Combo familiar',
    imagen: cupon5
},
{
    idCupon: 6,
    titulo: 'Refresco grande',
    imagen: cupon6
},
{
    idCupon: 7,
    titulo: 'Menú infantil',
    imagen: cupon7
},
{
    idCupon: 8,
    titulo: 'Aros de cebolla',
    imagen: cupon8
},
{
    idCupon: 9,
    titulo: '2 Whoppers',
    imagen: cupon9
},
{
    idCupon: 10,
    titulo: 'Nuggets de pollo',
    imagen: cupon10
},
{
    idCupon: 11,
    titulo: 'Postre o sundae',
    imagen: cupon11
}
]

    function obtenerCupones() {
  return cupones
}
</script>

<template>
<div class="cupones-grid">
    <div class="publicacion" v-for="cup in obtenerCupones()" :key="cup.idCupon">
        <div class="imagen">
            <img :src="cup.imagen" :alt="cup.titulo">
        </div>
        <div class="titulo">
            <p>{{ cup.titulo }}</p>
        </div>
    </div>
</div>
</template>

<style scoped>
.cupones-grid {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 16px;
    width: 100%;
    padding: 24px;
    box-sizing: border-box;
}

.publicacion {
    overflow: hidden;
    background: #fff;
    border: 1px solid #ead8c7;
    border-radius: 10px;
    box-shadow: 0 5px 14px rgba(91, 48, 18, 0.12);
}

.imagen {
    width: 100%;
    aspect-ratio: 4 / 3;
    background: #f5eee7;
}

.imagen img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.titulo {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 54px;
    padding: 8px 10px;
    color: #492301;
    background: #fffaf5;
    text-align: center;
    font-family: sans-serif;
    font-weight: bold;
}

.titulo p {
    margin: 0;
}

@media (max-width: 1000px) {
    .cupones-grid {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
}

@media (max-width: 600px) {
    .cupones-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        padding: 16px;
    }
}

</style>