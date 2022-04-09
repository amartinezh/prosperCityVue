<template>
<div class="GrupoRojo">
 <anaComponent/>
 <ComponentDiana/>
 <RequisitosComp/>
 <ComponentDayana/>
 </div>
</template>

<script>
import { defineComponent } from 'vue';
import anaComponent from '@/components/anaComponent.vue';
import ComponentDiana from '@/components/ComponentDiana.vue';
import RequisitosComp from '@/components/RequisitosComp.vue';
import ComponentDayana from '@/components/ComponentDayana.vue';

export default defineComponent({
  name: 'GrupoRojoView',
  components: {
    anaComponent,
    ComponentDiana,
    RequisitosComp,
    ComponentDayana,
  },
});
</script>
