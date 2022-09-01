<template>
  <div>
   <br/>
     <hr/>
     <br/>
   <p class="nombrePajaro">Ibis calvo del norte</p>
     <p class="nombreCientifico">
      Geronticus eremita
     </p>
     <br/>
     <hr/>
     <br/>
     <div class="contenedor"><img src="../assets/geronticus.jpg" alt="Ibis calvo"/></div>
     <div class="contenedor">
       <p>
        El ibis eremita o ibis calvo del norte (Geronticus eremita)
        es una especie de ave pelecaniforme de la familia
        Threskiornithidae propia de Europa, Oriente próximo y África.
        Está en peligro de extinción y solo sobrevivió en estado
        silvestre en Marruecos; y escasamente en Siria.
       </p>
       <p>
        El ibis eremita es un ave grande y plumaje negro brillante,
        que mide entre 70–80 cm de largo y tiene una envergadura
        alar de entre 125–135 cm y suele pesar entre 1,0–1,3 kg.
        Su plumaje negro presenta iridiscencias verdes, broncíneas y violáceas.
        Sobre todo, las plumas cobertoras alares superiores tienen un brillo metálico
        luminoso, rojo cobrizo. Los ibis eremitas se caracterizan por tener la
        cabeza y el sector de la garganta sin plumas, con una carúncula de color
        rojo claro, como su largo pico, que mide 11,5 - 14,7 centímetros, y está
        ligeramente curvado hacia abajo, y también sus largas patas son rojas.
       </p>
     </div>
  <br/><br/>
  <hr/>
  <br/>
   </div>
 </template>
<script lang="ts">
</script>
<style scoped>
   .nombrePajaro {
     color: black;
     font-weight:bold;
     font-size: 2vw;
   }
   .nombreCientifico{
     text-align: center;
     color:rgb(0, 0, 0);
     font-size: 1vw;
     font-style: italic;
   }
   img{
     width: 300px;
   }
   .contenedor{
     text-align: center;
     display:inline-block;
     width: 25%;
     vertical-align: top;
   }
</style>
