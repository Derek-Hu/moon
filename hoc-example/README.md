# 简介
1. 高阶组件Higher-Order Components是一种高级技术， 缩写HOC，并不是React API的内容。

具体来说，HOC指的是一个方法，接收一个组件并返回一个新的组件。
```js
const EnhancedComponent = higherOrderComponent(WrappedComponent);
```
组件实际上是将Props属性转换成UI对象，HOC则是将组件转换为另一个新的组件

HOC在许多第三方库中使用，如Redux的connect方法。

本文将介绍HOC的用途，以及如果编写HOC。

#
需要注意的是HOC并没有改变原始组件，也没有使用继承的方式来扩展功能；HOC是一个Pure函数，对原始进行来组合。也正因为HOC是纯函数，因此你可以扩展任意的特性。

HOC和原始组件一样，都是接收属性，因此HOC可以进一步对封装和嵌套。

从HOC角度看，HOC并不关心数据在原始组件中对用途；从原始组件角度看，它并不数据是从哪里来的。

HOC和容器组件很相似，容器组件管理着数据、状态，并传递给相应的组件渲染，容器组件将职责关注点分离；HOC则使用容器组件，可以认为HOC是可定制化的容器组件。

# 
HOC应该与原始组件保持类似的接口，一般将其他属性透传给原始组件：
```js
render() {
  // Filter out extra props that are specific to this HOC and shouldn't be
  // passed through
  const { extraProp, ...passThroughProps } = this.props;

  // Inject props into the wrapped component. These are usually state values or
  // instance methods.
  const injectedProp = someStateOrInstanceMethod;

  // Pass props to wrapped component
  return (
    <WrappedComponent
      injectedProp={injectedProp}
      {...passThroughProps}
    />
  );
}
```

# Compose
HOC的组合，常见的第三方实现有：lodash.flowRight, Redux, and Ramda.

# Display Name
为了更方便调试，如React Developer Tools，需提供displayName。

# 
不要在Render方法里使用HOC

# 
复制原始组件的静态属性

# 
和key属性一样，ref默认都不会传递至原始组件。当使用HOC时，ref指向的时被封装当组件，而不是原始组件

Forward Ref 可以传递DOM元素，也可以传递组件
需要注意类库等兼容性，是一个Breaking Changes

# Migrating from Mixins
[https://reactjs.org/blog/2016/07/13/mixins-considered-harmful.html#migrating-from-mixins](https://reactjs.org/blog/2016/07/13/mixins-considered-harmful.html#migrating-from-mixins)