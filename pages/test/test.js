Page({

  /**
   * 页面的初始数据
   */
  data: {
    sort_button_back_color: ["#00BFFF", "#fff", "#fff"],
    pages: [
      {
        goods_id:154,
        title:"美的变频空调",
        desc:"每晚只需一度电",
        look_count:"99人关注",
        cover:"../../image/yx.png",
        publis_date:"今天"
      },
      {
        goods_id: 232,
        title: "美的变频空调",
        desc: "每晚只需一度电",
        look_count: "99人关注",
        cover: "../../image/yx.png",
        publis_date: "今天"
      },
      {
        goods_id: 343,
        title: "美的变频空调",
        desc: "每晚只需一度电",
        look_count: "99人关注",
        cover: "../../image/yx.png",
        publis_date: "今天"
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
      sort_button_back_color: ["#00BFFF", "#fff", "#fff"],
      text_msg: "最新商品"
    })
  },
  hotGoodsClick: function(event) {
    this.setData({
      sort_button_back_color: ["#fff", "#00BFFF", "#fff"],
      text_msg: "热卖商品"
    })
  },
  recommendGoodsClick: function(event) {
    this.setData({
      sort_button_back_color: ["#fff", "#fff", "#00BFFF"],
      text_msg: "推荐商品"
    })
  }
})