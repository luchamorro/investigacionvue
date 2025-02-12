<script setup>

import { ref, onMounted } from 'vue';

const printData = ref ([]);


//para cargar los users:

const fetchData = async () => {
  try{
    const response = await fetch ("https://randomuser.me/api/?results=1");
    const data = await response.json();
    printData.value = data.results;
  } catch (error){
    console.error("Error al cargar los usuarios", error);
  }
};


</script>

<template>
  <div class="example">
    <h2>Imprimir desde JSON</h2>
  <br>
  <button class="buttons" @click="fetchData">RNDM</button>

<!--<img :src="{{ user.picture.medium }}" :alt= "{{ user.name.first }} {{ user.name.last }}">-->

  
<ul v-if="printData.length > 0">
  <li v-for="(user, index) in printData" :key="index">
    <img :src= "user.picture.large" :alt="user.name.first" width="260rem"> {{ user.name.first }} {{ user.name.last }} 
    
  </li>
</ul>

   <div class="content">  
     
   
  </div>
  </div>
  <br>
    
  
</template>

<style scoped>

li{
  list-style: none;
  margin: 1rem;
  display: flex;
  flex-direction: column;
}


</style>
