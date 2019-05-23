// React Router DOM
const NavbarWithRouter = withRouter(Navbar);
// GraphQL
const CommentWithRelay = Relay.createContainer(Comment, config);


// Redux
const ConnectedComment = connect(commentSelector, commentActions)(CommentList);
// 等价于
// connect is a function that returns another function
const enhance = connect(commentListSelector, commentListActions);
// The returned function is a HOC, which returns a component that is connected
// to the Redux store
const ConnectedComment = enhance(CommentList);


// Instead of doing this...
const EnhancedComponent = withRouter(connect(commentSelector)(WrappedComponent))
// ... you can use a function composition utility
// compose(f, g, h) is the same as (...args) => f(g(h(...args)))
const enhance = compose(
    // These are both single-argument HOCs
    withRouter,
    connect(commentSelector)
)
const EnhancedComponent = enhance(WrappedComponent)

g(f(h(WrappedComponent)))

compose(g, f, h)(WrappedComponent)




