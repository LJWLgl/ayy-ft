Page({
  data: {
    selected1: true,
    selected2: false
  },
  selected1: function (e) {
    this.setData({
      selected1: true,
      selected2: false
    })
  },
  selected2: function (e) {
    this.setData({
      selected2: true,
      selected1: false
    })
  }
})