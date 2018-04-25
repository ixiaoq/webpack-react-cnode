
import React, { Component } from 'react';
import { connect } from 'react-redux';

import getTopics from 'actions/homeContent';

// 组件
import HContent from './components/Content';
import HSider from './components/Sider';



class HomeContent extends Component {
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

    _headlerTopicsDom(isLoad, topicsArr) {
        // 请求加载状态
        if (isLoad == 1) {
            return <div>正在加载中...</div>
        }
        else if (isLoad == 2) {
            return topicsArr.map(item => (
                <div key={item.id.toString()}>{item.title}</div>
            ));
        }
    }

    render() {
        let topicsData = this.props.topics;
        let topicsArr = topicsData.topicsList;

        let topicItems = this._headlerTopicsDom(topicsData.isLoad, topicsArr);
        
        return (
            <div>
                <HContent topicsData={topicItems}/>
            
                <HSider/>
            </div>
        )
    }
}

export default connect(state => ({
    topics: state.home
}), {
    getTopics
})(HomeContent);
