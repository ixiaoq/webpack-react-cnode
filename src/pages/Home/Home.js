import React, { Component } from 'react';

import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;

import style from './home.scss';

// 组件
import HomeContent from 'components/HomeContent';

class Home extends Component {
    render() {

        let { history, location, match } = this.props;

        console.log(this.props);

        return (
            <div className={style.homeContainer}>
                
                <HomeContent history={history} location={location} match={match}/>
                
            </div>
        )
    }
}

export default Home;