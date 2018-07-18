/**
 * @file demo page for apiDemo
 * @author renzhonghua
 */
/* globals Page, swan */

Page({
    data: {
        title: 'request',
        loading: false
    },

    request() {
        this.setData('loading', true);
        swan.request({
            url: 'https://sfc.baidu.com/shopping/nianhuo/bimai',
            data: {
                tabname: '美食酒水'
            },
            success: res => {
                swan.showToast({
                    title: '请求成功',
                    icon: 'success'
                });
                console.log('request success', res);
            },
            fail: err => {
                swan.showToast({
                    title: JSON.stringify(err)
                });
                console.log('request fail', err);
            },
            complete: () => {
                this.setData('loading', false);
            }
        });
    }
});
