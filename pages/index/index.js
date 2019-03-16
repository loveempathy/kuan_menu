const app = getApp();
var isShow = false;
var animation;
var height = wx.getSystemInfoSync().windowHeight;
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    height: height,
    hidden: true,
    isShow: isShow,
    myStyle: "border-radius: " + height + "px;height: " + height / 15 + "px;width: " + height / 15 + "px;bottom:" + height / 15 + "px",
    nav: [{
      navigation: [{
          name: '动态',
          src: '../../img/1.png'
        },
        {
          name: '酷图',
          src: '../../img/2.png'
        },
        {
          name: '应用集',
          src: '../../img/3.png'
        },
        {
          name: '扫一扫',
          src: '../../img/4.png'
        },

      ],
    }, {
      navigation: [{
          name: '分享',
          src: '../../img/5.png'
        },
        {
          name: '图文',
          src: '../../img/6.png'
        },
        {
          name: '提问',
          src: '../../img/7.png'
        },
        {
          name: '话题',
          src: '../../img/8.png'
        },

      ],
    }]
  },
  onLoad: function(options) {
    animation = wx.createAnimation({
      duration: 300,
      timingFunction: 'linear',
    })
  },

  onClickPaper: function(e) {
    var menuStyle = ''
    var that = this
    that.animation = animation
    that.setData({
      hidden: false,
      menuStyle: menuStyle,
    })
    if (!isShow) {
      that.animation.scale(height / 15).step()
      menuStyle = 'menuOpen'
    } else {
      that.animation.scale(0).step()
      menuStyle = 'menuClose'
    }
    isShow = !isShow
    that.setData({
      animationData: that.animation.export(),
      menuStyle: menuStyle,
    })
    isShow?
    setTimeout(function(){
      that.setData({
        isShow: isShow,
      })
      }, 200) : that.setData({
        isShow: isShow,
      })
  },

})