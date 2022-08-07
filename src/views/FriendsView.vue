<template>
 <div class="new-component">
    <Friends msg= "Una Ventana a la Naturaleza y el Medio Ambiente"/>
 </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Friends from '@/components/Friends.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'FriendsView',
  components: {
    Friends,
  },
});
</script>
