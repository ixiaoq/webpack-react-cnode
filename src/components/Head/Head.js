import React, { Component } from 'react';
import { Input } from 'antd';

import style from './head.scss'

export default class Head extends Component {
    render() {

        const Search = Input.Search;

        return (
            <div className={style.headContainer}>
                cnode
                <Search
                    placeholder="input search text"
                    onSearch={value => console.log(value)}
                    style={{ width: 200 }}
                />
            </div>
        )
    }
}
