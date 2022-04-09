<template>
  <div class="home">
    Vista dedicada a mostar un componente
    <sumarComponent/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import sumarComponent from '@/components/sumarComponent.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'TareaView',
  components: {
    sumarComponent,
  },
});
</script>
