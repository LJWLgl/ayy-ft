// pages/user/setting/setting.js
Page({
  data: {
  
  },
  onLoad: function (options) {

  },
  aboutAPP: function(e) {
    wx.navigateTo({
      url: 'about',
    })
  },
  editPhone: function (e) {
    wx.navigateTo({
      url: 'phoneedit',
    })
  },
  editAddress: function(e) {
    wx.navigateTo({
      url: 'addressedit',
    })
  }
})