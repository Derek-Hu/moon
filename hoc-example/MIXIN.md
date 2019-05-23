[https://reactjs.org/blog/2016/07/13/mixins-considered-harmful.html](https://reactjs.org/blog/2016/07/13/mixins-considered-harmful.html)

Mixin虽然被广泛的使用，但是它的弊端也越来越凸显，使用代码难以维护

# Mixin的缺点
1. 原始组件与Mixin的互相依赖，由于JavaScript的灵活性，依赖不能很好的文档化
例如：原始组件依赖某一Mixin的getClassName()方法； Mixin依赖组件的renderHeader()方法

2. Mixin的使用，使的组件属性或方法的更改困难
例如，重构时，需要将组件的状态提升，是的兄弟组件也可访问改状态；或者属性或方法需要重命名，你不能简单的通过将组件内的属性或方法重命名即可，因为Mixin可能使用了某个属性

3. Mixin的使用，使得组件方法的实现难以定位
例如，组件render方使用了Mixin某个方法calculate()，你必须从所有的Mixin中去查找该方法的实现，由于Mixin可能依赖其他Mixin，使得定位更加困难

4. Mixin之间的依赖关系不清晰
由于Mixin之间是扁平化的结构，存在于统一空间下，它们之间可以互相依赖，依赖结构模糊，删除其中某一个，可能导致其他Mixin的编译失败；同时也使得数据流向模糊。

5. 使得命名困难，容易导致冲突
由于Mixin之前的命名可能冲突，你无法保证多个Mixin同时使用可以正常工作。
例如：FluxListenerMixin 中定义了handleChange()， WindowSizeMixin也定义了handleChange()，那么它们不能同时使用，同时组件中也不能再定义handleChange()

另外，组件和Mixin增加方法或重命名方法，都可能导致命名冲突，或者运行失败。

