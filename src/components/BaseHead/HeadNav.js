import React, { Component } from 'react';
import { Menu } from 'antd';


export default class HeadNav extends Component {
    render() {

        const { headNavStyle, navData } = this.props;

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
                style={headNavStyle}
            >
                { navItems }
            </Menu>
        )
    }
}
