<template>
    <div class="json-viewer">
      <h1>Lista de películas favoritas</h1>
      <div class="grid-container">
        <article v-for="(pelicula, index) in jsonData" :key="index" class="pelicula">
          <h2>{{ pelicula.titulo }}</h2>
          <img :src="getImageSrc(pelicula.titulo)" :alt="pelicula.titulo" />
          <h3>{{ pelicula.año }}</h3>
          <h4>{{ pelicula.genero }}</h4>
        </article>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        jsonData: [
          { "titulo": "Pesadilla antes de navidad", "año": 1993, "genero": "musical, animacion" },
          { "titulo": "El Mago de Oz", "año": 1939, "genero": "fantasia, musical" },
          { "titulo": "Halloween", "año": 1978, "genero": "Slasher, Terror" },
          { "titulo": "La Novia Cadaver", "año": 2005, "genero": "musical, animacion" },
          { "titulo": "Mi Vecino Totoro", "año": 1988, "genero": "Animacion, Fantasia" },
          { "titulo": "El Viaje de Chihiro", "año": 2001, "genero": "Animacion, Aventura" }
        ]
      };
    },
    methods: {
      getImageSrc(titulo) {
        const images = {
          "Pesadilla antes de navidad": "/img/pan.jpg",
          "El Mago de Oz": "/img/mof.jpg",
          "Halloween": "/img/h.jpg",
          "La Novia Cadaver": "/img/nc.jpg",
          "Mi Vecino Totoro": "/img/totoro.jpg",
          "El Viaje de Chihiro": "/img/evdh.jpg"
        };
        return images[titulo] || "/img/default.jpg"; // Ruta por defecto si no se encuentra la imagen
      }
    },
    mounted() {
      console.log("Componente montado. Lista de películas cargada.");
    }
  };
  </script>
  
  <style scoped>
    /* Tarjeta de película */
  .grid-container {
    width: 100%;
    max-height: 30vh;
    overflow: auto;
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    padding: 0.5rem;
    background: rgb(255, 254, 254);
    border-bottom: 1px solid rgb(124, 253, 4);
    border-radius: 20px;
    box-shadow: 2px 2px 5px rgb(91, 146, 3);
   flex-direction: column;
    padding-left: 2rem;
    padding-bottom: 2rem;
    padding-top: 1rem;
   

  }
  
  /* Imagen de la película */
  .grid-container .pelicula img {
    min-width: 30%;
    max-width: 70%;
    height: auto;
    padding-top: 1rem;
    border-radius: 2rem;
  }
  
  /* Contenido de la película */
  .grid-container div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  
    
  }
  
  /* Título */
  .grid-container h2 {
    font-size: 1.1rem;
    font-weight: bold;
    color: black;
    margin: 0;
    text-align: center;
  }
  
  /* Año */
  .grid-container h3 {
    display: flex;
    align-items: center;
    font-size: 20px;
    color: rgb(109, 172, 8);
    margin: 5px 0;
  }
  
  /* Género */
  .grid-container h4 {
    font-size: 14px;
    color: rgb(73, 116, 5);
    margin: 0;
  }
  </style>
  