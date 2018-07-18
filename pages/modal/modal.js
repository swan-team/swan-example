/**
 * @file demo page for apiDemo
 * @author renzhonghua
 */
/* globals Page, swan */

Page({
    data: {
        title: 'modal'
    },

    showModal() {
        swan.showModal({
            title: '标题',
            content: '提示内容、告知状态、信息和解决方法，描述尽量控制在两行内',
            showCancel: false
        });
    },

    showModalNotitle() {
        swan.showModal({
            content: '提示内容、告知状态、信息和解决方法，描述尽量控制在两行内',
            confirmText: '确定',
            cancelText: '取消'
        });
    }
});
