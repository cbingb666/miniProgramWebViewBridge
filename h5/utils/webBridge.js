// 小程序 webview 主动通信 Bridge
export function webBridge(data) {
  window.wx.miniProgram.navigateTo({
    url: `/webBridge/webBridge?data=${JSON.stringify(data)}`
  });
}
