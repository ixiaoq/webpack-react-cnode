
import React, { Component } from 'react';
import { connect } from 'react-redux';

import getTopics from 'actions/homeContent';

// 组件
import HContent from './components/Content';
import HSider from './components/Sider';

import style from './index.scss';

class HomeContent extends Component {
    constructor(props) {
        super(props);
        // 请求参数
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

        const { topics } = this.props;
        
        return (
            <div className={style.container}>
                {/* <HSider/> */}
                
                <HContent topicsData={topics}/>
            
            </div>
        )
    }
}

export default connect(state => ({
    topics: state.home
}), {
    getTopics
})(HomeContent);
