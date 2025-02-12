<script setup>

import { ref } from 'vue';


//array reactivo para almacenar los cuadraditos

const cuadraditos = ref([]);


const agregarCuadros = () => {
 
  cuadraditos.value.push(""); //añadir nuevo cuadrado al array

}

</script>

<template>
  <div class="ejemplo">
    <h2>Agregar</h2>
  <br>
    
   <div class="content">  
     
    <button class="botones" @click="agregarCuadros">+</button>
  
    <div class="cajaDeCuadrados">
    <div v-for = "(cuadradito,index) in cuadraditos" :key="index" class="cuadradito">
      {{ cuadradito }}</div>
    </div>
  </div>
  </div>
  <br>
    
  
</template>

<style scoped src="../assets/styles/agregar.css">

</style>
