"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"2c5ac64e6d9c\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzP2U1OWUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCIyYzVhYzY0ZTZkOWNcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/util/useClient.ts":
/*!*******************************!*\
  !*** ./app/util/useClient.ts ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"(app-pages-browser)/./node_modules/@apollo/client/link/http/createHttpLink.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"(app-pages-browser)/./node_modules/@apollo/client/core/ApolloClient.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"(app-pages-browser)/./node_modules/@apollo/client/cache/inmemory/inMemoryCache.js\");\n/* harmony import */ var _apollo_client_link_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client/link/context */ \"(app-pages-browser)/./node_modules/@apollo/client/link/context/index.js\");\n\n\nconst useClient = ()=>{\n    const authLink = (0,_apollo_client_link_context__WEBPACK_IMPORTED_MODULE_0__.setContext)(async (_, param)=>{\n        let { headers } = param;\n        return {\n            headers: {\n                ...headers\n            }\n        };\n    });\n    const httpLink = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.createHttpLink)({\n        uri: \"https://spacex-production.up.railway.app/api/graphql\"\n    });\n    const client = new _apollo_client__WEBPACK_IMPORTED_MODULE_2__.ApolloClient({\n        name: \"next-website\",\n        cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_3__.InMemoryCache(),\n        link: authLink.concat(httpLink)\n    });\n    return client;\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (useClient);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC91dGlsL3VzZUNsaWVudC50cyIsIm1hcHBpbmdzIjoiOzs7OztBQUt3QjtBQUNpQztBQUV6RCxNQUFNSSxZQUFZO0lBQ2hCLE1BQU1DLFdBQVdGLHVFQUFVQSxDQUFDLE9BQU9HO1lBQUcsRUFBRUMsT0FBTyxFQUFFO1FBQy9DLE9BQU87WUFDTEEsU0FBUztnQkFDUCxHQUFHQSxPQUFPO1lBQ1o7UUFDRjtJQUNGO0lBRUEsTUFBTUMsV0FBV04sOERBQWNBLENBQUM7UUFDOUJPLEtBQUs7SUFDUDtJQUVBLE1BQU1DLFNBQVMsSUFBSVYsd0RBQVlBLENBQUM7UUFDOUJXLE1BQU87UUFDUEMsT0FBTyxJQUFJWCx5REFBYUE7UUFDeEJZLE1BQU1SLFNBQVNTLE1BQU0sQ0FBQ047SUFDeEI7SUFFQSxPQUFPRTtBQUNUO0FBRUEsK0RBQWVOLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3V0aWwvdXNlQ2xpZW50LnRzP2EzNzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQXBvbGxvQ2xpZW50LFxuICBJbk1lbW9yeUNhY2hlLFxuICBOb3JtYWxpemVkQ2FjaGVPYmplY3QsXG4gIGNyZWF0ZUh0dHBMaW5rLFxufSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCB7IHNldENvbnRleHQgfSBmcm9tIFwiQGFwb2xsby9jbGllbnQvbGluay9jb250ZXh0XCI7XG5cbmNvbnN0IHVzZUNsaWVudCA9ICgpOiBBcG9sbG9DbGllbnQ8Tm9ybWFsaXplZENhY2hlT2JqZWN0PiA9PiB7XG4gIGNvbnN0IGF1dGhMaW5rID0gc2V0Q29udGV4dChhc3luYyAoXywgeyBoZWFkZXJzIH0pID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICAuLi5oZWFkZXJzLFxuICAgICAgfSxcbiAgICB9O1xuICB9KTtcblxuICBjb25zdCBodHRwTGluayA9IGNyZWF0ZUh0dHBMaW5rKHtcbiAgICB1cmk6IFwiaHR0cHM6Ly9zcGFjZXgtcHJvZHVjdGlvbi51cC5yYWlsd2F5LmFwcC9hcGkvZ3JhcGhxbFwiLFxuICB9KTtcblxuICBjb25zdCBjbGllbnQgPSBuZXcgQXBvbGxvQ2xpZW50KHtcbiAgICBuYW1lOiBgbmV4dC13ZWJzaXRlYCxcbiAgICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoKSxcbiAgICBsaW5rOiBhdXRoTGluay5jb25jYXQoaHR0cExpbmspLFxuICB9KTtcblxuICByZXR1cm4gY2xpZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlQ2xpZW50O1xuIl0sIm5hbWVzIjpbIkFwb2xsb0NsaWVudCIsIkluTWVtb3J5Q2FjaGUiLCJjcmVhdGVIdHRwTGluayIsInNldENvbnRleHQiLCJ1c2VDbGllbnQiLCJhdXRoTGluayIsIl8iLCJoZWFkZXJzIiwiaHR0cExpbmsiLCJ1cmkiLCJjbGllbnQiLCJuYW1lIiwiY2FjaGUiLCJsaW5rIiwiY29uY2F0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/util/useClient.ts\n"));

/***/ })

});