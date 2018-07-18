/**
 * @file label的示例
 * @author houyu
 */

/* globals Page */
Page({
    data: {
        items: [
            {name: 'USA', value: '美国'},
            {name: 'CHN', value: '中国', checked: 'true'}
        ]
    },
    clickme: function (e) {
        console.log(e);
    }
});
