<template>
  <div id="container">
    El dato que llega es --> {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'showComponent',
  props: {
    msg: String,
  },
};
</script>
