Page({
  onLoad: function (options) {
    this.userDetail()
  },
  data: {
    index: 0,
    schools: ["安徽师范大学", "安徽工程大学", "皖南医学院"]
  },
  jumpToSetting: function(e) {
    wx.navigateTo({
      url: 'setting/setting',
    })
  },
  jumpTomytrace: function(e) {
    wx.navigateTo({
      url: 'mytrace/mytrace?type=' + e.currentTarget.id,
    })
  },
  schoolSelect: function(e) {
    this.setData({
      index: e.detail.value
    });
  },
  userDetail: function(e) {
    var app = getApp();
    var _that = this
    wx.request({
      url: app.globalData.domain.dev + 'people/detail/',
      method: 'GET',
      data: {
        uid: app.globalData.userInfo.userId
      },
      success: function(res) {
        console.log(res);
      }
    })
  }
})