webpackJsonp([1],{"8Cjs":function(t,o){},HTCT:function(t,o){},NHnr:function(t,o,a){"use strict";function s(t){a("8Cjs")}function e(t){a("ObBx")}function n(t){a("HTCT")}Object.defineProperty(o,"__esModule",{value:!0});var i=a("7+uW"),l={name:"leftNav",data:function(){return{}}},c=function(){var t=this,o=t.$createElement;t._self._c;return t._m(0,!1,!1)},r=[function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("div",{staticClass:"left_nav"},[a("ul",[a("li",[a("i",{staticClass:"icon iconfont icon-goumai"}),t._v(" "),a("div",[t._v("收银")])]),t._v(" "),a("li",[a("i",{staticClass:"icon iconfont icon-dianpu"}),t._v(" "),a("div",[t._v("店铺")])]),t._v(" "),a("li",[a("i",{staticClass:"icon iconfont icon-hanbao"}),t._v(" "),a("div",[t._v("商品")])]),t._v(" "),a("li",[a("i",{staticClass:"icon iconfont icon-huiyuanqia"}),t._v(" "),a("div",[t._v("会员")])]),t._v(" "),a("li",[a("i",{staticClass:"icon iconfont icon-tongji"}),t._v(" "),a("div",[t._v("统计")])]),t._v(" "),a("li",[a("i",{staticClass:"icon iconfont icon-gongnengjianyi"}),t._v(" "),a("div",[t._v("设置")])])])])}],d={render:c,staticRenderFns:r},u=d,v=a("VU/8"),_=s,p=v(l,u,!1,_,null,null),f=p.exports,m={name:"app",components:{leftNav:f}},g=function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("div",{attrs:{id:"app"}},[a("leftNav"),t._v(" "),a("div",{staticClass:"main"},[a("router-view")],1)],1)},h=[],b={render:g,staticRenderFns:h},C=b,y=a("VU/8"),G=e,N=y(m,C,!1,G,null,null),w=N.exports,I=a("/ocq"),k=a("2sCs"),D=a.n(k),M={name:"Pos",data:function(){return{tableData:[],oftenGoods:[],type0Goods:[],type1Goods:[],type2Goods:[],type3Goods:[],totalCount:0,totalMoney:0}},created:function(){var t=this;D.a.get("http://jspang.com/DemoApi/oftenGoods.php").then(function(o){t.oftenGoods=o.data}).catch(function(t){alert("网络错误")}),D.a.get("http://jspang.com/DemoApi/typeGoods.php").then(function(o){t.type0Goods=o.data[0],t.type1Goods=o.data[1],t.type2Goods=o.data[2],t.type3Goods=o.data[3]}).catch(function(t){alert("网络错误，不能访问")})},mounted:function(){var t=document.body.clientHeight;document.getElementById("order_menu").style.height=t+"px"},methods:{addOrderList:function(t){var o=this;this.totalCount=0,this.totalMoney=0;for(var a=!1,s=0;s<this.tableData.length;s++)this.tableData[s].goodsId==t.goodsId&&(a=!0);if(a){this.tableData.filter(function(o){return o.goodsId==t.goodsId})[0].count++}else{var e={goodsId:t.goodsId,goodsName:t.goodsName,price:t.price,count:1};this.tableData.push(e)}this.tableData.forEach(function(t){o.totalCount+=t.count,o.totalMoney=o.totalMoney+t.count*t.price,o.getAllMoney()})},delSingleGoods:function(t){this.tableData=this.tableData.filter(function(o){return o.goodsId!=t.goodsId}),this.getAllMoney()},getAllMoney:function(){var t=this;this.totalCount=0,this.totalMoney=0,this.tableData&&this.tableData.forEach(function(o){t.totalCount+=o.count,t.totalMoney=t.totalMoney+o.price*o.count})}}},L=function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("div",{staticClass:"pos"},[a("div",[a("el-row",[a("el-col",{staticClass:"order_menu",attrs:{span:7,id:"order_menu"}},[a("el-tabs",[a("el-tab-pane",{attrs:{label:"点餐"}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[a("el-table-column",{attrs:{prop:"goodsName",label:"商品名称"}}),t._v(" "),a("el-table-column",{attrs:{prop:"count",label:"数量",width:"50"}}),t._v(" "),a("el-table-column",{attrs:{prop:"price",label:"金额",width:"70"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"100",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(o){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.delSingleGoods(o.row)}}},[t._v("删除")]),t._v(" "),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.addOrderList(o.row)}}},[t._v("增加")])]}}])})],1),t._v(" "),a("div",{staticClass:"collect_count"},[a("small",[t._v("数量:"+t._s(t.totalCount))]),t._v(" "),a("small",[t._v("金额:"+t._s(t.totalMoney))])]),t._v(" "),a("div",{staticClass:"collect_btn"},[a("el-button",{attrs:{type:"warning"}},[t._v("挂单")]),t._v(" "),a("el-button",{attrs:{type:"danger"}},[t._v("删除")]),t._v(" "),a("el-button",{attrs:{type:"success"}},[t._v("结账")])],1)],1),t._v(" "),a("el-tab-pane",{attrs:{label:"挂单"}},[t._v("\n                      挂单\n                  ")]),t._v(" "),a("el-tab-pane",{attrs:{label:"外卖"}},[t._v("\n                      外卖\n                  ")])],1)],1),t._v(" "),a("el-col",{attrs:{span:17}},[a("div",{staticClass:"goods_wrap"},[a("div",{staticClass:"goods_title"},[t._v("常用商品")]),t._v(" "),a("div",{staticClass:"goods_list"},[a("ul",t._l(t.oftenGoods,function(o){return a("li",{on:{click:function(a){t.addOrderList(o)}}},[a("span",[t._v(t._s(o.goodsName))]),t._v(" "),a("span",{staticClass:"goods_price"},[t._v("¥"+t._s(o.price)+"元")])])}))])]),t._v(" "),a("div",{staticClass:"goods_type"},[a("el-tabs",[a("el-tab-pane",{attrs:{label:"汉堡"}},[a("div",[a("ul",{staticClass:"cookList"},t._l(t.type0Goods,function(o){return a("li",{on:{click:function(a){t.addOrderList(o)}}},[a("span",{staticClass:"foodImg"},[a("img",{attrs:{src:o.goodsImg,width:"100%"}})]),t._v(" "),a("span",{staticClass:"foodName"},[t._v(t._s(o.goodsName))]),t._v(" "),a("span",{staticClass:"foodPrice"},[t._v("￥"+t._s(o.price)+"元")])])}))])]),t._v(" "),a("el-tab-pane",{attrs:{label:"小食"}},[a("div",[a("ul",{staticClass:"cookList"},t._l(t.type1Goods,function(o){return a("li",{on:{click:function(a){t.addOrderList(o)}}},[a("span",{staticClass:"foodImg"},[a("img",{attrs:{src:o.goodsImg,width:"100%"}})]),t._v(" "),a("span",{staticClass:"foodName"},[t._v(t._s(o.goodsName))]),t._v(" "),a("span",{staticClass:"foodPrice"},[t._v("￥"+t._s(o.price)+"元")])])}))])]),t._v(" "),a("el-tab-pane",{attrs:{label:"饮料"}},[a("div",[a("ul",{staticClass:"cookList"},t._l(t.type2Goods,function(o){return a("li",{on:{click:function(a){t.addOrderList(o)}}},[a("span",{staticClass:"foodImg"},[a("img",{attrs:{src:o.goodsImg,width:"100%"}})]),t._v(" "),a("span",{staticClass:"foodName"},[t._v(t._s(o.goodsName))]),t._v(" "),a("span",{staticClass:"foodPrice"},[t._v("￥"+t._s(o.price)+"元")])])}))])]),t._v(" "),a("el-tab-pane",{attrs:{label:"套餐"}},[a("div",[a("ul",{staticClass:"cookList"},t._l(t.type3Goods,function(o){return a("li",{on:{click:function(a){t.addOrderList(o)}}},[a("span",{staticClass:"foodImg"},[a("img",{attrs:{src:o.goodsImg,width:"100%"}})]),t._v(" "),a("span",{staticClass:"foodName"},[t._v(t._s(o.goodsName))]),t._v(" "),a("span",{staticClass:"foodPrice"},[t._v("￥"+t._s(o.price)+"元")])])}))])])],1)],1)])],1)],1)])},O=[],x={render:L,staticRenderFns:O},j=x,A=a("VU/8"),E=n,P=A(M,j,!1,E,null,null),H=P.exports;i.a.use(I.a);var T=new I.a({routes:[{path:"/",name:"Pos",component:H},{path:"/leftNav",name:"leftNav",component:f}]}),S=a("z5U/"),U=a.n(S);a("rK6t");i.a.config.productionTip=!1,i.a.use(U.a),new i.a({el:"#app",router:T,template:"<App/>",components:{App:w}})},ObBx:function(t,o){},rK6t:function(t,o){}},["NHnr"]);
//# sourceMappingURL=app.fb57dc69797ac4fae4c6.js.map