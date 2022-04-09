<template>
    <div class="azul">
        <h1>HOLA SOMOS EL GRUPO AZUL</h1>
        <h4>Los integrantes somos:</h4>
        <ul>
            <li>Emanuel</li>
            <li>Dayhana</li>
            <li>Sebastian</li>
            <li>Juan Felipe</li>
            <li>Andy</li>
            <li>jhon Henry</li>
            <li>Andrea</li>
            <li>Juliana</li>
            <li>Erisc</li>
        </ul>
        <p><i>Aqui abajo pondremos el componente:</i></p>
        <BotonTarea palabra="Veces" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BotonTarea from '@/components/BotonTarea.vue';

export default defineComponent({
  components: {
    BotonTarea,
  },
});
</script>

<style scoped>
.azul{
    margin: 10px auto;
}
ul{
    margin: 15px 0;
}
</style>
