/**
 * Created by luwei on 2017/1/18.
 */
function doMove(obj,attr, dir, target, spe, endFn){
    dir = parseInt(getStyle(obj, attr)) < target? dir: -dir;
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        var speed = parseInt(getStyle(obj, attr)) + dir;
        if(speed > target && dir>0){
            speed = target;
        }

        if(speed < target && dir<0){
            speed = target;
        }
        obj.style[attr] = speed + 'px';

        if(speed == target){
            clearInterval(obj.timer);

            endFn&&endFn();  //回调函数
        }
    }, spe);
}

function getStyle(obj, attr){
    return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr];
}