<template>
  <div class="todo-container">
    <div class="todo-wrap">
        <Header />
        <List />
        <Footer />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "./components/Header/index.vue";
import List from "./components/List/index.vue";
import Footer from "./components/Footer/index.vue";
export default defineComponent({
  name: "App",
  components: {
      Header,
      List,
      Footer
  },
  setup() {
    return {};
  },
});
</script>

<style scoped>
.todo-container {
    width: 600px;
    margin: 0 auto;
}
.todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
}
</style>
