<template>
    <div class="azul">
        <aside class="aside">
            <h1 class="titulo">HOLA SOMOS EL GRUPO AZUL</h1>
            <h4 class="titulo">Los integrantes somos:</h4>
            <ul>
                <li>Emanuel</li>
                <li>Dayhana</li>
                <li>Sebastian</li>
                <li>Juan Felipe</li>
                <li>Andy</li>
                <li>jhon Henry</li>
                <li>Andrea</li>
                <li>Juliana</li>
                <li><router-link to="/Azul">Erisc</router-link></li>
            </ul>
        </aside>
        <section class="seccionCentral">
            <p><i>Aqui abajo pondremos el componente:</i></p>
            <BotonTarea palabra="Veces" />
            <p><i>Aqui Creamos un componente Para que el interactue el usuario</i></p>
            <InputTarea />
        </section>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BotonTarea from '@/components/BotonTarea.vue';
import InputTarea from '@/components/InputTarea.vue';

export default defineComponent({
  components: {
    BotonTarea,
    InputTarea,
  },
});
</script>

<style scoped>
.titulo{
    color: #2f404f;
}
.azul{
    margin: 0px 0;
    display: flex;
}
ul{
    list-style: none;
    margin: 15px 0;
    color: #2f404f;
}

ul li a{
    text-decoration: none;
    color: 2f404f;
}
ul li a:visited{
    color: #2f404f;
}

.aside{
 background-color: #C7dad3;
 height: 90vh;
 padding: 10px;
 color: #f0f1ee;
}
.seccionCentral{
    background-color: #f0f1ee;
    width: 80vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>
