var location = require('../../utils/location.js')
Page({
  onLoad: function() {
    // 定位
    // location.getCityNameOFLocation()
  },
  data: {
    sort_button_back_color: ["#fc4768", "#fff", "#fff"],
    pages: [
      {
        goods_id:154,
        lookcount:60,
        address:"上海 虹口",
        price:168,
        title:"美的变频空调，每晚只需一度电",
        desc:"每晚只需一度电",
        look_count:"99人关注",
        cover:"http://ozautirlw.bkt.clouddn.com/tmp_c421a6bf9a13323f05d6773d087bb51b.jpg",
        publis_date:"今天",
        tags: ["热卖", "推荐"],
        is_donation:0
      },
      {
        goods_id: 154,
        lookcount: 60,
        address: "上海 虹口",
        price: 168,
        title: "美的变频空调，每晚只需一度电",
        desc: "每晚只需一度电",
        look_count: "99人关注",
        cover: "http://ozautirlw.bkt.clouddn.com/tmp_c421a6bf9a13323f05d6773d087bb51b.jpg",
        publis_date: "今天",
        tags: ["热卖","推荐"],
        is_donation: 1
      },
      {
        goods_id: 154,
        lookcount: 60,
        address: "上海 虹口",
        price: 168,
        title: "美的变频空调，每晚只需一度电",
        desc: "每晚只需一度电",
        look_count: "99人关注",
        cover: "http://ozautirlw.bkt.clouddn.com/tmp_c421a6bf9a13323f05d6773d087bb51b.jpg",
        publis_date: "今天",
        tags: ["热卖", "推荐"],
        is_donation: 1
      }
    ]
  },
  searchClick: function(event) {
    this.setData({
      text_msg:"搜索结果"
    })
  },
  lastedGoodsClick: function(event) {
    this.setData({
      sort_button_back_color: ["#fc4768", "#fff", "#fff"],
      text_msg: "最新商品"
    })
  },
  hotGoodsClick: function(event) {
    this.setData({
      sort_button_back_color: ["#fff", "#fc4768", "#fff"],
      text_msg: "热卖商品"
    })
  },
  recommendGoodsClick: function(event) {
    this.setData({
      sort_button_back_color: ["#fff", "#fff", "#fc4768"],
      text_msg: "推荐商品"
    })
  },
  queryNewestList: function(type) {
    var app = getApp();
    wx.request({
    })
  }
})