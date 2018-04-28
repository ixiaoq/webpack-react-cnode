import React, { Component } from 'react';

import { Layout } from 'antd';
const { Header, Content, Sider, Footer } = Layout;

// 组件
import BaseHead from 'components/BaseHead/BaseHead';
import HomeContent from 'components/HomeContent';
import BaseFooter from 'components/BaseFooter/BaseFooter';

import style from './home.scss';


class Home extends Component {
    render() {

        let { history, location, match } = this.props;

        return (
            <div className={style.homeContainer}>
                <Layout>
                    <Header>
                        <BaseHead/>
                    </Header>
                    
                    <Content>
                        <HomeContent history={history} location={location} match={match}/>
                    </Content>

                    <Footer>
                        <BaseFooter/>
                    </Footer>
                </Layout>
            </div>
        )
    }
}

export default Home;