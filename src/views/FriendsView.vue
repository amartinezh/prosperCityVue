<template>
 <div class="new-component">
    <Friends msg= "Una ventana a la naturaleza y el medio ambiente"/>
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
