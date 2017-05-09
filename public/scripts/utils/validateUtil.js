/**
 * Created by luhao on 2016/11/19.
 */
var InputUtil = function (){


    function ltrim(str){ //删除左边的空格
        return str.replace(/(^\s*)/g,"");
    }
    function rtrim(str){ //删除右边的空格
        return str.replace(/(\s*$)/g,"");
    }

    function checkIsMobile(t) {
        var regex = /^1[3|4|5|7|8][0-9]\d{8}$/;
        if(!t||!regex.test(t)) return false;
        return true;
    }

    function isSecurityCode(t,len){
        var regex = /^[0-9]*$/;
        if(!t || !t.match(regex)) return false;
        if(len && t.length != len) return false;
        return true;
    }

    function isIllegalChar(t){
        var regex = /[@#\$%\^&\*]+/g;
        if(regex.test(t)) return true;
        return false;
    }

    return {
        isEmpty: function (strVal) {
            if (strVal == '' || strVal == null || strVal == undefined) {
                return true;
            } else {
                return false;
            }
        },
        trim : function (str){ //删除左右两端的空格
            return str.replace(/(^\s*)|(\s*$)/g, "");
        },
        ltrim : ltrim,
        rtrim:rtrim,
        isMobile:checkIsMobile,
        isCode : isSecurityCode,
        illegalChar:isIllegalChar,
        //验证正整数
        isIntegerPositive: function (input) {
            var regex = /^[1-9]*[1-9][0-9]*$/;
            if (input.match(regex)) {
                return true;
            } else {
                return false;
            }
        },
    };
}