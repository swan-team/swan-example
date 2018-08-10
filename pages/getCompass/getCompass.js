/**
 * @file test for  swan.onCompassChange api
   swan.startCompass api
   swan.stopCompass api
 * @author haoyang
 */
/* globals Page, swan */
/* eslint-disable new-cap */
Page({
    data: {
        title: '旋转手机即可以获取方位信息',
        direction: 0,
        iswatch: true,
        leftdeg: 0,
        rightdeg: 0
    },
    onReady() {
        let that = this;
        swan.onCompassChange(function (res) {
            that.setData({
                direction: parseInt(res.direction, 10)
            });
            that.updateProgress(res.direction);
        });
    },
    onShow() {
        let watch = this.getData('iswatch');
        if (watch) {
            swan.startCompass();
        } else {
            swan.stopCompass();
        }
    },
    startWatch() {
        this.setData('iswatch', true);
        swan.startCompass();
    },
    stopWatch() {
        this.setData('iswatch', false);
        swan.stopCompass();
    },
    updateProgress(direction) {
        let leftdeg;
        let rightdeg;
        let deg = +direction;
        if (deg > 180) {
            leftdeg = 180;
            rightdeg = 180 - deg;
        } else {
            leftdeg = -deg;
            rightdeg = 0;
        }
        this.setData({
            leftdeg: leftdeg,
            rightdeg: rightdeg
        });
    }
});
