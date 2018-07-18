/**
 * @file demo page for apiDemo
 * @author renzhonghua
 */
/* globals Page, swan */

Page({
    data: {
        title: 'get/set/clearStorage',
        key: '',
        value: '',
        keyValue: ''
    },

    keyInput(e) {
        this.setData('key', e.detail.value);
    },

    valueInput(e) {
        this.setData('value', e.detail.value);
    },

    setStorage() {
        let key = this.hasKey();
        if (!key) {
            return;
        }
        swan.setStorage({
            key,
            data: this.getData('value'),
            success: res => {
                swan.showToast({
                    title: '存储数据成功'
                });
            },
            fail: err => {
                swan.showToast({
                    title: '存储数据失败'
                });
            }
        });
    },

    getStorage() {
        let key = this.hasKey();
        if (!key) {
            return;
        }
        swan.getStorage({
            key,
            success: res => {
                swan.showModal({
                    title: '读取数据成功',
                    content: JSON.stringify(res),
                    showCancel: false
                });
            },
            fail: err => {
                swan.showToast({
                    title: '读取数据失败'
                });
            }
        });
    },

    clearStorage() {
        swan.clearStorageSync();
        console.log('why', this.getData('keyValue'));
        this.setData('keyValue', '');
        swan.showToast({
            title: '清除数据成功'
        });
    },

    hasKey() {
        let key = this.getData('key');
        if (key) {
            return key;
        }
        swan.showToast({
            title: 'key不能为空'
        });
    }
});
