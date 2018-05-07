import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;

// css
import style from './app.scss';

// 组件
import BaseHead from 'components/BaseHead/BaseHead';
import BaseFooter from 'components/BaseFooter/BaseFooter';

import RouterMap from 'router';


class App extends Component {
    render() {

        return (
            <Layout>
                <Header className={style.baseHead}>
                    <BaseHead/>
                </Header>
                
                <Content>
                    <RouterMap />
                </Content>

                <Footer>
                    <BaseFooter/>
                </Footer>
            </Layout>
        )
    }
}

export default hot(module)(App);