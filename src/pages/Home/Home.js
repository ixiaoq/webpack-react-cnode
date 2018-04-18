
import React, { Component } from 'react';
import { connect } from 'react-redux';

import getTopics from 'actions/home';

// 组件
import Head from 'components/Head/Head';
import Footer from 'components/Footer/Footer';

import style from './home.scss';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            limit: 40
        }
    }

    componentDidMount() {
        this._getTopics();
    }

    myClick() {
        this._getTopics();
    }

    _getTopics() {
        const { page, limit } = this.state;
        this.props.getTopics({page, limit});
        this.setState({
            page: ++this.state.page
        });
    }

    render() {
        let topicsData = this.props.topics;

        let topicsArr = topicsData.topicsList;

        let topicItems = null;
        
        switch (topicsData.isLoad) {
            case 1:
                topicItems = <div>正在加载中...</div>
                break;

            case 2:
                topicItems = topicsArr.map(item => (
                    <li key={item.id.toString()}>{item.title}</li>
                ))       
                break;
            default:
                break;
        }

        return (
            <div className={style.homeContainer}>
                <Head/>
                <ul>{topicItems}</ul>
                <Footer/>
            </div>
        )
    }
}

export default connect(state => ({
    topics: state.home
}), {
    getTopics
})(Home);