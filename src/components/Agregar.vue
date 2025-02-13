<script setup>

import { ref } from 'vue';
//array reactivo para almacenar los cuadraditos
const littleSquares = ref([]);

const addSquares = () => {

  //Clases disponibles
  const classes = ["littleSquare", "littleSquare2", "littleSquare3", "littleSquare4", "littleSquare5", "littleSquare6" ];
  //Seleccionar una clase aleatoria
  const randomClass = classes[Math.floor(Math.random()*classes.length)];
 
  littleSquares.value.push({class: randomClass}); //añadir nuevo cuadrado al array

};

</script>

<template>
  <div class="example">
    <h2>Agregar</h2>
  <br>
    
   <div class="content">  
     
    <button class="buttons" @click="addSquares" >+</button>
  
  
    <div class="squaresBox">
    <div v-for = "(square,index) in littleSquares" :key="index" :class="square.class">
      </div>
    </div>
  </div>
  </div>
  <br>
</template>

<style scoped src="../assets/styles/add_squares.css">

</style>
