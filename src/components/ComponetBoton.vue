<template>
<div class="input">
    <button class="boton">enviar</button>
  </div>
</template>

<script>

import { defineComponent } from 'vue';

export default defineComponent({
  emits: [],
  components: {

  },
  props: {
    numeroEnvia: {},
  },
  data() {
    return {

    };
  },
  methods: {
  },
});
</script>

<style scoped>
.boton {
    height: 50px;
    border:none;
    background-color: rgb(252, 217, 22);
    width: 120px;
    font-size: 1.1rem;
    border-radius: 25px;
}
</style>
