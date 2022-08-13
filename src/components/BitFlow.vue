<template>
  <div class="hello">
    <br />
    <hr />
    <h1>{{ titulo }}</h1>
    <h1>{{ msg }}</h1>
    <br/>
    <h2>
      <p style="font-size:30px">&#128540;</p>
    </h2>
    <p>Ayda Montoya Henao<br/>
     Jose Luis Giraldo Morales <br/>
     Viviana Galvis <br/>
     Kendy Correa Torralba <br/>
     Valentina Quiroga <br/>
     Anyi Hernandez <br/>
     Juan David Ramirez <br/>
     Yeny Constanza <br/>
     </p>
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
