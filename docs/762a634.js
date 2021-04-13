(window.webpackJsonp=window.webpackJsonp||[]).push([[14,8,10],{296:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const r={name:"SanityImage",functional:!0,props:{assetId:{type:String,required:!0},projectId:{type:String,default:null},dataset:{type:String,default:null},auto:{type:String},bg:{type:String},blur:{type:[Number,String],validator:t=>Number(t)>=0&&Number(t)<=100},crop:{type:String,validator:t=>["top","bottom","left","right","center","focalpoint","entropy"].includes(t)},dl:{type:String},dpr:{type:[Number,String],validator:t=>[1,2,3].includes(Number(t))},fit:{type:String,validator:t=>["clip","crop","fill","fillmax","max","scale","min"].includes(t)},flip:{type:String,validator:t=>["h","v","hv"].includes(t)},fm:{type:String,validator:t=>["jpg","pjpg","png","webp"].includes(t)},fpX:{type:[Number,String],validator:t=>Number(t)<=1&&Number(t)>=0},fpY:{type:[Number,String],validator:t=>Number(t)<=1&&Number(t)>=0},h:{type:[Number,String]},invert:{type:Boolean},maxH:{type:[Number,String]},maxW:{type:[Number,String]},minH:{type:[Number,String]},minW:{type:[Number,String]},or:{type:[Number,String],validator:t=>[0,90,180,270].includes(Number(t))},q:{type:[Number,String],validator:t=>Number(t)>=0&&Number(t)<=100},rect:{type:String},sat:{type:[Number,String]},sharpen:{type:[Number,String],validator:t=>Number(t)>=0&&Number(t)<=100},w:{type:[Number,String]}},render(t,{props:e,data:data,parent:n,scopedSlots:r}){const o=["auto","bg","blur","crop","dl","dpr","fit","flip","fm","fpX","fpY","h","invert","maxH","maxW","minH","minW","or","q","rect","sat","sharpen","w"].map((t=>{const n=t.replace(/[A-Z]/,(t=>"-"+t.toLowerCase()));return e[t]?`${n}=${e[t]}`:void 0})).filter(Boolean).join("&"),c=e.assetId.split("-").slice(1),l=c.pop(),d=`https://cdn.sanity.io/images/${e.projectId||n&&n.$sanity.config.projectId}/${e.dataset||n.$sanity&&n.$sanity.config.dataset||"production"}/${c.join("-")}.${l}${o?"?"+o:""}`,m=()=>t("img",{...data,attrs:{...data.attrs,src:d}});return r.default&&r.default({src:d})||m()}};e.SanityImage=r,e.default=r},297:function(t,e,n){"use strict";function r(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}n.d(e,"a",(function(){return r}))},298:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return r}));n(79);encodeURIComponent;const r=String.raw||((t,...e)=>{const n=t.length-1;return t.slice(0,n).reduce(((t,n,r)=>t+n+e[r]),"")+t[n]});const o=function(t){};o.meta={name:"@nuxtjs/sanity"}}).call(this,"/")},299:function(t,e,n){"use strict";n.r(e);var r={props:{post:{type:Object,require:!0,default:function(){return{title:"",body:[],slug:{current:""}}}}}},o=n(14),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"post"},[t.post.imageId?n("div",{staticClass:"image"},[n("SanityImage",{attrs:{"asset-id":t.post.imageId,auto:"format"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.src;return[n("img",{staticClass:"img-responsive",attrs:{src:r,alt:t.post.title}})]}}],null,!1,520370191)})],1):t._e(),t._v(" "),n("h1",[t._v(t._s(t.post.title))]),t._v(" "),n("div",{staticClass:"meta clearfix"},[n("ul",[t._m(0),t._v(" "),t._m(1),t._v(" "),n("li",[t._v("ngày "+t._s((new Date).toLocaleDateString()))]),t._v(" "),t._m(2),t._v(" "),n("li",[t._v("Quan tâm 299")])]),t._v(" "),n("div",{staticClass:"share-this"},[n("i",{staticClass:"fa fa-share-alt"}),t._v(" "),n("a",{attrs:{href:"https://www.facebook.com/sharer/sharer.php?kid_directed_site=0&sdk=joey&u=https%3A%2F%baovediamondstar.ga%2F"+t.post.slug.current+"%2F&display=popup&ref=plugin&src=share_button"}},[t._v("Chia sẻ việc làm")])])]),t._v(" "),n("div",{staticClass:"description"},[t.post.body.length?n("block-content",{key:t.post.body[0]._id,attrs:{blocks:t.post.body[0]}}):t._e()],1),t._v(" "),n("div",{staticClass:"button"},[n("NuxtLink",{attrs:{to:"/tuyen-dung/"+t.post.slug.current+"/"}},[t._v("Đọc tiếp... ")])],1)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[t._v("tìm việc "),n("a",{attrs:{href:""}},[t._v("Tuyển bảo vệ Đệ Nhất")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[t._v("việc làm "),n("a",{attrs:{href:""}},[t._v(" Bảo Vệ Hà Nội")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{attrs:{href:""}},[t._v("17 Hồ sơ")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{SanityImage:n(296).default})},310:function(t,e,n){"use strict";n.r(e);var r,o=n(297),c=n(6),l=(n(39),n(298)),d={components:{Post:n(299).default},asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var n,c,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$sanity,c=Object(l.a)(r||(r=Object(o.a)(["*[_type == \"post\" && author._ref == 'c00be5e3-349c-4391-a8b4-f716fa97442a']{_id, title, body, slug, 'imageId': mainImage.asset->_id}"]))),e.next=4,n.fetch(c);case 4:return d=e.sent,e.abrupt("return",{posts:d});case 6:case"end":return e.stop()}}),e)})))()},head:function(){return{title:"Nộp hồ sơ xin làm nhân viên bảo vệ -Công ty bảo vệ tại Vĩnh Phúc",meta:[{hid:"description",name:"description",content:"Công Ty Tnhh Dịch Vụ Bảo Vệ An Ninh Phía Bắc, Lạc Long Quân, Hùng Vương, Phúc Yên, Vĩnh Phúc nhận hồ sơ xin làm bảo vệ, kcn khai quang tuyển dụng bảo vệ..."}]}}},m=n(14),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"blog-standard"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-10 col-lg-offset-1"},t._l(t.posts,(function(t){return n("Post",{key:t._id,attrs:{post:t}})})),1)])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Post:n(299).default})}}]);