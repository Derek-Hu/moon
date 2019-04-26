function logProps(InputComponent) {
    InputComponent.prototype.componentWillReceiveProps = function (nextProps) {
        console.log('Current props: ', this.props);
        console.log('Next props: ', nextProps);
    };
    // The fact that we're returning the original input is a hint that it has
    // been mutated.
    return InputComponent;
}

// EnhancedComponent will log whenever props are received
const EnhancedComponent = logProps(InputComponent);

/**
 * 缺点：如果有多个HOC同时修改原始组件，可能导致方法被覆盖
 */








var SubscriptionMixin = {
    getInitialState: function () {
        return {
            comments: DataSource.getComments()
        };
    },

    componentDidMount: function () {
        DataSource.addChangeListener(this.handleChange);
    },

    componentWillUnmount: function () {
        DataSource.removeChangeListener(this.handleChange);
    },

    handleChange: function () {
        this.setState({
            comments: DataSource.getComments()
        });
    }
};

var CommentList = React.createClass({
    mixins: [SubscriptionMixin],

    render: function () {
        // Reading comments from state managed by mixin.
        var comments = this.state.comments;
        return (
            <div>
                {comments.map(function (comment) {
                    return <Comment comment={comment} key={comment.id} />
                })}
            </div>
        )
    },
    submit = () => {

    }
});