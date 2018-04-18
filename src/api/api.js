
const api = {
    // 主题
    // 主题首页 /topics 
    getTopics: 'https://cnodejs.org/api/v1/topics',

    // 主题详情     /topic/:id
    getTopic: 'https://cnodejs.org/api/v1/topic/',
    
    // 新建主题     post /topics
    postTopics: 'https://cnodejs.org/api/v1/topics',

    // 编辑主题     post /topics/update 
    postTopicsUpdate: 'https://cnodejs.org/api/v1/topics/update',


    // 主题收藏
    // 收藏主题     post /topic_collect/collect 
    postTopicCollect: 'https://cnodejs.org/api/v1/topic_collect/collect',

    // 取消收藏主题     post /topic_collect/de_collect    
    postTopicDeCollect: 'https://cnodejs.org/api/v1/topic_collect/de_collect',
    
    // 用户所收藏的主题     get /topic_collect/:loginname 
    getTopicCollect: 'https://cnodejs.org/api/v1/topic_collect/',


    // 评论
    // 新建评论     post /topic/:topic_id/replies 
    postTopic: 'https://cnodejs.org/api/v1/topic/',

    // 为评论点赞   post /reply/:reply_id/ups 
    postReply: 'https://cnodejs.org/api/v1/reply/',


    // 用户
    // 用户详情     get /user/:loginname 
    getUser: 'https://cnodejs.org/api/v1/user/',

    // 验证 accessToken 的正确性        post /accesstoken 
    postAccessToken: 'https://cnodejs.org/api/v1/accesstoken',


    // 消息通知
    // 获取未读消息数           get /message/count 
    getMessageCount: 'https://cnodejs.org/api/v1/message/count',

    // 获取已读和未读消息       get /messages 
    getMessage: 'https://cnodejs.org/api/v1/messages',

    // 标记全部已读             post /message/mark_all 
    postMessageMarkAll: 'https://cnodejs.org/api/v1//message/mark_all',

    // 标记单个消息为已读       post /message/mark_one/:msg_id 
    postMessageMarkById: 'https://cnodejs.org/api/v1/message/mark_one/',
};

export default api;