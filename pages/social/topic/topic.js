// pages/social/topic/topic.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    topic:{
        talkId: 1,
        title: '求购这样一本高数考研试卷',
        publisher: '吕小布',
        desc: '着急感谢',
        lookCount: 78,
        commentCount: 3,
      },
    imageList:[
      {
        src:"http://nanxuan.qiniuts.com/UI-design-1.jpeg"
      },
      {
        src: "http://nanxuan.qiniuts.com/UI-design-1.jpeg"
      }
    ],
    comments:[
      {
        avatar: "https://wx.qlogo.cn/mmopen/vi_32/rV89A0mRdWSeWIDmPTPUcdicbupBhLTbbLvWIxplFs2CpHa2Fr1iaq9OWe1SA001RIVUhTbwA7HUCFoOaujOlv1w/0",
        username:"篮球王子",
        content: "我这里有一个",
        date: "06-05"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})