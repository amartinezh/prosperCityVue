<template>
  <div class="preview-container">
    <div class="container">
    <div class="preview-btn">
      <button>Preview</button>
    </div>
      <div class="user">
       <li> Usuario {{ profile.name }}</li>
      </div>
         <div v-for="(item, i) in links" :key="i" class="linkOne">
          <li> {{ item.id }} </li>
          <li>url: {{ item.link }} </li>
          <li>{{ item.title }}</li>
          <li>{{ item.thumbnail }}</li>
         </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'previewComponent',
  props: {
    profile: {
      type: Object,
    },
    links: {
      type: Object,
    },
  },
};
</script>
<<<<<<< HEAD
<style>
 .container{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 0px 40px;
  position: static;
  width: 740px;
  height: 384px;
  left: 313px;
  top: 192px;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 0px;
 }
 .user{
   display: flex;
   flex-direction: row;
   align-items: flex-end;
   padding: 24px;
   width: 740px;
   height: 112px;
   left: 0px;
   top: 0px;
   background: #ffffff;
   box-shadow: 0px 11.1704px 20.7037px rgba(0, 0, 0, 0.0242963),
   0px 5.8px 10.5625px rgba(0, 0, 0, 0.02), 0px 2.36296px 5.2963px rgba(0, 0, 0, 0.0157037),
   0px 0.537037px 2.55787px rgba(0, 0, 0, 0.00962963);
   border-radius: 8px;
   flex: none;
   order: 0;
   align-self: stretch;
   flex-grow: 0;
   margin: 24px 0px;
 }
 .linkOne{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  position: static;
  width: 740px;
  height: 96px;
  left: 0px;
  top: 0px;
  background: #ffffff;
  box-shadow: 0px 11.1704px 20.7037px rgba(0, 0, 0, 0.0242963),
  0px 5.8px 10.5625px rgba(0, 0, 0, 0.02), 0px 2.36296px 5.2963px rgba(0, 0, 0, 0.0157037),
  0px 0.537037px 2.55787px rgba(0, 0, 0, 0.00962963);
  border-radius: 8px;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 16px 0px;
 }
</style>
=======

  <style>
    root {
       --blue: blue;
       --red: red;
    }
    body {
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
      body {
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
>>>>>>> 90d7342b703d1e1fd27abee81178b631cb4a8974
