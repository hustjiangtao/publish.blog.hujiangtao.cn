// build time:Fri Jan 25 2019 19:06:26 GMT+0800 (中国标准时间)
!function(t){var a=t("#search-form-wrap"),e=!1,i=200,n=function(){e=!0},r=function(t){setTimeout(function(){e=!1,t&&t()},i)};t("#nav-search-btn").on("click",function(){e||(n(),a.addClass("on"),r(function(){t(".search-form-input").focus()}))}),t(".search-form-input").on("blur",function(){n(),a.removeClass("on"),r()}),t("body").on("click",function(){t(".article-share-box.on").removeClass("on")}).on("click",".article-share-link",function(a){a.stopPropagation();var e=t(this),i=e.attr("data-url"),n=i,n=encodeURIComponent(i),r="article-share-box-"+e.attr("data-id"),o=e.offset(),s=(window.location.href,t("title").html()),c=t(".article-entry img"),l=c.length?t(".article-entry img").eq(0).attr("src"):"";if(""===l||/^(http:|https:)?\/\//.test(l)||(l=window.location.origin+l),t("#"+r).length){var h=t("#"+r);if(h.hasClass("on"))return void h.removeClass("on")}else{var f=['<div id="'+r+'" class="article-share-box">','<input class="article-share-input" value="'+i+'">','<div class="article-share-links">','<a href="http://v.t.sina.com.cn/share/share.php?url='+n+"&title="+s+"&pic="+l+'" class="article-share-weibo" target="_blank" title="微博"></a>','<a href="http://s.jiathis.com/qrcode.php?url='+n+"&title="+s+'" class="article-share-wechat" target="_blank" title="微信"></a>','<a href="http://connect.qq.com/widget/shareqq/index.html?url='+n+"&title="+s+"&source="+s+'" class="article-share-qq" target="_blank" title="QQ"></a>','<a href="http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url='+n+"&title="+s+"&pics="+l+"&summary="+s+'" class="article-share-qqzone" target="_blank" title="QQ空间"></a>','<br/><a href="https://twitter.com/intent/tweet?url='+n+'" class="article-share-twitter" target="_blank" title="Twitter"></a>','<a href="https://www.facebook.com/sharer.php?u='+n+'" class="article-share-facebook" target="_blank" title="Facebook"></a>','<a href="http://pinterest.com/pin/create/button/?url='+n+'" class="article-share-pinterest" target="_blank" title="Pinterest"></a>','<a href="https://plus.google.com/share?url='+n+'" class="article-share-google" target="_blank" title="Google+"></a>',"</div>","</div>"].join(""),h=t(f);t("body").append(h)}t(".article-share-box.on").hide(),h.css({top:o.top+25,left:o.left}).addClass("on")}).on("click",".article-share-box",function(t){t.stopPropagation()}).on("click",".article-share-box-input",function(){t(this).select()}).on("click",".article-share-box-link",function(t){t.preventDefault(),t.stopPropagation(),window.open(this.href,"article-share-box-window-"+Date.now(),"width=500,height=450")}),t(".article-entry").each(function(a){t(this).find("img").each(function(){if(!t(this).parent().hasClass("fancybox")){var a=this.alt;a&&t(this).after('<span class="caption">'+a+"</span>"),t(this).wrap('<a href="'+this.src+'" title="'+a+'" class="fancybox"></a>')}}),t(this).find(".fancybox").each(function(){t(this).attr("rel","article"+a)})}),t.fancybox&&t(".fancybox").fancybox();var o=t("#container"),s=!1,c=200,l=function(){s=!0},h=function(){setTimeout(function(){s=!1},c)};t("#main-nav-toggle").on("click",function(){s||(l(),o.toggleClass("mobile-nav-on"),h())}),t("#wrap").on("click",function(){!s&&o.hasClass("mobile-nav-on")&&o.removeClass("mobile-nav-on")})}(jQuery);
//rebuild by neat 