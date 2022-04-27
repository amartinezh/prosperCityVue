<template>
  <div class='home'>
    Vista dedicada a mostar un componente (vista padre)
    <br><input v-model='num1' placeholder='edíteme' />
    <br><input v-model='num2' placeholder='edíteme' />
    <p>{{ num1 }} + {{ num2 }}</p>
    <button @click="operacion()">Sumar</button>
    <sumarComponent :resultado="resultado"></sumarComponent>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import sumarComponent from '@/components/sumarComponent.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'calculadoraView',
  data() {
    return {
      num1: '0',
      num2: '0',
      resultado: 0,
    };
  },
  components: {
    sumarComponent,
  },
  methods: {
    operacion() {
      this.resultado = parseInt(this.num1, 10) + parseInt(this.num2, 10);
    },
  },
});
</script>
