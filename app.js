//app.js
App({
  globalData: {
    userInfo: {
      userId: 0,
      nickname: "",
      avatar: "",
      gender: "",
      province: "",
      city: "",
      district: "",
      location: "",
      telephone: "",
      email: "",
      shipAddress: "",
    },
    domain: {
      // dev: "http://localhost:8081/",
      dev: "https://ganzhiqiang.wang/ares/",
      qiniuImg: "http://ayy.ganzhiqiang.wang",
      tencentMap: "",
      imageUpload: "",
    }
  },
  onLaunch: function() {
    // 登录
    wx.login({
      success: function (res) {
        if (res.code) {          //发起网络请求
          var app = getApp()
          wx.request({
            url: app.globalData.domain.dev + 'people/login/',
            data: {
              code: res.code
            },
            success(res) {
              app.globalData.userInfo.userId = res.data.data;
              console.log(res.data)
            },
            fail(res) {
              console.log("fail---" + res)
            }
          })
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    });
  }
})