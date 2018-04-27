import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch, hashHistory } from 'react-router-dom';

import style from './Content.scss';

import ContainerBar from 'components/ContainerBar/ContainerBar';



const tagTab = [
  { tab: "all", name: "全部" },
  { tab: "good", name: "精华" },
  { tab: "share", name: "分享" },
  { tab: "ask", name: "问答" },
  { tab: "job", name: "招聘" },
  { tab: "dev", name: "测试" }
];

class ContentNav extends Component {
    render() {
        return (
            <div className="nav">
                {tagTab.map((item) => (
                    <NavLink to={`/?tab=${item.tab}`} key={item.tab}>{item.name}</NavLink>
                ))}
            </div>
        )
    }
}

class ContentItems extends Component {
    render() {

        let { topicItem } = this.props;

        let { id, tab, good, top, author } = topicItem;

        let keyName = top ? "置顶" : good ? "精华" : tab;

        return (
            <div>
                <img className={style.iconImg} src={topicItem.author.avatar_url} alt={author.loginname}/>
                <span>
                    {keyName}
                </span>
                {`${topicItem.reply_count} / ${topicItem.visit_count}`}
                {topicItem.title}
            </div>
        )
    }
}



export default class Content extends Component {

    render() {
        
        let { topicsData } = this.props;

        let { isLoad, topicsList, errorMsg } = topicsData;

        let topicItems = [];

        // 请求加载状态
        if (isLoad == 1) {
            topicItems = <div>正在加载中...</div>
        }
        else if (isLoad == 2) {
            topicItems = topicsList.map(item => (
                <ContentItems topicItem={item} key={item.id}/>
            ));
        }

        return (
            <div className={style.contentBar}>
                <ContainerBar>
                    <ContentNav/>
                    
                    <div>
                        { topicItems }
                    </div>
                    
                </ContainerBar>
            </div>
        )
    }
}