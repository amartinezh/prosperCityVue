<template>
<div class="new-component">
    <h1>{{ msg }}</h1>
    <hr>
    <ul>
     <li>
     <h2><img src="../assets/paisaje.jpeg" width="500" height="50" alt="Imagen de paisaje">
     <figcaption>El medio ambiente es nuestra responsabilidad</figcaption></h2>
     <h3>¿Que es el medio ambiente?</h3>
      <p>El medio ambiente es un sistema formado por elementos naturales y artificiales que
      están interrelacionados y que son modificados por la acción humana.
      El medio ambiente es el espacio en el que se desarrolla la vida de
      los distintos organismos favoreciendo su interacción. En él se encuentran
      tanto seres vivos como elementos sin vida y otros creados por la mano del hombre.
      Todos los organismos obtienen del medio ambiente todos los elementos que necesitan
      para vivir: desde el aire y el agua, hasta el refugio y el alimento que les permite
      crecer, desarrollarse y obtener energía. Mantener el equilibrio del medio ambiente es
      fundamental para mantener la vida en la tierra tal como la conocemos.

      Además, los seres humanos utilizan una gran cantidad de recursos naturales del medio
      para cubrir sus necesidades como vestimenta, alimento y objetos de uso cotidiano entre
      otros ejemplos. Por eso el ser humano debe conocer y cuidar sus interacciones con el
      medio ambiente para gestionar de manera sostenible los recursos naturales que permiten
      su crecimiento económico y su desarrollo.

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

figcaption {
  font-size: 15px;
  text-align: left;
}
hr {
  height: 2px;
  background-color: gray;
}
h1 {
    font-size: 23px;
    font-weight: bold;
    text-shadow: 7px 4px 5px rgb(209, 208, 208);
    margin: 40px;
    font-size-adjust: calc(0.9);
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: black;

}
h3 {
  font-size: 27px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: black;
  font-weight: bold ;
  text-align: left;
  padding: 20px;
  margin: 10px;
}
p {
    text-align: justify;
    vertical-align: text-top;
    padding: 10px;
    margin: 10px;
    font-size: large;
    font-style: normal;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}
p ::first-letter{
  font-size: 100%;
}
h2 {
    box-shadow: 7px 4px 5px gray;
    padding: 10px;
    margin: 20px;
    float: left;
}
</style>
