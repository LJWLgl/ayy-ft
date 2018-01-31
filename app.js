//app.js
App({
  onLaunch: function () {
    
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
                dataType: 'json',
                data: {
                  code: jsCode,
                  userInfo: res.userInfo
                },
                success: function(res) {
                  console.log("success" + JSON.stringify(res))
                }
              });
            }
          });
        }
      }
    })
  },
  globalData: {
    userInfo: {
      userId:"",
      province: "",
      city: "",
      district: "",
      location: ""
    },
    domain: {
      dev:"http://localhost:8081/",
      tencentMap:"",
      imageUpload:"",
    }
  }
})
