<template>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <div class="video-container">
        <div class="video-item video-1">
            <h3 class="subtitle">¿Tiene la inteligencia Artificial conciencia?</h3>
            <hr>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/VsduvmlZZuw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <button class="like" @click="increment1" v-bind:class="{ like_active: likeisActive1 }">
                <!-- resumen video -->
            <p>
            LaMDA inteligencia artificial con conciencia propia, con forma de humano diseñado por
             Google en 2017 con un extremado de redes neuronales
              artificiales profundas, se retroalimenta con textos
                </p>
                <span class="material-symbols-outlined">favorite</span>
            </button> <span>{{like1}}</span>
        </div>
        <div class="video-item video-2">
            <h3 class="subtitle">Aprende a desarrollar una App de Inteligencia Artificial</h3>
            <hr>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/UsG52AywMLI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <button class="like " @click="increment2" v-bind:class="{ like_active: likeisActive2 }">
                <!-- resumen video -->
                <p>Avatar aplicación web por medio de inteligencia artificial con efectos visuales
                     que permite crear un Avatar animado en 3D con solo una imagen fija</p>
                <span class="material-symbols-outlined">favorite</span>
            </button> <span>{{like2}}</span>
        </div>
        <div class="video-item video-3">
            <h3 class="subtitle">Esta inteligencia dibuja por ti </h3>
            <hr>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/vCOy-US2NkU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <button class="like" @click="increment3" v-bind:class="{ like_active: likeisActive3 }">
                <!-- resumen video -->
                <p>GouGAN2 es una inteligencia artificial donde su tecnología nos permite permite
                     el diseño de dibujos y textos en imágenes
                     realistas combinado mapeo de segmentación.</p>
                <span class="material-symbols-outlined">favorite</span>
            </button> <span>{{like3}}</span>
        </div>
    </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      like1: 5,
      like2: 0,
      like3: 4,
      likeisActive1: false,
      likeisActive2: false,
      likeisActive3: false,
    };
  },
  methods: {
    increment1() {
      this.like1 += 1;
      this.likeisActive1 = true;
    },
    increment2() {
      this.like2 += 1;
      this.likeisActive2 = true;
    },
    increment3() {
      this.like3 += 1;
      this.likeisActive3 = true;
    },
  },
};
</script>
<style>
    .video-container{
        /* display: grid;
        grid-template-columns: repeat(3,1fr);
        grid-auto-rows: 1fr; */
        margin: 20px;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        gap: 5px;
    }
    .video-item iframe{
        width: 400px;
    }
    .subtitle{
        margin: 3px;
        margin-bottom: 0px;
        padding: 0px;
        font-weight: 600;
        color: #2c3e50;
        font-size: 14px;
        text-align: left;
        margin-left: 12px;
    }
    .video-item hr{
        margin:10px;
        margin-top: 4px;
        color: #42b983;
        height: 2px;
        opacity: 1;
    }
    .like_active{
        font-variation-settings: 'FILL' 1, 'wght' 700, 'GRAD' 0, 'opsz' 48;
        color: #ec3e3e;
    }
    .like :hover{
        color: #ec3e3e;
        transition: 500ms ease;
    }
    @media (max-width: 700px){
        .video-container{
        /* display: grid;
        grid-template-columns: repeat(3,1fr);
        grid-auto-rows: 1fr; */
        margin: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 5px;
    }
    }
    .video-item{
        box-shadow: 0.5px 1px 18px gray;
        padding: 10px;
        border-radius: 15px;
    }
</style>
