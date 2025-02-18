<script setup>
import { ref, computed } from 'vue'
 


const kg = ref(1) // Valor inicial en kilogramos

const lb = computed({
  get: () => kg.value * 2.20462, // Convierte kg a lb
  set: (valor) => {
    kg.value = valor / 2.20462 // Convierte lb a kg cuando se cambia lb
  }
})
</script>

<template>
    <div>
      <h2>Conversor Kilogramos-Libras</h2>
    <label>Kilogramos:</label><br>
    <input v-model="kg" type="number"  step="0.1">
<br>
    <label>Libras:</label><br>
    <input v-model="lb" type="number"  step="0.1">
  </div>
<br>
 
</template>

<style scoped>
h2{
    font-size: 2rem;
    font-family: "Roboto Condensed";
}

label {
  font-size: 1.2rem;
  font-family: "Roboto Condensed";
}

input {
    font-size: 2rem;
    
}
</style>