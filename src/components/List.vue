<script setup>
import { RouterLink, RouterView } from 'vue-router'


import { ref, computed } from 'vue';

const nombres = ref(["botella", "botas", "Bicicleta", "boligrafo", "Bufanda"]);
const searchTerm = ref("");
const selectedItem = ref(null);

const filteredNombres = computed(() => {
  if (!searchTerm.value) return [];  // hide the list        
  return nombres.value.filter(nombre =>
    nombre.toLowerCase().includes(searchTerm.value.toLowerCase())
  );
});
// for selected the item
const selectItem = (item) => {
  selectedItem.value = item;
  searchTerm.value = ""; // Clear input after selection
};
// for remove  the selected item and return to search box
const clearSelection = () => {
  selectedItem.value = null;
};



</script>

<template>

<!-- for list -->
<div>
<input v-if="!selectedItem" v-model="searchTerm" placeholder="Search for an item" />
<!-- lista filtrada -->
<ul v-if="searchTerm && !selectedItem">
<li v-for="(nombre, index) in filteredNombres" :key="index" @click="selectItem(nombre)">
  {{ index + 1 }} - {{ nombre }}
</li>
</ul>
<!-- mostrar el elemento seleccionado -->
<div v-if="selectedItem">
<p>Selected: {{ selectedItem }}</p>
<button @click="clearSelection">Remove</button>
</div>
</div>

<!-- <RouterView /> -->
</template>

<style scoped src="../assets/styles/list.css"></style>


