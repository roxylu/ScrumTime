Page({
  data: {
    front: true,
  },
  tapCard: function (event) {
    this.setData({ front: !this.data.front });
  }
})