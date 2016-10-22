// preloader
;(function($) {
  var config,
   preloader_pl,
    timer,
    draw_i=0,
   defaults = {
    preloader_class: 'preloader',
    preloader_percent_class: 'preloader__counter',
    preloader_svg_class:'preloader__svg',
    circle_radius:100,
     circle_width:15
  };
  function preloader(element,options){
    this.root=$(element);
    this.config=$.extend({},defaults,options);
    this.init();
  }
  preloader.prototype.re_draw=function() {
    percent=preloader_pl.counter+1;
    if(parseInt(preloader_pl.counter)>parseInt(preloader_pl.percent)) return;
    preloader_pl.counter=percent;

    if(percent>=100){
      preloader_pl.preloader.fadeOut(1000,function(){
        preloader_pl.root.css('overflow','');
        $(this).remove();
       });
      percent=100;
      clearInterval(timer);
    }
    preloader_pl.preloader_counter.text(percent);

    var angle =3.6*percent-90;
    angle %= 360;
    var radians= (angle/180) * Math.PI;
    var width=preloader_pl.config.circle_width;
    var radius=preloader_pl.config.circle_radius-width;
    var x = radius+width + Math.cos(radians) * radius;
    var y = radius+width + Math.sin(radians) * radius;
    var str = preloader_pl.arc.getAttribute("d");
    if(draw_i==0) {
      var str = str+ " M "+x + " " + y;
    }
    else {
      var str = str+ " L "+x + " " + y;
    }
    preloader_pl.arc.setAttribute("d", str);
    draw_i++;
  };
  preloader.prototype.re_calc=function(){
    var percent=Math.ceil(100*preloader_pl.img_load/preloader_pl.img_total);
    if(parseInt(preloader_pl.img_load)==parseInt(preloader_pl.img_total)) {
      percent = 100;
    };
    preloader_pl.percent=percent;
  };

  preloader.prototype.load_img_normal=function(){
    preloader_pl.img_load++;
    preloader_pl.re_calc();
  };
  preloader.prototype.load_img_error=function(){
    preloader_pl.img_load++;
    preloader_pl.re_calc();
  };
  preloader.prototype.init=function(){
    this.root.css('overflow','hidden');
    this.preloader=$('.'+this.config.preloader_class);
    this.preloader_counter=$('.'+this.config.preloader_percent_class);
    this.preloader_svg=$('.'+this.config.preloader_svg_class);
    this.arc=this.preloader_svg.find('.arc')[0];

    var img_list=[];

    $('*').each(function(){
      var
        $this=$(this),
        background=$this.css('background-image'),
        img=$this.is('img');
      if(background != 'none') {
        background = background.split(",");
        for (i = 0; i < background.length; i++) {
          var path = background[i].replace('url("', '').replace('")', '').replace(' ', '');
          img_list.push(path);
        }
      }
      if(img){
        var path = $this.attr('src');
        if(path){
          img_list.push(path);
        }
      }
    });
    this.img_total=img_list.length;
    this.img_load=0;
    this.counter=0;
    preloader_pl=this;
    for(i=0;i<img_list.length;i++){
      var image= new Image();
      image.onload=this.load_img_normal;
      image.onerror=this.load_img_normal;
      image.src=img_list[i];
    }
    this.preloader_counter.text(0);
    this.re_calc();
    timer=setInterval(this.re_draw,5);
  };
  $.fn.preloader=function(options){
    new preloader(this,options);
    return this;
  }
})(jQuery);

$('body').preloader();
//end preloader


