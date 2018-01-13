// pages/test/item-detail/item-detail.js
Page({
  data: {
    isShow: 0,
    inputValue:"",
    collectClass: 0,
    likeClass: 0,
    imgalist: [
      'http://img04.tooopen.com/images/20130712/tooopen_17270713.jpg',
      'http://img04.tooopen.com/images/20130617/tooopen_21241404.jpg',
      'http://img04.tooopen.com/images/20130701/tooopen_20083555.jpg',
      'http://img02.tooopen.com/images/20141231/sy_78327074576.jpg'
    ],
    comments: [
      { 
        avatar:'http://img04.tooopen.com/images/20130712/tooopen_17270713.jpg',
        username:'司机峰',
        content:'几成新',
        date:'2017/12/31 08:23:00'
      },
      {
        avatar: 'http://img04.tooopen.com/images/20130712/tooopen_17270713.jpg',
        username: '司机峰',
        content: '几成新',
        date: '2017/12/31 08:23:00'
      }
    ]
  },
  onLoad: function (options) {
    this.setData({
      goods_id: options.goods_id,
    })
  },
  previewImage: function (e) {
    var current = e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接  
      urls: this.data.imgalist // 需要预览的图片http链接列表  
    })
  },
  sendClick: function (e) {
    var _this = this;
    _this.data.comments.push(
      {
        avatar: 'http://img04.tooopen.com/images/20130712/tooopen_17270713.jpg',
        username: '司机峰',
        content: e.detail.value,
        date: '2017/12/31 08:23:00'
      }
    );
    this.setData({
      isShow: 0,
      comments: _this.data.comments
    })
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
    this.setData({
      likeClass: this.data.likeClass + 1
    })
  },
  collectClick: function (e) {
    this.setData({
      collectClass: this.data.collectClass + 1
    })
  }
})