import { reactive } from 'vue';

export function useFormulario() {
  // Objeto reactivo
  const formulario = reactive({
    nombre: '',
    email: '',
  });
  // Función para enviar datos
  const enviar = (enviado) => {
    const mensaje = `Enviando: ${JSON.stringify(formulario)}`;
    enviado(mensaje);
  };

  return { formulario, enviar }; // <- Exportamos todo
}