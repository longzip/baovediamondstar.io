(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{297:function(t,e,n){"use strict";function r(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}n.d(e,"a",(function(){return r}))},298:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return r}));n(79);encodeURIComponent;const r=String.raw||((t,...e)=>{const n=t.length-1;return t.slice(0,n).reduce(((t,n,r)=>t+n+e[r]),"")+t[n]});const o=function(t){};o.meta={name:"@nuxtjs/sanity"}}).call(this,"/")},311:function(t,e,n){"use strict";n.r(e);var r,o=n(297),c=n(6),l=(n(122),n(40),n(39),n(298)),d={asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var n,c,d,h;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.params,c=t.$sanity,d=Object(l.a)(r||(r=Object(o.a)(['*[_type == "post" && slug.current == "','"][0]{_id, title, body, slug, \'imageId\': mainImage.asset->_id, "imageUrl": mainImage.asset->url}'])),n.slug),e.next=4,c.fetch(d);case 4:return h=e.sent,e.abrupt("return",{post:h});case 6:case"end":return e.stop()}}),e)})))()},head:function(){return{title:this.post.title,meta:[{hid:"description",name:"description",content:this.post.body[0].children[0].text}],__dangerouslyDisableSanitizers:["script"],script:[{type:"application/ld+json",json:{"@context":"https://schema.org/","@type":"JobPosting",title:this.post.body[1].children[0].text,description:"<p>"+this.post.body.map((function(t){return t.children.map((function(t){return t.text})).join("<br> ")})).join("<br> ")+"</p>",identifier:{"@type":"PropertyValue",name:"Hồ Thị Thắm",value:"84978333963"},datePosted:(new Date).toISOString(),validThrough:new Date(Date.now()+25056e5).toISOString(),employmentType:"CONTRACTOR",hiringOrganization:{"@type":"Organization",name:"Công Ty TNHH Dịch Vụ Bảo Vệ An Ninh Phía Bắc",sameAs:"https://baovediamondstar.ga",logo:"https://baovediamondstar.ga/images/logo.png"},jobLocation:{"@type":"Place",address:{"@type":"PostalAddress",streetAddress:"38, Tổ 13, Phường Trưng Trắc, Thị Xã Phúc Yên, Phường Trưng Trắc, Phúc Yên, Vĩnh Phúc",addressLocality:"Vĩnh Phúc",addressRegion:"Vĩnh Phúc",postalCode:"15000",addressCountry:"VN"}},baseSalary:{"@type":"MonetaryAmount",currency:"VND",value:{"@type":"QuantitativeValue",minValue:14e3,maxValue:16e3,unitText:"HOUR"}}}}]}}},h=n(14),component=Object(h.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.post?n("article",{staticClass:"blog-detail"},[n("SocialHead",{attrs:{title:t.post.title,description:t.post.body[0].children[0].text,image:t.post.imageUrl}}),t._v(" "),n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-9 col-md-9 col-sm-8"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-12"},[n("div",{staticClass:"post"},[n("div",{staticClass:"image"},[n("img",{staticClass:"img-responsive",attrs:{src:t.post.imageUrl,alt:t.post.body[0].children[0].text}})]),t._v(" "),n("h1",{domProps:{textContent:t._s(t.post.title)}}),t._v(" "),n("div",{staticClass:"clearfix"},[n("div",{staticClass:"meta"},[n("ul",[n("li",[n("a",{staticClass:"btn btn-default",attrs:{href:"https://baovediamondstar.ga"+t.$route.fullPath+"/#ung_tuyen"}},[t._v("Ứng tuyển ngay")])]),t._v(" "),t._m(0),t._v(" "),t._m(1)])]),t._v(" "),n("div",{staticClass:"like-comment-share"},[n("ul",[t._m(2),t._v(" "),t._m(3),t._v(" "),n("li",[n("div",{staticClass:"fb-share-button",attrs:{"data-href":"https://baovediamondstar.ga"+t.$route.fullPath+"/","data-layout":"button_count","data-size":"small"}},[n("a",{staticClass:"fb-xfbml-parse-ignore",attrs:{target:"_blank",href:"https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fbaovediamondstar.ga"+encodeURI(t.$route.fullPath+"/")+"&src=sdkpreparse"}},[t._v("Chia sẻ")])])])])])]),t._v(" "),n("div",{staticClass:"description"},[t._l(t.post.body,(function(t){return n("block-content",{key:t._id,attrs:{blocks:t}})})),t._v(" "),n("div",[n("p",[t._v("\n                    Bằng cách chia sẻ tin tuyển dụng:\n                    "),n("em",[t._v(t._s(t.post.title))]),t._v(" bạn đã giúp mình lưu lại cơ hội\n                    việc làm này và giúp người thân, bạn bè của bạn, chúng tôi\n                    được kết nối thêm cơ hội việc làm mới. Chúng tôi rất vui\n                    được kết nối đến bạn khi bạn chia sẻ ngay.\n                  ")])]),t._v(" "),n("div",{staticClass:"fb-like",attrs:{"data-href":"https://baovediamondstar.ga"+t.$route.fullPath+"/","data-width":"","data-layout":"button","data-action":"like","data-size":"small","data-share":"true"}}),t._v(" "),n("br"),t._v(" "),n("div",{staticClass:"fb-save",attrs:{"data-uri":"https://baovediamondstar.ga"+t.$route.fullPath+"/","data-size":"large"}})],2)]),t._v(" "),n("div",{staticClass:"leave-a-reply",attrs:{id:"ung_tuyen"}},[n("h3",[t._v("Ứng tuyển: "+t._s(t.post.title))]),t._v(" "),t._m(4)])])]),t._v(" "),n("script",{attrs:{async:"",defer:"",crossorigin:"anonymous",src:"https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v10.0&appId=242726457596775&autoLogAppEvents=1",nonce:"D6wC9xAj"}}),t._v(" "),n("div",{staticClass:"fb-customerchat",attrs:{attribution:"setup_tool",page_id:"110994124405341"}}),t._v(" "),n("div",{staticClass:"fb-comments",attrs:{"data-href":"https://baovediamondstar.ga"+t.$route.fullPath+"/","data-width":"","data-numposts":"5"}})]),t._v(" "),n("div",{staticClass:"col-lg-3 col-md-3 col-sm-4 sidebar"})])])],1):t._e()}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[t._v("tìm việc "),n("a",{attrs:{href:"#"}},[t._v("Bảo vệ An Thịnh Phát")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[t._v("việc làm "),n("a",{attrs:{href:"#"}},[t._v("Bảo vệ Vĩnh Phúc")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"like"},[n("a",{staticClass:"like",attrs:{href:"#"}},[n("i",{staticClass:"fa fa-heart"}),t._v("292")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{attrs:{href:"#"}},[n("i",{staticClass:"fa fa-comment"}),t._v(" 21")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-4 col-md-4 col-sm-4"},[n("div",{staticClass:"form-group"},[n("input",{staticClass:"form-control",attrs:{id:"CommentName",type:"text",placeholder:"Họ và tên"}})])]),t._v(" "),n("div",{staticClass:"col-lg-4 col-md-4 col-sm-4"},[n("div",{staticClass:"form-group"},[n("input",{staticClass:"form-control",attrs:{id:"CommentEmail",type:"email",placeholder:"Địa chỉ email"}})])]),t._v(" "),n("div",{staticClass:"col-lg-4 col-md-4 col-sm-4"},[n("div",{staticClass:"form-group"},[n("input",{staticClass:"form-control",attrs:{id:"CommentWebsite",type:"text",placeholder:"Số điện thoại"}})])]),t._v(" "),n("div",{staticClass:"col-lg-12"},[n("div",{staticClass:"form-group"},[n("textarea",{staticClass:"form-control",attrs:{rows:"10",placeholder:"Viết giới thiệu ngắn gọn về bản thân (điểm mạnh, điểm yếu) và nêu rõ mong muốn, lý do làm việc tại công ty này. Đây là cách gây ấn tượng với nhà tuyển dụng nếu bạn có chưa có kinh nghiệm làm việc (hoặc CV không tốt)."}})])]),t._v(" "),n("div",{staticClass:"col-lg-12"},[n("button",{staticClass:"btn btn-default",attrs:{type:"submit",disabled:""}},[t._v("\n                    Nộp hồ sơ\n                  ")]),t._v(" "),n("br"),t._v(" "),n("span",[t._v("Chức năng đang cập nhật... Mời bạn qua văn phòng công ty\n                    để nộp hồ sơ trực tiếp")])])])}],!1,null,null,null);e.default=component.exports}}]);