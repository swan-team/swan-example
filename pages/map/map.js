/**
 * @file demo page for map
 * @author lvlei
 */
/* globals Page, swan */
/* eslint-disable new-cap */
Page({
    data: {
        latitude: '40.042500',
        longitude: '116.274040'
    },
    onReady() {
        this.mapContext = swan.createMapContext('myMap');
    }
});