(function() {
  'use strict';


//- animation при нажатии на кнопку авторизоваться
$('.btn__btn-link').click(function() {
		$('.btn__btn-link').hide('hover');
    $('.welcome-block').toggleClass('active');
});



$('.welcome-form__home').click(function() {
    $('.welcome-block').toggleClass('active');
    $('.btn__btn-link').show('hover');;
});
  
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwcmVsb2FkZXJcbjsoZnVuY3Rpb24oJCkge1xuICB2YXIgY29uZmlnLFxuICAgcHJlbG9hZGVyX3BsLFxuICAgIHRpbWVyLFxuICAgIGRyYXdfaT0wLFxuICAgZGVmYXVsdHMgPSB7XG4gICAgcHJlbG9hZGVyX2NsYXNzOiAncHJlbG9hZGVyJyxcbiAgICBwcmVsb2FkZXJfcGVyY2VudF9jbGFzczogJ3ByZWxvYWRlcl9fY291bnRlcicsXG4gICAgcHJlbG9hZGVyX3N2Z19jbGFzczoncHJlbG9hZGVyX19zdmcnLFxuICAgIGNpcmNsZV9yYWRpdXM6MTAwLFxuICAgICBjaXJjbGVfd2lkdGg6MTVcbiAgfTtcbiAgZnVuY3Rpb24gcHJlbG9hZGVyKGVsZW1lbnQsb3B0aW9ucyl7XG4gICAgdGhpcy5yb290PSQoZWxlbWVudCk7XG4gICAgdGhpcy5jb25maWc9JC5leHRlbmQoe30sZGVmYXVsdHMsb3B0aW9ucyk7XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cbiAgcHJlbG9hZGVyLnByb3RvdHlwZS5yZV9kcmF3PWZ1bmN0aW9uKCkge1xuICAgIHBlcmNlbnQ9cHJlbG9hZGVyX3BsLmNvdW50ZXIrMTtcbiAgICBpZihwYXJzZUludChwcmVsb2FkZXJfcGwuY291bnRlcik+cGFyc2VJbnQocHJlbG9hZGVyX3BsLnBlcmNlbnQpKSByZXR1cm47XG4gICAgcHJlbG9hZGVyX3BsLmNvdW50ZXI9cGVyY2VudDtcblxuICAgIGlmKHBlcmNlbnQ+PTEwMCl7XG4gICAgICBwcmVsb2FkZXJfcGwucHJlbG9hZGVyLmZhZGVPdXQoMTAwMCxmdW5jdGlvbigpe1xuICAgICAgICBwcmVsb2FkZXJfcGwucm9vdC5jc3MoJ292ZXJmbG93JywnJyk7XG4gICAgICAgICQodGhpcykucmVtb3ZlKCk7XG4gICAgICAgfSk7XG4gICAgICBwZXJjZW50PTEwMDtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICAgIH1cbiAgICBwcmVsb2FkZXJfcGwucHJlbG9hZGVyX2NvdW50ZXIudGV4dChwZXJjZW50KTtcblxuICAgIHZhciBhbmdsZSA9My42KnBlcmNlbnQtOTA7XG4gICAgYW5nbGUgJT0gMzYwO1xuICAgIHZhciByYWRpYW5zPSAoYW5nbGUvMTgwKSAqIE1hdGguUEk7XG4gICAgdmFyIHdpZHRoPXByZWxvYWRlcl9wbC5jb25maWcuY2lyY2xlX3dpZHRoO1xuICAgIHZhciByYWRpdXM9cHJlbG9hZGVyX3BsLmNvbmZpZy5jaXJjbGVfcmFkaXVzLXdpZHRoO1xuICAgIHZhciB4ID0gcmFkaXVzK3dpZHRoICsgTWF0aC5jb3MocmFkaWFucykgKiByYWRpdXM7XG4gICAgdmFyIHkgPSByYWRpdXMrd2lkdGggKyBNYXRoLnNpbihyYWRpYW5zKSAqIHJhZGl1cztcbiAgICB2YXIgc3RyID0gcHJlbG9hZGVyX3BsLmFyYy5nZXRBdHRyaWJ1dGUoXCJkXCIpO1xuICAgIGlmKGRyYXdfaT09MCkge1xuICAgICAgdmFyIHN0ciA9IHN0cisgXCIgTSBcIit4ICsgXCIgXCIgKyB5O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHZhciBzdHIgPSBzdHIrIFwiIEwgXCIreCArIFwiIFwiICsgeTtcbiAgICB9XG4gICAgcHJlbG9hZGVyX3BsLmFyYy5zZXRBdHRyaWJ1dGUoXCJkXCIsIHN0cik7XG4gICAgZHJhd19pKys7XG4gIH07XG4gIHByZWxvYWRlci5wcm90b3R5cGUucmVfY2FsYz1mdW5jdGlvbigpe1xuICAgIHZhciBwZXJjZW50PU1hdGguY2VpbCgxMDAqcHJlbG9hZGVyX3BsLmltZ19sb2FkL3ByZWxvYWRlcl9wbC5pbWdfdG90YWwpO1xuICAgIGlmKHBhcnNlSW50KHByZWxvYWRlcl9wbC5pbWdfbG9hZCk9PXBhcnNlSW50KHByZWxvYWRlcl9wbC5pbWdfdG90YWwpKSB7XG4gICAgICBwZXJjZW50ID0gMTAwO1xuICAgIH07XG4gICAgcHJlbG9hZGVyX3BsLnBlcmNlbnQ9cGVyY2VudDtcbiAgfTtcblxuICBwcmVsb2FkZXIucHJvdG90eXBlLmxvYWRfaW1nX25vcm1hbD1mdW5jdGlvbigpe1xuICAgIHByZWxvYWRlcl9wbC5pbWdfbG9hZCsrO1xuICAgIHByZWxvYWRlcl9wbC5yZV9jYWxjKCk7XG4gIH07XG4gIHByZWxvYWRlci5wcm90b3R5cGUubG9hZF9pbWdfZXJyb3I9ZnVuY3Rpb24oKXtcbiAgICBwcmVsb2FkZXJfcGwuaW1nX2xvYWQrKztcbiAgICBwcmVsb2FkZXJfcGwucmVfY2FsYygpO1xuICB9O1xuICBwcmVsb2FkZXIucHJvdG90eXBlLmluaXQ9ZnVuY3Rpb24oKXtcbiAgICB0aGlzLnJvb3QuY3NzKCdvdmVyZmxvdycsJ2hpZGRlbicpO1xuICAgIHRoaXMucHJlbG9hZGVyPSQoJy4nK3RoaXMuY29uZmlnLnByZWxvYWRlcl9jbGFzcyk7XG4gICAgdGhpcy5wcmVsb2FkZXJfY291bnRlcj0kKCcuJyt0aGlzLmNvbmZpZy5wcmVsb2FkZXJfcGVyY2VudF9jbGFzcyk7XG4gICAgdGhpcy5wcmVsb2FkZXJfc3ZnPSQoJy4nK3RoaXMuY29uZmlnLnByZWxvYWRlcl9zdmdfY2xhc3MpO1xuICAgIHRoaXMuYXJjPXRoaXMucHJlbG9hZGVyX3N2Zy5maW5kKCcuYXJjJylbMF07XG5cbiAgICB2YXIgaW1nX2xpc3Q9W107XG5cbiAgICAkKCcqJykuZWFjaChmdW5jdGlvbigpe1xuICAgICAgdmFyXG4gICAgICAgICR0aGlzPSQodGhpcyksXG4gICAgICAgIGJhY2tncm91bmQ9JHRoaXMuY3NzKCdiYWNrZ3JvdW5kLWltYWdlJyksXG4gICAgICAgIGltZz0kdGhpcy5pcygnaW1nJyk7XG4gICAgICBpZihiYWNrZ3JvdW5kICE9ICdub25lJykge1xuICAgICAgICBiYWNrZ3JvdW5kID0gYmFja2dyb3VuZC5zcGxpdChcIixcIik7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBiYWNrZ3JvdW5kLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdmFyIHBhdGggPSBiYWNrZ3JvdW5kW2ldLnJlcGxhY2UoJ3VybChcIicsICcnKS5yZXBsYWNlKCdcIiknLCAnJykucmVwbGFjZSgnICcsICcnKTtcbiAgICAgICAgICBpbWdfbGlzdC5wdXNoKHBhdGgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZihpbWcpe1xuICAgICAgICB2YXIgcGF0aCA9ICR0aGlzLmF0dHIoJ3NyYycpO1xuICAgICAgICBpZihwYXRoKXtcbiAgICAgICAgICBpbWdfbGlzdC5wdXNoKHBhdGgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5pbWdfdG90YWw9aW1nX2xpc3QubGVuZ3RoO1xuICAgIHRoaXMuaW1nX2xvYWQ9MDtcbiAgICB0aGlzLmNvdW50ZXI9MDtcbiAgICBwcmVsb2FkZXJfcGw9dGhpcztcbiAgICBmb3IoaT0wO2k8aW1nX2xpc3QubGVuZ3RoO2krKyl7XG4gICAgICB2YXIgaW1hZ2U9IG5ldyBJbWFnZSgpO1xuICAgICAgaW1hZ2Uub25sb2FkPXRoaXMubG9hZF9pbWdfbm9ybWFsO1xuICAgICAgaW1hZ2Uub25lcnJvcj10aGlzLmxvYWRfaW1nX25vcm1hbDtcbiAgICAgIGltYWdlLnNyYz1pbWdfbGlzdFtpXTtcbiAgICB9XG4gICAgdGhpcy5wcmVsb2FkZXJfY291bnRlci50ZXh0KDApO1xuICAgIHRoaXMucmVfY2FsYygpO1xuICAgIHRpbWVyPXNldEludGVydmFsKHRoaXMucmVfZHJhdyw1KTtcbiAgfTtcbiAgJC5mbi5wcmVsb2FkZXI9ZnVuY3Rpb24ob3B0aW9ucyl7XG4gICAgbmV3IHByZWxvYWRlcih0aGlzLG9wdGlvbnMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59KShqUXVlcnkpO1xuXG4kKCdib2R5JykucHJlbG9hZGVyKCk7XG4vL2VuZCBwcmVsb2FkZXJcblxuXG4oZnVuY3Rpb24oKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuXG4vLy0gYW5pbWF0aW9uINC/0YDQuCDQvdCw0LbQsNGC0LjQuCDQvdCwINC60L3QvtC/0LrRgyDQsNCy0YLQvtGA0LjQt9C+0LLQsNGC0YzRgdGPXG4kKCcuYnRuX19idG4tbGluaycpLmNsaWNrKGZ1bmN0aW9uKCkge1xuXHRcdCQoJy5idG5fX2J0bi1saW5rJykuaGlkZSgnaG92ZXInKTtcbiAgICAkKCcud2VsY29tZS1ibG9jaycpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbn0pO1xuXG5cblxuJCgnLndlbGNvbWUtZm9ybV9faG9tZScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICQoJy53ZWxjb21lLWJsb2NrJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICQoJy5idG5fX2J0bi1saW5rJykuc2hvdygnaG92ZXInKTs7XG59KTtcbiAgXG59KSgpOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
