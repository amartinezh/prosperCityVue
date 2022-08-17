<template>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <div class="imagen-container">
        <div class="imagen-item imagen-1">
            <h3 class="subtitle">IA vs humanos</h3>
            <hr>
            <img src="https://i.postimg.cc/hv0xsHD6/AI-1.jpg " alt="Mente humana vs mente de maquina" title="Mente humana vs mente de maquina">
          <p> la inteligencia artificial es tan sencilla como estar hablando de maquinas que etsna programadas para llegar a cabo una actividad especifica y los seres humanos supervisan su trabajo. 
            </p>
        </div>
        <div class="imagen-item imagen-2">
            <h3 class="subtitle">Calidad de vida</h3>
            <hr>
            <img src="https://i.postimg.cc/R07FYSXh/AI-02.jpg" alt="Calidad de vida" title="Calidad de vida">
            <p> La mano robotica con inteligencia artificial, capaz de obedecer ordenes del cerebro y transmitir hacia el sistema nerviosola sensacion del tacto.
            </p>
        </div>
        <div class="imagen-item imagen-3">
            <h3 class="subtitle">Autoconciencia</h3>
            <hr>
            <img src="https://i.postimg.cc/Dz59VzCw/AI-4.jpg " alt="Autoconciencia" title="Autoconciencia">
             <p> Quizá lo peculiar del ser humano es su capacidad de conocimiento intelectual y esta permite desarrollar cada tecnica del campo que llamamos inteligencia artificial.
        </p>
        </div>
        <div class="imagen-item imagen-4">
            <h3 class="subtitle">Realidad virtual</h3>
            <hr>
            <img src="https://i.postimg.cc/gjCbdR0W/AI-12.jpg" alt="Realidad virtual" title="Realidad virtual">
             <p> Este tipo de inteligencia posee la capacidad de transmitir imagenes para que nuestro cererbo persiva su movimiento y reaccione. 
        </p>
        </div>
        <div class="imagen-item imagen-5">
            <h3 class="subtitle">Agentes inteligentes</h3>
            <hr>
            <img src="https://i.postimg.cc/8C0VJ5Ln/AI-6.jpg" alt="Agentes inteligentes" title="Agentes inteligentes">
            <p> Hay varios tipos de inteligencia artificial dependiendo el el algoritmo que se quiere dar.
        </p>
        </div>
        <div class="imagen-item imagen-6">
            <h3 class="subtitle">Globalizacion inteligente</h3>
            <hr>
            <img src="https://i.postimg.cc/gjQmJQN1/AI-16.jpg" alt="Globalizacion inteligente" title="Globalizacion inteligente">
            <p> Los asistentes virtuales que se encuentran en todos los hogares hoy en dia, como lo son: Siri en apple, Cortana en Windows, Alexa en amazon.
         </p>
        </div>
        <div class="imagen-item imagen-7">
            <h3 class="subtitle">Intelecto artificial</h3>
            <hr>
            <img src="https://i.postimg.cc/HLLmwbVp/AI-20.jpg" alt="Intelecto artificial" title="Intelecto artificial">
            <p> Las maquinas inteligentes imitan las funciones cognitivas de los seres humanos.
            </p>
        </div>
        <div class="imagen-item imagen-8">
            <h3 class="subtitle">Metaverso</h3>
            <hr>
            <img src="https://i.postimg.cc/J0CvZB0K/AI-9.jpg" alt="Metaverso" title="Metaverso">
             <p> Los aparatos eletronicos como los celulares que son de los mas usados por los humanos y tienen mayor acceso a ellos.
            </p>
        </div>
    </div>
</template>

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
