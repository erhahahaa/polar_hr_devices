"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/page",{

/***/ "(app-pages-browser)/./app/dashboard/section.tsx":
/*!***********************************!*\
  !*** ./app/dashboard/section.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DashboardSection: function() { return /* binding */ DashboardSection; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/../../node_modules/.pnpm/next@13.4.17_react-dom@18.2.0_react@18.2.0_sass@1.66.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui */ \"(app-pages-browser)/./components/ui/index.tsx\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/../../node_modules/.pnpm/next-auth@4.23.1_next@13.4.17_react-dom@18.2.0_react@18.2.0/node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/../../node_modules/.pnpm/next@13.4.17_react-dom@18.2.0_react@18.2.0_sass@1.66.0/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ DashboardSection auto */ \nvar _s = $RefreshSig$();\n\n\n\nasync function apiGetDashboard(token) {\n    const url = \"\".concat(\"https://api.hatofit.com\", \"/api/report/share/tome\");\n    const res = await fetch(url, {\n        cache: \"no-cache\",\n        headers: {\n            \"Content-Type\": \"application/json\",\n            \"Authorization\": \"Bearer \".concat(token)\n        }\n    });\n    if (!res.ok) {\n        throw new Error(\"Failed to fetch data\");\n    }\n    return await res.json();\n}\nconst DashboardSection = (param)=>{\n    let {} = param;\n    _s();\n    const { data, status } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    const [widgets, setWidgets] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        var _data, _data_user, _data1;\n        if (data && ((_data = data) === null || _data === void 0 ? void 0 : _data.user) && ((_data1 = data) === null || _data1 === void 0 ? void 0 : (_data_user = _data1.user) === null || _data_user === void 0 ? void 0 : _data_user.token)) {\n            var _data_user1, _data2;\n            apiGetDashboard((_data2 = data) === null || _data2 === void 0 ? void 0 : (_data_user1 = _data2.user) === null || _data_user1 === void 0 ? void 0 : _data_user1.token).then((res)=>{\n                var _res;\n                setWidgets(((_res = res) === null || _res === void 0 ? void 0 : _res.widgets) || []);\n                console.log(\"res\", res);\n            }).catch((err)=>console.log(\"err\", err));\n        }\n    }, [\n        data\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: widgets.map((shortcut)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"rounded h-[106px] shadow py-4 px-4 container overflow-hidden flex dark:bg-gray-800\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col w-1/2 item justify-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-xs text-gray-200\",\n                                    children: shortcut.name\n                                }, void 0, false, {\n                                    fileName: \"/Users/viandwi24/projects/learn/hatofit/packages/web/app/dashboard/section.tsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"font-bold text-2xl\",\n                                    children: shortcut.value\n                                }, void 0, false, {\n                                    fileName: \"/Users/viandwi24/projects/learn/hatofit/packages/web/app/dashboard/section.tsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/viandwi24/projects/learn/hatofit/packages/web/app/dashboard/section.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 13\n                        }, undefined)\n                    }, Math.random(), false, {\n                        fileName: \"/Users/viandwi24/projects/learn/hatofit/packages/web/app/dashboard/section.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/viandwi24/projects/learn/hatofit/packages/web/app/dashboard/section.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.Card.Wrapper, {\n                children: \"Welcome to dashboard\"\n            }, void 0, false, {\n                fileName: \"/Users/viandwi24/projects/learn/hatofit/packages/web/app/dashboard/section.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(DashboardSection, \"Gs6V4KSsP2A8PnbX+5XDjBKsKgo=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession\n    ];\n});\n_c = DashboardSection;\nvar _c;\n$RefreshReg$(_c, \"DashboardSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9kYXNoYm9hcmQvc2VjdGlvbi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ3FEO0FBQ1Q7QUFHc0I7QUFFbEUsZUFBZUksZ0JBQWdCQyxLQUFjO0lBQzNDLE1BQU1DLE1BQU0sR0FBd0MsT0FBckNDLHlCQUFvQyxFQUFDO0lBQ3BELE1BQU1HLE1BQU0sTUFBTUMsTUFBTUwsS0FBSztRQUMzQk0sT0FBTztRQUNQQyxTQUFTO1lBQ1AsZ0JBQWdCO1lBQ2hCLGlCQUFpQixVQUFnQixPQUFOUjtRQUM3QjtJQUNGO0lBRUEsSUFBSSxDQUFDSyxJQUFJSSxFQUFFLEVBQUU7UUFDWCxNQUFNLElBQUlDLE1BQU07SUFDbEI7SUFFQSxPQUFRLE1BQU1MLElBQUlNLElBQUk7QUFDeEI7QUFFTyxNQUFNQyxtQkFBbUI7UUFBQyxFQUFFOztJQUNqQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsTUFBTSxFQUFFLEdBQUdsQiwyREFBVUE7SUFDbkMsTUFBTSxDQUFDbUIsU0FBU0MsV0FBVyxHQUFJbEIsK0NBQVFBLENBR2xDLEVBQUU7SUFFUEQsZ0RBQVNBLENBQUM7WUFDSWdCLE9BQWNBLFlBQUFBO1FBQTFCLElBQUlBLFVBQVFBLFFBQUFBLGtCQUFBQSw0QkFBQUEsTUFBTUksSUFBSSxPQUFJSixTQUFBQSxrQkFBQUEsOEJBQUFBLGFBQUFBLE9BQU1JLElBQUksY0FBVkosaUNBQUFBLFdBQVliLEtBQUssR0FBRTtnQkFDM0JhLGFBQUFBO1lBQWhCZCxpQkFBZ0JjLFNBQUFBLGtCQUFBQSw4QkFBQUEsY0FBQUEsT0FBTUksSUFBSSxjQUFWSixrQ0FBQUEsWUFBWWIsS0FBSyxFQUM5QmtCLElBQUksQ0FBQ2IsQ0FBQUE7b0JBQ09BO2dCQUFYVyxXQUFXWCxFQUFBQSxPQUFBQSxpQkFBQUEsMkJBQUFBLEtBQUtVLE9BQU8sS0FBSSxFQUFFO2dCQUM3QkksUUFBUUMsR0FBRyxDQUFDLE9BQU9mO1lBQ3JCLEdBQ0NnQixLQUFLLENBQUNDLENBQUFBLE1BQU9ILFFBQVFDLEdBQUcsQ0FBQyxPQUFPRTtRQUNyQztJQUNGLEdBQUc7UUFBQ1Q7S0FBSztJQUVULHFCQUNFOzswQkFDRSw4REFBQ1U7MEJBQ0VSLFFBQVFTLEdBQUcsQ0FBQyxDQUFDQyx5QkFDWiw4REFBQ0Y7d0JBRUNHLFdBQVk7a0NBRVosNEVBQUNIOzRCQUFJRyxXQUFVOzs4Q0FDYiw4REFBQ0g7b0NBQUlHLFdBQVU7OENBQXlCRCxTQUFTRSxJQUFJOzs7Ozs7OENBQ3JELDhEQUFDSjtvQ0FBSUcsV0FBVTs4Q0FBc0JELFNBQVNHLEtBQUs7Ozs7Ozs7Ozs7Ozt1QkFMaERDLEtBQUtDLE1BQU07Ozs7Ozs7Ozs7MEJBVXRCLDhEQUFDbkMsZ0RBQUlBLENBQUNvQyxPQUFPOzBCQUFDOzs7Ozs7OztBQUtwQixFQUFDO0dBdENZbkI7O1FBQ2NoQix1REFBVUE7OztLQUR4QmdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9kYXNoYm9hcmQvc2VjdGlvbi50c3g/MDQ2YSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCB7IENhcmQsIElucHV0LCBCdXR0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpXCJcbmltcG9ydCB7IHVzZVNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxuaW1wb3J0IHsgRGlhbG9nLCBUcmFuc2l0aW9uIH0gZnJvbSAnQGhlYWRsZXNzdWkvcmVhY3QnXG5pbXBvcnQgeyBGcmFnbWVudCwgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuXG5hc3luYyBmdW5jdGlvbiBhcGlHZXREYXNoYm9hcmQodG9rZW4/OiBzdHJpbmcpIHtcbiAgY29uc3QgdXJsID0gYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX0JBU0VfVVJMfS9hcGkvcmVwb3J0L3NoYXJlL3RvbWVgXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgIGNhY2hlOiAnbm8tY2FjaGUnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHt0b2tlbn1gXG4gICAgfVxuICB9KVxuXG4gIGlmICghcmVzLm9rKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggZGF0YScpXG4gIH1cblxuICByZXR1cm4gKGF3YWl0IHJlcy5qc29uKCkpXG59XG5cbmV4cG9ydCBjb25zdCBEYXNoYm9hcmRTZWN0aW9uID0gKHt9KSA9PiB7XG4gIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSB1c2VTZXNzaW9uKClcbiAgY29uc3QgW3dpZGdldHMsIHNldFdpZGdldHNdICA9IHVzZVN0YXRlPHtcbiAgICBuYW1lOiBzdHJpbmdcbiAgICB2YWx1ZTogc3RyaW5nXG4gIH1bXT4oW10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZGF0YSAmJiBkYXRhPy51c2VyICYmIGRhdGE/LnVzZXI/LnRva2VuKSB7XG4gICAgICBhcGlHZXREYXNoYm9hcmQoZGF0YT8udXNlcj8udG9rZW4pXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgc2V0V2lkZ2V0cyhyZXM/LndpZGdldHMgfHwgW10pXG4gICAgICAgICAgY29uc29sZS5sb2coJ3JlcycsIHJlcylcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZygnZXJyJywgZXJyKSlcbiAgICB9XG4gIH0sIFtkYXRhXSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2PlxuICAgICAgICB7d2lkZ2V0cy5tYXAoKHNob3J0Y3V0KSA9PiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAga2V5PXtNYXRoLnJhbmRvbSgpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgcm91bmRlZCBoLVsxMDZweF0gc2hhZG93IHB5LTQgcHgtNCBjb250YWluZXIgb3ZlcmZsb3ctaGlkZGVuIGZsZXggZGFyazpiZy1ncmF5LTgwMGB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHctMS8yIGl0ZW0ganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS0yMDBcIj57c2hvcnRjdXQubmFtZX08L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC0yeGxcIj57c2hvcnRjdXQudmFsdWV9PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxDYXJkLldyYXBwZXI+XG4gICAgICAgIFdlbGNvbWUgdG8gZGFzaGJvYXJkXG4gICAgICA8L0NhcmQuV3JhcHBlcj5cbiAgICA8Lz5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIkNhcmQiLCJ1c2VTZXNzaW9uIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJhcGlHZXREYXNoYm9hcmQiLCJ0b2tlbiIsInVybCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfQkFTRV9VUkwiLCJyZXMiLCJmZXRjaCIsImNhY2hlIiwiaGVhZGVycyIsIm9rIiwiRXJyb3IiLCJqc29uIiwiRGFzaGJvYXJkU2VjdGlvbiIsImRhdGEiLCJzdGF0dXMiLCJ3aWRnZXRzIiwic2V0V2lkZ2V0cyIsInVzZXIiLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsImNhdGNoIiwiZXJyIiwiZGl2IiwibWFwIiwic2hvcnRjdXQiLCJjbGFzc05hbWUiLCJuYW1lIiwidmFsdWUiLCJNYXRoIiwicmFuZG9tIiwiV3JhcHBlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/dashboard/section.tsx\n"));

/***/ })

});