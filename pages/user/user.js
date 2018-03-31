Page({
  onShow: function () {
    this.userDetail()
    this.querySchool()
  },
  data: {
    index: 0,
    schools: [],
    userinfo: {
      username:"",
      avatar:"",
      desc:""
    },
    favoriteCount:0,
    integral:0,
    likeCount:0,
    lookCount:0,
    publishCount:0
  },
  jumpToSetting: function(e) {
    wx.navigateTo({
      url: 'setting/setting',
    })
  },
  jumpTomytrace: function(e) {
    wx.navigateTo({
      url: 'mytrace/mytrace?type=' + e.currentTarget.id,
    })
  },
  schoolSelect: function(e) {
    this.setData({
      index: e.detail.value
    });
    this.changeSchool()
  },
  changeSchool: function (e) {
    var _that = this;
    var app = getApp();
    wx.request({
      url: app.globalData.domain.dev + 'people/school/change/',
      method: 'GET',
      data: {
        uid: app.globalData.userInfo.userId,
        index: _that.data.index
      },
      success: function (res) {
        if (res.data.status != 1) {
          wx.showToast({
            title: res.data.message,
            icon: 'none',
          })
          return;
        }
      }
    })
  },
  querySchool: function(e) {
    var _that = this;
    var app = getApp();
    wx.request({
      url: app.globalData.domain.dev + 'people/school/query/',
      method: 'GET',
      data:{},
      success: function(res) {
        if (res.data.status != 1) {
          wx.showToast({
            title: res.data.message,
            icon: 'none',
          })
          return;
        }
        _that.setData({
          schools:res.data.data
        })
      }
    })
  },
  userDetail: function(e) {
    var app = getApp();
    var _that = this
    wx.request({
      url: app.globalData.domain.dev + 'people/detail/',
      method: 'GET',
      data: {
        uid: app.globalData.userInfo.userId
      },
      success: function(res) {
        if (res.data.status != 1) {
          wx.showToast({
            title: res.data.message,
            icon: 'none',
          })
          return;
        }
        var data = res.data.data;
        app.globalData.userInfo.nickname = data.user_base.nickname;
        app.globalData.userInfo.avatar = data.user_base.avatar;
        app.globalData.userInfo.gender = data.user_base.gender;
        app.globalData.userInfo.location = data.user_base.address;
        app.globalData.userInfo.telephone = data.telephone;
        app.globalData.userInfo.email = data.email;
        app.globalData.userInfo.shipAddress = data.ship_address;
        console.log(data)
        _that.setData({
          userinfo:{
            username: data.user_base.nickname,
            avatar: data.user_base.avatar,
            desc: "86版《西游记》绝对是那代人的国民记忆，放假天天等着看，一遍又一遍，悟空被压在五指山下经历春夏秋冬"
          },
          index: data.school,
          favoriteCount: data.favorite_count,
          integral: data.integral,
          likeCount: data.like_count,
          lookCount: data.look_count,
          publishCount: data.publish_count
        })
        console.log(res);
      }
    })
  }
})
