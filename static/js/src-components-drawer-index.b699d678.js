(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"./src/components/Drawer/index.less":function(e,A,t){},"./src/components/Drawer/index.mdx":function(e,A,t){"use strict";t.r(A);var a=t("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),n=t("react"),s=t("./node_modules/@mdx-js/react/dist/esm.js"),r=t("./node_modules/docz/dist/index.esm.js"),o=t("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),l=t("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),c=t("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),i=t("react-dom"),b=t.n(i),d=t("./node_modules/prop-types/index.js"),B=t.n(d);t("./src/components/Drawer/index.less");function g(e){var A=e.closable,t=void 0===A||A,a=e.destroyOnClose,s=e.getContainer,r=void 0===s?document.body:s,i=e.maskClosable,d=void 0===i||i,B=e.mask,g=void 0===B||B,m=e.drawerStyle,j=e.width,O=void 0===j?"300px":j,u=e.zIndex,p=void 0===u?10:u,w=e.placement,C=void 0===w?"right":w,D=e.onClose,E=e.children,h=Object(n.useState)(e.visible),I=Object(c.a)(h,2),Y=I[0],Q=I[1],U=Object(n.useState)(!1),y=Object(c.a)(U,2),S=y[0],q=y[1],F=function(){D&&D(),Q((function(e){return!1!==r&&e&&(r.style.overflow="auto"),!1})),a&&q(!0)};Object(n.useEffect)((function(){Q((function(){return!1!==r&&e.visible&&(r.style.overflow="hidden"),e.visible})),q(!1)}),[e.visible,r]);var V=React.createElement("div",{className:"xDrawerWrap",style:{position:!1===r?"absolute":"fixed",width:Y?"100%":"0",zIndex:p}},!!g&&React.createElement("div",{className:"xDrawerMask",onClick:d?F:null}),React.createElement("div",{className:"xDrawerContent",style:Object(l.a)(Object(o.a)({width:O},C,Y?0:"-100%"),m)},S?null:E,!!t&&React.createElement("span",{className:"xCloseBtn",onClick:F},"X")));return!1===r?V:b.a.createPortal(V,r)}g.propTypes={visible:B.a.bool,closable:B.a.bool,destroyOnClose:B.a.bool,getContainer:B.a.element,maskClosable:B.a.bool,mask:B.a.bool,drawerStyle:B.a.object,width:B.a.oneOfType([B.a.string,B.a.number]),zIndex:B.a.number,placement:B.a.string,onClose:B.a.func};var m=g;g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Drawer",filename:"src/components/Drawer/index.jsx"}}),t.d(A,"default",(function(){return O}));var j={};function O(e){var A=e.components,t=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object.assign({},j,t,{components:A,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"drawer"},"Drawer"),Object(s.b)(r.c,{__position:0,__code:"<Drawer visible={true} />",__scope:{props:this?this.props:t,Playground:r.c,Drawer:m},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwdh5FdY12gPAAvP1-TtKYtUyEYMnQ2V2g9OABHIAF030OBJEI1xiIESRVGwXCIPYQNJVIk1NXaMFUF0FFjlOLDnAIRIsXYbh2GAdYogEZ5UCudoAAZ2CTGYsHaPdqxmDsWBnVSABZtPYAA2bTdPWMBgIAMW9aBElU_hnEOBEHUwGChH4JYiGoSg4AMhEbOrOyaGcCAsMudgAEYTL0-RBOEqYAEE5hk9gIyg8gbCgdAw1QjkZLEbLoxkdgUSkmBuGAbCJJquB5C3GtgDy6BCuCAAybrxkSeZKGaDqCqK7hxrlMBkMlAZUHadgAH4Nk6sMIxKq4Rq61BkurKQZCrN8zBhdVjhgMAwigKY1tK8rdoy5dqwTbiCBwezMhSK8CFamta0Y5j2FYWwIA8WA6tRBk0M3FcpGe173s-1qpHug6zC_EBKOoz51xoei_oyVjww0OAsEA3QQIMMC8JOqC8hgCSsiWWmzzAMAtimNCjTI01FVtE7nuDXj5TNS1IgE1AqftaCB0sAb4EF_tKBmc1JPmOAxYlqZyIJtQcCxNXBOMUxzCMdg8aOQBeo0ASR1ABG_QA3uSKE2AAEDMyWVgEB_IQZgNCvEoKB2CtwB6M0AMhVAHvlQBById9hndcV25PIKAgtcL2feEf2Q8APjNAC5PQBn5UAKDlACXIwAQt0AZ0VAFvUwBIY0AOpSo5juP6vgVFKESHVUHsRO4G99hff98vADfTQAAVMAQetABnEwAjdKLwAFbUAYUVAAJfWuXe9OTT0cGhXDQDI0IACUsPUABkLxgT72EAcGNACztU2iJIwAgY0AX3ii_YHf9_YQAgoMAToclnOqBO_YQAuOTvwAFOqAGV9QAskqiSIAvWOS9gBRDgNsduScU7dzTuwN-gBvxUAJkhgAhHRDoAQUVAAd0eXK2kD66wO2KnP27AQ6AFUdLOgA7BMAJb-JDoGFSYhkRqsA0KUA8OoNm7BAAUroAU3NAB90YAO38raAE59QAX4pYMAOwWgB4fWYW7HE6AJhoVQKEIggQBAAB8UTTlnNIrBgBe7UAGV6Si5JYQaITdRmjtHsCMVgwA5X4WOAGSCUR99BoX0QUAOltACdpoARBVXHUAQZ3bxqJfHoP7kXQAe2qAGAYh2vJUBTSEt2cwZsIwKzuCVeS1ZUpyXYCuBOiDYBZXBjAJYK5yhNxbm3DulSimPRHAQVeBB17OiOLJA8mjjxeHQIkKpzSyFhOTmU2SFShk_TIeUtEjTqlXwEBw-ZzSVEFlku0JMak1LWT0j9KxhMspxTUnsms7iETHw2f0FIhBdJNJ-qEhppyLCbTDOsNCslslwEEhYWAUwADaHtgawCWJ3AgAA1IGXsAC6WVab01oFkgccAcBAq9m-X5o52D_NsFqeA9h8qLCqqOBocA8VwAJZ1WFsl4XtMRV_Tuh18nUBEn4DAsAwndFktdbgZU8kPPqUFbovU9iCs7mtFcYLIWe1gBGJFMBWAlV5XJFcFgIBgAjCvYCHSSIAEIJoMuFX1fsCrcmqprFqteG8BA4GqrAHAlBWAZDAInMYGywgRDFj9CwO1vUTlHH0cwhqVzyAxTWdVEYalCDqZys1zSLBgtJeSylBUIwVLDT695Pzcid2ZqzSUcqlV8slaOaVwKYCFpuvy71EbLXtOtewfVslDXsBFV81FULYBxr9RYOtOqbV2r_I651rqsrtBsJ2OgXrvW-u9V0Agga-zIo7TKxkzTQ0loIEm_FhKIyGrDUobF7a0UgpaW0_t0KmUvJZVMTaWpjTcuhpVc1Cd_BwAAHLelqvwLAZsADqmQZj8Hud6wddVq1-sFPkdJVw-0NvGs2-IP8lrtGTnAP24QYDzVUpAGo6Awo9rzFwCYVwT3dBQ8ctSABSbDco1IEZ7QctQ5r5CzosN9NqjbdUzJFTGDgr64Afq_XwEAv7Fl6n8NsYDjzYjbDqiMjuYzyPTHZTATl7ArgaISC1PasZULmr4yBv1AmhNHhE2JthAg2n6GA-ahNklQbAAgz2tZeBnk9v-eczxNBoWkc7cpjSqlzSUZo-5v1OAIusOYssuzqEWqxec363FO7OqLXYFp_2G1CVvPjTWNj3rEvet1bqkpFQvatr6owYK7gehwUE5-szP7OXXgIP6EAor26ybqmy9AHKGktQABpSGq6gDjP18vbn2tDHcsh1hXv9QugQ5g4OdJkgapDym73GiuPzfUHxTS0GguqeIEYttECWCtjIb4dpmDNjgbJMtVZZWrWRq4UtFaPfgDgHupzStKbe9LWWKKfsgajc3VunKAcfaB99tOUyz3autVDmYn2UXzm8wQeHCnSmxXeyjmHIOFKSeR6j2Hft4dRfYQ53HgPVYOp4WzeHrmScw-oDAHUYBPsRn-SuPHpOfEznc3zmHGitGgmrJe05THsAs7p6L7RpyvOfVl19gXKR4ePKFSrlFqTyBmBu86LA-FTrnVCJdS-lm0YYxotjAguNFna2wLreAWgKDAX0AwHAFnmIAdmCq6sEQZhXDUiqasmwIA3IIFcSjrA8Ch4sMOgQLrRhXAnZgVA8f2Be7NhJuB_ufpQZeLNK4aGMO0Ez5isAUf2Ah5XNcwgweK9DiDzXpvXgbiREbyuDwEptiITaBgc0VBE5lgnCkHvEYTk16WFPnAABWD8WbqzZ8WdZzMznC8wZCB4dDUBMNN8D135pBlOwFGj1ZLATfw-R-j9sqjB_MioGg8XkICQs9JjgG33v_fkLoCH37IUK4AAYhZjADb28HNDgD8BOBGGDxr3YAACYdkfAlIJ8Tl0ClgcAEDF9mkvdmtWt89vVN8X9S899y9zVD94pkCm8LB69q9jltIaDCwR9gDyA2CmDegBB0NR9BQ0BaABAm9Z0dp5A0YQpthXA0h_x0NUBSZ3dQIQBq1-BUAv1-Arh-AfhixqgMhzQfwyRGQQBTl-AnUuDZpVCikQA1IcBLC1I_J1h-ByhyB-gZh0kzD-A0oqo8IyldCylMAyRm5cw8hfFuYLQNC_hSxbDqx-Aog0BXCVBCYpCIiLB7CYB5hwwhIIB4AzDnN-BgjYi4oLIvdEiawcjNQRYIEkBzD8jCiQAl8RClB0YwjcBdBIAUgpDqBZC9B5D5IQBaAfQshVD1CDsYBzRgjzRZggMFAFBWMgA",mdxType:"Playground"},Object(s.b)(m,{visible:!0,mdxType:"Drawer"})),Object(s.b)("h2",{id:"basic-usage"},"Basic usage"),Object(s.b)("pre",null,Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"import { Drawer } from '@xlab/xu_ui'\n\n// \u5bfc\u5165\n<Drawer />\n")),Object(s.b)("h2",{id:"api\u6587\u6863"},"API\u6587\u6863"),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",Object.assign({parentName:"tr"},{align:null}),"\u53c2\u6570"),Object(s.b)("th",Object.assign({parentName:"tr"},{align:null}),"\u8bf4\u660e"),Object(s.b)("th",Object.assign({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(s.b)("th",Object.assign({parentName:"tr"},{align:null}),"\u9ed8\u8ba4\u503c"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object.assign({parentName:"tr"},{align:null})),Object(s.b)("td",Object.assign({parentName:"tr"},{align:null})),Object(s.b)("td",Object.assign({parentName:"tr"},{align:null})),Object(s.b)("td",Object.assign({parentName:"tr"},{align:null}))))))}O&&O===Object(O)&&Object.isExtensible(O)&&Object.defineProperty(O,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Drawer/index.mdx"}}),O.isMDXComponent=!0}}]);