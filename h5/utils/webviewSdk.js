import { webBridge } from './webBridge';

/**
 * 更新分享信息
 * @param {object} data
 * @param {string} data.title 分享标题
 * @param {string} data.desc 分享描述
 * @param {string} data.imgUrl 分享封面
 * @param {string} data.link 分享H5链接
 */
export const updateShareMenu = data => {
  window.wx.miniProgram.postMessage({
    data: {
      type: 'UPDATE_SHARE_MENU',
      ...data
    }
  });
};

/**
 * 隐藏小程序分享
 */
export const hideShareMenu = () => {
  webBridge({ type: 'HIDE_SHARE_MENU' });
};


/**
 * 显示小程序分享
 */
export const showShareMenu = () => {
  webBridge({ type: 'SHOW_SHARE_MENU' });
};
