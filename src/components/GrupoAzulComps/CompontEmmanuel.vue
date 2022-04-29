<template>
<div>
 <h1 class="prueba">Emmanuel Renteria Mena</h1>
 <InputTarea v-on:input="methBuscar" :place-holder="placeBuscarPer"/>
 <br/>
  <InputTarea @change="nombre" :place-holder="nombrePro"/>
  <InputTarea v-on:change="aprellido" :place-holder="apellidoPro"/>
  <ComponetBoton @click="registro"/>
  <br>
  <br>
<ul>
  <h5 v-if="mostarPersona">
  <h1 v-for="(persona) in persona" :key="persona.id">{{ persona.nombre }}
  {{ persona.apellido }}</h1> </h5>
  <h5 v-if="mostarBusqueda">
  <h1 v-for="(buscar) in buscar" :key="buscar.id">{{ buscar.nombre }}
  {{ buscar.apellido }}</h1> </h5>
</ul>

</div>
</template>

<script>

import { defineComponent } from 'vue';
import InputTarea from '@/components/GrupoAzulComps/InputVue.vue';
import ComponetBoton from './ComponetBoton.vue';

export default defineComponent({
  components: {
    InputTarea,
    ComponetBoton,
  },
  props: {

  },
  data() {
    return {
      mayus: '',
      mostarPersona: true,
      mostarBusqueda: false,
      buscar: [],
      inpBuscar: '',
      resultado1: '',
      resultado: '',
      nombrePro: 'digite su nombre',
      apellidoPro: 'digite su apellido',
      placeBuscarPer: 'Buscar persona',
      BuscarPer: '',
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
    filtarPersonas(persona) {
      this.mayus = persona;
      this.mayus.toUpperCase(persona);
      this.buscar = this.persona.filter((elem) => elem.nombre.includes(persona));
      console.log(this.mayus);
    },
    methBuscar(e) {
      this.BuscarPer = e.target.value;
      if (this.BuscarPer !== '') {
        this.mostarPersona = false;
        this.mostarBusqueda = true;
        this.filtarPersonas(this.BuscarPer);
      } else if (this.buscar === '') {
        console.log('no se ha encontrado ...');
      } else {
        this.mostarPersona = true;
        this.mostarBusqueda = false;
      }
    },
    nombre(g) {
      this.resultado1 = g.target.value;
    },
    aprellido(g) {
      this.resultado = g.target.value;
    },
    registro(e) {
      this.mostarPersona = true;
      this.mostarBusqueda = false;
      this.filtarPersonas(this.BuscarPer);
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
