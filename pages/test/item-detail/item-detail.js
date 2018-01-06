// pages/test/item-detail/item-detail.js
Page({
  data: {
    imgalist: [
      'http://img04.tooopen.com/images/20130712/tooopen_17270713.jpg',
      'http://img04.tooopen.com/images/20130617/tooopen_21241404.jpg',
      'http://img04.tooopen.com/images/20130701/tooopen_20083555.jpg',
      'http://img02.tooopen.com/images/20141231/sy_78327074576.jpg'
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
  }
})