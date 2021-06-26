(this["webpackJsonpsearch-films"]=this["webpackJsonpsearch-films"]||[]).push([[0],{121:function(e,t,c){e.exports={header:"Header_header__1g_MH"}},127:function(e,t,c){e.exports={searchWrapper:"Search_searchWrapper__7u6qp"}},146:function(e,t,c){},147:function(e,t,c){},244:function(e,t,c){"use strict";c.r(t);var r=c(0),a=c.n(r),n=c(30),i=c.n(n),s=(c(146),function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,253)).then((function(t){var c=t.getCLS,r=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),r(e),a(e),n(e),i(e)}))}),l=(c(147),c(16)),o=c(74),j=c(121),u=c.n(j),b=c(3),O=function(){return Object(b.jsx)("header",{className:u.a.header,children:Object(b.jsx)("h1",{children:"Search movies"})})},p=c(24),d=c(64),v=c(122),m=c(39),x=c.n(m),f=c(57),h=c(18),_=c(123),g="69a7f601",y=c.n(_).a.create({baseURL:"https://www.omdbapi.com/"}),E=function(e){var t=arguments;return Object(f.a)(x.a.mark((function c(){var r,a,n,i,s;return x.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return r=e.title,a=e.type,n=e.year,i=t.length>1&&void 0!==t[1]?t[1]:1,c.next=4,y.get("?apikey=".concat(g,"&s=").concat(r,"&type=").concat(a,"&y=").concat(n,"&page=").concat(i));case 4:return s=c.sent,c.abrupt("return",s.data);case 6:case"end":return c.stop()}}),c)})))()},R=function(e){return Object(f.a)(x.a.mark((function t(){var c;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.get("?apikey=".concat(g,"&i=").concat(e,"&plot=full"));case 2:return c=t.sent,t.abrupt("return",c.data);case 4:case"end":return t.stop()}}),t)})))()},S={loading:!1,movies:[],errorMessage:"",totalCountMovies:"",currentPage:1,filter:{title:"",year:"",type:""},filmDescription:{}},T=function(){return{type:"sm/SEARCH_REQUEST"}},C=function(e){return{type:"sm/SEARCH_REQUEST_SUCCESS",movies:e}},N=function(e){return{type:"sm/SEARCH_REQUEST_ERROR",error:e}},M=function(e){return{type:"sm/SET_TOTAL_COUNT_MOVIES",totalResults:e}},P=function(e){return{type:"sm/SET_CURRENT_PAGE",page:e}},w=function(e){return{type:"sm/SET_FILTER",filter:e}},I=function(e){return{type:"sm/SET_FILM_DESCRIPTION",filmDescription:e}},D=function(){return{type:"sm/CLEAR_FILM_DESCRIPTION"}},A=function(e,t){return function(){var c=Object(f.a)(x.a.mark((function c(r){var a;return x.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return r(C([])),r(T()),r(P(t)),r(w(e)),c.next=6,E(e,t);case 6:"True"===(a=c.sent).Response?(r(N("")),r(C(a.Search)),r(M(a.totalResults))):r(N(a.Error));case 8:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}()},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"sm/SEARCH_REQUEST":return Object(h.a)(Object(h.a)({},e),{},{loading:!0});case"sm/SEARCH_REQUEST_SUCCESS":return Object(h.a)(Object(h.a)({},e),{},{movies:t.movies});case"sm/SEARCH_REQUEST_ERROR":return Object(h.a)(Object(h.a)({},e),{},{loading:!1,errorMessage:t.error});case"sm/SET_TOTAL_COUNT_MOVIES":return Object(h.a)(Object(h.a)({},e),{},{totalCountMovies:t.totalResults});case"sm/SET_CURRENT_PAGE":return Object(h.a)(Object(h.a)({},e),{},{currentPage:t.page});case"sm/SET_FILTER":return Object(h.a)(Object(h.a)({},e),{},{filter:t.filter});case"sm/SET_FILM_DESCRIPTION":return Object(h.a)(Object(h.a)({},e),{},{filmDescription:t.filmDescription});case"sm/CLEAR_FILM_DESCRIPTION":return Object(h.a)(Object(h.a)({},e),{},{filmDescription:null});default:return e}},L=Object(d.b)({moviesPage:F}),W=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||d.c,U=Object(d.d)(L,W(Object(d.a)(v.a)));window.store=U;var k=U,V=c(250),H=function(e){return e.moviesPage.totalCountMovies},B=function(e){return e.moviesPage.filter},Q=function(e){return e.moviesPage.currentPage},q=function(e){return e.moviesPage.errorMessage},G=function(e){return e.moviesPage.filmDescription},Y=(c(110),c(248)),z=c(49),J=function(){var e=Object(b.jsx)(z.a,{style:{fontSize:48},spin:!0});return Object(b.jsx)("div",{style:{width:"100%",height:"100%",textAlign:"center"},children:Object(b.jsx)(Y.a,{indicator:e})})},X=c(25),K=c.n(X),$=function(e){var t=e.movie,c=Object(p.b)();return Object(b.jsx)(o.b,{to:"/film/".concat(t.imdbID),onClick:function(){c(D())},replace:!0,children:Object(b.jsxs)("div",{className:K.a.movieWrapper,children:[Object(b.jsx)("img",{className:K.a.poster,src:t.Poster,alt:"poster ".concat(t.Title)}),Object(b.jsxs)("div",{className:K.a.featureMovie,children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{className:K.a.title,children:"Title: "})," ",Object(b.jsx)("span",{className:K.a.value,children:t.Title})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{className:K.a.title,children:"Type: "}),Object(b.jsx)("span",{className:K.a.value,children:t.Type})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{className:K.a.title,children:"Year: "}),Object(b.jsx)("span",{className:K.a.value,children:t.Year})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{className:K.a.title,children:"imdbID: "}),Object(b.jsx)("span",{className:K.a.value,children:t.imdbID})]})]})]})})},Z=a.a.memo($),ee=c(99),te=c(137),ce=c(127),re=c.n(ce),ae=c(63),ne=c(249),ie=c(251),se=c(136),le=ae.a.Option,oe=function(){var e=Object(p.b)(),t=Object(p.c)(B),c=ne.a.useForm(),a=Object(te.a)(c,1)[0];Object(r.useEffect)((function(){a.setFieldsValue({title:t.title,year:t.year,type:t.type})}),[t,a]);return Object(b.jsx)("div",{className:re.a.searchWrapper,children:Object(b.jsx)(ne.a,{onFinish:function(t){e(A(t,1))},form:a,initialValues:{title:t.title,year:t.year,type:t.type},children:Object(b.jsxs)(ie.a.Group,{compact:!0,children:[Object(b.jsx)(ne.a.Item,{name:"title",rules:[{required:!0,message:"Please input title!"}],children:Object(b.jsx)(ie.a,{placeholder:"title film"})}),Object(b.jsx)(ne.a.Item,{name:"year",rules:[{pattern:/^\d+$/,message:"Please enter year"}],children:Object(b.jsx)(ie.a,{placeholder:"year"})}),Object(b.jsx)(ne.a.Item,{name:"type",children:Object(b.jsxs)(ae.a,{style:{width:"120px"},children:[Object(b.jsx)(le,{value:"",children:"All"}),Object(b.jsx)(le,{value:"movie",children:"Movie"}),Object(b.jsx)(le,{value:"series",children:"Series"}),Object(b.jsx)(le,{value:"episode",children:"Episode"})]})}),Object(b.jsx)(ne.a.Item,{children:Object(b.jsx)(se.a,{type:"primary",htmlType:"submit",children:"Search"})})]})})})},je=c(252),ue=function(){var e=Object(p.b)(),t=Object(l.f)(),c=Object(p.c)(B),n=Object(p.c)(Q);Object(r.useEffect)((function(){var r=ee.parse(t.location.search.substr(1)),a=n,i=c;r.page&&(a=Number(r.page)),r.title&&(i=Object(h.a)(Object(h.a)({},i),{},{title:r.title})),r.year&&(i=Object(h.a)(Object(h.a)({},i),{},{year:r.year})),r.type&&(i=Object(h.a)(Object(h.a)({},i),{},{type:r.type})),i.title&&e(A(i,a))}),[]),Object(r.useEffect)((function(){var e={};c.title&&(e.title=c.title),c.year&&(e.year=c.year),c.type&&(e.type=c.type),1!==n&&(e.page=String(n)),t.push({search:ee.stringify(e)})}),[c,n]);var i=Object(p.c)((function(e){return e.moviesPage.movies})),s=Object(p.c)((function(e){return e.moviesPage.loading})),o=Number(Object(p.c)(H)),j=Object(p.c)(q);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(oe,{}),s?Object(b.jsx)(J,{}):Object(b.jsxs)("div",{children:[0!==i.length&&Object(b.jsx)("div",{className:K.a.moviesWrapper,children:i.map((function(e){return Object(b.jsx)(a.a.Fragment,{children:Object(b.jsx)(Z,{movie:e})},Object(je.a)())}))}),Object(b.jsx)("div",{style:{textAlign:"center"},children:Object(b.jsx)(V.a,{showQuickJumper:!0,className:K.a.pagination,current:n,defaultCurrent:1,onChange:function(t){e(A(c,t))},total:o,pageSize:10,pageSizeOptions:[]})})]}),j&&Object(b.jsx)("div",{style:{textAlign:"center"},children:j})]})},be=a.a.memo(ue),Oe=c(87),pe=c.n(Oe),de=function(e){var t=e.title,c=e.value;return Object(b.jsxs)("div",{className:pe.a.row,children:[Object(b.jsx)("div",{className:pe.a.title,children:t}),Object(b.jsx)("div",{className:pe.a.value,children:c})]})},ve=c(140),me=function(){var e=Object(p.b)(),t=Object(l.f)();Object(r.useEffect)((function(){var c=String(t.location.pathname.substr(6));e(function(e){return function(){var t=Object(f.a)(x.a.mark((function t(c){var r;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,R(e);case 2:"True"===(r=t.sent).Response?c(I(r)):c(N(r.Error));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(c))}),[]);var c=Object(p.c)(G);return c?Object(b.jsx)("div",{children:Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{children:Object(b.jsxs)(se.a,{onClick:function(){t.goBack()},children:[" ",Object(b.jsx)(ve.a,{})," Back"]})}),Object(b.jsxs)("div",{className:K.a.container,children:[Object(b.jsx)("div",{className:K.a.descriptionPoster,children:Object(b.jsx)("img",{src:c.Poster,alt:"poster ".concat(c.Title)})}),Object(b.jsxs)("div",{children:[Object(b.jsx)(de,{title:"Title",value:c.Title}),Object(b.jsx)(de,{title:"Year",value:c.Year}),Object(b.jsx)(de,{title:"Country",value:c.Country}),Object(b.jsx)(de,{title:"Genre",value:c.Genre}),Object(b.jsx)(de,{title:"Writer",value:c.Writer}),Object(b.jsx)(de,{title:"Director",value:c.Director}),Object(b.jsx)(de,{title:"Production",value:c.Production}),Object(b.jsx)(de,{title:"Director",value:c.Director}),Object(b.jsx)(de,{title:"Actors",value:c.Actors}),Object(b.jsx)(de,{title:"Language",value:c.Language}),Object(b.jsx)(de,{title:"Awards",value:c.Awards}),Object(b.jsx)(de,{title:"Metascore",value:c.Metascore}),Object(b.jsx)(de,{title:"Released",value:c.Released}),Object(b.jsx)(de,{title:"Type",value:c.Type}),Object(b.jsx)(de,{title:"DVD",value:c.DVD}),Object(b.jsx)(de,{title:"BoxOffice",value:c.BoxOffice}),Object(b.jsx)(de,{title:"Rated",value:c.Rated}),Object(b.jsx)(de,{title:"Website",value:c.Website}),Object(b.jsx)(de,{title:"Plot",value:c.Plot}),Object(b.jsx)(de,{title:"imdbID",value:c.imdbID}),Object(b.jsx)(de,{title:"imdbRating",value:c.imdbRating}),Object(b.jsx)(de,{title:"imdbVotes",value:c.imdbVotes}),Object(b.jsx)(de,{title:"Runtime",value:c.Runtime}),c.Ratings&&c.Ratings.map((function(e){return Object(b.jsx)(a.a.Fragment,{children:Object(b.jsx)(de,{title:e.Source,value:e.Value})},e.Source)}))]})]})]})}):Object(b.jsx)(J,{})},xe=a.a.memo(me),fe=function(){return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(O,{}),Object(b.jsx)("div",{className:"content",children:Object(b.jsxs)(l.c,{children:[Object(b.jsx)(l.a,{exact:!0,path:"/",render:function(){return Object(b.jsx)(be,{})}}),Object(b.jsx)(l.a,{path:"/film/:title",render:function(){return Object(b.jsx)(xe,{})}})]})})]})},he=function(){return Object(b.jsx)(o.a,{children:Object(b.jsx)(p.a,{store:k,children:Object(b.jsx)(fe,{})})})};i.a.render(Object(b.jsx)(he,{}),document.getElementById("root")),s()},25:function(e,t,c){e.exports={moviesWrapper:"Movies_moviesWrapper__2KVWS",movieWrapper:"Movies_movieWrapper__11WeW",container:"Movies_container__3eqcq",featureMovie:"Movies_featureMovie__1quTg",title:"Movies_title__HwXno",value:"Movies_value__l7Kqh",poster:"Movies_poster__2bkHM",descriptionPoster:"Movies_descriptionPoster__n3Y6V",pagination:"Movies_pagination__2oIMO"}},87:function(e,t,c){e.exports={row:"CharacterRow_row__OTVB0",title:"CharacterRow_title__31UoH",value:"CharacterRow_value__Cuc02"}}},[[244,1,2]]]);
//# sourceMappingURL=main.973ff280.chunk.js.map