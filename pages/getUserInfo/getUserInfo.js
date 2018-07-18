/**
 * @file demo page for apiDemo
 * @author renzhonghua
 */
/* globals Page, swan */

Page({
    data: {
        title: 'getUserInfo'
    },

    getUserInfo(e) {
        swan.getUserInfo({
            success: res => {
                swan.showModal({
                    title: '获取成功',
                    content: JSON.stringfy(res)
                });
            },
            fail: err => {
                swan.showToast({
                    title: '获取失败'
                });
            }
        });
    }
});
