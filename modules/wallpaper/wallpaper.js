"use strict";infinity.modules.wallpaper=new Vue({el:"#wallpaper",data:{menuTag:"repo",wallpapers:[],queryOptions:{},nextPage:0,searchVal:"",isLoading:!1,canLoading:!0,$wallpaperContainer:null,selectedImage:null,shouldModalShow:!1,shouldSettingShow:!1,selectedImageURL:"",selectedImageSize:{},selectedImageId:"",sizeMode:"original",blurMaxValue:100,blurValue:0,blackValue:infinity.get("infinity-settings").bgOpacity,wpType:"library",deviceWidth:window.devicePixelRatio*window.screen.width>=2560?2560:window.devicePixelRatio*window.screen.width,searchJson:{type:"",value:""},singleColorName:"",searchvalue:"",placeholder:infinity.i18n("search_wallpaper"),colors:[{color:"c00018",name:"Red"},{color:"de8930",name:"Orange"},{color:"f7d946",name:"Yellow"},{color:"cbe582",name:"Chartreuse"},{color:"506f37",name:"Green"},{color:"15778f",name:"Cyan"},{color:"60a8d8",name:"Skyblue"},{color:"184878",name:"Blue"},{color:"be7ab9",name:"Orchid"},{color:"ffc0cb",name:"Pink"}],tags:["action","aerial","bokeh","close-ups","curves","glare","landmarks","laptop","landscapes","light rays","long-exposure","person","reflections","screens","technology","urban","wild animals","comic"],sources:["Barn Images","Free Nature Stock","Jay Mantri","Life Of Pix","MMT","Picography","Realistic Shots","Skitter Photo","Startup Stock Photos","Unsplash","Infinity"],finalImageURL:null,downloadReset:"infinity-wallpaper"+(new Date).getTime()+".jpg",userInfo:infinity.get("infinity-user"),whiceChoiceIndex:-1},created:function(){var e=this;infinity.onMessage("setWallpaperDone",function(){setTimeout(function(){e.shouldModalShow=!1,infinity.with("info",function(e){e.show(infinity.i18n("wallpaper_set_success"),!0)})},100)}),infinity.onMessage("setWallpaperFail",function(){e.shouldModalShow=!1,infinity.with("info",function(e){e.show(infinity.i18n("wallpaper_set_failed"),!0)})}),infinity.onMessage("settingVipDone",function(a){e.userInfo=infinity.get("infinity-user")})},watch:{queryOptions:{handler:function(e){void 0,this.fetchWappers(e)},deep:!0},searchvalue:function(e,a){void 0,e||(this.queryOptions={})}},ready:function(){this.$wallpaperContainer=$(this.$el).find("#wallpapers-list-container"),this.bindWallpaperListScroll()},beforeDestory:function(){this.unBindWallpaperListScroll()},computed:{isFirstPage:function(){return this.wallpapers.length<=0},defaultBlurValue:function(){return Math.floor(this.blurMaxValue/2)},getWallpaperFilerStyle:function(){return"blur("+this.blurValue/10+"px)"}},methods:{closeChoiceWallpaper:function(){this.whiceChoiceIndex=-1,this.resetsearchJson("","")},init:function(){this.fetchWappers()},showLibrary:function(){var e=this;e.init(),e.shouldSettingShow=!1,$(".wallpaper-content-1").css("display","flex"),$("#wallpaper,#wallpaper-cover").show(),$(".wallpaper-menu-library,.wallpaper-setting-back").show()},showLocal:function(e){var a=this;$(".wallpaper-menu,.wallpaper-setting-back,.wallpaper-content-1").hide(),$("#wallpaper,#wallpaper-cover,.wallpaper-menu-local").show(),a.handleWallpaperSelect(e,!0)},hide:function(){$("#wallpaper,#wallpaper-cover,.wallpaper-content-1,.wallpaper-menu-local").hide()},toggleMenu:function(e){this.shouldSettingShow=!1,this.menuTag=e},fetchWappers:function(e){var a=this;e=e||{},this.isLoading=!0,(!e.page||e.page<=0)&&(this.canLoading=!0,this.wallpapers=[]),$.ajax({url:infinity.url+"get-wallpaper",data:e,success:function(e){a.isLoading=!1,200==e.status&&a.parseWallpapersData(e)},fail:function(){a.isLoading=!1}})},parseWallpapersData:function(e){$.each(e.data,function(e,a){try{try{i=a.dimensions.split("×");a.nWidth=Number(i[0].trim().replace("px","")),a.nHeight=Number(i[1].trim().replace("px",""))}catch(e){var i=a.dimensions.split("px");a.nWidth=parseInt(i[0].match(/\d+/)[0]),a.nHeight=parseInt(i[1].match(/\d+/)[0])}}catch(e){}}),e.data.length<=0?this.canLoading=!1:this.nextPage=e.nextPage||this.queryOptions.page+1,this.wallpapers=this.wallpapers.concat(e.data||[])},bindWallpaperListScroll:function(){var e=this,a=this.$wallpaperContainer[0];this.$wallpaperContainer.on("scroll",function(i){if(!e.isLoading&&e.canLoading){var n=a.scrollHeight;a.scrollTop+a.clientHeight>=n-50&&(e.queryOptions=$.extend(!0,{},e.queryOptions,{page:e.nextPage}))}})},unBindWallpaperListScroll:function(){this.$wallpaperContainer.off("scroll")},handleSearch:function(e){var a=$(e.currentTarget);this.queryOptions={keyword:a.val()||"",page:0}},clickColorSearch:function(e,a,i){this.queryOptions={color:e||"",page:0},this.whiceChoiceIndex=i,this.singleColorName=a,this.resetsearchJson("color","#"+e)},clickTagSearch:function(e,a){this.queryOptions={tag:e||"",page:0},this.whiceChoiceIndex=this.colors.length+a,this.resetsearchJson("tag",e)},clickSourceSearch:function(e,a){this.queryOptions={source:e||"",page:0},this.whiceChoiceIndex=this.colors.length+this.tags.length+a,this.resetsearchJson("source",e)},resetsearchJson(e,a){this.searchJson.type=e,this.searchJson.value=a,this.searchvalue=a},handleWallpaperSelect:function(e,a){this.selectedImageId=e;var i=this;a?(i.tempImage=e,i.finalImageURL=e,i.wpType="local"):(i.tempImage=e+"?imageView2/2/w/600/format/webp/interlace/1",i.wpType="library",i.finalImageURL=e+"?imageView2/2/w/"+i.deviceWidth+"/format/webp"),i.shouldModalShow=!0,i.handleSelectedWallpaperLoaded(i.tempImage)},handleImageLoadingCancel:function(){try{infinity.sendMessage("cancalSetWallpaper"),this.shouldModalShow=this.shouldSettingShow=!1}catch(e){}},handleSelectedWallpaperLoaded:function(e){this.selectedImageURL=e,this.shouldModalShow=!1,this.shouldSettingShow=!0,this.sizeMode="original",this.blurValue="0"},handleLocalImagePick:function(){this.$els.imageUploader.click()},handleLocalImageUpload:function(e){var a,i=this,n=e.currentTarget,t=n.files[0];t&&((a=new FileReader).onload=function(e){i.handleWallpaperSelect(e.target.result)},a.readAsDataURL(t),n.value="")},handleSettingBack:function(){this.shouldModalShow=this.shouldSettingShow=!1},handleWallpaperApply:function(){var e=this;e.shouldModalShow=!0;var a=.75*parseInt(e.blurValue);infinity.setting("currentBg",e.selectedImageId),infinity.sendMessage("setWallpaper",{type:"image",src:e.finalImageURL,blur:a}),infinity.sendMessage("bgOpacityChange",e.blackValue)},closetag:function(e){}}});