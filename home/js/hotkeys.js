!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).hotkeys=e()}}(function(){function n(){return h||"all"}function t(e,n,t){e.addEventListener?e.addEventListener(n,t,!1):e.attachEvent&&e.attachEvent("on"+n,function(){t(window.event)})}function o(e){var t,o=e.keyCode||e.which||e.charCode,i=m["*"];if(-1===g.indexOf(o)&&g.push(o),93!==o&&224!==o||(o=91),o in y){y[o]=!0;for(var f in p)p[f]===o&&(c[f]=!0);if(!i)return}for(var l in y)y[l]=e[v[l]];if(c.filter.call(this,e)){if(t=n(),i)for(a=0;a<i.length;a++)i[a].scope===t&&r(e,i[a],t);if(o in m)for(var a=0;a<m[o].length;a++)r(e,m[o][a],t)}}function r(e,n,t){var o;if(n.scope===t||"all"===n.scope){o=n.mods.length>0;for(var r in y)(!y[r]&&n.mods.indexOf(+r)>-1||y[r]&&-1===n.mods.indexOf(+r))&&(o=!1);(0!==n.mods.length||y[16]||y[18]||y[17]||y[91])&&!o&&"*"!==n.shortcut||!1===n.method(e,n)&&(e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation&&e.stopPropagation(),e.cancelBubble&&(e.cancelBubble=!0))}}function i(e,n){if(e.length!==n.length)return!1;for(var t=0;t<e.length;t++)if(e[t]!==n[t])return!1;return!0}function f(e){for(var n=e.slice(0,e.length-1),t=0;t<n.length;t++)n[t]=p[n[t]];return n}function l(e){var n;return e=e.replace(/\s/g,""),""===(n=e.split(","))[n.length-1]&&(n[n.length-2]+=","),n}function a(n){var t=n.keyCode||e.which||e.charCode,o=g.indexOf(t);if(o>=0&&g.splice(o,1),93!==t&&224!==t||(t=91),t in y){y[t]=!1;for(var r in p)p[r]===t&&(c[r]=!1)}}function c(e,n,t){var o=l(e),r=[],i=0;for(void 0===t&&(t=n,n="all");i<o.length;i++)r=[],(e=o[i].split("+")).length>1&&(r=f(e),e=[e[e.length-1]]),(e="*"===(e=e[0])?"*":w(e))in m||(m[e]=[]),m[e].push({shortcut:o[i],scope:n,method:t,key:o[i],mods:r})}Array.prototype.indexOf||(Array.prototype.indexOf=function(e){for(var n=0;n<this.length;n++)if(this[n]===e)return n;return-1});for(var u,d=navigator.userAgent.toLowerCase().indexOf("firefox")>0,s={backspace:8,tab:9,clear:12,enter:13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,home:36,end:35,pageup:33,pagedown:34,"â‡ª":20,CapsLock:20,",":188,".":190,"/":191,"`":192,"-":d?173:189,"=":d?61:187,";":d?59:186,"'":222,"[":219,"]":221,"\\":220},h="all",p={"â‡§":16,shift:16,"âŒ¥":18,alt:18,option:18,"âŒƒ":17,ctrl:17,control:17,"âŒ˜":d?224:91,command:d?224:91},g=[],v={16:"shiftKey",18:"altKey",17:"ctrlKey"},y={16:!1,18:!1,17:!1},w=function(e){return s[e]||e.toUpperCase().charCodeAt(0)},m={},k=1;k<20;k++)s["f"+k]=111+k;v[d?224:91]="metaKey",y[d?224:91]=!1,t(document,"keydown",function(e){o(e)}),t(document,"keyup",function(e){a(e)}),u={setScope:function(e){h=e||"all"},getScope:n,deleteScope:function(e){var n,t,o;for(n in m)for(t=m[n],o=0;o<t.length;)t[o].scope===e?t.splice(o,1):o++},getPressedKeyCodes:function(e){return g.slice(0)},isPressed:function(e){return"string"==typeof e&&(e=w(e)),-1!==g.indexOf(e)},filter:function(e){var n=(e.target||e.srcElement).tagName;return!("INPUT"===n||"SELECT"===n||"TEXTAREA"===n)},unbind:function(e,t){for(var o,r,a=l(e),c=[],u=0;u<a.length;u++){if((o=a[u].split("+")).length>1&&(c=f(o)),e=o[o.length-1],e=w(e),void 0===t&&(t=n()),!m[e])return;for(var d=0;d<m[e].length;d++)(r=m[e][d]).scope===t&&i(r.mods,c)&&(m[e][d]={})}}};for(var x in u)c[x]=u[x];var C=window.hotkeys;return c.noConflict=function(e){return e&&window.hotkeys===c&&(window.hotkeys=C),c},window.hotkeys=c,c});



var config = {
	quickLinks :[
		{
			shortcut : 'alt+q',
			url : 'https://github.com/'
		},
		{
			shortcut : 'alt+a',
			url : 'https://stackoverflow.com/'
		},
		{
			shortcut : 'alt+e',
			url : 'https://translate.google.com/#auto/zh-CN/'
		},
		{
			shortcut : 'alt+m',
			url : 'https://open.spotify.com/browse/featured'
		},
		{
			shortcut : 'alt+g',
			url : 'https://mail.google.com/mail/ca/u/0/'
		},
		{
			shortcut : 'alt+c',
			url : 'https://wx.qq.com/'
		},
    {
      shortcut : 'alt+d',
      url : 'https://ticktick.com/'
    }
	],
	actions : [
		{
			shortcut : 'b',
			action : function(){
				document.getElementsByClassName('home-icon-img')[4].click();
        //open bookmark
				setTimeout(
					functional.bookMark.regist,
					200
				);//bind bookmarkKeyboard
			}
		},
    //{
    //  shortcut : 'ctrl+l',
    //  action : function() {
    //    document.getElementsByClassName( 'search-input' )[0].focus();
    //  }
    //}
	]
};

var functional = {
	bookMark : {
		onEnter : goToFirstBookMark,
    onEsc : closeBookMark,
		regist : () => {
			document.getElementsByClassName( "bookmark-search-out" )[0].onkeydown = function( event ){
				switch( event.keyCode ){
          case 13:
					     functional.bookMark.onEnter();
          break;
          case 27:
                functional.bookMark.onEsc();
				}

			}
		}
	},

}


for( const ql of config.quickLinks ){
	hotkeys( ql.shortcut , function(){
		window.location.href = ql.url;
		return false;
	});
}

for( const acts of config.actions ){
	hotkeys( acts.shortcut , function(){
		acts.action();
		return false;
	});
}




function goToFirstBookMark(){
	document.getElementsByClassName( 'bookmark-item' )[0].click();
}

function closeBookMark(){
  document.getElementsByClassName( 'slide-close bookmark-close' )[0].click();
}
