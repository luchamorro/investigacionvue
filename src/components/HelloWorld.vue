<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="greetings">
    <h1 class="titleColor">{{ msg }}</h1>
    <h3>
        Puesta en práctica del material teórico.
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.3rem;
  position: relative;
  top: -10px;
  font-family: Tektur, serif;
  font-size: 3rem;
  line-height: 2.8rem;
  font-weight: 600;
}

h3 {
  font-size: 1.2rem;
}


.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
