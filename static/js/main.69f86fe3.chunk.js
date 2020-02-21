(this.webpackJsonpcontent=this.webpackJsonpcontent||[]).push([[0],{31:function(e,t,n){e.exports=n(41)},41:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(12),i=n(7),o=n(10),u={dateChanged:Object(o.createAction)("date changed")(),dateClicked:Object(o.createAction)("date clicked")()},d=n(11),l=n(22),f=n(23),s=n(42),p=n(43),b=function(){return{date:Object(s.a)(new Date),startDate:void 0,endDate:void 0}},m=Object(d.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b(),t=arguments.length>1?arguments[1]:void 0;return Object(f.a)(e,(function(e){switch(t.type){case Object(o.getType)(u.dateChanged):e.date=t.payload;break;case Object(o.getType)(u.dateClicked):e.startDate&&e.endDate?(e.startDate=t.payload,e.endDate=void 0):e.startDate?e.startDate===t.payload?e.startDate=void 0:Object(p.a)(t.payload,e.startDate)?e.endDate=t.payload:(e.endDate=e.startDate,e.startDate=t.payload):e.startDate=t.payload}}))}),Object(l.composeWithDevTools)()),j=i.c,O=n(47),v=n(27),g=n(48),y=n(49),D=n(46),h=n(28),E=n(26),k=n(5),x=n(6);function B(){var e=Object(k.a)(["\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  grid-template-rows: repeat(7, 1fr);\n  grid-column-gap: 0px;\n  grid-row-gap: 0px;\n  font-size: 0.7em;\n"]);return B=function(){return e},e}function C(){var e=Object(k.a)(["\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n  width: 200px;\n  font-family: Arial, Helvetica, sans-serif;\n  border: 1px solid #e1e1e1;\n  padding: 10px;\n"]);return C=function(){return e},e}var w=x.a.div(C()),S=x.a.div(B());function A(){var e=Object(k.a)(["\n  opacity: ",";\n  font-weight: ",";\n"]);return A=function(){return e},e}function M(){var e=Object(k.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  background: ",";\n  color: ",";\n  opacity: ",";\n  :hover {\n    background: ",";\n    color: ",";\n  }\n"]);return M=function(){return e},e}var T=x.a.div.attrs((function(e){return{}}))(M(),(function(e){return e.isSelected?"#1B1B1B":e.isWithinRange?"#EBEBEB":void 0}),(function(e){return e.isSelected?"#fff":"#000"}),(function(e){return e.isSelected?1:void 0}),(function(e){return!e.isSelected&&e.isDate?"#1B1B1B":void 0}),(function(e){return!e.isSelected&&e.isDate?"#fff":void 0})),H=x.a.p.attrs((function(e){return{}}))(A(),(function(e){return e.differentMonth&&!e.isHeading?.5:1}),(function(e){return e.isHeading?600:0})),W=n(44),z=n(51),J=n(45),P=n(50),R=function(e){var t=e.heading,n=e.date,a=Object(i.b)(),c=j((function(e){return!(!n||!Object(W.a)(n,e.date))})),o=j((function(e){return!(!n||!(e.startDate&&Object(z.a)(n,e.startDate)||e.endDate&&Object(z.a)(n,e.endDate)))})),d=j((function(e){return!!(n&&e.endDate&&e.startDate&&Object(J.a)(n,e.endDate)&&Object(p.a)(n,e.startDate))}));return r.a.createElement(T,{isDate:!!n,isWithinRange:d,isSelected:o,onClick:function(){return n?a(u.dateClicked(n)):void 0}},r.a.createElement(H,{isHeading:!!t,differentMonth:!c},t||(n?Object(P.a)(n,"d"):void 0)))};function F(){var e=Object(k.a)(["\n  background: transparent;\n  cursor: pointer;\n  border: none;\n  opacity: 0.3;\n  transition: 0.3s;\n  :hover {\n    opacity: 1;\n  }\n"]);return F=function(){return e},e}function I(){var e=Object(k.a)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 0 0 10px 0;\n  align-items: center;\n\n  h4 {\n    margin: 0;\n    padding: 0 20px;\n    font-size: 0.8em;\n  }\n"]);return I=function(){return e},e}var N=x.a.div(I()),q=x.a.button(F()),G=n(18),K=function(){var e=Object(i.b)(),t=j((function(e){return e.date}));return r.a.createElement(N,null,r.a.createElement(q,{onClick:function(){return e(u.dateChanged(Object(D.a)(t,1)))}},r.a.createElement(G.a,null)),r.a.createElement("h4",null,Object(P.a)(t,"MMMM yyyy")),r.a.createElement(q,{onClick:function(){return e(u.dateChanged(Object(E.a)(t,1)))}},r.a.createElement(G.b,null)))},L=function(e){var t=e.currentPageDate,n=Object(O.a)(Object(s.a)(t)),a=n>0?n-1:n,c=Object(v.a)(t),i=42-a-c,o=Array(a).fill(0).map((function(e,n){return Object(g.a)(Object(y.a)(Object(D.a)(t,1)),a-n-1)})),u=Array(c).fill(1).map((function(e,n){return Object(h.a)(Object(s.a)(t),n)})),d=Array(i>0?i:0).fill(0).map((function(e,n){return Object(h.a)(Object(s.a)(Object(E.a)(t,1)),n)}));return r.a.createElement(w,null,r.a.createElement(K,null),r.a.createElement(S,null,["M","T","W","T","F","S","S"].map((function(e,t){return r.a.createElement(R,{key:t,heading:e})})),o.map((function(e){return r.a.createElement(R,{date:e})})),u.map((function(e){return r.a.createElement(R,{date:e})})),d.map((function(e){return r.a.createElement(R,{date:e})}))))};var Q=document.getElementById("root");Object(c.render)(r.a.createElement(i.a,{store:m},r.a.createElement((function(){var e=j((function(e){return e.date}));return r.a.createElement("div",{className:"App"},r.a.createElement(L,{currentPageDate:e}))}),null)),Q)}},[[31,1,2]]]);
//# sourceMappingURL=main.69f86fe3.chunk.js.map