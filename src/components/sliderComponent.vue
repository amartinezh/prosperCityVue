<template>
<p>{{emergente}}</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      emergente: 'esto es un slider',
    };
  },
});
</script>

<style>
p {
    text-align: center;
    color: brown;
}

</style>
