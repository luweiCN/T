/**
 * Created by luwei on 2017/4/17.
 */

$(document).ready(function(){
    merchantsListSort('default', true, function (merchants) {
        addInfo(0, 8, merchants);
    });

    $('.list-header ul li').eq(0).find('a').click(function () {
        merchantsListSort('stars', true, function (merchants) {
            addInfo(0, 8, merchants);
        });
    });

    $('.list-header ul li').eq(1).find('a').click(function () {
        merchantsListSort('dis', true, function (merchants) {
            addInfo(0, 8, merchants);
        });
    });

    $('.list-header ul li').eq(2).find('a').click(function () {
        merchantsListSort('date', true, function (merchants) {
            addInfo(0, 8, merchants);
        });
    });
});


