<template>
<div>
 <h1 class="prueba">Emmanuel Renteria Mena</h1>
 <br/>
  <InputTarea @change="nombre" :place-holder="nombrePro" v-model="borrar"/>
  <InputTarea v-on:change="aprellido" :place-holder="apellidoPro"/>
  <ComponetBoton @click="registro"/>
  <br>
  <br>
<ul>
  <h1 v-for="(persona) in persona" :key="persona.id">Hola {{ persona.nombre }}
  {{ persona.apellido }}</h1>
</ul>

</div>
</template>

<script>

import { defineComponent } from 'vue';
import InputTarea from '@/components/InputVue.vue';
import ComponetBoton from '@/components/ComponetBoton.vue';

export default defineComponent({
  components: {
    InputTarea,
    ComponetBoton,
  },
  props: {

  },
  data() {
    return {
      buscar: [],
      resultado1: '',
      resultado: '',
      nombrePro: 'digite su nombre',
      apellidoPro: 'digite su apellido',
      apodo: '',
      persona: [
        {
          nombre: 'Reyk',
          apellido: 'Mrm',
        },
      ],
    };
  },
  methods: {
    filtarPersonas() {
      this.buscar = this.persona.filter((elem) => elem.nombre === 'reyk');
      this.filter = this.buscar;
      console.log(this.buscar);
    },
    nombre(g) {
      this.resultado1 = g.target.value;
    },
    aprellido(g) {
      this.resultado = g.target.value;
    },
    registro(e) {
      if (this.resultado !== '' && this.resultado1 !== '') {
        this.persona.push({
          nombre: this.resultado1,
          apellido: this.resultado,
        });
        this.borrar = '';
      } else {
        alert('Por favor llene todos los campos');
      }
    },
  },
});
</script>
