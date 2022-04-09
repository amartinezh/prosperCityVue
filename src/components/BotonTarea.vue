<template>
    <div class="boton">
        <button class="contador" @click="contar++">Erisc {{ contar }}</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      contar: 0,
    };
  },
  props: {
    palabra: String,
  },
});
</script>

<style scoped>
.contador{
    height: 50px;
    width: 120px;
    border:none;
    background: rgb(55, 136, 68);
    border-radius: 25px;
}
</style>
