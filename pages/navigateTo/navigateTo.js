/**
 * @file demo page for apiDemo
 * @author renzhonghua
 */
/* globals Page, swan */

Page({
    data: {
        title: 'navigateTo/Back,redirectTo'
    },

    navigateTo(e) {
        swan.navigateTo({
            url: '/pages/detail/detail'
        });
    },

    navigateBack(e) {
        swan.navigateBack({
            delta: 2
        });
    },

    redirectTo(e) {
        swan.redirectTo({
            url: '/pages/detail/detail'
        });
    }
});
