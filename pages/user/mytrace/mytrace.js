// pages/user/mytrace/mytrace.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pages: [],
    queryType: 1,
    start: 0,
    limit: 24
  },

  onLoad: function (options) {
    console.log("mytraces " + options.type)
    this.setData({
      queryType: options.type
    })
  },
  onShow:function() {
    this.queryGoods();
  },
  queryGoods: function (e) {
    var _that = this;
    var app = getApp();
    wx.request({
      url: app.globalData.domain.dev + 'goods/publish/',
      method: 'GET',
      data: {
        uid: app.globalData.userInfo.userId,
        type: _that.data.queryType,
        start: _that.data.start,
        limit: _that.data.limit
      },
      success: function (res) {
        if (res.data.status != 1) {
          wx.showToast({
            title: res.data.message,
            icon: 'none',
          })
          return;
        }
        var _page = new Array();
        var _data = res.data.data.object_list
        for (var i = 0; i < _data.length; i++) {
          _page.push({
            goods_id: _data[i].id,
            lookcount: _data[i].look_count,
            address: _data[i].publish_address,
            price: _data[i].price,
            title: _data[i].title,
            desc: _data[i].descible,
            cover: _data[i].cover.path,
            publis_date: _data[i].publish_date,
            tags: _data[i].tags,
            is_donation: _data[i].is_donation
          })
        }
        _that.setData({
          pages: _page
        })
      }
    })
  },
})