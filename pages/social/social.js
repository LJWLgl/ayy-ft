// pages/social/social.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data:[
      {
        talkId:1,
        lookCount:4343,
        commentCount:555
      },
      {
        talkId:2,
        lookCount: 54,
        commentCount: 6
      },
      {
        talkId: 1,
        lookCount: 4343,
        commentCount: 555
      },
      {
        talkId: 2,
        lookCount: 54,
        commentCount: 6
      },
      {
        talkId: 1,
        lookCount: 4343,
        commentCount: 555
      },
      {
        talkId: 2,
        lookCount: 54,
        commentCount: 6
      },
      {
        talkId: 1,
        lookCount: 4343,
        commentCount: 555
      },
      {
        talkId: 2,
        lookCount: 54,
        commentCount: 767
      }
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