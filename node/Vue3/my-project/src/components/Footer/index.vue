<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isCompleted" />
    </label>
    <span>
      <span>已完成{{ count }}</span> / 全部{{ todos.length }}
    </span>
    <button class="btn btn-danger" @click="clearTodos">清除已完成任务</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { Todo } from "../../types/todo";
export default defineComponent({
  name: "Footer",
  props: {
    updateCompleted: {
      type: Function,
      required: true,
    },
    todos: {
      type: Object as () => Todo[],
      required: true,
    },
    clearTodos: {
      type: Function,
      required: true
    }
  },
  setup(props) {
    const count = computed(() => {
      return props.todos.reduce(
        (pre, todo) => pre + (todo.isCompleted ? 1 : 0),
        0
      );
    });
    const isCompleted = computed({
      get() {
        return count.value > 0 && props.todos.length === count.value;
      },
      set(val) {
        props.updateCompleted(val);
      },
    });
    return {
      isCompleted,
      count,
    };
  },
});
</script>

<style scoped>
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
