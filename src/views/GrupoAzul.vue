<template>
    <div class="azul">
        <aside class="aside">
            <h1 class="titulo">HOLA SOMOS EL GRUPO AZUL</h1>
            <br>
            <br>
            <h4 class="titulo">Los integrantes somos:</h4>
            <ul>
                <h3>
                <li> <a href="https://app.prospercity.co/my_page/jhon-henry-casta%C3%B1o-garcia-1639435108074x182614376804253700" target="_blank" @click="jhonHenryBtn"> Jhon Henry </a> </li>
                <li> <a href="https://app.prospercity.co/my_page/juan-felipe-torralba-montes-1635381822695x369685632296157200"  target="_blank" @click="juanBtn"> Juan Felipe </a> </li>
                <li> <a href="https://app.prospercity.co/my_page/sebasti%C3%A1n-l%C3%B3pez-giraldo-1629840136778x374323184539271200" target="_blank" @click="sebastianBtn"> Sebastian </a> </li>
                <li> <a href="https://app.prospercity.co/my_page/dayhana-molina-1635977339924x995599151822274600" target="_blank" @click="dayhanaBtn"> Dayhana </a> </li>
                <li> <a href="#" @click="emanuelBtn"> Emmanuel </a> </li>
                <li> <a href="https://app.prospercity.co/my_page/andrea-mejia-duque-1639260780639x666226227907133400" target="_blank" @click="andreaBtn"> Andrea </a> </li>
                <li> <a href="https://app.prospercity.co/my_page/juliana-londo%C3%B1o-murillo-1633029259110x232525092271685630" target="_blank" @click="julianaBtn"> Juliana </a> </li>
                <li> <a href="https://app.prospercity.co/my_page/erisc-1633536586989x405105810804834300" target="_blank" @click="eriscBtn"> Erisc </a> </li>
                <li> <a href="https://app.prospercity.co/my_page/yonier-alexis-quiceno-rodr%C3%ADguez-1635700765552x825459024826466300" target="_blank" @click="alexisBtn"> Alexis </a></li>
                </h3>
            </ul>
        </aside>
        <br>
        <br>
        <section class="seccionCentral">
            <p v-if="general">lo siento a un trabajo en mi componente</p>
            <p v-if="estadoMostar"><i>Aqui abajo pondremos el componente:</i></p>
            <BotonTarea palabra="Veces" v-if="estadoMostar"/>
            <p v-if="estadoMostar">
            <i>Aqui Creamos un componente Para que el interactue el usuario</i></p>
            <InputTarea v-if="estadoMostar"/>
            <ComponetEmmanuel v-if="emmanuel"
            />
             <sliderComponent v-if="general"/>
             <comPalexis v-if="general"/>
        </section>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BotonTarea from '@/components/BotonTarea.vue';
import InputTarea from '@/components/InputTarea.vue';
import ComponetEmmanuel from '@/components/CompontEmmanuel.vue';
import sliderComponent from '@/components/sliderComponent.vue';
import comPalexis from '@/components/comPalexis.vue';

export default defineComponent({
  components: {
    BotonTarea,
    InputTarea,
    ComponetEmmanuel,
    sliderComponent,
    comPalexis,
  },

  data() {
    return {
      estadoMostar: true,
      emmanuel: false,
      general: false,
    };
  },
  methods: {
    emanuelBtn() {
      this.estadoMostar = false;
      this.emmanuel = true;
      this.general = false;
    },
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
    color: #2f404f;
}
li:hover{
    background-color: rgb(121, 97, 219);
    border-radius: 9px;
    padding: 5px;
    margin:3px;
    -moz-border-radius: 70%;
    -webkit-border-radius: 700%;
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
    margin-top: 4px;
    color: #4856fd;
    text-align: center;
}
</style>
