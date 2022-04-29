<script>
export default {
  data() {
    return {
      duration: 15 * 1000,
      elapsed: 0,
    };
  },
  created() {
    let lastTime = performance.now();
    const update = () => {
      const time = performance.now();
      this.elapsed += Math.min(time - lastTime, this.duration - this.elapsed);
      lastTime = time;
      this.handle = requestAnimationFrame(update);
    };
    update();
  },
  unmounted() {
    cancelAnimationFrame(this.handle);
  },
};
</script>

<template>
<form action="">
  <progress :value="elapsed / duration"></progress>
</form>
  <div>{{ (elapsed / 1000).toFixed(1) }}s</div>

  <div>
    <label for="name">Duration:
    <input type="range" v-model="duration" min="1" max="30000">
    </label>
    {{ (duration / 1000).toFixed(1) }}s
  </div>

  <button @click="elapsed = 0">Reset</button>
</template>

<style>
.elapsed-container {
  width: 300px;
}

.elapsed-bar {
  background-color: red;
  height: 10px;
}
</style>
