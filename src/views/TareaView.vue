<template>
  <div class="home">
    <TareaComponent titulo_tarea="Titulo de la tarea" msg="Comida"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TareaComponent from '@/components/Tarea.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'TareaView',
  components: {
    TareaComponent,
  },
});
</script>
