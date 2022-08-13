<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      ¿Quieres recibir una beca y convertirte en Programador en 6 meses?
      <a href="https://www.prospercity.co/" target="_blank" rel="noopener">Prospercity</a> es tu respuesta.
    </p>
    <h3>¿Cuánto dura el programa?</h3>
    <ul>
      <li>El programa tiene una duración de 6 meses.</li>
    </ul>
    <h3>¿Debo tener conocimientos de programación?</h3>
    <ul>
      <li>No es un requisito para el curso, pero es ideal que conozcas la informática</li>
    </ul>
    <h3>¿Tengo que pagar algo?</h3>
    <ul>
      <li>Al graduarte del programa te ganas el 100%</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
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
