// pages/user/mytrace/mytrace.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pages: [
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
        tags: ["热卖", "推荐"]
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
        tags: ["热卖", "推荐"]
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
        tags: ["热卖", "推荐"]
      }
    ]
  },

  onLoad: function (options) {
    console.log("mytraces " + options.type)
  },
})