Page({
  data: {
    time: '?',
    front: true,
  },
  tapCard: function (event) {
    this.setData({ front: !this.data.front });
  },
  onLoad: function (param) {
    // 页面初始化 param为页面跳转所带来的参数
    this.setData({
      time: param.time
    })
  }
})