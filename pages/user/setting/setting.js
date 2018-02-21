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
  editConnect: function (e) {
    wx.showModal({
      title: '提示',
      content: '这是一个模态弹窗',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  }
})