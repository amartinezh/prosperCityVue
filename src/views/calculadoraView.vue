<template>
  <div class="home">
    <LinkTreeRojo/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LinkTreeRojo from '@/components/LinkTreeRojo.vue';

export default defineComponent({
  name: 'calculadoraView',
  components: {
    LinkTreeRojo,
  },
});
</script>
