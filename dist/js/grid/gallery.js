$(function(){$.ajax({url:"http://api.flickr.com/services/rest/",data:{format:"json",method:"flickr.interestingness.getList",api_key:"f77cf83fcba4290ba3b0c54b36af5f3b",tags:"natual",extras:"description, date_taken",per_page:50},dataType:"jsonp",jsonp:"jsoncallback"}).done(function(a){var t,i,s=$("#gallery"),o=$("#galleryLoading");o.removeClass("fadeInRightBig").addClass("fadeOutLeftBig"),_.delay(function(){o.hide()},1e3),s.removeClass("hide").addClass("animated fadeInUpBig"),$.each(a.photos.photo,function(e,a){i="http://farm"+a.farm+".static.flickr.com/"+a.server+"/"+a.id+"_"+a.secret,t='<div class="item"><img src="'+i+'_z.jpg"><a href="'+i+'_c.jpg" rel="prettyPhoto[gallery]"></a><div class="desc"><h4>'+a.title+"</h4><p>"+a.description._content+"</p><span>"+a.datetaken+"</span></div></div>",$(t).appendTo(s)}),e()});var e=function(){$("#gallery").removeClass("hide"),$('a[rel^="prettyPhoto"]').prettyPhoto({slideshow:5e3,autoplay_slideshow:!1}),$("#gallery").gridalicious({animate:!0,gutter:1,width:250})}});