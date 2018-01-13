const qiniuUploader = require("../../utils/qiniuUploader");
//index.js

// 初始化七牛相关参数
function initQiniu() {
  var options = {
    region: 'ECN', // 华北区
    uptokenURL: 'https://ganzhiqiang.wang/goods/image/uptoken',
    // uptoken: 'qVwP0HV-VC7jGGmREBUZwgKrdJNs9ib5_rA-6OSs:nEn4E36d7z8dmk9qjpdNyoIk5qg=:eyJzY29wZSI6ImF5eS1maWxlIiwiZGVhZGxpbmUiOjE1MTQwMjUyMzl9',
    domain: 'http://ozautirlw.bkt.clouddn.com',
    shouldUseQiniuFileName: false
  };
  qiniuUploader.init(options);
}

//获取应用实例
var app = getApp()
Page({
  data: {
    imageObject: {},
    imageList: [],
    categories:["衣服","鞋子","书本","电器","其他"]
  },
  //事件处理函数
  onLoad: function () {
    console.log('onLoad')
    var that = this;
  },
  didPressChooesImage: function() {
    var _this = this;
    didPressChooesImage(_this, function (result) {
      _this.data.imageList.push(result.imageURL);
      _this.setData({
        imageList: _this.data.imageList
      });
    }, function (error) {
    });
  },
  bindCategoryChange: function(e) {
    this.setData({
      index: e.detail.value
    })
  },
  publishGoods: function(e) {
    wx.showToast({
      title: '发布成功',
      icon: 'success',
      duration: 2000
    })
  }
});

function didPressChooesImage(that, resolve, reject) {
  initQiniu();
  // 微信 API 选文件
  wx.chooseImage({
      count: 1,
      success: function (res) {
        var filePath = res.tempFilePaths[0];
        // 交给七牛上传
        qiniuUploader.upload(filePath, (res) => {
          resolve(res);
        }, (error) => {
          reject(error);
          // console.error('error: ' + JSON.stringify(error));
        }
        );
      }
    })
}