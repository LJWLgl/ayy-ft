// pages/user/setting/phoneedit.js
var interval = null //倒计时函数
Page({

  /**
   * 页面的初始数据
   */
  data: {
    telephone:'',
    captcha:'',
    date: '请选择日期',
    fun_id: 2,
    time: '获取验证码', //倒计时 
    currentTime: 5
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var app = getApp();    
    this.setData({
      telephone: app.globalData.userInfo.telephone,
      captcha: 'http://nanxuan.duitang.net:8081' + '/people/captcha/?uid=' + app.globalData.userInfo.userId + '&' + Math.random()
    })
  },
  bindPhoneInputChange: function(e) {
    this.setData({
      telephone: e.detail.value
    })
  },
  changeCode: function(e) {
    var app = getApp();
    var captchaUrl = 'http://nanxuan.duitang.net:8081' + '/people/captcha/?uid=' + app.globalData.userInfo.userId + '&' + Math.random();
    console.log(captchaUrl);
    this.setData({
      captcha: captchaUrl
    })
  },
  getCode: function (options) {
    var that = this;
    var currentTime = that.data.currentTime
    interval = setInterval(function () {
      currentTime--;
      that.setData({
        time: currentTime + '秒'
      })
      if (currentTime <= 0) {
        clearInterval(interval)
        that.setData({
          time: '重新发送',
          currentTime: 5,
          disabled: false
        })
      }
    }, 1000)
  },
  getVerificationCode() {
    this.getCode();
    var that = this
    var app = getApp();
    that.setData({
      disabled: true
    })
    wx.request({
      url: 'http://nanxuan.duitang.net:8081' + '/people/msg/send/',
      method: 'GET',
      data: {
        uid: app.globalData.userInfo.userId,
        telephone: that.data.telephone
      },
      success: function(res) {
        console.log(res.data)
        if (res.data.status != 1) {
          wx.showToast({
            title: res.data.message,
          })
          return;
        }
      }
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