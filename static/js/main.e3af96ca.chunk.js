(this.webpackJsonpmy_app=this.webpackJsonpmy_app||[]).push([[0],[,,,function(e,a,n){e.exports={header:"Header_header__3UZcE",Burger_main_div:"Header_Burger_main_div__1OIu6",Burger_div:"Header_Burger_div__27xOd",nav_bar:"Header_nav_bar__7Oxq5",nav_bar_ul:"Header_nav_bar_ul__310H5",nav_bar_ul_li:"Header_nav_bar_ul_li__2uNLT"}},function(e,a,n){e.exports={nav_sidebar:"Sidebar_nav_sidebar__3HtIV",ul_sidebar:"Sidebar_ul_sidebar__CI3jR",ul_li:"Sidebar_ul_li__2guSL",aside_sidebar:"Sidebar_aside_sidebar__2njwN",Open:"Sidebar_Open__2r8o9",Close:"Sidebar_Close__1kNrI"}},function(e,a,n){e.exports={Login_Area:"LoginPage_Login_Area__2WuoO",Login_button:"LoginPage_Login_button__1jyUR","animate-button-in":"LoginPage_animate-button-in__2wzE5"}},,,,,,function(e,a,n){e.exports={Login_container:"MainArea_Login_container__3w142"}},function(e,a,n){e.exports={Backdrop:"Backdrop_Backdrop__3jLYP"}},,,function(e,a,n){e.exports=n(23)},,,,,function(e,a,n){},,,function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),i=n(7),l=n.n(i),o=(n(20),n(8)),c=n(9),s=n(13),_=n(10),u=n(14),m=n(1),d=n(2),b=function(){return{IsLogin:!1,SideBarStatus:!1,Set_SideBar_Status:function(){this.SideBarStatus=!this.SideBarStatus,console.log(this.SideBarStatus)},SetIsLogin:function(){console.log(this.IsLogin),this.IsLogin=!this.IsLogin}}},v=r.a.createContext(null);function g(){var e=r.a.useContext(v);if(!e)throw new Error("useStore must be used within a StoreProvider.");return e}var E=function(e){var a=e.children,n=Object(d.b)(b);return r.a.createElement(v.Provider,{value:n}," ",a," ")},p=n(5),S=n.n(p),f=Object(d.a)((function(){var e=g();return r.a.createElement(t.Fragment,null,r.a.createElement("div",{className:S.a.Login_Area},r.a.createElement("section",null,r.a.createElement("label",{htmlFor:"Username"},"Username: "),r.a.createElement("input",{id:"Username",type:"text"})),r.a.createElement("section",null,r.a.createElement("label",{htmlFor:"Password"},"Password: "),r.a.createElement("input",{id:"Password",type:"password"})),r.a.createElement("section",null,r.a.createElement("button",{className:S.a.Login_button,onClick:Object(m.b)(e.SetIsLogin)},"Login"))))})),h=n(11),L=n.n(h),O=Object(d.a)((function(){var e=g().IsLogin.valueOf(),a=r.a.createElement("div",{className:L.a.Login_container},r.a.createElement(f,null));return r.a.createElement(t.Fragment,null,e?null:a)})),B=n(3),N=n.n(B),j=Object(d.a)((function(){var e=g();var a=r.a.createElement("li",{className:N.a.nav_bar_ul_li},"Logout"),n=e.IsLogin.valueOf();return r.a.createElement(t.Fragment,null,r.a.createElement("header",{className:N.a.header},r.a.createElement("nav",{className:N.a.nav_bar},r.a.createElement("div",{className:N.a.Burger_main_div,onClick:Object(m.b)((function(){e.Set_SideBar_Status()}))},r.a.createElement("div",{className:N.a.Burger_div}),r.a.createElement("div",{className:N.a.Burger_div}),r.a.createElement("div",{className:N.a.Burger_div})),r.a.createElement("ul",{className:N.a.nav_bar_ul},r.a.createElement("li",{className:N.a.nav_bar_ul_li},"Home"),n?a:null))))})),w=n(4),k=n.n(w),I=Object(d.a)((function(){var e=g(),a=[k.a.aside_sidebar,k.a.Close].join(" ");return!0===e.SideBarStatus&&(a=[k.a.aside_sidebar,k.a.Open].join(" ")),r.a.createElement(t.Fragment,null,r.a.createElement("aside",{className:a},r.a.createElement("nav",{className:k.a.nav_sidebar},r.a.createElement("ul",{className:k.a.ul_sidebar},r.a.createElement("li",{className:k.a.ul_li},"Home"),r.a.createElement("li",{className:k.a.ul_li},"Login")))))})),x=n(12),C=n.n(x),H=Object(d.a)((function(){var e=g();var a=r.a.createElement("div",{className:C.a.Backdrop,onClick:Object(m.b)((function(){e.Set_SideBar_Status()}))});return r.a.createElement(t.Fragment,null,e.SideBarStatus?a:null)}));Object(m.d)({enforceActions:"observed"});var y=function(e){function a(){return Object(o.a)(this,a),Object(s.a)(this,Object(_.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(t.Fragment,null,r.a.createElement("div",{className:"App"},r.a.createElement(E,null,r.a.createElement(H,null),r.a.createElement(j,null),r.a.createElement(I,null),r.a.createElement(O,null))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[15,1,2]]]);
//# sourceMappingURL=main.e3af96ca.chunk.js.map