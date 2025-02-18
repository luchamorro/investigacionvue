<script setup>

import { ref } from 'vue';

//array reactivo para almacenar  los cuadrados
const littleSquares = ref([]);

const addSquares = () => {

  //Clases disponibles
  const classes = ["littleSquare", "littleSquare2", "littleSquare3", "littleSquare4", "littleSquare5", "littleSquare6" ];
  //Seleccionar una clase aleatoria
  const randomClass = classes[Math.floor(Math.random()*classes.length)];
  littleSquares.value.push({nameClass: randomClass}); //añadir nuevo cuadrado al array
};

</script>

<template>
  <div class="example">
    <h2>Agregar</h2>
  <br>
  <div class="content">  
  <!-- Ejemplo de @click -->
  <button class="buttons" @click="addSquares" >+</button>
    <div class="squaresBox">
      <!-- Ejemplo de v-for y v-bind -->
    <div v-for = "(square,index) in littleSquares" :key="index" :class="square.nameClass">
      </div>
    </div>
  </div>
  </div>
  <br>
</template>

<style scoped src="../assets/styles/add_squares.css">

</style>
