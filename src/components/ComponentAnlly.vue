<template>
  <div>
    <p class="titulocomponente">Gorrión montes de anteojos</p>
    <div class="contenedorimagen">
      <img alt="Vue logo" src="@/assets/Gorrion.jpeg" />
    </div>
    <p class="infoGorrion">
      Gorrión montes de anteojos / Atlapetes flaviceps. Especie endémica de Colombia, con categoría
      de amenaza Vulnerable
    </p>
    <h2 class="autor">
         by:Andrés Felipe Cardona Toro
    </h2>
  </div>
</template>
<script lang="ts"></script>
<style scoped>
.contenedorimagen {
  width: 100%;
  height: 200px;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.contenedorimagen img {
  width: 400px;
  height: 200px;
}

.titulocomponente {
  font-size: 30px;
  padding: 10px;
  color: black;
}
.infoGorrion{
  margin-top: 30px;
}
.autor{
  margin-bottom: 30px;
}
</style>
