<template>
  <h2>计算属性和监视</h2>
  <fieldset>
    <legend>姓名操作</legend>
    姓氏：<input
      type="text"
      placeholder="请输入姓氏"
      v-model="user.firstName"
    /><br />
    名字：<input
      type="text"
      placeholder="请输入名字"
      v-model="user.lastName"
    /><br />
  </fieldset>
  <fieldset>
    <legend>计算属性和监视的演示</legend>
    姓氏：<input type="text" placeholder="显示姓名" v-model="fullName1" /><br />
    名字：<input type="text" placeholder="显示姓名" v-model="fullName2" /><br />
    姓氏：<input type="text" placeholder="显示姓名" v-model="fullName3" /><br />
  </fieldset>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  reactive,
  computed,
  watch,
  watchEffect,
} from "vue";
export default defineComponent({
  // 组件名
  name: "App",
  setup() {
    // 响应式对象
    const user = reactive({
      firstName: "东方",
      lastName: "树叶",
    });
    // 通过计算属性的方式，实现第一个姓名的显示
    // Vue3中的计算属性
    // 计算属性的函数中只传入一个函数，表示get

    // 第一个姓名：
    // 返回的时一个ref类型的对象
    // 计算属性
    const fullName1 = computed(() => {
      return user.firstName + "_" + user.lastName;
    });

    // 第二个姓名：
    // 计算属性
    const fullName2 = computed({
      get() {
        return user.firstName + "_" + user.lastName;
      },
      set(value: string) {
        const names = value.split("_");
        user.firstName = names[0];
        user.lastName = names[1];
      },
    });

    // 第三个姓名：
    const fullName3 = ref("");
    // 监视，watch
    /**
     * @param { Object } user, 要监视的对象
     * @param { Function }fn, 回调函数
     * @param { Object } options, 监视的配置
     */
    watch(
      user,
      ({ firstName, lastName }) => {
        fullName3.value = firstName + "_" + lastName;
      },
      { immediate: true, deep: true }
    );

    // 监视
    /**
     * 这种监视，不需要配置immediate,默认监视第一次的值
     */
    // watchEffect(() => {
    //   fullName3.value = user.firstName + "_" + user.lastName;
    // });

    watch([user.firstName, user.lastName, fullName3], () => {
      console.log('=-=-=-==-');
      
    })

    return {
      user,
      fullName1,
      fullName2,
      fullName3,
    };
  },
});
</script>

<style></style>
