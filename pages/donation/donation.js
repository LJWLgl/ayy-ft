Page({
  onLoad: function () {
    // 定位
    // location.getCityNameOFLocation()
    this.queryGoodsList(this.data.queryType);
  },
  data: {
    queryType: 4,
    pages: [],
    hasMore: true,
    start: 0,
    limit: 24,
  },

  onPullDownRefresh: function () {
    wx.showNavigationBarLoading() //在标题栏中显示加载
    this.queryGoodsList(this.data.queryType);
    //模拟加载
    setTimeout(function () {
      // complete
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    }, 600);
  },

  onReachBottom: function () {
    this.setData({
      start: this.data.start + this.data.limit
    })
    this.queryGoodsList(this.data.queryType);
  },

  queryGoodsList: function (type) {
    var app = getApp();
    var _that = this
    wx.request({
      url: app.globalData.domain.dev + 'goods/query/',
      method: 'GET',
      data: {
        'type': _that.data.queryType,
        'start': _that.data.start,
        'limit': _that.data.limit,
      },
      success: function (res) {
        if (res.data.status != 1) {
          wx.showToast({
            title: res.data.message,
            icon: 'none',
          })
          return;
        }
        var _page
        if (_that.data.start > 0) {
          _page = _that.data.pages
        } else {
          _page = new Array()
        }
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
  }
})