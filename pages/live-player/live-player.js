/**
 * @file live-player的示例
 * @author raowenjuan
 */
/* globals Page, swan */
Page({
    data: {
        cur: 0,
        src: 'http://livebd.quanmin.tv/live/1931315320.m3u8',
        srcList: [
            'http://livebd.quanmin.tv/live/1931315320.m3u8',
            'http://livebd.quanmin.tv/live/1574681706.m3u8',
            'http://livebd.quanmin.tv/live/1541275176.m3u8',
            'http://livebd.quanmin.tv/live/462099.m3u8',
            'http://livebd.quanmin.tv/live/1639748150.m3u8'
        ],
        autoplay: true,
        objectFit: 'contain',
        orientation: 'vertical',
        minCache: 1,
        maxCache: 3,
        muted: false,
        backgroundMute: false
    },

    onReady(e) {
        this.ctx = swan.createLivePlayerContext('myLive');
        console.log('ctx:', this.ctx);
    },
    statechange(e) {
        console.log('播放状态变化:', e);
        // swan.showToast({
        //     title: '播放状态变化 statechange' + JSON.stringify(e)
        // });
    },
    fullscreenchange(e) {
        console.log('全屏变化 fullscreenchange');
        swan.showToast({
            title: '全屏变化 fullscreenchange' + JSON.stringify(e)
        });
    },
    netstatus(e) {
        console.log('网络状态变化:', e);
        swan.showToast({
            title: '网络状态变化 netstatus' + JSON.stringify(e)
        });
    },
    livePlay(e) {
        swan.showToast({
            title: '直播开始播放' + JSON.stringify(e)
        });
        this.ctx.play();
    },
    objectFit(e) {
        this.setData('objectFit', this.getData('objectFit') === 'contain' ? 'fillCrop' : 'contain');
    },
    liveStop(e) {
        swan.showToast({
            title: '直播停止播放' + JSON.stringify(e)
        });
        this.ctx.stop();
    },
    liveMute(e) {
        swan.showToast({
            title: '直播静音' + JSON.stringify(e)
        });
        let muted = !this.getData('muted');
        this.setData('muted', muted);
    },
    changeSrc(e) {
        swan.showToast({
            title: '更换 src:' + this.getData('src')
        });
        let srcList = this.getData('srcList');
        let cur = (this.getData('cur') + 1) % srcList.length;
        this.setData('src', srcList[cur]);
        this.setData('cur', cur);
    },
    backgroundMute(e) {
        this.setData('backgroundMute', !this.getData('backgroundMute'));
        swan.showToast({
            title: this.getData('backgroundMute')
        });
    },
    changeFull(e) {
        this.ctx.requestFullScreen({
            direction: '90',
            success: e => {
                console.log('requestFullScreen success');
            },
            fail: e => {
                console.log('requestFullScreen fail why:', e);
            }
        });
        let that = this;
        setTimeout(function () {
            that.ctx.exitFullScreen({
                success: e => {
                    console.log('exitFullScreen success');
                },
                fail: e => {
                    console.log('exitFullScreen fail why:', e);
                }
            });
        }, 2000);
    }
});
