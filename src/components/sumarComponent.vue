<template>
    <div id="container">
      Este componente se llama sumarComponent (Componente hijo), mostrara la suma de los numeros
      <br><h2> el resultado es {{resultado}} </h2>
      <showComponent msg="La suma"></showComponent>
    </div>
</template>

<script lang="ts">

import showComponent from '@/components/showComponent.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'sumarComponent',
  props: {
    resultado: Number,
  },
  components: {
    showComponent,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
