<template>
  <h2>reactive的使用</h2>
  <h3>名字：{{ user.name }}</h3>
  <h3>性别：{{ user.gender }}</h3>
  <h3>年龄：{{ user.age }}</h3>
  <h3>媳妇：{{ user.wife }}</h3>
  <hr>
  <button @click="updateUser"></button>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
export default defineComponent({
  // 组件名
  name: "App",
  setup() {
    // 把数据变成响应式数据
    const obj = {
      name: '小明',
      age: 20,
      wife: {
        name: '小甜甜',
        age: 18,
        cars: ['奔驰', '宝马', '奥迪']
      }
    }
    
    // 返回的是一个Proxy的代理对象 被代理者就是ireactive被传入的对象obj
    // user是现在的代理对象， obj是目标对象
    const user = reactive<any>(obj)

    console.log(user);
    
    /**
     * reactive可以定义多个数据的响应式
     * 只能通过代理对象去操作值
     */
    const updateUser = () => {
      obj.name += 'hahahah'
      // user.name += '==';
      // user.age += 2;
      // user.wife.name += '++';
      // obj.age++;
      // user.wife.cars[0] = '123321';
      // 无法改变
      // obj.gender = '男';
      // 这种方式，目标对象obj也会添加gender属性
      user.gender = '男'
      delete user.age
    }
    // user ---> 代理对象， obj----> 目标对象


    /**
     * 如果操作代理对象， 目标对象中的数据也会随之变化；
     * 需要渲染页面则操作代理对象
     */
    return {
      user,
      updateUser
    }
  }
});
</script>

<style></style>
