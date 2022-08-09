<template>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <div class="imagen-container">
        <div class="imagen-item imagen-1">
            <h3 class="subtitle">ia vs human</h3>
            <img src="https://i.postimg.cc/hv0xsHD6/AI-1.jpg " alt="mente humana vs mente de maquina" title="mente humana vs mente de maquina">
        </div>
        <div class="imagen-item imagen-2">
            <h3 class="subtitle">mentes inteligentes</h3>
            <hr>
            <img src="https://i.postimg.cc/hGKk3m1Y/AI-3.jpg" alt="mentes inteligentes" title="mentes inteligentes">
        </div>
        <div class="imagen-item imagen-3">
            <h3 class="subtitle">autoconciencia</h3>
            <hr>
            <img src="https://i.postimg.cc/Dz59VzCw/AI-4.jpg " alt="autoconciencia" title="autoconciencia">
        </div>
        <div class="imagen-item imagen-4">
            <h3 class="subtitle">trabajo inteligente</h3>
            <hr>
            <img src="https://i.postimg.cc/bJJKqjMH/AI-5.jpg" alt="trabajo inteligente" title="trabajo inteligente">
        </div>
        <div class="imagen-item imagen-5">
            <h3 class="subtitle">agentes inteligentes</h3>
            <hr>
            <img src="https://i.postimg.cc/8C0VJ5Ln/AI-6.jpg" alt="agentes inteligentes" title="agentes inteligentes">
        </div>
        <div class="imagen-item imagen-6">
            <h3 class="subtitle">globalizacion inteligente</h3>
            <hr>
            <img src="https://i.postimg.cc/MHk25FP7/AI-7.jpg" alt="globalizacion inteligente" title="globalizacion inteligente">
        </div>
        <div class="imagen-item imagen-7">
            <h3 class="subtitle">intelecto artificial</h3>
            <hr>
            <img src="https://i.postimg.cc/Jz7wpJq2/AI-8.jpg" alt="intelecto artificial" title="intelecto artificial">
        </div>
        <div class="imagen-item imagen-8">
            <h3 class="subtitle">metaverso</h3>
            <hr>
            <img src="https://i.postimg.cc/J0CvZB0K/AI-9.jpg" alt="metaverso" title="metaverso">
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
