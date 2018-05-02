import React, { Component } from 'react';
import { Menu } from 'antd';

import style from './BaseHead.scss';

export default class HeadNav extends Component {
    render() {

        const { navData } = this.props;

        const navItems = navData.map((item, index) => {
            return (
                <Menu.Item key={index}>
                    <a href={item.link} title={item.title}>
                        {item.title}
                    </a>
                </Menu.Item>
            );
        });

        return (
            <Menu 
                mode="horizontal" 
                theme="dark"
                className={style.headNavStyle}
            >
                { navItems }
            </Menu>
        )
    }
}
