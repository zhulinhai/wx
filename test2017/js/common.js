function getPixelRatio(e){var t=e.backingStorePixelRatio||e.webkitBackingStorePixelRatio||e.mozBackingStorePixelRatio||e.msBackingStorePixelRatio||e.oBackingStorePixelRatio||e.backingStorePixelRatio||1;return(window.devicePixelRatio||1)/t}function getCookie(e){return document.cookie.length>0&&(c_start=document.cookie.indexOf(e+"="),-1!=c_start)?(c_start=c_start+e.length+1,c_end=document.cookie.indexOf(";",c_start),-1==c_end&&(c_end=document.cookie.length),unescape(document.cookie.substring(c_start,c_end))):""}function setCookie(e,t,i){var n=new Date;n.setDate(n.getDate()+i),document.cookie=e+"="+escape(t)+(null==i?"":";expires="+n.toGMTString())}function request(e){var t=location.search,n=t.substring(t.indexOf("?")+1,t.length).split("&"),o={};for(i=0;j=n[i];i++)o[j.substring(0,j.indexOf("=")).toLowerCase()]=j.substring(j.indexOf("=")+1,j.length);var r=o[e.toLowerCase()];return void 0===r?"":r}function isNullOrEmpty(e){return""==e||null==e||void 0==e}function trim(e){return e.replace(/(^\s*)|(\s*$)/g,"")}function ltrim(e){return e.replace(/(^\s*)/g,"")}function rtrim(e){return e.replace(/(\s*$)/g,"")}function checkIsMobile(e){return!(!e||!/^1[3|4|5|7|8][0-9]\d{8}$/.test(e))}function isSecurityCode(e,t){return!(!e||!e.match(/^[0-9]*$/)||t&&e.length!=t)}function isIllegalChar(e){return!!/[@#\$%\^&\*]+/g.test(e)}