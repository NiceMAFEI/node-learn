<template>
  <li
    @mouseenter="mouseHandler(true)"
    @mouseleave="mouseHandler(false)"
    :style="{ backgroundColor: bgColor, color: color }"
  >
    <label>
      <!-- 
        <input type="checkbox" v-model="todo.isCompleted">
        会报错，显示props的值被修改了。
       -->
      <input type="checkbox" :checked="todo.isCompleted" />
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow">删除</button>
  </li>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Todo } from "../../types/todo";

export default defineComponent({
  name: "Item",
  props: {
    todo: Object as () => Todo,
  },
  setup() {
    const bgColor = ref("white");
    const color = ref("black");
    const isShow = ref(false);
    const mouseHandler = (flag: boolean) => {
      if (flag) {
        bgColor.value = "pink";
        color.value = "green";
        isShow.value = true;
      } else {
        bgColor.value = "white";
        color.value = "black";
        isShow.value = false;
      }
    };
    return {
      mouseHandler,
      bgColor,
      color,
      isShow,
    };
  },
});
</script>

<style scoped>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px;
  cursor: pointer;
}
li label {
  float: left;
  cursor: pointer;
}
li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  margin-top: 3px;
}

li::before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>
