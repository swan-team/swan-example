/**
 * @file demo page for apiDemo
 * @author renzhonghua
 */
/* globals Page, swan */

Page({
    data: {
        title: 'get/setClipboardData',
        items: [{
            name: '复制',
            id: 'setClipboardData'
        }, {
            name: '粘贴',
            id: 'getClipboardData'
        }],
        originData: 'baidu',
        clipboardData: ''
    },

    btnClick(e) {
        let id = e.currentTarget.id;
        switch (id) {
            case 'setClipboardData':
                swan.setClipboardData({
                    data: this.getData('originData'),
                    success: res => {
                        swan.showToast({
                            title: '复制成功'
                        });
                    },
                    fail: err => {
                        swan.showToast({
                            title: '复制失败'
                        });
                        console.log('setClipboardData fail', err);
                    }
                });
                break;
            case 'getClipboardData':
                swan.getClipboardData({
                    success: res => {
                        this.setData('clipboardData', res.data);
                    },
                    fail: err => {
                        console.log('getClipboardData fail', err);
                    }
                });
                break;
        }
    }
});
