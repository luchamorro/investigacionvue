<script setup>
import { ref } from 'vue';
import { useFormulario } from '../composables/useFormulario.js';

// Destructuración de lo que devuelve el composable
const { formulario, enviar } = useFormulario();
// Hacemos reactivo la variable mensaje
const mensaje = ref('');
// Manejamos el envío 
const handleSubmit = () => {
  enviar((msg) => {
    mensaje.value = msg;
  });
};
</script>

<template>
  <div class="formulario">
    <h2>Formulario de contacto Composable</h2>
    <form @submit.prevent="handleSubmit">
      <input type="text" v-model="formulario.nombre" placeholder="Nombre">
      <input type="email" v-model="formulario.email" placeholder="Email">
      <button type="submit">Enviar</button>
    </form>
    <p v-if="mensaje">{{ mensaje }}</p>
  </div>
</template>

<style scoped>
.formulario {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #41b883;
  padding: 2rem;
}

.formulario h2{
  font-size: 2rem;
  font-family: Homenaje, sans-serif;
  border-bottom: 1px solid #35495e;
  margin: 1rem 0;
}

input {
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 1.2rem;
  padding: 0.8rem;
  margin: 1rem;
  width: calc(100% - 2rem);
}

button{
  display: block;
  width: calc(100% - 2rem);
  font-size: 1.3rem;
  padding: 0.7rem;
  margin: 0 auto;
  background: #41b883;
  color: #eafcdb;
}

button:hover {
  background: #adeed1;
  color: #35495e;
}

p{
  background: #eafcdb;
  color: #41b883;
  margin: 1rem;
  padding: 1rem;
  font-size: 1.2em;
  border: 1px solid #41b883;
}


</style>