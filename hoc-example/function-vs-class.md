[https://medium.com/@Zwenza/functional-vs-class-components-in-react-231e3fbd7108](https://medium.com/@Zwenza/functional-vs-class-components-in-react-231e3fbd7108)

1. Babel 转换后对结果不一样
2. function是无状态的，不能使用setState()，而class是有状态的，可以使用;
3. LifeCycle函数，function不能注册，而class可以

不过React 16.8 Hooks特性出来后，function也可以使用useState来维护状态，可以使用useEffect来关联LifeCycle

Function的优点：
1. function 更加容易测试
2. 代码量更少
3. 分离关注点，function常用来作为展示组件
4. function性能更好