/**
 * @demo scroll-view componnent
 * @author lvlei
 */

/* globals Page, swan */
Page({
    data: {
        data: {
            toView: 'view4',
            scrollTop: 100
        },
    },

    toLeft() {
        swan.showToast({
            duration: 1000,
            title: '到最左边了'
        });
    },
    toRight() {
        swan.showToast({
            duration: 1000,
            title: '到最右边了'
        });
    },
    upper() {
        swan.showToast({
            duration: 1000,
            title: '到顶了'
        });
    },

    lower() {
        swan.showToast({
            duration: 1000,
            title: '到底了'
        });
    },

    myscroll(e) {
        console.log('获取滚动事件的详细信息e.detail：' + e.detail);
        console.dir(e.detail);
    }

});
