import * as React from 'react';

import TopNav from './TopNav.jsx';

export default class StateContainer extends React.Component {

    constructor () {
        super();

        this.state = {
            test: 1,
            test2: 2,
            items: [
                {
                    url: 'http://baidu.com',
                    text: 'baidu'
                },
                {
                    url: 'http://baidu.com',
                    text: 'baidu'
                }
            ]
        };

    }

    changeState(key, value) {
        console.log(this);
        this.state[key] = value;
        console.log(this);
    }

    render() {
        return (
            <TopNav {...this.state} changeStore={this.changeState} root={this}/>
        )
    }
}