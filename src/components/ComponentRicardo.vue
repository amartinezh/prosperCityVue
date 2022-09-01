<template>
 <div>
  <br/>
    <hr/>
    <br/>
  <p class="nombrePajaro">Afrechero</p>
    <p class="nombreCientifico">
      Zonotrichia capensis
    </p>
    <br/>
    <hr/>
    <br/>
    <div class="contenedor"><img src="../assets/afrechero.jpg" alt="Afrechero"/></div>
    <div class="contenedor">
      <p>
        El afrechero o copetón es una especie de ave
        paseriforme neotropical de la familia Emberizidae.
        Es la única de esta distribución entre los mal llamados
        "gorriones americanos" del género Zonotrichia.
      </p>
      <p>
        Es similar a la especie alóctona del gorrión doméstico (Passer domesticus),
        distinguiéndose por poseer un copete con rayas negras y una figura menos rotunda.
      </p>
      <p>
        Mide entre 13 y 15 cm de largo, pesa entre 20 y 25 g.
        El pico es corto y recto, de unos 15 mm.
        Muestra la corona y la cara grises, con una banda negra.
        La garganta es blanca, con un visible collar en la nuca de color canela o castaño rojizo.
        El vientre y el pecho son pardo claro o blanquecinos,
        con reflejos más oscuros y los costados grisáceos.
        El dorso es también pardo, manchado de negro, con las alas y la cola de tono más oscuro.
        Los juveniles tienen plumaje más uniforme, con jaspeado más oscuro en el pecho.
      </p>
    </div>
    <br/>
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
