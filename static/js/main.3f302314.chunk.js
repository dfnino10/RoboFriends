(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),s=n(7),a=n.n(s),o=n(2),i=n(3),h=n(5),l=n(4),u=function(e){var t=e.id,n=e.name,c=e.email;return Object(r.jsxs)("div",{className:"bg-light-green dib br3 pa3 ma2 grow pw2 shadow-5 tc",children:[Object(r.jsx)("img",{src:"https://robohash.org/".concat(t,"?200x200"),alt:"robot"}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:n}),Object(r.jsx)("p",{children:c})]})]})},b=function(e){var t=e.robots.map((function(e){return Object(r.jsx)(u,{id:e.id,name:e.name,email:e.email},e.id)}));return Object(r.jsx)(r.Fragment,{children:t})},j=function(e){var t=e.searchChange;return Object(r.jsx)("div",{className:"pa2",children:Object(r.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search robots",onChange:t})})},d=function(e){return Object(r.jsx)("div",{style:{overflowY:"scroll",border:"1px",height:"81vh"},children:e.children})},f=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(i.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(r.jsx)("h1",{children:"Ooops. That went wrong"}):this.props.children}}]),n}(c.Component),O=(n(13),function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchField:t.target.value})},e.state={robots:[],searchField:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchField,c=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?Object(r.jsxs)("div",{className:"tc",children:[Object(r.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(r.jsx)(j,{searchChange:this.onSearchChange}),Object(r.jsx)(d,{children:Object(r.jsx)(f,{children:Object(r.jsx)(b,{robots:c})})})]}):Object(r.jsx)("h1",{className:"tc",children:"Loading"})}}]),n}(c.Component)),g=(n(14),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),s(e),a(e)}))});n(15);a.a.render(Object(r.jsx)(O,{}),document.getElementById("root")),g()}},[[16,1,2]]]);
//# sourceMappingURL=main.3f302314.chunk.js.map