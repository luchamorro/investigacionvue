<script setup>

import { ref } from 'vue';

const counter = ref(0);

const increase = () => {
  counter.value++;
}

const decrease = () => {
  counter.value--;
};

const visible = ref(true);

// Esta función alterna el texto del botón dependiendo de la visibilidad
const alternate = () => {
  return visible.value ? 'Ocultar' : 'Mostrar';
}

</script>

<template>
  <div class="example">
    <h1>Contador</h1>
    <div> 
          <!--Usamos la directiva v-on abreviada: @ -->

          <div v-show="visible" class="content"> 
    <button class="buttons" @click="decrease">-</button>
    <p class="countNumber">{{ counter }}</p>
    <!--Usamos la directiva v-on -->
    <button class = "buttons" v-on:click="increase">+</button> 
    </div>
  </div>
  <br>
    <button class = "buttons2" @click="visible = !visible">{{alternate()}}</button>
  </div>
</template>

<style scoped src="../assets/styles/counter.css"></style>


