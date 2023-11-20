"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/[lang]/dashboard/layout",{

/***/ "(app-pages-browser)/./app/[lang]/dashboard/sidebar.tsx":
/*!******************************************!*\
  !*** ./app/[lang]/dashboard/sidebar.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Sidebar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/../../node_modules/.pnpm/next@13.4.17_react-dom@18.2.0_react@18.2.0_sass@1.66.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _hooks_use_observe_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/hooks/use-observe-route */ \"(app-pages-browser)/./hooks/use-observe-route.ts\");\n/* harmony import */ var _i18n_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/i18n/client */ \"(app-pages-browser)/./i18n/client.ts\");\n/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/react */ \"(app-pages-browser)/../../node_modules/.pnpm/@iconify+react@4.1.1_react@18.2.0/node_modules/@iconify/react/dist/iconify.mjs\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/../../node_modules/.pnpm/next-auth@4.23.1_next@13.4.17_react-dom@18.2.0_react@18.2.0/node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/../../node_modules/.pnpm/next@13.4.17_react-dom@18.2.0_react@18.2.0_sass@1.66.0/node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/../../node_modules/.pnpm/next@13.4.17_react-dom@18.2.0_react@18.2.0_sass@1.66.0/node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"(app-pages-browser)/../../node_modules/.pnpm/next@13.4.17_react-dom@18.2.0_react@18.2.0_sass@1.66.0/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Sidebar() {\n    var _params, _useParams;\n    _s();\n    const params = (0,next_navigation__WEBPACK_IMPORTED_MODULE_6__.useParams)();\n    const { t } = (0,_i18n_client__WEBPACK_IMPORTED_MODULE_2__.useTranslation)((_params = params) === null || _params === void 0 ? void 0 : _params.lang);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    const { data, status } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession)();\n    const lang = (_useParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_6__.useParams)()) === null || _useParams === void 0 ? void 0 : _useParams.lang;\n    const [c, sc] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(1);\n    const menus = (0,react__WEBPACK_IMPORTED_MODULE_7__.useMemo)(()=>{\n        return [\n            {\n                type: \"item\",\n                title: t(\"dashboard.sidebar.menu.dashboard\"),\n                icon: \"uil:dashboard\",\n                href: \"/dashboard\"\n            },\n            {\n                type: \"spacer\"\n            },\n            {\n                type: \"item\",\n                title: t(\"dashboard.sidebar.menu.my_exercises\"),\n                icon: \"material-symbols:exercise-outline\",\n                href: \"/dashboard/exercise\"\n            },\n            {\n                type: \"item\",\n                title: t(\"dashboard.sidebar.menu.shared_exercises\"),\n                icon: \"material-symbols:exercise-outline\",\n                href: \"/dashboard/shared-exercise\"\n            },\n            {\n                type: \"spacer\"\n            },\n            {\n                type: \"item\",\n                title: t(\"dashboard.sidebar.menu.company\"),\n                icon: \"mdi:company\",\n                href: \"/dashboard/company\"\n            },\n            {\n                type: \"spacer\"\n            },\n            {\n                type: \"item\",\n                title: t(\"dashboard.sidebar.menu.settings\"),\n                icon: \"ic:outline-settings-suggest\",\n                href: \"/dashboard/setting\"\n            }\n        ].map((menu)=>{\n            return {\n                ...menu,\n                href: \"/\".concat(lang).concat(menu.href)\n            };\n        });\n    }, [\n        lang,\n        t\n    ]);\n    (0,_hooks_use_observe_route__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(()=>sc((v)=>v + 1), ()=>sc((v)=>v + 1));\n    const isMenuActive = (href)=>{\n        // const allMenusActivated = Menus.map(menu => {\n        //   console.log('[]', window.location.pathname.split('/').join('/'), menu.href)\n        //   return window.location.pathname.split('/').join('/') === menu.href\n        // })\n        return window.location.pathname.split(\"/\").join(\"/\") === \"\".concat(href);\n    // let res = true\n    // if (allMenusActivated.filter(menu => menu).length === 0) {\n    //   res = false\n    // } else if (allMenusActivated.filter(menu => menu).length === 1) {\n    //   res = window.location.pathname.replaceAll('/', '').startsWith(href.replaceAll('/', ''))\n    // } else {\n    //   res = window.location.pathname.replaceAll('/', '').startsWith(href.replaceAll('/', ''))\n    // }\n    // return res\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-[200px]\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-transparent rounded-lg shadow-lg\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"flex flex-col\",\n                children: menus.map((menu, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_7__.Fragment, {\n                        children: [\n                            menu.type === \"item\" && menu.href && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                    href: \"\".concat(menu.href),\n                                    className: \"flex items-center gap-4 hover:bg-gray-800/80 px-4 py-2 rounded \".concat(isMenuActive(menu.href) ? \"bg-gray-800/80\" : \"\"),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_iconify_react__WEBPACK_IMPORTED_MODULE_3__.Icon, {\n                                            icon: menu.icon,\n                                            className: \"text-xl\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/viandwi24/projects/learn/hatofit/packages/web/app/[lang]/dashboard/sidebar.tsx\",\n                                            lineNumber: 73,\n                                            columnNumber: 21\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-sm text-gray-100\",\n                                            children: menu.title\n                                        }, void 0, false, {\n                                            fileName: \"/Users/viandwi24/projects/learn/hatofit/packages/web/app/[lang]/dashboard/sidebar.tsx\",\n                                            lineNumber: 74,\n                                            columnNumber: 21\n                                        }, this)\n                                    ]\n                                }, Math.random(), true, {\n                                    fileName: \"/Users/viandwi24/projects/learn/hatofit/packages/web/app/[lang]/dashboard/sidebar.tsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 19\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/viandwi24/projects/learn/hatofit/packages/web/app/[lang]/dashboard/sidebar.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 17\n                            }, this),\n                            menu.type === \"spacer\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"w-full h-0.5 mt-2 mb-2 bg-gray-950/75\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/viandwi24/projects/learn/hatofit/packages/web/app/[lang]/dashboard/sidebar.tsx\",\n                                    lineNumber: 79,\n                                    columnNumber: 21\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/viandwi24/projects/learn/hatofit/packages/web/app/[lang]/dashboard/sidebar.tsx\",\n                                lineNumber: 79,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, index, true, {\n                        fileName: \"/Users/viandwi24/projects/learn/hatofit/packages/web/app/[lang]/dashboard/sidebar.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 13\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/viandwi24/projects/learn/hatofit/packages/web/app/[lang]/dashboard/sidebar.tsx\",\n                lineNumber: 62,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/viandwi24/projects/learn/hatofit/packages/web/app/[lang]/dashboard/sidebar.tsx\",\n            lineNumber: 60,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/viandwi24/projects/learn/hatofit/packages/web/app/[lang]/dashboard/sidebar.tsx\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, this);\n}\n_s(Sidebar, \"iHLXHPkP5I/fZDND+3+ksr9W/GA=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_6__.useParams,\n        _i18n_client__WEBPACK_IMPORTED_MODULE_2__.useTranslation,\n        next_navigation__WEBPACK_IMPORTED_MODULE_6__.useRouter,\n        next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession,\n        next_navigation__WEBPACK_IMPORTED_MODULE_6__.useParams,\n        _hooks_use_observe_route__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    ];\n});\n_c = Sidebar;\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9bbGFuZ10vZGFzaGJvYXJkL3NpZGViYXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUN1RDtBQUNUO0FBRVQ7QUFDTztBQUNoQjtBQUMwQjtBQUNRO0FBRy9DLFNBQVNVO1FBRU9DLFNBR2hCTjs7SUFKYixNQUFNTSxTQUFTTiwwREFBU0E7SUFDeEIsTUFBTSxFQUFFTyxDQUFDLEVBQUUsR0FBR1gsNERBQWNBLEVBQUNVLFVBQUFBLG9CQUFBQSw4QkFBQUEsUUFBUUUsSUFBSTtJQUN6QyxNQUFNQyxTQUFTUiwwREFBU0E7SUFDeEIsTUFBTSxFQUFFUyxJQUFJLEVBQUVDLE1BQU0sRUFBRSxHQUFHYiwyREFBVUE7SUFDbkMsTUFBTVUsUUFBT1IsYUFBQUEsMERBQVNBLGdCQUFUQSxpQ0FBQUEsV0FBYVEsSUFBSTtJQUM5QixNQUFNLENBQUNJLEdBQUdDLEdBQUcsR0FBR1QsK0NBQVFBLENBQUM7SUFFekIsTUFBTVUsUUFBUVgsOENBQU9BLENBQUM7UUFDcEIsT0FBTztZQUNMO2dCQUFFWSxNQUFNO2dCQUFRQyxPQUFPVCxFQUFFO2dCQUFxQ1UsTUFBTTtnQkFBaUJDLE1BQU07WUFBYTtZQUN4RztnQkFBRUgsTUFBTTtZQUFTO1lBQ2pCO2dCQUFFQSxNQUFNO2dCQUFRQyxPQUFPVCxFQUFFO2dCQUF3Q1UsTUFBTTtnQkFBcUNDLE1BQU07WUFBc0I7WUFDeEk7Z0JBQUVILE1BQU07Z0JBQVFDLE9BQU9ULEVBQUU7Z0JBQTRDVSxNQUFNO2dCQUFxQ0MsTUFBTTtZQUE2QjtZQUNuSjtnQkFBRUgsTUFBTTtZQUFTO1lBQ2pCO2dCQUFFQSxNQUFNO2dCQUFRQyxPQUFPVCxFQUFFO2dCQUFtQ1UsTUFBTTtnQkFBZUMsTUFBTTtZQUFxQjtZQUM1RztnQkFBRUgsTUFBTTtZQUFTO1lBQ2pCO2dCQUFFQSxNQUFNO2dCQUFRQyxPQUFPVCxFQUFFO2dCQUFvQ1UsTUFBTTtnQkFBK0JDLE1BQU07WUFBcUI7U0FDOUgsQ0FBQ0MsR0FBRyxDQUFDQyxDQUFBQTtZQUNKLE9BQU87Z0JBQ0wsR0FBR0EsSUFBSTtnQkFDUEYsTUFBTSxJQUFXRSxPQUFQWixNQUFpQixPQUFWWSxLQUFLRixJQUFJO1lBQzVCO1FBQ0Y7SUFDRixHQUFHO1FBQUNWO1FBQU1EO0tBQUU7SUFFWlosb0VBQWVBLENBQUMsSUFBTWtCLEdBQUdRLENBQUFBLElBQUtBLElBQUksSUFBSSxJQUFNUixHQUFHUSxDQUFBQSxJQUFLQSxJQUFJO0lBRXhELE1BQU1DLGVBQWUsQ0FBQ0o7UUFDcEIsZ0RBQWdEO1FBQ2hELGdGQUFnRjtRQUNoRix1RUFBdUU7UUFDdkUsS0FBSztRQUNMLE9BQU9LLE9BQU9DLFFBQVEsQ0FBQ0MsUUFBUSxDQUFDQyxLQUFLLENBQUMsS0FBS0MsSUFBSSxDQUFDLFNBQVMsR0FBUSxPQUFMVDtJQUM1RCxpQkFBaUI7SUFDakIsNkRBQTZEO0lBQzdELGdCQUFnQjtJQUNoQixvRUFBb0U7SUFDcEUsNEZBQTRGO0lBQzVGLFdBQVc7SUFDWCw0RkFBNEY7SUFDNUYsSUFBSTtJQUNKLGFBQWE7SUFDZjtJQUVBLHFCQUNFLDhEQUFDVTtRQUFJQyxXQUFVO2tCQUViLDRFQUFDRDtZQUFJQyxXQUFVO3NCQUViLDRFQUFDQztnQkFBR0QsV0FBVTswQkFFWGYsTUFBTUssR0FBRyxDQUFDLENBQUNDLE1BQU1XLHNCQUNoQiw4REFBQzdCLDJDQUFRQTs7NEJBQ0xrQixLQUFLTCxJQUFJLEtBQUssVUFBVUssS0FBS0YsSUFBSSxrQkFDakMsOERBQUNjOzBDQUNDLDRFQUFDakMsa0RBQUlBO29DQUVIbUIsTUFBTSxHQUFhLE9BQVZFLEtBQUtGLElBQUk7b0NBQ2xCVyxXQUFXLGtFQUFrSCxPQUFoRFAsYUFBYUYsS0FBS0YsSUFBSSxJQUFJLG1CQUFtQjs7c0RBRTFILDhEQUFDckIsZ0RBQUlBOzRDQUFDb0IsTUFBTUcsS0FBS0gsSUFBSTs0Q0FBU1ksV0FBVTs7Ozs7O3NEQUN4Qyw4REFBQ0k7NENBQUtKLFdBQVU7c0RBQXlCVCxLQUFLSixLQUFLOzs7Ozs7O21DQUw5Q2tCLEtBQUtDLE1BQU07Ozs7Ozs7Ozs7NEJBU3BCZixLQUFLTCxJQUFJLEtBQUssMEJBQ2QsOERBQUNpQjswQ0FBRyw0RUFBQ0o7b0NBQUlDLFdBQVU7Ozs7Ozs7Ozs7Ozt1QkFkUkU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0IzQjtHQTNFd0IxQjs7UUFDUEwsc0RBQVNBO1FBQ1ZKLHdEQUFjQTtRQUNiSyxzREFBU0E7UUFDQ0gsdURBQVVBO1FBQ3RCRSxzREFBU0E7UUFxQnRCTCxnRUFBZUE7OztLQTFCT1UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL1tsYW5nXS9kYXNoYm9hcmQvc2lkZWJhci50c3g/M2U3ZSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCB1c2VPYnNlcnZlUm91dGUgZnJvbSBcIkAvaG9va3MvdXNlLW9ic2VydmUtcm91dGVcIlxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tIFwiQC9pMThuL2NsaWVudFwiXG5pbXBvcnQgeyBjcmVhdGVUcmFuc2xhdGlvbiB9IGZyb20gXCJAL2kxOG4vc2VydmVyXCJcbmltcG9ydCB7IEljb24gfSBmcm9tIFwiQGljb25pZnkvcmVhY3RcIlxuaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIlxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXG5pbXBvcnQgeyB1c2VQYXJhbXMsIHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIlxuaW1wb3J0IHsgRnJhZ21lbnQsIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZGViYXIoKSB7XG4gIGNvbnN0IHBhcmFtcyA9IHVzZVBhcmFtcygpXG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24ocGFyYW1zPy5sYW5nKVxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gdXNlU2Vzc2lvbigpXG4gIGNvbnN0IGxhbmcgPSB1c2VQYXJhbXMoKT8ubGFuZ1xuICBjb25zdCBbYywgc2NdID0gdXNlU3RhdGUoMSlcblxuICBjb25zdCBtZW51cyA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIHJldHVybiBbXG4gICAgICB7IHR5cGU6ICdpdGVtJywgdGl0bGU6IHQoJ2Rhc2hib2FyZC5zaWRlYmFyLm1lbnUuZGFzaGJvYXJkJyksIGljb246ICd1aWw6ZGFzaGJvYXJkJywgaHJlZjogJy9kYXNoYm9hcmQnIH0sXG4gICAgICB7IHR5cGU6ICdzcGFjZXInIH0sXG4gICAgICB7IHR5cGU6ICdpdGVtJywgdGl0bGU6IHQoJ2Rhc2hib2FyZC5zaWRlYmFyLm1lbnUubXlfZXhlcmNpc2VzJyksIGljb246ICdtYXRlcmlhbC1zeW1ib2xzOmV4ZXJjaXNlLW91dGxpbmUnLCBocmVmOiAnL2Rhc2hib2FyZC9leGVyY2lzZScgfSxcbiAgICAgIHsgdHlwZTogJ2l0ZW0nLCB0aXRsZTogdCgnZGFzaGJvYXJkLnNpZGViYXIubWVudS5zaGFyZWRfZXhlcmNpc2VzJyksIGljb246ICdtYXRlcmlhbC1zeW1ib2xzOmV4ZXJjaXNlLW91dGxpbmUnLCBocmVmOiAnL2Rhc2hib2FyZC9zaGFyZWQtZXhlcmNpc2UnIH0sXG4gICAgICB7IHR5cGU6ICdzcGFjZXInIH0sXG4gICAgICB7IHR5cGU6ICdpdGVtJywgdGl0bGU6IHQoJ2Rhc2hib2FyZC5zaWRlYmFyLm1lbnUuY29tcGFueScpLCBpY29uOiAnbWRpOmNvbXBhbnknLCBocmVmOiAnL2Rhc2hib2FyZC9jb21wYW55JyB9LFxuICAgICAgeyB0eXBlOiAnc3BhY2VyJyB9LFxuICAgICAgeyB0eXBlOiAnaXRlbScsIHRpdGxlOiB0KCdkYXNoYm9hcmQuc2lkZWJhci5tZW51LnNldHRpbmdzJyksIGljb246ICdpYzpvdXRsaW5lLXNldHRpbmdzLXN1Z2dlc3QnLCBocmVmOiAnL2Rhc2hib2FyZC9zZXR0aW5nJyB9LFxuICAgIF0ubWFwKG1lbnUgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ubWVudSxcbiAgICAgICAgaHJlZjogYC8ke2xhbmd9JHttZW51LmhyZWZ9YFxuICAgICAgfVxuICAgIH0pXG4gIH0sIFtsYW5nLCB0XSlcblxuICB1c2VPYnNlcnZlUm91dGUoKCkgPT4gc2ModiA9PiB2ICsgMSksICgpID0+IHNjKHYgPT4gdiArIDEpKVxuXG4gIGNvbnN0IGlzTWVudUFjdGl2ZSA9IChocmVmOiBzdHJpbmcpID0+IHtcbiAgICAvLyBjb25zdCBhbGxNZW51c0FjdGl2YXRlZCA9IE1lbnVzLm1hcChtZW51ID0+IHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKCdbXScsIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdCgnLycpLmpvaW4oJy8nKSwgbWVudS5ocmVmKVxuICAgIC8vICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdCgnLycpLmpvaW4oJy8nKSA9PT0gbWVudS5ocmVmXG4gICAgLy8gfSlcbiAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KCcvJykuam9pbignLycpID09PSBgJHtocmVmfWBcbiAgICAvLyBsZXQgcmVzID0gdHJ1ZVxuICAgIC8vIGlmIChhbGxNZW51c0FjdGl2YXRlZC5maWx0ZXIobWVudSA9PiBtZW51KS5sZW5ndGggPT09IDApIHtcbiAgICAvLyAgIHJlcyA9IGZhbHNlXG4gICAgLy8gfSBlbHNlIGlmIChhbGxNZW51c0FjdGl2YXRlZC5maWx0ZXIobWVudSA9PiBtZW51KS5sZW5ndGggPT09IDEpIHtcbiAgICAvLyAgIHJlcyA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlQWxsKCcvJywgJycpLnN0YXJ0c1dpdGgoaHJlZi5yZXBsYWNlQWxsKCcvJywgJycpKVxuICAgIC8vIH0gZWxzZSB7XG4gICAgLy8gICByZXMgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZUFsbCgnLycsICcnKS5zdGFydHNXaXRoKGhyZWYucmVwbGFjZUFsbCgnLycsICcnKSlcbiAgICAvLyB9XG4gICAgLy8gcmV0dXJuIHJlc1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctWzIwMHB4XVwiPlxuICAgICAgey8qIGNhcmQgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXRyYW5zcGFyZW50IHJvdW5kZWQtbGcgc2hhZG93LWxnXCI+XG4gICAgICAgIHsvKiB1bCBsaXN0IG1lbnUgKi99XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgey8qIGxvb3AgKi99XG4gICAgICAgICAge21lbnVzLm1hcCgobWVudSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxGcmFnbWVudCBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgeyhtZW51LnR5cGUgPT09ICdpdGVtJyAmJiBtZW51LmhyZWYpICYmIChcbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICBrZXk9e01hdGgucmFuZG9tKCl9XG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e2Ake21lbnUuaHJlZn1gfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNCBob3ZlcjpiZy1ncmF5LTgwMC84MCBweC00IHB5LTIgcm91bmRlZCAke2lzTWVudUFjdGl2ZShtZW51LmhyZWYpID8gJ2JnLWdyYXktODAwLzgwJyA6ICcnfWB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPEljb24gaWNvbj17bWVudS5pY29uIGFzIGFueX0gY2xhc3NOYW1lPVwidGV4dC14bFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTEwMFwiPnttZW51LnRpdGxlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICB7KG1lbnUudHlwZSA9PT0gJ3NwYWNlcicpICYmIChcbiAgICAgICAgICAgICAgICA8bGk+PGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC0wLjUgbXQtMiBtYi0yIGJnLWdyYXktOTUwLzc1XCI+PC9kaXY+PC9saT5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbInVzZU9ic2VydmVSb3V0ZSIsInVzZVRyYW5zbGF0aW9uIiwiSWNvbiIsInVzZVNlc3Npb24iLCJMaW5rIiwidXNlUGFyYW1zIiwidXNlUm91dGVyIiwiRnJhZ21lbnQiLCJ1c2VNZW1vIiwidXNlU3RhdGUiLCJTaWRlYmFyIiwicGFyYW1zIiwidCIsImxhbmciLCJyb3V0ZXIiLCJkYXRhIiwic3RhdHVzIiwiYyIsInNjIiwibWVudXMiLCJ0eXBlIiwidGl0bGUiLCJpY29uIiwiaHJlZiIsIm1hcCIsIm1lbnUiLCJ2IiwiaXNNZW51QWN0aXZlIiwid2luZG93IiwibG9jYXRpb24iLCJwYXRobmFtZSIsInNwbGl0Iiwiam9pbiIsImRpdiIsImNsYXNzTmFtZSIsInVsIiwiaW5kZXgiLCJsaSIsInNwYW4iLCJNYXRoIiwicmFuZG9tIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/[lang]/dashboard/sidebar.tsx\n"));

/***/ })

});