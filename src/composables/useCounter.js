import { ref } from 'vue';

// 1. Crear función (siempre con prefijo 'use')
  export function useCounter(valorInicial = 0) {
  const contador = ref(valorInicial);

// 3. Funciones que modifican el estado
  const sumar = () => contador.value++;
  const reiniciar = () => contador.value = valorInicial;

// 4. Devolver lo que necesitemos
  return { contador, sumar, reiniciar };
}