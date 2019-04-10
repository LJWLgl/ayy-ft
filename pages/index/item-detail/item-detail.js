// pages/test/item-detail/item-detail.js
Page({
  data: {
    goodsId:0,
    isShow: 0,
    inputValue:"",
    username:"",
    avatar:"",
    publishDesc:"",
    price:"",
    oldPrice:"",
    freight:"",
    describe:"",
    isDonation:"",
    lookCount: 0,
    commentCount:0,
    likeCount:0,
    favoriteCount:0,
    likeId:0,
    favoriteId:0,
    imagelist: [],
    comments: [],
    start: 0,
    limit: 24,
    sellerPhone:''
  },
  onLoad: function (options) {
    this.setData({
      goodsId: options.goods_id,
    })
  },
  onShow: function() {
    this.goodsDetail();
    this.commentQuery();
    console.log("likeId" + this.data.likeId)
  },
  previewImage: function (e) {
    var current = e.target.dataset.src;
    console.log(e)
    wx.previewImage({
      current: current, // 当前显示图片的http链接  
      urls: this.data.imagelist // 需要预览的图片http链接列表  
    })
  },
  entryPeopleDetail: function(e) {
     wx.navigateTo({
       url: '../../personshow/personshow',
     })
  },
  sendClick: function (e) {
    var _this = this;
    var app = getApp();
    console.log("**********" + app.globalData.userInfo.avatar);
    _this.data.comments.push(
      {
        avatar: app.globalData.userInfo.avatar,
        username: app.globalData.userInfo.nickname,
        content: e.detail.value,
        date: '刚刚'
      }
    );
    this.setData({
      isShow: 0,
      comments: _this.data.comments
    })
    this.addComment(e.detail.value);
  },
  commentClick: function (e) {
    this.setData({
      isShow: 1,
      inputValue:''
    })
  },
  unfocusInput: function (e) {
    this.setData({
      isShow: 0,
    })
  },
  likeClick: function (e) {
    if(this.data.likeId == 0) {
      this.like();
    } else {
      this.unlike();
    }
    console.log("likeId" + this.data.likeId)
  },
  collectClick: function (e) {
    if (this.data.favoriteId == 0) {
      this.favorite();
    } else {
      this.unfavorite();
    }
  },
  like: function(e) {
    var _that = this;
    var app = getApp();
    wx.request({
      url: app.globalData.domain.dev + 'like/',
      method: 'GET',
      data: {
        user_id: app.globalData.userInfo.userId,
        resource_id: _that.data.goodsId,
        resource_type: 2,
      },
      success: function (res) {
        if (res.data.status != 1) {
          wx.showToast({
            title: res.data.message,
            icon: 'none',
          })
          return;
        }
        _that.setData({
          likeId: res.data.data
        })
        console.log(res);
      }
    })
  },
  unlike: function (e) {
    var _that = this;
    var app = getApp();
    wx.request({
      url: app.globalData.domain.dev + 'unlike/',
      method: 'GET',
      data: {
        like_id: _that.data.likeId,
      },
      success: function (res) {
        if (res.data.status != 1) {
          wx.showToast({
            title: res.data.message,
            icon: 'none',
          })
          return;
        }
        _that.setData({
          likeId:0
        })
        console.log(res);
      }
    })
  },
  favorite: function (e) {
    var _that = this;
    var app = getApp();
    wx.request({
      url: app.globalData.domain.dev + 'favorite/',
      method: 'GET',
      data: {
        user_id: app.globalData.userInfo.userId,
        resource_id: _that.data.goodsId,
        resource_type: 2,
      },
      success: function (res) {
        if (res.data.status != 1) {
          wx.showToast({
            title: res.data.message,
            icon: 'none',
          })
          return;
        }
        _that.setData({
          favoriteId:res.data.data
        })
        console.log(res);
      }
    })
  },
  unfavorite: function (e) {
    var _that = this;
    var app = getApp();
    wx.request({
      url: app.globalData.domain.dev + 'unfavorite/',
      method: 'GET',
      data: {
        favorite_id: _that.data.favoriteId,
      },
      success: function (res) {
        if (res.data.status != 1) {
          wx.showToast({
            title: res.data.message,
            icon: 'none',
          })
          return;
        }
        _that.setData({
          favoriteId: 0
        })
        console.log(res);
      }
    })
  },
  addComment: function (content) {
    var _that = this;
    var app = getApp();
    wx.request({
      url: app.globalData.domain.dev + 'comment/add/',
      method: 'POST',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: {
        user_id: app.globalData.userInfo.userId,
        resource_id: _that.data.goodsId,
        resource_type: 2,
        content:content
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
  commentQuery: function (e) {
    var _that = this;
    var app = getApp();
    wx.request({
      url: app.globalData.domain.dev + 'comment/query/',
      method: 'GET',
      data: {
        resource_id: _that.data.goodsId,
        resource_type: 2,
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
        var _data = res.data.data;
        console.log(res)
        var _commment = [];
        if (_data == null || _data.length == null) {
          return;
        }
        for (var i=0; i < _data.length; i++) {
          _commment.push({
            avatar: _data[i].user_base.avatar,
            username: _data[i].user_base.nickname,
            content: _data[i].content,
            date: _data[i].comment_date
          })
        }
        _that.setData({
          comments:_commment
        })
        console.log(res)
      }
    })
  },
  contactSeller: function(e) {
    var app = getApp();
    if (! this.data.sellerPhone) {
      wx.showToast({
        title: '对方未留下联系方式',
      })
    }
    wx.makePhoneCall({
      phoneNumber: app.globalData.userInfo.telephone,
    })
  },
  goodsDetail: function (e) {
    var _that = this;
    var app = getApp();
    wx.request({
      url: app.globalData.domain.dev + 'goods/detail/',
      method: 'GET',
      data: {
        goods_id: _that.data.goodsId,
      },
      success: function (res) {
        if (res.data.status != 1) {
          wx.showToast({
            title: res.data.message,
          })
          return;
        }
        var data = res.data.data;
        var _photo = [];
        for (var i = 0; i < data.photos.length; i++) {
          _photo.push(data.photos[i].path);
        }
        _that.setData({
          username: data.user_vo.user_base.nickname,
          avatar: data.user_vo.user_base.avatar,
          sellerPhone: data.user_vo.telephone,
          publishDesc: data.publish_date + " 发布于 " + data.publish_address,
          price: data.price,
          oldPrice: data.old_price,
          freight: data.freight,
          describe: data.title + ", " + data.descible,
          isDonation: data.is_donation,
          lookCount: data.look_count,
          commentCount: data.comment_count,
          likeCount: data.like_count,
          favoriteCount: data.favorite_count,
          likeId: data.likeId,
          favoriteId: data.favoriteId,
          imagelist: _photo,
        })
        console.log(res);
      }
    })
  }
})