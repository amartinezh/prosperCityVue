<template>
    <h1 class="display-6">MULTIMEDIA</h1>
     <h2><b>Videos</b></h2>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <div class="video-container">
        <div class="video-item video-1">
            <h3 class="subtitle">¿Tiene la inteligencia Artificial conciencia?</h3>
            <hr>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/VsduvmlZZuw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <button class="like" @click="increment1">
                <span class="material-symbols-outlined">favorite</span>
            </button> <span>{{like1}}</span>
        </div>
        <div class="video-item video-2">
            <h3 class="subtitle">Aprende a desarrollar una App de Inteligencia Artificial</h3>
            <hr>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/UsG52AywMLI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <button class="like" @click="increment2">
                <span class="material-symbols-outlined">favorite</span>
            </button> <span>{{like2}}</span>
        </div>
        <div class="video-item video-3">
            <h3 class="subtitle">Esta inteligencia dibuja por ti </h3>
            <hr>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/vCOy-US2NkU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <button class="like" @click="increment3">
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
    };
  },
  methods: {
    increment1() {
      this.like1 += 1;
    },
    increment2() {
      this.like2 += 1;
    },
    increment3() {
      this.like3 += 1;
    },
  },
};

</script>
<style>
    h1{
        text-align: center;
    }
    h2{
        text-align: left;
        margin: 10px;
    }
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
</style>
