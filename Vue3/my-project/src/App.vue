<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header />
      <List :todos="todos"/>
      <Footer />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import Header from "./components/Header/index.vue";
import List from "./components/List/index.vue";
import Footer from "./components/Footer/index.vue";
// 映入接口
import { Todo } from '../src/types/todo'
export default defineComponent({
  name: "App",
  components: {
    Header,
    List,
    Footer,
  },
  // 数据应该用数组存储
  setup() {
    const state = reactive<{todos: Todo []}>({
      todos: [
        {
          id: 1,
          title: "奔驰",
          isCompleted: true,
        },
        {
          id: 2,
          title: "奥迪",
          isCompleted: false,
        },
        {
          id: 3,
          title: "宝马",
          isCompleted: false,
        },
      ],
    });
    return {
      ...toRefs(state)
    };
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
