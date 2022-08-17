<template>
<br>
<h1>Que opinas de nuestra galería? Déjanos tu comentario:</h1>
<br>

<label for="name">
  <input @change="prueba" class="form-control" placeholder="Ingresa tu comentario" type="text" />
</label><br><br>
<button @click="enviar" class="btn btn-primary btn-sm">Comentar</button><br>
<ul class="list-grouplist-group-flush">
  <li class="list-group-item" v-for="(c) in comentarios" :key = "c">{{c}} </li>
</ul>

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

<style>
.list-group-item {
  border: rgb(216, 216, 212) 2px solid;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}
</style>
