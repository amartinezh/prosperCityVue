<template>
  <aside class="aside">
    <img src="../assets/Loogo.png" alt="Logo de la aplicacion" class="logo">
    <div class="profile">
      <img width="64" height="64" :src="profile.photo" alt="Foto de mike" class="photo">
      <p class="name">{{profile.name}}</p>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'DianaSidebar',
  props: {
    profile: {
      type: Object,
    },
  },
};
</script>

<style>
  .aside {
    padding: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .profile {
    display: none;
  }
  @media (min-width: 768px) {
    .profile {
      display: block;
    }
  }
  .photo {
    border-radius: 50%;
    width: 64px;
    height: 64px;
    margin-bottom: 8px;
  }
  .logo {
   display: flex;
   flex-direction: row;
   align-items: center;
   padding: 0px;
   position: static;
   width: 116px;
   height: 26px;
   left: 0px;
   top: 0px;
  }
  .name {
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
  }
</style>
