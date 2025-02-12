<script setup>

import { ref } from 'vue';

const contador = ref(0);

const incrementar = () => {
  contador.value++;
}

const decrementar = () => {
  contador.value--;
};

const visible = ref(true);

// Esta función alterna el texto del botón dependiendo de la visibilidad
const alternar = () => {
  return visible.value ? 'Ocultar' : 'Mostrar';
}

</script>

<template>
  <div class="ejemplo">
    <h1>Contador</h1>
    <div> 
          <!--Usamos la directiva v-on abreviada: @ -->

          <div v-show="visible" class="contenido"> 
    <button class="botones" @click="decrementar">-</button>
    <p class="countNumber">{{ contador }}</p>
    <!--Usamos la directiva v-on -->
    <button class = "botones" v-on:click="incrementar">+</button> 
    </div>
  </div>
  <br>
    <button class = "botones2" @click="visible = !visible">{{alternar()}}</button>
  </div>
</template>

<style scoped src="../assets/styles/contador.css"></style>


