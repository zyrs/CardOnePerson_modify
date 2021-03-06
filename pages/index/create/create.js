// pages/index/create/create.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    threeThings: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var threeThings = wx.getStorageSync('threeThings').threeThings;

    if (threeThings) {
      this.setData({
        threeThings: threeThings
      })
    }
  },

  submitThreeThings: function(event) {

    var value = event.detail.value;
    var tempArr = [];
    
    for (var i = 1; i <= 3; i++) {
      let temp = {};
      if (value['item-' + i].trim().length > 0){
        temp.thing = value['item-' + i];
      }
      if (value['item1-' + i].trim().length > 0) {
        temp.ach = value['item1-' + i];
      }else{
        temp.ach = 0;
      }
      temp.complete=false;
      tempArr.push(temp);
    }

    console.log(tempArr);

    var data = {
      time: new Date(),
      threeThings: tempArr
    }

    wx.setStorageSync('threeThings', data);
    wx: wx.navigateBack({
      delta: 1,
    })
  }
})