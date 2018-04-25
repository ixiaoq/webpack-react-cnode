import React, { Component } from 'react';

import { Layout } from 'antd';
const { Header, Content, Sider, Footer } = Layout;

// 组件
import Head from 'components/Head/Head';
import HomeContent from 'components/HomeContent';
import Foot from 'components/Footer/Footer';

import style from './home.scss';


class Home extends Component {
    render() {
        return (
            <div className={style.homeContainer}>
                <Layout>
                    <Header>
                        <Head/>
                    </Header>
                    
                    <Content>
                        <HomeContent/>
                    </Content>

                    <Footer>
                        <Foot/>
                    </Footer>
                </Layout>
            </div>
        )
    }
}

export default Home;