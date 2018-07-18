/**
 * @file demo page for text
 * @author lvlei
 * @author sunbaixin(update)
 */

/* globals Page */
let initData = '这是一段文字.';
let extraLine = [];
Page({
    data: {
        text: initData
    },
    add(e) {
        extraLine.push('其他文字');
        this.setData({
            text: initData + extraLine.join(',')
        });
    },
    remove(e) {
        if (extraLine.length > 0) {
            extraLine.pop();
            this.setData({
                text: initData + extraLine.join(',')
            });
        }
    }
});
