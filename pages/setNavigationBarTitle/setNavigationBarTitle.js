/**
 * @file demo page for apiDemo
 * @author renzhonghua
 */
/* globals Page, swan */

Page({
    data: {
        title: 'setNavigationBarTitle',
        newTitle: ''
    },

    titleInput(e) {
        this.setData('newTitle', e.detail.value);
    },

    setNavigationBarTitle(e) {
        let newTitle = this.getData('newTitle');
        if (!newTitle) {
            swan.showToast({
                title: '请输入标题'
            });
            return;
        }
        swan.setNavigationBarTitle({
            title: this.getData('newTitle')
        });
    }
});
