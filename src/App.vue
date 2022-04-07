<template>
  <nav>
    <img class="Logobanner" src="../src/assets/logo_p.jpg" alt="logo prospercity">
    <ul class="NavBar">
      <li><router-link to="/">Inicio</router-link></li>
      <li><router-link to="/about">Acerca de</router-link> </li>
      <li><router-link to="/tarea">Tarea abril 1 </router-link></li>
      <li><router-link to="/equipo2">Equipo 2</router-link></li>
    </ul>
  </nav>
  <router-view/>
  <section>h2 Esta es una seccion</section>
  <footer>comida</footer>
</template>

<style>
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  display: flex;
  justify-content: space-between;
  background-color: #2F404F;
  align-items: center;
}

nav a {
  font-weight: bold;
  text-decoration: none;
  color: #F0F1EE;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.NavBar{
  list-style: none;
  text-decoration: none;
  display: flex;
  align-items: center;
  color:white;
  height: 80px;
}

.NavBar li{
  padding: 0 40px;
}

.NavBar li:hover{
  color: #C7DAD3;
}

.Logobanner{
  height: 30px;
  padding: 0 40px;
}
</style>
