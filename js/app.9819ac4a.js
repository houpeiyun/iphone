(function(t){function e(e){for(var n,o,c=e[0],r=e[1],u=e[2],d=0,f=[];d<c.length;d++)o=c[d],a[o]&&f.push(a[o][0]),a[o]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n]);l&&l(e);while(f.length)f.shift()();return s.push.apply(s,u||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],n=!0,c=1;c<i.length;c++){var r=i[c];0!==a[r]&&(n=!1)}n&&(s.splice(e--,1),t=o(o.s=i[0]))}return t}var n={},a={app:0},s=[];function o(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=n,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(i,n,function(e){return t[e]}.bind(null,n));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=r;s.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"0078":function(t,e,i){},"051b":function(t,e,i){"use strict";var n=i("aeb2"),a=i.n(n);a.a},"097e":function(t,e,i){"use strict";i("cadf"),i("551c"),i("097d");(function(t){var e,i=t.document,n=i.documentElement;function a(){var t=n.getBoundingClientRect().width,e=t/6.4;n.style.fontSize=e+"px"}t.addEventListener("resize",function(){clearTimeout(e),e=setTimeout(a,10)},!1),t.addEventListener("pageshow",function(t){t.persisted&&(clearTimeout(e),e=setTimeout(a,10))},!1),a()})(window)},"219d":function(t,e,i){"use strict";var n=i("25d0"),a=i.n(n);a.a},"25d0":function(t,e,i){},"312d":function(t,e,i){"use strict";var n=i("cfd2"),a=i.n(n);a.a},"377f":function(t,e,i){"use strict";var n=i("6d16"),a=i.n(n);a.a},"3dfd":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("navigation",{attrs:{movieTitle:t.movieName}}),i("router-view",{on:{routerChange:t.change}})],1)},a=[],s=(i("cadf"),i("551c"),i("097d"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:t.active},[i("header",[i("span",{on:{click:function(e){t.routerPush({name:"movie",title:"电影",id:"101",path:"/"})}}},[t._v("\n            首页\n        ")]),i("h3",[t._v(t._s(t.titl))])]),i("nav",[i("ul",t._l(t.navList,function(e,n){return i("li",{key:n+"nl",class:{"nav-active":t.active==e.name},on:{click:function(i){t.routerPush(e)}}},[t._v(t._s(e.title))])}))])])}),o=[],c=(i("7f7f"),i("ac6a"),{props:["movieTitle"],data:function(){return{active:"movie",titl:"电影",navList:[{name:"movie",title:"电影",id:"101",path:"/"},{name:"music",title:"音乐",id:"102",path:"/music"},{name:"book",title:"书籍",id:"103",path:"/book"},{name:"photo",title:"照片",id:"104",path:"/photo"}]}},mounted:function(){this.$nextTick(function(){var t=this;this.navList.forEach(function(e){e.name==t.movieTitle&&(t.active=e.name,t.titl=e.title)})})},methods:{routerPush:function(t){this.$router.push(t.path),this.active=t.name,this.titl=t.title}}}),r=c,u=(i("cb58"),i("2877")),l=Object(u["a"])(r,s,o,!1,null,"3fb5f014",null);l.options.__file="Navigation.vue";var d=l.exports,f={data:function(){return{movieName:"movie"}},components:{navigation:d},methods:{change:function(t){console.log(t),this.movieName=t}}},A=f,h=(i("219d"),Object(u["a"])(A,n,a,!1,null,"255a7e77",null));h.options.__file="App.vue";e["a"]=h.exports},"41cb":function(t,e,i){"use strict";i("cadf"),i("551c"),i("097d");var n=i("2b0e"),a=i("8c4f"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"container"},[i("ul",{staticClass:"container-nav"},t._l(t.dataList,function(e,n){return i("li",{key:n+"dl",on:{click:function(i){t.dianji(e.id)}}},[i("img",{attrs:{src:e.images.large,alt:""}}),i("div",{staticClass:"con-cc"},[i("h5",[t._v(t._s(e.title))]),i("div",[t._v("导演: "),t._l(e.directors,function(e,n){return i("span",{key:n+"cl"},[t._v(t._s(e.name)+"/")])})],2),i("div",[t._v("主演: "),t._l(e.casts,function(e,n){return i("span",{key:n+"ql"},[t._v(t._s(e.name)+"/")])})],2),i("div",[t._v("类型: "),t._l(e.genres,function(e,n){return i("span",{key:n+"dl"},[t._v(t._s(e)+"/")])})],2),i("div",[t._v("评分: "+t._s(e.rating.average))])]),i("div",{staticClass:"foot"},[i("a",{attrs:{href:e.alt}},[t._v("详情")])])])}))]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isshow,expression:"isshow"}],staticClass:"loading"},[t._m(0)])])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"image"},[n("img",{attrs:{src:i("f8b2"),alt:""}})])}],c={data:function(){return{dataList:[],isshow:!1,isEnd:!1,isfinsh:!0}},created:function(){this.$emit("routerChange","movie"),this.getData()},methods:{getData:function(){var t=this;axios.get(API_PROXY+"https://api.douban.com/v2/movie/in_theaters?start="+this.dataList.length+"&count=10").then(function(e){t.dataList=t.dataList.concat(e.data.subjects),t.isshow=!1,t.isfinsh=!0,console.log("length:"+e.data.subjects.length),0==e.data.subjects.length&&(t.isEnd=!0)}).catch(function(t){console.log(t)})},dianji:function(t){this.$router.push("/moviedetail/"+t)}},mounted:function(){var t=this;window.onscroll=function(){var e=document.documentElement.scrollTop,i=document.documentElement.scrollHeight,n=document.documentElement.clientHeight,a=e-i+n;0==a&&t.isfinsh&&(t.isEnd||(t.isshow=!0,t.isfinsh=!1,t.getData()))}}},r=c,u=(i("6178"),i("2877")),l=Object(u["a"])(r,s,o,!1,null,"376a0447",null);l.options.__file="movie.vue";var d=l.exports,f=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("div",{staticClass:"ccc"},[i("swipe",{staticClass:"my-swipe"},[i("swipe-item",{staticClass:"slide1"}),i("swipe-item",{staticClass:"slide2"}),i("swipe-item",{staticClass:"slide3"}),i("swipe-item",{staticClass:"slide4"}),i("swipe-item",{staticClass:"slide5"})],1)],1)])},A=[],h=i("ada1");i("8eac");var v={components:{swipe:h["Swipe"],"swipe-item":h["SwipeItem"]},created:function(){this.$emit("routerChange","book")},data:function(){return{}},methods:{},mounted:function(){}},m=v,p=(i("051b"),Object(u["a"])(m,f,A,!1,null,null,null));p.options.__file="book.vue";var g=p.exports,E=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("div",[i("ul",{staticClass:"container-nav"},t._l(t.dataList,function(e,n){return i("li",{key:n+"ml",on:{click:function(e){t.routerPush()}}},[i("img",{attrs:{src:e.bg,alt:""}})])}))])])},C=[],b=i("bc3a"),B=i.n(b),_={data:function(){return{dataList:[]}},created:function(){this.$emit("routerChange","music"),this.getData()},methods:{getData:function(){var t=this;B.a.get("./data/musicList.json").then(function(e){t.dataList=e.data.albums}).catch(function(){})},routerPush:function(){this.$router.push("/musicss")}}},w=_,D=(i("377f"),Object(u["a"])(w,E,C,!1,null,"6579c924",null));D.options.__file="music.vue";var Q=D.exports,j=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("ul",t._l(t.dataLists,function(e,n){return i("li",{on:{click:function(e){t.routerPush()}}},[i("img",{attrs:{src:e.src},on:{click:function(e){t.add(n)}}})])})),i("div",{staticClass:"dd"})])},O=[],k=i("c93e"),L=i("2f62"),y=i("ca95");n["default"].use(y,{name:"v-touch"});var I={data:function(){return{dataLists:[]}},created:function(){this.$emit("routerChange","photo"),this.getData()},methods:Object(k["a"])({},Object(L["b"])(["add"]),{getData:function(){var t=this;axios.get("./data/photodata.json").then(function(e){t.dataLists=e.data.photoData,console.log(t.dataLists)}).catch(function(){})},routerPush:function(){this.$router.push("/photodetail")}}),computed:{}},x=I,F=(i("a7b8"),Object(u["a"])(x,j,O,!1,null,"60d38318",null));F.options.__file="photo.vue";var T=F.exports,Y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container-nav-c"},[t.isif?i("aplayer",{attrs:{autoplay:"",music:t.dataLists[0],list:t.dataLists,showLrc:t.isifs}}):t._e()],1)},H=[],M=(i("ac6a"),i("0f7d")),N=i.n(M),S={components:{Aplayer:N.a},data:function(){return{dataLists:[],isif:!1,isifs:!1}},created:function(){this.$emit("routerChange","music"),this.getData()},methods:{getData:function(){var t=this;axios.get("./data/musicdata.json").then(function(e){t.dataLists=e.data.musicData,console.log(e.data.musicData),t.isif=!0,t.isifs=!0,console.log(t.dataLists[0].lrc),t.dataLists.forEach(function(e,i){t.dataLists[i].lrc=location.origin+"/"+t.dataLists[i].lrc})}).catch(function(){})}}},R=S,J=(i("312d"),Object(u["a"])(R,Y,H,!1,null,"15ede548",null));J.options.__file="musicss.vue";var G=J.exports,K=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header-1"},[i("h2",[t._v(t._s(t.dataList.title))]),t.isif?i("div",{attrs:{id:"zhuyan"}},[i("div",{staticClass:"cc"},t._l(t.dataList.genres,function(e){return i("span",[t._v(t._s(e))])})),i("div",[t._v("年份："+t._s(t.dataList.year))]),i("div",[t._v("主演："),t._l(t.dataList.casts,function(e){return i("span",[t._v(t._s(e.name)+"/")])})],2),i("div",[t._v("评分: "+t._s(t.dataList.rating.average))])]):t._e(),i("div",{staticClass:"aa"},[t._v("故事简介："+t._s(t.dataList.summary))]),t.isif?i("img",{attrs:{src:t.dataList.images.large,alt:""}}):t._e()])},P=[],U={data:function(){return{dataList:[],id:"",isif:!1}},created:function(){this.$emit("routerChange","movie"),this.id=this.$route.params.movieId,this.getData()},methods:{getData:function(){var t=this;axios.get(API_PROXY+"https://api.douban.com/v2/movie/subject/"+this.id).then(function(e){t.dataList=e.data,console.log(e),t.isif=!0}).catch(function(t){console.log(t)})}}},W=U,X=(i("461e"),Object(u["a"])(W,K,P,!1,null,"92a829f6",null));X.options.__file="movieDetail.vue";var q=X.exports,V=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("div",[i("v-touch",{style:t.bg,on:{swipeleft:t.jian,tap:t.onTap,swiperight:t.jia}},[t._v("Swipe me!")])],1)])},$=[],z=i("ca95");n["default"].use(z,{name:"v-touch"});var Z={data:function(){return{num:0}},computed:Object(k["a"])({},Object(L["c"])(["srcs"]),{bg:function(){return{background:"#000 url('./imgs/".concat(this.srcs,".jpg') no-repeat center/contain")}}}),created:function(){this.$emit("routerChange","photo"),this.srcs||this.$router.push("/photo"),console.log(this.srcs)},methods:Object(k["a"])({},Object(L["b"])(["jia","jian"]),{onTap:function(){this.$router.push("/photo")}})},tt=Z,et=(i("cfbf"),Object(u["a"])(tt,V,$,!1,null,"6dc13622",null));et.options.__file="photoDetail.vue";var it=et.exports;n["default"].use(a["a"]);e["a"]=new a["a"]({routes:[{path:"/",name:"movie",component:d},{path:"/book",name:"book",component:g},{path:"/music",name:"music",component:Q},{path:"/photo",name:"photo",component:T},{path:"/musicss",name:"musicss",component:G},{path:"/moviedetail/:movieId",name:"moviedetail",component:q},{path:"/photodetail",name:"photodetail",component:it}]})},"461e":function(t,e,i){"use strict";var n=i("8c6e"),a=i.n(n);a.a},"4ee2":function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e),function(t){i("cadf"),i("551c"),i("097d");var e=i("2b0e"),n=(i("be3b"),i("3dfd")),a=i("c0d6"),s=i("41cb");i("4ee2"),i("097e");e["default"].config.productionTip=!1,t.API_PROXY="https://bird.ioliu.cn/v2?url=",new e["default"]({store:a["a"],router:s["a"],render:function(t){return t(n["a"])}}).$mount("#app")}.call(this,i("c8ba"))},6178:function(t,e,i){"use strict";var n=i("6642"),a=i.n(n);a.a},6642:function(t,e,i){},"6d16":function(t,e,i){},"8c6e":function(t,e,i){},a7b8:function(t,e,i){"use strict";var n=i("0078"),a=i.n(n);a.a},aeb2:function(t,e,i){},be3b:function(t,e,i){"use strict";i("cadf"),i("551c"),i("097d");var n=i("2b0e"),a=i("bc3a"),s=i.n(a),o={},c=s.a.create(o);c.interceptors.request.use(function(t){return t},function(t){return Promise.reject(t)}),c.interceptors.response.use(function(t){return t},function(t){return Promise.reject(t)}),Plugin.install=function(t,e){t.axios=c,window.axios=c,Object.defineProperties(t.prototype,{axios:{get:function(){return c}},$axios:{get:function(){return c}}})},n["default"].use(Plugin);Plugin},c0d6:function(t,e,i){"use strict";var n=i("2b0e"),a=i("2f62");n["default"].use(a["a"]),e["a"]=new a["a"].Store({state:{srcs:null},mutations:{add:function(t,e){t.srcs=e+1},jia:function(t){1==t.srcs?t.srcs=24:t.srcs-=1,console.log("right")},jian:function(t){24==t.srcs?t.srcs=1:t.srcs+=1,console.log("left")}},actions:{}})},c931:function(t,e,i){},cb58:function(t,e,i){"use strict";var n=i("cfff"),a=i.n(n);a.a},cfbf:function(t,e,i){"use strict";var n=i("c931"),a=i.n(n);a.a},cfd2:function(t,e,i){},cfff:function(t,e,i){},f8b2:function(t,e){t.exports="data:image/gif;base64,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"}});
//# sourceMappingURL=app.9819ac4a.js.map