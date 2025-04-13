"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/uploadthing/route";
exports.ids = ["app/api/uploadthing/route"];
exports.modules = {

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "node:crypto":
/*!******************************!*\
  !*** external "node:crypto" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:crypto");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fuploadthing%2Froute&page=%2Fapi%2Fuploadthing%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fuploadthing%2Froute.ts&appDir=D%3A%5CLearning%20Materials%5Ccloneudemy%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CLearning%20Materials%5Ccloneudemy&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fuploadthing%2Froute&page=%2Fapi%2Fuploadthing%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fuploadthing%2Froute.ts&appDir=D%3A%5CLearning%20Materials%5Ccloneudemy%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CLearning%20Materials%5Ccloneudemy&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var D_Learning_Materials_cloneudemy_app_api_uploadthing_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/uploadthing/route.ts */ \"(rsc)/./app/api/uploadthing/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/uploadthing/route\",\n        pathname: \"/api/uploadthing\",\n        filename: \"route\",\n        bundlePath: \"app/api/uploadthing/route\"\n    },\n    resolvedPagePath: \"D:\\\\Learning Materials\\\\cloneudemy\\\\app\\\\api\\\\uploadthing\\\\route.ts\",\n    nextConfigOutput,\n    userland: D_Learning_Materials_cloneudemy_app_api_uploadthing_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/uploadthing/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZ1cGxvYWR0aGluZyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGdXBsb2FkdGhpbmclMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZ1cGxvYWR0aGluZyUyRnJvdXRlLnRzJmFwcERpcj1EJTNBJTVDTGVhcm5pbmclMjBNYXRlcmlhbHMlNUNjbG9uZXVkZW15JTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1EJTNBJTVDTGVhcm5pbmclMjBNYXRlcmlhbHMlNUNjbG9uZXVkZW15JmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUNtQjtBQUNoRztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL2FjYWRlbXkvPzQxYjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiRDpcXFxcTGVhcm5pbmcgTWF0ZXJpYWxzXFxcXGNsb25ldWRlbXlcXFxcYXBwXFxcXGFwaVxcXFx1cGxvYWR0aGluZ1xcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvdXBsb2FkdGhpbmcvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS91cGxvYWR0aGluZ1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvdXBsb2FkdGhpbmcvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJEOlxcXFxMZWFybmluZyBNYXRlcmlhbHNcXFxcY2xvbmV1ZGVteVxcXFxhcHBcXFxcYXBpXFxcXHVwbG9hZHRoaW5nXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS91cGxvYWR0aGluZy9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fuploadthing%2Froute&page=%2Fapi%2Fuploadthing%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fuploadthing%2Froute.ts&appDir=D%3A%5CLearning%20Materials%5Ccloneudemy%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CLearning%20Materials%5Ccloneudemy&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/uploadthing/core.ts":
/*!*************************************!*\
  !*** ./app/api/uploadthing/core.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ourFileRouter: () => (/* binding */ ourFileRouter)\n/* harmony export */ });\n/* harmony import */ var _clerk_nextjs_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @clerk/nextjs/server */ \"(rsc)/./node_modules/@clerk/nextjs/dist/esm/app-router/server/auth.js\");\n/* harmony import */ var uploadthing_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uploadthing/next */ \"(rsc)/./node_modules/uploadthing/next/index.js\");\n\n\nconst f = (0,uploadthing_next__WEBPACK_IMPORTED_MODULE_0__.createUploadthing)();\nconst handleAuth = ()=>{\n    const { userId } = (0,_clerk_nextjs_server__WEBPACK_IMPORTED_MODULE_1__.auth)();\n    if (!userId) throw new Error(\"Unauthorized\");\n    return {\n        userId\n    };\n};\n// FileRouter for your app, can contain multiple FileRoutes\nconst ourFileRouter = {\n    courseBanner: f({\n        image: {\n            maxFileSize: \"4MB\",\n            maxFileCount: 1\n        }\n    }).middleware(handleAuth).onUploadComplete(()=>{}),\n    sectionVideo: f({\n        video: {\n            maxFileSize: \"512GB\",\n            maxFileCount: 1\n        }\n    }).middleware(handleAuth).onUploadComplete(()=>{}),\n    sectionResource: f([\n        \"text\",\n        \"image\",\n        \"video\",\n        \"audio\",\n        \"pdf\"\n    ]).middleware(handleAuth).onUploadComplete(()=>{})\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3VwbG9hZHRoaW5nL2NvcmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTRDO0FBQzBCO0FBR3RFLE1BQU1FLElBQUlELG1FQUFpQkE7QUFFM0IsTUFBTUUsYUFBYTtJQUNqQixNQUFNLEVBQUVDLE1BQU0sRUFBRSxHQUFHSiwwREFBSUE7SUFDdkIsSUFBSSxDQUFDSSxRQUFRLE1BQU0sSUFBSUMsTUFBTTtJQUM3QixPQUFPO1FBQUVEO0lBQU87QUFDbEI7QUFFQSwyREFBMkQ7QUFDcEQsTUFBTUUsZ0JBQWdCO0lBQzNCQyxjQUFjTCxFQUFFO1FBQUVNLE9BQU87WUFBRUMsYUFBYTtZQUFPQyxjQUFjO1FBQUU7SUFBRSxHQUNoRUMsVUFBVSxDQUFDUixZQUNYUyxnQkFBZ0IsQ0FBQyxLQUFPO0lBQ3pCQyxjQUFjWCxFQUFFO1FBQUVZLE9BQU87WUFBRUwsYUFBYTtZQUFTQyxjQUFjO1FBQUU7SUFBRSxHQUNsRUMsVUFBVSxDQUFDUixZQUNYUyxnQkFBZ0IsQ0FBQyxLQUFPO0lBQ3pCRyxpQkFBaUJiLEVBQUU7UUFBQztRQUFRO1FBQVM7UUFBUztRQUFTO0tBQU0sRUFDNURTLFVBQVUsQ0FBQ1IsWUFDWFMsZ0JBQWdCLENBQUMsS0FBTztBQUMzQixFQUF1QiIsInNvdXJjZXMiOlsid2VicGFjazovL2FjYWRlbXkvLi9hcHAvYXBpL3VwbG9hZHRoaW5nL2NvcmUudHM/MGY2NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhdXRoIH0gZnJvbSBcIkBjbGVyay9uZXh0anMvc2VydmVyXCI7XG5pbXBvcnQgeyBjcmVhdGVVcGxvYWR0aGluZywgdHlwZSBGaWxlUm91dGVyIH0gZnJvbSBcInVwbG9hZHRoaW5nL25leHRcIjtcbmltcG9ydCB7IFVwbG9hZFRoaW5nRXJyb3IgfSBmcm9tIFwidXBsb2FkdGhpbmcvc2VydmVyXCI7XG5cbmNvbnN0IGYgPSBjcmVhdGVVcGxvYWR0aGluZygpO1xuXG5jb25zdCBoYW5kbGVBdXRoID0gKCkgPT4ge1xuICBjb25zdCB7IHVzZXJJZCB9ID0gYXV0aCgpO1xuICBpZiAoIXVzZXJJZCkgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkXCIpO1xuICByZXR1cm4geyB1c2VySWQgfTtcbn07XG5cbi8vIEZpbGVSb3V0ZXIgZm9yIHlvdXIgYXBwLCBjYW4gY29udGFpbiBtdWx0aXBsZSBGaWxlUm91dGVzXG5leHBvcnQgY29uc3Qgb3VyRmlsZVJvdXRlciA9IHtcbiAgY291cnNlQmFubmVyOiBmKHsgaW1hZ2U6IHsgbWF4RmlsZVNpemU6IFwiNE1CXCIsIG1heEZpbGVDb3VudDogMSB9IH0pXG4gIC5taWRkbGV3YXJlKGhhbmRsZUF1dGgpXG4gIC5vblVwbG9hZENvbXBsZXRlKCgpID0+IHt9KSxcbiAgc2VjdGlvblZpZGVvOiBmKHsgdmlkZW86IHsgbWF4RmlsZVNpemU6IFwiNTEyR0JcIiwgbWF4RmlsZUNvdW50OiAxIH0gfSlcbiAgLm1pZGRsZXdhcmUoaGFuZGxlQXV0aClcbiAgLm9uVXBsb2FkQ29tcGxldGUoKCkgPT4ge30pLFxuICBzZWN0aW9uUmVzb3VyY2U6IGYoW1widGV4dFwiLCBcImltYWdlXCIsIFwidmlkZW9cIiwgXCJhdWRpb1wiLCBcInBkZlwiXSlcbiAgLm1pZGRsZXdhcmUoaGFuZGxlQXV0aClcbiAgLm9uVXBsb2FkQ29tcGxldGUoKCkgPT4ge30pLFxufSBzYXRpc2ZpZXMgRmlsZVJvdXRlcjtcblxuZXhwb3J0IHR5cGUgT3VyRmlsZVJvdXRlciA9IHR5cGVvZiBvdXJGaWxlUm91dGVyO1xuIl0sIm5hbWVzIjpbImF1dGgiLCJjcmVhdGVVcGxvYWR0aGluZyIsImYiLCJoYW5kbGVBdXRoIiwidXNlcklkIiwiRXJyb3IiLCJvdXJGaWxlUm91dGVyIiwiY291cnNlQmFubmVyIiwiaW1hZ2UiLCJtYXhGaWxlU2l6ZSIsIm1heEZpbGVDb3VudCIsIm1pZGRsZXdhcmUiLCJvblVwbG9hZENvbXBsZXRlIiwic2VjdGlvblZpZGVvIiwidmlkZW8iLCJzZWN0aW9uUmVzb3VyY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/uploadthing/core.ts\n");

