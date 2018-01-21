//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: function(res) {
        if (res.code) {
          var jsCode = res.code;
          wx.getUserInfo({
            success: res => {
              // this.globalData.userInfo = res.userInfo;
              console.log("res.code " + jsCode)
              wx.request({
                url: 'http://localhost:8081/people/login/',
                method: 'GET',
                data: {
                  code: jsCode,
                  userInfo: res.userInfo
                },
                success: function(res) {
                  console.log("success" + res.data)
                }
              });
            }
          });
        }
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        wx.getUserInfo({
          success: res => {
            // 可以将 res 发送给后台解码出 unionId
            this.globalData.userInfo = res.userInfo
            console.log("----" + res.userInfo);
            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
            // 所以此处加入 callback 以防止这种情况
            if (this.userInfoReadyCallback) {
              this.userInfoReadyCallback(res)
            }
          }
        })
      }
    })
  },
  globalData: {
    userInfo: null,
    location:{
      province:"",
      city:"",
      district:""
    }
  }
})