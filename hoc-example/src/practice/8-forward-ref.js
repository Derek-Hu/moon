function FancyButton(props, ref) {
    return (
        <button className="FancyButton">
            {props.children}
        </button>
    );
}

// 实现动画、获得焦点、文本选择等

const FancyButton = React.forwardRef((props, ref) => (
    <button ref={ref} key={} className="FancyButton">
        {props.children}
    </button>
));

// You can now get a ref directly to the DOM button:
const ref = React.createRef();
<FancyButton ref={ref}>Click me!</FancyButton>;

// React.forwardRef 可以传递DOM元素，也可以传递组件