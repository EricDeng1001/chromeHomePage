"use strict";var bgInfinityPro={init:function(){void 0,this.getUserInfo();var i=this;infinity.onMessage("checkInfinityVip",function(){void 0,i.getUserInfo()})},setInfinityUserInfo:function(i){var n=infinity.get("infinity-user");n.isVipMember=i,infinity.set("infinity-user",n),infinity.sendMessage("settingVipDone")},setVipMember:function(i){void 0,i>0||-1==i?this.setInfinityUserInfo(!0):0==i&&this.setInfinityUserInfo(!1)},getUserInfo:function(i){void 0;var n=this,e=infinity.get("infinity-user");e.isLogin?$.ajax({url:infinity.url+"user/get-my-info/",type:"GET",dataType:"json",data:{uid:e.uid,secret:e.secret,t:(new Date).getTime()+Math.random().toString(16).substring(2)}}).done(function(i){if(200==i.status){var e=i.data["pro-expire-date"];n.setVipMember(e)}}):n.setInfinityUserInfo(!1),setTimeout(function(){n.getUserInfo()},1e5)}};