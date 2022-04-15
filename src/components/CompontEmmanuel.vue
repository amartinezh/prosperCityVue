<template>
<div>
 <h1 class="prueba">Emmanuel Renteria Mena</h1>
 <br/>
  <label for="text">
    <input  class="nombre"
        type="text"
        v-on:change="registro"
        placeholder="Digite su nombre"
        v-model="peronsaInp"
    >
  </label>
<ul>
  <h1 v-for="(persona) in persona" :key="persona.id">Hola {{ persona }}</h1>
</ul>

</div>
</template>

<script>

import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      peronsaInp: '',
      apodo: '',
      persona: [
        'Reyk Mrm',
      ],
    };
  },
  methods: {
    registro(e) {
      this.apodo = e.target.value;
      console.log(this.persona);
      this.persona.push(this.apodo);
      this.peronsaInp = '';
    },
  },
});
</script>

<style scoped>
.prueba {
  margin:0px;
}
</style>
