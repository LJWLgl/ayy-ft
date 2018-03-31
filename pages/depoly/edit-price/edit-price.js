// pages/depoly/edit-price/edit-price.js
Page({

  data: {
    inputNowValue: 0,
    inputOldValue: 0,
    inputFreightValue: 0,
  },
  onLoad: function(option) {
    this.setData({
      'inputNowValue': option.now,
      'inputOldValue': option.old,
      'inputFreightValue': option.freight
    })
  },
  priceFinish: function (e) {
    var pages = getCurrentPages();
    var prePage = pages[pages.length - 2];
    var _that = this;

    prePage.setData({
      price: {
        now: _that.data.inputNowValue,
        old: _that.data.inputOldValue,
        freight: _that.data.inputFreightValue
        }
    })
    wx.navigateBack({
      delta:1
    })
  },
  bindNowInput: function(e) {
    this.setData({
      'inputNowValue': e.detail.value,
    })
  },
  bindOldInput: function(e) {
    this.setData({
      'inputOldValue': e.detail.value,
    })
  },
  bindFreightSlider: function(e) {
    this.setData({
      'inputFreightValue': e.detail.value,
    })
  }
})