!function(i){i.fn.PGresponsiveMenu=function(){i(this).each(function(){i(this).addClass("pg-horizontal-responsive-menu"),h(this);var e=this;function h(e){var h=0,s=i(e).width()+210,o="";i.each(i(e).children(),function(){0,h+=i(this).outerWidth(!0),s<h&&(o+=i("<div>").append(i(this).clone()).html(),i(this).remove())}),""!=o&&(i(e).append('<li  style="position:relative;" href="#" class="hideshow"><a href="javascript:void(0)"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg> </a><ul>'+o+"</ul></li>"),i(e).children("li.hideshow ul").css("top",i(e).children("li.hideshow").outerHeight(!0)+"px")),i(e).children("li.hideshow").click(function(){i(this).children("ul").toggle()}),i("li.hideshow ul li.pm-profile-tab a").click(function(){var e=i(this).attr("href");return i("li.pm-profile-tab a").removeClass("active"),i(this).addClass("active"),i(".pg-profile-tab-content").hide(),i(e).find(".pm-section-content:first").show(),i("li.hideshow ul").hide(),i(e).fadeIn("slow"),!1})}i(window).resize(function(){i(e).append(i(i(i(e).children("li.hideshow")).children("ul")).html()),i(e).children("li.hideshow").remove(),h(e)})}),setTimeout(function(){i(".pg-horizontal-responsive-menu li.hideshow ul:empty").closest(".pg-horizontal-responsive-menu li.hideshow").hide();var e=i(".pmagic").find("a").css("color");i(".pg-horizontal-responsive-menu li.hideshow").css("fill",e)},1e3)}}(jQuery);