(this.webpackJsonpalgogen=this.webpackJsonpalgogen||[]).push([[0],{143:function(e,t,n){},344:function(e,t){},346:function(e,t){},356:function(e,t){},358:function(e,t){},385:function(e,t){},387:function(e,t){},388:function(e,t){},393:function(e,t){},395:function(e,t){},401:function(e,t){},403:function(e,t){},422:function(e,t){},434:function(e,t){},437:function(e,t){},451:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(24),c=n.n(s),i=n(27),o=(n(143),n(461)),u=n(50),l=n(80),d=n(7),b=o.a.confirm,f=function(e){return Object(d.jsx)(u.a,{type:"primary",className:"netButton",style:{float:"right",marginRight:"10%"},onClick:function(){return b({title:"Do you want to switch to the "+("Test Net"===e.activeNet?"Main Net":"Test Net")+"?",icon:Object(d.jsx)(l.a,{}),content:"You are currently configuring a token on the "+e.activeNet,okText:"Yes",cancelText:"No",onOk:function(){return e.onNetChange(),new Promise((function(e,t){setTimeout(Math.random()>.5?e:t,1e3)})).catch((function(){return console.log("Oops errors!")}))},onCancel:function(){}})},children:e.activeNet})},j=function(){var e=Object(a.useState)("Test Net"),t=Object(i.a)(e,2),n=t[0];t[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{style:{height:"20px"}}),Object(d.jsx)("div",{style:{height:"120px"},children:Object(d.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(d.jsxs)("span",{style:{color:"white"},className:"big_sentence",children:["AlgoGen",Object(d.jsx)("span",{className:"input-cursor"})]})})}),Object(d.jsx)("div",{style:{height:"80px",float:"right",marginRight:"10%"},children:Object(d.jsx)(f,{activeNet:n,onNetChange:function(){alert("This feature isn't quite ready yet!")}})}),Object(d.jsx)("div",{style:{height:"70px"}})]})},x=n(65),h=n(11),m=n.n(h),p=n(20),O=n(227),g=n(66),v=n(462),k=n(460),y=n(222),N=n.n(y),w=n(46),T=n.n(w),I=function(){var e=Object(p.a)(m.a.mark((function e(t,n){var a,r,s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.status().do();case 2:a=e.sent,r=a["last-round"];case 4:return e.next=7,t.pendingTransactionInformation(n).do();case 7:if(!(null!==(s=e.sent)["confirmed-round"]&&s["confirmed-round"]>0)){e.next=10;break}return e.abrupt("break",15);case 10:return r++,e.next=13,t.statusAfterBlock(r).do();case 13:e.next=4;break;case 15:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),S=function(){var e=Object(p.a)(m.a.mark((function e(t,n,a){var r,s,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.accountInformation(n).do();case 2:r=e.sent,s=0;case 4:if(!(s<r["created-assets"].length)){e.next=12;break}if((c=r["created-assets"][s]).index!=a){e.next=9;break}return JSON.stringify(c.params,void 0,2),e.abrupt("break",12);case 9:s++,e.next=4;break;case 12:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),C=function(){var e=Object(p.a)(m.a.mark((function e(t,n,a){var r,s,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.accountInformation(n).do();case 2:r=e.sent,s=0;case 4:if(!(s<r.assets.length)){e.next=12;break}if((c=r.assets[s])["asset-id"]!=a){e.next=9;break}return JSON.stringify(c,void 0,2),e.abrupt("break",12);case 9:s++,e.next=4;break;case 12:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),A=function(e,t,n,a){return new Promise((function(r,s){var c=new T.a.Algodv2({"X-API-Key":"cfoNpaCzsF9xJRTOO39rF78aJRbK4fqj4W8LNv6k"},"https://testnet-algorand.api.purestake.io/ps2",""),i=T.a.generateAccount(),o=T.a.secretKeyToMnemonic(i.sk),u=T.a.mnemonicToSecretKey("code thrive mouse code badge example pride stereo sell viable adjust planet text close erupt embrace nature upon february weekend humble surprise shrug absorb faint");Object(p.a)(m.a.mark((function s(){var i,l,d,b,f,j,x,h,p,O,g,v,k,y,N;return m.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,c.getTransactionParams().do();case 2:return(i=s.sent).fee=1e3,i.flatFee=!0,n=parseInt(n),void 0,l=u.addr,!1,d=parseInt(a),b=n,f=t,j=e,"http://someurl","16efaa3924a6fd9d3a4824799a4ac65d",x=u.addr,h=u.addr,p=u.addr,O=u.addr,g=T.a.makeAssetCreateTxnWithSuggestedParams(l,undefined,b,d,false,x,h,p,O,f,j,"http://someurl","16efaa3924a6fd9d3a4824799a4ac65d",i),v=g.signTxn(u.sk),s.next=23,c.sendRawTransaction(v).do();case 23:return k=s.sent,y=null,s.next=27,I(c,k.txId);case 27:return s.next=29,c.pendingTransactionInformation(k.txId).do();case 29:return N=s.sent,y=N["asset-index"],s.next=33,S(c,u.addr,y);case 33:return s.next=35,C(c,u.addr,y);case 35:r({assetId:y,assetName:j,managingAccount:u.addr,managingPassphrase:o});case 36:case"end":return s.stop()}}),s)})))().catch((function(e){s(e)}))}))},F=function(){return Object(d.jsx)("div",{className:"spin_div",children:Object(d.jsx)(k.a,{})})},P=function(e){var t=Object(a.useState)(!1),n=Object(i.a)(t,2),r=n[0],s=n[1],c=Object(a.useState)(!1),u=Object(i.a)(c,2),l=u[0],b=u[1],f=Object(g.b)(),j=f.control,h=f.handleSubmit;function k(e,t,n,a){var r="https://testnet.algoexplorer.io/asset/"+e;o.a.success({title:"Congrats! "+t+" has been created!",content:Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:"Click here for a summary of your asset:"}),Object(d.jsx)("a",{href:r,children:r})]})})}return Object(d.jsxs)(d.Fragment,{children:[r&&Object(d.jsx)(F,{}),!r&&Object(d.jsxs)("form",{onSubmit:h((function(e){s(!0),Object(p.a)(m.a.mark((function t(){var n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A(e.assetName,e.unitName,e.assetTotal,e.assetDecimals.value);case 2:k((n=t.sent).assetId,n.assetName,n.managingAccount,n.managingPassphrase),s(!1),b(!0);case 6:case"end":return t.stop()}}),t)})))().catch((function(e){!function(e){o.a.error({title:"Oops, that didn't work",content:Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:"Here's the error we received:"}),Object(d.jsx)("code",{children:e})]})})}(JSON.stringify(e.message)),s(!1)}))})),children:[l&&Object(d.jsx)(N.a,{}),Object(d.jsx)("label",{style:{marginTop:"50px"},children:"Asset Name"}),Object(d.jsx)(g.a,{render:function(e){var t=e.field;return Object(d.jsx)(v.a,Object(x.a)({},t))},name:"assetName",control:j,defaultValue:""}),Object(d.jsx)("label",{children:"Unit Name"}),Object(d.jsx)(g.a,{render:function(e){var t=e.field;return Object(d.jsx)(v.a,Object(x.a)({},t))},name:"unitName",control:j,defaultValue:""}),Object(d.jsx)("label",{children:"Asset Total"}),Object(d.jsx)(g.a,{render:function(e){var t=e.field;return Object(d.jsx)(v.a,Object(x.a)({},t))},rules:[{required:!0}],name:"assetTotal",control:j,defaultValue:""}),Object(d.jsx)("label",{children:"Asset Decimals"}),Object(d.jsx)(g.a,{name:"assetDecimals",render:function(e){var t=e.field;return Object(d.jsx)(O.a,Object(x.a)(Object(x.a)({},t),{},{className:"asset_decimals",options:[{value:"0",label:"0"},{value:"1",label:"1"},{value:"2",label:"2"},{value:"3",label:"3"},{value:"4",label:"4"},{value:"5",label:"5"},{value:"6",label:"6"},{value:"7",label:"7"},{value:"8",label:"8"},{value:"9",label:"9"},{value:"10",label:"10"}]}))},control:j,defaultValue:{value:"0",label:"0"}}),Object(d.jsx)("input",{className:"submit_button buttonStyled",type:"submit"})]})]})};var J=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(j,{}),Object(d.jsx)(P,{})]})},D=function(){return Object(d.jsx)(J,{})},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,463)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),s(e),c(e)}))};c.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(D,{})}),document.getElementById("root")),R()}},[[451,1,2]]]);
//# sourceMappingURL=main.3ba946f9.chunk.js.map