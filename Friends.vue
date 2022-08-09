<template>
<div class="new-component">
    <h1>{{ msg }}</h1>
    <hr>
    <ul>
     <li>
     <h2><img src="../assets/paisaje.jpeg" width="500" height="50" alt="Imagen de paisaje">
     <figcaption>El medio ambiente es nuestra responsabilidad</figcaption></h2>
     <h3>¿Qué es el medio ambiente?</h3>
      <p>El medio ambiente es un sistema formado por elementos naturales y artificiales que
      están interrelacionados y que son modificados por la acción humana.
      El medio ambiente es el espacio en el que se desarrolla la vida de
      los distintos organismos favoreciendo su interacción. En él se encuentran
      tanto seres vivos como elementos sin vida y otros creados por la mano del hombre.<br><br><br>

      Todos los organismos obtienen del medio ambiente todos los elementos que necesitan
      para vivir: desde el aire y el agua, hasta el refugio y el alimento que les permite
      crecer, desarrollarse y obtener energía. Mantener el equilibrio del medio ambiente es
      fundamental para mantener la vida en la tierra tal como la conocemos.<br><br>

      Además, los seres humanos utilizan una gran cantidad de recursos naturales del medio
      para cubrir sus necesidades como vestimenta, alimento y objetos de uso cotidiano entre
      otros ejemplos. Por eso el ser humano debe conocer y cuidar sus interacciones con el
      medio ambiente para gestionar de manera sostenible los recursos naturales que permiten
      su crecimiento económico y su desarrollo.<br><br>

      <a href="https://concepto.de/medio-ambiente/" target="_blank" rel="noopener">Fuente: Medio ambiente</a>

      </p>
     </li>
    </ul>

    <h3>¿Qué es la contaminación ambiental?</h3>
     <p>La contaminación ambiental es la presencia de sustancias o elementos dañinos
      para los seres humanos y los ecosistemas (seres vivos).Existen diferentes tipos
      de contaminación, pero básicamente se pueden dividir en:
      contaminación del aire, contaminación de suelos (tierra) y contaminación del
      agua.</p>
      <p>Todos los seres vivos necesitamos de esta fuente de oxígeno para existir,
      sin embargo, hay muchos elementos que pueden llenarlo de impurezas que
      pueden provocar malestar en las personas, en las plantas y en los animales.
      Los principales contaminantes son todos los automóviles en la ciudad,
      especialmente los camiones y buses, también las basuras que desecha el hombre,
      sustancias químicas de fábricas , entre otros.</p>

       <h4><img src="../assets/contaminación.jpg" width="500" height="150" alt="Contaminacion"></h4>
      <h3>¿Qué hacer para evitar la contaminación ambiental?</h3>
      <P>• En el caso del aire, se debe controlar la cantidad de humo que sueltan
      las industrias y los automóviles.</p>
      <P>• Tratar de usar la bicicleta con mayor frecuencia y caminar todos los días.</P>
      <P>• Para cuidar el agua, lo ideal es evitar que todas las sustancias
      dañinas entren en contacto con ella.</P>
      <P>• Consumir menos productos desechables, ser más ecológicos. Es decir,
      entender que lo que hagamos o dejemos de hacer al medio ambiente, influye
      sobre nuestras vidas y nuestro futuro. <br><br>
      <a href="https://www.culturarecreacionydeporte.gov.co/es/bogotanitos/que-es-la-contaminacion-ambiental"
      target="_blank" rel="noopener">Fuente: Contaminación ambiental</a></p><br>
      <h2>El calentamiento global incrementa por la actividad humana</h2><br>
      <p>La actividad humana, por su parte, ha sido la responsable de emitir 
        una mayor cantidad de gases a la atmósfera, provocando un aumento mayor
         de la temperatura y como consecuencia, generando un calentamiento global.</p><br>
      <p>Sin embargo, lo que todavía genera controversia es la fuente y razón de 
        este aumento de la temperatura. Aún así, la mayor parte de la comunidad 
        científica asegura que hay más que un 90% de certeza que el aumento se 
        debe al aumento de las concentraciones de gases de efecto invernadero por
         las actividades humanas que incluyen deforestación y la quema de 
         combustibles fósiles como el petróleo y el carbón. 
         Estas conclusiones son avaladas por las academias de ciencia de la 
         mayoría de los países industrializados.</p>
         <a href="https://www.manosunidas.org/observatorio/cambio-climatico/calentamiento-global"
      target="_blank" rel="noopener">Fuente: Manos Unidas </a><br>
      <div id="CambioClimatico"> 
        <video src="https://youtu.be/7TeJkGDP03g" poster="https://www.elagoradiario.com/wp-content/uploads/2021/01/calentamiento-global-1140x600.jpg" controls></video>
      </div>
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

a {
  color: blueviolet;
}
figcaption {
  font-size: 15px;
  text-align: left;
}
hr {
  height: 2px;
  background-color: gray;
}
h1 {
    font-size: 38px;
    font-weight: bold;
    text-shadow: 7px 4px 5px rgb(209, 208, 208);
    margin: 40px;
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
h4 {
   box-shadow: 7px 4px 5px gray;
    padding: 10px;
    margin: 20px;
    float: right;
    font-display: flex;
    text-align: center;
}
</style>
