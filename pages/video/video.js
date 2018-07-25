/**
 * @file test video componnent
 * @author jianglian
 */
/* globals Page, swan */

Page({
    data: {
        src: 'https://b.bdstatic.com/swan-temp/940fe716b0eaad38f47b209d61657490.mp4',
        loop: false,
        muted: false,
        autoplay: false
    },
    play: function (e) {
        console.log('play!');
    },
    pause: function (e) {
        console.log('pause');
    },
    fullscreen: function (e) {
        console.log('fullscreenchange!! 参数是' + JSON.stringify(e));
    },
    ended: function (e) {
        console.log('ended');
        this.next();
    },
    setloop: function (e) {
        this.setData('loop', !this.getData('loop'));
    },
    setmuted: function (e) {
        this.setData('muted', !this.getData('muted'));
    },
    setautoplay: function (e) {
        let autoplay = this.getData('autoplay');
        this.setData('autoplay', !autoplay);
    }
});
