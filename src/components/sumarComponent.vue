<template>
    <div id="container">
      Este componente se llama sumarComponent
        <showComponent msg="Este texto es enviado"></showComponent>
    </div>
</template>

<script lang="ts">

import showComponent from '@/components/showComponent.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'sumarComponent',
  props: {
    msg: String,
  },
  components: {
    showComponent,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
