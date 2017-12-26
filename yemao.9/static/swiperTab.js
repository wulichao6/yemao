
function tabs(obj,swiperObj,className,index) {
    var tabSwiper = new Swiper(swiperObj, {
        initialSlide: index, // 设定初始化时slide的索引
        speed : 500,  
        autoHeight: true,  
        onSlideChangeStart : function() {
            if(tabSwiper){ 
            /*判断tabSwiper是否存在，否则当哈希值不为0的时候会报错 */
                $(obj+"."+className).removeClass(className);  
                $(obj).eq(tabSwiper.activeIndex).addClass(className); 
            }
        }
    });
    $(obj).on('touchstart mousedown', function(e) {
        e.preventDefault(); 
        $(obj+"."+className).removeClass(className);
        $(this).addClass(className);  
        tabSwiper.slideTo($(this).index()); 
    });
    $(obj).click(function(e) {
        e.preventDefault(); 
    });
}