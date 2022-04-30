<template>
    <div>
        <div class="azul">
        <aside class="aside">
            <ul>
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
            </ul>
        </aside>
        <section class="seccionCentral">
            <sliderComponent v-if="sebastianComp"/>
            <p v-if="estadoMostarComp">lo siento a un trabajo en mi componente</p>
            <p v-if="ocultosComp"><i>Aqui abajo pondremos el componente:</i></p>
            <BotonTarea palabra="Veces" v-if="generalComp"/>
            <p v-if="ocultosComp">
            <i>Aqui Creamos un componente Para que el interactue el usuario</i></p>
            <InputTarea v-if="generalComp"/>
            <ComponetEmmanuel v-if="emmanuelComp" />
            <comPalexis v-if="alexisComp"/>
            <ComponentDayhana v-if="dayhanaComp"/>
            <EriscComp v-if="eriscComp"/>
            <AndreComp v-if="andreaComp"/>
            <sebasCalcuComponet v-if="sebastianComp"/>

        </section>
        </div>
            <ComponentFooter />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BotonTarea from '@/components/GrupoAzulComps/BotonTarea.vue';
import InputTarea from '@/components/GrupoAzulComps/InputTarea.vue';
import ComponetEmmanuel from '@/components/GrupoAzulComps/CompontEmmanuel.vue';
import sliderComponent from '@/components/GrupoAzulComps/sliderComponent.vue';
import comPalexis from '@/components/GrupoAzulComps/comPalexis.vue';
import ComponentFooter from '@/components/GrupoAzulComps/ComponentFooter.vue';
import ComponentDayhana from '@/components/GrupoAzulComps/ComponentDayhana.vue';
import EriscComp from '@/components/GrupoAzulComps/EriscComponente.vue';
import AndreComp from '@/components/GrupoAzulComps/AndreaComponente.vue';
import sebasCalcuComponet from '@/components/GrupoAzulComps/sebasCalcuComponet.vue';

export default defineComponent({
  components: {
    BotonTarea,
    InputTarea,
    ComponetEmmanuel,
    sliderComponent,
    comPalexis,
    ComponentFooter,
    ComponentDayhana,
    EriscComp,
    AndreComp,
    sebasCalcuComponet,

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
      this.sebastianComp = true;
      this.dayhanaComp = false;
      this.emmanuelComp = true;
      this.andreaComp = false;
      this.julianaComp = false;
      this.eriscComp = false;
      this.alexisComp = true;
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
    /* display: flex; */
}
ul{
    list-style: none;
    margin: 15px auto;
    color: #2f404f;
    display: flex;
    justify-content: center;
}

ul li a{
    text-decoration: none;
    color: #2f404f;
}
li:hover{
    background-color: rgb(121, 97, 219);
    border-radius: 9px;
    padding: 9px;
    margin:5px 30px;
}
ul li a:visited{
    color: #2f404f;
}
li{
    display: flex;
    Justify-content:center;
    border-radius: 9px;
    padding: 9px;
    margin:5px 30px;
    font-size: 1.5rem;
}

.aside{
    background-color: #93c7e5;
    padding: 10px;
    color: #f0f1ee;
    height: 85%;
    display: flex;
}
.seccionCentral{
    background-color: #f0f1ee;
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
