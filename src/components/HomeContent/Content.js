import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import { Pagination, Spin  } from 'antd';

import style from './Content.scss';

import ContainerBar from 'components/ContainerBar/ContainerBar';



const tagTab = {
    index: {
        all: 0,
        good: 1,
        share: 2,
        ask: 3,
        job: 4
    },
    data: [
        { tab: "all", name: "全部" },
        { tab: "good", name: "精华" },
        { tab: "share", name: "分享" },
        { tab: "ask", name: "问答" },
        { tab: "job", name: "招聘" },
        { tab: "dev", name: "测试客户端" }
    ]
};

class ContentNav extends Component {
    render() {

        let { tab } = this.props;

        return (
            <div className={style.contentNav}>
                {tagTab.data.map((item) => (
                    <NavLink 
                        className={`${style.tipcTag} ${(tab === item.tab) && style.currentTag}`}
                        to={`/?tab=${item.tab}`} 
                        key={item.tab} >
                        {item.name}
                    </NavLink>
                ))}
            </div>
        )
    }
}

class ContentItems extends Component {

    handlerTab(tagTabs, tab) {
        let { index, data } = tagTabs;
        
        if (!tab) return "";

        return data[index[tab]].name;
    }

    render() {

        let { topicItem } = this.props;

        let { id, tab, good, top, author, title } = topicItem;

        let keyName = "";
        let isActive = true;

        if (top) {
            keyName = "置顶";
        } 
        else if (good) {
            keyName = "精华";
        } 
        else {
            keyName = this.handlerTab(tagTab, tab);
            isActive = false;
        }

        // 参加类名
        var tabClassName = `${style.tipcTab} ${(isActive ? style.tipcActive : "")}`;


        return (
            <div className={style.contWrap}>
                <div className={style.itemImg} >
                    <img src={topicItem.author.avatar_url} title={author.loginname}/>
                </div>

                <div className={style.replyCount}>
                    {`${topicItem.reply_count} / ${topicItem.visit_count}`}
                </div>

                <span className={tabClassName}>
                    {keyName}
                </span>
                
                <div className={style.contentTile}>{title}</div>
            </div>
        )
    }
}



export default class Content extends Component {

    render() {
        
        let { topicsData, urlData, handlerPagination } = this.props;

        let { isLoad, topicsList, errorMsg } = topicsData;

        let topicItems = [];

        // 请求加载状态
        if (isLoad == 1) {
            topicItems = <Spin/>
        }
        else if (isLoad == 2) {
            topicItems = topicsList.map(item => (
                <ContentItems topicItem={item} key={item.id}/>
            ));
        }

        return (
            <div className={style.contentBar}>
                <ContainerBar>
                    <ContentNav tab={urlData.tab} />
                    
                    <div className={style.topicsList}>
                        { topicItems }
                    </div>
                    
                    <Pagination className={style.pagination} 
                        current={urlData.page} 
                        defaultCurrent={urlData.page} 
                        total={500} 
                        onChange={(page) => {
                            handlerPagination(page);
                        }}
                    />

                </ContainerBar>
            </div>
        )
    }
}