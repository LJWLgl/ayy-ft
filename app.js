//app.js
App({
  globalData: {
    userInfo: {
      userId: "",
      province: "",
      city: "",
      district: "",
      location: ""
    },
    domain: {
      dev: "http://localhost:8081/",
      // dev: "https://ganzhiqiang.wang",
      tencentMap: "",
      imageUpload: "",
    }
  },
  onLaunch: function () {
    // 登录
    wx.login({
      success: function(res) {
        var app = getApp();
        if (res.code) {
          var jsCode = res.code;
          wx.getUserInfo({
            success: res => {
              // this.globalData.userInfo = res.userInfo;
              console.log("res.code " + jsCode)
              wx.request({
                url: app.globalData.domain.dev + 'people/login/',
                method: 'GET',
                // dataType: 'json',
                data: {
                  code: jsCode,
                  userInfo: res.userInfo
                },
                success: function(res) {
                  var app = getApp();
                  app.globalData.userInfo.userId = res.data.data
                  console.log("success" + JSON.stringify(res))
                  console.log(app.globalData.userInfo.userId)
                }
              });
            }
          });
        }
      }
    })
  }
})
