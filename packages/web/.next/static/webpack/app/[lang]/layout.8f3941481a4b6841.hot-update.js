"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/[lang]/layout",{

/***/ "(app-pages-browser)/./app/[lang]/globals.scss":
/*!*********************************!*\
  !*** ./app/[lang]/globals.scss ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"911d7342dc38\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9bbGFuZ10vZ2xvYmFscy5zY3NzIiwibWFwcGluZ3MiOiI7QUFBQSwrREFBZSxjQUFjO0FBQzdCLElBQUksSUFBVSxJQUFJLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvW2xhbmddL2dsb2JhbHMuc2Nzcz8xNTlmIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiOTExZDczNDJkYzM4XCJcbmlmIChtb2R1bGUuaG90KSB7IG1vZHVsZS5ob3QuYWNjZXB0KCkgfVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/[lang]/globals.scss\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/[lang]/providers.tsx":
/*!**********************************!*\
  !*** ./app/[lang]/providers.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Providers: function() { return /* binding */ Providers; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/../../node_modules/.pnpm/next@13.4.17_react-dom@18.2.0_react@18.2.0_sass@1.66.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-themes */ \"(app-pages-browser)/../../node_modules/.pnpm/next-themes@0.2.1_next@13.4.17_react-dom@18.2.0_react@18.2.0/node_modules/next-themes/dist/index.module.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/../../node_modules/.pnpm/@chakra-ui+system@2.6.0_@emotion+react@11.11.1_@emotion+styled@11.11.0_react@18.2.0/node_modules/@chakra-ui/system/dist/chunk-UIGT7YZF.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/../../node_modules/.pnpm/next@13.4.17_react-dom@18.2.0_react@18.2.0_sass@1.66.0/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/../../node_modules/.pnpm/next-auth@4.23.1_next@13.4.17_react-dom@18.2.0_react@18.2.0/node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_auth */ \"(app-pages-browser)/./app/[lang]/_auth.tsx\");\n/* __next_internal_client_entry_do_not_use__ Providers auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n// import theme from './theme'\nfunction Providers(param) {\n    let { children } = param;\n    _s();\n    const { systemTheme, theme, setTheme } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.useTheme)();\n    const [mounted, setMounted] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const currentTheme = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>theme === \"system\" ? systemTheme : theme, [\n        theme,\n        systemTheme\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        setMounted(true);\n        if (currentTheme === \"dark\") {\n            var _window_document_body_parentElement;\n            (_window_document_body_parentElement = window.document.body.parentElement) === null || _window_document_body_parentElement === void 0 ? void 0 : _window_document_body_parentElement.classList.add(\"dark\");\n        } else {\n            var _window_document_body_parentElement1;\n            (_window_document_body_parentElement1 = window.document.body.parentElement) === null || _window_document_body_parentElement1 === void 0 ? void 0 : _window_document_body_parentElement1.classList.remove(\"dark\");\n        }\n    }, [\n        currentTheme\n    ]);\n    if (!mounted) return null;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_3__.SessionProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_themes__WEBPACK_IMPORTED_MODULE_1__.ThemeProvider, {\n            enableSystem: true,\n            attribute: \"class\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_auth__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/viandwi24/projects/learn/hatofit/packages/web/app/[lang]/providers.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, this),\n                children\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/viandwi24/projects/learn/hatofit/packages/web/app/[lang]/providers.tsx\",\n            lineNumber: 35,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/viandwi24/projects/learn/hatofit/packages/web/app/[lang]/providers.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n_s(Providers, \"/vYpYSJHT4cZwcNww9A2XzPZPZs=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.useTheme\n    ];\n});\n_c = Providers;\nvar _c;\n$RefreshReg$(_c, \"Providers\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9bbGFuZ10vcHJvdmlkZXJzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUUyQztBQUNBO0FBRVM7QUFDUztBQUU5QjtBQUMvQiw4QkFBOEI7QUFFdkIsU0FBU08sVUFBVSxLQUl6QjtRQUp5QixFQUN4QkMsUUFBUSxFQUdULEdBSnlCOztJQUt4QixNQUFNLEVBQUVDLFdBQVcsRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUUsR0FBR1YsMERBQVFBO0lBQ2pELE1BQU0sQ0FBQ1csU0FBU0MsV0FBVyxHQUFHVCwrQ0FBUUEsQ0FBQztJQUV2QyxNQUFNVSxlQUFlWCw4Q0FBT0EsQ0FBQyxJQUFNTyxVQUFVLFdBQVdELGNBQWNDLE9BQU87UUFBQ0E7UUFBT0Q7S0FBWTtJQUVqR1AsZ0RBQVNBLENBQUM7UUFDUlcsV0FBVztRQUNYLElBQUlDLGlCQUFpQixRQUFRO2dCQUMzQkM7YUFBQUEsc0NBQUFBLE9BQU9DLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDQyxhQUFhLGNBQWxDSCwwREFBQUEsb0NBQW9DSSxTQUFTLENBQUNDLEdBQUcsQ0FBQztRQUNwRCxPQUFPO2dCQUNMTDthQUFBQSx1Q0FBQUEsT0FBT0MsUUFBUSxDQUFDQyxJQUFJLENBQUNDLGFBQWEsY0FBbENILDJEQUFBQSxxQ0FBb0NJLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDO1FBQ3ZEO0lBQ0YsR0FBRztRQUFDUDtLQUFhO0lBRWpCLElBQUksQ0FBQ0YsU0FBUyxPQUFPO0lBRXJCLHFCQUNFLDhEQUFDUCw0REFBZUE7a0JBQ2QsNEVBQUNMLHNEQUFhQTtZQUFDc0IsY0FBYztZQUFNQyxXQUFVOzs4QkFDM0MsOERBQUNqQiw2Q0FBU0E7Ozs7O2dCQUNURTs7Ozs7Ozs7Ozs7O0FBSVQ7R0E3QmdCRDs7UUFLMkJOLHNEQUFRQTs7O0tBTG5DTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvW2xhbmddL3Byb3ZpZGVycy50c3g/ODM4MiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcblxuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ25leHQtdGhlbWVzJ1xuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IHsgdXNlRGFya01vZGUgfSBmcm9tICdAL2hvb2tzL3VzZS1kYXJrLW1vZGUnXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFNlc3Npb25Qcm92aWRlciwgdXNlU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIlxuaW1wb3J0IHt3aXRoUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgQXV0aENoZWNrIGZyb20gJy4vX2F1dGgnXG4vLyBpbXBvcnQgdGhlbWUgZnJvbSAnLi90aGVtZSdcblxuZXhwb3J0IGZ1bmN0aW9uIFByb3ZpZGVycyh7XG4gIGNoaWxkcmVuXG59OiB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGVcbn0pIHtcbiAgY29uc3QgeyBzeXN0ZW1UaGVtZSwgdGhlbWUsIHNldFRoZW1lIH0gPSB1c2VUaGVtZSgpXG4gIGNvbnN0IFttb3VudGVkLCBzZXRNb3VudGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IGN1cnJlbnRUaGVtZSA9IHVzZU1lbW8oKCkgPT4gdGhlbWUgPT09ICdzeXN0ZW0nID8gc3lzdGVtVGhlbWUgOiB0aGVtZSwgW3RoZW1lLCBzeXN0ZW1UaGVtZV0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRNb3VudGVkKHRydWUpXG4gICAgaWYgKGN1cnJlbnRUaGVtZSA9PT0gJ2RhcmsnKSB7XG4gICAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5wYXJlbnRFbGVtZW50Py5jbGFzc0xpc3QuYWRkKCdkYXJrJylcbiAgICB9IGVsc2Uge1xuICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkucGFyZW50RWxlbWVudD8uY2xhc3NMaXN0LnJlbW92ZSgnZGFyaycpXG4gICAgfVxuICB9LCBbY3VycmVudFRoZW1lXSlcblxuICBpZiAoIW1vdW50ZWQpIHJldHVybiBudWxsXG5cbiAgcmV0dXJuIChcbiAgICA8U2Vzc2lvblByb3ZpZGVyPlxuICAgICAgPFRoZW1lUHJvdmlkZXIgZW5hYmxlU3lzdGVtPXt0cnVlfSBhdHRyaWJ1dGU9XCJjbGFzc1wiPlxuICAgICAgICA8QXV0aENoZWNrIC8+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICA8L1Nlc3Npb25Qcm92aWRlcj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlRoZW1lUHJvdmlkZXIiLCJ1c2VUaGVtZSIsInVzZUVmZmVjdCIsInVzZU1lbW8iLCJ1c2VTdGF0ZSIsIlNlc3Npb25Qcm92aWRlciIsIkF1dGhDaGVjayIsIlByb3ZpZGVycyIsImNoaWxkcmVuIiwic3lzdGVtVGhlbWUiLCJ0aGVtZSIsInNldFRoZW1lIiwibW91bnRlZCIsInNldE1vdW50ZWQiLCJjdXJyZW50VGhlbWUiLCJ3aW5kb3ciLCJkb2N1bWVudCIsImJvZHkiLCJwYXJlbnRFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiZW5hYmxlU3lzdGVtIiwiYXR0cmlidXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/[lang]/providers.tsx\n"));

/***/ })

});