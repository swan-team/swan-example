/**
 * @file test for checkbox component
 * @author lijiahui
 */

Page({
    data: {
        items: [
            {
                value: 'China',
                text: '中国',
                id: '1'
            },
            {
                value: 'US',
                text: '美国',
                id: '2'
            },
            {
                value: 'Britain',
                text: '英国',
                checked: true,
                id: '3'
            }
        ],
        result: []
    },

    checkboxChange: e => {
        console.log(e);
    },

    formSubmit: e => {
        console.log('ljh', e);
    }
});
