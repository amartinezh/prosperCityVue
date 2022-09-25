<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo_p.jpg"
     style="width: 40%; margin: auto; display: block;">
    <ApiComponent/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ApiComponent from '@/components/ApiComponent.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'ApiView',
  components: {
    ApiComponent,
  },
});
</script>
