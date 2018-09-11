/**
 * @file demo page for apiDemo
 * @author renzhonghua
 */
/* globals Page, swan */

Page({
    data: {
        title: 'action-sheet'
    },

    showActionSheet() {
        swan.showActionSheet({
            itemList: ['选项一', '选项二', '选项三', '选项四'],
            itemColor: '#333',
            success: res => {
                console.log('用户点击了第' + (res.tapIndex + 1) + '个按钮');
            }
        });
    }
});
