/**
 * @file demo page for apiDemo
 * @author renzhonghua
 */
/* globals Page, swan */

Page({
    data: {
        title: 'saveFile/openDocument',
        filePath: ''
    },

    saveFile() {
        swan.showToast({
            title: '开始下载'
        });
        swan.downloadFile({
            header: {
                'Cache-Control': 'no-cache'
            },
            url: 'https://www.adobe.com/content/dam/acom/en/devnet/acrobat/pdfs/pdf_open_parameters.pdf',
            success: res => {
                swan.saveFile({
                    tempFilePath: res.tempFilePath,
                    success: res => {
                        swan.showToast({
                            title: '保存成功'
                        });
                        this.setData('filePath', res.savedFilePath);
                    },
                    fail: err => {
                        swan.showToast({
                            title: '保存失败'
                        });
                    }
                });
            },
            fail: err => {
                swan.showToast({
                    title: '下载失败'
                });
            }
        });
    },

    openDocument() {
        swan.openDocument({
            filePath: this.getData('filePath'),
            fileType: 'pdf',
            fail: err => {
                if (!this.getData('filePath')) {
                    swan.showToast({
                        title: '请先点击保存文件'
                    });
                    return;
                }
                swan.showToast({
                    title: '打开失败'
                });
            }
        });
    }
});
