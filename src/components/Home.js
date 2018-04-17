
import React, { Component } from 'react';
import { connect } from 'react-redux';

import getTopics from '../actions/home'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            limit: 10
        }
    }

    myClick() {
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
            <div>
                <button onClick={() => this.myClick()}>get</button>
                <ul>{topicItems}</ul>
            </div>
        )
    }
}

export default connect(state => ({
    topics: state.home
}), {
    getTopics
})(Home);