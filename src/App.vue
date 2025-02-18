<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logoguay.png" width="300" height="300" />

    <div class="wrapper">
      <HelloWorld msg="Investigación Vue" />
     

      <nav>

        <RouterLink to="/contador">Contador</RouterLink>
        <RouterLink to="/agregar">Agregar cuadrados</RouterLink>
        <RouterLink to="/lista">Lista</RouterLink>
        <RouterLink to="/imprimir">Imprimir</RouterLink>
        <RouterLink to="/conversor">Conversor</RouterLink>
        <RouterLink to="/peliculas">Películas</RouterLink>
       
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>



header {
  line-height: 1.5;
  max-height: 120vh;
}

.logo {
  display: flex;
  margin: 0 auto 2rem;
}


nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  font-family: Homenaje,serif;
  font-size: 1.8rem;
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
    
    
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
  }
}
</style>
