<template>
  <div class="hello">
    <br />
    <hr />
    <h1>{{ titulo }}</h1>
    <h1>{{ msg }}</h1>
    <br/>
    <h2>
      Componente básico para el taller en clase
    </h2>
    <p>Practicaremos un poco respecto a la creación de componentes <br />
     durante la segunda hora de clase</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ComponenteEjemploComponent',
  props: {
    msg: String,
    titulo: String,
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
