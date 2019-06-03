(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{231:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("Creates a Redux "),s("router-link",{attrs:{to:"./Store.html"}},[t._v("store")]),t._v(" that holds the complete state tree of your app."),s("br"),t._v("\nThere should only be a single store in your app.")],1),t._v(" "),t._m(1),t._v(" "),s("ol",[s("li",[s("p",[s("code",[t._v("reducer")]),t._v(" "),s("em",[t._v("(Function)")]),t._v(": A "),s("router-link",{attrs:{to:"./../Glossary.html#reducer"}},[t._v("reducing function")]),t._v(" that returns the next "),s("router-link",{attrs:{to:"./../Glossary.html#state"}},[t._v("state tree")]),t._v(", given the current state tree and an "),s("router-link",{attrs:{to:"./../Glossary.html#action"}},[t._v("action")]),t._v(" to handle.")],1)]),t._v(" "),s("li",[s("p",[t._v("["),s("code",[t._v("preloadedState")]),t._v("] "),s("em",[t._v("(any)")]),t._v(": The initial state. You may optionally specify it to hydrate the state from the server in universal apps, or to restore a previously serialized user session. If you produced "),s("code",[t._v("reducer")]),t._v(" with "),s("router-link",{attrs:{to:"./combineReducers.html"}},[s("code",[t._v("combineReducers")])]),t._v(", this must be a plain object with the same shape as the keys passed to it. Otherwise, you are free to pass anything that your "),s("code",[t._v("reducer")]),t._v(" can understand.")],1)]),t._v(" "),s("li",[s("p",[t._v("["),s("code",[t._v("enhancer")]),t._v("] "),s("em",[t._v("(Function)")]),t._v(": The store enhancer. You may optionally specify it to enhance the store with third-party capabilities such as middleware, time travel, persistence, etc. The only store enhancer that ships with Redux is "),s("router-link",{attrs:{to:"./applyMiddleware.html"}},[s("code",[t._v("applyMiddleware()")])]),t._v(".")],1)])]),t._v(" "),t._m(2),t._v(" "),s("p",[t._v("("),s("router-link",{attrs:{to:"./Store.html"}},[s("em",[s("code",[t._v("Store")])])]),t._v("): An object that holds the complete state of your app. The only way to change its state is by "),s("router-link",{attrs:{to:"./Store.html#dispatch"}},[t._v("dispatching actions")]),t._v(". You may also "),s("router-link",{attrs:{to:"./Store.html#subscribe"}},[t._v("subscribe")]),t._v(" to the changes to its state to update the UI.")],1),t._v(" "),t._m(3),t._v(" "),t._m(4),t._m(5),t._v(" "),s("ul",[s("li",[s("p",[t._v("Don't create more than one store in an application! Instead, use "),s("router-link",{attrs:{to:"./combineReducers.html"}},[s("code",[t._v("combineReducers")])]),t._v(" to create a single root reducer out of many.")],1)]),t._v(" "),s("li",[s("p",[t._v("It is up to you to choose the state format. You can use plain objects or something like "),s("a",{attrs:{href:"http://facebook.github.io/immutable-js/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Immutable"),s("OutboundLink")],1),t._v(". If you're not sure, start with plain objects.")])]),t._v(" "),s("li",[s("p",[t._v("If your state is a plain object, make sure you never mutate it! For example, instead of returning something like "),s("code",[t._v("Object.assign(state, newData)")]),t._v(" from your reducers, return "),s("code",[t._v("Object.assign({}, state, newData)")]),t._v(". This way you don't override the previous "),s("code",[t._v("state")]),t._v(". You can also write "),s("code",[t._v("return { ...state, ...newData }")]),t._v(" if you enable the "),s("router-link",{attrs:{to:"./../recipes/UsingObjectSpreadOperator.html"}},[t._v("object spread operator proposal")]),t._v(".")],1)]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),s("li",[s("p",[t._v("To apply multiple store enhancers, you may use "),s("router-link",{attrs:{to:"./compose.html"}},[s("code",[t._v("compose()")])]),t._v(".")],1)])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"createstore-reducer-preloadedstate-enhancer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#createstore-reducer-preloadedstate-enhancer","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v("createStore(reducer, [preloadedState], [enhancer])")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"arguments"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#arguments","aria-hidden":"true"}},[this._v("#")]),this._v(" Arguments")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"returns"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[this._v("#")]),this._v(" Returns")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[this._v("#")]),this._v(" Example")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" createStore "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'redux'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("todos")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("state "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" action")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("action"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ADD_TODO'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("concat")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("action"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" state\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" store "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createStore")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("todos"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Use Redux'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nstore"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dispatch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ADD_TODO'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Read the docs'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("store"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getState")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// [ 'Use Redux', 'Read the docs' ]")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"tips"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tips","aria-hidden":"true"}},[this._v("#")]),this._v(" Tips")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("For universal apps that run on the server, create a store instance with every request so that they are isolated. Dispatch a few data fetching actions to a store instance and wait for them to complete before rendering the app on the server.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("When a store is created, Redux dispatches a dummy action to your reducer to populate the store with the initial state. You are not meant to handle the dummy action directly. Just remember that your reducer should return some kind of initial state if the state given to it as the first argument is "),e("code",[this._v("undefined")]),this._v(", and you're all set.")])])}],!1,null,null,null);e.default=n.exports}}]);