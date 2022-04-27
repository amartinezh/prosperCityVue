<template>
  <div class="input">
    <label for="text">
    <input  class="nombre"
      type="text"
      :placeholder="placeHolder"
      :v-model="borrar"
    >
    </label>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    placeHolder: String,
    borrar: String,
  },
  data() {
    return {
    };
  },
});
</script>

<style scoped>
.nombre {
    height: 50px;
    width: 300px;
    text-align: center;
    border:none;
    background-color: #2f404f;
    margin: 15px 0;
    border-radius: 25px;
    color:#f0f1ee
}
.nombre::placeholder{
    color:white;
    font-size: 1.1rem;
}
</style>
