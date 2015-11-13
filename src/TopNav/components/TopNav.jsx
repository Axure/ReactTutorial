import * as React from 'react';
import PrimaryNav from './PrimaryNav.jsx';

export default class TopNav extends React.Component {

    constructor() {
        super();
    }

    render() {
        console.log('[TopNav]: this.props: ', this.props);
        return (
            <div>
                hi
                <button onClick={this.props.changeStore.bind(this.props.root, 'hah', 'heh')} />

                <PrimaryNav primaryNavList={this.props.items} />
            </div>
        )
    }
}