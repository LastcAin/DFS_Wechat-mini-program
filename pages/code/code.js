var code = '';
Page({
  data: {
    code: ""
  },
  onLoad: function(e){
    var $chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789'; 
    var len = $chars.length;
    if(code.length == 0){
      for (var i = 0; i < 7; i++) {
        code += $chars.charAt(Math.floor(Math.random() * len));
      }
    }
    this.setData({
      code: code
    })
  }
})