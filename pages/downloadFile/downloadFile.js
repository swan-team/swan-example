/**
 * @file demo page for apiDemo
 * @author renzhonghua
 */
/* globals Page, swan */

Page({
    data: {
        title: 'downloadFile',
        loading: false
    },

    downloadFile() {
        this.setData('loading', true);
        swan.downloadFile({
            url: 'https://www.adobe.com/content/dam/acom/en/devnet/acrobat/pdfs/pdf_open_parameters.pdf',
            success: res => {
                let filePath = res.tempFilePath;
                swan.showModal({
                    title: 'PDF文件下载完成',
                    content: '是否需要打开？',
                    success: res => {
                        if (res.confirm) {
                            swan.openDocument({
                                filePath,
                                fileType: 'pdf',
                                fail: err => {
                                    swan.showToast({
                                        title: '打开失败'
                                    });
                                }
                            });
                        }
                    }
                });
            },
            fail: err => {
                swan.showToast({
                    title: '下载失败'
                });
            },
            complete: () => {
                this.setData('loading', false);
            }
        });
    }
});
