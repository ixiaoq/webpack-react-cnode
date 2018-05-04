import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import { Pagination, Spin  } from 'antd';

import { formatDate } from 'utils/utils';

import style from './Content.scss';

import ContainerBar from 'components/ContainerBar/ContainerBar';



const tagTab = [
    { tab: "all", name: "全部" },
    { tab: "good", name: "精华" },
    { tab: "share", name: "分享" },
    { tab: "ask", name: "问答" },
    { tab: "job", name: "招聘" },
    { tab: "dev", name: "测试客户端" }
];

class ContentNav extends Component {
    render() {

        let { tab } = this.props;

        return (
            <div className={style.contentNav}>
                {tagTab.map((item) => (
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

    handlerTab(tabList, tab) {
        if (!tab) return "";

        return tabList.filter((item) => {
            return item.tab === tab;
        })[0].name;
    }

    render() {

        let { topicItem, urlTab } = this.props;

        let { id, tab, good, top, author, title, last_reply_at } = topicItem;
        
        let keyName = "";
        let isActive = true;
        let lastTime = formatDate(last_reply_at);

        if (top) {
            keyName = "置顶";
        } 
        else {

            if (urlTab === "dev") {
                keyName = "";
            } 
            else {
                
                if (good) {
                    keyName = "精华";
                } 
                else {
                    keyName = this.handlerTab(tagTab, tab);
                    isActive = false;
                }
            }
        }

        // 参加类名
        var tabClassName = `${style.tipcTab} ${(isActive ? style.tipcActive : "")}`;

        let tabBtn = "";
        if (keyName) {
            tabBtn = <span className={tabClassName}>
                {keyName}
            </span>
        }

        return (
            <div className={style.contWrap}>
                <a className={style.itemImgWarp} href="javascript:;">
                    <img src={topicItem.author.avatar_url} title={author.loginname}/>
                </a>

                <div className={style.replyCount}>
                    {`${topicItem.reply_count} / ${topicItem.visit_count}`}
                </div>

                <div className={style.itemTime}>
                    {lastTime}
                </div>

                <div className={style.itemContent}>
                    {tabBtn}
                    
                    <a className={style.contentTile} href="javascript:;" title={title}>
                        {title}
                    </a>
                </div>

            </div>
        )
    }
}



export default class Content extends Component {

    render() {
        
        let { topicsData, urlData, handlerPagination, urlTab } = this.props;

        let { isLoad, topicsList, errorMsg } = topicsData;

        let topicItems = [];

        // 请求加载状态
        if (isLoad == 1) {
            topicItems = <div className={style.modal}><Spin tip="加载中..." /></div>
        }
        else if (isLoad == 2) {
            topicItems = topicsList.map(item => (
                <ContentItems topicItem={item} key={item.id} urlTab={urlTab}/>
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