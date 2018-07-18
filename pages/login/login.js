/**
 * @file demo page for apiDemo
 * @author renzhonghua
 */
/* globals Page, swan */

Page({
    data: {
        title: 'login',
        hasLogin: false
    },

    login(e) {
        swan.checkSession({
            success: res => {
                swan.showToast({
                    title: '您已登录'
                });
            },
            fail: err => {
                swan.login({
                    success: res => {
                        swan.showToast({
                            title: '登录成功'
                        });
                    },
                    fail: err => {
                        swan.showToast({
                            title: '登录失败'
                        });
                    }
                });
            }
        });
    }
});
