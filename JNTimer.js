/*
创建一个timer
@param timeInterval 时间间隔 单位毫秒
@param repeat bool是否重复执行 
@param triggered 时间间隔触发 fun(timer)
*/
function JNTimer(timeInterval, repeat, triggered) {
this.timeInterval = timeInterval
this.repeat = repeat
this.triggered = triggered

var interval
let that = this
var send = function () {
that.triggered(that)
if (!that.repeat) {
that.stop()
}
}
this.start = function () {
that.stop()
interval = setInterval(function () {
send()
}, that.timeInterval)
}

this.stop = function () {
clearInterval(interval)
}
}

module.exports = JNTimer
