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
import multimediaVideos from '@/components/ComponentesMultimedia/MultimediaVideo.vue';
import multimediaFotos from '@/components/ComponentesMultimedia/MultimediaFotos.vue';
import multimediaComentario from '@/components/ComponentesMultimedia/MultimediaComentario.vue';
import multimediaFooter from '@/components/ComponentesMultimedia/MultimediaFooter.vue';

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
