<template>
    <aside class="aside">
        aside
    </aside>
    <previewComponent/>
</template>

<script lang="ts">

import previewComponent from '@/components/previewComponent.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LinkTreeRojo',
  components: {
    previewComponent,
  },
});
</script>
<style>

</style>
