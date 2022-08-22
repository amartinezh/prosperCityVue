<template>
    <h2 class="text-center display-4 my-4">Fotografías</h2>
    <!-- creamos el boton que hace llamado al modal -->
    <a href="#!"  data-bs-toggle="modal" data-bs-target="#agregar_imagen">
          <button class="btn btn-primary">INGRESAR NUEVA FOTO</button>
    </a>
    <!-- creamos las configuraciones del modal -->
    <div tabindex="-1" aria-labelledby="agregar_imagen" aria-hidden="true"
     class="modal fade" id="agregar_imagen">
      <div class="modal-dialog  modal-lg modal-dialog-centered">
          <div class="modal-content">
            <!-- header del modal-->
            <div class="modal-header">
             <h5 class="display-5">ingresa la imagen nueva</h5>
            </div>
            <!-- cuerpo del modal -->
            <div class="modal-body">
              <!-- en los inputs esta los v-model que hace el llamado a la variable
              el cual va a guardar lo que escribamos en el input en la variable-->
              <span class="label label-default display-5">imagen</span>
              <input type="text" class="display-5" v-model="imagen"
              placeholder="ingresa la url de la imagen">
              <span class="label label-default display-5">descripcion</span>
              <input type="text" v-model="descripcion"
               placeholder="ingresa la descripcion" class="display-5">
            </div>
            <!-- footer del modal -->
            <dir class="model-footer">
              <!-- agregamos el evento @click al button para llamar la funcion
              que agrega lo que colocamos en los v-model a la lista -->
              <button class="btn btn-danger close display-5"
               data-dismiss='modal' @click="agregarImagen">agregar</button>
            </dir>
          </div>
      </div>
  </div>
    <br>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <div class="imagen-container">
        <!-- se realizo un ciclo for el cual va a iterar toda la lista
    mostrando la descripcion y la imagen -->
        <div class="imagen-item imagen-8" v-for="i in imagenes" :key = i>
            <h3 class="subtitle" >{{i.descripcion}}</h3>
            <hr>
            <img v-bind:src= "i.imagen" alt='no dio' v-bind:title= "i.descripcion">
        </div>
    </div>
</template>

<script>
export default {
  // creamos la lista de objetos la cual va a contener la imagen ,
  // la descripcion y las variables
  // para almacenar los datos que vamos a enviar a la lista desde los v-model
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
      descripcion: '',
    };
  },
  // funcion que va agregar nuestra imagen y descripcion a la lista
  methods: {
    agregarImagen() {
      this.imagenes.push({
        imagen: this.imagen, descripcion: this.descripcion, modal: '#item8', modal_id: 'item8',
      });
      this.imagen = '';
    },
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
