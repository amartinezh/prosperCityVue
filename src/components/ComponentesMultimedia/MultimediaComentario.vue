<template>
<br>
<h1>Que opinas de nuestra galería? Déjanos tu comentario:</h1>
<br>

<label for="name">
  <input v-model="comentar"  class="form-control" @keyup.enter="agregarcomentario"
  placeholder="preciona enter o de click en comentar" type="text" />
</label><br><br>
<button @click="agregarcomentario" class="btn btn-primary btn-sm">Comentar</button><br>
<ul class="list-grouplist-group-flush">
  <li class="list-group-item" v-for="(c) in comentarios" :key = "c">{{c}} </li>
</ul>

</template>

<script>
export default {
  data() {
    return {
      comentarios: [],
      comentar: '',
    };
  },
  methods: {
    agregarcomentario() {
      this.comentarios.push(this.comentar);
      this.comentar = '';
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
