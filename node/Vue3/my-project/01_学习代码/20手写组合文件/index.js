/**
 * shallowReactive 与 reactive
 */

// 定义一个reactiveHandler处理对象
const reactiveHandler = {
  // 获取值
  get(target, prop) {
    const reslut = Reflect.get(target, prop);
    console.log("劫持了读取属性", prop, target);
    return reslut;
  },
  set(target, prop, value) {
    const reslut = Reflect.set(target, prop, value);
    console.log("劫持了修改属性", prop, target, value);
    return reslut;
  },
  deleteProperty(target, prop) {
    const reslut = Reflect.deleteProperty(target, prop);
    console.log("劫持了删除属性", prop, target);
    return reslut;
  },
};
/**
 * shallowReactive
 */
function shallowReactive(target) {
  // 判断当前的目标对象是不是object类型(对象/数组)
  // 如果传入的数据，是一个基本类型------>直接返回
  if (target && typeof target === "object") {
    return new Proxy(target, reactiveHandler);
  }
  return target;
}
/**
 * reactive
 */
function reactive(target) {
  // 判断当前的目标对象是不是object类型(对象/数组)
  // 如果传入的数据，是一个基本类型------>直接返回
  if (target && typeof target === "object") {
    // 对数组或是对象中的所有数据进行reactive的递归处理
    // 判断当前数据是不是数组
    if (Array.isArray(target)) {
      // 数组数据遍历
      target.forEach((item, index) => {
        target[index] = reactive(item);
      });
    } else {
      // 当前的数据是不是对象
      Object.keys(target).forEach((key) => {
        target[key] = reactive(target[key]);
      });
    }

    target = new Proxy(target, reactiveHandler);
  }
  return target;
}

/**
 * shallowReadonly  与  readonly
 */
const readonlyHandler = {
  get(target, prop) {
    const reslut = Reflect.get(target, prop);
    console.log("拦截到读取数据", target, prop);
    return reslut;
  },
  set(target, prop, value) {
    console.warn("只能读取");
    return true;
  },
  deleteProperty(target, prop) {
    console.warn("只能读取");
    return true;
  },
};

/**
 * shallowReadonly
 */
function shallowReadonly(target) {
  if (target && typeof target === "object") {
    return new Proxy(target, readonlyHandler);
  }
  return target;
}

/**
 * readonly
 */
function readonly(target) {
  if (target && typeof target === "object") {
    if (Array.isArray(target)) {
      target.forEach((item, index) => {
        target[index] = readonly(item);
      });
    } else {
      Object.keys(target).forEach((key) => {
        target[key] = readonly(target[key]);
      });
    }
    return new Proxy(target, readonlyHandler);
  }
  return target;
}

/**
 * shallowRef 和 ref
 */

/**
 * shallowRef
 */

function shallowRef(target) {
  return {
    // 保存target数据
    _value: target,
    get value() {
      console.log("劫持到了读取数据");
      return this._value;
    },
    set value(val) {
      console.log("劫持到了修改数据");
      this._value = value;
    },
  };
}

/**
 * ref
 */

function ref(target) {
    target = reactive(target)
    return {
    // 保存target数据
    _value: target,
    get value() {
      console.log("劫持到了读取数据");
      return this._value;
    },
    set value(val) {
      console.log("劫持到了修改数据");
      this._value = value;
    },
  };
}
