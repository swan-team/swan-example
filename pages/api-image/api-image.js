/**
 * @file demo page for apiDemo
 * @author renzhonghua
 */
/* globals Page, swan */

Page({
    data: {
        title: 'choose/previewImage'
    },

    chooseImage() {
        swan.chooseImage({
            count: 1,
            sizeType: ['compressed'],
            success: res => {
                swan.showModal({
                    title: '图片选择成功',
                    content: res.tempFilePaths[0],
                    showCancel: false
                });
            }
        });
    },

    previewImage() {
        swan.previewImage({
            urls: [
                'https://b.bdstatic.com/searchbox/icms/searchbox/img/swan-preview-image.jpg',
                'https://b.bdstatic.com/searchbox/icms/searchbox/img/swan-preview-image-2.png'
            ]
        });
    }
});
