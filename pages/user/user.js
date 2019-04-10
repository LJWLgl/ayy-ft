const util = require('../../utils/util.js')

Page({
  onShow: function() {
    if (!util.checkLogin()) {
      console.log("未登录。。。")
      this.setData({
        isLogin: false
      });
    } else {
      this.userDetail()
      this.querySchool()
      this.setData({
        isLogin: true
      });
    }
  },
  data: {
    index: 0,
    schools: [],
    userinfo: {
      username: "",
      avatar: "",
      desc: ""
    },
    favoriteCount: 0,
    integral: 0,
    likeCount: 0,
    lookCount: 0,
    publishCount: 0,
    isLogin: false
  },
  getWxUserInfo: function(e) {
    console.log(e.detail.rawData)
    var app = getApp();
    var _that = this;
    wx.request({
      url: app.globalData.domain.dev + 'people/registerinfo/',
      method: 'GET',
      // dataType: 'json',
      data: {
        uid: app.globalData.userInfo.userId,
        userInfo: e.detail.rawData
      },
      success: function(res) {
        console.log(res);
        var _user = JSON.parse(e.detail.rawData)
        if (_user) {
          // 设置本地缓存，获取用户信息成功
          util.getUserInfoOk();
        }
        app.globalData.userInfo.nickname = _user.nickName;
        app.globalData.userInfo.avatar = _user.avatarUrl;
        app.globalData.userInfo.location = _user.address;
        _that.setData({
          isLogin: true,
          userinfo: {
            username: _user.nickName,
            avatar: _user.avatarUrl,
            desc: "介绍一下自己吧",
          }
        })
      }
    });
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
  changeSchool: function(e) {
    var _that = this;
    var app = getApp();
    wx.request({
      url: app.globalData.domain.dev + 'people/school/change/',
      method: 'GET',
      data: {
        uid: app.globalData.userInfo.userId,
        index: _that.data.index
      },
      success: function(res) {
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
      data: {},
      success: function(res) {
        if (res.data.status != 1) {
          wx.showToast({
            title: res.data.message,
            icon: 'none',
          })
          return;
        }
        _that.setData({
          schools: res.data.data
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
          userinfo: {
            username: app.globalData.userInfo.nickname,
            avatar: app.globalData.userInfo.avatar,
            desc: "介绍一下自己吧"
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