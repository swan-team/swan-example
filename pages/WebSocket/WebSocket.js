/**
 * @file test for webscoket api
 * @author lijiahui
 */
/* globals Page, swan */

Page({
    getConnect: e => {
        swan.connectSocket({
            webscoketUrl: 'wss://jiahui.pcfast.org:1234'
        });
        swan.onSocketOpen(function () {
            swan.showToast({
                title: 'getPhoneNumber'
            });
        });
        swan.onSocketMessage(function (res) {
            console.log('收到服务器内容：' + res.data);
        });
    },
    send: e => {
        swan.sendSocketMessage({
            data: 'this is swan',
            complete: () => {
                console.log(new Date().getTime() + '    :i am complete');
            }
        });
    }
});
