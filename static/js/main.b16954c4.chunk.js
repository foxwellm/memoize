(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){e.exports=a.p+"static/media/view.a6cbf59d.gif"},16:function(e,t,a){e.exports=a.p+"static/media/viewF.88b21ef4.gif"},17:function(e,t,a){e.exports=a.p+"static/media/saveF.aa388c45.gif"},20:function(e,t,a){e.exports=a(33)},25:function(e,t,a){},27:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),s=a.n(c),i=(a(25),a(14)),o=a(7),l=a(1),u=a(2),m=a(4),d=a(3),p=a(5),h=(a(27),a(15)),v=a.n(h),f=a(16),g=a.n(f),b=a(17),E=a.n(b),O=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"homepage-container"},r.a.createElement("div",{className:"gif-container"},r.a.createElement("div",{className:"gif-title"},"View Methods"),r.a.createElement("div",null,r.a.createElement("img",{className:"hopepage-gif",src:v.a,height:"250px",alt:"View methods"}))),r.a.createElement("div",{className:"gif-container"},r.a.createElement("div",{className:"gif-title"},"Save Favorites"),r.a.createElement("div",null,r.a.createElement("img",{className:"hopepage-gif",src:E.a,height:"250px",alt:"View methods"}))),r.a.createElement("div",{className:"gif-container"},r.a.createElement("div",{className:"gif-title"},"View Favorites"),r.a.createElement("div",null,r.a.createElement("img",{className:"hopepage-gif",src:g.a,height:"250px",alt:"View methods"}))))}}]),t}(n.Component),j=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.methodType,a=e.methodName,n=e.createPopup;return r.a.createElement("div",{className:"favorites-btn-container",onClick:function(e){return n(e)},"data-type":t,"data-name":a},a)}}]),t}(n.Component),N=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.currentPage,a=e.setFavorite,n=e.favorites,c=e.name,s=["favorite-btn",n.includes(c)?"favorite-selected":null];return r.a.createElement("div",{className:"card-btns-container"},r.a.createElement("div",{className:s.join(" "),onClick:a,"data-type":t,"data-method":c},r.a.createElement("i",{className:"fas fa-star"})))}}]),t}(n.Component),y=a(18),M=(a(30),a(32),function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.currentPage,a=e.method,n=e.setFavorite,c=e.favorites,s=e.cardNumber;return r.a.createElement("article",{id:"card-".concat(s||0),className:"Card","data-card":a.name},r.a.createElement(N,{setFavorite:n,name:a.name,favorites:c[t]||c,currentPage:t}),r.a.createElement("span",{className:"method-name"},a.name,"()"),r.a.createElement(y.UnControlled,{className:"CodeMirror",options:{mode:"javascript",theme:"neat",lineNumbers:!0,readOnly:!0},value:a.example}),r.a.createElement("div",{className:"additional-info-container"},r.a.createElement("p",null,a.syntax),a.Parameters.map(function(e){return r.a.createElement("div",null,r.a.createElement("p",null,Object.keys(e)),r.a.createElement("p",null,Object.values(e)))})))}}]),t}(n.Component)),P=a(6),k=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(m.a)(this,Object(d.a)(t).call(this))).createPopup=function(t){var a=t.target.dataset.type,n=t.target.dataset.name,r=e.props["".concat(a,"Methods")].find(function(e){return e.name===n});e.setState({popupType:a,popupMethod:r})},e.state={popupType:null,popupMethod:null},e}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.popupType,n=t.popupMethod,c=this.props,s=c.favorites,i=c.stringMethods,o=c.arrayMethods,l=c.setFavorite,u=i.filter(function(e){return s.string.includes(e.name)}),m=o.filter(function(e){return s.array.includes(e.name)});return r.a.createElement("div",{className:"favorites-container"},r.a.createElement("div",{className:"favorites-btns-container"},r.a.createElement("div",{className:"favorite-title"},"String Methods"),0===u.length?r.a.createElement("div",{className:"favorite-none"},"No String Favorites Yet"):u.map(function(t){return r.a.createElement(j,{key:P.a,methodType:"string",methodName:t.name,createPopup:e.createPopup})}),r.a.createElement("div",{className:"favorite-title"},"Array Methods"),0===m.length?r.a.createElement("div",{className:"favorite-none"},"No Array Favorites Yet"):m.map(function(t){return r.a.createElement(j,{key:P.a,methodType:"array",methodName:t.name,createPopup:e.createPopup})})),r.a.createElement("div",{className:"favorite-popup-container"},n?r.a.createElement(M,{method:n,setFavorite:l,favorites:s,currentPage:a}):null))}}]),t}(n.Component),x=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.currentPage,a=e.setFavorite,n=e.currentIndex,c=e.nextMethod,s=e.prevMethod,i=e.currentMethods,o=e.favorites;return r.a.createElement("div",{className:"Slideshow"},r.a.createElement("div",{className:"cards-slider active-slide-".concat(n)},0!==n&&r.a.createElement("div",{className:"prev-btn",onClick:s},r.a.createElement("i",{className:"fas fa-arrow-circle-left"})),r.a.createElement("div",{className:"cards-slider-wrapper",style:{transform:"translateX(-".concat(n*(100/i.length),"%)")}},i.map(function(e,n){return r.a.createElement(M,{method:e,key:P.a,setFavorite:a,favorites:o,currentPage:t,cardNumber:n})})),n!==i.length-1&&r.a.createElement("div",{className:"next-btn",onClick:function(){return c(i)}},r.a.createElement("i",{className:"fas fa-arrow-circle-right"}))))}}]),t}(n.Component),C=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(m.a)(this,Object(d.a)(t).call(this))).changePage=function(t){e.setActive(t),e.props.setSlideshowPage(t)},e.setActive=function(t){var a=t.target.dataset.page;e.setState({currentActivePage:a})},e.state={currentActivePage:"homepage"},e}return Object(p.a)(t,e),Object(u.a)(t,[{key:"btnClasses",value:function(e){return["nav-btn",this.state.currentActivePage===e?"active-btn":null].join(" ")}},{key:"render",value:function(){var e=this.props.favorites,t=0;return Object.keys(e).forEach(function(a){t+=e[a].length}),r.a.createElement("div",{className:"nav-container"},r.a.createElement("div",{className:this.btnClasses("homepage"),onClick:this.changePage,"data-page":"homepage"},"MEMOIZE"),r.a.createElement("div",{className:this.btnClasses("string"),onClick:this.changePage,"data-page":"string"},"String"),r.a.createElement("div",{className:this.btnClasses("array"),onClick:this.changePage,"data-page":"array"},"Array"),r.a.createElement("div",{className:this.btnClasses("favorites"),onClick:this.changePage,"data-page":"favorites"},"Favorites (",t,")"))}}]),t}(n.Component),w=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(m.a)(this,Object(d.a)(t).call(this))).getData=function(t){fetch("".concat("http://memoize-datasets.herokuapp.com/api/v1/"+t)).then(function(e){return e.json()}).then(function(a){return e.setState(Object(o.a)({},t,a[t]))}).catch(function(t){e.setState({errors:t})})},e.setFavorite=function(t){var a=Object(i.a)({},e.state.favorites),n=t.target.parentElement.dataset.type,r=t.target.parentElement.dataset.method;if(a[n])if(a[n].includes(r)){var c=a[n].indexOf(r);a[n].splice(c,1)}else a[n].push(r),a[n].sort();else a[n]=[r];e.setState({favorites:a}),localStorage.setItem("favorites",JSON.stringify(a))},e.setSlideshowPage=function(t){var a=t.target.dataset.page;e.setState({currentPage:a,currentIndex:0})},e.nextMethod=function(){var t=e.state.currentIndex+1;e.setState({currentIndex:t})},e.prevMethod=function(){var t=e.state.currentIndex-1;e.setState({currentIndex:t})},e.state={currentPage:"homepage",stringMethods:null,arrayMethods:null,errors:null,favorites:JSON.parse(localStorage.getItem("favorites")||"{}"),currentIndex:0},e}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getData("stringMethods"),this.getData("arrayMethods")}},{key:"render",value:function(){var e=this.state,t=e.currentPage,a=e.favorites,n=e.currentIndex,c=e.stringMethods,s=e.arrayMethods,i=e.errors;return c&&s&&!i?r.a.createElement("div",{className:"App"},r.a.createElement(C,{setSlideshowPage:this.setSlideshowPage,currentPage:t,favorites:a}),"homepage"===t?r.a.createElement(O,null):"favorites"===t?r.a.createElement(k,{favorites:a,stringMethods:c,arrayMethods:s,setFavorite:this.setFavorite}):r.a.createElement(x,{currentMethods:this.state["".concat(t,"Methods")],favorites:a["".concat(t)]||[],setFavorite:this.setFavorite,currentPage:t,currentIndex:n,nextMethod:this.nextMethod,prevMethod:this.prevMethod})):i?r.a.createElement("span",null,"Error"):r.a.createElement("div",null,"Loading")}}]),t}(n.Component);s.a.render(r.a.createElement(w,null),document.getElementById("root"))}},[[20,2,1]]]);
//# sourceMappingURL=main.b16954c4.chunk.js.map