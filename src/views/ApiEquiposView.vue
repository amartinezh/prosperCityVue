<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo_p.jpg"
     style="width: 40%; margin: auto; display: block;">
    <ApiEquiposComponent/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ApiEquiposComponent from '@/components/ApiEquiposComponent.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'ApiEquiposView',
  components: {
    ApiEquiposComponent,
  },
});
</script>
