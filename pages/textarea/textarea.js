/**
 * @file test textarea componnent
 * @author mabin
 */
/* globals Page, swan */
/* eslint-disable new-cap */

Page({
    data: {
        height: 1,
        focus: false
    },
    bindFocus(e) {
        console.log('focus - e:', e);
    },
    bindInput(e) {
        console.log('input - e:', e);
    },
    bindLinechange(e) {
        console.log('linechange - e:', e);
    },
    bindBlur(e) {
        console.log('blur - e:', e);
    }
});
