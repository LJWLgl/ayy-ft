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
    },
    domain: {
      // dev: "http://localhost:8081/",
      dev: "https://ganzhiqiang.wang/",
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
                  var _data = res.data.data;
                  console.log(res);
                  app.globalData.userInfo.userId = _data.user_base.id;
                  app.globalData.userInfo.nickname = _data.user_base.nickname;
                  app.globalData.userInfo.avatar = _data.user_base.avatar;
                  app.globalData.userInfo.location = _data.user_base.address;
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
