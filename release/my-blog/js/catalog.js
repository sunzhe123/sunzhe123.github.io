(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["catalog"],{"6d67":function(t,e,r){"use strict";var a=r("5ca1"),c=r("0a49")(1);a(a.P+a.F*!r("2f21")([].map,!0),"Array",{map:function(t){return c(this,t,arguments[1])}})},f7b4:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"series-wrapper"},[t._l(t.catalogList,(function(e,a){return r("div",{key:e.catalogId,on:{click:function(r){return t.handleDetail(e.catalogId)}}},[t._v(t._s(a+1+". "+e.catalogName))])})),t.catalogList&&t.catalogList.length?t._e():r("div",[t._v("更新中, 敬请期待")])],2)},c=[],n=(r("1c01"),r("58b2"),r("8e6e"),r("f3e2"),r("d25f"),r("ac6a"),r("456d"),r("6d67"),r("bd86")),i=r("2f62");function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){Object(n["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var l={data:function(){return{catalogList:[]}},computed:s({},Object(i["b"])(["seriesList"])),created:function(){var t=this,e=this.$route.query.seriesId;this.seriesList.map((function(r){r.id===e&&(t.catalogList=r.catalogList)})),console.log("---catalogList:",this.catalogList)},methods:{handleDetail:function(t){this.$router.push({path:"/detail/index.html",query:{detailId:t,type:"catalog"}})}}},u=l,p=r("2877"),f=Object(p["a"])(u,a,c,!1,null,"0d083569",null);e["default"]=f.exports}}]);