/**
 * Created by zhulinhai on 17/12/8.
 */
var mainSwiper;
function initSwiper() {
    mainSwiper = new Swiper('.swiper-container', {
        paginationClickable: true,
        longSwipesRatio: 0.3,
        pagination: '.pagination',
        touchRatio:1,
        observer:true,//修改swiper自己或子元素时，自动初始化swiper
        observeParents:true//修改swiper的父元素时，自动初始化swiper
    });
}

$(function (){
    initSwiper();
});
