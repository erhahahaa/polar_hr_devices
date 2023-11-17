"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/[lang]/company/[id]/page",{

/***/ "(app-pages-browser)/./app/[lang]/company/[id]/page.tsx":
/*!******************************************!*\
  !*** ./app/[lang]/company/[id]/page.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CompanyJoinPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/../../node_modules/.pnpm/next@13.4.17_react-dom@18.2.0_react@18.2.0_sass@1.66.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_layout_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/layout/container */ \"(app-pages-browser)/./components/layout/container.tsx\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/../../node_modules/.pnpm/next-auth@4.23.1_next@13.4.17_react-dom@18.2.0_react@18.2.0/node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/../../node_modules/.pnpm/next@13.4.17_react-dom@18.2.0_react@18.2.0_sass@1.66.0/node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/../../node_modules/.pnpm/next@13.4.17_react-dom@18.2.0_react@18.2.0_sass@1.66.0/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nasync function getCompanyDetail(token, id) {\n    const url = \"\".concat(\"http://localhost:3000\", \"/api/company/\").concat(id);\n    const res = await fetch(url, {\n        cache: \"no-cache\",\n        headers: {\n            \"Content-Type\": \"application/json\",\n            \"Authorization\": \"Bearer \".concat(token)\n        }\n    });\n    if (!res.ok) {\n        throw new Error(\"Failed to fetch data\");\n    }\n    return await res.json();\n}\nasync function apiJoinCompany(token, id) {\n    const url = \"\".concat(\"http://localhost:3000\", \"/api/company/\").concat(id, \"/link\");\n    const res = await fetch(url, {\n        method: \"POST\",\n        cache: \"no-cache\",\n        headers: {\n            \"Content-Type\": \"application/json\",\n            \"Authorization\": \"Bearer \".concat(token)\n        }\n    });\n    if (!res.ok) {\n        throw new Error(\"Failed to fetch data\");\n    }\n    return await res.json();\n}\nfunction CompanyJoinPage(param) {\n    let { params } = param;\n    _s();\n    const { data } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [company, setCompany] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({\n        name: \"\",\n        meta: {\n            address: \"\",\n            description: \"\"\n        }\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        var _data_user, _data, _params;\n        getCompanyDetail((_data = data) === null || _data === void 0 ? void 0 : (_data_user = _data.user) === null || _data_user === void 0 ? void 0 : _data_user.token, (_params = params) === null || _params === void 0 ? void 0 : _params.id).then((res)=>{\n            var _res;\n            return setCompany(((_res = res) === null || _res === void 0 ? void 0 : _res.company) || {});\n        });\n    }, [\n        data,\n        params\n    ]);\n    const join = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(()=>{\n        var _data_user, _data, _params;\n        apiJoinCompany((_data = data) === null || _data === void 0 ? void 0 : (_data_user = _data.user) === null || _data_user === void 0 ? void 0 : _data_user.token, (_params = params) === null || _params === void 0 ? void 0 : _params.id).then((res)=>{\n            router.push(\"/dashboard\");\n        });\n    }, [\n        data,\n        params\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex min-h-[calc(100vh_-_72px)] py-4\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_container__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            className: \"flex gap-4\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"flex-1 flex flex-col justify-center items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"border border-gray-700 p-6 rounded-lg w-[400px]\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-center text-lg font-bold\",\n                            children: \"Wanna join to this company ?\"\n                        }, void 0, false, {\n                            fileName: \"/Users/viandwi24/projects/learn/hatofit/packages/web/app/[lang]/company/[id]/page.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mt-4 text-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"\",\n                                    children: company.name\n                                }, void 0, false, {\n                                    fileName: \"/Users/viandwi24/projects/learn/hatofit/packages/web/app/[lang]/company/[id]/page.tsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-sm\",\n                                    children: company.meta.description\n                                }, void 0, false, {\n                                    fileName: \"/Users/viandwi24/projects/learn/hatofit/packages/web/app/[lang]/company/[id]/page.tsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-sm\",\n                                    children: company.meta.address\n                                }, void 0, false, {\n                                    fileName: \"/Users/viandwi24/projects/learn/hatofit/packages/web/app/[lang]/company/[id]/page.tsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/viandwi24/projects/learn/hatofit/packages/web/app/[lang]/company/[id]/page.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-end gap-4 mt-6\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"px-4 py-2 bg-primary-500 text-white rounded-md\",\n                                    onClick: ()=>join(),\n                                    children: \"Join\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/viandwi24/projects/learn/hatofit/packages/web/app/[lang]/company/[id]/page.tsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"px-4 py-2 bg-gray-800 text-white rounded-md\",\n                                    children: \"No\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/viandwi24/projects/learn/hatofit/packages/web/app/[lang]/company/[id]/page.tsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/viandwi24/projects/learn/hatofit/packages/web/app/[lang]/company/[id]/page.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/viandwi24/projects/learn/hatofit/packages/web/app/[lang]/company/[id]/page.tsx\",\n                    lineNumber: 70,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/viandwi24/projects/learn/hatofit/packages/web/app/[lang]/company/[id]/page.tsx\",\n                lineNumber: 69,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/viandwi24/projects/learn/hatofit/packages/web/app/[lang]/company/[id]/page.tsx\",\n            lineNumber: 68,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/viandwi24/projects/learn/hatofit/packages/web/app/[lang]/company/[id]/page.tsx\",\n        lineNumber: 67,\n        columnNumber: 5\n    }, this);\n}\n_s(CompanyJoinPage, \"0h933cNCcodOZtaXkFAETLUnRdI=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession,\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = CompanyJoinPage;\nvar _c;\n$RefreshReg$(_c, \"CompanyJoinPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9bbGFuZ10vY29tcGFueS9baWRdL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ3NEO0FBQ1Q7QUFDRDtBQUNhO0FBRXpELGVBQWVNLGlCQUFpQkMsS0FBYyxFQUFFQyxFQUFXO0lBQ3pELE1BQU1DLE1BQU0sR0FBdURELE9BQXBERSx1QkFBb0MsRUFBQyxpQkFBa0IsT0FBSEY7SUFDbkUsTUFBTUssTUFBTSxNQUFNQyxNQUFNTCxLQUFLO1FBQzNCTSxPQUFPO1FBQ1BDLFNBQVM7WUFDUCxnQkFBZ0I7WUFDaEIsaUJBQWlCLFVBQWdCLE9BQU5UO1FBQzdCO0lBQ0Y7SUFFQSxJQUFJLENBQUNNLElBQUlJLEVBQUUsRUFBRTtRQUNYLE1BQU0sSUFBSUMsTUFBTTtJQUNsQjtJQUVBLE9BQVEsTUFBTUwsSUFBSU0sSUFBSTtBQUN4QjtBQUVBLGVBQWVDLGVBQWViLEtBQWMsRUFBRUMsRUFBUTtJQUNwRCxNQUFNQyxNQUFNLEdBQXVERCxPQUFwREUsdUJBQW9DLEVBQUMsaUJBQWtCLE9BQUhGLElBQUc7SUFDdEUsTUFBTUssTUFBTSxNQUFNQyxNQUFNTCxLQUFLO1FBQzNCWSxRQUFRO1FBQ1JOLE9BQU87UUFDUEMsU0FBUztZQUNQLGdCQUFnQjtZQUNoQixpQkFBaUIsVUFBZ0IsT0FBTlQ7UUFDN0I7SUFDRjtJQUVBLElBQUksQ0FBQ00sSUFBSUksRUFBRSxFQUFFO1FBQ1gsTUFBTSxJQUFJQyxNQUFNO0lBQ2xCO0lBRUEsT0FBUSxNQUFNTCxJQUFJTSxJQUFJO0FBQ3hCO0FBRWUsU0FBU0csZ0JBQWdCLEtBQWU7UUFBZixFQUFFQyxNQUFNLEVBQU8sR0FBZjs7SUFDdEMsTUFBTSxFQUFFQyxJQUFJLEVBQUUsR0FBR3ZCLDJEQUFVQTtJQUMzQixNQUFNd0IsU0FBU3ZCLDBEQUFTQTtJQUV4QixNQUFNLENBQUN3QixTQUFTQyxXQUFXLEdBQUd0QiwrQ0FBUUEsQ0FBQztRQUNyQ3VCLE1BQU07UUFDTkMsTUFBTTtZQUNKQyxTQUFTO1lBQ1RDLGFBQWE7UUFDZjtJQUNGO0lBRUEzQixnREFBU0EsQ0FBQztZQUNTb0IsWUFBQUEsT0FBbUJEO1FBQXBDakIsa0JBQWlCa0IsUUFBQUEsa0JBQUFBLDZCQUFBQSxhQUFBQSxNQUFNUSxJQUFJLGNBQVZSLGlDQUFBQSxXQUFZakIsS0FBSyxHQUFFZ0IsVUFBQUEsb0JBQUFBLDhCQUFBQSxRQUFRZixFQUFFLEVBQzNDeUIsSUFBSSxDQUFDLENBQUNwQjtnQkFBbUJBO21CQUFYYyxXQUFXZCxFQUFBQSxPQUFBQSxpQkFBQUEsMkJBQUFBLEtBQUthLE9BQU8sS0FBSSxDQUFDOztJQUMvQyxHQUFHO1FBQUNGO1FBQU1EO0tBQU87SUFFakIsTUFBTVcsT0FBTy9CLGtEQUFXQSxDQUFDO1lBQ1JxQixZQUFBQSxPQUFtQkQ7UUFBbENILGdCQUFlSSxRQUFBQSxrQkFBQUEsNkJBQUFBLGFBQUFBLE1BQU1RLElBQUksY0FBVlIsaUNBQUFBLFdBQVlqQixLQUFLLEdBQUVnQixVQUFBQSxvQkFBQUEsOEJBQUFBLFFBQVFmLEVBQUUsRUFDekN5QixJQUFJLENBQUMsQ0FBQ3BCO1lBQ0xZLE9BQU9VLElBQUksQ0FBQztRQUNkO0lBQ0osR0FBRztRQUFDWDtRQUFNRDtLQUFPO0lBRWpCLHFCQUNFLDhEQUFDYTtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDckMsb0VBQVNBO1lBQUNxQyxXQUFVO3NCQUNuQiw0RUFBQ0M7Z0JBQUtELFdBQVU7MEJBQ2QsNEVBQUNEO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ0Q7NEJBQUlDLFdBQVU7c0NBQWdDOzs7Ozs7c0NBQy9DLDhEQUFDRDs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNEO29DQUFJQyxXQUFVOzhDQUFJWCxRQUFRRSxJQUFJOzs7Ozs7OENBQy9CLDhEQUFDUTtvQ0FBSUMsV0FBVTs4Q0FBV1gsUUFBUUcsSUFBSSxDQUFDRSxXQUFXOzs7Ozs7OENBQ2xELDhEQUFDSztvQ0FBSUMsV0FBVTs4Q0FBV1gsUUFBUUcsSUFBSSxDQUFDQyxPQUFPOzs7Ozs7Ozs7Ozs7c0NBRWhELDhEQUFDTTs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNFO29DQUFPRixXQUFVO29DQUFpREcsU0FBUyxJQUFNTjs4Q0FBUTs7Ozs7OzhDQUcxRiw4REFBQ0s7b0NBQU9GLFdBQVU7OENBQThDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTOUU7R0FoRHdCZjs7UUFDTHJCLHVEQUFVQTtRQUNaQyxzREFBU0E7OztLQUZGb0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL1tsYW5nXS9jb21wYW55L1tpZF0vcGFnZS50c3g/NmZhNiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIkAvY29tcG9uZW50cy9sYXlvdXQvY29udGFpbmVyXCI7XG5pbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuYXN5bmMgZnVuY3Rpb24gZ2V0Q29tcGFueURldGFpbCh0b2tlbj86IHN0cmluZywgaWQ/OiBzdHJpbmcpIHtcbiAgY29uc3QgdXJsID0gYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX0JBU0VfVVJMfS9hcGkvY29tcGFueS8ke2lkfWBcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgY2FjaGU6ICduby1jYWNoZScsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke3Rva2VufWBcbiAgICB9XG4gIH0pXG5cbiAgaWYgKCFyZXMub2spIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBmZXRjaCBkYXRhJylcbiAgfVxuXG4gIHJldHVybiAoYXdhaXQgcmVzLmpzb24oKSlcbn1cblxuYXN5bmMgZnVuY3Rpb24gYXBpSm9pbkNvbXBhbnkodG9rZW4/OiBzdHJpbmcsIGlkPzogYW55KSB7XG4gIGNvbnN0IHVybCA9IGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9CQVNFX1VSTH0vYXBpL2NvbXBhbnkvJHtpZH0vbGlua2BcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgY2FjaGU6ICduby1jYWNoZScsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke3Rva2VufWBcbiAgICB9LFxuICB9KVxuXG4gIGlmICghcmVzLm9rKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggZGF0YScpXG4gIH1cblxuICByZXR1cm4gKGF3YWl0IHJlcy5qc29uKCkpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbXBhbnlKb2luUGFnZSh7IHBhcmFtcyB9OiBhbnkpIHtcbiAgY29uc3QgeyBkYXRhIH0gPSB1c2VTZXNzaW9uKClcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuICBjb25zdCBbY29tcGFueSwgc2V0Q29tcGFueV0gPSB1c2VTdGF0ZSh7XG4gICAgbmFtZTogJycsXG4gICAgbWV0YToge1xuICAgICAgYWRkcmVzczogJycsXG4gICAgICBkZXNjcmlwdGlvbjogJydcbiAgICB9XG4gIH0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRDb21wYW55RGV0YWlsKGRhdGE/LnVzZXI/LnRva2VuLCBwYXJhbXM/LmlkKVxuICAgICAgLnRoZW4oKHJlcykgPT4gc2V0Q29tcGFueShyZXM/LmNvbXBhbnkgfHwge30pKVxuICB9LCBbZGF0YSwgcGFyYW1zXSlcblxuICBjb25zdCBqb2luID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGFwaUpvaW5Db21wYW55KGRhdGE/LnVzZXI/LnRva2VuLCBwYXJhbXM/LmlkKVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICByb3V0ZXIucHVzaCgnL2Rhc2hib2FyZCcpXG4gICAgICB9KVxuICB9LCBbZGF0YSwgcGFyYW1zXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtaW4taC1bY2FsYygxMDB2aF8tXzcycHgpXSBweS00XCI+XG4gICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cImZsZXggZ2FwLTRcIj5cbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleC0xIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWdyYXktNzAwIHAtNiByb3VuZGVkLWxnIHctWzQwMHB4XVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LWxnIGZvbnQtYm9sZFwiPldhbm5hIGpvaW4gdG8gdGhpcyBjb21wYW55ID88L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPntjb21wYW55Lm5hbWV9PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbVwiPntjb21wYW55Lm1ldGEuZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbVwiPntjb21wYW55Lm1ldGEuYWRkcmVzc308L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktZW5kIGdhcC00IG10LTZcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJweC00IHB5LTIgYmctcHJpbWFyeS01MDAgdGV4dC13aGl0ZSByb3VuZGVkLW1kXCIgb25DbGljaz17KCkgPT4gam9pbigpfT5cbiAgICAgICAgICAgICAgICBKb2luXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInB4LTQgcHktMiBiZy1ncmF5LTgwMCB0ZXh0LXdoaXRlIHJvdW5kZWQtbWRcIj5cbiAgICAgICAgICAgICAgICBOb1xuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L21haW4+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIkNvbnRhaW5lciIsInVzZVNlc3Npb24iLCJ1c2VSb3V0ZXIiLCJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZ2V0Q29tcGFueURldGFpbCIsInRva2VuIiwiaWQiLCJ1cmwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX0JBU0VfVVJMIiwicmVzIiwiZmV0Y2giLCJjYWNoZSIsImhlYWRlcnMiLCJvayIsIkVycm9yIiwianNvbiIsImFwaUpvaW5Db21wYW55IiwibWV0aG9kIiwiQ29tcGFueUpvaW5QYWdlIiwicGFyYW1zIiwiZGF0YSIsInJvdXRlciIsImNvbXBhbnkiLCJzZXRDb21wYW55IiwibmFtZSIsIm1ldGEiLCJhZGRyZXNzIiwiZGVzY3JpcHRpb24iLCJ1c2VyIiwidGhlbiIsImpvaW4iLCJwdXNoIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFpbiIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/[lang]/company/[id]/page.tsx\n"));

/***/ })

});