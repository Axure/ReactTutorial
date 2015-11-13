import * as React from 'react';
import {Components} from 'react';

export default class PrimaryNav extends React.Component {

    constructor() {
        super();
    }

    render() {
        const items = this.props.primaryNavList.map((item) => {
            return (
                <PrimaryNavItem item={item} />
            )
        });

        return (
            <ol>
                {items}
            </ol>
        )
    }
}

export class PrimaryNavItem extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <li>
                <a href={this.props.item.url}>{this.props.item.text}</a>
            </li>
        )
    }
}