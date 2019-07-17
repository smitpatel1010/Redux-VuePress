(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{207:function(t,e,a){"use strict";a.r(e);var s=a(0),n=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("This is a glossary of the core terms in Redux, along with their type signatures. The types are documented using "),a("a",{attrs:{href:"http://flowtype.org/docs/quick-reference.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Flow notation"),a("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(1),t._v(" "),t._m(2),a("p",[a("em",[t._v("State")]),t._v(" (also called the "),a("em",[t._v("state tree")]),t._v(") is a broad term, but in the Redux API it usually refers to the single state value that is managed by the store and returned by "),a("router-link",{attrs:{to:"./api/Store.html#getState"}},[a("code",[t._v("getState()")])]),t._v(". It represents the entire state of a Redux application, which is often a deeply nested object.")],1),t._v(" "),a("p",[t._v("By convention, the top-level state is an object or some other key-value collection like a Map, but technically it can be any type. Still, you should do your best to keep the state serializable. Don't put anything inside it that you can't easily turn into JSON.")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._m(5),t._v(" "),a("p",[t._v("Actions must have a "),a("code",[t._v("type")]),t._v(" field that indicates the type of action being performed. Types can be defined as constants and imported from another module. It's better to use strings for "),a("code",[t._v("type")]),t._v(" than "),a("a",{attrs:{href:"https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Symbol",target:"_blank",rel:"noopener noreferrer"}},[t._v("Symbols"),a("OutboundLink")],1),t._v(" because strings are serializable.")]),t._v(" "),a("p",[t._v("Other than "),a("code",[t._v("type")]),t._v(", the structure of an action object is really up to you. If you're interested, check out "),a("a",{attrs:{href:"https://github.com/acdlite/flux-standard-action",target:"_blank",rel:"noopener noreferrer"}},[t._v("Flux Standard Action"),a("OutboundLink")],1),t._v(" for recommendations on how actions should be constructed.")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._m(9),t._v(" "),a("p",[t._v("Reducers are not unique to Redux—they are a fundamental concept in functional programming. Even most non-functional languages, like JavaScript, have a built-in API for reducing. In JavaScript, it's "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("Array.prototype.reduce()")]),a("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(10),t._v(" "),a("p",[t._v("Reducers are the most important concept in Redux.")]),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._m(14),t._v(" "),a("p",[t._v("We must distinguish between dispatching functions in general and the base "),a("router-link",{attrs:{to:"./api/Store.html#dispatch"}},[a("code",[t._v("dispatch")])]),t._v(" function provided by the store instance without any middleware.")],1),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._m(19),t._v(" "),a("p",[t._v("Calling an action creator only produces an action, but does not dispatch it. You need to call the store's "),a("router-link",{attrs:{to:"./api/Store.html#dispatch"}},[a("code",[t._v("dispatch")])]),t._v(" function to actually cause the mutation. Sometimes we say "),a("em",[t._v("bound action creators")]),t._v(" to mean functions that call an action creator and immediately dispatch its result to a specific store instance.")],1),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),a("p",[t._v("An "),a("em",[t._v("async action")]),t._v(" is a value that is sent to a dispatching function, but is not yet ready for consumption by the reducer. It will be transformed by "),a("a",{attrs:{href:"#middleware"}},[t._v("middleware")]),t._v(" into an action (or a series of actions) before being sent to the base "),a("router-link",{attrs:{to:"./api/Store.html#dispatch"}},[a("code",[t._v("dispatch()")])]),t._v(" function. Async actions may have different types, depending on the middleware you use. They are often asynchronous primitives, like a Promise or a thunk, which are not passed to the reducer immediately, but trigger action dispatches once an operation has completed.")],1),t._v(" "),t._m(23),t._v(" "),t._m(24),t._m(25),t._v(" "),a("p",[t._v("Middleware is composable using function composition. It is useful for logging actions, performing side effects like routing, or turning an asynchronous API call into a series of synchronous actions.")]),t._v(" "),a("p",[t._v("See "),a("router-link",{attrs:{to:"./api/applyMiddleware.html"}},[a("code",[t._v("applyMiddleware(...middlewares)")])]),t._v(" for a detailed look at middleware.")],1),t._v(" "),t._m(26),t._v(" "),t._m(27),t._m(28),t._v(" "),a("ul",[a("li",[a("router-link",{attrs:{to:"./api/Store.html#dispatch"}},[a("code",[t._v("dispatch(action)")])]),t._v(" is the base dispatch function described above.")],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"./api/Store.html#getState"}},[a("code",[t._v("getState()")])]),t._v(" returns the current state of the store.")],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"./api/Store.html#subscribe"}},[a("code",[t._v("subscribe(listener)")])]),t._v(" registers a function to be called on state changes.")],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"./api/Store.html#replaceReducer"}},[a("code",[t._v("replaceReducer(nextReducer)")])]),t._v(" can be used to implement hot reloading and code splitting. Most likely you won't use it.")],1)]),t._v(" "),a("p",[t._v("See the complete "),a("router-link",{attrs:{to:"./api/Store.html#dispatch"}},[t._v("store API reference")]),t._v(" for more details.")],1),t._v(" "),t._m(29),t._v(" "),t._m(30),a("p",[t._v("A store creator is a function that creates a Redux store. Like with dispatching function, we must distinguish the base store creator, "),a("router-link",{attrs:{to:"./api/createStore.html"}},[a("code",[t._v("createStore(reducer, preloadedState)")])]),t._v(" exported from the Redux package, from store creators that are returned from the store enhancers.")],1),t._v(" "),t._m(31),t._v(" "),t._m(32),a("p",[t._v("A store enhancer is a higher-order function that composes a store creator to return a new, enhanced store creator. This is similar to middleware in that it allows you to alter the store interface in a composable way.")]),t._v(" "),a("p",[t._v("Store enhancers are much the same concept as higher-order components in React, which are also occasionally called “component enhancers”.")]),t._v(" "),a("p",[t._v("Because a store is not an instance, but rather a plain-object collection of functions, copies can be easily created and modified without mutating the original store. There is an example in "),a("router-link",{attrs:{to:"./api/compose.html"}},[a("code",[t._v("compose")])]),t._v(" documentation demonstrating that.")],1),t._v(" "),a("p",[t._v("Most likely you'll never write a store enhancer, but you may use the one provided by the "),a("a",{attrs:{href:"https://github.com/reduxjs/redux-devtools",target:"_blank",rel:"noopener noreferrer"}},[t._v("developer tools"),a("OutboundLink")],1),t._v(". It is what makes time travel possible without the app being aware it is happening. Amusingly, the "),a("router-link",{attrs:{to:"./api/applyMiddleware.html"}},[t._v("Redux middleware implementation")]),t._v(" is itself a store enhancer.")],1)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"glossary"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#glossary","aria-hidden":"true"}},[this._v("#")]),this._v(" Glossary")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"state"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#state","aria-hidden":"true"}},[this._v("#")]),this._v(" State")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[this._v("type State "),e("span",{pre:!0,attrs:{class:"token operator"}},[this._v("=")]),this._v(" any\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"action"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#action","aria-hidden":"true"}},[this._v("#")]),this._v(" Action")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[this._v("type Action "),e("span",{pre:!0,attrs:{class:"token operator"}},[this._v("=")]),this._v(" Object\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("An "),e("em",[this._v("action")]),this._v(" is a plain object that represents an intention to change the state. Actions are the only way to get data into the store. Any data, whether from UI events, network callbacks, or other sources such as WebSockets needs to eventually be dispatched as actions.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("See also "),e("a",{attrs:{href:"#async-action"}},[this._v("async action")]),this._v(" below.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"reducer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#reducer","aria-hidden":"true"}},[this._v("#")]),this._v(" Reducer")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("type Reducer"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("S")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("S")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" action"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("S")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("A "),e("em",[this._v("reducer")]),this._v(" (also called a "),e("em",[this._v("reducing function")]),this._v(") is a function that accepts an accumulation and a value and returns a new accumulation. They are used to reduce a collection of values down to a single value.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("In Redux, the accumulated value is the state object, and the values being accumulated are actions. Reducers calculate a new state given the previous state and an action. They must be "),e("em",[this._v("pure functions")]),this._v("—functions that return the exact same output for given inputs. They should also be free of side-effects. This is what enables exciting features like hot reloading and time travel.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("em",[this._v("Do not put API calls into reducers.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"dispatching-function"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dispatching-function","aria-hidden":"true"}},[this._v("#")]),this._v(" Dispatching Function")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("type "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("BaseDispatch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Action")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" Action\ntype "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("Dispatch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Action "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" AsyncAction")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" any\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("A "),e("em",[this._v("dispatching function")]),this._v(" (or simply "),e("em",[this._v("dispatch function")]),this._v(") is a function that accepts an action or an "),e("a",{attrs:{href:"#async-action"}},[this._v("async action")]),this._v("; it then may or may not dispatch one or more actions to the store.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The base dispatch function "),e("em",[this._v("always")]),this._v(" synchronously sends an action to the store's reducer, along with the previous state returned by the store, to calculate a new state. It expects actions to be plain objects ready to be consumed by the reducer.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("a",{attrs:{href:"#middleware"}},[this._v("Middleware")]),this._v(" wraps the base dispatch function. It allows the dispatch function to handle "),e("a",{attrs:{href:"#async-action"}},[this._v("async actions")]),this._v(" in addition to actions. Middleware may transform, delay, ignore, or otherwise interpret actions or async actions before passing them to the next middleware. See below for more information.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"action-creator"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#action-creator","aria-hidden":"true"}},[this._v("#")]),this._v(" Action Creator")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("type "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("ActionCreator")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" Action "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" AsyncAction\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("An "),e("em",[this._v("action creator")]),this._v(" is, quite simply, a function that creates an action. Do not confuse the two terms—again, an action is a payload of information, and an action creator is a factory that creates an action.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("If an action creator needs to read the current state, perform an API call, or cause a side effect, like a routing transition, it should return an "),e("a",{attrs:{href:"#async-action"}},[this._v("async action")]),this._v(" instead of an action.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"async-action"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#async-action","aria-hidden":"true"}},[this._v("#")]),this._v(" Async Action")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[this._v("type AsyncAction "),e("span",{pre:!0,attrs:{class:"token operator"}},[this._v("=")]),this._v(" any\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"middleware"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#middleware","aria-hidden":"true"}},[this._v("#")]),this._v(" Middleware")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("type MiddlewareAPI "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" dispatch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Dispatch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("getState")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" State "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\ntype "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("Middleware")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" MiddlewareAPI")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Dispatch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" Dispatch\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("A middleware is a higher-order function that composes a "),e("a",{attrs:{href:"#dispatching-function"}},[this._v("dispatch function")]),this._v(" to return a new dispatch function. It often turns "),e("a",{attrs:{href:"#async-action"}},[this._v("async actions")]),this._v(" into actions.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"store"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#store","aria-hidden":"true"}},[this._v("#")]),this._v(" Store")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("type Store "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  dispatch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Dispatch\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("getState")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" State\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("subscribe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("listener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("replaceReducer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("reducer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Reducer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("A store is an object that holds the application's state tree."),e("br"),this._v("\nThere should only be a single store in a Redux app, as the composition happens on the reducer level.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"store-creator"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#store-creator","aria-hidden":"true"}},[this._v("#")]),this._v(" Store creator")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("type "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("StoreCreator")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("reducer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Reducer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" preloadedState"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("State")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" Store\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"store-enhancer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#store-enhancer","aria-hidden":"true"}},[this._v("#")]),this._v(" Store enhancer")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("type "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("StoreEnhancer")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" StoreCreator")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" StoreCreator\n")])])])}],!1,null,null,null);e.default=n.exports}}]);