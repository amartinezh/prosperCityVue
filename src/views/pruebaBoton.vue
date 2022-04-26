<template>
    <form action="#">
        <label for="text">
        <input  class="nombre"
            type="text"
            @keyup="saludar2"
            placeholder="Digite su nombre"
        >
        </label>
         <p class="respuesta">{{ hola }} {{ saluda1 }}</p>
        </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      hola: '',
      saluda1: '',
      saluda2: '',
    };
  },
  methods: {
    saludar2(e: any) {
      this.saluda1 = e.target.value;
    },
  },
});
</script>

<style scoped>
button{
  background-color:brown;
}
</style>
