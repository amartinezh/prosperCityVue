<template>
<div class="add-link">
  <div class="link">
  </div>
  <div class="gancho">
    <h2>Links</h2>
  </div>
  <button>New link</button>
  <div class="contenedor">
    <p>Guardar y salir</p>
    <p> {{ nombreTitulo }}</p>
    <input v-model="nombreTitulo" placeholder="Titulo" />
    <p> {{ direccionUrl }}</p>
    <input v-model="direccionUrl" placeholder="URL" />
    <button class="subirImg">Escoge una imagen</button>
  </div>
</div>
</template>

<script>
export default {
  name: 'anaLink',
};
</script>

<style scoped>
button{
  background:rgb(25, 77, 221);
  width: 149px;
  height: 56px;
  color: white;
  display:flex;
  justify-content: left;
  align-items: center;
  padding-left: 18px;
  font: arial;
  font-size:16px;
  border-radius: 10px;
  margin:40px 10px;
  font-family: Arial, Helvetica, sans-serif;
  border: none;
}
.gancho{
  position: inline;
}
img{
  width:10px;
  height:10px;
}
.subirImg{
  width: 178px;
  height: 40px;
  border: 1px solid rgba(34, 34, 34, 1);
  background: #FFFF;
  color: rgba(0, 0, 0, 1);
  padding-left: 18px;
  margin-left:10px;
}
.contenedor{
  width: 740px;
  height: 280px;
  background: #FFFF;
  color: rgba(0, 0, 0, 1);
}
p{
  display: inline;
  float:right;
  padding-right:20px;
}

h2{
  color: rgba(0, 0, 0, 1);
  font-family: Arial, Helvetica, sans-serif;;
  font-size: 22px;
  display:flex;
  justify-content: left;
  margin-left:10px;
}
input{
  border: 1px solid rgba(113, 113, 113, 1);
  width:708px;
  height:48px;
  padding: 16px;
  margin:10px;
  border-radius:8px;
}
</style>
