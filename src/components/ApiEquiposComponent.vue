<template>
  <div class="video-container">
    <div class="video-item video-1">
      <h3 class="subtitle">EQUIPO VEGETA</h3>
      <hr />
      <p>
        A continuación se consumiran datos formateados de:<br/>
        https://openweathermap.org/api
      </p>
      <button v-on:click="mounted"> --> Click aquí para traer información</button>
      <div id="app">
        {{ info }}
      </div>
    </div>
    <div class="video-item video-1">
      <h3 class="subtitle">EQUIPO NARUTO</h3>
      <hr />
      <p>
        A continuación se consumiran datos formateados de:<br/>
        https://developers.google.com/maps/documentation/distance-matrix
      </p>
      <button v-on:click="mounted"> --> Click aquí para traer información</button>
      <div id="app">
        {{ info }}
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'ApiEquiposComponent',
  data() {
    return {
      info: null,
    };
  },
  methods: {
    mounted() {
      axios
        .get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then((response) => { this.info = response; });
    },
  },
};
</script>
<style>
.video-container {
  /* display: grid;
      grid-template-columns: repeat(3,1fr);
      grid-auto-rows: 1fr; */
  margin: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 5px;
}
.video-item iframe {
  width: 400px;
}
.subtitle {
  margin: 3px;
  margin-bottom: 0px;
  padding: 0px;
  font-weight: 600;
  color: #2c3e50;
  font-size: 14px;
  text-align: left;
  margin-left: 12px;
}
.video-item hr {
  margin: 10px;
  margin-top: 4px;
  color: #42b983;
  height: 2px;
  opacity: 1;
}
.like_active {
  font-variation-settings: "FILL" 1, "wght" 700, "GRAD" 0, "opsz" 48;
  color: #ec3e3e;
}
.like :hover {
  color: #ec3e3e;
  transition: 500ms ease;
}
@media (max-width: 700px) {
  .video-container {
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
.video-item {
  box-shadow: 0.5px 1px 18px gray;
  padding: 10px;
  border-radius: 15px;
}
</style>
