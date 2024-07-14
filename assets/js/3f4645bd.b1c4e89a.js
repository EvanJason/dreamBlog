"use strict";(self.webpackChunklwl_docusaurus_website=self.webpackChunklwl_docusaurus_website||[]).push([[4670],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>k});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?o.createElement(k,i(i({ref:t},l),{},{components:n})):o.createElement(k,i({ref:t},l))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[d]="string"==typeof e?e:r,i[1]=p;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4925:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const a={},i="React hooks\u5168\u5c40\u72b6\u6001\u7ba1\u7406\u7684\u5b9e\u73b0\u8fc7\u7a0b(\u6a21\u62dfRedux)",p={unversionedId:"React/React hooks\u6a21\u62dfRedux",id:"React/React hooks\u6a21\u62dfRedux",title:"React hooks\u5168\u5c40\u72b6\u6001\u7ba1\u7406\u7684\u5b9e\u73b0\u8fc7\u7a0b(\u6a21\u62dfRedux)",description:"------",source:"@site/docs/React/React hooks\u6a21\u62dfRedux.md",sourceDirName:"React",slug:"/React/React hooks\u6a21\u62dfRedux",permalink:"/docs/React/React hooks\u6a21\u62dfRedux",draft:!1,editUrl:"https://github.com/evanjason/evanjason.github.io/tree/main/docs/React/React hooks\u6a21\u62dfRedux.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u3010\u4f60\u4e0d\u77e5\u9053\u7684promise\u3011\u8bbe\u8ba1\u4e00\u4e2a\u652f\u6301\u5e76\u53d1\u7684\u524d\u7aef\u63a5\u53e3\u7f13\u5b58",permalink:"/docs/Promise/\u3010\u4f60\u4e0d\u77e5\u9053\u7684promise\u3011\u8bbe\u8ba1\u4e00\u4e2a\u652f\u6301\u5e76\u53d1\u7684\u524d\u7aef\u63a5\u53e3\u7f13\u5b58"},next:{title:"React \u4e2d 5 \u4e2a\u597d\u7528\u7684 Hook",permalink:"/docs/React/React \u4e2d 5 \u4e2a\u597d\u7528\u7684 Hook"}},s={},c=[{value:"1. \u521b\u5efa Redux Action",id:"1-\u521b\u5efa-redux-action",level:3},{value:"<code>src/store/actions.ts</code>",id:"srcstoreactionsts",level:4},{value:"<code>src/store/constants.ts</code>",id:"srcstoreconstantsts",level:4},{value:"2. \u521b\u5efa Redux Reducer",id:"2-\u521b\u5efa-redux-reducer",level:3},{value:"<code>src/store/reducer.ts</code>",id:"srcstorereducerts",level:4},{value:"3. \u521b\u5efa Redux Store",id:"3-\u521b\u5efa-redux-store",level:3},{value:"<code>src/store/store.tsx</code>",id:"srcstorestoretsx",level:4},{value:"4. \u5e94\u7528",id:"4-\u5e94\u7528",level:3},{value:"<code>src/App.tsx</code>",id:"srcapptsx",level:4},{value:"<code>src/component/Login/index.tsx</code>",id:"srccomponentloginindextsx",level:4},{value:"<code>5.\u89e3\u91ca</code>",id:"5\u89e3\u91ca",level:3},{value:"1. \u521b\u5efa Redux Action",id:"1-\u521b\u5efa-redux-action-1",level:3},{value:"2. \u521b\u5efa Redux Reducer",id:"2-\u521b\u5efa-redux-reducer-1",level:3},{value:"3. \u521b\u5efa Redux Store",id:"3-\u521b\u5efa-redux-store-1",level:3},{value:"4. \u5e94\u7528",id:"4-\u5e94\u7528-1",level:3},{value:"<code>src/App.tsx</code>",id:"srcapptsx-1",level:4},{value:"<code>src/component/Login/index.tsx</code>",id:"srccomponentloginindextsx-1",level:4}],l={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"react-hooks\u5168\u5c40\u72b6\u6001\u7ba1\u7406\u7684\u5b9e\u73b0\u8fc7\u7a0b\u6a21\u62dfredux"},"React hooks\u5168\u5c40\u72b6\u6001\u7ba1\u7406\u7684\u5b9e\u73b0\u8fc7\u7a0b(\u6a21\u62dfRedux)"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"1-\u521b\u5efa-redux-action"},"1. \u521b\u5efa Redux Action"),(0,r.kt)("h4",{id:"srcstoreactionsts"},(0,r.kt)("inlineCode",{parentName:"h4"},"src/store/actions.ts")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'export enum ActionType {\n    LOGIN = "LOGIN",\n    LOGOUT = "LOGOUT",\n}\n')),(0,r.kt)("h4",{id:"srcstoreconstantsts"},(0,r.kt)("inlineCode",{parentName:"h4"},"src/store/constants.ts")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Dispatch } from 'react';\n\ninterface IUserInfo {\n    username?: string;\n    userId?: string\n}\n\nexport interface IState {\n    isLogin: boolean;\n    userInfo: IUserInfo;\n}\nexport interface IAction<P = {}> {\n    type: string;\n    payload?: P\n}\nexport interface ICreateContext {\n    state: IState;\n    dispatch: Dispatch<IAction<Partial<IState>>>\n}\nexport const initialState: IState = {\n    isLogin: false,\n    userInfo: {},\n};\n")),(0,r.kt)("h3",{id:"2-\u521b\u5efa-redux-reducer"},"2. \u521b\u5efa Redux Reducer"),(0,r.kt)("h4",{id:"srcstorereducerts"},(0,r.kt)("inlineCode",{parentName:"h4"},"src/store/reducer.ts")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Reducer } from 'react';\nimport { ActionType } from './actions';\nimport { IAction, IState } from './constants';\n\nexport const appReducer: Reducer<IState, IAction> = (state, action) => {\n    switch (action.type) {\n        case ActionType.LOGIN:\n            return { ...state, isLogin: true, ...action.payload };\n        case ActionType.LOGOUT:\n            return { ...state, isLogin: false, userInfo: {} };\n        default:\n            return state;\n    }\n};\n")),(0,r.kt)("h3",{id:"3-\u521b\u5efa-redux-store"},"3. \u521b\u5efa Redux Store"),(0,r.kt)("h4",{id:"srcstorestoretsx"},(0,r.kt)("inlineCode",{parentName:"h4"},"src/store/store.tsx")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { createContext, useContext, useReducer } from 'react';\nimport { ICreateContext, initialState } from './constants';\nimport { appReducer } from './reducer';\n\nconst AppContext = createContext<ICreateContext>({ state: initialState, dispatch: () => { } });\n\ninterface IAppProvider {\n    children?: React.ReactNode\n}\n\nexport const AppStore = ({ children }: IAppProvider) => {\n    const [state, dispatch] = useReducer(appReducer, initialState);\n    return (\n        <AppContext.Provider value={{ state, dispatch }}>\n            {children}\n        </AppContext.Provider>\n    );\n};\n\nexport const useAppContext = () => useContext(AppContext);\n")),(0,r.kt)("h3",{id:"4-\u5e94\u7528"},"4. \u5e94\u7528"),(0,r.kt)("h4",{id:"srcapptsx"},(0,r.kt)("inlineCode",{parentName:"h4"},"src/App.tsx")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import React from 'react';\nimport 'antd/dist/reset.css';\nimport './App.css';\nimport { AppStore } from './store/store';\nimport { LoginComp } from './component/Login';\n\nexport default class App extends React.Component {\n  render() {\n    return (\n      <div className=\"App\">\n        <AppStore>\n          <LoginComp />\n        </AppStore>\n      </div>\n    );\n  }\n}\n")),(0,r.kt)("h4",{id:"srccomponentloginindextsx"},(0,r.kt)("inlineCode",{parentName:"h4"},"src/component/Login/index.tsx")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'import { Button, Space, Spin, Typography } from "antd";\nimport { useEffect, useState } from \'react\';\nimport { ActionType } from \'../../store/actions\';\nimport { IState } from \'../../store/constants\';\nimport { useAppContext } from \'../../store/store\';\nimport \'./index.less\';\n\nexport const LoginComp = () => {\n    const { state, dispatch } = useAppContext()\n    const [loading, setLoading] = useState(false)\n    const { isLogin } = state\n    const payload: IState = {\n        isLogin: true,\n        userInfo: { username: "lwl\u6d4b\u8bd5", userId: "test" },\n    }\n\n    useEffect(() => {\n        checkLogin()\n        return () => {\n            setLoading(false)\n        }\n    }, [])\n\n    const onLogin = () => {\n        dispatch({\n            type: ActionType.LOGIN,\n            payload\n        })\n        localStorage.setItem("appState", JSON.stringify(payload))\n        checkLogin()\n    }\n\n    // \u6a21\u62df\u767b\u5f55\u9a8c\u8bc1\n    const checkLogin = () => {\n        setLoading(true)\n        // \u8fd9\u91cc\u6a21\u62df\u767b\u5f55\u8ba4\u8bc1\uff0c\u9700\u5199\u5165\u5168\u5c40\u6570\u636e\uff08\u4f8b\u5982\u7528\u6237\u4fe1\u606f\u3001\u83dc\u5355\u7b49\u7b49\uff09\n        new Promise((resolve, reject) => {\n            setTimeout(() => {\n                const appState = JSON.parse(localStorage.getItem("appState") || "null")\n                if (appState) {\n                    dispatch({ type: ActionType.LOGIN, payload: appState })\n                    return resolve("success")\n                }\n                return reject("error")\n            }, 500)\n        }).catch((err) => {\n            console.log("err:", err)\n            setLoading(false)\n            onLogout()\n        }).finally(() => {\n            setLoading(false)\n        })\n    }\n\n    const onLogout = () => {\n        dispatch({ type: ActionType.LOGOUT })\n        localStorage.removeItem("appState")\n    }\n\n    return <div className=\'app-wrapper\'>\n        {\n            loading ? <Spin size={"large"} /> : <div>\n                {\n                    isLogin ? <Space direction=\'vertical\'>\n                        <Typography.Title level={2}>\u6b22\u8fce\u60a8\uff0c{state.userInfo.username}</Typography.Title>\n                        <Button type="primary" onClick={onLogout}>\u9000\u51fa\u767b\u5f55</Button>\n                    </Space> : <Space direction=\'vertical\'>\n                        <Typography.Title level={2}>\u8bf7\u767b\u5f55</Typography.Title>\n                        <Button type="primary" onClick={onLogin}>\u767b\u5f55</Button>\n                    </Space>\n                }\n            </div>\n        }\n    </div>\n}\n')),(0,r.kt)("h3",{id:"5\u89e3\u91ca"},(0,r.kt)("inlineCode",{parentName:"h3"},"5.\u89e3\u91ca")),(0,r.kt)("p",null,"\u8fd9\u4e2a\u793a\u4f8b\u5c55\u793a\u4e86\u5982\u4f55\u4f7f\u7528 React Hooks \u7ed3\u5408 Context API \u548c useReducer \u6765\u5b9e\u73b0\u5168\u5c40\u72b6\u6001\u7ba1\u7406\u3002\u8ba9\u6211\u4eec\u9010\u6b65\u89e3\u91ca\u8fd9\u4e2a\u793a\u4f8b\u7684\u6bcf\u4e2a\u90e8\u5206\uff1a"),(0,r.kt)("h3",{id:"1-\u521b\u5efa-redux-action-1"},"1. \u521b\u5efa Redux Action"),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"src/store/actions.ts")," \u4e2d\u5b9a\u4e49\u4e86\u4e00\u4e2a\u679a\u4e3e ",(0,r.kt)("inlineCode",{parentName:"p"},"ActionType"),"\uff0c\u7528\u6765\u8868\u793a\u4e0d\u540c\u7684 action \u7c7b\u578b\u3002"),(0,r.kt)("h3",{id:"2-\u521b\u5efa-redux-reducer-1"},"2. \u521b\u5efa Redux Reducer"),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"src/store/reducer.ts")," \u4e2d\u5b9a\u4e49\u4e86\u4e00\u4e2a\u540d\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"appReducer")," \u7684 reducer \u51fd\u6570\uff0c\u5b83\u63a5\u6536\u5f53\u524d\u72b6\u6001\u548c action\uff0c\u5e76\u6839\u636e action \u7c7b\u578b\u6765\u66f4\u65b0\u72b6\u6001\u3002"),(0,r.kt)("h3",{id:"3-\u521b\u5efa-redux-store-1"},"3. \u521b\u5efa Redux Store"),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"src/store/store.tsx")," \u4e2d\u521b\u5efa\u4e86\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"AppStore")," \u7ec4\u4ef6\uff0c\u5b83\u4f7f\u7528\u4e86 React \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"createContext")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"useReducer")," \u6765\u521b\u5efa\u4e00\u4e2a\u5168\u5c40\u7684\u5e94\u7528\u72b6\u6001\u548c dispatch \u51fd\u6570\u3002\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"AppStore")," \u4e2d\uff0c\u6211\u4eec\u5c06\u72b6\u6001\u548c dispatch \u51fd\u6570\u63d0\u4f9b\u7ed9 ",(0,r.kt)("inlineCode",{parentName:"p"},"AppContext.Provider"),"\uff0c\u8fd9\u6837\u6574\u4e2a\u5e94\u7528\u4e2d\u7684\u7ec4\u4ef6\u90fd\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"useAppContext")," \u81ea\u5b9a\u4e49 hook \u6765\u83b7\u53d6\u72b6\u6001\u548c dispatch \u51fd\u6570\u3002"),(0,r.kt)("h3",{id:"4-\u5e94\u7528-1"},"4. \u5e94\u7528"),(0,r.kt)("h4",{id:"srcapptsx-1"},(0,r.kt)("inlineCode",{parentName:"h4"},"src/App.tsx")),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"src/App.tsx")," \u4e2d\uff0c\u6211\u4eec\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"AppStore")," \u5305\u88f9\u4e86\u6574\u4e2a\u5e94\u7528\uff0c\u5e76\u6e32\u67d3\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"LoginComp")," \u7ec4\u4ef6\u3002"),(0,r.kt)("h4",{id:"srccomponentloginindextsx-1"},(0,r.kt)("inlineCode",{parentName:"h4"},"src/component/Login/index.tsx")),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"src/component/Login/index.tsx")," \u4e2d\uff0c\u6211\u4eec\u5b9a\u4e49\u4e86\u4e00\u4e2a\u540d\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"LoginComp")," \u7684\u51fd\u6570\u7ec4\u4ef6\uff0c\u5b83\u662f\u4e00\u4e2a\u7b80\u5355\u7684\u767b\u5f55\u7ec4\u4ef6\u3002\u5728\u8fd9\u4e2a\u7ec4\u4ef6\u4e2d\uff0c\u6211\u4eec\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"useAppContext")," \u81ea\u5b9a\u4e49 hook \u83b7\u53d6\u4e86\u5168\u5c40\u72b6\u6001 ",(0,r.kt)("inlineCode",{parentName:"p"},"state")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"dispatch")," \u51fd\u6570\u3002"),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"LoginComp")," \u7ec4\u4ef6\u4e2d\uff0c\u6211\u4eec\u4f7f\u7528\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"useState")," \u6765\u5b9a\u4e49\u4e86\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"loading")," \u72b6\u6001\uff0c\u7528\u4e8e\u63a7\u5236\u52a0\u8f7d\u72b6\u6001\u3002\u7136\u540e\uff0c\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"useEffect")," \u4e2d\u8c03\u7528\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"checkLogin")," \u51fd\u6570\u6765\u68c0\u67e5\u7528\u6237\u662f\u5426\u767b\u5f55\u3002\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"checkLogin")," \u51fd\u6570\u4e2d\uff0c\u6211\u4eec\u6a21\u62df\u4e86\u4e00\u4e2a\u767b\u5f55\u9a8c\u8bc1\u7684\u8fc7\u7a0b\uff0c\u5982\u679c\u7528\u6237\u5df2\u767b\u5f55\uff0c\u5c31\u66f4\u65b0\u5168\u5c40\u72b6\u6001\u5e76\u4fdd\u5b58\u5230 localStorage \u4e2d\u3002"),(0,r.kt)("p",null,"\u5728\u7ec4\u4ef6\u7684 JSX \u4e2d\uff0c\u6839\u636e\u5168\u5c40\u72b6\u6001 ",(0,r.kt)("inlineCode",{parentName:"p"},"isLogin")," \u7684\u503c\u6765\u6e32\u67d3\u4e0d\u540c\u7684\u5185\u5bb9\uff0c\u5982\u679c\u7528\u6237\u5df2\u767b\u5f55\uff0c\u663e\u793a\u6b22\u8fce\u4fe1\u606f\u548c\u9000\u51fa\u6309\u94ae\uff0c\u5426\u5219\u663e\u793a\u767b\u5f55\u6309\u94ae\u3002"),(0,r.kt)("p",null,"\u603b\u7ed3\u4e00\u4e0b\uff0c\u8fd9\u4e2a\u793a\u4f8b\u4e2d\u4f7f\u7528\u4e86 React Hooks \u7ed3\u5408 Context API \u548c useReducer \u6765\u5b9e\u73b0\u4e86\u5168\u5c40\u72b6\u6001\u7ba1\u7406\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"AppStore")," \u7ec4\u4ef6\u521b\u5efa\u4e86\u4e00\u4e2a\u5168\u5c40\u7684\u72b6\u6001\u548c dispatch \u51fd\u6570\uff0c\u5e76\u901a\u8fc7 Context API \u63d0\u4f9b\u7ed9\u6574\u4e2a\u5e94\u7528\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"LoginComp")," \u7ec4\u4ef6\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"useAppContext")," \u81ea\u5b9a\u4e49 hook \u6765\u83b7\u53d6\u5168\u5c40\u72b6\u6001\u548c dispatch \u51fd\u6570\uff0c\u5b9e\u73b0\u4e86\u7b80\u5355\u7684\u767b\u5f55\u903b\u8f91\uff0c\u5e76\u6839\u636e\u767b\u5f55\u72b6\u6001\u6765\u5c55\u793a\u4e0d\u540c\u7684\u5185\u5bb9\u3002"),(0,r.kt)("p",null,"\u8fd9\u79cd\u65b9\u5f0f\u7684\u597d\u5904\u662f\uff0c\u5b83\u53ef\u4ee5\u5c06\u5168\u5c40\u72b6\u6001\u548c\u72b6\u6001\u66f4\u65b0\u903b\u8f91\u96c6\u4e2d\u7ba1\u7406\uff0c\u4f7f\u5f97\u7ec4\u4ef6\u4e4b\u95f4\u53ef\u4ee5\u66f4\u65b9\u4fbf\u5730\u5171\u4eab\u72b6\u6001\uff0c\u5e76\u4e14\u51cf\u5c11\u4e86 prop drilling \u7684\u95ee\u9898\u3002\u540c\u65f6\uff0c\u7ed3\u5408\u4e86 React Hooks \u548c Context API\uff0c\u4ee3\u7801\u66f4\u52a0\u7b80\u6d01\u548c\u6613\u8bfb\u3002"))}u.isMDXComponent=!0}}]);