/***/ }),

/***/ "(rsc)/./app/api/uploadthing/route.ts":
/*!**************************************!*\
  !*** ./app/api/uploadthing/route.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var uploadthing_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uploadthing/next */ \"(rsc)/./node_modules/uploadthing/next/index.js\");\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ \"(rsc)/./app/api/uploadthing/core.ts\");\n\n\n// Export routes for Next App Router\nconst { GET, POST } = (0,uploadthing_next__WEBPACK_IMPORTED_MODULE_1__.createRouteHandler)({\n    router: _core__WEBPACK_IMPORTED_MODULE_0__.ourFileRouter\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3VwbG9hZHRoaW5nL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBc0Q7QUFFZjtBQUV2QyxvQ0FBb0M7QUFDN0IsTUFBTSxFQUFFRSxHQUFHLEVBQUVDLElBQUksRUFBRSxHQUFHSCxvRUFBa0JBLENBQUM7SUFDOUNJLFFBQVFILGdEQUFhQTtBQUN2QixHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWNhZGVteS8uL2FwcC9hcGkvdXBsb2FkdGhpbmcvcm91dGUudHM/NGUyMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVSb3V0ZUhhbmRsZXIgfSBmcm9tIFwidXBsb2FkdGhpbmcvbmV4dFwiO1xuIFxuaW1wb3J0IHsgb3VyRmlsZVJvdXRlciB9IGZyb20gXCIuL2NvcmVcIjtcbiBcbi8vIEV4cG9ydCByb3V0ZXMgZm9yIE5leHQgQXBwIFJvdXRlclxuZXhwb3J0IGNvbnN0IHsgR0VULCBQT1NUIH0gPSBjcmVhdGVSb3V0ZUhhbmRsZXIoe1xuICByb3V0ZXI6IG91ckZpbGVSb3V0ZXIsXG59KTsiXSwibmFtZXMiOlsiY3JlYXRlUm91dGVIYW5kbGVyIiwib3VyRmlsZVJvdXRlciIsIkdFVCIsIlBPU1QiLCJyb3V0ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/uploadthing/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@clerk","vendor-chunks/tslib","vendor-chunks/crypto-js","vendor-chunks/cookie","vendor-chunks/map-obj","vendor-chunks/no-case","vendor-chunks/lower-case","vendor-chunks/snakecase-keys","vendor-chunks/snake-case","vendor-chunks/dot-case","vendor-chunks/effect","vendor-chunks/@uploadthing","vendor-chunks/uploadthing","vendor-chunks/std-env","vendor-chunks/fast-check","vendor-chunks/pure-rand","vendor-chunks/@effect","vendor-chunks/consola"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fuploadthing%2Froute&page=%2Fapi%2Fuploadthing%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fuploadthing%2Froute.ts&appDir=D%3A%5CLearning%20Materials%5Ccloneudemy%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CLearning%20Materials%5Ccloneudemy&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();