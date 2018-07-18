/**
 * @file test for view component
 * @author houyu
 */

Page({
    data: {
        canvasShow: false,
        canvasOff: '',
        cur: 0,
        position: [
            78,
            108,
            138
        ]
    },
    onLoad() {
        console.log('onLoad');
    },

    canvas() {
        console.log('tap');
    },
    delcanvas() {
        this.setData('canvasShow', false);
    },
    showcanvas() {
        this.setData('canvasShow', true);
        const canvasContext = swan.createCanvasContext('qqqq');
    },
    canvas() {
        console.log('canvas-events');
    },
    mvcan() {
        console.log('canvas-mvcan');
    },
    changeCanvas() {
        !this.getData('canvasOff')
        ? this.setData('canvasOff', 'canvas-off')
        : this.setData('canvasOff', '');
    },
    sendadraw() {
        const ctx = this.createCanvasContext('myCanvas');
        ctx.clearRect(0, 0, 500, 500);
        ctx.draw();
        let cur = this.getData('cur') % 3;
        let position = this.getData('position');
        this.setData('cur', cur + 1);
        ctx.setFontSize(16);
        ctx.textAlign = 'center';
        ctx.fillText('有事搜一搜，没事看一看', 80, position[cur]);
        ctx.stroke();
        ctx.draw();
    }
});
