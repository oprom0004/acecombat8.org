(()=>{
if(window.__siteGA||navigator.globalPrivacyControl||navigator.doNotTrack==='1')return;
window.__siteGA=true;
const id="G-FN204PZKDY";
const clean=(value)=>{if(!value)return '';try{const u=new URL(value,location.origin);return u.origin+u.pathname;}catch{return '';}};
const excluded=()=>/^\/(api|admin)(\/|$)/.test(location.pathname);
window.dataLayer=window.dataLayer||[];
window.gtag=function(){window.dataLayer.push(arguments);};
gtag('js',new Date());
gtag('config',id,{send_page_view:false,allow_google_signals:false,allow_ad_personalization_signals:false,page_location:clean(location.href),page_referrer:clean(document.referrer)});
let last='';
const page=()=>{const url=clean(location.href);if(excluded()||url===last)return;last=url;gtag('event','page_view',{page_location:url,page_referrer:clean(document.referrer),page_title:document.title,send_to:id});};
page();
for(const name of ['pushState','replaceState']){const original=history[name];history[name]=function(...args){const result=original.apply(this,args);setTimeout(page,0);return result;};}
addEventListener('popstate',page);
const script=document.createElement('script');script.async=true;script.src='https://www.googletagmanager.com/gtag/js?id='+id;document.head.append(script);
})();
