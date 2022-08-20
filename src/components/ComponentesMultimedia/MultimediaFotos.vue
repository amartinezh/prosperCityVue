<template>
    <h2>Fotografías</h2>
    <br>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <div class="imagen-container">
        <div class="imagen-item imagen-8" v-for="i in imagenes" :key = i>
            <h3 class="subtitle" >{{i.descripcion}}</h3>
            <hr>
            <img v-bind:src= "i.imagen" alt='no dio' v-bind:title= "i.descripcion">
        </div>
    </div>
    <div class="imagen-container" v-for="i in imagenes" :key = i>
      <div class="imagen-item imagen-8">
          <h3 class="subtitle" >prueba</h3>
          <hr>
          <a href="#!"  data-bs-toggle="modal" v-bind:data-bs-target=i.modal>
          <img v-bind:src= i.imagen alt='no dio' title= "prueba">
        </a>
      </div>
          <!-- modal galery -->
    <div tabindex="-1" v-bind:aria-labelledby=i.modal_id aria-hidden="true"
     class="modal fade" v-bind:id=i.modal_id>
      <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content">
              <img v-bind:src=i.imagen alt="">
          </div>
      </div>
  </div>
  <!-- find modal galery -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      imagenes: [{
        imagen: 'https://i.postimg.cc/R07FYSXh/AI-02.jpg', descripcion: 'Calidad de vida', modal: '#item1', modal_id: 'item1',
      },
      {
        imagen: 'https://i.postimg.cc/Dz59VzCw/AI-4.jpg', descripcion: 'Autoconciencia', modal: '#item2', modal_id: 'item2',
      },
      {
        imagen: 'https://i.postimg.cc/gjCbdR0W/AI-12.jpg', descripcion: 'Realidad virtual', modal: '#item3', modal_id: 'item3',
      },
      {
        imagen: 'https://i.postimg.cc/8C0VJ5Ln/AI-6.jpg', descripcion: 'Agentes inteligentes', modal: '#item4', modal_id: 'item4',
      },
      {
        imagen: 'https://i.postimg.cc/gjQmJQN1/AI-16.jpg', descripcion: 'Globalizacion inteligente', modal: '#item5', modal_id: 'item5',
      },
      {
        imagen: 'https://i.postimg.cc/HLLmwbVp/AI-20.jpg', descripcion: 'Intelecto artificial', modal: '#item6', modal_id: 'item6',
      },
      {
        imagen: 'https://i.postimg.cc/hv0xsHD6/AI-1.jpg ', descripcion: 'IA vs humanos', modal: '#item7', modal_id: 'item7',
      },
      {
        imagen: 'https://i.postimg.cc/J0CvZB0K/AI-9.jpg', descripcion: 'Metaverso', modal: '#item8', modal_id: 'item8',
      }],
      imagen: '',
    };
  },
};
</script>

<style>

    .imagen-container{
        display: grid;
        grid-template-columns: repeat(4,1fr);
        grid-template-rows: 2fr;
    }
    .imagen-item img{
        width: 300px;
        height: 300px;
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
    .imagen-item hr{
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
        .imagen-container{
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
