"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/task/[id]",{

/***/ "./src/pages/task/[id].tsx":
/*!*********************************!*\
  !*** ./src/pages/task/[id].tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Task; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles.module.css */ \"./src/pages/task/styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _services_firebaseConnection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services/firebaseConnection */ \"./src/services/firebaseConnection.ts\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _components_textarea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/textarea */ \"./src/components/textarea/index.tsx\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar __N_SSP = true;\nfunction Task(param) {\n    let { task } = param;\n    _s();\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_5__.useSession)();\n    const [inputValue, setInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(\"\");\n    async function handleComment(e) {\n        var _session_user;\n        e.preventDefault();\n        if (inputValue.trim() === \"\") {\n            alert(\"Digite um coment\\xe1rio\");\n        }\n        if (!(session === null || session === void 0 ? void 0 : session.user) || !(session === null || session === void 0 ? void 0 : (_session_user = session.user) === null || _session_user === void 0 ? void 0 : _session_user.email)) {\n            alert(\"Voc\\xea precisa estar logado para comentar\");\n        }\n        try {\n            const docRef = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.addDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_services_firebaseConnection__WEBPACK_IMPORTED_MODULE_2__.db, \"comments\"), {\n                user: session === null || session === void 0 ? void 0 : session.user,\n                comment: inputValue,\n                task: task.id,\n                created: new Date()\n            });\n            setInputValue(\"\");\n        } catch (error) {\n            alert(\"\");\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_7___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Tarefa - Detalhes da tarefa\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\projetos\\\\github\\\\tarefas\\\\src\\\\pages\\\\task\\\\[id].tsx\",\n                    lineNumber: 56,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\projetos\\\\github\\\\tarefas\\\\src\\\\pages\\\\task\\\\[id].tsx\",\n                lineNumber: 55,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_7___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Tarefa\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\projetos\\\\github\\\\tarefas\\\\src\\\\pages\\\\task\\\\[id].tsx\",\n                        lineNumber: 60,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_7___default().task),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: task.tarefa\n                        }, void 0, false, {\n                            fileName: \"C:\\\\projetos\\\\github\\\\tarefas\\\\src\\\\pages\\\\task\\\\[id].tsx\",\n                            lineNumber: 63,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\projetos\\\\github\\\\tarefas\\\\src\\\\pages\\\\task\\\\[id].tsx\",\n                        lineNumber: 62,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\projetos\\\\github\\\\tarefas\\\\src\\\\pages\\\\task\\\\[id].tsx\",\n                lineNumber: 59,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_7___default().commentsContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Deixar coment\\xe1rio\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\projetos\\\\github\\\\tarefas\\\\src\\\\pages\\\\task\\\\[id].tsx\",\n                        lineNumber: 68,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: handleComment,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_textarea__WEBPACK_IMPORTED_MODULE_4__.Textarea, {\n                                value: inputValue,\n                                onChange: (e)=>setInputValue(e.target.value),\n                                placeholder: \"Digite seu coment\\xe1rio aqui...\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\projetos\\\\github\\\\tarefas\\\\src\\\\pages\\\\task\\\\[id].tsx\",\n                                lineNumber: 71,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                disabled: !(session === null || session === void 0 ? void 0 : session.user),\n                                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_7___default().button),\n                                children: \"Enviar coment\\xe1rio\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\projetos\\\\github\\\\tarefas\\\\src\\\\pages\\\\task\\\\[id].tsx\",\n                                lineNumber: 76,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\projetos\\\\github\\\\tarefas\\\\src\\\\pages\\\\task\\\\[id].tsx\",\n                        lineNumber: 70,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\projetos\\\\github\\\\tarefas\\\\src\\\\pages\\\\task\\\\[id].tsx\",\n                lineNumber: 67,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\projetos\\\\github\\\\tarefas\\\\src\\\\pages\\\\task\\\\[id].tsx\",\n        lineNumber: 54,\n        columnNumber: 9\n    }, this);\n}\n_s(Task, \"uh5FW6JEiSQgHENxJ/5rgu09KxI=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_5__.useSession\n    ];\n});\n_c = Task;\nvar _c;\n$RefreshReg$(_c, \"Task\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvdGFzay9baWRdLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUM2QjtBQUNXO0FBRVc7QUFDK0I7QUFDakM7QUFDSjtBQUNZOztBQWExQyxTQUFTUSxLQUFLLEtBQWU7UUFBZixFQUFFQyxJQUFJLEVBQVMsR0FBZjs7SUFFekIsTUFBTSxFQUFFQyxNQUFNQyxPQUFPLEVBQUUsR0FBR0wsMkRBQVVBO0lBRXBDLE1BQU0sQ0FBQ00sWUFBWUMsY0FBYyxHQUFHTiwrQ0FBUUEsQ0FBQztJQUU3QyxlQUFlTyxjQUFjQyxDQUFZO1lBT2RKO1FBTnZCSSxFQUFFQyxjQUFjO1FBRWhCLElBQUlKLFdBQVdLLElBQUksT0FBTyxJQUFJO1lBQzFCQyxNQUFNO1FBQ1Y7UUFFQSxJQUFJLEVBQUNQLG9CQUFBQSw4QkFBQUEsUUFBU1EsSUFBSSxLQUFJLEVBQUNSLG9CQUFBQSwrQkFBQUEsZ0JBQUFBLFFBQVNRLElBQUksY0FBYlIsb0NBQUFBLGNBQWVTLEtBQUssR0FBRTtZQUN6Q0YsTUFBTTtRQUNWO1FBRUEsSUFBSTtZQUNBLE1BQU1HLFNBQVMsTUFBTWpCLDBEQUFNQSxDQUFDRCw4REFBVUEsQ0FBQ0QsNERBQUVBLEVBQUUsYUFBYTtnQkFDcERpQixJQUFJLEVBQUVSLG9CQUFBQSw4QkFBQUEsUUFBU1EsSUFBSTtnQkFDbkJHLFNBQVNWO2dCQUNUSCxNQUFNQSxLQUFLYyxFQUFFO2dCQUNiQyxTQUFTLElBQUlDO1lBQ2pCO1lBRUFaLGNBQWM7UUFDbEIsRUFBRSxPQUFPYSxPQUFPO1lBQ1pSLE1BQU87UUFDWDtJQUNKO0lBRUEscUJBQ0ksOERBQUNTO1FBQUlDLFdBQVczQixxRUFBZ0I7OzBCQUM1Qiw4REFBQ0Qsa0RBQUlBOzBCQUNELDRFQUFDOEI7OEJBQU07Ozs7Ozs7Ozs7OzBCQUdYLDhEQUFDQztnQkFBS0gsV0FBVzNCLGdFQUFXOztrQ0FDeEIsOERBQUMrQjtrQ0FBRzs7Ozs7O2tDQUVKLDhEQUFDQzt3QkFBUUwsV0FBVzNCLGdFQUFXO2tDQUMzQiw0RUFBQ2lDO3NDQUFHekIsS0FBSzBCLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUl2Qiw4REFBQ0M7Z0JBQVFSLFdBQVczQiw2RUFBd0I7O2tDQUN4Qyw4REFBQ3FDO2tDQUFHOzs7Ozs7a0NBRUosOERBQUNDO3dCQUFLQyxVQUFVMUI7OzBDQUNaLDhEQUFDVCwwREFBUUE7Z0NBQ0xvQyxPQUFPN0I7Z0NBQ1A4QixVQUFVLENBQUMzQixJQUF3Q0YsY0FBY0UsRUFBRTRCLE1BQU0sQ0FBQ0YsS0FBSztnQ0FDL0VHLGFBQVk7Ozs7OzswQ0FFaEIsOERBQUNDO2dDQUNHQyxVQUFVLEVBQUNuQyxvQkFBQUEsOEJBQUFBLFFBQVNRLElBQUk7Z0NBQ3hCUyxXQUFXM0Isa0VBQWE7MENBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9sRDtHQS9Ed0JPOztRQUVNRix1REFBVUE7OztLQUZoQkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Rhc2svW2lkXS50c3g/Nzc2NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tIFwibmV4dFwiXHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuY3NzJ1xyXG5cclxuaW1wb3J0IHsgZGIgfSBmcm9tIFwiQC9zZXJ2aWNlcy9maXJlYmFzZUNvbm5lY3Rpb25cIjtcclxuaW1wb3J0IHsgZG9jLCBjb2xsZWN0aW9uLCBxdWVyeSwgd2hlcmUsIGdldERvYywgYWRkRG9jIH0gZnJvbSAnZmlyZWJhc2UvZmlyZXN0b3JlJ1xyXG5pbXBvcnQgeyBUZXh0YXJlYSB9IGZyb20gXCJAL2NvbXBvbmVudHMvdGV4dGFyZWFcIjtcclxuaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIENoYW5nZUV2ZW50LCBGb3JtRXZlbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgc2V0IH0gZnJvbSBcImZpcmViYXNlL2RhdGFiYXNlXCI7XHJcblxyXG5pbnRlcmZhY2UgSVRhc2sge1xyXG4gICAgdGFzazoge1xyXG4gICAgICAgIGlkOiBzdHJpbmc7XHJcbiAgICAgICAgY3JlYXRlZDogc3RyaW5nO1xyXG4gICAgICAgIGlzUHVibGljOiBib29sZWFuO1xyXG4gICAgICAgIHRhcmVmYTogc3RyaW5nO1xyXG4gICAgICAgIHVzZXI6IHN0cmluZztcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGFzayh7IHRhc2sgfTogSVRhc2spIHtcclxuXHJcbiAgICBjb25zdCB7IGRhdGE6IHNlc3Npb24gfSA9IHVzZVNlc3Npb24oKTtcclxuXHJcbiAgICBjb25zdCBbaW5wdXRWYWx1ZSwgc2V0SW5wdXRWYWx1ZV0gPSB1c2VTdGF0ZSgnJylcclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBoYW5kbGVDb21tZW50KGU6IEZvcm1FdmVudCkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgaWYgKGlucHV0VmFsdWUudHJpbSgpID09PSAnJykge1xyXG4gICAgICAgICAgICBhbGVydCgnRGlnaXRlIHVtIGNvbWVudMOhcmlvJylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghc2Vzc2lvbj8udXNlciB8fCAhc2Vzc2lvbj8udXNlcj8uZW1haWwpIHtcclxuICAgICAgICAgICAgYWxlcnQoJ1ZvY8OqIHByZWNpc2EgZXN0YXIgbG9nYWRvIHBhcmEgY29tZW50YXInKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgZG9jUmVmID0gYXdhaXQgYWRkRG9jKGNvbGxlY3Rpb24oZGIsICdjb21tZW50cycpLCB7XHJcbiAgICAgICAgICAgICAgICB1c2VyOiBzZXNzaW9uPy51c2VyLFxyXG4gICAgICAgICAgICAgICAgY29tbWVudDogaW5wdXRWYWx1ZSxcclxuICAgICAgICAgICAgICAgIHRhc2s6IHRhc2suaWQsXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVkOiBuZXcgRGF0ZSgpXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBzZXRJbnB1dFZhbHVlKCcnKVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KGBgKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+VGFyZWZhIC0gRGV0YWxoZXMgZGEgdGFyZWZhPC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XHJcbiAgICAgICAgICAgICAgICA8aDE+VGFyZWZhPC9oMT5cclxuXHJcbiAgICAgICAgICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9e3N0eWxlcy50YXNrfT5cclxuICAgICAgICAgICAgICAgICAgICA8cD57dGFzay50YXJlZmF9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICAgICAgICA8L21haW4+XHJcblxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5jb21tZW50c0NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8aDI+RGVpeGFyIGNvbWVudMOhcmlvPC9oMj5cclxuXHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlQ29tbWVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dFZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGU6IENoYW5nZUV2ZW50PEhUTUxUZXh0QXJlYUVsZW1lbnQ+KSA9PiBzZXRJbnB1dFZhbHVlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEaWdpdGUgc2V1IGNvbWVudMOhcmlvIGFxdWkuLi5cIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXNlc3Npb24/LnVzZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEVudmlhciBjb21lbnTDoXJpb1xyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XHJcbiAgICBjb25zdCBpZCA9IHBhcmFtcz8uaWQgYXMgc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0IGRvY1JlZiA9IGRvYyhkYiwgXCJ0YXJlZmFzXCIsIGlkKVxyXG5cclxuICAgIGNvbnN0IHNuYXBzaG90ID0gYXdhaXQgZ2V0RG9jKGRvY1JlZilcclxuXHJcbiAgICBpZiAoIXNuYXBzaG90LmRhdGEoKSB8fCAhc25hcHNob3QuZGF0YSgpPy5pc1B1YmxpYykge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHJlZGlyZWN0OiB7XHJcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbjogJy8nLFxyXG4gICAgICAgICAgICAgICAgcGVybWFuZW50OiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG1pbGlzZWNvbmRzID0gc25hcHNob3QuZGF0YSgpPy5jcmVhdGVkPy5zZWNvbmRzICogMTAwMFxyXG5cclxuICAgIGNvbnN0IHRhc2sgPSB7XHJcbiAgICAgICAgaWQsXHJcbiAgICAgICAgY3JlYXRlZDogbmV3IERhdGUobWlsaXNlY29uZHMpLnRvTG9jYWxlRGF0ZVN0cmluZygpLFxyXG4gICAgICAgIGlzUHVibGljOiBzbmFwc2hvdC5kYXRhKCk/LmlzUHVibGljLFxyXG4gICAgICAgIHRhcmVmYTogc25hcHNob3QuZGF0YSgpPy50YXJlZmEsXHJcbiAgICAgICAgdXNlcjogc25hcHNob3QuZGF0YSgpPy51c2VyLFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgdGFzayxcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxufTsiXSwibmFtZXMiOlsiSGVhZCIsInN0eWxlcyIsImRiIiwiY29sbGVjdGlvbiIsImFkZERvYyIsIlRleHRhcmVhIiwidXNlU2Vzc2lvbiIsInVzZVN0YXRlIiwiVGFzayIsInRhc2siLCJkYXRhIiwic2Vzc2lvbiIsImlucHV0VmFsdWUiLCJzZXRJbnB1dFZhbHVlIiwiaGFuZGxlQ29tbWVudCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRyaW0iLCJhbGVydCIsInVzZXIiLCJlbWFpbCIsImRvY1JlZiIsImNvbW1lbnQiLCJpZCIsImNyZWF0ZWQiLCJEYXRlIiwiZXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJ0aXRsZSIsIm1haW4iLCJoMSIsImFydGljbGUiLCJwIiwidGFyZWZhIiwic2VjdGlvbiIsImNvbW1lbnRzQ29udGFpbmVyIiwiaDIiLCJmb3JtIiwib25TdWJtaXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJidXR0b24iLCJkaXNhYmxlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/task/[id].tsx\n"));

/***/ })

});