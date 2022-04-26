<template>
  <div class="rqs">
    <h2>Requisitos FAQs</h2>
    <h3>¿Debo tener conocimientos de programación?</h3>
    <ul>
      <li>
        No, pero es ideal que tengas conocimientos básicos sobre conceptos generales.
      </li>
    </ul>
    <h3>¿Tengo que pagar algo?</h3>
    <ul>
      <li>
        Al graduarte del programa te ganas el 100% de la beca, solo pagas si no terminas la ruta.
      </li>
    </ul>
    <h3>¿Necesito tener un nivel de inglés específico?</h3>
    <ul>
      <li>
        No, pero te damos acceso a la academia de inglés de platzi para formarte.
      </li>
    </ul>
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RequisitosComp',
});

</script>

<style scoped>

h2 {
  margin: 12px auto;
}

ul {
  list-style-type: none;
  margin: 10px;
}

</style>
