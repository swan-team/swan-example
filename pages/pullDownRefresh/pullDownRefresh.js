/**
 * @file demo page for apiDemo
 * @author renzhonghua
 */
/* globals Page, swan */

Page({
    data: {
        title: 'on/stopPullDownRefresh'
    },

    stopPullDownRefresh() {
        swan.stopPullDownRefresh();
    }
});
