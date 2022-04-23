<template>
  <ul class="link-list">
    <li v-for="item in links" v-bind:key="item.id">
      <a class="link-item" :href="item.link" target="_blank">
        <img :src="item.thumbnail" alt="item.title" class="link-thumbnail" />
        <p :href="item.link">
          {{item.title}}
        </p>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'LinkList',
  props: {
    links: {
      type: Object,
    },
  },
};
</script>

<style>
  ul {
    list-style: none;
  }
  .link-thumbnail {
    max-width: 64px;
    height: auto;
    margin: 0;
  }
  p {
    text-decoration: none;
    color: black;
    flex: 1;
    text-align: center;
  }
  .link-item {
    cursor: pointer;
    padding: 16px;
    background: white;
    box-shadow: 0px 11.1704px 20.7037px rgb(0 0 0 / 2%), 0px 5.
    8px 10.5625px rgb(0 0 0 / 2%), 0px 2.36296px 5.2963px rgb(0 0 0 / 2%), 0px 0.
    537037px 2.55787px rgb(0 0 0 / 1%);
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }
</style>
