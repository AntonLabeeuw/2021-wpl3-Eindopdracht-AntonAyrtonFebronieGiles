!function(t){"use strict";var e=1,a=null,i=null;t.fn.transitionPage=function(e,n){i.transitionFunction?i.transitionFunction(e,n):(t(e).hide(),t(n).show()),t(a+" fieldset").removeClass("active"),t(n).addClass("active")},t.fn.showState=function(e){if(i.stateFunction)return i.stateFunction(a+"_nav .multipage_state",e,i.pages.length);var n="";for(x=1;x<=i.pages.length;x++)x==e?n+=i.activeDot:n+=i.inactiveDot;t(a+"_nav .multipage_state").html(n)},t.fn.gotopage=function(n){if(t(a+"_nav .multipage_next").html(pm_error_object.next),isNaN(n)){var s=n;n=1,t(a+" fieldset").each(function(a){"#"+t(this).attr("id")==s&&(e=n=a+1)})}var l=null,r=t(a+" fieldset.active");t(a+" fieldset").each(function(t){++t==n&&(l=this)}),t(this).transitionPage(r,l),t(this).showState(n),t(a+"_nav .multipage_next").removeClass("submit");i.pages[n-1].title;if(i.stayLinkable){var o="#"+i.pages[n-1].id;document.location.hash=o}return 1==n?(t(a+"_nav .multipage_back").hide(),t(a+"_nav .multipage_next").show(),n==i.pages.length?(t(a+"_nav .multipage_next").addClass("submit"),t(a+"_nav .multipage_next").html(i.submitLabel)):i.pages[n].title?t(a+"_nav .multipage_next").html(pm_error_object.next+": "+i.pages[n].title):t(a+"_nav .multipage_next").html(pm_error_object.next)):n==i.pages.length?(t(a+"_nav .multipage_back").show(),t(a+"_nav .multipage_next").show(),i.pages[n-2].title?t(a+"_nav .multipage_back").html(pm_error_object.back+": "+i.pages[n-2].title):t(a+"_nav .multipage_back").html(pm_error_object.back),t(a+"_nav .multipage_next").addClass("submit"),t(a+"_nav .multipage_next").html(i.submitLabel)):(i.pages[n-2].title?t(a+"_nav .multipage_back").html(pm_error_object.back+": "+i.pages[n-2].title):t(a+"_nav .multipage_back").html(pm_error_object.back),i.pages[n].title?t(a+"_nav .multipage_next").html(pm_error_object.next+": "+i.pages[n].title):t(a+"_nav .multipage_next").html(pm_error_object.next),t(a+"_nav .multipage_back").show(),t(a+"_nav .multipage_next").show()),t(a+" fieldset.active input:first").focus(),e=n,!1},t.fn.validatePage=function(t){return!0},t.fn.validateAll=function(){for(var e=1;e<=i.pages.length;e++)if(!t(this).validatePage(e))return t(this).gotopage(e),!1;return!0},t.fn.gotofirst=function(){return e=1,t(this).gotopage(e),!1},t.fn.gotolast=function(){return e=i.pages.length,t(this).gotopage(e),!1},t.fn.nextpage=function(){var a=t(this).children("fieldset:nth-child("+e+")");if(profile_magic_multistep_form_validation(a)){if(t(this).validatePage(e)){if(++e>i.pages.length)return"stripe"==t("input[name='pm_payment_method']:checked").val()?multistep_stripe_form(this):t(this).submit(),e=i.pages.length,!1;t(this).gotopage(e)}return!1}},t.fn.getPages=function(){return i.pages},t.fn.prevpage=function(){return--e<1&&(e=1),t(this).gotopage(e),!1},t.fn.multipage=function(e){i=t.extend({stayLinkable:!1,submitLabel:pm_error_object.submit,hideLegend:!1,hideSubmit:!0,generateNavigation:!0,activeDot:"&nbsp;&#x25CF;",inactiveDot:"&nbsp;&middot;"},e),a="#"+t(this).attr("id");var n=t(this);if(n.addClass("multipage"),n.submit(function(e){t(this).validateAll()||e.preventDefault()}),t(a+" fieldset").hide(),i.hideSubmit&&t(a+' input[type="submit"]').hide(),""!=t(a+' input[type="submit"]').val()&&(i.submitLabel=t(a+' input[type="submit"]').val()),i.pages=new Array,t(this).children("fieldset").each(function(e){var a=t(this).children("legend").html();i.pages[e]={number:e+1,title:a,id:t(this).attr("id")}}),i.hideLegend&&t(a+" fieldset legend").hide(),t(a+" fieldset:first").addClass("active"),t(a+" fieldset:first").show(),i.generateNavigation)if(i.navigationFunction)i.navigationFunction(t(this).getPages());else{var s=t(this).attr("id");t('<div class="multipage_nav" id="'+s+'_nav"><a href="#" class="multipage_back" onclick="return  jQuery(\''+a+"').prevpage();\">"+pm_error_object.back+'</a><a href="#"  class="multipage_next" onclick="return jQuery(\''+a+"').nextpage();\">"+pm_error_object.next+'</a><span class="multipage_state"></span><div class="clearer"></div></div>').insertAfter(this)}return document.location.hash?t(this).gotopage("#"+document.location.hash.substring(1,document.location.hash.length)):t(this).gotopage(1),!1},t("#multipage").multipage({transitionFunction:transition,stateFunction:textpages}),t("form").submit(function(){return!0})}(jQuery);