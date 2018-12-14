/**
 * @file demo page for apiDemo
 * @author renzhonghua
 */
/* globals Page, swan */

Page({
    data: {
        title: 'getSystemInfo',
        infoList: [{
            label: '手机品牌',
            key: 'brand',
            value: ''
        }, {
            label: '手机型号',
            key: 'model',
            value: ''
        }, {
            label: '当前版本',
            key: 'version',
            value: ''
        }, {
            label: '屏幕宽度',
            key: 'screenWidth',
            value: ''
        }, {
            label: '屏幕高度',
            key: 'screenHeight',
            value: ''
        }, {
            label: 'DPI',
            key: 'pixelRatio',
            value: ''
        }, {
            label: '语言',
            key: 'language',
            value: ''
        }]
    },

    getSystemInfo(e) {
        swan.getSystemInfo({
            success: res => {
                // 更新数据
                this.updateInfoList(res);
            },
            fail: err => {
                swan.showToast({
                    title: '获取失败'
                });
            }
        });
    },

    clearClick() {
        this.updateInfoList({});
    },

    updateInfoList(res) {
        let infoList = this.getData('infoList');
        for (let i = 0; i < infoList.length; ++i) {
            infoList[i].value = res[infoList[i].key];
        }
        this.setData('infoList', infoList);
    }
});
