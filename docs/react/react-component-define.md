---
title: React Component
order: 1
category: React
---
React Component接收数据输入，并返回用于界面需要显示的元素

### Function Style定义
```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

### Class Style定义
```js
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

注意：组件名称必须以大写字母开头。
* `<div/>` 表示一个HTML标签
* `<Welcome />` 表示一个React组件

**组件应该使用纯函数的风格，不修改传入的参数props，**