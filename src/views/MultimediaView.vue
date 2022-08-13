<template>
  <div class="home">
    <multimedia titulo_tarea="Titulo de la tarea" msg="Comida"/>
    <videos/>
    <fotos/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import multimediaFotos from '@/components/MultimediaFotos.vue'; // @ is an alias to /src
import multimediaVideos from '@/components/MultimediaVideo.vue';

export default defineComponent({
  name: 'MultimediaView',
  components: {
    fotos: multimediaFotos,
    videos: multimediaVideos,

  },
});

</script>
