/**
 * @file test for camera component
 * @author xiongyang
 */

/* eslint-disable fecs-camelcase */
/* globals Page, swan */
Page({
    data: {
        hidden: true
    },
    changeShow() {
        let showType = this.getData('hidden');
        this.setData('hidden', !showType);
    },
    takePhoto() {
        const ctx = swan.createCameraContext();
        ctx.takePhoto({
            quality: 'high',
            success: res => {
                this.setData({
                    src: res.tempImagePath
                });
            }
        });
    },
    error(e) {
        console.log(e.detail);
    }
});
