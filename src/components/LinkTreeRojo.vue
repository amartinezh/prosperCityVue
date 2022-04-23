<template>
  <div class="linktree-container">
    <DianaSidebar v-bind:profile="profile" />
    <main class="main">
      <div class="main-container">
        <div class="profile-container">
          <profile-component :name="profile.name" :description="
          profile.description" :photo="profile.photo" @getData="getData"/>
          <div class="profile">Ver perfil</div>
          <div class="edit-profile">Editar perfil</div>
        </div>
        <previewComponent v-bind:profile="profile" v-bind:links="links"/>
        <previewComponent/>
        <div class="add-link">
          <anaLink/>
        </div>
        <LinkList v-bind:links="links" />
      </div>
    </main>
  </div>
</template>

<script lang="ts">

import previewComponent from '@/components/previewComponent.vue';
import anaLink from '@/components/anaLink.vue';
import DianaSidebar from '@/components/DianaSidebar.vue';
import LinkList from '@/components/MikeLinkList.vue';
import ProfileComponent from '@/components/ProfileComponent.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LinkTreeRojo',
  components: {
    previewComponent,
    anaLink,
    DianaSidebar,
    LinkList,
    ProfileComponent,
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
  methods: {
    getData(info) {
      this.profile.name = info.name;
      this.profile.description = info.description;
      this.profile.photo = info.photo;
    },
  },
});
</script>
<style>
    root {
      --blue: blue;
      --red: red;
    }
    * {
      font-family: 'Inter', Arial, sans-serif;
    }
    .linktree-container {
      display: grid;
      font-family: Arial, Helvetica, sans-serif;
      grid-template-rows: 1fr 60px;
      grid-template-columns: 1fr;
      margin: 0;
    }
    .aside{
      grid-area: 2 / 1 / 3 / 2;
    }
    .main {
      background: #F9F9F9;
      padding: 0 16px;
    }
    .main-container {
      max-width: 740px;
      margin: 0 auto;
    }
    .profile-container {
      background: rgb(205, 255, 205);
    }
    .preview-container {
      position: relative;
      width: 1366px;
      height: 768px;
      background: #FBF9FB;
    }
    .add-link {
      background: rgb(255, 255, 186);
    }
    @media (min-width: 768px) {
      .linktree-container {
        grid-template-columns: 180px 1fr;
        grid-template-rows: 1fr;
      }
      .main {
        height: calc(100vh - 100px);
      }
      .aside {
        grid-area: initial;
        height: calc(100vh - 100px);
      }
    }
</style>
