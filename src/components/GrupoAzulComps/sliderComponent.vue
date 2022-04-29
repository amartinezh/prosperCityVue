<template>
  <div class="container">
  <ul class="slider">
    <li id="slide1">
      <img alt="" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3947459/car.jpg"/>
    </li>
    <li id="slide2">
      <img alt="" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3947459/sunset.jpg"/>
    </li>
    <li id="slide3">
      <img alt="" src="http://static1.squarespace.com/static/61a1a264b00160588e37c511/t/61a256caa2e6467b966b0833/1638029002609/20%29+logo+colores.png?format=1500w"/>
    </li>
  </ul>
  <ul class="menu">
    <li>
      <a href="#slide1">1</a>
    </li>
    <li>
      <a href="#slide2">2</a>
    </li>
     <li>
      <a href="#slide3">3</a>
    </li>
  </ul>
 </div>
</template>

<style scoped>
body{
  background-color: rgb(230, 216, 172);
  font-family: sans-serif;
}

.container{
  margin: auto;
  background-color: #f0f1ee;
  padding: 30px;
}

ul, li {
    padding: 0;
    margin: 0;
    list-style: none;
}

ul.slider{
  position: relative;
  width: 800px;
  height: 300px;
}

ul.slider li {
    position: absolute;
    left: 0px;
    top: 0px;
    opacity: 0;
    width: inherit;
    height: inherit;
    transition: opacity .5s;
    background:#fff;
}

ul.slider li img{
  width: 100%;
  height: 300px;
  object-fit: cover;
}

ul.slider li:first-child {
    opacity: 1; /*Mostramos el primer <li>*/
}

ul.slider li:target {
    opacity: 1; /*Mostramos el <li> del enlace que pulsemos*/
}

.menu{
  text-align: center;
  margin: 20px;
}

.menu li{
  display: inline-block;
  text-align: center;
}

.menu li a{
  color: white;
  text-decoration: none;
  background-color: grey;
  padding: 10px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
}
</style>
