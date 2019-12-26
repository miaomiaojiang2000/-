//index.js
//获取应用实例
const app = getApp()
var JNTimer = require('../../utils/JNTimer.js')
var timer
Page({
  data: {
    countDown: 1,
  },
  onLoad: function () {
    let that = this
    timer = new JNTimer(1000, true, function (e) {
      var countDown = that.data.countDown + 1;
      that.setData({
        countDown: countDown
      })
    })
  },
  startTimer: function () {
    timer.start()
  },
  stopTimer: function () {
    timer.stop()
  }
})
