/**
 * @file demo page for apiDemo
 * @author renzhonghua
 */
/* globals Page, swan */

 // {
 //     "verticalAccuracy": -1,
 //     "speed": -1,
 //     "longitude": -122.406417,
 //     "horizontalAccuracy": 5,
 //     "latitude": 37.785834,
 //     "accuracy": 5,
 //     "altitude": 0
 // }
Page({
    data: {
        title: 'getLocation',
        loading: false
    },

    getLocation(e) {
        this.setData('loading', true);
        swan.getLocation({
            type: 'wgs84',
            altitude: true,
            success: res => {
                this.setData('location', this.formatLocation(res.longitude, res.latitude));
            },
            fail: err => {
                swan.showToast({
                    title: '获取失败'
                });
            },
            complete: () => {
                this.setData('loading', false);
            }
        });
    },

    clearLocation(e) {
        this.setData('location', '');
    },

    formatLocation(longitude, latitude) {
        if (typeof longitude === 'string' && typeof latitude === 'string') {
            longitude = parseFloat(longitude);
            latitude = parseFloat(latitude);
        }

        longitude = longitude.toFixed(2);
        latitude = latitude.toFixed(2);

        return {
            longitude: longitude.toString().split('.'),
            latitude: latitude.toString().split('.')
        };
    }
});
