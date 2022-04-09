<template>
 <div class="ComponentDiana">
  <h1>Fundadores de Prospercity</h1>
  <h2>Oscar Giraldo y Steven Muñoz</h2>
  <img src="../assets/Prospercity.jpg" alt="Prospercity">
  <h2>Sueñan con democratizar el acceso a la educación y prosperidad en Latinoamérica.</h2>
 </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ComponentDiana',
});
</script>

<style>
h1 {
 color: #4856fd;
 text-align: center;
}
img{
 margin: 0px auto;
 width: 300px;
 height: 300px;
}
</style>
