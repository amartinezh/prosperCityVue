<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo_p.jpg"
     style="width: 40%; margin: auto; display: block;">
    <HelloWorld msg="Bienvenidos a una gran experiencia"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    HelloWorld,
  },
});
</script>
