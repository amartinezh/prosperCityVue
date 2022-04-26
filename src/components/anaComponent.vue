<template>
<div>
  <h2>Contenido</h2>
  <nav>
    <ul>
      <li>Qué es Prospercity</li>
      <li>Fundadores</li>
      <li>Preguntas frecuentes</li>
      <li>Participantes</li>
    </ul>
  </nav>
  <section class="section">
    <h1>Qué es Prospercity</h1>
    <p class="msn">"Soñamos con democratizar el acceso a la educación y prosperidad en
      Latinoamérica".</p>
    <p class="parrafo">
      Prospercity es un bootcamp para estudiar desarrollo de software durante 6 meses,
      para jovenes de 17 a 34 años de todo el país de bajos recursos, donde obtendran el
      certificado del curso de Frontend Developer, (Frontend es la parte de un sitio web
      que interactúa con los usuarios, por eso decimos que está del lado del cliente
      Los desarrolladores frontend son aquellos que crean los componentes visuales de un
      sitio web. Dan formato a las imágenes, la animación y la interactividad de un sitio
      web (Fuente: Platzi.com). </p>
      <p>Al terminar el programa, podrán
      participar en los procesos de selección de empresas que buscan talento tech, con
      las competencias adquiridas.
      Al graduarte del programa te ganas el 100% de la beca, es decir que los recursos
      son condonados. En Prospercity solo pagas si no terminas la ruta.
      Prospercity busca solucionar los problemas del dificil acceso a la educación,
      el costo de la educación y el déficit de talento.</p>
      <p>Inscribete en <u>www.app.prospercity.co</u></p>
  </section>
</div>
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'anaComponent',
});
</script>

<style scoped>
 h2 {
   color: rgb(8, 178, 221);
   display: flex;
   justify-content: left;
   margin-left: 55px;
   margin-top:40px;
 }
 nav {
   background: white;
   display: flex;
   justify-content: left;
   text-align: left;
   margin-left: 30px;
   font-size: 20px;
   line-height: 38px;
 };
 ul li:hover {
   color: rgb(8, 178, 221) ;
 }
 .section h1 {
   color: rgb(8, 178, 221);
   font-size: 30px;
   margin-bottom: 5px;
   margin-top: 150px;
   text-align: center;
 }
 .section{
   margin-top: 100px;
   position: absolute;
   left: 400px;
   bottom:150px;
   width: 800px;
   height: 500px;
 }
 .msn{
   color:rgb(62, 109, 131);
   font-size: 15px;
   text-align: center;
 }
 .parrafo{
   text-align: left;
   margin-top:20px;
   margin-bottom: 15px;
   font-size: 19px;
 }
 p {
   text-align: left;
   margin-bottom: 15px;
   font-size:19px;
 }

</style>
