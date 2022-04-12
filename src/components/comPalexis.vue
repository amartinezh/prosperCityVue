<template>
    <div>
        <h1>{{name}}</h1>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      name: 'Aqui aparecera Bootstrap',
    };
  },
});
</script>
<style lang="stylus" scoped>

</style>
