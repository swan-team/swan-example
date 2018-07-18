/**
 * @file label的示例
 * @author houyu
 */
Page({
    data: {
        focus: false,
        inputValue: '',
        autoFocus: true
    },
    bindButtonTap: function () {
        this.setData({
            focus: true
        });
    },
    bindKeyInput: function (e) {
        this.setData({
            inputValue: e.detail.value
        });
    }
});
