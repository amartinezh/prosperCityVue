<template>
    <div class="input">
        <form action="#">
        <label for="text">
        <input  class="nombre"
            type="text"
            v-on:input="saludar2"
            placeholder="Digite su nombre"
        >
        <button class="send" @click.prevent="saludar">Enviar</button>
        </label>
         <p class="respuesta">{{ saluda1 }}</p>
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      saluda1: 'Aqui aparecerá tu nombre',
      saluda: '',
    };
  },
  methods: {
    saludar2(e: any) {
      this.saluda = e.target.value;
    },
    saludar() {
      if (this.saluda !== '') {
        this.saluda1 = this.saluda;
      } else {
        this.saluda1 = 'No has escrito nada aún';
      }
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
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
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
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
}
.respuesta{
  color: rgb(121, 121, 121);
  font-style: italic;
  font-size: 0.8rem;
}
</style>
