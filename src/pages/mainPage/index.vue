<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>mainPage</div>
</template>
<script setup>
import { onBeforeRouteUpdate } from "vue-router";
let route = useRoute()
let props = defineProps(['q'])
console.log(`output->route`,route, props)
onBeforeRouteUpdate((to ,from) => {
  console.log(`output ->to, from`,to, from)
}) 
</script>