/**
 * @file demo page for apiDemo
 * @author renzhonghua
 */
/* globals Page, swan */

Page({
    data: {
        title: 'toast'
    },

    onHide() {
        swan.hideToast();
    },

    showToast() {
        swan.showToast({
            title: '默认'
        });
    },

    showToastIcon() {
        swan.showToast({
            title: 'success',
            icon: 'success'
        });
    },

    showToastDuration() {
        swan.showToast({
            duration: 5000,
            title: 'duration 5000'
        });
    },

    showToastLoading() {
        swan.showLoading({
            title: 'loading'
        });
    },

    hideLoading() {
        swan.hideLoading();
    },

    hideToast() {
        swan.hideToast();
    }
});
