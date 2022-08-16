<template>
<label for="name"><input @change="prueba" type="text" /></label>
<button @click="enviar">comentar</button>
<h3 v-for="(comentario, llave) in comentarios" :key = "llave" >{{comentario}} </h3>

</template>

<script>
export default {
  data() {
    return {
      comentarios: [],
    };
  },
  methods: {
    prueba(e) {
      console.log(e.target.value);
      this.comentarios.push(e.target.value);
    },
  },
};
</script>
