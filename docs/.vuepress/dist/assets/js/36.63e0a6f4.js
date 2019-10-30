(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{214:function(e,t,r){"use strict";r.r(t);var a=r(0),n=Object(a.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),r("p",[e._v("While there's no single definitive answer to this, most of the time this should not be a concern in either case.")]),e._v(" "),e._m(5),e._v(" "),r("p",[e._v("Redux may not be as efficient out of the box when compared to other libraries. For maximum rendering performance in a React application, state should be stored in a normalized shape, many individual components should be connected to the store instead of just a few, and connected list components should pass item IDs to their connected child list items (allowing the list items to look up their own data by ID). This minimizes the overall amount of rendering to be done. Use of memoized selector functions is also an important performance consideration.")]),e._v(" "),r("p",[e._v("As for architecture, anecdotal evidence is that Redux works well for varying project and team sizes. Redux is currently used by hundreds of companies and thousands of developers, with several hundred thousand monthly installations from NPM. One developer reported:")]),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),r("ul",[r("li",[r("router-link",{attrs:{to:"./../recipes/structuring-reducers/NormalizingStateShape.html"}},[e._v("Recipes: Structuring Reducers - Normalizing State Shape")])],1)]),e._v(" "),e._m(9),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.smashingmagazine.com/2016/09/how-to-scale-react-applications/",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to Scale React Applications"),r("OutboundLink")],1),e._v(" (accompanying talk: "),r("a",{attrs:{href:"https://vimeo.com/168648012",target:"_blank",rel:"noopener noreferrer"}},[e._v("Scaling React Applications"),r("OutboundLink")],1),e._v(")")]),e._v(" "),r("li",[r("a",{attrs:{href:"http://somebody32.github.io/high-performance-redux/",target:"_blank",rel:"noopener noreferrer"}},[e._v("High-Performance Redux"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"http://blog.rangle.io/react-and-redux-performance-with-reselect/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Improving React and Redux Perf with Reselect"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"http://randycoulman.com/blog/2016/09/13/encapsulating-the-redux-state-tree/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Encapsulating the Redux State Tree"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/markerikson/react-redux-links/blob/master/react-performance.md#redux-performance",target:"_blank",rel:"noopener noreferrer"}},[e._v("React/Redux Links: Performance - Redux"),r("OutboundLink")],1)])]),e._v(" "),e._m(10),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/reduxjs/redux/issues/310",target:"_blank",rel:"noopener noreferrer"}},[e._v("#310: Who uses Redux?"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/reduxjs/redux/issues/1751",target:"_blank",rel:"noopener noreferrer"}},[e._v("#1751: Performance issues with large collections"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/reduxjs/react-redux/issues/269",target:"_blank",rel:"noopener noreferrer"}},[e._v("React Redux #269: Connect could be used with a custom subscribe method"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/reduxjs/react-redux/issues/407",target:"_blank",rel:"noopener noreferrer"}},[e._v("React Redux #407: Rewrite connect to offer an advanced API"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/reduxjs/react-redux/pull/416",target:"_blank",rel:"noopener noreferrer"}},[e._v("React Redux #416: Rewrite connect for better performance and extensibility"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/mweststrate/redux-todomvc/pull/1",target:"_blank",rel:"noopener noreferrer"}},[e._v("Redux vs MobX TodoMVC Benchmark: #1"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.reddit.com/r/reactjs/comments/47m9h5/whats_the_best_place_to_keep_the_initial_state/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Reddit: What's the best place to keep the initial state?"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.reddit.com/r/reactjs/comments/48k852/help_designing_redux_state_for_a_single_page/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Reddit: Help designing Redux state for a single page app"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.reddit.com/r/reactjs/comments/41wdqn/redux_performance_issues_with_a_large_state_object/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Reddit: Redux performance issues with a large state object?"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.reddit.com/r/javascript/comments/49box8/reactredux_for_ultra_large_scale_apps/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Reddit: React/Redux for Ultra Large Scale apps"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://twitter.com/NickPresta/status/684058236828266496",target:"_blank",rel:"noopener noreferrer"}},[e._v("Twitter: Redux scaling"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://twitter.com/dan_abramov/status/720219615041859584",target:"_blank",rel:"noopener noreferrer"}},[e._v("Twitter: Redux vs MobX benchmark graph - Redux state shape matters"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"http://stackoverflow.com/questions/37264415/how-to-optimize-small-updates-to-props-of-nested-component-in-react-redux",target:"_blank",rel:"noopener noreferrer"}},[e._v("Stack Overflow: How to optimize small updates to props of nested components?"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://gist.github.com/markerikson/53735e4eb151bc228d6685eab00f5f85",target:"_blank",rel:"noopener noreferrer"}},[e._v("Chat log: React/Redux perf - updating a 10K-item Todo list"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://gist.github.com/markerikson/6056565dd65d1232784bf42b65f8b2ad",target:"_blank",rel:"noopener noreferrer"}},[e._v("Chat log: React/Redux perf - single connection vs many connections"),r("OutboundLink")],1)])]),e._v(" "),e._m(11),e._v(" "),r("p",[e._v("It's important to note that a Redux store really only has a single reducer function. The store passes the current state and dispatched action to that one reducer function, and lets the reducer handle things appropriately.")]),e._v(" "),e._m(12),e._v(" "),e._m(13),e._v(" "),r("p",[e._v("If you actually are concerned about reducer performance, you can use a utility such as "),r("a",{attrs:{href:"https://github.com/omnidan/redux-ignore",target:"_blank",rel:"noopener noreferrer"}},[e._v("redux-ignore"),r("OutboundLink")],1),e._v(" or "),r("a",{attrs:{href:"https://github.com/chrisdavies/reduxr-scoped-reducer",target:"_blank",rel:"noopener noreferrer"}},[e._v("reduxr-scoped-reducer"),r("OutboundLink")],1),e._v(" to ensure that only certain reducers listen to specific actions. You can also use "),r("a",{attrs:{href:"https://github.com/michaelcontento/redux-log-slow-reducers",target:"_blank",rel:"noopener noreferrer"}},[e._v("redux-log-slow-reducers"),r("OutboundLink")],1),e._v(" to do some performance benchmarking.")]),e._v(" "),e._m(14),e._v(" "),e._m(15),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/reduxjs/redux/issues/912",target:"_blank",rel:"noopener noreferrer"}},[e._v("#912: Proposal: action filter utility"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/reduxjs/redux/issues/1303",target:"_blank",rel:"noopener noreferrer"}},[e._v("#1303: Redux Performance with Large Store and frequent updates"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"http://stackoverflow.com/questions/35667775/state-in-redux-react-app-has-a-property-with-the-name-of-the-reducer/35674297",target:"_blank",rel:"noopener noreferrer"}},[e._v("Stack Overflow: State in Redux app has the name of the reducer"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"http://stackoverflow.com/questions/34494866/how-does-redux-deals-with-deeply-nested-models/34495397",target:"_blank",rel:"noopener noreferrer"}},[e._v("Stack Overflow: How does Redux deal with deeply nested models?"),r("OutboundLink")],1)])]),e._v(" "),e._m(16),e._v(" "),r("p",[e._v("Immutably updating state generally means making shallow copies, not deep copies. Shallow copies are much faster than deep copies, because fewer objects and fields have to be copied, and it effectively comes down to moving some pointers around.")]),e._v(" "),e._m(17),e._v(" "),e._m(18),e._v(" "),e._m(19),e._v(" "),e._m(20),e._v(" "),e._m(21),e._v(" "),r("ul",[r("li",[r("router-link",{attrs:{to:"./../recipes/structuring-reducers/PrerequisiteConcepts.html"}},[e._v("Recipes: Structuring Reducers - Prerequisite Concepts")])],1),e._v(" "),r("li",[r("router-link",{attrs:{to:"./../recipes/structuring-reducers/ImmutableUpdatePatterns.html"}},[e._v("Recipes: Structuring Reducers - Immutable Update Patterns")])],1)]),e._v(" "),e._m(22),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/reduxjs/redux/issues/454",target:"_blank",rel:"noopener noreferrer"}},[e._v("#454: Handling big states in reducer"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/reduxjs/redux/issues/758",target:"_blank",rel:"noopener noreferrer"}},[e._v("#758: Why can't state be mutated?"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/reduxjs/redux/issues/994",target:"_blank",rel:"noopener noreferrer"}},[e._v("#994: How to cut the boilerplate when updating nested entities?"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://twitter.com/dan_abramov/status/688087202312491008",target:"_blank",rel:"noopener noreferrer"}},[e._v("Twitter: common misconception - deep cloning"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"http://www.zsoltnagy.eu/cloning-objects-in-javascript/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cloning Objects in JavaScript"),r("OutboundLink")],1)])]),e._v(" "),e._m(23),e._v(" "),r("p",[e._v("Redux notifies subscribers after each successfully dispatched action (i.e. an action reached the store and was handled by reducers). In some cases, it may be useful to cut down on the number of times subscribers are called, particularly if an action creator dispatches multiple distinct actions in a row.")]),e._v(" "),r("p",[e._v("If you use React, note that you can improve performance of multiple synchronous dispatches by wrapping them in "),r("code",[e._v("ReactDOM.unstable_batchedUpdates()")]),e._v(", but this API is experimental and may be removed in any React release so don't rely on it too heavily. Take a look at "),r("a",{attrs:{href:"https://github.com/tshelburne/redux-batched-actions",target:"_blank",rel:"noopener noreferrer"}},[e._v("redux-batched-actions"),r("OutboundLink")],1),e._v(" (a higher-order reducer that lets you dispatch several actions as if it was one and “unpack” them in the reducer), "),r("a",{attrs:{href:"https://github.com/tappleby/redux-batched-subscribe",target:"_blank",rel:"noopener noreferrer"}},[e._v("redux-batched-subscribe"),r("OutboundLink")],1),e._v(" (a store enhancer that lets you debounce subscriber calls for multiple dispatches), or "),r("a",{attrs:{href:"https://github.com/manaflair/redux-batch",target:"_blank",rel:"noopener noreferrer"}},[e._v("redux-batch"),r("OutboundLink")],1),e._v(" (a store enhancer that handles dispatching an array of actions with a single subscriber notification).")]),e._v(" "),e._m(24),e._v(" "),e._m(25),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/reduxjs/redux/issues/125",target:"_blank",rel:"noopener noreferrer"}},[e._v("#125: Strategy for avoiding cascading renders"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/reduxjs/redux/issues/542",target:"_blank",rel:"noopener noreferrer"}},[e._v("#542: Idea: batching actions"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/reduxjs/redux/issues/911",target:"_blank",rel:"noopener noreferrer"}},[e._v("#911: Batching actions"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/reduxjs/redux/pull/1813",target:"_blank",rel:"noopener noreferrer"}},[e._v("#1813: Use a loop to support dispatching arrays"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/reduxjs/react-redux/issues/263",target:"_blank",rel:"noopener noreferrer"}},[e._v("React Redux #263: Huge performance issue when dispatching hundreds of actions"),r("OutboundLink")],1)])]),e._v(" "),e._m(26),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/markerikson/redux-ecosystem-links/blob/master/store.md#store-change-subscriptions",target:"_blank",rel:"noopener noreferrer"}},[e._v("Redux Addons Catalog: Store - Change Subscriptions"),r("OutboundLink")],1)])]),e._v(" "),e._m(27),e._v(" "),e._m(28),e._v(" "),r("p",[e._v("Redux does not store a history of actions itself. However, the Redux DevTools do store actions so they can be replayed, but those are generally only enabled during development, and not used in production.")]),e._v(" "),e._m(29),e._v(" "),e._m(30),e._v(" "),r("ul",[r("li",[r("router-link",{attrs:{to:"./../advanced/AsyncActions.html"}},[e._v("Docs: Async Actions")])],1)]),e._v(" "),e._m(31),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"http://stackoverflow.com/questions/35627553/is-there-any-way-to-commit-the-state-in-redux-to-free-memory/35634004",target:"_blank",rel:"noopener noreferrer"}},[e._v('Stack Overflow: Is there any way to "commit" the state in Redux to free memory?'),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://stackoverflow.com/questions/39943762/can-a-redux-store-lead-to-a-memory-leak/40549594#40549594",target:"_blank",rel:"noopener noreferrer"}},[e._v("Stack Overflow: Can a Redux store lead to a memory leak?"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://stackoverflow.com/questions/42489557/redux-and-all-the-application-state/42491766#42491766",target:"_blank",rel:"noopener noreferrer"}},[e._v("Stack Overflow: Redux and ALL the application state"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://stackoverflow.com/questions/44956071/memory-usage-concern-with-controlled-components?noredirect=1&lq=1",target:"_blank",rel:"noopener noreferrer"}},[e._v("Stack Overflow: Memory Usage Concern with Controlled Components"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.reddit.com/r/reactjs/comments/47m9h5/whats_the_best_place_to_keep_the_initial_state/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Reddit: What's the best place to keep initial state?"),r("OutboundLink")],1)])]),e._v(" "),e._m(32),e._v(" "),r("p",[e._v("The amount of memory available to JavaScript applications running in a browser is finite. Caching data will cause performance problems when the size of the cache approaches the amount of available memory. This tends to be a problem when the cached data is exceptionally large or the session is exceptionally long-running. And while it is good to be aware of the potential for these problems, this awareness should not discourage you from efficiently caching reasonable amounts of data.")]),e._v(" "),r("p",[e._v("Here are a few approaches to caching remote data efficiently:")]),e._v(" "),r("p",[e._v("First, only cache as much data as the user needs. If your application displays a paginated list of records, you don't necessarily need to cache the entire collection. Instead, cache what is visible to the user and add to that cache when the user has (or will soon have) an immediate need for more data.")]),e._v(" "),r("p",[e._v("Second, cache an abbreviated form of a record when possible. Sometimes a record includes data that is not relevant to the user. If the application does not depend on this data, it can be omitted from the cache.")]),e._v(" "),r("p",[e._v("Third, only cache a single copy of a record. This is especially important when records contain copies of other records. Cache a unique copy for each record and replace each nested copy with a reference. This is called normalization. Normalization is the preferred approach to storing relational data for "),r("router-link",{attrs:{to:"./../recipes/reducers/NormalizingStateShape.html#designing-a-normalized-state"}},[e._v("several reasons")]),e._v(", including efficient memory consumption.")],1),e._v(" "),e._m(33),e._v(" "),e._m(34),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://stackoverflow.com/questions/33940015/how-to-choose-the-redux-state-shape-for-an-app-with-list-detail-views-and-pagina",target:"_blank",rel:"noopener noreferrer"}},[e._v("Stack Overflow: How to choose the Redux state shape for an app with list/detail views and pagination?"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://twitter.com/acemarke/status/804071531844423683",target:"_blank",rel:"noopener noreferrer"}},[e._v('Twitter: ...concerns over having "too much data in the state tree"...'),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://medium.com/@dcousineau/advanced-redux-entity-normalization-f5f1fe2aefc5",target:"_blank",rel:"noopener noreferrer"}},[e._v("Advanced Redux entity normalization"),r("OutboundLink")],1)])])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"redux-faq-performance"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redux-faq-performance","aria-hidden":"true"}},[this._v("#")]),this._v(" Redux FAQ: Performance")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"table-of-contents"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#table-of-contents","aria-hidden":"true"}},[this._v("#")]),this._v(" Table of Contents")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"#how-well-does-redux-scale-in-terms-of-performance-and-architecture"}},[e._v("How well does Redux “scale” in terms of performance and architecture?")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#won-t-calling-all-my-reducers-for-each-action-be-slow"}},[e._v("Won't calling “all my reducers” for each action be slow?")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#do-i-have-to-deep-clone-my-state-in-a-reducer-isnt-copying-my-state-going-to-be-slow"}},[e._v("Do I have to deep-clone my state in a reducer? Isn't copying my state going to be slow?")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#how-can-i-reduce-the-number-of-store-update-events"}},[e._v("How can I reduce the number of store update events?")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#will-having-one-state-tree-cause-memory-problems-will-dispatching-many-actions-take-up-memory"}},[e._v("Will having “one state tree” cause memory problems? Will dispatching many actions take up memory?")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#will-caching-remote-data-cause-memory-problems"}},[e._v("Will caching remote data cause memory problems?")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"performance"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#performance","aria-hidden":"true"}},[this._v("#")]),this._v(" Performance")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"how-well-does-redux-“scale”-in-terms-of-performance-and-architecture"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-well-does-redux-“scale”-in-terms-of-performance-and-architecture","aria-hidden":"true"}},[this._v("#")]),this._v(" How well does Redux “scale” in terms of performance and architecture?")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The work done by Redux generally falls into a few areas: processing actions in middleware and reducers (including object duplication for immutable updates), notifying subscribers after actions are dispatched, and updating UI components based on the state changes. While it's certainly "),t("em",[this._v("possible")]),this._v(" for each of these to become a performance concern in sufficiently complex situations, there's nothing inherently slow or inefficient about how Redux is implemented. In fact, React Redux in particular is heavily optimized to cut down on unnecessary re-renders, and React-Redux v5 shows noticeable improvements over earlier versions.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("for scale, we have ~500 action types, ~400 reducer cases, ~150 components, 5 middlewares, ~200 actions, ~2300 tests")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"further-information"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#further-information","aria-hidden":"true"}},[this._v("#")]),this._v(" Further information")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Documentation")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Articles")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Discussions")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"won-t-calling-“all-my-reducers”-for-each-action-be-slow"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#won-t-calling-“all-my-reducers”-for-each-action-be-slow","aria-hidden":"true"}},[this._v("#")]),this._v(" Won't calling “all my reducers” for each action be slow?")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Obviously, trying to handle every possible action in a single function does not scale well, simply in terms of function size and readability, so it makes sense to split the actual work into separate functions that can be called by the top-level reducer. In particular, the common suggested pattern is to have a separate sub-reducer function that is responsible for managing updates to a particular slice of state at a specific key. The "),t("code",[this._v("combineReducers()")]),this._v(" that comes with Redux is one of the many possible ways to achieve this. It's also highly suggested to keep your store state as flat and as normalized as possible. Ultimately, though, you are in charge of organizing your reducer logic any way you want.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("However, even if you happen to have many different reducer functions composed together, and even with deeply nested state, reducer speed is unlikely to be a problem. JavaScript engines are capable of running a very large number of function calls per second, and most of your reducers are probably just using a "),t("code",[this._v("switch")]),this._v(" statement and returning the existing state by default in response to most actions.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"further-information-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#further-information-2","aria-hidden":"true"}},[this._v("#")]),this._v(" Further information")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Discussions")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"do-i-have-to-deep-clone-my-state-in-a-reducer-isn-t-copying-my-state-going-to-be-slow"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#do-i-have-to-deep-clone-my-state-in-a-reducer-isn-t-copying-my-state-going-to-be-slow","aria-hidden":"true"}},[this._v("#")]),this._v(" Do I have to deep-clone my state in a reducer? Isn't copying my state going to be slow?")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("In addition, deep cloning state creates new references for every field. Since the React-Redux "),t("code",[this._v("connect")]),this._v(" function relies on reference comparisons to determine if data has changed, this means that UI components will be forced to re-render unnecessarily even though the other data hasn't meaningfully changed.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("However, you "),t("em",[this._v("do")]),this._v(" need to create a copied and updated object for each level of nesting that is affected. Although that shouldn't be particularly expensive, it's another good reason why you should keep your state normalized and shallow if possible.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("Common Redux misconception: you need to deeply clone the state. Reality: if something inside doesn't change, keep its reference the same!")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"further-information-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#further-information-3","aria-hidden":"true"}},[this._v("#")]),this._v(" Further information")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Documentation")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Discussions")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"how-can-i-reduce-the-number-of-store-update-events"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-can-i-reduce-the-number-of-store-update-events","aria-hidden":"true"}},[this._v("#")]),this._v(" How can I reduce the number of store update events?")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"further-information-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#further-information-4","aria-hidden":"true"}},[this._v("#")]),this._v(" Further information")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Discussions")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Libraries")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"will-having-“one-state-tree”-cause-memory-problems-will-dispatching-many-actions-take-up-memory"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#will-having-“one-state-tree”-cause-memory-problems-will-dispatching-many-actions-take-up-memory","aria-hidden":"true"}},[this._v("#")]),this._v(" Will having “one state tree” cause memory problems? Will dispatching many actions take up memory?")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("First, in terms of raw memory usage, Redux is no different than any other JavaScript library. The only difference is that all the various object references are nested together into one tree, instead of maybe saved in various independent model instances such as in Backbone. Second, a typical Redux app would probably have somewhat "),t("em",[this._v("less")]),this._v(" memory usage than an equivalent Backbone app because Redux encourages use of plain JavaScript objects and arrays rather than creating instances of Models and Collections. Finally, Redux only holds onto a single state tree reference at a time. Objects that are no longer referenced in that tree will be garbage collected, as usual.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"further-information-5"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#further-information-5","aria-hidden":"true"}},[this._v("#")]),this._v(" Further information")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Documentation")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Discussions")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"will-caching-remote-data-cause-memory-problems"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#will-caching-remote-data-cause-memory-problems","aria-hidden":"true"}},[this._v("#")]),this._v(" Will caching remote data cause memory problems?")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"further-information-6"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#further-information-6","aria-hidden":"true"}},[this._v("#")]),this._v(" Further information")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Discussions")])])}],!1,null,null,null);t.default=n.exports}}]);