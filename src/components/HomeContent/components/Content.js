import React, { Component } from 'react';

import style from './Content.scss';


export default class Content extends Component {
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
        
        let { topicsData } = this.props;
        let topicsArr = topicsData.topicsList;

        let topicItems = this._headlerTopicsDom(topicsData.isLoad, topicsArr);

        return (
            <div className={style.content}>
                {topicItems}
            </div>
        )
    }
}