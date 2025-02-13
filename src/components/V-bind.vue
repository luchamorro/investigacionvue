<script setup>
import { ref } from 'vue';

const urlRandom = ref("https://www.urlrandom.com"); // Enlace reactivo

const cambiarEstado = () => {
  // cambio de URL aleatoria
  const urls = [
	"https://www.urlrandom.com",
	"https://www.example.com",
	"https://www.test.com"
  ];
  urlRandom.value = urls[Math.floor(Math.random() * urls.length)];
};
</script>

<template>
  <button @click="cambiarEstado">Cambiar Enlace</button>
  <a v-bind:href="urlRandom">Enlace aleatorio</a>
  <a :href="urlRandom">Enlace aleatorio</a>

</template>

