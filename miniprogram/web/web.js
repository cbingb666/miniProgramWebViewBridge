import { webBridgeBus } from "../webBridge/webBridgeBus";

// web/web.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        shareInfo: {}
    },

    eventBus: null,

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        webBridgeBus.$on('webBridge', (data) => {
            if(data.type === 'SHOW_SHARE_MENU') {
                wx.showShareMenu()
            }
            if(data.type === 'HIDE_SHARE_MENU') {
                wx.hideShareMenu()
            }
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {
    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {
        const shareInfo = this.data.shareInfo
        return {
            title: shareInfo.title,
            desc: shareInfo.desc
        }
    },
    onPostMessage(e) {
        console.log(e)
        const data = e.detail.data
        const lastMessage = data && data.length ? data[data.length-1] : undefined
        if(lastMessage && lastMessage.type === 'UPDATE_SHARE_MENU') {
            this.setData({
                shareInfo: lastMessage
            })
            wx.showShareMenu()
        }
    },

})