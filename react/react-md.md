# 生命周期(React.Component)

## 挂载

当组件实例被创建并插入DOM中时，其生命周期调用顺序如下：

+ ```react
  constructor(props)
  ```

  + **如果不初始化 state 或不进行方法绑定，则不需要为 React 组件实现构造函数。**
  + 在React组件挂载之前，会调用它的构造函数。
  + 在为 React.Component 子类实现构造函数时，应在其他语句之前前调用 `super(props)`。否则，`this.props` 在构造函数中可能会出现未定义的 bug。

+ ```react
  static getDerivedStateFromProps()
  ```

+ ```react
  render()
  ```

+ ```react
  componentDidMount()
  ```

  + `componentDidMount()` 会在组件挂载后（插入 DOM 树中）立即调用。依赖于 DOM 节点的初始化应该放在这里。如需通过网络请求获取数据，此处是实例化请求的好地方。
  + 这个方法是比较适合添加订阅的地方。如果添加了订阅，请不要忘记在 `componentWillUnmount()` 里取消订阅

## 更新

当组件的props或state发生变化时会触发更新，顺序如下：

+ ```react
  static getDerivedStateFromProps()		
  ```

+ ```react
  shouldComponentUpdate()
  ```

+ ```react
  render()
  ```

+ ```react
  getSnapshotBeforeUpdate()
  ```

+ ```react
  componentDidUpdate(prevProps, prevState, snapshot)
  ```

  + `componentDidUpdate()` 会在更新后会被立即调用。首次渲染不会执行此方法。

  + 当组件更新后，可以在此处对 DOM 进行操作。如果你对更新前后的 props 进行了比较，也可以选择在此处进行网络请求。（例如，当 props 未发生变化时，则不会执行网络请求）。

  + ```react
    componentDidUpdate(prevProps) {
      // 典型用法（不要忘记比较 props）：
      if (this.props.userID !== prevProps.userID) {
        this.fetchData(this.props.userID);
      }
    }
    ```

  

## 卸载

当组件从DOM中移出时回调如下方法

+ ```react
  componentWillUnmount()
  ```

  + `componentWillUnmount()` 会在组件卸载及销毁之前直接调用。在此方法中执行必要的清理操作，例如，清除 timer，取消网络请求或清除在 `componentDidMount()` 中创建的订阅等。
  + `componentWillUnmount()` 中**不应调用 `setState()`**，因为该组件将永远不会重新渲染。组件实例卸载后，将永远不会再挂载它。



## 可以在组件中调用的方法

+ ```
  forceUpdate()
  ```

  + 默认情况下，当组件的 state 或 props 发生变化时，组件将重新渲染。如果 `render()` 方法依赖于其他数据，则可以调用 `forceUpdate()` 强制让组件重新渲染。
  + 调用 `forceUpdate()` 将致使组件调用 `render()` 方法，此操作会跳过该组件的 `shouldComponentUpdate()`。但其子组件会触发正常的生命周期方法，包括 `shouldComponentUpdate()` 方法。如果标记发生变化，React 仍将只更新 DOM。
  + 通常你应该避免使用 `forceUpdate()`，尽量在 `render()` 中使用 `this.props` 和 `this.state`。