<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :addTodo="addTodo" />
      <List :todos="todos" :deleteTodo="deleteTodo" :updateTodo="updateTodo" />
      <Footer
        :updateCompleted="updateCompleted"
        :todos="todos"
        :clearTodos="clearTodos"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs, watch } from "vue";
import Header from "./components/Header/index.vue";
import List from "./components/List/index.vue";
import Footer from "./components/Footer/index.vue";
import { saveTodos, readTodos } from "../src/utils/localStorageUtils";
// 映入接口
import { Todo } from "../src/types/todo";
export default defineComponent({
  name: "App",
  components: {
    Header,
    List,
    Footer,
  },
  // 数据应该用数组存储
  setup() {
    const state = reactive<{ todos: Todo[] }>({
      todos: [],
    });
    onMounted(() => {
      setTimeout(() => {
        state.todos = readTodos();
      }, 1000);
    });

    /**
     * 添加数据的方法
     * @param { Todo }todo; 要添加的数据
     */
    const addTodo = (todo: Todo) => {
      state.todos.push(todo);
    };
    /**
     * 删除数据的方法
     * @param { Todo }todo; 要删除的数据
     */
    const deleteTodo = (value: number) => {
      state.todos.splice(value, 1);
    };
    /**
     * 更新数据的方法
     */
    const updateTodo = (obj: Todo, val: boolean) => {
      obj.isCompleted = val;
      console.log(obj);
    };
    /**
     * 集体修改isCompleted属性
     */
    const updateCompleted = (val: boolean) => {
      state.todos.forEach((item) => {
        item.isCompleted = val;
      });
    };
    /**
     * 清楚已完成的数据
     */
    const clearTodos = () => {
      state.todos = state.todos.filter((item) => !item.isCompleted);
    };

    /**
     * 监听todos数据
     */
    watch(() => state.todos, saveTodos, { deep: true });
    return {
      ...toRefs(state),
      addTodo,
      deleteTodo,
      updateTodo,
      updateCompleted,
      clearTodos,
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
