<template>
<div>
 <h1 class="prueba">Emmanuel Renteria Mena</h1>
 <br/>
  <InputTarea v-on:change="registro" />
  <br>
  <br>
<ul>
  <h1 v-for="(persona) in persona" :key="persona.id">Hola {{ persona }}</h1>
</ul>

</div>
</template>

<script>

import { defineComponent } from 'vue';
import InputTarea from '@/components/InputVue.vue';

export default defineComponent({
  components: {
    InputTarea,
  },
  props: {

  },
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
