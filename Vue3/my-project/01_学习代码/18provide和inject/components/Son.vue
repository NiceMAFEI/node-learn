<template>
  <h3>Son子级组件</h3>
  <hr>
  <grand-son></grand-son>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
import GrandSon from './GrandSon.vue'
export default defineComponent({
    name: 'Son',
    components: {
        GrandSon
    }
})
</script>

<style>

</style>