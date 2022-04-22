<template>
<div class="linktree-container">
    <aside class="aside">
      aside
    </aside>
    <main class="main">
      <div class="main-container">
        <div class="profile-container">
          <div class="profile">Ver perfil</div>
          <div class="edit-profile">Editar perfil</div>
        </div>
        <previewComponent/>
        <div class="add-link">Add link</div>
        <div class="link-list">Link List</div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">

import previewComponent from '@/components/previewComponent.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LinkTreeRojo',
  components: {
    previewComponent,
  },
  data() {
    return {
      profile: {
        name: 'Leonidas Esteban',
        photo: 'https://pbs.twimg.com/profile_images/1324801908851298314/IAhTiaPE_400x400.jpg',
        description: 'Aprende a programar desde cero y gratis 👇',
      },
      links: [
        {
          id: 'asdasd',
          link: 'https://www.youtube.com/LeonidasEsteban',
          title: 'Youtube',
          thumbnail: 'https://cdn-icons-png.flaticon.com/512/1384/1384060.png',
        },
        {
          id: 'qweqw',
          link: 'https://www.instagram.com/LeonidasEsteban/',
          title: 'Instagram',
          thumbnail: 'https://cdn-icons-png.flaticon.com/512/2111/2111463.png',
        },
      ],
    };
  },
});
</script>
<style>
    root {
       --blue: blue;
       --red: red;
    }
    .linktree-container {
      display: grid;
      font-family: Arial, Helvetica, sans-serif;
      grid-template-rows: 1fr 60px;
      grid-template-columns: 1fr;
      height: 100vh;
      margin: 0;
    }
    .aside{
      background: #ffd2d2;
      grid-area: 2 / 1 / 3 / 2;
    }
    .main {
      background: #F9F9F9;
    }
    .main-container {
      max-width: 740px;
      margin: 0 auto;
    }
    .profile-container {
      background: rgb(205, 255, 205);
    }
    .preview-container {
      background: rgb(193, 214, 255);
    }
    .add-link {
      background: rgb(255, 255, 186);
    }
    .link-list {
      background: rgb(255, 196, 255);
    }
    @media (min-width: 768px) {
      .linktree-container {
        grid-template-columns: 180px 1fr;
        grid-template-rows: 1fr;
      }
      .main {
        height: 100vh;
      }
      .aside {
        grid-area: initial;
        height: 100vh;
      }
    }
</style>
