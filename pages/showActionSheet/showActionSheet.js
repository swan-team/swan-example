/**
 * @file demo page for apiDemo
 * @author renzhonghua
 */
/* globals Page, swan */

Page({
    data: {
        title: 'showActionSheet'
    },

    showActionSheet() {
        swan.showActionSheet({
            itemList: ['选项一', '选项二', '选项三', '选项四']
        });
    }
});
