<template>
  <nav>
    <router-link to="/">--Inicio--</router-link> |
    <router-link to="/about">-- Acerca de ... --</router-link> |
<<<<<<< HEAD
    <router-link to="/tarea">-- Tarea Abril 1 --</router-link>
    <router-link to="/componentDayana">-- Dayana --</router-link>
     <router-link to="/componentEmanuel">-- Emmanuel --</router-link>
=======
    <router-link to="/tarea">-- Tarea Abril 1 --</router-link> |
    <router-link to="/grupoRojo">Grupo Rojo</router-link>
>>>>>>> c0ec06bb227ba1c0af8bd0ebbbb55652403bc43b
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
