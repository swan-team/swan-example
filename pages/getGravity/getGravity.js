/**
 * @file test for  swan.onAccelerometerChange api
   swan.startAccelerometer api
   swan.stopAccelerometer api
 * @author haoyang
 */
/* globals Page, swan */
/* eslint-disable new-cap */

Page({
    data: {
        title: '倾斜手机即可移动下方小球',
        iswatch: true,
        x: 0,
        y: 0,
        z: 0
    },
    onReady() {
        this.position = {
            x: 151,
            y: 151,
            vx: 0,
            vy: 0,
            ax: 0,
            ay: 0
        };
        let self = this;
        swan.onAccelerometerChange(function (res) {
            self.setData({
                x: res.x.toFixed(2),
                y: res.y.toFixed(2),
                z: res.z.toFixed(2)
            });
            self.position.ax = Math.sin(res.x * Math.PI / 2);
            self.position.ay = -Math.sin(res.y * Math.PI / 2);

        });
        this.interval = setInterval(function () {
            self.drawSmallBall();
        }, 20);

    },
    onShow() {
        let watch = this.getData('iswatch');
        if (watch) {
            swan.startAccelerometer();
        } else {
            swan.stopAccelerometer();
        }
    },
    drawSmallBall() {
        let p = this.position;
        p.x = p.x + p.vx;
        p.y = p.y + p.vy;
        p.vx = p.vx + p.ax;
        p.vy = p.vy + p.ay;

        if (Math.sqrt(Math.pow(Math.abs(p.x) - 151, 2) + Math.pow(Math.abs(p.y) - 151, 2)) >= 115) {
            if (p.x > 151 && p.vx > 0) {
                p.vx = 0;
            }
            if (p.x < 151 && p.vx < 0) {
                p.vx = 0;
            }
            if (p.y > 151 && p.vy > 0) {
                p.vy = 0;
            }
            if (p.y < 151 && p.vy < 0) {
                p.vy = 0;
            }
        }
        let stx = this.createCanvasContext('small-ball');
        stx.beginPath(0);
        stx.arc(p.x, p.y, 15, 0, Math.PI * 2);
        stx.setFillStyle('#3388FF');
        stx.fill();
        stx.draw();
    },
    startWatch() {
        let self = this;
        self.setData('iswatch', true);
        swan.startAccelerometer();
    },
    stopWatch() {
        this.setData('iswatch', false);
        swan.stopAccelerometer();

    },
    onUnload() {
        clearInterval(this.interval);
    }

});
