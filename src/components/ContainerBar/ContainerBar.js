import React, { Component } from 'react';

import style from './ContainerBar.scss';

export default class ContainerBar extends Component {
    render() {
        return (
            <div className={style.componentBar}>
                {this.props.children}
            </div>
        )
    }
}
