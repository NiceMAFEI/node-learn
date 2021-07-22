<template>
  <div class="todo-header">
    <input type="text" v-model="title" placeholder="请输入你的内容，按回车确定" @keydown.enter="add"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Header",
  props: {
    addTodo: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    const title = ref('');
    const add = () => {
      const value = title.value;
      const todo = {
        title: value,
        id: Date.now(),
        isCompleted: false
      }
      props.addTodo(todo);
      title.value = ''
    }
    return {
      title,
      add
    };
  },
});
</script>

<style scoped>
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4ox 7px;
}
.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>
