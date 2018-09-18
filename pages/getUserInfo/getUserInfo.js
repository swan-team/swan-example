/**
 * @file demo page for apiDemo
 * @author renzhonghua
 */
/* globals Page, swan */

Page({
    data: {
        nickname: '百度网友',
        imageSrc: '../../images/avator.png',
        nameColor: 'default',
        title: 'getUserInfo'
    },
    getUserInfo(e) {
        swan.getUserInfo({
            success: res => {
                let userInfo = res.userInfo;
                this.setData({
                    nickname: userInfo.nickName || '百度网友',
                    imageSrc: userInfo.avatarUrl || '../../images/avator.png',
                    nameColor: 'active'
                });
            },
            fail: err => {
                console.log(err);
                swan.showToast({
                    title: '请先授权'
                });
            }
        });
    },
    clearUserInfo(e) {
        this.setData({
            nickname: '百度网友',
            imageSrc: '../../images/avator.png',
            nameColor: 'default'
        });
    }
});
