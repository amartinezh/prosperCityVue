<template>
    <div class="boton">
        <button class="contador" @click="sumar">Erisc {{ contar }}</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      contar: 0,
      suma: 0,
      resta: 0,
    };
  },
  methods: {
    sumar() {
      this.contar += 1;
      this.resta -= 1;
    },
  },
  props: {
    palabra: String,
  },
});
</script>

<style scoped>
.contador{
    height: 50px;
    width: 150px;
    border:none;
    background: rgb(164, 255, 89);
    border-radius: 25px;
    font-weight: bold;
    margin: 10px 0;
}
</style>
