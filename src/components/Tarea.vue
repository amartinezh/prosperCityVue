<template>
  <div class="hello">
    <h1>{{ titulo_tarea }}</h1>
    <h2>
      En ésta página encontrarás las indicaciones del taller práctico por
    </h2>
    <h3>Creación de un componente</h3>
    <ol>
      <li>1. Reunirse con el grupo asignado</li><br>
      <li>2. Plantear responsabilidades al interior del mismo por cada integrante</li><br>
      <li>3. El Lider deberá sacar un listado de participantes y asignar tareas</li><br>
      <li>4. clonar el repositorio de Vue: </li><br>
      <li>5. Agregar un nuevo componente </li><br>
      <li>6. Cada integrante preparará una breve explicación </li><br>
      <li>7. Exponer y grabar un video (cada integrante
         hablará con cámara) </li><br>
  </ol>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TareaComponent',
  props: {
    Msg: String,
    titulo_tarea: String,
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
