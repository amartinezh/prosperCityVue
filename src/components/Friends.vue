<template>
<div class="new-component">
    <h1>{{ msg }}</h1>
    <ul>
     <li>
     <h2><img src="../assets/paisaje.jpeg" width="500" height="50" alt="Imagen de paisaje"></h2>
      <p>El medio ambiente es un sistema formado por elementos naturales y artificiales que
      están interrelacionados y que son modificados por la acción humana.
      El medio ambiente es el espacio en el que se desarrolla la vida de
      los distintos organismos favoreciendo su interacción. En él se encuentran
      tanto seres vivos como elementos sin vida y otros creados por la mano del hombre.
      </p>
     </li>
    </ul>
</div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FriendsVue',
  props: {
    msg: String,
  },
});
</script>

<style scoped>

h1 {
    font-weight: bold;
    text-shadow: 7px 4px 5px gray;
    margin: 40px;
    font-size-adjust: calc(0.9);
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: black;

}
p {
    text-align: justify;
    vertical-align: text-top;
    padding: 30px;
    margin: 60px;
    font-size: large;
    font-style: normal;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}
h2 {
    box-shadow: 7px 4px 5px gray;
    padding: 10px;
    margin: 20px;
    border: groove black;
    float: left;
}
</style>
