function getHeader() {
  var session = wx.getStorageSync('session_id')
  var header = { 'Cookie': 'sessionid=' + session}
  return header;
}

module.export ={
  getHeader:getHeader
}