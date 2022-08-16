<template>
<br>
<label for="name">
  <input @change="prueba" class="form-control" placeholder="ingresa el comentario" type="text" />
</label><br><br>
<button @click="enviar" class="btn btn-primary btn-sm">comentar</button>
<ul class="list-group list-group-flush">
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
