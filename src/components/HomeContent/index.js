
import React, { Component } from 'react';
import { connect } from 'react-redux';

import getTopics from 'actions/homeContent';
import { getUrlParamObj } from 'utils/utils';

// 组件
import HContent from './Content';
import BaseSider from 'components/BaseSider/BaseSider';

import style from './index.scss';

class HomeContent extends Component {
    constructor(props) {
        super(props);
        // 请求参数
        this.state = {
            tab: "all",
            page: 1,
            limit: 40
        }
    }

    componentDidMount() {
        this._getTopics(this.props.location.search);
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.location != prevProps.location) {
            this._getTopics(this.props.location.search);
        }
    }

    myClick() {
        this._getTopics(this.props.location.search);
    }

    _getTopics(search) {
        const searchParam = getUrlParamObj(search);

        if ("tab" in searchParam) {
            this.setState({
                ...this.state,
                searchParam
            });
        }
        
        this.props.getTopics(this.state);
    }

    render() {

        const { topics } = this.props;
        
        return (
            <div className={style.container}>
                {/* <BaseSider/> */}
                
                <HContent topicsData={topics} />
            
            </div>
        )
    }
}

export default connect(state => ({
    topics: state.home
}), {
    getTopics
})(HomeContent);
