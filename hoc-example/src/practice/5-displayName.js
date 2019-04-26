function withSubscription(WrappedComponent) {
    class WithSubscription extends React.Component {/* ... */ }
    WithSubscription.displayName = `WithSubscription(${getDisplayName(WrappedComponent)})`;
    return WithSubscription;
}

function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

class WrappedComponent extends React.Component {
    static MAX_LEN = 100;
}

export default withSubscription(WrappedComponent);

import WrappedComponent from '...';

WrappedComponent.MAX_LEN;