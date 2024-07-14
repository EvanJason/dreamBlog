"use strict";(self.webpackChunklwl_docusaurus_website=self.webpackChunklwl_docusaurus_website||[]).push([[8369],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},i="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),i=p(n),d=r,k=i["".concat(s,".").concat(d)]||i[d]||m[d]||o;return n?a.createElement(k,u(u({ref:t},c),{},{components:n})):a.createElement(k,u({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,u=new Array(o);u[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[i]="string"==typeof e?e:r,u[1]=l;for(var p=2;p<o;p++)u[p]=n[p];return a.createElement.apply(null,u)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4922:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={title:"react\u94a9\u5b50\u51fd\u6570",categories:["React","React Hook","Typescript"],tags:["React","React Hook","Typescript"],date:"2023-04-10",authors:"lin",excerpt:"react\u94a9\u5b50\u51fd\u6570"},u="react\u94a9\u5b50\u51fd\u6570",l={unversionedId:"React/react\u94a9\u5b50\u51fd\u6570",id:"React/react\u94a9\u5b50\u51fd\u6570",title:"react\u94a9\u5b50\u51fd\u6570",description:"react \u51fd\u6570\u7ec4\u4ef6\u7684\u94a9\u5b50\u51fd\u6570\uff08hook\uff09",source:"@site/docs/React/react\u94a9\u5b50\u51fd\u6570.md",sourceDirName:"React",slug:"/React/react\u94a9\u5b50\u51fd\u6570",permalink:"/docs/React/react\u94a9\u5b50\u51fd\u6570",draft:!1,editUrl:"https://github.com/evanjason/evanjason.github.io/tree/main/docs/React/react\u94a9\u5b50\u51fd\u6570.md",tags:[{label:"React",permalink:"/docs/tags/react"},{label:"React Hook",permalink:"/docs/tags/react-hook"},{label:"Typescript",permalink:"/docs/tags/typescript"}],version:"current",frontMatter:{title:"react\u94a9\u5b50\u51fd\u6570",categories:["React","React Hook","Typescript"],tags:["React","React Hook","Typescript"],date:"2023-04-10",authors:"lin",excerpt:"react\u94a9\u5b50\u51fd\u6570"},sidebar:"tutorialSidebar",previous:{title:"react\u6027\u80fd\u4f18\u5316",permalink:"/docs/React/react\u6027\u80fd\u4f18\u5316"},next:{title:"redux\u5728react\u4e2d\u7684\u8fd0\u7528demo",permalink:"/docs/React/redux\u5728react\u4e2d\u7684\u8fd0\u7528demo"}},s={},p=[{value:"react \u51fd\u6570\u7ec4\u4ef6\u7684\u94a9\u5b50\u51fd\u6570\uff08hook\uff09",id:"react-\u51fd\u6570\u7ec4\u4ef6\u7684\u94a9\u5b50\u51fd\u6570hook",level:2},{value:"\u4e00\u3001useState",id:"\u4e00usestate",level:2},{value:"1.1 useState\u6ce8\u610f\u70b9",id:"11-usestate\u6ce8\u610f\u70b9",level:3},{value:"\u4e8c\u3001useEffect",id:"\u4e8cuseeffect",level:2},{value:"2.1 useEffect\u4f18\u70b9",id:"21-useeffect\u4f18\u70b9",level:3},{value:"\u4e09\u3001useContext",id:"\u4e09usecontext",level:2},{value:"\u56db\u3001useReducer",id:"\u56dbusereducer",level:2},{value:"\u4e94\u3001useCallback",id:"\u4e94usecallback",level:2},{value:"\u516d\u3001useMemo",id:"\u516dusememo",level:2},{value:"\u4e03\u3001useRef",id:"\u4e03useref",level:2},{value:"\u516b\u3001useImperativeHandle\u7684\u4f7f\u7528",id:"\u516buseimperativehandle\u7684\u4f7f\u7528",level:2},{value:"\u4e5d\u3001useLayoutEffect",id:"\u4e5duselayouteffect",level:2},{value:"\u5341\u3001\u81ea\u5b9a\u4e49Hooks\u5b9e\u73b0",id:"\u5341\u81ea\u5b9a\u4e49hooks\u5b9e\u73b0",level:2}],c={toc:p},i="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(i,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"react\u94a9\u5b50\u51fd\u6570"},"react\u94a9\u5b50\u51fd\u6570"),(0,r.kt)("h2",{id:"react-\u51fd\u6570\u7ec4\u4ef6\u7684\u94a9\u5b50\u51fd\u6570hook"},"react \u51fd\u6570\u7ec4\u4ef6\u7684\u94a9\u5b50\u51fd\u6570\uff08hook\uff09"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"hook\u51fd\u6570\u662f\u4e00\u4e2a\u7279\u6b8a\u7684\u51fd\u6570\uff0c\u76ee\u7684\u662f\u8ba9\u51fd\u6570\u7ec4\u4ef6\u4e5f\u6709\u7c7b\u7ec4\u4ef6\u7684\u7279\u6027"),(0,r.kt)("li",{parentName:"ul"},"\u7c7b\u7ec4\u4ef6\u4e2d\u53ef\u80fd\u4e00\u4e2a\u5468\u671f\u51fd\u6570\u4e2d\u6709\u591a\u4e2a\u4e1a\u52a1\u903b\u8f91\u4ee3\u7801\uff0c\u4e0d\u5229\u4e8e\u7ef4\u62a4"),(0,r.kt)("li",{parentName:"ul"},"\u7c7b\u7ec4\u4ef6\u7684\u5b66\u4e60\u6210\u672c\u76f8\u5bf9\u8f83\u9ad8\uff0c\u9700\u8981\u638c\u63e1es6\u7684\u8bed\u6cd5"),(0,r.kt)("li",{parentName:"ul"},"hook\u51fd\u6570\u9700\u8981\u4e66\u5199\u5728\u51fd\u6570\u7ec4\u4ef6\u6700\u5916\u5c42\uff0c\u4e5f\u5c31\u662freturn\u4e4b\u4e0a")),(0,r.kt)("h2",{id:"\u4e00usestate"},"\u4e00\u3001useState"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u7528\u4e8e\u5728\u51fd\u6570\u7ec4\u4ef6\u4e2d\u4fdd\u5b58\u72b6\u6001\u7684hook\u51fd\u6570")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u53c2\u6570")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4fdd\u5b58\u72b6\u6001\u7684\u521d\u59cb\u503c")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8fd4\u56de\u503c\uff1a\u4e00\u4e2a\u6570\u7ec4")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u7b2c\u4e00\u4e2a\u4fdd\u5b58\u5f53\u524d\u4fdd\u5b58\u7684\u72b6\u6001")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u7b2c\u4e8c\u4e2a\u4e3a\u4fee\u6539\u5f53\u524d\u4fdd\u5b58\u72b6\u6001\u7684\u65b9\u6cd5")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u8c03\u7528\u65b9\u6cd5\u5728\u53c2\u6570\u4e2d\u8fdb\u884c\u64cd\u4f5c\u5373\u53ef"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8fd9\u4e9b\u65b9\u6cd5\u4e3areact8.0\u4e4b\u540e\u7248\u672c\u81ea\u5e26\u7684\u65b9\u6cd5\uff0c\u9700\u8981\u4ecereact\u4e2d\u5f15\u5165"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// app.js\nimport React, {useState} from 'react'\n\nfunction App() {\n  const [state, setState] = useState(1)\n  return (\n    <div className=\"App\">\n      {state}\n      <button onClick={() => {setState(state + 1)}}>+1</button>\n      <button onClick={() => {setState(state - 1)}}>-1</button>\n    </div>\n  );\n}\n\nexport default App;\n")),(0,r.kt)("h3",{id:"11-usestate\u6ce8\u610f\u70b9"},"1.1 useState\u6ce8\u610f\u70b9"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6700\u597d\u5728\u89e3\u6784\u65f6\u521b\u5efa\u6709\u542b\u4e49\u7684\u53d8\u91cf"),(0,r.kt)("li",{parentName:"ul"},"\u540c\u4e00\u51fd\u6570\u7ec4\u5efa\u4e2d\u53ef\u4ee5\u4fdd\u5b58\u591a\u6b21\u8c03\u7528useState\u65b9\u6cd5\u4fdd\u5b58\u72b6\u6001"),(0,r.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u7684setState\u53c2\u6570\u53ef\u4ee5\u4f20\u9012\u65b9\u6cd5\uff0c\u907f\u514d\u591a\u6b21\u76f8\u540c\u8c03\u7528\u53ea\u6267\u884c\u4e00\u6b21\u7684\u60c5\u51b5"),(0,r.kt)("li",{parentName:"ul"},"useState\u7684\u6570\u636e\u662f\u5bf9\u8c61\u65f6\uff0c\u8fdb\u884c\u4fee\u6539\u65f6\u9700\u8981\u89e3\u6784\u5176\u4ed6\u7684\u6570\u636e\uff0c\u7136\u540e\u518d\u63a5\u4e0a\u4fee\u6539\u7684\u5c5e\u6027\u540d\u548c\u6570\u503c")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import React, { useState } from 'react'\n\nfunction App() {\n  // const [state, setState] = useState(1)\n  const [personState, setPersonState] = useState({ name: 'zhangsan', age: 22 })\n\n\n  return (\n    <div className=\"App\">\n      {personState.age}-name:{personState.name}\n      <button onClick={() => { setPersonState({ ...personState, age: personState.age + 1 }) }}>+1</button>\n      <button onClick={() => { setPersonState({ ...personState, age: personState.age - 1 }) }}>-1</button>\n    </div>\n  );\n}\n\nexport default App;\n")),(0,r.kt)("h2",{id:"\u4e8cuseeffect"},"\u4e8c\u3001useEffect"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u7ec4\u4ef6\u5b58\u5728\u591a\u4e2a\u751f\u547d\u5468\u671f\u51fd\u6570\uff0c\u7ec4\u4ef6\u6302\u5728\u9636\u6bb5\u3001\u7ec4\u4ef6\u5237\u65b0\u9636\u6bb5\u3001\u7ec4\u4ef6\u5378\u8f7d\u9636\u6bb5")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"useEffect\u76f8\u5f53\u4e8e\u662f\u8fd9\u4e09\u4e2a\u751f\u547d\u5468\u671f\u51fd\u6570\u7684\u96c6\u5408")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"useEffect\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f\u5185\u90e8\u4f20\u5165\u7684\u662f\u4e00\u4e2a\u65b9\u6cd5")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u76f4\u63a5\u64cd\u4f5c\u7684\u662f\u5728\u7ec4\u4ef6\u6302\u8f7d\u6216\u8005\u5237\u65b0\u624d\u4f1a\u89e6\u53d1\u7684\u64cd\u4f5c"),(0,r.kt)("li",{parentName:"ul"},"return\u6267\u884c\u7684\u662f\u5728\u5378\u8f7d\u65f6\u89e6\u53d1\u7684\u5185\u5bb9\uff0c\u524d\u63d0\u662freturn\u7684\u662f\u4e00\u4e2a\u65b9\u6cd5\u51fd\u6570\uff0c\u5426\u5219\u4f9d\u65e7\u6e32\u67d3"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u4e00\u4e2a\u6570\u7ec4\uff0c\u5185\u90e8\u5b58\u50a8\u6570\u636e\u66f4\u65b0",(0,r.kt)("strong",{parentName:"p"},"\u9700\u8981\u66f4\u65b0"),"\u7684\u6570\u636e\uff0c\u4e5f\u5c31\u662fuseEffect\u6267\u884c\u9700\u8981\u4f9d\u8d56\u4e8e\u67d0\u4e00\u4e2a\u53c2\u6570"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// app\u7ec4\u4ef6\u63a7\u5236\u5f15\u5165\u7ec4\u4ef6\u7684\u663e\u793a\n\n\nimport React, {useState, useEffect} from 'react'\n\nfunction Header() {\n  const [personState, setPersonState] = useState({name: 'zhangsan', age: 22})\n\n  useEffect(() => {\n    console.log('\u6302\u8f7d\u4e0e\u66f4\u65b0\u64cd\u4f5c\u5b8c\u6210\u4e86');\n    return () => {\n      console.log('\u5378\u8f7d\u65f6\u89e6\u53d1')\n    }\n  }, [personState.name])\n  return (\n    <div>\n      <p>{personState.name}<button onClick={() => {setPersonState({...personState,name: '\u674e\u56db'})}}>\u4fee\u5728\u59d3\u540d</button></p>\n      <p>{personState.age} <button onClick={() => {setPersonState({...personState, age: personState.age + 1})}}>\u4fee\u5728\u5e74\u9f84</button></p>\n\n    </div>\n  )\n}\n\n\nfunction App() {\n  const [showState, setShowState] = useState(true)\n  return (\n    <div>\n      {showState && <Header />}\n      <button onClick={() => {setShowState(!showState)}}>\u5207\u6362</button>\n    </div>\n  );\n}\n\nexport default App;\n")),(0,r.kt)("h3",{id:"21-useeffect\u4f18\u70b9"},"2.1 useEffect\u4f18\u70b9"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u94a9\u5b50\u51fd\u6570\u662f\u53ef\u4ee5\u591a\u6b21\u88ab\u91cd\u590d\u8c03\u7528\u7684")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import React, {useState, useEffect} from 'react'\n\nfunction Header() {\n  const [personState, setPersonState] = useState({name: 'zhangsan', age: 22})\n\nuseEffect(() => {\n  // \u4e8b\u4ef6\u76d1\u542c\u6dfb\u52a0\u64cd\u4f5c\n  console.log('\u4e8b\u4ef6\u76d1\u542c\u6dfb\u52a0\u64cd\u4f5c');\n  return () => {\n    console.log('\u79fb\u51fa\u4e8b\u4ef6\u76d1\u542c');\n  }\n})\nuseEffect(() => {\n  // \u7f51\u7edc\u4fe1\u606f\u8bf7\u6c42\n  console.log('\u7f51\u7edc\u4fe1\u606f\u8bf7\u6c42\u64cd\u4f5c');\n})\nuseEffect(() => {\n  // \u5224\u65ad\u662f\u5426\u767b\u5f55\n  console.log('\u5224\u65ad\u662f\u5426\u767b\u5f55');\n})\n\n  useEffect(() => {\n    console.log('\u6302\u8f7d\u4e0e\u66f4\u65b0\u64cd\u4f5c\u5b8c\u6210\u4e86');\n    return () => {\n      console.log('\u5378\u8f7d\u65f6\u89e6\u53d1')\n    }\n  }, [personState.name])\n  return (\n    <div>\n      <p>{personState.name}<button onClick={() => {setPersonState({...personState,name: '\u674e\u56db'})}}>\u4fee\u5728\u59d3\u540d</button></p>\n      <p>{personState.age} <button onClick={() => {setPersonState({...personState, age: personState.age + 1})}}>\u4fee\u5728\u5e74\u9f84</button></p>\n\n    </div>\n  )\n}\n\n\nfunction App() {\n  const [showState, setShowState] = useState(true)\n  return (\n    <div>\n      {showState && <Header />}\n      <button onClick={() => {setShowState(!showState)}}>\u5207\u6362</button>\n    </div>\n  );\n}\n\nexport default App;\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"E:%5C%E5%9B%BE%E7%89%87%5Cv2-2a151331c6cec079c5b139a2bcf5f2be_720w.webp",alt:"img"})),(0,r.kt)("h2",{id:"\u4e09usecontext"},"\u4e09\u3001useContext"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u76ee\u7684\u5728\u4e8e\u5b9e\u73b0\u7236\u7ec4\u4ef6\u4e0e\u5b50\u7ec4\u4ef6\u4e4b\u95f4\u7684\u6570\u636e\u4f20\u9012"),(0,r.kt)("li",{parentName:"ul"},"\u4f20\u7edf\u7684\u6570\u636e\u4f20\u9012\u65b9\u5f0f\u662f\u901a\u8fc7\u5f15\u5165createContext({})\uff0c\u8fdb\u884c\u521b\u5efa\uff0c\u7136\u540e\u901a\u8fc7\u65b0\u65b9\u6cd5Provider\u548cUserConsumer\u8fdb\u884c\u4f20\u9012\u548c\u4f7f\u7528"),(0,r.kt)("li",{parentName:"ul"},"Provider\u9700\u8981\u5305\u88f9\u8981\u4f20\u9012\u7684\u7ec4\u4ef6\uff0c\u5e76\u901a\u8fc7\u6807\u7b7e\u5185\u7684\u5c5e\u6027\u8fdb\u884c\u4f20\u9012"),(0,r.kt)("li",{parentName:"ul"},"UserConsumer\u5728\u5b50\u7ec4\u4ef6\u4e2d\u5305\u88f9return\u7684\u7ec4\u4ef6\u5185\u5bb9\uff0c\u5e76\u4e14\u53ef\u4ee5\u901a\u8fc7jsx\u8bed\u6cd5\u8fdb\u884c\u4f20\u53c2\uff0c\u53c2\u6570\u662fProvider\u4f20\u9012\u7684\u6570\u636e"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u5b58\u5728\u591a\u5c42\u4e0d\u540c\u6570\u636e\u7684Provider\u6570\u636e\u7684\u5d4c\u5957\uff0c\u90a3\u4e48\u5b50\u7ec4\u4ef6\u7684\u4e66\u5199\u4f1a\u7c7b\u4f3c\u4e8e\u56de\u8c03\u5730\u72f1"),(0,r.kt)("li",{parentName:"ul"},"\u65b0\u7684\u65b9\u6cd5\u901a\u8fc7useContext\u8fdb\u884c\u64cd\u4f5c\uff0c\u4e0d\u8fc7\u7236\u7ec4\u4ef6\u4f9d\u65e7\u9700\u8981Provider\u8fdb\u884c\u6570\u636e\u4f20\u9012\uff0c\u76f4\u63a5\u5728\u5b50\u7ec4\u4ef6\u4e2d\u58f0\u660e\u53d8\u91cf\u4fdd\u5b58useContext()\uff0c\u53c2\u6570\u4e3acreateContext\u521b\u5efa\u7684\u6570\u636e\uff0c\u53ef\u4ee5\u591a\u6b21\u58f0\u540d"),(0,r.kt)("li",{parentName:"ul"},"\u5185\u90e8\u53ef\u4ee5\u901a\u8fc7\u53d8\u91cf\u540d\u76f4\u63a5\u4f7f\u7528")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import React, { createContext, useContext } from 'react'\n\nconst UserContext = createContext({})\n\nfunction Header() {\n  const useInfo = useContext(UserContext)\n  return (\n    // <Consumer>\n    //   {\n    //     // item \u4ee3\u8868 value\u4f20\u9012\u7684\u6570\u636e\n    //     item => {\n    //       return (\n    //         <div>\n    //           <p>{item.name}</p>\n    //           <p>{item.age}</p>\n    //         </div>\n    //       )\n    //     }\n    //   }\n    // </Consumer>\n    <div>\n      <p>{useInfo.name}</p>\n      <p>{useInfo.age}</p>\n    </div>\n  )\n}\n\nfunction App() {\n  return (\n    <div>\n      <UserContext.Provider value={{ name: 'zs', age: 22 }}>\n        <Header />\n      </UserContext.Provider>\n      \u6839\u7ec4\u4ef6\n    </div>\n  );\n}\n\nexport default App;\n")),(0,r.kt)("h2",{id:"\u56dbusereducer"},"\u56db\u3001useReducer"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4ece\u5b57\u9762\u610f\u601d\u6765\u8bf4\u5b83\u662fredux\u7684\u66ff\u4ee3\u65b9\u6848\uff0c\u4f46\u662f\u771f\u6b63\u66ff\u6362\u7684\u662fuseState"),(0,r.kt)("li",{parentName:"ul"},"\u5728\u4e0d\u540c\u7ec4\u4ef6\u4e4b\u4e2d\uff0c\u6570\u636e\u662f\u76f8\u4e92\u9694\u7edd\u7684\uff0c\u4f46\u662f\u7c7b\u4f3c\u7684\u65b9\u6cd5\u6ca1\u5fc5\u8981\u5404\u81ea\u58f0\u540d\u4e00\u6b21\uff0c\u4e8e\u662f\u4e4e\u4fbf\u6709\u4e86useReducer"),(0,r.kt)("li",{parentName:"ul"},"useReducer \u5728\u4f7f\u7528\u65f6\u9700\u8981\u4f20\u9012\u4e24\u4e2a\u53c2\u6570"),(0,r.kt)("li",{parentName:"ul"},"\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f\u5c06\u6765\u5904\u7406\u6570\u636e\u7684\u624b\u6bb5\uff0c\u5f53\u4f5creducer\u5373\u53ef"),(0,r.kt)("li",{parentName:"ul"},"\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u8981\u64cd\u4f5c\u7684\u6570\u503c\uff0c\u5f53\u4f5cstore\u521b\u5efa\u540e\uff0c\u901a\u8fc7Provider\u4f20\u9012\u5230\u4f7f\u7528\u7684\u7ec4\u4ef6\uff0c\u7136\u540e\u8c03\u7528reducer\u7684dispatch"),(0,r.kt)("li",{parentName:"ul"},"\u9700\u8981\u89e3\u6784\u7684\u662f\u6570\u636e\u548c\u6307\u4ee4\u89e6\u53d1\u7684\u65b9\u6cd5")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import React, { useReducer } from 'react'\n\nconst reducer = (state, action) => {\n  switch (action.type) {\n    case 'add':\n      return { ...state, age: state.age + 1 }\n    case 'remove':\n      return { ...state, age: state.age - 1 }\n    default:\n      return state\n  }\n}\n\nfunction Home() {\n  const [useState, dispatch] = useReducer(reducer, { age: 12 })\n  return (\n    <div>\n      <p>\u6570\u636e\uff1a{useState.age}</p>\n      <button onClick={() => { dispatch({ type: 'add' }) }}>+1</button>\n      <button onClick={() => { dispatch({ type: 'remove' }) }}>-1</button>\n    </div >\n  )\n}\n\nfunction About() {\n  const [useState, dispatch] = useReducer(reducer, { age: 20 })\n  return (\n    <div>\n      <p>\u6570\u636e\uff1a{ useState.age }</p>\n      <button onClick={() => {dispatch({type: 'add'})}}>+1</button>\n      <button onClick={() => {dispatch({type: 'remove'})}}>-1</button>\n    </div>\n  )\n}\n\nfunction App() {\n  return (\n    <div>\n      <Home />\n      <hr />\n      <About />\n    </div>\n  );\n}\n\nexport default App;\n")),(0,r.kt)("h2",{id:"\u4e94usecallback"},"\u4e94\u3001useCallback"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u76ee\u7684\u662f\u7528\u4e8e\u4f18\u5316\u4ee3\u7801"),(0,r.kt)("li",{parentName:"ul"},"\u5f53\u7ec4\u4ef6\u53d1\u751f\u66f4\u65b0\u65f6\uff0c\u7ec4\u4ef6\u4e00\u5b9a\u4f1a\u88ab\u91cd\u65b0\u6e32\u67d3\uff0c\u5e76\u4e14\u62c5\u5f53\u5f15\u5165\u5b50\u7ec4\u4ef6\u65f6\uff0c\u5b50\u7ec4\u4ef6\u4e0d\u53d1\u751f\u53d8\u5316\u4e5f\u4f1a\u91cd\u65b0\u6e32\u67d3\u7ec4\u4ef6\uff0c\u56e0\u6b64\u4f1a\u9020\u6210\u6027\u80fd\u7684\u6d6a\u8d39\uff0c\u4e8e\u662f\u5f15\u5165\u4e86memo\u63d2\u4ef6"),(0,r.kt)("li",{parentName:"ul"},"memo\u5305\u88f9\u7ec4\u4ef6\u5e76\u8fd4\u56de\u5305\u88c5\u540e\u7684\u7ec4\u4ef6\uff0c\u5b50\u7ec4\u4ef6\u5185\u90e8\u6570\u636e\u6ca1\u6709\u6539\u53d8\u5c31\u4e0d\u4f1a\u8fdb\u884c\u6e32\u67d3")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import React, { memo, useState } from 'react'\n\nfunction Home() {\n  console.log('\u89e6\u53d1Home\u5237\u65b0');\n  return (\n    <div>Home\u7ec4\u4ef6</div>\n  )\n}\nfunction About() {\n  console.log('\u89e6\u53d1About\u5237\u65b0');\n  return (\n    <div>About\u7ec4\u4ef6</div>\n  )\n}\n\nconst MemoHome = memo(Home)\nconst MemoAbout = memo(About)\n\nfunction App() {\n  console.log('app\u8fdb\u884c\u5237\u65b0');\n  const [numState, setNumState] = useState(10)\n  const [ageState, setAgeState] = useState(20)\n  return (\n    <div>\n      <p>\u6570\u636e\uff1a{numState}</p>\n      <button onClick={() => { setNumState(numState + 1) }}>+1</button>\n      <button onClick={() => { setNumState(numState - 1) }}>-1</button>\n      <hr />\n      <p>\u6570\u636e\uff1a{ageState}</p>\n      <button onClick={() => { setAgeState(ageState + 1) }}>+1</button>\n      <button onClick={() => { setAgeState(ageState - 1) }}>-1</button>\n      <hr />\n      <MemoAbout />\n      <hr />\n      <MemoHome />\n    </div>\n\n  );\n}\n\nexport default App;\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5f53\u67d0\u4e00\u4e2a\u5b50\u7ec4\u4ef6\u91cd\u65b0\u6e32\u67d3\u65f6\uff0c\u6240\u6709\u7684\u5b50\u7ec4\u4ef6\u90fd\u4f1a\u88ab\u91cd\u65b0\u6e32\u67d3"),(0,r.kt)("li",{parentName:"ul"},"\u539f\u56e0\u662f\u56e0\u4e3a\u5b50\u7ec4\u4ef6\u91cd\u65b0\u6e32\u67d3\uff0c\u7236\u7ec4\u4ef6\u4e5f\u4e00\u5b9a\u4f1a\u91cd\u65b0\u6e32\u67d3\uff0c\u7236\u7ec4\u4ef6\u4e2d\u7684\u6570\u636e\u548c\u65b9\u6cd5\u4e5f\u4f1a\u91cd\u65b0\u6e32\u67d3\uff0c\u6240\u6709\u4f20\u9012\u7684\u6570\u636e\u90fd\u4f1a\u53d1\u751f\u53d8\u5316\uff0c\u867d\u8bf4\u540d\u79f0\u53ca\u6570\u503c\u662f\u4e00\u6837\u7684\uff0c\u4f46\u662f\u5b58\u50a8\u7684\u5730\u5740\u662f\u53d8\u5316\u7684\uff0c\u56e0\u6b64\u6240\u6709\u7684\u5b50\u7ec4\u4ef6\u90fd\u4f1a\u91cd\u65b0\u6e32\u67d3"),(0,r.kt)("li",{parentName:"ul"},"\u56e0\u6b64\u9700\u8981\u4f7f\u7528useCallback\uff0c useCallback\u6709\u4e24\u4e2a\u53c2\u6570\uff0c\u5e76\u8fd4\u56de\u51fd\u6570"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u4e00\u662f\u51fd\u6570\u65b9\u6cd5\uff0c\u51fd\u6570\u4e2d\u7684\u6570\u636e\u8981\u6709\u4ee5\u6765\u7684 \u6570\u636e"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u4e8c\u662f\u4f9d\u8d56\u914d\u7f6e\uff0c\u7528\u4e8e\u5b58\u50a8\u89e6\u53d1\u4e8b\u4ef6\u7684\u6570\u636e")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import React, { memo, useCallback, useState } from 'react'\n\nfunction Home(props) {\n  console.log('\u89e6\u53d1Home\u5237\u65b0');\n  return (\n    <div>\n      <div>Home\u7ec4\u4ef6</div>\n      <button onClick={() => { props.value[1](props.value[0] + 1) }}>+1</button>\n      <button onClick={() => { props.value[1](props.value[0] - 1) }}>-1</button>\n    </div>\n  )\n}\nfunction About(props) {\n  console.log('\u89e6\u53d1About\u5237\u65b0');\n  return (\n    <div>\n      <div>About\u7ec4\u4ef6</div>\n      <button onClick={() => { props.value[1](props.value[0] + 1) }}>+1</button>\n      <button onClick={() => { props.value[1](props.value[0] - 1) }}>-1</button>\n    </div>\n  )\n}\n\nconst MemoHome = memo(Home)\nconst MemoAbout = memo(About)\n\nfunction App() {\n  console.log('app\u8fdb\u884c\u5237\u65b0');\n  const [numState, setNumState] = useState(10)\n  const [ageState, setAgeState] = useState(20)\n  useCallback(() => {\n    setAgeState(numState)\n  }, [numState])\n  return (\n    <div>\n      <p>\u6570\u636e\uff1a{numState}</p>\n      <hr />\n      <p>\u6570\u636e\uff1a{ageState}</p>\n\n\n      <hr />\n      <MemoAbout value={[numState, setNumState]} />\n      <hr />\n      <MemoHome value={[ageState, setAgeState]} />\n    </div>\n\n  );\n}\n\nexport default App;\n")),(0,r.kt)("h2",{id:"\u516dusememo"},"\u516d\u3001useMemo"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5185\u90e8\u63a5\u6536\u4e24\u4e2a\u53c2\u6570"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u65701 \u662f\u51fd\u6570\u65b9\u6cd5\uff0c\u5e76\u4e14\u65b9\u6cd5\u8fd4\u56de\u7684\u662f\u4ec0\u4e48\uff0c\u53d8\u91cf\u63a5\u6536\u7684\u5c31\u662f\u4ec0\u4e48"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u65702 \u662f\u662f\u5426\u91cd\u65b0\u6e32\u67d3\u7684\u4f9d\u8d56\u6570\u7ec4"),(0,r.kt)("li",{parentName:"ul"},"\u76f8\u6bd4\u800c\u8a00\uff0c\u6bd4useCallback\u4f20\u9012\u7684\u6570\u636e\u8981\u591a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import React, { useMemo, useState } from 'react'\n\n\nfunction App() {\n  console.log('app\u8fdb\u884c\u5237\u65b0');\n  function getData() {\n    console.log('\u6570\u636e\u5237\u65b0');\n    let data = 0\n    for(let i = 0; i < 100; i++){\n      data += i\n    }\n    return data\n  }\n\n  const [numState, setNumState] = useState(10)\n  let num = useMemo(() => {\n    return getData()\n  }, [])\n  return (\n    <div>\n      <p>\u6570\u636e\uff1a{numState}</p>\n      <button onClick={() => {setNumState(numState + 1)}}>\u4fee\u6539</button>\n      <p>\u6570\u636e\uff1a{num}</p>\n    </div>\n\n  );\n}\n\nexport default App;\n")),(0,r.kt)("h2",{id:"\u4e03useref"},"\u4e03\u3001useRef"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u5143\u7d20\u7684\u76f8\u5173\u64cd\u4f5c"),(0,r.kt)("li",{parentName:"ul"},"\u901a\u8fc7createRef\uff08\uff09\u521b\u5efa\u7ed9ref\u5c5e\u6027\u8d4b\u503c\u7684\u4fe1\u606f\uff0c\u521b\u5efa\u7684\u4fe1\u606f\u4e2d\u7684current\u5c5e\u6027\u5b58\u50a8\u7684\u5c31\u662f\u5f53\u524d\u7684\u5143\u7d20\u8282\u70b9"),(0,r.kt)("li",{parentName:"ul"},"\u51fd\u6570\u7ec4\u4ef6\u65e0\u6cd5\u901a\u8fc7\u8be5\u65b9\u6cd5\u83b7\u53d6\u8282\u70b9"),(0,r.kt)("li",{parentName:"ul"},"useRef\uff08\uff09\u4e0ecreateRef\uff08\uff09\u51e0\u4e4e\u76f8\u540c\uff0c\u4f46\u662fuseRef\u53ef\u4ee5\u4fdd\u5b58\u6570\u636e\uff0c\u4f9d\u65e7\u901a\u8fc7\u53d8\u91cf\u540d.current\u8fdb\u884c\u83b7\u53d6"),(0,r.kt)("li",{parentName:"ul"},"useRef\u4fdd\u5b58\u7684\u6570\u636e\uff0c\u9664\u975e\u624b\u52a8\u4fee\u6539\uff0c\u4e0d\u7136\u4e0d\u4f1a\u53d1\u751f\u53d8\u5316")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import React, { useRef, useState } from 'react'\n\nfunction App() {\n  const [numState, setNumSate] = useState(10)\n  const op = useRef(numState)\n  console.log('app\u8fdb\u884c\u5237\u65b0');\n\n  return (\n    <div>\n      <p>p\u5143\u7d20{numState}</p>\n      <p>p\u5143\u7d20{op.current}</p>\n      <button onClick={() => {setNumSate(numState + 1)}}>\u70b9\u51fb</button>\n    </div>\n\n  );\n}\n\nexport default App;\n")),(0,r.kt)("h2",{id:"\u516buseimperativehandle\u7684\u4f7f\u7528"},"\u516b\u3001useImperativeHandle\u7684\u4f7f\u7528"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5b50\u7ec4\u4ef6\u4e2d\u4f7f\u7528useImperativehandle\u8fd4\u56de\u7684\u6570\u636e\u662f\u5728\u7236\u7ec4\u4ef6\u4e2d\u521b\u5efa\u7684useRef\u7684\u6570\u636e"),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u901a\u8fc7\u8be5\u65b9\u6cd5\u8fd4\u56de\u65b0\u7684\u65b9\u6cd5\uff0c\u5e76\u5728\u5916\u90e8\u6267\u884c")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import React, { forwardRef, useImperativeHandle, useRef } from 'react'\n\nfunction Home(props, Ohome) {\n  const inner = useRef()\n  useImperativeHandle(Ohome, () => {\n    return {\n      reviseData() {\n        inner.current.value = '123'\n      }\n    }\n  })\n  return (\n    <div>\n      <h2>home\u7ec4\u4ef6</h2>\n      <input ref={inner} />\n    </div>\n  )\n}\n\nfunction App() {\n  const oHome = useRef()\n  console.log('app\u8fdb\u884c\u5237\u65b0');\n  const ForwardHome = forwardRef(Home)\n  function getEle() {\n    console.log(oHome.current);\n    oHome.current.reviseData()\n  }\n  return (\n    <div>\n      <ForwardHome ref={oHome} />\n      <button onClick={() => { getEle() }}>\u70b9\u51fb</button>\n    </div>\n\n  );\n}\n\nexport default App;\n")),(0,r.kt)("h2",{id:"\u4e5duselayouteffect"},"\u4e5d\u3001useLayoutEffect"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u548cuseEffect\u76f8\u4f3c\u5ea6\u5f88\u9ad8\uff0c\u53ea\u662f\u4e00\u4e9b\u7ec6\u8282\u4e0d\u540c"),(0,r.kt)("li",{parentName:"ul"},"useLayouteffect\u5148\u4e8euseEffect\u6267\u884c")),(0,r.kt)("h2",{id:"\u5341\u81ea\u5b9a\u4e49hooks\u5b9e\u73b0"},"\u5341\u3001\u81ea\u5b9a\u4e49Hooks\u5b9e\u73b0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u53ea\u8981\u662fuse\u5f00\u5934\u7684\u51fd\u6570\u90fd\u4f1a\u9ed8\u8ba4\u662f\u94a9\u5b50\u51fd\u6570"),(0,r.kt)("li",{parentName:"ul"},"\u94a9\u5b50\u51fd\u6570\u5fc5\u987b\u5728\u7ec4\u4ef6\u7684\u6700\u5916\u5c42\uff0c\u4f46\u662f\u53ef\u4ee5\u5728\u94a9\u5b50\u51fd\u6570\u4e2d\u4f7f\u7528\u94a9\u5b50\u51fd\u6570")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import React, {  useEffect, useState } from 'react'\n\nfunction useAddListener() {\n  useEffect(() => {\n    console.log('home, \u7ec4\u4ef6\u6302\u8f7d | \u66f4\u65b0');\n    return () => {\n      console.log('home \u5378\u8f7d');\n    }\n  })\n}\n\nfunction Home() {\n  useAddListener()\n  return (\n    <div>\n      home\u7ec4\u4ef6\n    </div>\n  )\n}\nfunction About() {\n  return (\n    <div>\n      about\u7ec4\u4ef6\n    </div>\n  )\n}\n\nfunction App() {\n  const [isshowState, setIsShow] = useState(true)\n  return (\n    <div>\n      {isshowState && <Home />}\n      <About />\n      <button onClick={() => { setIsShow(!isshowState) }}>\u5207\u6362</button>\n    </div>\n\n  );\n}\n\nexport default App;\n")))}m.isMDXComponent=!0}}]);