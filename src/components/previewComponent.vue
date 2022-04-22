<template>
<body>
  <aside class="aside">
    aside
  </aside>
  <main class="main">
    <div class="main-container">
      <div class="profile-container">
        <div class="profile">Ver perfil</div>
        <div class="edit-profile">Editar perfil</div>
      </div>
      <div class="preview-container">
        <div class="preview-btn">Preview</div>
        <div class="preview"></div>
      </div>
      <div class="add-link">Add link</div>
      <div class="link-list">Link List</div>
    </div>
  </main>
</body>
</template>

<script>
export default {
  name: 'previewComponent',
};
</script>

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
