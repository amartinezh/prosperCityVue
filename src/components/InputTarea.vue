<template>
    <div class="input">
        <form action="#">
        <label for="text">
    <input type="text" class="nombre" @input="saluda" name="text" placeholder="Digite su nombre">
        <button class="send" @click.prevent="saludar">Enviar</button>
        </label>
        <p>{{ saluda }}</p>
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      saluda: 'Hola',
    };
  },
  methods: {
    saludar() {
      alert('hola');
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
