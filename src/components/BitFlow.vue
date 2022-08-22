<template>
  <div class="container">
    <hr />
    <br>
    <!-- etiquetas que contiene los props
    los cuales se van a mandar como parametros en la vista -->
    <h1>{{ titulo }}</h1>
    <h1>{{ msg }}</h1>
    <!-- se agrego el emoquiton -->
    <img src="https://i.pinimg.com/originals/4a/2c/da/4a2cdaff7d9b6bc6bcf82a6d1a5b9f44.gif" class="gif" alt="gif">
    <br>
    <!-- se realizo un ciclo for el cual va a iterar toda la lista
    mostrando el  nombre y copiando la url del github -->
    <div class="item" v-for="integrante in integrantes" :key = "integrante">
      <p>{{integrante.nombre}}</p>
      <a :href=integrante.github target="_blank">
        <img
          class="git-logo"
          src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          alt="gitlogo"
        />
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ComponenteEjemploComponent',
  // creamos la lista de objetos la cual va a contener los nombres y el github
  data() {
    return {
      integrantes: [{
        nombre: 'Ayda Montoya Henao', github: 'https://github.com/AydaMontoya',
      },
      {
        nombre: 'Jose Luis Giraldo Morales', github: 'https://github.com/Jose8991',
      },
      {
        nombre: 'Viviana Galvis', github: 'https://github.com/Viviana-Galvis',
      },
      {
        nombre: 'Anyi Hernandez', github: 'https://github.com/AnyiHernandez',
      },
      {
        nombre: 'Kendy Correa Torralba', github: 'https://github.com/kendycorrea',
      },
      {
        nombre: 'Juan David Ramirez', github: 'https://github.com/JuanDrj',
      },
      {
        nombre: 'Valentina Quiroga', github: 'https://github.com/lauravpq08',
      },
      {
        nombre: 'Yenny Constanza Botero', github: 'https://github.com/konny-botmar',
      }],
    };
  },
  // los props se usan para enviarle el parametro a traves de la vista
  props: {
    msg: String,
    titulo: String,
  },
});
</script>

<style>
.gif {
  width: 65px;
  height: 65px;
}
.container {
  margin: auto;
  justify-content: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.git-logo {
  width: 20px;
  margin-left: 4px;
}

.item {
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>
