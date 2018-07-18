/**
 * @file demo page for apiDemo
 * @author renzhonghua
 */
/* globals Page, swan */

Page({
    data: {
        title: 'navigationBarLoading'
    },

    showNavigationBarLoading(e) {
        swan.showNavigationBarLoading();
    },

    hideNavigationBarLoading(e) {
        swan.hideNavigationBarLoading();
    }
});
