<template>
    <div class="azul">
        <aside class="aside">
            <h1 class="titulo">HOLA SOMOS EL GRUPO AZUL</h1>
            <br>
            <br>
            <h4 class="titulo">Los integrantes somos:</h4>
            <ul>
                <h3>
                <li> <a href="#" @click="grupoazul"> Grupo Azul </a> </li>
                <li> <a href="#" @click="jhonHenryBtn"> Jhon Henry </a> </li>
                <li> <a href="#" @click="juanBtn"> Juan Felipe </a> </li>
                <li> <a href="#" @click="sebastianBtn"> Sebastian </a> </li>
                <li> <a href="#" @click="dayhanaBtn"> Dayhana </a> </li>
                <li> <a href="#" @click="emanuelBtn"> Emanuel </a> </li>
                <li> <a href="#" @click="andreaBtn"> Andrea </a> </li>
                <li> <a href="#" @click="julianaBtn"> Juliana </a> </li>
                <li> <a href="#" @click="andyBtn"> Andy </a> </li>
                <li> <a href="#" @click="eriscBtn"> Erisc </a> </li>
                <li> <a href="#" @click="alexisBtn"> Alexis </a></li>
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
            <ComponetEmmanuel v-if="emmanuel"/>
             <sliderComponent />
             <comPalexis />
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
    grupoazul() {
      this.estadoMostar = true;
      this.emmanuel = false;
      this.general = false;
    },
    jhonHenryBtn() {
      this.general = true;
      this.estadoMostar = false;
      this.emmanuel = false;
    },
    emanuelBtn() {
      this.emmanuel = true;
      this.estadoMostar = false;
      this.general = false;
    },
    juanBtn() {
      this.general = true;
      this.estadoMostar = false;
      this.emmanuel = false;
    },
    eriscBtn() {
      this.general = true;
      this.estadoMostar = false;
      this.emmanuel = false;
    },
    andreaBtn() {
      this.general = true;
      this.estadoMostar = false;
      this.emmanuel = false;
    },
    julianaBtn() {
      this.general = true;
      this.estadoMostar = false;
      this.emmanuel = false;
    },
    dayhanaBtn() {
      this.general = true;
      this.estadoMostar = false;
      this.emmanuel = false;
    },
    sebastianBtn() {
      this.general = true;
      this.estadoMostar = false;
      this.emmanuel = false;
    },
    andyBtn() {
      this.general = true;
      this.estadoMostar = false;
      this.emmanuel = false;
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
    color: 2f404f;
}
li:hover{
    background-color: aquamarine;
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
