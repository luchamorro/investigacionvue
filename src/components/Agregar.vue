<script setup>

import { ref } from 'vue';


//array reactivo para almacenar los cuadraditos

const littleSquares = ref([]);


const addSquares = () => {
 
  littleSquares.value.push(""); //añadir nuevo cuadrado al array

}

</script>

<template>
  <div class="example">
    <h2>Agregar</h2>
  <br>
    
   <div class="content">  
     
    <button class="buttons" @click="addSquares">+</button>
  
    <div class="squaresBox">
    <div v-for = "(littleSquare,index) in littleSquares" :key="index" class="littleSquare">
      {{ littleSquare }}</div>
    </div>
  </div>
  </div>
  <br>
    
  
</template>

<style scoped src="../assets/styles/add_squares.css">

</style>
