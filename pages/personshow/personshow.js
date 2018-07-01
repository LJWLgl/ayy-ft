Page({
  data: {
    userinfo: {
      avatar: "http://nanxuan.qiniuts.com/tmp/wx5a407b64d62a69bc.o6zAJs-yD4_VkBfMkhr2pUTWHH8c.0663a7bea52a1c76270493ca69fe5ea2.jpg",
      username: "南轩",
      desc: "这个人很懒，什么也没留下"
    },
    pages: [
      {
        goods_id: 1,
        is_donation: 1,
        cover: "http://nanxuan.qiniuts.com/tmp/wx5a407b64d62a69bc.o6zAJs-yD4_VkBfMkhr2pUTWHH8c.0663a7bea52a1c76270493ca69fe5ea2.jpg",
        title: "dsds"
      }
    ],
    data: [
      {
        talkId: 1,
        lookCount: 4343,
        commentCount: 555
      },
      {
        talkId: 2,
        lookCount: 54,
        commentCount: 6
      }
    ],
    selected1: true,
    selected2: false,
    selected3: false
  },
  selected1: function (e) {
    this.setData({
      selected1: true,
      selected2: false,
      selected3: false
    })
  },
  selected2: function (e) {
    this.setData({
      selected2: true,
      selected1: false,
      selected3: false
    })
  },
  selected3: function (e) {
    this.setData({
      selected3: true,
      selected1: false,
      selected2: false
    })
  }
})