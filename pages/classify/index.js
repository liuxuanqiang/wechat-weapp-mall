var app = getApp()
Page({
    data: {
        content: '这是分类页面',
        navLeftItems: [],
        navRightItems: [],
        isActive: false,
        curNav: 1,
		curIndex: 0
    },
    onLoad: function() {

        var that = this
        
        wx.request({
            url: 'http://huanqiuxiaozhen.com/wemall/goodstype/typebrandList',
            method: 'GET',
            data: {},
            header: {
                'Accept': 'application/json'
            },
            success: function(res) {
                //console.log(res.data)
                that.data.navLeftItems = res.data;
                that.data.navRightItems = res.data;
            }
        })
    },

    //事件处理函数
    switchRightTab: function(e) {
        let id = e.target.dataset.id,
			index = parseInt(e.target.dataset.index);
		this.setData({
			curNav: id,
			curIndex: index
		})
    }

})