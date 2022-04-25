<template>
  <div class="fondo">
    <footer class="wrapper">
      <div class="redes">
        <ul>
          <li><h5>Síguenos en</h5></li>
          <li><a href="https://www.facebook.com/Prospercity-109390181569422/about/?ref=page_internal" target="_blank"><img class="face" src="../assets/facebook.png" alt="facebook"></a><a href="https://instagram.com/prospercity.co?igshid=YmMyMTA2M2Y=" target="_blank"><img class="insta" src="../assets/instagram.png" alt="Instagram"></a></li>
        </ul>
      </div>
      <div>
          <ul>
            <li><b><h5>Página oficial</h5></b></li>
            <li><a href="https://www.prospercity.co/" target="_blank"><img class="prosper" src="../assets/logo_p.jpg" alt="ProsperCity"></a></li>
          </ul>
      </div>
      <div class="nosotros">
        <ul>
          <li><h5>Nosotros</h5></li>
          <li><a href="https://www.prospercity.co/about" target="_blank">Acerca de nosotros</a></li>
          <li><a href="https://www.prospercity.co/faqs" target="_blank">Preguntas frecuentes</a></li>
          <li><a href="https://www.prospercity.co/estudiantes" target="_blank">Estudiantes</a></li>
        </ul>
      </div>
      <div>
        <ul>
          <li><h5>Contactos</h5></li>
          <li><b>Telefono:</b></li>
          <li>(415) 854-3801</li>
          <li><b>Correo:</b></li>
          <li>prospercity@org.co</li>
          <li><b>Direccion:</b></li>
          <li>Cra. 23c #62-72 Oficina 507, Manizales, Caldas</li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<style scoped>
footer{
  background: #ffffff;
}
a{
  text-decoration: none;
  padding: 0 5px;
  color: #2f404f;
}

.nosotros{
  font-size: 0.8rem;
  text-decoration: none;
  /* border:1px solid red; */
}

.prosper{
  margin: 10px;
  width: 130px;
  height: 30px;
  border-radius: 20px;
}
.insta{
    margin: 0px auto;
    width: 30px;
    height: 30px;
    border-radius: 20%;
}
.face{
    margin: 0px auto;
    width: 30px;
    height: 30px;
    border-radius: 20%;
}
.wrapper {
  /* display: grid;
  grid-template-columns: 56rem repeat(2,9px) 5rem; */
  padding: 30px;
  display: flex;
  justify-content:center;
  background: #6cb5df;
}

ul{
  justify-content: center;
  list-style: none;
  font-size: 0.9rem;
}

ul li{
  display: flex;
  padding: 1px;
  align-items: center;
}
 </style>
