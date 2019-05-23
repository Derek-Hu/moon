class extends React.Component {
    EnhancedComponent = enhance(MyComponent)
    render() {
        // A new version of EnhancedComponent is created on every render
        // EnhancedComponent1 !== EnhancedComponent2
        // That causes the entire subtree to unmount/remount each time!
        return <EnhancedComponent />;
    }
}