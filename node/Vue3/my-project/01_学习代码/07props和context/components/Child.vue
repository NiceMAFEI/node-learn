<template>
  <h2>Child子级组件</h2>
  <h2>{{ msg }}</h2>
  <button @click="emitXxx"></button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  // 组件名
  name: "Child",
  props: ["msg"],
  emits: {
    xxx<T>(payload: T): T{
      // validate payload by returning a boolean
      return payload
    }
  },
  beforeCreate() {
    console.log("beforeCreate执行了");
  },
  // setup细节问题：
  /**
   *  - 1.setup执行的时机
   *
   *      ：setup实在beforeCreate生命周期回调之前就执行， 而且就执行一次
   *      : setup在执行的时候，当前组件还未创建。
   *      ：组件实例对象还无法使用, this 为undefined
   *      ：不同通过this再去调用data/computed/methods/props中的相关内容
   *      ：其实所有的 composition Api相关的回调函数也都不可以使用
   *
   *  - 2.setup的返回值
   *
   *      ：setup中的返回值是一个对象，内部的属性和方法是给html模板使用的
   *      ：setup中的返回对象中的属性和data函数中的对象中的属性会合并为组件对象的属性
   *      ：setup中的返回对象中的方法和methods中的方法会合并为组件的方法
   *      ：Vue3中尽量不要混合使用
   *      ：setup不能是一个async函数：应为返回值不再是return对象，而实promise, 模板看不到return对象中的属性数据
   */
  setup(props, context) {
    /**
     * - prop参数， 是一个proxy对象，里面有父级组件向子级组件传递的数据，并且是子级组件中使用props接收到的所有属性
     * - context参数， 是一个对象，里面有attrs对象,emit方法(分发事件的)，slots对象(插槽)
     *    attrs对象：获取当前组件标签上的所有的属性的对象，但是该属性时props中没有申明接受的所有的
     *    emit方法用来自定义事件的函数，相当于this.$emit
     */
    console.log(props, context);
    console.log(context.attrs.msg2);

    console.log("setup!执行了", this);

    function emitXxx() {
      context.emit('xxx', '+++')
    }

    return {
      emitXxx
      // setup一般是返回一个对象， 返回的属性和方法可以直接在html中使用
    };
  },
});
</script>

<style></style>
