<template>
  <ul class="todo-main">
    <Item></Item>
    <Item></Item>
    <Item></Item>
    <Item></Item>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Item from '../Item/index.vue'
export default defineComponent({
  name: "List",
  components: {
    Item
  },
  setup() {
    return {};
  },
});
</script>

<style scoped>
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
