<template>
  <nav>
<<<<<<< HEAD
    <router-link to="/">Inicio</router-link> |
    <router-link to="/about">Acerca de ...</router-link> |
    <router-link to="/dayana">Pagina</router-link> |
=======
    <router-link to="/">--Inicio--</router-link> |
    <router-link to="/about">-- Acerca de ... --</router-link> |
    <router-link to="/tarea">-- Tarea Abril 1 --</router-link>
>>>>>>> 8693a4f0554fb44d0830dc29cb544e20e4438b42
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
