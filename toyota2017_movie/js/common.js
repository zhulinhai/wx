/*
* 工具函数
* */
function getPixelRatio(context) {
    var backingStore = context.backingStorePixelRatio ||
        context.webkitBackingStorePixelRatio ||
        context.mozBackingStorePixelRatio ||
        context.msBackingStorePixelRatio ||
        context.oBackingStorePixelRatio ||
        context.backingStorePixelRatio || 1;
    return (window.devicePixelRatio || 1) / backingStore;
}

function getTrueLength(str){//获取字符串的真实长度（字节长度）
    var len = str.length, truelen = 0;
    for(var x = 0; x < len; x++){
        if(str.charCodeAt(x) > 128){
            truelen += 2;
        }else{
            truelen += 1;
        }
    }
    return truelen;
}
function cutString(str, leng){//按字节长度截取字符串，返回substr截取位置
    var len = str.length, tlen = len, nlen = 0;
    for(var x = 0; x < len; x++){
        if(str.charCodeAt(x) > 128){
            if(nlen + 2 < leng){
                nlen += 2;
            }else{
                tlen = x;
                break;
            }
        }else{
            if(nlen + 1 < leng){
                nlen += 1;
            }else{
                tlen = x;
                break;
            }
        }
    }
    return tlen;
}

function getCookie(c_name)
{
    if (document.cookie.length>0)
    {
        c_start=document.cookie.indexOf(c_name + "=");
        if (c_start!=-1)
        {
            c_start=c_start + c_name.length+1;
            c_end=document.cookie.indexOf(";",c_start);
            if (c_end==-1) c_end=document.cookie.length;
            return unescape(document.cookie.substring(c_start,c_end))
        }
    }
    return ""
}

function setCookie(c_name,value,expiredays)
{
    var exdate=new Date();
    exdate.setDate(exdate.getDate()+expiredays);
    document.cookie=c_name+ "=" +escape(value)+
        ((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
}

function request(paras){
    var url = location.search;
    var paraString = url.substring(url.indexOf("?")+1,url.length).split("&");
    var paraObj = {};
    for (i=0; j=paraString[i]; i++){
        paraObj[j.substring(0,j.indexOf("=")).toLowerCase()] = j.substring(j.indexOf("=")+1,j.length);
    }
    var returnValue = paraObj[paras.toLowerCase()];
    if(typeof(returnValue)=="undefined"){
        return "";
    }else{
        return returnValue;
    }
}

function isNullOrEmpty(strVal) {
    if (strVal == '' || strVal == null || strVal == undefined) {
        return true;
    } else {
        return false;
    }
}

function trim(str){ //删除左右两端的空格
    return str.replace(/(^\s*)|(\s*$)/g, "");
}
function ltrim(str){ //删除左边的空格
    return str.replace(/(^\s*)/g,"");
}
function rtrim(str){ //删除右边的空格
    return str.replace(/(\s*$)/g,"");
}

function isEmail(str){
    var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
    return reg.test(str);
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