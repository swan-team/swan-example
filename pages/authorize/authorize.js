/**
 * @file demo page for apiDemo
 * @author renzhonghua
 */
/* globals Page, swan */
Page({
    data: {
        title: 'authorize',
        items: [{
            name: '授权获取用户信息',
            id: 'scope.userInfo'
        }, {
            name: '授权获取位置信息',
            id: 'scope.userLocation'
        }]
    },

    btnClick(e) {
        let scope = e.currentTarget.id;
        swan.authorize({
            scope,
            success: res => {
                swan.showToast({
                    title: '授权成功'
                });
            },
            fail: err => {
                swan.showToast({
                    title: '授权失败'
                });
                console.log('authorize fail', err);
            }
        });
    }
});
