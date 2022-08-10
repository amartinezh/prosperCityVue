<template>
  <div class="home">
    <ComponenteEjemploComponent titulo="Titulo del componente" msg="Bienvenido"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ComponenteEjemploComponent from '@/components/Componente_ejemplo.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'ComponenteView',
  components: {
    ComponenteEjemploComponent,
  },
});
</script>
