"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("middleware",{

/***/ "(middleware)/./middleware.ts":
/*!***********************!*\
  !*** ./middleware.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(middleware)/../../node_modules/.pnpm/next@13.4.17_react-dom@18.2.0_react@18.2.0_sass@1.66.0/node_modules/next/dist/esm/server/web/exports/next-response.js\");\n/* harmony import */ var _i18n_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./i18n/settings */ \"(middleware)/./i18n/settings.ts\");\n\n\nfunction middleware(request) {\n    // Check if there is any supported locale in the pathname\n    const pathname = request.nextUrl.pathname;\n    const pathnameIsMissingLocale = _i18n_settings__WEBPACK_IMPORTED_MODULE_1__.locales.every((locale)=>!pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`);\n    if (pathnameIsMissingLocale) {\n        // We are on the default locale\n        // Rewrite so Next.js understands\n        // e.g. incoming request is /about\n        // Tell Next.js it should pretend it's /en/about\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].redirect(new URL(`/${_i18n_settings__WEBPACK_IMPORTED_MODULE_1__.fallbackLng}${pathname}`, request.url));\n    }\n}\nconst config = {\n    // Do not run the middleware on the following paths\n    matcher: \"/((?!api|_next/static|_next/image|manifest.json|assets|favicon.ico).*)\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXNEO0FBQ0Q7QUFFOUMsU0FBU0csV0FBV0MsT0FBb0I7SUFDN0MseURBQXlEO0lBQ3pELE1BQU1DLFdBQVdELFFBQVFFLE9BQU8sQ0FBQ0QsUUFBUTtJQUV6QyxNQUFNRSwwQkFBMEJMLG1EQUFPQSxDQUFDTSxLQUFLLENBQzNDQyxDQUFBQSxTQUFVLENBQUNKLFNBQVNLLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRUQsT0FBTyxDQUFDLENBQUMsS0FBS0osYUFBYSxDQUFDLENBQUMsRUFBRUksT0FBTyxDQUFDO0lBRzVFLElBQUlGLHlCQUF5QjtRQUMzQiwrQkFBK0I7UUFDL0IsaUNBQWlDO1FBRWpDLGtDQUFrQztRQUNsQyxnREFBZ0Q7UUFDaEQsT0FBT1Asa0ZBQVlBLENBQUNXLFFBQVEsQ0FDMUIsSUFBSUMsSUFBSSxDQUFDLENBQUMsRUFBRVgsdURBQVdBLENBQUMsRUFBRUksU0FBUyxDQUFDLEVBQUVELFFBQVFTLEdBQUc7SUFFckQ7QUFDRjtBQUVPLE1BQU1DLFNBQVM7SUFDcEIsbURBQW1EO0lBQ25EQyxTQUNFO0FBQ0osRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9taWRkbGV3YXJlLnRzPzQyMmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZXh0UmVzcG9uc2UsIE5leHRSZXF1ZXN0fSBmcm9tICduZXh0L3NlcnZlcic7XG5pbXBvcnQge2ZhbGxiYWNrTG5nLCBsb2NhbGVzfSBmcm9tICcuL2kxOG4vc2V0dGluZ3MnO1xuXG5leHBvcnQgZnVuY3Rpb24gbWlkZGxld2FyZShyZXF1ZXN0OiBOZXh0UmVxdWVzdCkge1xuICAvLyBDaGVjayBpZiB0aGVyZSBpcyBhbnkgc3VwcG9ydGVkIGxvY2FsZSBpbiB0aGUgcGF0aG5hbWVcbiAgY29uc3QgcGF0aG5hbWUgPSByZXF1ZXN0Lm5leHRVcmwucGF0aG5hbWU7XG5cbiAgY29uc3QgcGF0aG5hbWVJc01pc3NpbmdMb2NhbGUgPSBsb2NhbGVzLmV2ZXJ5KFxuICAgIGxvY2FsZSA9PiAhcGF0aG5hbWUuc3RhcnRzV2l0aChgLyR7bG9jYWxlfS9gKSAmJiBwYXRobmFtZSAhPT0gYC8ke2xvY2FsZX1gLFxuICApO1xuXG4gIGlmIChwYXRobmFtZUlzTWlzc2luZ0xvY2FsZSkge1xuICAgIC8vIFdlIGFyZSBvbiB0aGUgZGVmYXVsdCBsb2NhbGVcbiAgICAvLyBSZXdyaXRlIHNvIE5leHQuanMgdW5kZXJzdGFuZHNcblxuICAgIC8vIGUuZy4gaW5jb21pbmcgcmVxdWVzdCBpcyAvYWJvdXRcbiAgICAvLyBUZWxsIE5leHQuanMgaXQgc2hvdWxkIHByZXRlbmQgaXQncyAvZW4vYWJvdXRcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLnJlZGlyZWN0KFxuICAgICAgbmV3IFVSTChgLyR7ZmFsbGJhY2tMbmd9JHtwYXRobmFtZX1gLCByZXF1ZXN0LnVybCksXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xuICAvLyBEbyBub3QgcnVuIHRoZSBtaWRkbGV3YXJlIG9uIHRoZSBmb2xsb3dpbmcgcGF0aHNcbiAgbWF0Y2hlcjpcbiAgICAnLygoPyFhcGl8X25leHQvc3RhdGljfF9uZXh0L2ltYWdlfG1hbmlmZXN0Lmpzb258YXNzZXRzfGZhdmljb24uaWNvKS4qKScsXG59O1xuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImZhbGxiYWNrTG5nIiwibG9jYWxlcyIsIm1pZGRsZXdhcmUiLCJyZXF1ZXN0IiwicGF0aG5hbWUiLCJuZXh0VXJsIiwicGF0aG5hbWVJc01pc3NpbmdMb2NhbGUiLCJldmVyeSIsImxvY2FsZSIsInN0YXJ0c1dpdGgiLCJyZWRpcmVjdCIsIlVSTCIsInVybCIsImNvbmZpZyIsIm1hdGNoZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./middleware.ts\n");

/***/ })

});