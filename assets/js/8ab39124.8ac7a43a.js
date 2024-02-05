"use strict";(self.webpackChunklwl_docusaurus_website=self.webpackChunklwl_docusaurus_website||[]).push([[8967],{3905:(t,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>d});var n=r(7294);function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,n,i=function(t,e){if(null==t)return{};var r,n,i={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(i[r]=t[r]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}var l=n.createContext({}),u=function(t){var e=n.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):a(a({},e),t)),r},p=function(t){var e=u(t.components);return n.createElement(l.Provider,{value:e},t.children)},s="mdxType",f={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,i=t.mdxType,o=t.originalType,l=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),s=u(r),m=i,d=s["".concat(l,".").concat(m)]||s[m]||f[m]||o;return r?n.createElement(d,a(a({ref:e},p),{},{components:r})):n.createElement(d,a({ref:e},p))}));function d(t,e){var r=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=r.length,a=new Array(o);a[0]=m;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c[s]="string"==typeof t?t:i,a[1]=c;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},601:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=r(7462),i=(r(7294),r(3905));const o={},a="git \u81ea\u5b9a\u4e49\u522b\u540d\u547d\u4ee4",c={unversionedId:"Git/Git\u81ea\u5b9a\u4e49\u522b\u540d\u547d\u4ee4",id:"Git/Git\u81ea\u5b9a\u4e49\u522b\u540d\u547d\u4ee4",title:"git \u81ea\u5b9a\u4e49\u522b\u540d\u547d\u4ee4",description:"\u627e\u5230git\u4e2d\u7684gitconfig\u8bbe\u7f6e",source:"@site/docs/Git/Git\u81ea\u5b9a\u4e49\u522b\u540d\u547d\u4ee4.md",sourceDirName:"Git",slug:"/Git/Git\u81ea\u5b9a\u4e49\u522b\u540d\u547d\u4ee4",permalink:"/docs/Git/Git\u81ea\u5b9a\u4e49\u522b\u540d\u547d\u4ee4",draft:!1,editUrl:"https://github.com/evanjason/evanjason.github.io/tree/main/docs/Git/Git\u81ea\u5b9a\u4e49\u522b\u540d\u547d\u4ee4.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Git \u4e0d\u8981\u53ea\u4f1a pull \u548c push\uff0c\u8fd9 5 \u6761\u547d\u4ee4\u8ba9\u4f60\u6548\u7387\u7ffb\u500d",permalink:"/docs/Git/Git \u4e0d\u8981\u53ea\u4f1a pull \u548c push\uff0c\u8fd9 5 \u6761\u547d\u4ee4\u8ba9\u4f60\u6548\u7387\u7ffb\u500d"},next:{title:"git\u7684\u8fd0\u7528\u64cd\u4f5c",permalink:"/docs/Git/git\u7684\u8fd0\u7528\u64cd\u4f5c"}},l={},u=[],p={toc:u},s="wrapper";function f(t){let{components:e,...r}=t;return(0,i.kt)(s,(0,n.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"git-\u81ea\u5b9a\u4e49\u522b\u540d\u547d\u4ee4"},"git \u81ea\u5b9a\u4e49\u522b\u540d\u547d\u4ee4"),(0,i.kt)("p",null,"\u627e\u5230git\u4e2d\u7684gitconfig\u8bbe\u7f6e"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'[alias]\n\xa0 \xa0 co = checkout\n\xa0 \xa0 ci = commit\n\xa0 \xa0 st = status\n\xa0 \xa0 br = branch\n\xa0 \xa0 type = cat-file -t\n\xa0 \xa0 dump = cat-file -p\n\xa0 \xa0 hist = log --pretty=format:\\"%C(auto)%h %ad %an %s%d\\" --date=format:\\"%F %T\\"\n')))}f.isMDXComponent=!0}}]);