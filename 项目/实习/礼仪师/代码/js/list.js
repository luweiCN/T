/**
 * Created by luwei on 2017/4/18.
 */
$(function () {
    $(document).ready(function(){
        var TotalRecords = 0;
        var pageNow = 0; //记录当前页数
        //获取礼仪师总数
        $.ajax({
            url: "http://api.idukou.com/api/Merchants/1/1?sort={sort}&mname={mname}",
            async:false,
            dataType:'json',
            success: function (data_test) {
                TotalRecords = data_test.Pagination.TotalRecords;
                var n = Math.ceil(TotalRecords/16);
                if (n == 1){
                    $('#qbd-list .list-control ul').hide();
                } else {
                    var liHtml = '<li>上一页</li>';
                    for(var i=0; i<n; i++){
                        liHtml += '<li>'+ (i+1) +'</li>'
                    }
                    liHtml += '<li>下一页</li>';
                    $('#qbd-list .list-control ul').html(liHtml);
                }
            }
        });

        merchantsListSort('default', false, function (merchants) {
            addInfo(0, 16,merchants); //初始化显示第一页
            pageNow = 1; //初始化当前页数

            listControl(pageNow, merchants);
        });


        //星级高
        $('.list-header ul li').eq(0).find('a').click(function () {
            merchantsListSort('stars', false, function (merchants) {
                addInfo(0, 16, merchants); //初始化显示第一页
                pageNow = 1; //初始化当前页数

                listControl(pageNow, merchants);
            });
        });

        $('.list-header ul li').eq(1).find('a').click(function () {
            merchantsListSort('dis', false, function (merchants) {
                addInfo(0, 16, merchants); //初始化显示第一页
                pageNow = 1; //初始化当前页数

                listControl(pageNow, merchants);
            });
        });

        $('.list-header ul li').eq(2).find('a').click(function () {
            merchantsListSort('date', false, function (merchants) {
                addInfo(0, 16, merchants); //初始化显示第一页
                pageNow = 1; //初始化当前页数

                listControl(pageNow, merchants);
            });
        });

    });
});

function listControl(pageNow,merchants){
    var n = Math.ceil(TotalRecords/16); //获取总页数
    //给1-6按钮添加点击事件
    for(var i=1; i<n+1; i++){
        $('.list-control li').eq(i).click(function () {
            pageNow = $(this).index();
            addInfo((pageNow-1)*16, pageNow*16,merchants);
        });
    }

    //给上一页按钮添加点击事件
    $('.list-control li').eq(0).click(function () {
        if(pageNow != 1){
            pageNow -= 1;
        } else {
            alert('已经是第一页')
        }
        addInfo((pageNow-1)*16, pageNow*16,merchants);
    });

    //给下一页按钮添加点击事件
    $('.list-control li').eq(7).click(function () {
        if(pageNow != n){
            pageNow += 1;
        } else {
            alert('已经是最后一页')
        }
        addInfo((pageNow-1)*16, pageNow*16,merchants);
    });
}
