Page({
  data: {
    name: '',
    mobilenumber: '',
    email: '',
    birthdate: '',
  },
  birthdateChange: function(e) {
    this.setData({
      birthdate: e.detail.value
    })
  },
  formSubmit: function(e){
    var subTime = new Date();
    var Data = e.detail.value;
    console.log(Data);
    console.log(subTime);
    var Tip = "";
    var flag = true;
    var regMobileNum = /^1(3|4|5|7|8)\d{9}$/;
    var regEmail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
    if (!Data.name) {
      Tip = "Please enter your name";
    } else if (!Data.mobilenumber) {
      Tip = "Please enter your mobile number";
    } else if (!(regMobileNum.test(Data.mobilenumber))) {
      Tip = "Check the mobile number";
    } else if (!Data.email) {
      Tip = "Please enter your E-mail adress";
    } else if (!(regEmail.test(Data.email))) {
      Tip = "Check the E-mail adress";
    } else if (!Data.birthdate) {
      Tip = "Please choose your birthdate";
    } else {
      flag = false;
      wx.navigateTo({
        url: '../code/code'
      })
    }
    if (flag == true){
      wx.showModal({
        title: 'Tip',
        content: Tip,
        showCancel: false,
        confirmText: 'OK'
      })
    } 
  },
  formReset: function(){
  }
})
