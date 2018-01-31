function getCityNameOFLocation() {

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
          app.globalData.userInfo.location = formatLocationDesc();

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

function formatLocationDesc() {
  var app = getApp();
  if (app.globalData.location.province == app.globalData.location.city) {
    var province = app.globalData.location.city;
    var city = app.globalData.location.district;
  } else {
    var province = app.globalData.location.province;
    var city = app.globalData.location.city;
  }
  var location = province.substring(0, province.length - 1) + " "+ city.substring(0, city.length - 1);
  return location;
}

module.export ={
  getCityNameOFLocation: getCityNameOFLocation
}