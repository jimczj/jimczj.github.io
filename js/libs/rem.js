!function(e,n){var t,i=document,d=window,o=i.documentElement,l=document.createElement("style");function r(){var e=o.getBoundingClientRect().width;(n=n||540)<e&&(e=n);var t=100*e/750;l.innerHTML="html{font-size:"+t+"px;}"}if(o.firstElementChild)o.firstElementChild.appendChild(l);else{var a=i.createElement("div");a.appendChild(l),i.write(a.innerHTML),a=null}r(),d.addEventListener("resize",function(){clearTimeout(t),t=setTimeout(r,300)},!1),d.addEventListener("pageshow",function(e){e.persisted&&(clearTimeout(t),t=setTimeout(r,300))},!1),"complete"===i.readyState?i.body.style.fontSize="16px":i.addEventListener("DOMContentLoaded",function(e){i.body.style.fontSize="16px"},!1)}(0,750);