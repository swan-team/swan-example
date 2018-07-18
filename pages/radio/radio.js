/**
 * @demo test for radio component
 * @author lvlei
 */

Page({
    data: {
        items: [
            {
                value: 'have',
                text: '选中选项',
                checked: true,
                id: 1
            },
            {
                value: 'have',
                text: '未选中选项',
                id: 2
            },
            {
                value: 'none',
                text: '未选中选项',
                id: 3
            }
        ],
        result: []
    },

    radioChange: e => {
        console.log(e);
    },

    formSubmit: e => {
        console.log('ljh', e);
    }
});
