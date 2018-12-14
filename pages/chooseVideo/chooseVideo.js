/**
 * @file test for chooseVideo api
 * @author haoyang
 */
/* globals Page, swan */
/* eslint-disable new-cap */

Page({
    data: {
        sourceType: ['album', 'camera'],
        compressed: false,
        maxDuration: 60,
        src: '',
        info: '',
        icon: '../../images/cross.png',
        showVideo: false
    },
    playVideo() {
        // swan.showToast({
        //     title: '触发bindplay'
        // });
        console.log('触发bindplay');
    },
    chooseVideo() {
        let self = this;
        swan.chooseVideo({
            sourceType: this.getData('sourceType'),
            compressed: this.getData('compressed'),
            maxDuration: this.getData('maxDuration'),
            success(res) {
                // 成功返回选定视频的临时文件路径
                let duration = +res.duration;
                self.setData({
                    'src': res.tempFilePath,
                    'showVideo': true,
                    'maxDuration': duration.toFixed(1)
                });
            },
            fail(err) {
                console.log('错误码：' + err.errCode);
                console.log('错误信息：' + err.errMsg);
            }
        });
    }
});
