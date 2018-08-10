/**
 * @file test for getRecorderManager api
 * @author haoyang
 */
/* globals Page, swan */
/* eslint-disable new-cap */
Page({
    data: {
        title: 'start/stopRecord、play/stopVoice',
        isend: false, // 是否停止录制
        isrecord: false, // 是否正在录制
        isplay: false, // 是否正在播放
        startTime: '00:00:00',
        endTime: '',
        num: 0
    },
    onLoad() {
        let self = this;
        self.options = {
            duration: 60000,
            sampleRate: 44100,
            numberOfChannels: 1,
            encodeBitRate: 96000,
            format: 'aac'
        };
        self.recorderManager = swan.getRecorderManager(); // 创建录音实例
        self.syncTimer;
    },
    getRecord() {
        // 开始/结束录音
        let self = this;
        let isrecord = self.getData('isrecord');
        if (!isrecord) {
            self.setData('isrecord', true);
            self.recorderManager.start(self.options);
            self.recorderManager.onStart(function () {
                self.timeRecoder(0);
            });
        } else {
            let endTime = self.getData('startTime');
            self.setData({
                'isrecord': false,
                'isend': true,
                'endTime': endTime,
                'startTime': '00:00:00'
            });
            self.recorderManager.stop();
            self.syncTimer && clearInterval(self.syncTimer);
            self.recorderManager.onStop(function (res) {
                const {tempFilePath} = res;
                self.tempFilePath = tempFilePath;
            });
        }
    },
    playRecord() {
        // 创建音频实例，播放/暂停音频
        let self = this;
        let isplay = !self.getData('isplay');
        let num = self.getData('num');
        self.setData('isplay', isplay);
        if (self.innerAudioContext) {
            self.innerAudioContext.destroy();
        }
        self.innerAudioContext = swan.createInnerAudioContext();
        self.innerAudioContext.src = self.tempFilePath;
        if (isplay) {
            self.innerAudioContext.play();
            self.timeRecoder(0);
            self.innerAudioContext.onEnded(function () {
                self.setData({
                    'isplay': false,
                    'startTime': '00:00:00'
                });
                swan.showToast({
                    'title': '录音自然结束'
                });
                self.syncTimer && clearInterval(self.syncTimer);
            });
        } else {
            self.innerAudioContext.pause();
            this.syncTimer && clearInterval(this.syncTimer);
        }
    },
    deleteRecord() {
        // 停止播放音频，摧毁语音实例
        this.setData({
            'isend': false,
            'isplay': false,
            'isrecord': false,
            'startTime': '00:00:00'
        });
        this.isFirstPlay = true;
        this.syncTimer && clearInterval(this.syncTimer);
        if (this.innerAudioContext) {
            this.innerAudioContext.stop();
            this.innerAudioContext.destroy();
        }
    },
    onHide() {
        // 监听页面隐藏时重置计时器及摧毁语音实例
        let endStatus = this.getData('isend');
        if (!endStatus) {
            // 未结束录音前隐藏小程序，回退到录音初始状态
            this.setData({
                'isrecord': false,
                'startTime': '00:00:00'
            });
            this.syncTimer && clearInterval(this.syncTimer);
            this.recorderManager.stop();
        } else {
            // 录音结束隐藏小程序，回退到录音播放状态
            this.setData({
                'isplay': false,
                'startTime': '00:00:00'
            });
            this.syncTimer && clearInterval(this.syncTimer);
            if (this.innerAudioContext) {
                this.innerAudioContext.pause();
            }
        }
    },
    onUnload() {
        // 监听页面卸载时摧毁语音实例
        if (this.innerAudioContext) {
            this.innerAudioContext.stop();
            this.innerAudioContext.destroy();
        }
    },
    formatTime(name) {
        name = name.toString();
        return name.length !== 1 ? name : '0' + name;
    },
    timeRecoder(init) {
        // 录音计时器
        let self = this;
        let hour;
        let minute;
        let second;
        clearInterval(self.syncTimer);
        self.syncTimer = setInterval(function () {
            init++;
            if (init < 3600) {
                minute = self.formatTime(parseInt(init / 60, 10));
                second = self.formatTime(parseInt(init % 60, 10));
                hour = '00';
            }
            else {
                hour = self.formatTime(parseInt(init / 3600, 10));
                minute = self.formatTime(parseInt((init - 3600) / 60, 10));
                second = self.formatTime(parseInt((init - 3600) % 60, 10));
            }

            self.setData({
                'startTime': hour + ':' + minute + ':' + second,
                'num': init
            });
        },
        1000);
    }
});
