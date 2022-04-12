<template>
    <div class="azul">
        <aside class="aside">
            <h1 class="titulo">HOLA SOMOS EL GRUPO AZUL</h1>
            <br>
            <br>
            <h4 class="titulo">Los integrantes somos:</h4>
            <ul>
                <h3>
                <li>jhon Henry</li>
                <li>Juan Felipe</li>
                <li>Sebastian</li>
                <li>Dayhana</li>
                <li>Emanuel</li>
                <li>Andrea</li>
                <li>Juliana</li>
                <li>Andy</li>
                <li><router-link to="/Azul">Erisc</router-link></li>
                </h3>
            </ul>
        </aside>
        <section class="seccionCentral">
            <p><i>Aqui abajo pondremos el componente:</i></p>
            <BotonTarea palabra="Veces" />
            <p><i>Aqui Creamos un componente Para que el interactue el usuario</i></p>
            <InputTarea />

            <sliderComponent />
        </section>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BotonTarea from '@/components/BotonTarea.vue';
import InputTarea from '@/components/InputTarea.vue';

import sliderComponent from '@/components/sliderComponent.vue';

export default defineComponent({
  components: {
    BotonTarea,
    InputTarea,
    sliderComponent,

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
    align-items: center;
    display: flex;
    Justify-content:center;
}

ul li a{
    text-decoration: none;
    color: 2f404f;
}
li:hover{
    background-color: aquamarine;
    border-radius: 9px;
    padding: 5px;
    margin:3px;
}
ul li a:visited{
    color: #2f404f;
}
li{
    Justify-content:center;
    border-radius: 9px;
    padding: 5px;
    margin:3px;
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
h1 {
    margin-top: 40px;
    color: #4856fd;
    text-align: center;
}
</style>
