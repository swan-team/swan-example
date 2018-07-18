/**
 * @file demo page for apiDemo
 * @author renzhonghua
 */
/* globals Page, swan */

Page({
    data: {
        title: 'onNetworkStatusChange',
        networkType: '未获取'
    },

    onLoad() {
        let self = this;
        swan.getNetworkType({
            success: res => {
                self.setData('networkType', res.networkType);
            }
        });
        swan.onNetworkStatusChange(function (res) {
            self.setData('networkType', res.networkType);
        });
    }
});
