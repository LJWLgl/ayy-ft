// pages/user/setting/addressedit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var app = getApp();
    this.setData({
      address: app.globalData.userInfo.shipAddress
    })
  },
  onReady: function() {
    var app = getApp();
    this.setData({
      address: app.globalData.userInfo.shipAddress
    })
  },
  bindAddressInputChange: function (e) {
    this.setData({
      address: e.detail.value
    })
  },
  editAddress: function (e) {
    var _that = this;
    var app = getApp();
    wx.request({
      url: app.globalData.domain.dev + 'people/address/update/',
      method: 'GET',
      data: {
        uid: app.globalData.userInfo.userId,
        shipAddress: _that.data.address
      },
      success: function (res) {
        if (res.data.status != 1) {
          wx.showToast({
            title: res.data.message,
          })
          return;
        }
        app.globalData.userInfo.shipAddress = _that.data.address
        wx.showToast({
          title: '修改成功',
          icon: 'success',
        })
      }
    })
  }
})