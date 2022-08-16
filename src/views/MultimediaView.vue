<template>
  <div class="home">
    <multimedia titulo_tarea="Titulo de la tarea" msg="Comida"/>
    <videos/>
    <fotos/>
    <comentario/>
    <pieDePagina/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import multimediaVideos from '@/components/MultimediaVideo.vue';
import multimediaFotos from '@/components/MultimediaFotos.vue';
import multimediaComentario from '@/components/MultimediaComentario.vue';
import multimediaFooter from '@/components/MultimediaFooter.vue';

export default defineComponent({
  name: 'MultimediaView',
  components: {
    videos: multimediaVideos,
    fotos: multimediaFotos,
    comentario: multimediaComentario,
    pieDePagina: multimediaFooter,
  },
});

</script>
