<template>
    <div class="input">
        <form action="#">
         <p>{{ saluda }}</p>
        <label for="text">
    <input  class="nombre" type="text" v-on:input="saludar2" placeholder="Digite su nombre">
        <button class="send" @click.prevent="saludar">Enviar</button>
        </label>
        <p>{{ saluda }}</p>
         <p>Hola: {{ saluda1 }}</p>
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      saluda1: 'Hola',
      saluda: '',
    };
  },
  methods: {
    saludar2(e: any) {
      this.saluda = e.target.value;
    },
    saluda() {
      this.saluda1 = this.saluda;
    },
  },
});
</script>

<style scoped>
.nombre {
    height: 50px;
    width: 300px;
    text-align: center;
    border:none;
    background-color: gray;
    margin: 15px 0;
}
.nombre::placeholder{
    color:white;
    font-size: 1.1rem;
}
.send {
    height: 50px;
    border:none;
    background-color: yellow;
    width: 120px;
    font-size: 1.1rem;
}
</style>
