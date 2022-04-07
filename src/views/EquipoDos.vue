<template>
    <div class="equipo2">
        <h1>Bienvenidos al equipo 2</h1>
        <h3>Grupo conformado por:</h3>
        <ul>
            <li>Emanuel</li>
            <li>Dayhana</li>
            <li>Sebastian</li>
            <li>Andy</li>
            <li>Kelly Johana</li>
            <li>Juan Felie</li>
            <li>Erisc</li>
        </ul>
        <button @click="clicks">Hola</button>
    </div>
</template>

<script>
export default {
  data() {
    return {
      texto: 'Desconocido',
    };
  },
  methods: {
    clicks() {
      return alert(`hola bienvenido ${this.texto}`);
    },
  },
};
</script>

<style scoped>
h1{
    color:#3894A1;
}
ul{
    list-style: none;
    padding: 15px 0;
}
.equipo2{
    /* margin:10px 10px; */
    background-color: #F0F1EE;
    /* border: 1px solid red;; */
}
</style>
