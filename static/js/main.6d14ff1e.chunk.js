(this["webpackJsonpepicx67-portfolio"]=this["webpackJsonpepicx67-portfolio"]||[]).push([[0],{34:function(e,t,i){},35:function(e,t,i){},36:function(e,t,i){},37:function(e,t,i){},38:function(e,t,i){},39:function(e,t,i){},40:function(e,t,i){},43:function(e,t,i){},44:function(e,t,i){},55:function(e,t,i){},56:function(e,t,i){"use strict";i.r(t);var n=i(2),c=i.n(n),a=i(20),s=i.n(a),o=i(4),r=(i(34),i(35),i(36),i(37),i(38),i(39),i(40),i.p+"static/media/logo.ff798e88.svg"),l=i.p+"static/media/cover_skill.3a5d365f.svg",d=i.p+"static/media/cover_skill2.d2bcda22.svg",j=i.p+"static/media/cover_skill3.ec741840.svg",h=i.p+"static/media/cover_skill4.d480836c.svg",b=i.p+"static/media/cover_skill5.4b7fd63f.svg",m=i.p+"static/media/cover_skill6.150ce31e.svg",u=i.p+"static/media/cover_skill7.504e5c22.svg",p=i.p+"static/media/cover_skill8.eef501e9.svg",x=i.p+"static/media/java.028a8f31.svg",C=i.p+"static/media/js.df94f703.svg",v=i.p+"static/media/node.1509f84c.svg",O=i.p+"static/media/mongo.bc2e5df4.svg",g=i.p+"static/media/sass.507731bf.svg",f=i.p+"static/media/python.a0a05ec6.svg",y=i.p+"static/media/framermotion.284ea838.svg",w=i.p+"static/media/cover_a&c.d7f79be3.png",N=i.p+"static/media/cover_blog.9f9e8c36.png",k=i.p+"static/media/cover_chem.48a1358e.png",H=i.p+"static/media/cover_fc2.997652da.png",V=i.p+"static/media/cover_mof1.b6e8c53b.png",L=i.p+"static/media/cover_agni.e8c038c1.png",M=i(58),S=i(0);function _(e){var t=e.width,i=t-2*t;return Object(S.jsxs)(M.a.div,{className:"splash",animate:{opacity:0},transition:{duration:1,delay:1},children:[Object(S.jsx)(M.a.div,{initial:{x:i},animate:{x:[i,0,t]},transition:{type:"tween",duration:1.5,delay:.5}},"1"),Object(S.jsx)(M.a.div,{initial:{x:i},animate:{x:[i,0,t]},transition:{type:"tween",duration:1.5}},"2")]})}function Z(e){var t=e.logo,i=e.heading,n=e.subtext,c=e.url;return Object(S.jsxs)("div",{className:"socialCard",initial:"hidden",animate:"show",children:[Object(S.jsxs)("div",{className:"mContainer",children:[Object(S.jsx)("h1",{children:i}),Object(S.jsx)("p",{children:n}),Object(S.jsx)("div",{href:c,target:"blank",className:"cardbtnContainer",children:Object(S.jsx)("i",{onClick:function(){return function(){var e=document.createElement("a");e.target="blank",e.href=c,e.click()}()},className:"".concat(t," accM")})})]}),Object(S.jsx)("div",{className:"lContainer",children:Object(S.jsx)("i",{className:t})})]})}var E=i(10),F=i.n(E),P=i(15),T=(i(43),function(e){return new Promise((function(t){setTimeout((function(){t(2)}),e)}))});function B(e){var t=e.deviceType,i=void 0===t?"mobile":t,c=Object(n.useState)(!0),a=Object(o.a)(c,2),s=a[0],r=a[1],l=Object(n.useState)(!1),d=Object(o.a)(l,2),j=d[0],h=d[1],b=Object(n.useState)(!1),m=Object(o.a)(b,2),u=m[0],p=m[1],x=Object(n.useState)(!1),C=Object(o.a)(x,2),v=C[0],O=C[1],g=Object(n.useState)(""),f=Object(o.a)(g,2),y=f[0],w=f[1],N=Object(n.useState)(""),k=Object(o.a)(N,2),H=k[0],V=k[1],L=function(){var e=Object(P.a)(F.a.mark((function e(t){var i,n,c;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),""!==y.trim()&&""!==H.trim()){e.next=3;break}return e.abrupt("return");case 3:return r(!1),e.next=6,T(200);case 6:return h(!0),e.next=9,T(1e3);case 9:return i=document.getElementById("feedbackForm"),n=new URLSearchParams(new FormData(i)),e.prev=11,e.next=14,fetch("https://portfoliofeedback69.herokuapp.com/send",{method:"post",body:n,mode:"cors"});case 14:c=e.sent,h(!1),O(200!==c.status),p(200===c.status),e.next=25;break;case 20:e.prev=20,e.t0=e.catch(11),h(!1),O(!0),p(!1);case 25:return e.next=27,T(1500);case 27:return O(!1),p(!1),e.next=31,T(1e3);case 31:w(""),V(""),r(!0);case 34:case"end":return e.stop()}}),e,null,[[11,20]])})));return function(t){return e.apply(this,arguments)}}();return Object(S.jsxs)("form",{className:"mobile"===i?"contactForm contactForm-mobile":"contactForm",onSubmit:function(e){return L(e)},id:"feedbackForm",children:[Object(S.jsxs)(M.a.div,{className:"sContainer",animate:s?{}:"mobile"===i?{height:"100%",borderRadius:"8px 8px 8px 8px"}:{width:"100%",borderRadius:"8px 8px 8px 8px"},transition:{duration:.8,delay:.2,ease:[.87,.07,.37,.97]},children:[Object(S.jsxs)(M.a.div,{className:"idle",initial:{opacity:1,pointerEvents:"auto"},animate:s?{opacity:1,pointerEvents:"auto"}:{opacity:0,pointerEvents:"none"},transition:{duration:.8},children:[Object(S.jsx)("h1",{children:"Contact"}),Object(S.jsx)("p",{children:"Any questions or remarks? Just Write me a message :)"})]}),Object(S.jsxs)(M.a.div,{className:"onProcess",initial:{opacity:0,pointerEvents:"none"},animate:j?{opacity:1}:{opacity:0},transition:{delay:1},children:[Object(S.jsx)(M.a.div,{animate:{y:["-10%","10%","-10%"]},transition:{repeat:1/0,duration:1.2},children:Object(S.jsx)("i",{className:"ri-message-2-line"})}),Object(S.jsx)("h3",{children:"Please Wait"})]}),Object(S.jsxs)(M.a.div,{className:"onSuccess",initial:{opacity:0,pointerEvents:"none"},animate:u?{opacity:1}:{opacity:0},transition:{delay:1},children:[Object(S.jsx)("div",{children:Object(S.jsx)("i",{className:"ri-chat-smile-line"})}),Object(S.jsx)("h3",{children:"Thank You for contacting me"})]}),Object(S.jsxs)(M.a.div,{className:"onFailed",initial:{opacity:0,pointerEvents:"none"},transition:{delay:1},animate:v?{opacity:1,pointerEvents:"auto"}:{opacity:0,pointerEvents:"none"},children:[Object(S.jsx)("div",{children:Object(S.jsx)("i",{className:"ri-chat-delete-line"})}),Object(S.jsx)("h3",{children:"Something Went wrong :("})]})]}),Object(S.jsxs)("div",{className:"mContainer",children:[Object(S.jsx)("input",{placeholder:"Your name",type:"text",name:"name",id:"fName",onChange:function(e){return w(e.target.value)},value:y,required:!0}),Object(S.jsx)("textarea",{id:"fMessage",name:"message",placeholder:"Write your message",onChange:function(e){return V(e.target.value)},value:H,required:!0}),Object(S.jsx)("input",{type:"submit",value:"Send"})]})]})}var A=i(59);function I(e){var t=e.onClick,i=e.number,n=e.active,c=void 0!==n&&n;return Object(S.jsx)("div",{onClick:t,className:c?"number-active":"",children:i})}function R(e){var t=e.className;return Object(S.jsxs)("svg",{width:"100",height:"100",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg",children:[Object(S.jsx)("g",{clipPath:"url(#clip0)",children:Object(S.jsx)("path",{className:t,fillRule:"evenodd",clipRule:"evenodd",d:"M53.1565 45.5043C54.1129 46.7333 53.1347 48.9697 52.7929 49.7224C49.8256 56.5043 38.1129 60.177 27.8402 64.9952C15.2838 70.9043 7.77836 78.737 7.98563 79.0534C8.1929 79.3697 18.0947 70.6024 33.4656 65.8752C38.3892 64.3588 52.8292 63.7697 63.262 57.3224C67.4474 54.7334 72.462 51.3188 76.8656 45.1406C81.1601 39.1152 84.5456 30.7515 89.342 30.9079C90.4329 30.9406 91.4656 31.4024 91.6256 31.0824C91.9892 30.3879 88.0838 26.137 84.0692 25.9915C77.8874 25.7588 74.6983 34.8388 68.7965 36.537C60.2038 39.3006 56.1638 29.0497 41.9129 31.617C31.9783 34.2752 33.1311 45.0061 22.9493 48.8424C17.3711 50.9479 11.8838 49.2061 11.7056 50.0752C11.4293 51.4133 21.8874 57.4279 30.8583 54.2897C36.782 52.217 38.9529 47.2315 47.4547 45.1588C51.2365 44.2279 52.5965 44.7879 53.1565 45.5043Z",fill:"current-color"})}),Object(S.jsx)("defs",{children:Object(S.jsx)("clipPath",{id:"clip0",children:Object(S.jsx)("rect",{width:"84",height:"53.0909",fill:"white",transform:"translate(8 26)",className:t})})})]})}function W(e){var t=e.className;return Object(S.jsx)("svg",{width:"100",height:"100",viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(S.jsx)("path",{className:t,d:"M30.7657 45.9965L29.1178 49.1826L28.8248 49.0239C28.8248 48.7553 28.7393 48.5437 28.5684 48.3891C28.1046 47.9741 27.421 47.6323 26.5177 47.3637C25.6143 47.0952 24.6988 46.9609 23.7711 46.9609C22.9817 46.9609 22.2818 47.0707 21.6715 47.2905C20.7926 47.6078 20.3531 48.0676 20.3531 48.6699C20.3531 49.0686 20.5647 49.3535 20.9879 49.5244C21.411 49.6871 22.2289 49.8173 23.4415 49.915L25.3702 50.0615C27.0548 50.1917 28.3365 50.5172 29.2154 51.038C29.7037 51.331 30.1065 51.7216 30.4239 52.2099C30.8227 52.8203 31.022 53.5079 31.022 54.2729C31.022 55.6645 30.3954 56.7631 29.1422 57.5688C27.9459 58.3419 26.3264 58.7285 24.2838 58.7285C22.2248 58.7285 20.2351 58.2931 18.3145 57.4223C18.1843 57.3653 18.0745 57.3369 17.9849 57.3369C17.8222 57.3369 17.6716 57.4345 17.5333 57.6298L17.2281 57.5078L18.6319 54.163L18.9371 54.2851C18.9371 54.3339 18.9371 54.3665 18.9371 54.3828C18.9371 54.5943 19.0185 54.7734 19.1812 54.9199C19.5881 55.2779 20.2921 55.5912 21.293 55.8598C22.294 56.1202 23.2828 56.2504 24.2594 56.2504C25.122 56.2504 25.8951 56.1365 26.5787 55.9086C27.425 55.6319 27.8482 55.1843 27.8482 54.5659C27.8482 54.0694 27.5553 53.7236 26.9693 53.5283C26.5787 53.3981 25.8748 53.2882 24.8575 53.1987L22.941 53.04C21.9075 52.9586 21.1181 52.8528 20.5728 52.7226C20.0276 52.5924 19.5515 52.4011 19.1446 52.1489C18.6238 51.8233 18.2169 51.3798 17.9239 50.8183C17.6309 50.2568 17.4845 49.6424 17.4845 48.975C17.4845 47.4776 18.1274 46.3342 19.4132 45.5449C20.585 44.8287 22.0336 44.4706 23.7589 44.4706C24.6947 44.4706 25.5655 44.5764 26.3712 44.788C27.185 44.9915 28.1534 45.3536 29.2764 45.8745C29.6101 46.0291 29.842 46.1064 29.9722 46.1064C30.1025 46.1064 30.2693 46.0169 30.4727 45.8378L30.7657 45.9965ZM42.4405 55.9575H49.3741C49.6345 55.9575 49.8298 55.9005 49.96 55.7866C50.0902 55.6645 50.2001 55.457 50.2896 55.164H50.6192V59.2167H50.2774C50.2042 58.9319 50.0984 58.7285 49.96 58.6064C49.8298 58.4925 49.6345 58.4355 49.3741 58.4355H37.1304V57.7031L45.1016 47.2416H38.4732C38.2128 47.2416 38.0175 47.2986 37.8873 47.4125C37.7571 47.5265 37.6472 47.734 37.5577 48.0351H37.2281V43.9824H37.5577C37.6391 44.2753 37.7449 44.4788 37.8751 44.5927C38.0134 44.7066 38.2128 44.7636 38.4732 44.7636H50.4971V45.3618L42.4405 55.9575ZM61.0611 46.0087V57.1904C61.0611 57.4426 61.1181 57.638 61.232 57.7763C61.3459 57.9065 61.5494 58.0164 61.8424 58.1059V58.4355H57.0084V58.0937C57.2932 58.0204 57.4926 57.9147 57.6065 57.7763C57.7286 57.638 57.7896 57.4426 57.7896 57.1904V46.0087C57.7896 45.7564 57.7327 45.5652 57.6187 45.435C57.5048 45.3048 57.3013 45.1949 57.0084 45.1054V44.7636H61.8424V45.1054C61.5494 45.1868 61.3459 45.2967 61.232 45.435C61.1181 45.5652 61.0611 45.7564 61.0611 46.0087ZM72.6871 52.8203V57.1904C72.6871 57.4426 72.7441 57.638 72.858 57.7763C72.9719 57.9065 73.1754 58.0164 73.4683 58.1059V58.4355H68.6344V58.0937C68.9192 58.0204 69.1186 57.9147 69.2325 57.7763C69.3546 57.638 69.4156 57.4426 69.4156 57.1904V46.0087C69.4156 45.7564 69.3586 45.5652 69.2447 45.435C69.1308 45.3048 68.9273 45.1949 68.6344 45.1054V44.7636H77.5455C79.3114 44.7636 80.642 45.0281 81.5372 45.5571C82.058 45.8663 82.4649 46.3058 82.7579 46.8754C83.0509 47.4451 83.1973 48.0839 83.1973 48.7919C83.1973 50.151 82.7335 51.1642 81.8057 51.8315C80.878 52.4907 79.4579 52.8203 77.5455 52.8203H72.6871ZM72.6871 50.3422H77.3502C78.2047 50.3422 78.7987 50.2608 79.1324 50.0981C79.6207 49.8621 79.8648 49.4267 79.8648 48.7919C79.8648 48.1572 79.6207 47.7218 79.1324 47.4858C78.8069 47.323 78.2128 47.2416 77.3502 47.2416H72.6871V50.3422Z"})})}function D(e){var t=e.className;return Object(S.jsx)("svg",{width:"100",height:"100",viewBox:"0 0 100 100",fill:"current-color",xmlns:"http://www.w3.org/2000/svg",children:Object(S.jsx)("path",{className:t,d:"M55.525 21.6667H72.6667C73.4181 21.6667 74.1388 21.9652 74.6701 22.4966C75.2015 23.0279 75.5 23.7486 75.5 24.5V75.5C75.5 76.2515 75.2015 76.9721 74.6701 77.5035C74.1388 78.0348 73.4181 78.3334 72.6667 78.3334H27.3333C26.5819 78.3334 25.8612 78.0348 25.3299 77.5035C24.7985 76.9721 24.5 76.2515 24.5 75.5V52.6917C25.4322 52.7852 26.3785 52.8334 27.3333 52.8334C42.9818 52.8334 55.6667 40.1485 55.6667 24.5C55.6667 23.5452 55.6185 22.5989 55.525 21.6667ZM58.5 61.3334V67H64.1667V61.3334H58.5ZM49.8243 21.6667C50.2567 25.0954 49.8993 28.5776 48.7795 31.847C47.6597 35.1164 45.8072 38.0865 43.3635 40.5302C40.9198 42.9739 37.9498 44.8264 34.6803 45.9462C31.4109 47.066 27.9287 47.4234 24.5 46.991V24.5C24.5 23.7486 24.7985 23.0279 25.3299 22.4966C25.8612 21.9652 26.5819 21.6667 27.3333 21.6667H49.8243V21.6667Z"})})}function G(e){var t=e.className;return Object(S.jsx)("svg",{width:"100",height:"100",viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(S.jsx)("path",{className:t,d:"M20.4166 42.4355V33.7334L24.6506 42.4568H26.1826L30.4166 33.8185V42.4355H34.2251V27.4781H29.5868L25.5017 35.861L21.4804 27.4781H16.6081V42.4355H20.4166ZM40.2183 34.9461C40.2183 37.1802 40.963 39.0312 42.4523 40.4993C43.963 41.9674 45.8779 42.7121 48.197 42.7121C50.5587 42.7121 52.4949 41.9674 54.0055 40.4993C55.5162 39.0312 56.2609 37.1802 56.2609 34.9461C56.2609 32.7121 55.5162 30.861 54.0055 29.3929C52.4949 27.9249 50.5587 27.1802 48.197 27.1802C45.8779 27.1802 43.963 27.9249 42.4523 29.3929C40.963 30.861 40.2183 32.7121 40.2183 34.9461ZM52.1332 34.9674C52.1332 36.1802 51.7715 37.1376 51.0481 37.8823C50.3247 38.627 49.3672 39.01 48.197 39.01C47.0268 39.01 46.0906 38.627 45.3885 37.8823C44.6864 37.1376 44.3247 36.1589 44.3247 34.9674C44.3247 33.7972 44.6864 32.8185 45.4098 32.0525C46.1332 31.2866 47.0694 30.9036 48.2183 30.9036C49.3885 30.9036 50.3247 31.2866 51.0481 32.0525C51.7715 32.8185 52.1332 33.7972 52.1332 34.9674ZM66.2017 42.4355V36.8823H71.6059V33.3504H66.2017V31.0738H72.1166V27.4781H62.2655V42.4355H66.2017ZM83.5478 42.4355V27.4781H77.8669L76.9733 31.0738H79.6116V42.4355H83.5478ZM27.4379 66.0525C27.2464 66.9674 26.8209 67.6908 26.1613 68.2227C25.5017 68.7546 24.6932 69.01 23.6932 69.01C22.5868 69.01 21.6932 68.627 21.0123 67.8823C20.3315 67.1376 19.9911 66.1802 19.9911 65.01C19.9911 63.8185 20.3315 62.8398 21.0336 62.0951C21.7357 61.3291 22.6294 60.9461 23.7145 60.9461C24.5868 60.9461 25.3528 61.1802 25.9911 61.6483C26.6294 62.1164 27.0762 62.7546 27.3528 63.5844H31.5868C31.2677 61.6908 30.3953 60.1589 28.9698 58.9887C27.5443 57.8185 25.7996 57.244 23.7357 57.244C21.4379 57.244 19.5443 57.9887 18.0762 59.4568C16.6081 60.9249 15.8634 62.7759 15.8634 65.01C15.8634 67.244 16.6081 69.0951 18.0762 70.5632C19.5443 72.0312 21.4379 72.7759 23.7357 72.7759C25.8421 72.7759 27.6294 72.1589 29.0762 70.9249C30.523 69.6908 31.374 68.0738 31.6294 66.0951L27.4379 66.0525ZM47.0052 72.4355V68.8398H41.4095V57.4781H37.4733V72.4355H47.0052ZM51.5399 67.244V70.2227H58.7314V72.4355H62.5825V70.2227H63.9867V66.7121H62.5825V63.4355L58.7314 64.3291V66.7121H56.1782L61.157 57.4781H56.625L51.5399 67.244ZM73.4934 72.4355V64.2227L78.4934 72.4355H82.2594V57.4781H78.5572V65.7546L73.5147 57.4781H69.7913V72.4355H73.4934Z"})})}function z(e){var t=e.className;return Object(S.jsxs)("svg",{width:"100",height:"100",viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(S.jsx)("path",{className:t,d:"M51.8804 18.1541L81.9586 25.6756C83.6839 26.1021 84.8935 27.6529 84.8935 29.4363V33.1932H88.7706C93.0353 33.1932 96.5247 36.6825 96.5247 40.9473V52.5785C96.5247 59.0028 91.3178 64.2096 84.8935 64.2096H83.2613C81.187 69.4437 77.2441 73.848 72.0333 76.4534L53.4661 85.7389C51.2833 86.8284 48.7167 86.8284 46.5339 85.7389L27.9628 76.4534C22.7598 73.848 18.8168 69.4437 16.7426 64.2096H15.1065C8.68223 64.2096 3.47534 59.0028 3.47534 52.5785V40.9473C3.47534 36.6632 6.94531 33.1932 11.2295 33.1932H15.1065V29.4325C15.1065 27.6568 16.3161 26.1059 18.0414 25.6717L48.1196 18.1541C49.3525 17.8439 50.6475 17.8439 51.8804 18.1541V18.1541ZM15.1065 40.9473H11.2295V52.5785C11.2295 54.7186 12.9664 56.4555 15.1065 56.4555V40.9473ZM88.7706 40.9473H84.8935V56.4555C87.0336 56.4555 88.7706 54.7186 88.7706 52.5785V40.9473Z"}),Object(S.jsx)("path",{d:"M19.0305 50.2099C19.0305 49.0906 19.2727 48.0951 19.757 47.2233C20.2413 46.3408 20.9139 45.6574 21.7749 45.1731C22.6467 44.678 23.6314 44.4305 24.7292 44.4305C26.0745 44.4305 27.2261 44.7857 28.1839 45.496C29.1417 46.2063 29.7821 47.1749 30.105 48.4018H27.07C26.844 47.9283 26.5211 47.5677 26.1014 47.3202C25.6924 47.0726 25.2243 46.9489 24.6969 46.9489C23.8467 46.9489 23.1579 47.2448 22.6305 47.8368C22.1032 48.4287 21.8395 49.2197 21.8395 50.2099C21.8395 51.2 22.1032 51.991 22.6305 52.583C23.1579 53.1749 23.8467 53.4709 24.6969 53.4709C25.2243 53.4709 25.6924 53.3471 26.1014 53.0996C26.5211 52.852 26.844 52.4915 27.07 52.0179H30.105C29.7821 53.2448 29.1417 54.2135 28.1839 54.9238C27.2261 55.6233 26.0745 55.9731 24.7292 55.9731C23.6314 55.9731 22.6467 55.7309 21.7749 55.2466C20.9139 54.7516 20.2413 54.0682 19.757 53.1964C19.2727 52.3247 19.0305 51.3292 19.0305 50.2099ZM37.8332 56.0215C36.9507 56.0215 36.1542 55.8332 35.4439 55.4565C34.7444 55.0798 34.1901 54.5417 33.7812 53.8422C33.3829 53.1426 33.1838 52.3247 33.1838 51.3883C33.1838 50.4628 33.3883 49.6502 33.7973 48.9507C34.2063 48.2404 34.7659 47.6969 35.4762 47.3202C36.1865 46.9435 36.9829 46.7552 37.8655 46.7552C38.748 46.7552 39.5444 46.9435 40.2547 47.3202C40.965 47.6969 41.5247 48.2404 41.9336 48.9507C42.3426 49.6502 42.5471 50.4628 42.5471 51.3883C42.5471 52.3139 42.3372 53.1318 41.9175 53.8422C41.5085 54.5417 40.9435 55.0798 40.2224 55.4565C39.5121 55.8332 38.7157 56.0215 37.8332 56.0215ZM37.8332 53.6323C38.3605 53.6323 38.8072 53.4386 39.1731 53.0511C39.5498 52.6637 39.7381 52.1094 39.7381 51.3883C39.7381 50.6673 39.5551 50.113 39.1892 49.7256C38.8341 49.3381 38.3928 49.1444 37.8655 49.1444C37.3273 49.1444 36.8807 49.3381 36.5255 49.7256C36.1704 50.1022 35.9928 50.6565 35.9928 51.3883C35.9928 52.1094 36.165 52.6637 36.5094 53.0511C36.8646 53.4386 37.3058 53.6323 37.8332 53.6323Z",fill:"black"}),Object(S.jsx)("path",{d:"M55.1183 44.6726V55.8924H53.278V50.9848H47.999V55.8924H46.1587V44.6726H47.999V49.4834H53.278V44.6726H55.1183ZM65.6936 51.2269C65.6936 51.5605 65.672 51.8619 65.629 52.1309H58.8326C58.8864 52.8413 59.1501 53.4117 59.6236 53.8422C60.0972 54.2726 60.6783 54.4879 61.3671 54.4879C62.3572 54.4879 63.0568 54.0735 63.4658 53.2448H65.4514C65.1824 54.0628 64.6927 54.7354 63.9824 55.2628C63.2828 55.7794 62.4111 56.0377 61.3671 56.0377C60.5169 56.0377 59.7528 55.8493 59.0747 55.4726C58.4075 55.0852 57.8801 54.5471 57.4927 53.8583C57.116 53.1587 56.9277 52.3516 56.9277 51.4368C56.9277 50.522 57.1106 49.7202 57.4765 49.0314C57.8532 48.3318 58.3752 47.7937 59.0424 47.417C59.7205 47.0404 60.4954 46.852 61.3671 46.852C62.2066 46.852 62.9546 47.035 63.6111 47.4009C64.2676 47.7668 64.7788 48.2834 65.1447 48.9507C65.5106 49.6072 65.6936 50.3659 65.6936 51.2269ZM63.7725 50.6457C63.7617 49.9677 63.5196 49.4242 63.046 49.0152C62.5725 48.6063 61.9859 48.4018 61.2864 48.4018C60.6514 48.4018 60.1079 48.6063 59.6559 49.0152C59.2039 49.4135 58.9348 49.957 58.8487 50.6457H63.7725ZM69.345 43.9462V55.8924H67.5047V43.9462H69.345ZM73.6016 48.3049C73.9137 47.896 74.3388 47.5516 74.8769 47.2718C75.4151 46.9919 76.0231 46.852 76.7012 46.852C77.4761 46.852 78.181 47.0457 78.816 47.4332C79.4617 47.8099 79.9675 48.3426 80.3335 49.0314C80.6994 49.7202 80.8823 50.5112 80.8823 51.4045C80.8823 52.2978 80.6994 53.0996 80.3335 53.8099C79.9675 54.5094 79.4617 55.0583 78.816 55.4565C78.181 55.8439 77.4761 56.0377 76.7012 56.0377C76.0231 56.0377 75.4204 55.9031 74.8931 55.6341C74.3657 55.3543 73.9352 55.0099 73.6016 54.6009V60.122H71.7613V46.9973H73.6016V48.3049ZM79.0097 51.4045C79.0097 50.791 78.8805 50.2637 78.6222 49.8224C78.3747 49.3704 78.0411 49.0314 77.6213 48.8054C77.2124 48.5686 76.7711 48.4502 76.2976 48.4502C75.8348 48.4502 75.3935 48.5686 74.9738 48.8054C74.5648 49.0422 74.2312 49.3865 73.9729 49.8386C73.7254 50.2906 73.6016 50.8233 73.6016 51.4368C73.6016 52.0502 73.7254 52.5883 73.9729 53.0511C74.2312 53.5031 74.5648 53.8475 74.9738 54.0843C75.3935 54.3211 75.8348 54.4395 76.2976 54.4395C76.7711 54.4395 77.2124 54.3211 77.6213 54.0843C78.0411 53.8368 78.3747 53.4816 78.6222 53.0188C78.8805 52.5561 79.0097 52.0179 79.0097 51.4045Z",fill:"black"})]})}function J(e){e.deviceType;var t=Object(n.useState)(!0),i=Object(o.a)(t,2),c=i[0],a=i[1],s=Object(n.useState)(0),r=Object(o.a)(s,2),l=r[0],d=r[1],j=Object(n.useState)([{title:"SHRP",info:"Skyhawk recovery project (SHRP) is a android custom recovery project which is based on latest TWRP.",logo:Object(S.jsx)(R,{className:"blue"}),show:!0,color:"blue",btns:[{name:"Visit",url:"https://skyhawkrecovery.github.io/"},{name:"Source Code",url:"https://github.com/SHRP"}]},{title:"Project Ncloud",info:"Scalable Network Attached Storage system for raspberry pi and for other linux distros",logo:Object(S.jsx)(D,{className:"red"}),show:!1,color:"red",btns:[{name:"Get started",url:"https://github.com/project-ncloud/get_started/blob/main/README.md"},{name:"Source code",url:"https://github.com/project-ncloud"}]},{title:"CoHelp",info:"A platform where anyone can book for doctors appointments, oxygen, vaccine, beds, and other emergency services.",logo:Object(S.jsx)(z,{className:"purple"}),show:!1,color:"purple",btns:[{name:"Source",url:"https://github.com/Co-Help"}]},{title:"MOF1 Krunker CSS",info:"Unique krunker CSS for official client & chrome.",logo:Object(S.jsx)(G,{className:"yellow"}),show:!1,color:"yellow",btns:[{name:"Guide",url:"https://github.com/MOF1/krunker_css"},{name:"Download",url:"https://github.com/MOF1/krunker_css/releases"}]},{title:"Szip",info:"An event based 7zip wrapper for nodejs. Most of the functions in this package are event based. Non event functions are also available.",logo:Object(S.jsx)(W,{className:"green"}),show:!1,color:"green",btns:[{name:"Install from NPM",url:"https://www.npmjs.com/package/szip"},{name:"Source",url:"https://github.com/epicX67/szip"}]}]),h=Object(o.a)(j,2),b=h[0],m=h[1],u=0,p=function(){var e=Object(P.a)(F.a.mark((function e(t,i){var n;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=b.map((function(e){return e.show=e.title===t,e})),a(i<l),e.next=4,T(100);case 4:m(n),d(i);case 6:case"end":return e.stop()}}),e)})));return function(t,i){return e.apply(this,arguments)}}(),x=function(){var e=Object(P.a)(F.a.mark((function e(){var t,i;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(i=l+1)>=(t=b).length&&(i=0),t[l].show=!1,t[i].show=!0,a(!1),e.next=8,T(100);case 8:m(t),d(i);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(P.a)(F.a.mark((function e(){var t,i;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=b,(i=l-1)<0&&(i=t.length-1),t[l].show=!1,t[i].show=!0,a(!0),e.next=8,T(100);case 8:m(t),d(i);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("div",{className:"numberSelectors",children:b.map((function(e){return Object(S.jsx)(I,{onClick:function(){return p(e.title,b.indexOf(e))},number:++u,active:e.show},e.title+u)}))}),Object(S.jsxs)("div",{className:"mContainer-project",children:[Object(S.jsx)("i",{onClick:function(){return C()},className:"ri-arrow-left-s-line m-btn prev"},"prevBtn"),Object(S.jsx)(A.a,{children:Object(S.jsxs)(M.a.div,{className:"project-card ".concat(b[l].color,"-bg"),initial:{x:c?"-50%":"50%",opacity:0,position:"absolute"},animate:{x:0,opacity:1,position:"absolute"},exit:{x:c?"50%":"-50%",opacity:0,position:"absolute"},children:[Object(S.jsxs)("div",{className:"sContainer-pCard",children:[Object(S.jsx)("div",{className:"project-box ".concat(b[l].color,"-bg"),children:Object(S.jsx)("div",{className:"logo-box ".concat(b[l].color,"-border"),children:b[l].logo})}),Object(S.jsx)("div",{className:"btn-container",children:b[l].btns.map((function(e){return Object(S.jsx)("a",{className:"".concat(b[l].color,"-a"),href:e.url,target:"blank",children:e.name},e.url)}))})]}),Object(S.jsxs)("div",{className:"mContainer-pCard",children:[Object(S.jsx)("h1",{children:b[l].title}),Object(S.jsx)("p",{children:b[l].info})]})]},b[l].title)}),Object(S.jsx)("i",{onClick:function(){return x()},className:"ri-arrow-right-s-line m-btn next"},"nextBtn")]})]})}var U=i(13),X=(i(44),i(9));function q(e){var t=e.deviceType;return Object(S.jsx)(X.Link,{className:"swipeDown ".concat("mobile"===t?"swipe-down-mobile":""),delay:0,to:"section2",offset:"mobile"!==t?-200:0,smooth:!0,duration:200,children:Object(S.jsx)(M.a.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:Object(S.jsx)("button",{children:Object(S.jsx)(M.a.div,{initial:{y:0,opacity:1},animate:{y:[25,25,0],opacity:[1,1,0]},transition:{duration:1,yoyo:1/0}})})})})}function Y(e){var t=e.show,i=e.onClick;return t?Object(S.jsxs)("svg",{width:"100",height:"100",viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"hamburger",onClick:i,children:[Object(S.jsx)("rect",{x:"26.5078",y:"34",width:"55.2",height:"8",rx:"4",transform:"rotate(26 26.5078 34)"}),Object(S.jsx)("path",{d:"M36.6889 61.626C35.1823 60.0103 35.2707 57.4792 36.8864 55.9726L56.7792 37.4222C58.3948 35.9156 60.926 36.004 62.4326 37.6196V37.6196C63.9392 39.2353 63.8508 41.7664 62.2352 43.273L42.3423 61.8234C40.7267 63.33 38.1956 63.2416 36.6889 61.626V61.626Z"})]}):Object(S.jsxs)("svg",{width:"100",height:"100",viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"hamburger",onClick:i,children:[Object(S.jsx)("rect",{x:"22",y:"36",width:"55.2",height:"8",rx:"4"}),Object(S.jsx)("path",{d:"M42 59.5C42 57.2909 43.7909 55.5 46 55.5H73.2C75.4091 55.5 77.2 57.2909 77.2 59.5V59.5C77.2 61.7091 75.4091 63.5 73.2 63.5H46C43.7909 63.5 42 61.7091 42 59.5V59.5Z"})]})}function K(){return Object(S.jsxs)("svg",{width:"300",height:"300",viewBox:"0 0 300 300",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(S.jsx)("path",{d:"M0 300V0L150 150L300 0V300L225 225L150 300L75 225L0 300Z",fill:"url(#paint0_angular)"}),Object(S.jsx)("defs",{children:Object(S.jsxs)("radialGradient",{id:"paint0_angular",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(150 150) rotate(10) scale(150)",children:[Object(S.jsx)("stop",{offset:"0.119792",stopColor:"#5E81FF"}),Object(S.jsx)("stop",{offset:"1",stopColor:"#65DBB4"})]})})]})}function Q(e){var t=e.coverUrl,i=e.url,n=e.name;return Object(S.jsxs)("div",{className:"mContainer",children:[Object(S.jsx)("img",{className:"cover",src:t,alt:"cover"}),Object(S.jsxs)("div",{className:"sContainer",children:[Object(S.jsx)("h1",{children:n}),Object(S.jsx)("a",{target:"_blank",rel:"noreferrer",href:i,className:"urlbtn",children:Object(S.jsx)("i",{className:"ri-arrow-right-s-line"})})]})]})}function $(e){var t=e.cover,i=e.name,n=e.type,c=e.objIco,a=e.infoPos,s=e.icoPos,o=e.rawsvg,r=void 0!==o&&o;return Object(S.jsxs)("div",{className:"mContainer",children:[Object(S.jsx)("img",{className:"cover",src:t,alt:"cover"}),r?Object(S.jsx)("img",{src:c,className:"".concat(s," objSvg"),alt:i}):Object(S.jsx)("i",{className:"".concat(c," ").concat(s," objIcon")}),Object(S.jsxs)("div",{className:"".concat(a," iContainer"),children:[Object(S.jsx)("p",{className:"objName",children:i}),Object(S.jsx)("p",{className:"objType",children:n})]})]})}var ee=[{name:"MOF1 clan page",cover:V,url:"https://MOF1.github.io"},{name:"Food product site",cover:w,url:"https://ac-food-delight.github.io"},{name:"Far Cry 2 page",cover:H,url:"https://farcry2.github.io/"},{name:"Markdown blog",cover:N,url:"https://epicXHub.github.io"},{name:"Chemical site",cover:k,url:"https://xperiement.github.io/nbchem/"},{name:"AGNi kernel site",cover:L,url:"https://xperiement.github.io/agni/#home"}],te=[{name:"Python",type:"Language",cover:l,icon:f,svg_icon:!0,icon_position:"top right",info_position:"bottom left"},{name:"Javascript",type:"Language",cover:d,icon:C,svg_icon:!0,icon_position:"top left",info_position:"bottom right"},{name:"Scss",type:"Language",cover:j,icon:g,svg_icon:!0,icon_position:"bottom left",info_position:"top right"},{name:"Java",type:"Language",cover:h,icon:x,svg_icon:!0,icon_position:"bottom right",info_position:"top left"},{name:"Node",type:"Javascript Runtime",cover:b,icon:v,svg_icon:!0,icon_position:"top right",info_position:"bottom left"},{name:"React",type:"Framework",cover:m,icon:"ri-reactjs-fill",icon_position:"top left",info_position:"bottom right"},{name:"Motion",type:"React Animation Library",cover:p,icon:y,svg_icon:!0,icon_position:"bottom right",info_position:"top left"},{name:"MongoDB",type:"Database",cover:u,icon:O,svg_icon:!0,icon_position:"top left",info_position:"bottom right"}];var ie=function(){var e=Object(n.useState)("desktop"),t=Object(o.a)(e,2),i=t[0],c=t[1],a=Object(n.useState)(!1),s=Object(o.a)(a,2),l=s[0],d=s[1],j=Object(n.useState)(window.innerWidth),h=Object(o.a)(j,2),b=h[0],m=h[1],u=Object(n.useState)(!1),p=Object(o.a)(u,2),x=p[0],C=p[1],v=Object(n.useState)(!1),O=Object(o.a)(v,2),g=O[0],f=O[1],y=Object(n.useState)(!1),w=Object(o.a)(y,2),N=w[0],k=w[1],H=Object(n.useState)(!1),V=Object(o.a)(H,2),L=V[0],E=V[1],F=Object(n.useState)(!1),P=Object(o.a)(F,2),T=P[0],I=P[1],R=function(){d(!1)},W=function(e){if(e>=768)return c("desktop"),void m(window.innerWidth);c("mobile"),m(window.innerWidth)};Object(n.useEffect)((function(){W(window.innerWidth),m(window.innerWidth)}),[]);var D={hidden:{opacity:0},show:{opacity:1,transition:{duration:1,type:"tween",staggerChildren:.2}}},G={hidden:{y:-100,opacity:0},show:{y:0,opacity:1,transition:{duration:1}}},z=D,ie=G,ne=D,ce=G,ae={hidden:{y:-100,opacity:0},show:{y:0,opacity:1,transition:{duration:1,type:"tween",ease:"easeOut"}}};Object(n.useEffect)((function(){return window.addEventListener("resize",(function(){W(window.innerWidth)})),function(){window.removeEventListener("resize",(function(){W(window.innerWidth)}))}}));var se=Object(n.useState)(!0),oe=Object(o.a)(se,2),re=oe[0],le=oe[1];return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(_,{width:b}),Object(S.jsx)(A.a,{children:Object(S.jsx)(M.a.nav,{initial:"hidden",animate:"show",variants:{hidden:{y:-10,opacity:0},show:{y:0,opacity:1,transition:{delay:1.6,duration:1,type:"tween",staggerChildren:.5}}},exit:"hidden",className:"".concat("mobile"===i?"mobile-nav":""),children:"mobile"!==i?Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(M.a.div,{variants:ae,children:Object(S.jsx)(X.Link,{to:"section2",smooth:!0,offset:-200,spy:!0,duration:400,delay:0,children:Object(S.jsx)("button",{children:"About"})})}),Object(S.jsx)(M.a.div,{variants:ae,children:Object(S.jsx)(X.Link,{to:"section3",smooth:!0,spy:!0,duration:400,delay:0,children:Object(S.jsx)("button",{children:"Workz"})})}),Object(S.jsx)(M.a.div,{variants:ae,children:Object(S.jsx)(X.Link,{to:"section4",smooth:!0,offset:-50,spy:!0,duration:400,delay:0,children:Object(S.jsx)("button",{children:"Social"})})}),Object(S.jsx)(M.a.div,{variants:ae,children:Object(S.jsx)(X.Link,{to:"section5",smooth:!0,spy:!0,duration:400,delay:0,children:Object(S.jsx)("button",{children:"Contact"})})})]}):Object(S.jsx)(Y,{onClick:function(){d(!l)},show:l})})}),Object(S.jsx)(A.a,{children:l&&"mobile"===i?Object(S.jsxs)(M.a.div,{className:"mobile-nav-container",initial:{y:"-100%"},animate:{y:"0%"},exit:{y:"-100%"},transition:{type:"tween",ease:[.87,.07,.37,.97],duration:.5},children:[Object(S.jsx)(X.Link,{to:"section2",smooth:!0,offset:0,spy:!0,duration:400,delay:0,onClick:function(){return R()},children:Object(S.jsx)("button",{children:"About"})}),Object(S.jsx)(X.Link,{to:"section3",smooth:!0,spy:!0,duration:400,delay:0,offset:10,onClick:function(){return R()},children:Object(S.jsx)("button",{children:"Workz"})}),Object(S.jsx)(X.Link,{to:"section4",smooth:!0,offset:-50,spy:!0,duration:400,delay:0,onClick:function(){return R()},children:Object(S.jsx)("button",{children:"Social"})}),Object(S.jsx)(X.Link,{to:"section5",smooth:!0,spy:!0,duration:400,delay:0,offset:-50,onClick:function(){return R()},children:Object(S.jsx)("button",{children:"Contact"})})]}):null}),Object(S.jsx)(U.a,{as:"div",onChange:function(e,t){return le(e)},delay:100,threshold:1,children:Object(S.jsxs)("section",{id:"section1",className:"mobile"!==i?"home-section":"home-section-mobile",children:[Object(S.jsx)("div",{className:"bg"}),Object(S.jsx)("div",{className:"bg2"}),Object(S.jsx)("img",{className:"logo",src:r,alt:"Logo"}),Object(S.jsxs)("p",{className:"logo-down",children:[Object(S.jsx)("span",{className:"separator",children:"This is my"})," ",Object(S.jsx)("span",{className:"separator",children:"."})," Portfolio"]}),Object(S.jsx)(A.a,{children:re?Object(S.jsx)(q,{deviceType:i}):null})]})}),Object(S.jsx)(U.a,{as:"div",onChange:function(e,t){e&&C(!0)},threshold:.1,triggerOnce:!0,children:Object(S.jsxs)("section",{id:"section2",className:"about-section",children:[Object(S.jsxs)("div",{className:"".concat("mobile"===i?"about-container-mobile":"about-container"),children:[Object(S.jsx)("div",{className:"sidebar-container",children:Object(S.jsx)(M.a.div,{initial:{y:-50,rotate:-5,opacity:0},animate:x?{y:0,rotate:-5,opacity:1}:{},transition:{duration:.5,type:"tween"},className:"img-wrapper"})}),Object(S.jsx)("div",{className:"main-container",children:Object(S.jsxs)("div",{children:[Object(S.jsx)(M.a.h1,{initial:{y:-10,opacity:0},animate:x?{y:0,opacity:1}:{},transition:{duration:.5,delay:.1,type:"tween"},children:"About Me"}),Object(S.jsxs)(M.a.p,{initial:{y:-10,opacity:0},animate:x?{y:0,opacity:1}:{},transition:{duration:.5,delay:.2,type:"tween"},children:["Hi! I am Sourav Gain from Kolkata. ",Object(S.jsx)("br",{}),"I love to explore new technologies. ",Object(S.jsx)("br",{}),"Recently I completed graduation on BCA (Computer Application) from ",Object(S.jsx)("br",{}),Object(S.jsx)("span",{children:"EMINENT COLLEGE OF MANAGEMENT AND TECHNOLOGY."})]}),Object(S.jsxs)(M.a.button,{initial:{x:-10,opacity:0},animate:x?{x:0,opacity:1}:{},transition:{duration:.5,delay:.5,type:"tween"},className:"cv-btn",children:[Object(S.jsx)("i",{className:"ri-file-list-2-line"}),"Get CV"]})]})})]}),Object(S.jsx)("div",{className:"bg3"}),Object(S.jsx)("div",{className:"bg4"})]})}),Object(S.jsx)(U.a,{as:"div",onChange:function(e,t){e&&f(!0)},threshold:.1,triggerOnce:!0,children:Object(S.jsxs)("section",{id:"section420",className:"skills_section",children:[Object(S.jsx)("div",{className:"mobile"!==i?"head-container":"head-container-mobile",children:Object(S.jsxs)("div",{className:"section-head",children:[Object(S.jsx)("h1",{children:"Skills"}),Object(S.jsx)("p",{children:"I have some programming skills which is mentioned below"})]})}),Object(S.jsx)("div",{className:"container",children:Object(S.jsx)(M.a.div,{className:"grid",variants:ne,initial:"hidden",animate:g?"show":"hidden",children:te.map((function(e){return Object(S.jsx)(M.a.div,{variants:ce,children:Object(S.jsx)($,{cover:e.cover,icoPos:e.icon_position,infoPos:e.info_position,objIco:e.icon,name:e.name,type:e.type,rawsvg:e.svg_icon},e.name)})}))})})]})}),Object(S.jsx)(U.a,{as:"div",onChange:function(e,t){e&&k(!0)},threshold:.5,triggerOnce:!0,children:Object(S.jsxs)(M.a.section,{initial:{y:-10,opacity:0},animate:N?{y:0,opacity:1}:{},transition:{duration:.3,type:"tween"},id:"section3",className:"work-section",children:[Object(S.jsx)("div",{className:"mobile"!==i?"head-container":"head-container-mobile",children:Object(S.jsxs)("div",{className:"section-head",children:[Object(S.jsx)("h1",{children:"Projects"}),Object(S.jsx)("p",{children:"Here are some of my projects which I done recently"})]})}),Object(S.jsx)("div",{className:"mobile"!==i?"projectContainer":"projectContainer-mobile",children:Object(S.jsx)(J,{deviceType:i})})]})}),Object(S.jsx)(U.a,{as:"div",onChange:function(e,t){e&&E(!0)},threshold:.1,triggerOnce:!0,children:Object(S.jsxs)("section",{id:"section69",className:"websites_section",children:[Object(S.jsx)("div",{className:"mobile"!==i?"head-container":"head-container-mobile",children:Object(S.jsxs)("div",{className:"section-head",children:[Object(S.jsx)("h1",{children:"Designs"}),Object(S.jsx)("p",{children:"These are all the websites created by me"})]})}),Object(S.jsx)("div",{className:"container",children:Object(S.jsx)(M.a.div,{className:"grid",variants:z,initial:"hidden",animate:L?"show":"hidden",children:ee.map((function(e){return Object(S.jsx)(M.a.div,{variants:ie,children:Object(S.jsx)(Q,{coverUrl:e.cover,name:e.name,url:e.url},e.url)})}))})})]})}),Object(S.jsx)(U.a,{as:"div",onChange:function(e,t){e&&I(!0)},threshold:.1,triggerOnce:!0,children:Object(S.jsxs)("section",{id:"section4",className:"social_section",children:[Object(S.jsx)("div",{className:"mobile"!==i?"head-container":"head-container-mobile",children:Object(S.jsxs)("div",{className:"section-head",children:[Object(S.jsx)("h1",{children:"Social"}),Object(S.jsx)("p",{children:"Connect with me though social media"})]})}),Object(S.jsx)("div",{className:"container",children:Object(S.jsxs)(M.a.div,{className:"grid",variants:D,initial:"hidden",animate:T?"show":"hidden",children:[Object(S.jsx)(M.a.div,{variants:G,children:Object(S.jsx)(Z,{logo:"ri-telegram-line",heading:"Send Message",subtext:"Send message into my telegram account. Kek Bye",url:"https://t.me/epicX67"})}),Object(S.jsx)(M.a.div,{variants:G,children:Object(S.jsx)(Z,{logo:"ri-youtube-line",heading:"My Videos",subtext:"Check out my YT channel where I upload tutorial videos and gaming.",url:"https://www.youtube.com/c/epicX"})}),Object(S.jsx)(M.a.div,{variants:G,children:Object(S.jsx)(Z,{logo:"ri-github-line",heading:"Follow Me",subtext:"Follow me on github so that you can get my recent activity.",url:"https://github.com/epicX67"})}),Object(S.jsx)(M.a.div,{variants:G,children:Object(S.jsx)(Z,{logo:"ri-paypal-line",heading:"Support Plox",subtext:"If you like my work. Feel free to donate me. That will help a lot :)",url:"https://paypal.me/epicX67"})})]})})]})}),Object(S.jsx)("section",{id:"section5",className:"mobile"!==i?"contact-section":"contact-section-mobile",children:Object(S.jsx)("div",{className:"contactContainer",children:Object(S.jsx)(B,{deviceType:i})})}),Object(S.jsxs)("footer",{children:[Object(S.jsx)("p",{children:"Powered by"}),Object(S.jsx)("a",{href:"https://www.framer.com/motion/",target:"blank",children:Object(S.jsx)(K,{})}),Object(S.jsx)("a",{href:"https://remixicon.com/",target:"blank",children:Object(S.jsx)("i",{className:"ri-remixicon-fill remix"})}),Object(S.jsx)("a",{href:"https://reactjs.org/",target:"blank",children:Object(S.jsx)("i",{className:"ri-reactjs-line react"})})]})]})};i(55);s.a.render(Object(S.jsx)(c.a.StrictMode,{children:Object(S.jsx)(ie,{})}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.6d14ff1e.chunk.js.map