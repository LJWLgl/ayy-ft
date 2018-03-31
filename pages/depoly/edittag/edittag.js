// pages/depoly/edittag/edittag.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tag:""
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  bindTagInputChange: function(e) {
    this.setData({
      tag: e.detail.value
    })
  },
  tagFinish: function() {
    var pages = getCurrentPages();
    var prePage = pages[pages.length - 2];
    var _that = this;
    var tags = _that.data.tag.split("#");
    if (_that.data.tag.length > 20) {
      wx.showToast({
        title: 'tag过长',
        icon: 'none',
      })
      return;
    }
    if (tags.length > 3) {
      wx.showToast({
        title: 'tag过多',
        icon: 'none',
      })
      return;
    }
    var tagStr = '';
    for (var i=0; i < tags.length -1; i++) {
      tagStr += tags[i] + ','
    }
    tagStr += tags[tags.length - 1];
    prePage.setData({
      tagStr: tagStr
    })
    wx.navigateBack({
      delta:1
    })
  }
})