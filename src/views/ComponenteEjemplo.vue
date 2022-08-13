<template>
  <div class="home">
    <h1>Aqui encontrarás la lista de todos los integrantes de los equipos</h1>
    <ComponenteEjemploComponent titulo="Titulo del componente" msg="Bienvenido"/>
    <ComponenteEjemploComponent titulo="Otro Component" msg="Bienvenido"/>
    <ComponenteEjemploComponent titulo="El equipo de los MAS" msg="Bienvenido"/>
    <BitFlow titulo="BitFlow" msg="Integrantes de nuestro maravilloso equipo"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ComponenteEjemploComponent from '@/components/Componente_ejemplo.vue'; // @ is an alias to /src
import BitFlow from '@/components/BitFlow.vue';

export default defineComponent({
  name: 'ComponenteView',
  components: {
    ComponenteEjemploComponent,
    BitFlow,
  },
});
</script>
