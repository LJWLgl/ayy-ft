// pages/social/social.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data:[
      {
        talkId:1,
        title:'求购这样一本高数考研试卷',
        publisher: '吕小布',
        desc: '着急感谢',
        lookCount:78,
        commentCount:3,
      },
    ]
  },
  onLoad: function (options) {
  
  },

  onReady: function () {

  },

  publishTopic: function (e) {
    wx.navigateTo({
      url: 'release/release',
    })
  }
})