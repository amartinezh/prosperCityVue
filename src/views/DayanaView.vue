<template>
  <div class="dayana">
    <h1>Hola!!</h1>
    <img alt="Emoji programacion" src="../assets/emoji.png" style="width: 250px" />
    <ComponentDayana/>
  </div>
</template>

<script lang="ts">
import ComponentDayana from '@/components/ComponentDayana.vue';

export default ({
  name: 'DayanaView',
  components: {
    ComponentDayana,
  },
});
</script>
