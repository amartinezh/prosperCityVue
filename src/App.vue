<template>
  <nav>
    <router-link to="/">-[Inicio]-</router-link> |
    <router-link to="/about">-- [Acerca de ...] --</router-link> |
    <router-link to="/tarea">-- [Tarea para grupos] --</router-link> |
     <router-link to="/multimedia">-- Cacique Candela --</router-link> |
  </nav>
  <router-view />
</template>

<style>
* {
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
  background-color: #2c3e50;
  display: flex;
  justify-content: center;
  padding: 14px 30px;
}

nav a {
  padding: 25px;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
