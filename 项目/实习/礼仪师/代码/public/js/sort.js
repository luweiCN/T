/**
 * Created by luwei on 2017/4/19.
 */

var TotalRecords = 0;

/*************************
 Function: merchantsListSort
 Description: 获取礼仪师列表，并按一定的顺序输出新的礼仪师json列表
 Calls: sortMerchants(json, key),getMerchants (pages, pageSize,success),removeMerchants(json, key)
 Called By: // 调用本函数的函数清单
 Input:
     sortMethod：排序方式，
        参数选项：default：默认排序，按照从数据库中获取的顺序进行排序
                stars：按照星级从高到低排序
                date:按注册时间
                dis:按距离排序
     headImg：是否需要头像
        参数选项：true：需要头像
                false：不需要头像
 Output: 无输出
 Return: 排序后符合要求的json
 Others: // 其它说明
**************************/
function merchantsListSort(sortMethod, headImg, callback){
    //获取礼仪师总数
    $.ajax({
        url: "http://192.168.1.151:30001/api/Merchants/1/1?sort={sort}&mname={mname}",
        async:false,
        dataType:'json',
        success: function (data_test) {
            TotalRecords = data_test.Pagination.TotalRecords;
        }
    });

    var url = '';
    switch (sortMethod){
        case 'stars':
            url = "http://api.idukou.com/" + "api/Merchants/1/" + TotalRecords + "?sort=PublicPraiseScore&mname={mname}";
            break;
        //按评价排序
        case 'dis':
            url = "http://api.idukou.com/" + "api/Merchants/1/" + TotalRecords + "?sort=Distance&mname={mname}";
            break;
        //按距离排序
        case 'date':
            url = "http://api.idukou.com/" + "api/Merchants/1/" + TotalRecords + "?sort=CreateDate&mname={mname}";
            break;
        //按创建时间排序
        default:
            url = "http://api.idukou.com/" + "api/Merchants/1/" + TotalRecords + "?sort={sort}&mname={mname}";
            break;
        //按创建时间排序
    }
    getMerchants(url, function (merchants) {
        if(headImg) {
            merchants.MerchantDataObjectList = removeMerchants(merchants.MerchantDataObjectList,'HeadImg');
        }

        return callback(merchants);
    });
}

/*************************
 Function: removeMerchants
 Description: 对json按某一个键值进行判断，若为空或不存在，则删除
 Calls: sort()
 Called By: // 调用本函数的函数清单
 Input:
    json：需要做删除处理的json
    key：判断的键名
 Output: 无输出
 Return: 处理后的json
 Others: // 其它说明
 **************************/
function removeMerchants(json, key){
    for(var i=0; i<json.length; i++){
        if ((typeof(json[i][key]) == "object") || (json[i][key] == '')){
            json.splice(i,1);
            i--;
        }
    }
    return json;
}

/*************************
 Function: sortMerchants
 Description: 对json按某一个键值进行降序排序
 Calls: sort()
 Called By: // 调用本函数的函数清单
 Input:
    json：需要排序的json
    key：排序的键名
 Output: 无输出
 Return: 排序后的json
 Others: // 其它说明
 **************************/
function sortMerchants(json, key){
    //对json进行降序排序函数
    var desc = function (x,y) {
        return (x[key]<y[key])? 1: -1;
    }
    json.sort(desc);

    return $.parseJSON(json);;
}

/*************************
 Function: getMerchants
 Description: 获取礼仪师列表
 Calls: ajax
 Called By: // 调用本函数的函数清单
 Input:
    pages：获取的页数
    pageSize：每页的条数
    success：获取成功需要执行的回调函数
 Output: 无输出
 Return: 礼仪师json列表
 Others: // 其它说明
 **************************/
function getMerchants (myUrl, callBack) {
    $.ajax({
        url: myUrl,
        async:true,
        dataType:'json',
        success: callBack
    });
}

/*************************
 Function: addInfo
 Description: 把获取的礼仪师信息添加到页面
 Calls: jquery
 Called By: // 调用本函数的函数清单
 Input:
    start：从列表中第几条信息开始添加
    size：每页的条数
    json：获取到的礼仪师列表（排过序的）
 Output: 无输出
 Return: 无返回值
 Others: // 其它说明
 **************************/
function addInfo(start, size, json){
    for(var i=start;i<size; i++){
        if(json.MerchantDataObjectList[i]){
            $('.list-content li').eq(i%16).show();
            if(json.MerchantDataObjectList[i].HeadImg){
                $('.list-content li').eq(i%16).find('img').attr('src','http://img.idukou.com/' + json.MerchantDataObjectList[i].HeadImg);
            } else{
                $('.list-content li').eq(i%16).find('img').attr('src','./images/no-img.jpg');
            }
            $('.list-content li').eq(i%16).find('h4').html(json.MerchantDataObjectList[i].MName);
            $('.list-content li').eq(i%16).find('span.orderAcc').html('服务次数：'+ json.MerchantDataObjectList[i].OrderCount);
            $('.list-content li').eq(i%16).attr('mid',json.MerchantDataObjectList[i].ID);
            $('.list-content li').eq(i%16).find('a').attr('href','./introduction.html?mid=' + json.MerchantDataObjectList[i].ID);
        } else {
            for (; i<size;i++){
                $('.list-content li').eq(i%16).hide();
            }
        }
    }
}