/**
 * @file demo page for apiDemo
 * @author renzhonghua
 */
/* globals Page, swan */

Page({
    data: {
        title: 'uploadFile'
    },

    uploadFile() {
        swan.chooseImage({
            count: 1,
            sizeType: ['compressed'],
            sourceType: ['album'],
            success: res => {
                swan.uploadFile({
                    url: 'https://smartapp.baidu.com/mappconsole/api/checkFile',
                    filePath: res.tempFilePaths[0],
                    name: 'myfile',
                    success: res => {
                        swan.showToast({
                            title: '上传成功',
                            icon: 'success'
                        });
                    },
                    fail: err => {
                        swan.showToast({
                            title: '上传失败'
                        });
                    }
                });
            }
        });
    }
});
