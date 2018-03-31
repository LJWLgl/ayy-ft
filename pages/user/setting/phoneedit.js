// pages/user/setting/phoneedit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    telephone:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var app = getApp();    
    this.setData({
      telephone: app.globalData.userInfo.telephone
    })
  },
  bindPhoneInputChange: function(e) {
    this.setData({
      telephone: e.detail.value
    })
  },
  editPhone: function(e) {
    var _that = this;
    var app = getApp();
    wx.request({
      url: app.globalData.domain.dev + 'people/telephone/update/',
      method: 'GET',
      data: {
        uid: app.globalData.userInfo.userId,
        telephone: _that.data.telephone
      },
      success: function (res) {
        if (res.data.status != 1) {
          wx.showToast({
            title: res.data.message,
          })
          return;
        }
        app.globalData.userInfo.telephone = _that.data.telephone
        wx.showToast({
          title: '修改成功',
          icon: 'success',
        })
      }
    })
  }
})