<script setup>

import { ref } from 'vue';
import { useCounter } from '../composables/useCounter';

// carga del contador composable
const { contador, sumar, reiniciar } = useCounter(0);

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
    <br>
    <div class="composable">
      <h2>Contador Composable</h2>
      <button class="buttons" @click="sumar">{{ contador }}</button>
      <button class="buttons" @click="reiniciar">Reset</button>
    </div>
  </div>



</template>

<style scoped src="../assets/styles/counter.css"></style>


