### JSX简介
#### JSX中使用表达式
```js
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;

ReactDOM.render(
  element,
  document.getElementById('root')
);
```
#### JSX本身为表达式
```js
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}
```
#### JSX代表着一个对象
以下二者等价：
```js
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);

const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
```
#### JSX能够防止注入攻击
在渲染时，JSX将自动对内容进行编码，防止出现[注入攻击](https://en.wikipedia.org/wiki/Cross-site_scripting)，开发者可以放心使用
```
const title = response.potentiallyMaliciousInput;
// This is safe:
const element = <h1>{title}</h1>;
```
#### JSX语法高亮: [https://babeljs.io/docs/en/editors/](https://babeljs.io/docs/en/editors/)

* Babel VSCode插件 [sublime-babel-vscode](https://marketplace.visualstudio.com/items?itemName=joshpeng.sublime-babel-vscode)