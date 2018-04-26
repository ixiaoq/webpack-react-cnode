import React, { Component } from 'react';
import { Input } from 'antd';

import HeadNav from './HeadNav';

import style from './head.scss';


export default class Head extends Component {
    render() {
        
        const navData = [{
            id: 0,
            title: "首页", 
            link: '/'
        },{
            id: 1,
            title: "未读消息", 
            link: '/message'
        },{
            id: 2,
            title: "新手入门", 
            link: '/introduction'
        },{
            id: 3,
            title: "API", 
            link: '/api'
        },{
            id: 4,
            title: "关于", 
            link: '/about'
        },{
            id: 5,
            title: "注册", 
            link: '/register'
        },{
            id: 6,
            title: "登录", 
            link: '/login'
        }];

        let headNavStyle = {
            display: "flex",
            justifyContent: "flex-end",
            flex: 1
        }

        const Search = Input.Search;

        return (
            <div className={style.headContainer}>
                <a href="/" className={style.logo}>
                    <img src="//o4j806krb.qnssl.com/public/images/cnodejs_light.svg" />
                </a>

                <Search
                    placeholder="input search text"
                    onSearch={value => console.log(value)}
                    style={{ width: 200, height: 30 }}
                />

                <HeadNav navData={navData} headNavStyle={headNavStyle} />
            </div>
        )
    }
}
