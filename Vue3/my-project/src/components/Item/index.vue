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
      <input type="checkbox" v-model="isCompleted" />
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="deleteValue">
      删除
    </button>
  </li>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { Todo } from "../../types/todo";

export default defineComponent({
  name: "Item",
  props: {
    todo: {
      type: Object as () => Todo,
      required: true
    },
    index: Number,
    deleteTodo: {
      type: Function,
      required: true,
    },
    updateTodo: {
      type: Function,
      required: true
    }
  },
  setup(props) {
    const bgColor = ref("white");
    const color = ref("black");
    const isShow = ref(false);
    const val = ref(props.index);
    /**
     * 鼠标事件回调
     * @param { Boolean }flag, true: 鼠标进入； false：鼠标移出
     */
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
    const deleteValue = () => {
      if (window.confirm("确定要删除吗？")) {
        props.deleteTodo(val.value);
      }
    };
    const isCompleted = computed({
      get() {
        return props.todo.isCompleted
      },
      set(val) {
        props.updateTodo(props.todo, val)
      }
    })
    return {
      mouseHandler,
      bgColor,
      color,
      isShow,
      deleteValue,
      isCompleted
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
