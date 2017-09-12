var helper = {
    getCookie: function getCookie(c_name) {
        if (document.cookie.length>0)
        {
            c_start=document.cookie.indexOf(c_name + "=");
            if (c_start!=-1)
            {
                c_start=c_start + c_name.length+1;
                c_end=document.cookie.indexOf(";",c_start);
                if (c_end==-1) c_end=document.cookie.length;
                return unescape(document.cookie.substring(c_start,c_end));
            }
        }
        return ""
    },
    setCookie: function setCookie(c_name,value,expiredays)
    {
        var exdate=new Date();
        exdate.setDate(exdate.getDate()+expiredays);
        document.cookie=c_name+ "=" +escape(value)+
            ((expiredays==null) ? "" : ";expires="+exdate.toGMTString());
    },
    require: function request(paras){
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
    },
    isNullOrEmpty: function isNullOrEmpty(strVal) {
        return (strVal == '' || strVal == null || strVal == undefined);
    },
    trim: function trim(str){ //删除左右两端的空格
        return str.replace(/(^\s*)|(\s*$)/g, "");
    },
    ltrim: function ltrim(str){ //删除左边的空格
        return str.replace(/(^\s*)/g,"");
    },
    rtrim: function rtrim(str){ //删除右边的空格
        return str.replace(/(\s*$)/g,"");
    },
    checkIsMobile: function checkIsMobile(t) {
        const regex = /^1[3|4|5|7|8][0-9]\d{8}$/;
        return (!(!t || !regex.test(t)));
    },
    isSecurityCode: function isSecurityCode(t,len){
        const regex = /^[0-9]*$/;
        if(!t || !t.match(regex)) return false;
        return (!(len && t.length != len));
    },
    isIllegalChar: function isIllegalChar(t){
        const regex = /[@#\$%\^&\*]+/g;
        return (regex.test(t));
    }
};


