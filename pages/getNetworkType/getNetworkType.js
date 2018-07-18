/**
 * @file demo page for apiDemo
 * @author renzhonghua
 */
/* globals Page, swan */

Page({
    data: {
        title: 'getNetworkType',
        networkType: '未获取'
    },

    getNetworkType() {
        swan.getNetworkType({
            success: res => {
                this.setData('networkType', res.networkType);
            },
            fail: err => {
                swan.showToast({
                    title: '获取网络状态失败'
                });
            }
        });
    },

    clearClick(e) {
        this.setData('networkType', '未获取');
    }
});
