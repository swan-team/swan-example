/**
 * @file demo page for apiDemo
 * @author renzhonghua
 */
/* globals Page, swan */

Page({
    data: {
        items: [{
            icon: '../../images/interface.png',
            name: '开放接口',
            open: false,
            list: [{
                subName: '授权',
                id: 'authorize'
            }, {
                subName: '获取用户信息',
                id: 'getUserInfo'
            }, {
                subName: '登录',
                id: 'login'
            }, {
                subName: '支付',
                id: 'payment'
            }, {
                subName: '设置',
                id: 'openSetting'
            }, {
                subName: '分享',
                id: 'openShare'
            }]
        }, {
            icon: '../../images/ui.png',
            name: '界面',
            open: false,
            list: [{
                subName: '设置页面标题',
                id: 'setNavigationBarTitle'
            }, {
                subName: '标题栏加载动画',
                id: 'navigationBarLoading'
            }, {
                subName: '页面跳转',
                id: 'navigateTo'
            }, {
                subName: '下拉刷新',
                id: 'pullDownRefresh'
            }, {
                subName: '显示操作菜单',
                id: 'showActionSheet'
            }, {
                subName: '显示模态弹窗',
                id: 'modal'
            }, {
                subName: '显示消息提示框',
                id: 'toast'
            }]
        }, {
            icon: '../../images/device.png',
            name: '设备',
            open: false,
            list: [{
                subName: '获取手机系统信息',
                id: 'getSystemInfo'
            }, {
                subName: '获取手机网络状态',
                id: 'getNetworkType'
            }, {
                subName: '监听手机网络状态',
                id: 'onNetworkStatusChange'
            }, {
                subName: '监听重力感应数据',
                id: 'getGravity'
            }, {
                subName: '监听罗盘数据',
                id: 'getCompass'
            }, {
                subName: '拨打电话',
                id: 'makePhoneCall'
            }, {
                subName: '剪贴板',
                id: 'clipboardData'
            }]
        }, {
            icon: '../../images/net.png',
            name: '网络',
            open: false,
            list: [{
                subName: '发起请求',
                id: 'request'
            }, {
                subName: '上传文件',
                id: 'uploadFile'
            }, {
                subName: '下载文件',
                id: 'downloadFile'
            }]
        }, {
            icon: '../../images/media.png',
            name: '媒体',
            open: false,
            list: [{
                subName: '图片',
                id: 'api-image'
            }, {
                subName: '文件',
                id: 'file'
            }, {
                subName: '选择视频',
                id: 'chooseVideo'
            // }, {
            //     subName: '录音管理',
            //     id: 'getRecorderManager'
            }]
        }, {
            icon: '../../images/location.png',
            name: '位置',
            open: false,
            id: 'getLocation'
        }, {
            icon: '../../images/storage.png',
            name: '数据',
            id: 'storage',
            open: false
        }]
    },

    toggleClick(e) {
        // 无子项直接跳转
        let apiName = e.currentTarget.dataset.id;
        if (apiName) {
            swan.navigateTo({
                url: '/pages/' + apiName + '/' + apiName
            });
            return;
        }
        // 子项展开与收起
        let items = this.getData('items');
        let index = e.currentTarget.dataset.index;
        items[index].open = !items[index].open;
        this.setData('items', items);
    },

    oneItemClick(e) {
        let apiName = e.currentTarget.dataset.id;
        swan.navigateTo({
            url: '/pages/' + apiName + '/' + apiName
        });
    }
});
