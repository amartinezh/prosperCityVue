<template>
    <div>
        <div class="azul">
        <aside class="aside">
            <h2 class="titulo">HOLA SOMOS EL GRUPO AZUL</h2>
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
                <li> <a href="#" @click="emmanuelBtn"> Emmanuel </a> </li>
                <li> <a href="#" @click="andreaBtn"> Andrea </a> </li>
                <li> <a href="#" @click="julianaBtn"> Juliana </a> </li>
                <li> <a href="#" @click="eriscBtn"> Erisc </a> </li>
                <li> <a href="#" @click="alexisBtn"> Alexis </a></li>
                </h3>
            </ul>
        </aside>
        <section class="seccionCentral">
            <sliderComponent v-if="generalComp"/>
            <p v-if="estadoMostarComp">lo siento a un trabajo en mi componente</p>
            <p v-if="ocultosComp"><i>Aqui abajo pondremos el componente:</i></p>
            <BotonTarea palabra="Veces" v-if="generalComp"/>
            <p v-if="ocultosComp">
            <i>Aqui Creamos un componente Para que el interactue el usuario</i></p>
            <InputTarea v-if="estadoMostar"/>
            <ComponetEmmanuel v-if="emmanuel" />
            <sliderComponent v-if="general"/>
            <comPalexis v-if="general"/>
        </section>
        </div>
            <ComponentFooter />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BotonTarea from '@/components/BotonTarea.vue';
import InputTarea from '@/components/InputTarea.vue';
import ComponetEmmanuel from '@/components/CompontEmmanuel.vue';
import sliderComponent from '@/components/sliderComponent.vue';
import comPalexis from '@/components/comPalexis.vue';
import ComponentFooter from '@/components/ComponentFooter.vue';

export default defineComponent({
  components: {
    BotonTarea,
    InputTarea,
    ComponetEmmanuel,
    sliderComponent,
    comPalexis,
    ComponentFooter,
  },

  data() {
    return {
      ocultosComp: false,
      estadoMostrarComp: false,
      generalComp: true,
      grupoAzulComp: false,
      jhonHenryComp: false,
      juanComp: false,
      sebastianComp: false,
      dayhanaComp: false,
      emmanuelComp: false,
      andreaComp: false,
      julianaComp: false,
      eriscComp: false,
      alexisComp: false,
      footerComp: true,
    };
  },
  methods: {
    emmanuelBtn() {
      this.generalComp = false;
      this.jhonHenryComp = false;
      this.juanComp = false;
      this.sebastianComp = false;
      this.dayhanaComp = false;
      this.emmanuelComp = true;
      this.andreaComp = false;
      this.julianaComp = false;
      this.eriscComp = false;
      this.alexisComp = false;
      this.footerComp = false;
    },
    grupoazul() {
      this.generalComp = true;
      this.jhonHenryComp = false;
      this.juanComp = false;
      this.sebastianComp = false;
      this.dayhanaComp = false;
      this.emmanuelComp = false;
      this.andreaComp = false;
      this.julianaComp = false;
      this.eriscComp = false;
      this.alexisComp = false;
      this.footerComp = true;
    },
    jhonHenryBtn() {
      this.generalComp = false;
      this.jhonHenryComp = true;
      this.juanComp = false;
      this.sebastianComp = false;
      this.dayhanaComp = false;
      this.emmanuelComp = false;
      this.andreaComp = false;
      this.julianaComp = false;
      this.eriscComp = false;
      this.alexisComp = false;
      this.footerComp = false;
    },
    juanBtn() {
      this.generalComp = false;
      this.jhonHenryComp = false;
      this.juanComp = true;
      this.sebastianComp = false;
      this.dayhanaComp = false;
      this.emmanuelComp = false;
      this.andreaComp = false;
      this.julianaComp = false;
      this.eriscComp = false;
      this.alexisComp = false;
      this.footerComp = false;
    },
    sebastianBtn() {
      this.generalComp = false;
      this.jhonHenryComp = false;
      this.juanComp = false;
      this.sebastianComp = true;
      this.dayhanaComp = false;
      this.emmanuelComp = false;
      this.andreaComp = false;
      this.julianaComp = false;
      this.eriscComp = false;
      this.alexisComp = false;
      this.footerComp = false;
    },
    dayhanaBtn() {
      this.generalComp = false;
      this.jhonHenryComp = false;
      this.juanComp = false;
      this.sebastianComp = false;
      this.dayhanaComp = true;
      this.emmanuelComp = false;
      this.andreaComp = false;
      this.julianaComp = false;
      this.eriscComp = false;
      this.alexisComp = false;
      this.footerComp = false;
    },
    andreaBtn() {
      this.generalComp = false;
      this.jhonHenryComp = false;
      this.juanComp = false;
      this.sebastianComp = false;
      this.dayhanaComp = false;
      this.emmanuelComp = false;
      this.andreaComp = true;
      this.julianaComp = false;
      this.eriscComp = false;
      this.alexisComp = false;
      this.footerComp = false;
    },
    julianaBtn() {
      this.generalComp = false;
      this.jhonHenryComp = false;
      this.juanComp = false;
      this.sebastianComp = false;
      this.dayhanaComp = false;
      this.emmanuelComp = false;
      this.andreaComp = false;
      this.julianaComp = true;
      this.eriscComp = false;
      this.alexisComp = false;
      this.footerComp = false;
    },
    eriscBtn() {
      this.generalComp = false;
      this.jhonHenryComp = false;
      this.juanComp = false;
      this.sebastianComp = false;
      this.dayhanaComp = false;
      this.emmanuelComp = false;
      this.andreaComp = false;
      this.julianaComp = false;
      this.eriscComp = true;
      this.alexisComp = false;
      this.footerComp = false;
    },
    alexisBtn() {
      this.generalComp = false;
      this.jhonHenryComp = false;
      this.juanComp = false;
      this.sebastianComp = false;
      this.dayhanaComp = false;
      this.emmanuelComp = false;
      this.andreaComp = false;
      this.julianaComp = false;
      this.eriscComp = false;
      this.alexisComp = true;
      this.footerComp = false;
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
    padding: 4px;
    margin:3px;
}

.aside{
    background-color: #93c7e5;
    padding: 10px;
    color: #f0f1ee;
    width: 25vw;
    height: 85vh;
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
