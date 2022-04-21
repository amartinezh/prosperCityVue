<template>
  <div class="home">
    Vista dedicada a mostar un componente
    <sumarComponent/>
    <LinkTreeRojo/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LinkTreeRojo from '@/components/LinkTreeRojo.vue';
import sumarComponent from '@/components/sumarComponent.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'calculadoraView',
  components: {
    sumarComponent,
    LinkTreeRojo,
  },
});
</script>
