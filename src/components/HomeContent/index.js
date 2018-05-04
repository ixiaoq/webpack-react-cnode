
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { BackTop } from 'antd';


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

    _getTopics(search) {
        const { tab, page } = getUrlParamObj(search);
        
        if (tab) {
            this.setState({
                ...this.state,
                tab: tab,
                page: parseInt(page) || 1
            });
        }

        let params = {
            tab: tab, 
            page: page, 
            limit: this.state.limit
        }
        
        this.props.getTopics(params);
    }

    _handlerPagination(page) {
        this.props.history.push(`/?tab=${this.state.tab}&page=${page}`);
        this.setState({
            ...this.state,
            page
        });
    }

    render() {

        const { topics } = this.props;
        
        return (
            <div className={style.container}>
                <BackTop/>

                <BaseSider/>
                
                <HContent 
                    topicsData={topics} 
                    urlData={this.state}
                    urlTab={this.state.tab}
                    handlerPagination={(page) => {
                        this._handlerPagination(page);
                    }}
                />
            
            </div>
        )
    }
}

export default connect(state => ({
    topics: state.home
}), {
    getTopics
})(HomeContent);
