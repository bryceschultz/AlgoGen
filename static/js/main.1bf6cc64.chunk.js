(this.webpackJsonpalgogen=this.webpackJsonpalgogen||[]).push([[0],{231:function(e,t,n){},232:function(e,t,n){},234:function(e,t,n){},260:function(e,t){},262:function(e,t){},272:function(e,t){},274:function(e,t){},301:function(e,t){},302:function(e,t){},307:function(e,t){},309:function(e,t){},316:function(e,t){},335:function(e,t){},446:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(23),s=n.n(c),o=(n(231),n(64)),i=n(11),l=n.n(i),u=n(19),d=n(32),f=(n(232),n(233),n(234),n(222)),b=n(65),j=n(457),x=n(456),m=n(49),h=n(455),p=n(80),g=n(39),O=n.n(g),v=function(){var e=Object(u.a)(l.a.mark((function e(t,n){var a,r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.status().do();case 2:a=e.sent,r=a["last-round"];case 4:return e.next=7,t.pendingTransactionInformation(n).do();case 7:if(!(null!==(c=e.sent)["confirmed-round"]&&c["confirmed-round"]>0)){e.next=11;break}return console.log("Transaction "+n+" confirmed in round "+c["confirmed-round"]),e.abrupt("break",16);case 11:return r++,e.next=14,t.statusAfterBlock(r).do();case 14:e.next=4;break;case 16:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),y=function(){var e=Object(u.a)(l.a.mark((function e(t,n,a){var r,c,s,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.accountInformation(n).do();case 2:r=e.sent,c=0;case 4:if(!(c<r["created-assets"].length)){e.next=14;break}if((s=r["created-assets"][c]).index!=a){e.next=11;break}return console.log("AssetID = "+s.index),o=JSON.stringify(s.params,void 0,2),console.log("parms = "+o),e.abrupt("break",14);case 11:c++,e.next=4;break;case 14:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),k=function(){var e=Object(u.a)(l.a.mark((function e(t,n,a){var r,c,s,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.accountInformation(n).do();case 2:r=e.sent,c=0;case 4:if(!(c<r.assets.length)){e.next=13;break}if((s=r.assets[c])["asset-id"]!=a){e.next=10;break}return o=JSON.stringify(s,void 0,2),console.log("assetholdinginfo = "+o),e.abrupt("break",13);case 10:c++,e.next=4;break;case 13:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),N=function(e,t,n,a){return new Promise((function(r,c){var s=new O.a.Algodv2({"X-API-Key":"cfoNpaCzsF9xJRTOO39rF78aJRbK4fqj4W8LNv6k"},"https://testnet-algorand.api.purestake.io/ps2",""),o=O.a.generateAccount(),i=O.a.secretKeyToMnemonic(o.sk),d=O.a.mnemonicToSecretKey("elegant copy novel remember stomach mixture job make future diary shadow useless health galaxy decorate kingdom library agree image artwork together pupil tip about health"),f=O.a.mnemonicToSecretKey("arrive type system robust achieve margin replace dry invite impose bottom fade parent record garlic lonely wealth rose farm skull final rival you absorb air"),b=O.a.mnemonicToSecretKey(i);console.log(d.addr),console.log(f.addr),console.log(b.addr),Object(u.a)(l.a.mark((function c(){var o,i,u,b,j,x,m,h,p,g,N,T,w,I,S;return l.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,s.getTransactionParams().do();case 2:return(o=c.sent).fee=1e3,o.flatFee=!0,console.log(o),void 0,i=d.addr,!1,u=parseInt(a),b=1e5*n,j=t,x=e,"http://someurl","16efaa3924a6fd9d3a4824799a4ac65d",m=f.addr,h=f.addr,p=f.addr,g=f.addr,N=O.a.makeAssetCreateTxnWithSuggestedParams(i,undefined,b,u,false,m,h,p,g,j,x,"http://someurl","16efaa3924a6fd9d3a4824799a4ac65d",o),T=N.signTxn(d.sk),c.next=23,s.sendRawTransaction(T).do();case 23:return w=c.sent,console.log("Transaction : "+w.txId),I=null,c.next=28,v(s,w.txId);case 28:return c.next=30,s.pendingTransactionInformation(w.txId).do();case 30:return S=c.sent,I=S["asset-index"],c.next=34,y(s,d.addr,I);case 34:return c.next=36,k(s,d.addr,I);case 36:r({assetId:I,managingAccount:d.addr,assetName:x});case 37:case"end":return c.stop()}}),c)})))().catch((function(e){console.log(e),console.trace(),c(e)}))}))},T=n(211),w=n.n(T),I=n(9),S=x.a.confirm,A=function(){var e=Object(a.useState)("Test Net"),t=Object(d.a)(e,2),n=t[0];t[1];return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)("div",{style:{height:"20px"}}),Object(I.jsx)("div",{style:{height:"120px"},children:Object(I.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(I.jsxs)("span",{style:{color:"white"},className:"big_sentence",children:["AlgoGen",Object(I.jsx)("span",{className:"input-cursor"})]})})}),Object(I.jsx)("div",{style:{height:"50px"},children:Object(I.jsx)(C,{activeNet:n,onNetChange:function(){alert("This feature isn't quite ready yet!")}})})]})},C=function(e){return Object(I.jsx)(m.a,{type:"primary",style:{float:"right",marginRight:"10%"},onClick:function(){return S({title:"Do you want to switch to the "+("Test Net"===e.activeNet?"Main Net":"Test Net")+"?",icon:Object(I.jsx)(p.a,{}),content:"You are currently configuring a token on the "+e.activeNet,okText:"Yes",cancelText:"No",onOk:function(){return e.onNetChange(),new Promise((function(e,t){setTimeout(Math.random()>.5?e:t,1e3)})).catch((function(){return console.log("Oops errors!")}))},onCancel:function(){}})},children:e.activeNet})},F=function(){var e=Object(a.useState)(!1),t=Object(d.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(!1),s=Object(d.a)(c,2),i=s[0],m=s[1],h=Object(b.b)(),p=h.control,g=h.handleSubmit;function O(e,t){var n="https://testnet.algoexplorer.io/asset/"+e;x.a.success({title:"Congrats! "+t+" has been created!",content:Object(I.jsxs)("div",{children:[Object(I.jsx)("p",{children:"Click here for a summary of your asset:"}),Object(I.jsx)("a",{href:n,children:n})]})})}return Object(I.jsxs)(I.Fragment,{children:[n&&Object(I.jsx)(J,{}),i&&Object(I.jsx)(w.a,{}),Object(I.jsxs)("form",{onSubmit:g((function(e){r(!0),Object(u.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N(e.assetName,e.unitName,e.assetTotal,e.assetDecimals.value);case 2:n=t.sent,console.log(n),O(n.assetId,n.assetName),r(!1),m(!0);case 7:case"end":return t.stop()}}),t)})))().catch((function(e){console.log(e),console.trace(),console.log("createAsset Function failed"),function(e){x.a.error({title:"Oops, that didn't work",content:Object(I.jsxs)("div",{children:[Object(I.jsx)("p",{children:"Here's the error we received:"}),Object(I.jsx)("code",{children:e})]})})}(JSON.stringify(e.message)),r(!1)}))})),children:[Object(I.jsx)("label",{style:{marginTop:"30px"},children:"Asset Name"}),Object(I.jsx)(b.a,{render:function(e){var t=e.field;return Object(I.jsx)(j.a,Object(o.a)({},t))},name:"assetName",control:p,defaultValue:""}),Object(I.jsx)("label",{children:"Unit Name"}),Object(I.jsx)(b.a,{render:function(e){var t=e.field;return Object(I.jsx)(j.a,Object(o.a)({},t))},name:"unitName",control:p,defaultValue:""}),Object(I.jsx)("label",{children:"Asset Total"}),Object(I.jsx)(b.a,{render:function(e){var t=e.field;return Object(I.jsx)(j.a,Object(o.a)({},t))},name:"assetTotal",control:p,defaultValue:""}),Object(I.jsx)("label",{children:"Asset Decimals"}),Object(I.jsx)(b.a,{name:"assetDecimals",render:function(e){var t=e.field;return Object(I.jsx)(f.a,Object(o.a)(Object(o.a)({},t),{},{options:[{value:"0",label:"0"},{value:"1",label:"1"},{value:"2",label:"2"},{value:"3",label:"3"},{value:"4",label:"4"},{value:"5",label:"5"},{value:"6",label:"6"},{value:"7",label:"7"},{value:"8",label:"8"},{value:"9",label:"9"},{value:"10",label:"10"}]}))},control:p,defaultValue:""}),Object(I.jsx)("input",{className:"submit_button",type:"submit"})]})]})},J=function(){return Object(I.jsx)("div",{className:"example",children:Object(I.jsx)(h.a,{})})},P=function(){return Object(I.jsxs)("div",{children:[Object(I.jsx)(A,{}),Object(I.jsx)(F,{})]})},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,458)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};s.a.render(Object(I.jsx)(r.a.StrictMode,{children:Object(I.jsx)(P,{})}),document.getElementById("root")),D()}},[[446,1,2]]]);
//# sourceMappingURL=main.1bf6cc64.chunk.js.map