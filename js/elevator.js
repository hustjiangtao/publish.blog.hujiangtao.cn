// build time:Fri Jan 25 2019 19:06:26 GMT+0800 (中国标准时间)
var Elevator=function(n){"use strict";function e(n,e,t,o){return n/=o/2,n<1?t/2*n*n+e:(n--,-t/2*(n*(n-2)-1)+e)}function t(n,e){for(var t in e){var o=void 0===n[t]&&"function"!=typeof t;o&&(n[t]=e[t])}return n}function o(n){for(var e=0;n;)e+=n.offsetTop||0,n=n.offsetParent;return g&&(e-=g),e}function l(n){T||(T=n);var t=n-T,o=e(t,k,C-k,b);window.scrollTo(0,o),t<b?p=requestAnimationFrame(l):u()}function i(){return window.requestAnimationFrame&&window.Audio&&window.addEventListener}function a(){T=null,k=null,h=!1}function r(){y&&(C=o(y))}function u(){a(),m&&(m.pause(),m.currentTime=0),w&&w.play(),v&&v()}function d(){h&&(cancelAnimationFrame(p),a(),m&&(m.pause(),m.currentTime=0),r(),window.scrollTo(0,C))}function c(n){n.addEventListener?n.addEventListener("click",F.elevate,!1):n.attachEvent("onclick",function(){r(),document.documentElement.scrollTop=C,document.body.scrollTop=C,window.scroll(0,C)})}function s(n){A=document.body;var e={duration:void 0,mainAudio:!1,endAudio:!1,preloadAudio:!0,loopAudio:!0,startCallback:null,endCallback:null};n=t(n,e),n.element&&c(n.element),i()&&(n.duration&&(E=!0,b=n.duration),n.targetElement&&(y=n.targetElement),n.verticalPadding&&(g=n.verticalPadding),window.addEventListener("blur",d,!1),n.mainAudio&&(m=new Audio(n.mainAudio),m.setAttribute("preload",n.preloadAudio),m.setAttribute("loop",n.loopAudio)),n.endAudio&&(w=new Audio(n.endAudio),w.setAttribute("preload","true")),n.endCallback&&(v=n.endCallback),n.startCallback&&(f=n.startCallback),$(window).scroll(function(){$(window).scrollTop()>600?$(n.selector).fadeIn(500):$(n.selector).fadeOut(500)}))}var f,m,w,v,A=null,p=null,b=null,E=!1,T=null,k=null,C=0,y=null,g=null,h=!1,F=this;this.elevate=function(){h||(h=!0,k=document.documentElement.scrollTop||A.scrollTop,r(),E||(b=1.5*Math.abs(C-k)),requestAnimationFrame(l),m&&m.play(),f&&f())},s(n)};window.Elevator=Elevator;
//rebuild by neat 