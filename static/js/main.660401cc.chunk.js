(this["webpackJsonpsearch-films"]=this["webpackJsonpsearch-films"]||[]).push([[0],{244:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),c=n(30),a=n.n(c),o=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,253)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),r(e),i(e),c(e),a(e)}))},s=n(16),l=n(74),u=n(21),j=n(3),b=u.b.header.withConfig({displayName:"Header__HeaderContainer",componentId:"sc-lp7653-0"})(["text-align:center;color:#0f135e;background-color:black;& h1{margin:0;color:aliceblue;}"]),d=function(){return Object(j.jsx)(b,{children:Object(j.jsx)("h1",{children:"Search movies"})})},p=n(28),m=n(64),x=n(124),O=n(40),f=n.n(O),h=n(58),g=n(18),v=n(125),y="69a7f601",_=n.n(v).a.create({baseURL:"https://www.omdbapi.com/"}),w=function(e){var t=arguments;return Object(h.a)(f.a.mark((function n(){var r,i,c,a,o;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.title,i=e.type,c=e.year,a=t.length>1&&void 0!==t[1]?t[1]:1,n.next=4,_.get("?apikey=".concat(y,"&s=").concat(r,"&type=").concat(i,"&y=").concat(c,"&page=").concat(a));case 4:return o=n.sent,n.abrupt("return",o.data);case 6:case"end":return n.stop()}}),n)})))()},C=function(e){return Object(h.a)(f.a.mark((function t(){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_.get("?apikey=".concat(y,"&i=").concat(e,"&plot=full"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))()},E={loading:!1,movies:null,errorMessage:null,totalCountMovies:"",currentPage:1,filter:{title:"",year:"",type:""},filmDescription:{}},S=function(){return{type:"sm/SEARCH_REQUEST"}},R=function(e){return{type:"sm/SEARCH_REQUEST_SUCCESS",movies:e}},T=function(e){return{type:"sm/SEARCH_REQUEST_ERROR",error:e}},I=function(e){return{type:"sm/SET_TOTAL_COUNT_MOVIES",totalResults:e}},P=function(e){return{type:"sm/SET_CURRENT_PAGE",page:e}},k=function(e){return{type:"sm/SET_FILTER",filter:e}},N=function(e){return{type:"sm/SET_FILM_DESCRIPTION",filmDescription:e}},D=function(e,t){return function(){var n=Object(h.a)(f.a.mark((function n(r){var i;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(R(null)),r(S()),r(P(t)),r(k(e)),n.next=6,w(e,t);case 6:"True"===(i=n.sent).Response?(r(R(i.Search)),r(I(i.totalResults))):r(T(i.Error));case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"sm/SEARCH_REQUEST":return Object(g.a)(Object(g.a)({},e),{},{loading:!0});case"sm/SEARCH_REQUEST_SUCCESS":return Object(g.a)(Object(g.a)({},e),{},{movies:t.movies,errorMessage:null,loading:!1});case"sm/SEARCH_REQUEST_ERROR":return Object(g.a)(Object(g.a)({},e),{},{loading:!1,errorMessage:t.error});case"sm/SET_TOTAL_COUNT_MOVIES":return Object(g.a)(Object(g.a)({},e),{},{totalCountMovies:t.totalResults});case"sm/SET_CURRENT_PAGE":return Object(g.a)(Object(g.a)({},e),{},{currentPage:t.page});case"sm/SET_FILTER":return Object(g.a)(Object(g.a)({},e),{},{filter:t.filter});case"sm/SET_FILM_DESCRIPTION":return Object(g.a)(Object(g.a)({},e),{},{filmDescription:t.filmDescription});case"sm/CLEAR_FILM_DESCRIPTION":return Object(g.a)(Object(g.a)({},e),{},{filmDescription:null});default:return e}},F=Object(m.b)({moviesPage:M}),A=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||m.c,U=Object(m.d)(F,A(Object(m.a)(x.a)));window.store=U;var L,V=U,H=n(250),B=function(e){return e.moviesPage.totalCountMovies},z=function(e){return e.moviesPage.movies},Q=function(e){return e.moviesPage.filter},G=function(e){return e.moviesPage.currentPage},W=function(e){return e.moviesPage.errorMessage},Y=function(e){return e.moviesPage.filmDescription},J=function(e){return e.moviesPage.loading},X=(n(110),n(248)),q=n(50),$=u.b.div.withConfig({displayName:"Preloader__PreloaderContainer",componentId:"sc-1rjtl1c-0"})(["width:100%;height:100%;text-align:center;"]),K=function(e){var t=Object(j.jsx)(q.a,{style:{fontSize:48},spin:!0});return Object(j.jsx)($,{children:Object(j.jsx)(X.a,{indicator:t})})},Z=u.b.div.withConfig({displayName:"CharacterRow__Row",componentId:"sc-1nfdg2h-0"})(["display:flex;text-align:left;padding:0px 15px;&:not(:first-child){margin-top:15px;}@media (min-width:501px) and (max-width:800px){width:80%;justify-content:space-between;margin:0 auto;}"]),ee=u.b.div.withConfig({displayName:"CharacterRow__Title",componentId:"sc-1nfdg2h-1"})(["color:grey;width:40%;color:cadetblue;"]),te=u.b.div.withConfig({displayName:"CharacterRow__Value",componentId:"sc-1nfdg2h-2"})(["width:60%;color:midnightblue;"]),ne=function(e){var t=e.title,n=e.value;return n?Object(j.jsxs)(Z,{children:[Object(j.jsx)(ee,{children:t}),Object(j.jsx)(te,{children:n})]}):null},re=u.b.div.withConfig({displayName:"StyledComponents__Container",componentId:"sc-1ytxs6k-0"})(["display:flex;margin-top:20px;@media screen and (max-width:900px){flex-direction:column;align-items:center;}"]),ie=u.b.div.withConfig({displayName:"StyledComponents__BodyContainer",componentId:"sc-1ytxs6k-1"})(["padding:20px 20px 50px 20px;margin:0 auto;max-width:1200px;text-align:center;background-color:white;min-height:calc(100vh - 94px);"]),ce=u.b.div.withConfig({displayName:"StyledComponents__ErrorMessage",componentId:"sc-1ytxs6k-2"})(["color:red;font-size:1.5em;padding:10px 20px;border-radius:10px;"]),ae=u.b.img.withConfig({displayName:"StyledComponents__Poster",componentId:"sc-1ytxs6k-3"})(["height:100%;margin:",";"],(function(e){return e.margin})),oe=u.b.div.withConfig({displayName:"Movie__MovieContainer",componentId:"sc-zr99p1-0"})(["display:flex;flex-direction:column;align-items:center;justify-content:center;box-shadow:0px 5px 10px 2px rgba(34,60,80,0.2);cursor:pointer;padding:10px 0px;transition:all 0.4s linear;width:330px;min-height:550px;justify-content:space-around;border:1px solid transparent;border-radius:10px;&:hover{border:1px solid #1890ff;}"]),se=function(e){var t=e.movie;return Object(j.jsx)(l.b,{to:"/film/".concat(t.imdbID),children:Object(j.jsxs)(oe,{children:[Object(j.jsx)("div",{children:Object(j.jsx)(ae,{src:t.Poster,alt:"poster ".concat(t.Title)})}),Object(j.jsxs)("div",{style:{width:"75%",marginTop:"10px"},children:[Object(j.jsx)(ne,{title:"Title:",value:t.Title}),Object(j.jsx)(ne,{title:"Type:",value:t.Type}),Object(j.jsx)(ne,{title:"Year:",value:t.Year}),Object(j.jsx)(ne,{title:"imdbID:",value:t.imdbID})]})]})})},le=i.a.memo(se),ue=n(99),je=n(139),be=n(63),de=n(249),pe=n(251),me=n(138),xe=be.a.Option,Oe=function(){var e=Object(p.b)(),t=Object(p.c)(Q),n=de.a.useForm(),i=Object(je.a)(n,1)[0];Object(r.useEffect)((function(){i.setFieldsValue({title:t.title,year:t.year,type:t.type})}),[t,i]);return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(de.a,{onFinish:function(t){e(D(t,1))},form:i,initialValues:{title:t.title,year:t.year,type:t.type},children:Object(j.jsxs)(pe.a.Group,{compact:!0,children:[Object(j.jsx)(de.a.Item,{name:"title",rules:[{required:!0,message:"Please input title!"}],children:Object(j.jsx)(pe.a,{placeholder:"title film"})}),Object(j.jsx)(de.a.Item,{name:"year",rules:[{pattern:/^\d+$/,message:"Please enter year"}],children:Object(j.jsx)(pe.a,{placeholder:"year"})}),Object(j.jsx)(de.a.Item,{name:"type",children:Object(j.jsxs)(be.a,{style:{width:"120px"},children:[Object(j.jsx)(xe,{value:"",children:"All"}),Object(j.jsx)(xe,{value:"movie",children:"Movie"}),Object(j.jsx)(xe,{value:"series",children:"Series"}),Object(j.jsx)(xe,{value:"episode",children:"Episode"})]})}),Object(j.jsx)(de.a.Item,{children:Object(j.jsx)(me.a,{type:"primary",htmlType:"submit",children:"Search"})})]})})})},fe=n(252),he=u.b.div.withConfig({displayName:"Movies__MoviesWrapper",componentId:"sc-1xyg52-0"})(["display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-evenly;grid-column-gap:15px;column-gap:15px;grid-row-gap:15px;row-gap:15px;"]),ge=function(){var e=Object(p.b)(),t=Object(s.f)(),n=Object(p.c)(Q),i=Object(p.c)(G);Object(r.useEffect)((function(){var r=ue.parse(t.location.search.substr(1)),c=i,a=n;r.page&&(c=Number(r.page)),r.title&&(a=Object(g.a)(Object(g.a)({},a),{},{title:r.title})),r.year&&(a=Object(g.a)(Object(g.a)({},a),{},{year:r.year})),r.type&&(a=Object(g.a)(Object(g.a)({},a),{},{type:r.type})),a.title&&e(D(a,c))}),[]),Object(r.useEffect)((function(){var e={};n.title&&(e.title=n.title),n.year&&(e.year=n.year),n.type&&(e.type=n.type),1!==i&&(e.page=String(i)),t.push({search:ue.stringify(e)})}),[n,i]);var c=Object(p.c)(z),a=Object(p.c)(J),o=Number(Object(p.c)(B)),l=Object(p.c)(W);return a?Object(j.jsx)(K,{}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(Oe,{}),c&&Object(j.jsx)(he,{children:c.map((function(e){return Object(j.jsx)(le,{movie:e},Object(fe.a)())}))}),c&&Object(j.jsx)(H.a,{showQuickJumper:!0,current:i,defaultCurrent:1,onChange:function(t){e(D(n,t))},total:o,pageSize:10,pageSizeOptions:[],style:{marginTop:"30px"}}),l&&Object(j.jsx)(ce,{children:l})]})},ve=i.a.memo(ge),ye=u.b.footer.withConfig({displayName:"Footer__FooterContainer",componentId:"sc-kv1oy7-0"})(["display:flex;height:50px;color:white;background-color:black;justify-content:center;align-items:center;font-size:1.1em;"]),_e=function(){return Object(j.jsxs)(ye,{children:[Object(j.jsx)("span",{children:"\xa9\xa0Created by\xa0Vetchinov Vlad 2021\xa0|\xa0"}),Object(j.jsx)("a",{href:"https://github.com/vetchinator/",target:"_blank",rel:"noreferrer",children:"https://github.com"})]})},we=n(142),Ce=function(){var e=Object(p.b)(),t=Object(s.f)();Object(r.useEffect)((function(){var n=String(t.location.pathname.substr(6));e(function(e){return function(){var t=Object(h.a)(f.a.mark((function t(n){var r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(N("")),t.next=3,C(e);case 3:"True"===(r=t.sent).Response?n(N(r)):n(T(r.Error));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(n))}),[]);var n=Object(p.c)(Y);return n?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)(me.a,{onClick:function(){t.goBack()},children:[" ",Object(j.jsx)(we.a,{})," Back"]}),Object(j.jsxs)(re,{children:[Object(j.jsx)(ae,{src:n.Poster,alt:"poster ".concat(n.Title),margin:"0 10px"}),Object(j.jsxs)("div",{children:[Object(j.jsx)(ne,{title:"Title",value:n.Title}),Object(j.jsx)(ne,{title:"Year",value:n.Year}),Object(j.jsx)(ne,{title:"Country",value:n.Country}),Object(j.jsx)(ne,{title:"Genre",value:n.Genre}),Object(j.jsx)(ne,{title:"Writer",value:n.Writer}),Object(j.jsx)(ne,{title:"Director",value:n.Director}),Object(j.jsx)(ne,{title:"Production",value:n.Production}),Object(j.jsx)(ne,{title:"Actors",value:n.Actors}),Object(j.jsx)(ne,{title:"Language",value:n.Language}),Object(j.jsx)(ne,{title:"Awards",value:n.Awards}),Object(j.jsx)(ne,{title:"Metascore",value:n.Metascore}),Object(j.jsx)(ne,{title:"Released",value:n.Released}),Object(j.jsx)(ne,{title:"Type",value:n.Type}),Object(j.jsx)(ne,{title:"DVD",value:n.DVD}),Object(j.jsx)(ne,{title:"BoxOffice",value:n.BoxOffice}),Object(j.jsx)(ne,{title:"Rated",value:n.Rated}),Object(j.jsx)(ne,{title:"Website",value:n.Website}),Object(j.jsx)(ne,{title:"Plot",value:n.Plot}),Object(j.jsx)(ne,{title:"imdbID",value:n.imdbID}),Object(j.jsx)(ne,{title:"imdbRating",value:n.imdbRating}),Object(j.jsx)(ne,{title:"imdbVotes",value:n.imdbVotes}),Object(j.jsx)(ne,{title:"Runtime",value:n.Runtime}),n.Ratings&&n.Ratings.map((function(e){return Object(j.jsx)(ne,{title:e.Source,value:e.Value},e.Source)}))]})]})]}):Object(j.jsx)(K,{})},Ee=i.a.memo(Ce),Se=n(134),Re=Object(u.a)(L||(L=Object(Se.a)(["\nbody {\n    margin: 0;\n    padding: 0;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n        sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    background-color: aliceblue;\n}\n\ncode {\n    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;\n}\n"]))),Te=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(Re,{}),Object(j.jsx)(d,{}),Object(j.jsx)(ie,{children:Object(j.jsxs)(s.c,{children:[Object(j.jsx)(s.a,{exact:!0,path:"/",render:function(){return Object(j.jsx)(ve,{})}}),Object(j.jsx)(s.a,{path:"/film/:title",render:function(){return Object(j.jsx)(Ee,{})}})]})}),Object(j.jsx)(_e,{})]})},Ie=function(){return Object(j.jsx)(l.a,{children:Object(j.jsx)(p.a,{store:V,children:Object(j.jsx)(Te,{})})})};a.a.render(Object(j.jsx)(Ie,{}),document.getElementById("root")),o()}},[[244,1,2]]]);
//# sourceMappingURL=main.660401cc.chunk.js.map