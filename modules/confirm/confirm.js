!function(){new Vue({el:".confirm-bg",ready:function(){}});infinity.modules.confirm={init:function(){$(document).on("click",".confirm-cover",function(n){$(".confirm-box").removeClass("infinity-zoom-show").addClass("infinity-shake-horizontal")}),$(document).on("animationend",".confirm-box",function(n){n.target.className.indexOf("infinity-shake-horizontal")>=0&&$(".confirm-box").removeClass("infinity-shake-horizontal"),n.target.className.indexOf("infinity-zoom-hide")>=0&&($(".confirm-bg").hide(),$(".confirm-box").removeClass("infinity-zoom-show"),$(".confirm-box").removeClass("infinity-zoom-hide"))})},hide:function(){$(".confirm-box").addClass("infinity-zoom-hide")},show:function(n,i,o,t){var c=this,f="clear.png";"cover"==t&&(f="cover.png"),"logout"==t&&(f="logout.png"),$("#confirm-ico").attr("src","https://infinity-permanent.infinitynewtab.com/infinity/confirm/"+f+"?imageView2/0/format/webp/q/100"),n||(n=infinity.i18n("is_sure_delete")),$("#confirm-text").text(n),i instanceof Array&&($("#confirm-btn").html(i[0]),$("#confirm-cancel-btn").text(i[1])),i instanceof Array||($("#confirm-btn").text(infinity.i18n("ok")),$("#confirm-cancel-btn").text(infinity.i18n("cancel"))),$(".confirm-bg").addClass("infinity-zoom-show"),$(".confirm-bg").css("display","flex"),$("#confirm-btn").one("click",function(n){c.hide(),$(".confirm-btn-box .confirm-btn").css("min-width","0px"),$(".confirm-cancel-btn").unbind("click"),"function"==typeof i?i&&i(!0):o&&o(!0)}),$("#confirm-cancel-btn").one("click",function(n){c.hide(),$(".confirm-btn-box .confirm-btn").css("min-width","0px"),$("#confirm-btn").unbind("click"),"function"==typeof i?i&&i(!1):o&&o(!1)});var e=$("#confirm-btn").width(),r=$("#confirm-cancel-btn").width(),m=Math.max(parseInt(e),parseInt(r));$(".confirm-btn-box .confirm-btn").css("min-width",m+"px")}},infinity.modules.confirm.init()}();