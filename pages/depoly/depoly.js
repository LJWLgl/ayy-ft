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
    categories:["衣服","鞋子","书本","电器","其他"],
    donationList: ["是", "否"],
    location:'',
    dIndex: 1,
    price:{
      now: "",
      old: "",
      freight: ""
    }
  },
  //事件处理函数
  onLoad: function () {
    console.log('onLoad')
    var that = this;

    //定位
    that.getCityNameOFLocation()
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
  clickEditPrice: function(e) {
    var _that = this;
    wx.navigateTo({
      url: 'edit-price/edit-price?' + 'now=' + _that.data.price.now + '&old=' + _that.data.price.old + '&freight=' + _that.data.price.freight,
    })
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
  },
  getCityNameOFLocation: function () {

    var that = this;
    wx.getLocation({
      type: 'wgs84', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
      success: function (res) {
        console.log("定位成功");
        var locationString = res.latitude + "," + res.longitude;
        console.log(locationString);
        wx.request({
          url: 'https://apis.map.qq.com/ws/geocoder/v1/?l&get_poi=1',
          data: {
            "key": "24FBZ-2V4KW-LLPRZ-OXSWW-MVVIS-RHBLL",
            "location": locationString
          },
          method: 'GET',
          // header: {}, 
          success: function (res) {
            // success

            var app = getApp();
            app.globalData.userInfo.province = res.data.result.address_component.province;
            app.globalData.userInfo.city = res.data.result.address_component.city;
            app.globalData.userInfo.district = res.data.result.address_component.district;

            that.setData({
              location: formatLocationDesc()
            })
          },
          fail: function () {
            // fail
            console.log("请求失败");
          },
          complete: function () {
            // complete
            console.log("请求完成");
          }
        })
      },
      fail: function () {
        // fail
        console.log("定位失败");
      },
      complete: function () {
        // complete
        console.log("定位完成");
      }
    })
  }
});

function formatLocationDesc() {
  var app = getApp();
  if (app.globalData.userInfo.province == app.globalData.userInfo.city) {
    var province = app.globalData.userInfo.city;
    var city = app.globalData.userInfo.district;
  } else {
    var province = app.globalData.userInfo.province;
    var city = app.globalData.userInfo.city;
  }
  var location = province.substring(0, province.length - 1) + " "+ city.substring(0, city.length - 1);
  return location;
}

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