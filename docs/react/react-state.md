# State

1. 只能在构造器`constructor`中初始化`state`
```js
constructor(props) {
    super(props);
    this.state = {date: new Date()};
}
```

2. 修改`state`需调用`setState`方法，直接修`state`并不能导致界面重绘，更新UI
```js
// Wrong
this.state.comment = 'Hello';

// Correct
this.setState({comment: 'Hello'});
```
3. 可以单独更新`state`中某一个状态信息，React将合并`state`的各个更新
```js
constructor(props) {
    super(props);
    this.state = {
      posts: [],
      comments: []
    };
}
componentDidMount() {
    fetchPosts().then(response => {
        this.setState({
            posts: response.posts
        });
    });

    fetchComments().then(response => {
        this.setState({
            comments: response.comments
        });
    });
}
```

4. `state`状态更新是异步的
* React基于性能考虑，可能将多个`setState`调用合并为一个
* 由于`this.props`和`this.state`的更新可能是异步的，不能依赖它们来进行`state`状态的更新

如下代码可能会执行失败
```js
// Wrong
this.setState({
  counter: this.state.counter + this.props.increment,
});
```
可以使用如下写法来修复此问题
```js
// Correct
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));

// Correct
this.setState(function(state, props) {
  return {
    counter: state.counter + props.increment
  };
});
```
然而以下代码仍然存在潜在的问题
```js
// Capturing values from the state outside of the setState callback.
let previousFoo = this.state.foo;
this.setState(function incrementFoo(previousState) {
    // BAD! Setting `foo` based on a potentially outdated
    // view of its current value: `foo` may have been updated
    // in the meantime by another call to `setState`.
    return { ...previousState, foo: previousFoo + 10 };
});
```
可以使用如下方法解决
```js
function incrementFooBy(delta) {
    return (previousState, currentProps) => {
        return { ...previousState, foo: previousState.foo + delta };
    };
}
class MyComponent extends React.Component {
    onClick = () => {
        this.setState(incrementFooBy(42));
    }
    render() {
        return <button onClick={onClick}>click me</button>;
    }
}
```

如下代码可演示`setState`异步行为
```js
import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        };
    }

    componentDidMount() {
        // Automatically update the state every 3 seconds.
        setInterval(this.updateState, 3000);
        // Update the state on mouse-down.
        // --
        // NOTE: We are implementing our own event binding here - not using the
        // React Element props to manage the event handler.
        document.getElementById('span')
            .addEventListener("mousedown", this.updateState)
            ;
    }

    tick() {
        this.setState({
            date: this.state.date + 100000
        });
    }

    updateState = (event) => {
        console.log("= = = = = = = = = = = =");
        console.log("EVENT:", (event ? event.type : "timer"));
        console.log("Pre-setState:", this.state.counter);
        this.setState({
            counter: (this.state.counter + 1)
        });
        console.log("Mid-setState:", this.state.counter);
        this.setState({
            counter: (this.state.counter + 1)
        });
        console.log("Post-setState:", this.state.counter);
    }
    render() {
        return (
            <div>
                <span id="span" onClick={this.updateState} className="button">"Counter at " + {this.state.counter}</span>
                <h1>Hello, world!</h1>
            </div >
        );
    }
}

ReactDOM.render(
    <Clock />,
    document.getElementById('root')
);
```