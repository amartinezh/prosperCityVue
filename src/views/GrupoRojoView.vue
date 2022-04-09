<template>
<div class="GrupoRojo">
 <h1>HOLA GRUPO ROJO</h1>
 <ComponentDiana/>
 <RequisitosComp/>
 <ComponentDayana/>
 </div>
</template>

<script>
import { defineComponent } from 'vue';
import ComponentDiana from '@/components/ComponentDiana.vue';
import RequisitosComp from '@/components/RequisitosComp.vue';
import ComponentDayana from '@/components/ComponentDayana.vue';

export default defineComponent({
  name: 'GrupoRojoView',
  components: {
    ComponentDayana,
    RequisitosComp,
    ComponentDiana,
  },
});
</script>
