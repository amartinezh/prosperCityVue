<template>
<div class="new-component">
    <h1>{{ friends }}</h1>
    <p> Nuevo componente </p>
</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent ({
    name: 'friends',
    props: {
        friends: String,
    },
});
</script>