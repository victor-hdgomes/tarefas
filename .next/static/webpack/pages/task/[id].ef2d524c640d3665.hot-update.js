/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/task/[id]",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[8].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[8].oneOf[8].use[2]!./src/pages/task/styles.module.css":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[8].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[8].oneOf[8].use[2]!./src/pages/task/styles.module.css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".styles_container__1HnUp {\\n    width: 100%;\\n    max-width: 1024px;\\n    margin: 40px auto 0 auto;\\n    padding: 0 18px;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center;\\n}\\n\\n.styles_main___1ruP {\\n    width: 100%;\\n}\\n\\n.styles_main___1ruP h1 {\\n    margin-bottom: 14px;\\n}\\n\\n.styles_task__AhZaS {\\n    border: 1.5px solid #909090;\\n    padding: 14px;\\n    line-height: 150%;\\n    border-radius: 4px;\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n}\\n\\n.styles_task__AhZaS p {\\n    white-space: pre-wrap;\\n    width: 100%;\\n}\\n\\n.styles_commentsContainer__Qw33g {\\n    margin: 18px 0;\\n    width: 100%;\\n    max-width: 1024px;\\n}\\n\\n.styles_commentsContainer__Qw33g h2 {\\n    margin: 14px 0;\\n}\\n\\n.styles_button__kIYMT {\\n    width: 100%;\\n    padding: 12px 0;\\n    border-radius: 4px;\\n    border: 0;\\n    color: #fff;\\n    background-color: #3183ff;\\n    font-size: 18px;\\n    cursor: pointer;\\n    transition: all 0.3s ease;\\n}\\n\\n.styles_button__kIYMT:disabled {\\n    cursor: not-allowed;\\n    background-color: ;\\n}\\n\\n.styles_button__kIYMT:hover {\\n    background-color: #0f51b4;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://src/pages/task/styles.module.css\"],\"names\":[],\"mappings\":\"AAAA;IACI,WAAW;IACX,iBAAiB;IACjB,wBAAwB;IACxB,eAAe;IACf,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,2BAA2B;IAC3B,aAAa;IACb,iBAAiB;IACjB,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,qBAAqB;IACrB,WAAW;AACf;;AAEA;IACI,cAAc;IACd,WAAW;IACX,iBAAiB;AACrB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,WAAW;IACX,eAAe;IACf,kBAAkB;IAClB,SAAS;IACT,WAAW;IACX,yBAAyB;IACzB,eAAe;IACf,eAAe;IACf,yBAAyB;AAC7B;;AAEA;IACI,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,yBAAyB;AAC7B\",\"sourcesContent\":[\".container {\\n    width: 100%;\\n    max-width: 1024px;\\n    margin: 40px auto 0 auto;\\n    padding: 0 18px;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center;\\n}\\n\\n.main {\\n    width: 100%;\\n}\\n\\n.main h1 {\\n    margin-bottom: 14px;\\n}\\n\\n.task {\\n    border: 1.5px solid #909090;\\n    padding: 14px;\\n    line-height: 150%;\\n    border-radius: 4px;\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n}\\n\\n.task p {\\n    white-space: pre-wrap;\\n    width: 100%;\\n}\\n\\n.commentsContainer {\\n    margin: 18px 0;\\n    width: 100%;\\n    max-width: 1024px;\\n}\\n\\n.commentsContainer h2 {\\n    margin: 14px 0;\\n}\\n\\n.button {\\n    width: 100%;\\n    padding: 12px 0;\\n    border-radius: 4px;\\n    border: 0;\\n    color: #fff;\\n    background-color: #3183ff;\\n    font-size: 18px;\\n    cursor: pointer;\\n    transition: all 0.3s ease;\\n}\\n\\n.button:disabled {\\n    cursor: not-allowed;\\n    background-color: ;\\n}\\n\\n.button:hover {\\n    background-color: #0f51b4;\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"container\": \"styles_container__1HnUp\",\n\t\"main\": \"styles_main___1ruP\",\n\t\"task\": \"styles_task__AhZaS\",\n\t\"commentsContainer\": \"styles_commentsContainer__Qw33g\",\n\t\"button\": \"styles_button__kIYMT\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s4XS5vbmVPZls4XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbOF0ub25lT2ZbOF0udXNlWzJdIS4vc3JjL3BhZ2VzL3Rhc2svc3R5bGVzLm1vZHVsZS5jc3MiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyx5S0FBcUY7QUFDL0g7QUFDQTtBQUNBLG9FQUFvRSxrQkFBa0Isd0JBQXdCLCtCQUErQixzQkFBc0Isb0JBQW9CLDZCQUE2Qiw4QkFBOEIsMEJBQTBCLEdBQUcseUJBQXlCLGtCQUFrQixHQUFHLDRCQUE0QiwwQkFBMEIsR0FBRyx5QkFBeUIsa0NBQWtDLG9CQUFvQix3QkFBd0IseUJBQXlCLG9CQUFvQiwwQkFBMEIsOEJBQThCLEdBQUcsMkJBQTJCLDRCQUE0QixrQkFBa0IsR0FBRyxzQ0FBc0MscUJBQXFCLGtCQUFrQix3QkFBd0IsR0FBRyx5Q0FBeUMscUJBQXFCLEdBQUcsMkJBQTJCLGtCQUFrQixzQkFBc0IseUJBQXlCLGdCQUFnQixrQkFBa0IsZ0NBQWdDLHNCQUFzQixzQkFBc0IsZ0NBQWdDLEdBQUcsb0NBQW9DLDBCQUEwQix5QkFBeUIsR0FBRyxpQ0FBaUMsZ0NBQWdDLEdBQUcsT0FBTyxpR0FBaUcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLHNDQUFzQyxrQkFBa0Isd0JBQXdCLCtCQUErQixzQkFBc0Isb0JBQW9CLDZCQUE2Qiw4QkFBOEIsMEJBQTBCLEdBQUcsV0FBVyxrQkFBa0IsR0FBRyxjQUFjLDBCQUEwQixHQUFHLFdBQVcsa0NBQWtDLG9CQUFvQix3QkFBd0IseUJBQXlCLG9CQUFvQiwwQkFBMEIsOEJBQThCLEdBQUcsYUFBYSw0QkFBNEIsa0JBQWtCLEdBQUcsd0JBQXdCLHFCQUFxQixrQkFBa0Isd0JBQXdCLEdBQUcsMkJBQTJCLHFCQUFxQixHQUFHLGFBQWEsa0JBQWtCLHNCQUFzQix5QkFBeUIsZ0JBQWdCLGtCQUFrQixnQ0FBZ0Msc0JBQXNCLHNCQUFzQixnQ0FBZ0MsR0FBRyxzQkFBc0IsMEJBQTBCLHlCQUF5QixHQUFHLG1CQUFtQixnQ0FBZ0MsR0FBRyxtQkFBbUI7QUFDbjJGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvdGFzay9zdHlsZXMubW9kdWxlLmNzcz9hOTJmIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuc3R5bGVzX2NvbnRhaW5lcl9fMUhuVXAge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LXdpZHRoOiAxMDI0cHg7XFxuICAgIG1hcmdpbjogNDBweCBhdXRvIDAgYXV0bztcXG4gICAgcGFkZGluZzogMCAxOHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnN0eWxlc19tYWluX19fMXJ1UCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uc3R5bGVzX21haW5fX18xcnVQIGgxIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTRweDtcXG59XFxuXFxuLnN0eWxlc190YXNrX19BaFphUyB7XFxuICAgIGJvcmRlcjogMS41cHggc29saWQgIzkwOTA5MDtcXG4gICAgcGFkZGluZzogMTRweDtcXG4gICAgbGluZS1oZWlnaHQ6IDE1MCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5zdHlsZXNfdGFza19fQWhaYVMgcCB7XFxuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5zdHlsZXNfY29tbWVudHNDb250YWluZXJfX1F3MzNnIHtcXG4gICAgbWFyZ2luOiAxOHB4IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXgtd2lkdGg6IDEwMjRweDtcXG59XFxuXFxuLnN0eWxlc19jb21tZW50c0NvbnRhaW5lcl9fUXczM2cgaDIge1xcbiAgICBtYXJnaW46IDE0cHggMDtcXG59XFxuXFxuLnN0eWxlc19idXR0b25fX2tJWU1UIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDEycHggMDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzE4M2ZmO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG59XFxuXFxuLnN0eWxlc19idXR0b25fX2tJWU1UOmRpc2FibGVkIHtcXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogO1xcbn1cXG5cXG4uc3R5bGVzX2J1dHRvbl9fa0lZTVQ6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGY1MWI0O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3JjL3BhZ2VzL3Rhc2svc3R5bGVzLm1vZHVsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLHdCQUF3QjtJQUN4QixlQUFlO0lBQ2YsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixlQUFlO0lBQ2YseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1heC13aWR0aDogMTAyNHB4O1xcbiAgICBtYXJnaW46IDQwcHggYXV0byAwIGF1dG87XFxuICAgIHBhZGRpbmc6IDAgMThweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tYWluIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5tYWluIGgxIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTRweDtcXG59XFxuXFxuLnRhc2sge1xcbiAgICBib3JkZXI6IDEuNXB4IHNvbGlkICM5MDkwOTA7XFxuICAgIHBhZGRpbmc6IDE0cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxNTAlO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4udGFzayBwIHtcXG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNvbW1lbnRzQ29udGFpbmVyIHtcXG4gICAgbWFyZ2luOiAxOHB4IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXgtd2lkdGg6IDEwMjRweDtcXG59XFxuXFxuLmNvbW1lbnRzQ29udGFpbmVyIGgyIHtcXG4gICAgbWFyZ2luOiAxNHB4IDA7XFxufVxcblxcbi5idXR0b24ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMTJweCAwO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMTgzZmY7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbn1cXG5cXG4uYnV0dG9uOmRpc2FibGVkIHtcXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogO1xcbn1cXG5cXG4uYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBmNTFiNDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwic3R5bGVzX2NvbnRhaW5lcl9fMUhuVXBcIixcblx0XCJtYWluXCI6IFwic3R5bGVzX21haW5fX18xcnVQXCIsXG5cdFwidGFza1wiOiBcInN0eWxlc190YXNrX19BaFphU1wiLFxuXHRcImNvbW1lbnRzQ29udGFpbmVyXCI6IFwic3R5bGVzX2NvbW1lbnRzQ29udGFpbmVyX19RdzMzZ1wiLFxuXHRcImJ1dHRvblwiOiBcInN0eWxlc19idXR0b25fX2tJWU1UXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[8].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[8].oneOf[8].use[2]!./src/pages/task/styles.module.css\n"));

/***/ })

});