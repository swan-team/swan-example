/**
 * @file payment.js
 * @author renzhonghua
 */
/* globals Page, swan */
Page({
    data: {
        title: 'requestPolymerPayment'
    },

    requestPolymerPayment(e) {
        swan.request({
            url: 'https://mbd.baidu.com/ma/nuomi/createorder',
            success: res => {
                let data = res.data;
                if (data.errno !== 0) {
                    console.log('create order err', data);
                    return;
                }

                swan.requestPolymerPayment({
                    orderInfo: data.data,
                    bannedChannels: this.getData('bannedChannels'),
                    success(res) {
                        swan.showToast({
                            title: '支付成功',
                            icon: 'success'
                        });
                    },
                    fail(err) {
                        swan.showToast({
                            title: err.errMsg
                        });
                        console.log('pay fail', err);
                    }
                });
            },
            fail: err => {
                swan.showToast({
                    title: '订单创建失败'
                });
                console.log('create order fail', err);
            }
        });
    }
});
