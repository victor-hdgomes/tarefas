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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Task; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.module.css */ \"./src/pages/task/styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_textarea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/textarea */ \"./src/components/textarea/index.tsx\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar __N_SSP = true;\nfunction Task(param) {\n    let { task } = param;\n    _s();\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)();\n    const [inputValue, setInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    async function handleComment(e) {\n        var _session_user;\n        e.preventDefault();\n        if (inputValue.trim() === \"\") {\n            alert(\"Digite um coment\\xe1rio\");\n        }\n        if (!(session === null || session === void 0 ? void 0 : session.user) || !(session === null || session === void 0 ? void 0 : (_session_user = session.user) === null || _session_user === void 0 ? void 0 : _session_user.email)) {\n            alert(\"Voc\\xea precisa estar logado para comentar\");\n        }\n        try {} catch (error) {}\n        alert(inputValue);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Tarefa - Detalhes da tarefa\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\projetos\\\\github\\\\tarefas\\\\src\\\\pages\\\\task\\\\[id].tsx\",\n                    lineNumber: 49,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\projetos\\\\github\\\\tarefas\\\\src\\\\pages\\\\task\\\\[id].tsx\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Tarefa\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\projetos\\\\github\\\\tarefas\\\\src\\\\pages\\\\task\\\\[id].tsx\",\n                        lineNumber: 53,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().task),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: task.tarefa\n                        }, void 0, false, {\n                            fileName: \"C:\\\\projetos\\\\github\\\\tarefas\\\\src\\\\pages\\\\task\\\\[id].tsx\",\n                            lineNumber: 56,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\projetos\\\\github\\\\tarefas\\\\src\\\\pages\\\\task\\\\[id].tsx\",\n                        lineNumber: 55,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\projetos\\\\github\\\\tarefas\\\\src\\\\pages\\\\task\\\\[id].tsx\",\n                lineNumber: 52,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().commentsContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Deixar coment\\xe1rio\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\projetos\\\\github\\\\tarefas\\\\src\\\\pages\\\\task\\\\[id].tsx\",\n                        lineNumber: 61,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: handleComment,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_textarea__WEBPACK_IMPORTED_MODULE_2__.Textarea, {\n                                value: inputValue,\n                                onChange: (e)=>setInputValue(e.target.value),\n                                placeholder: \"Digite seu coment\\xe1rio aqui...\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\projetos\\\\github\\\\tarefas\\\\src\\\\pages\\\\task\\\\[id].tsx\",\n                                lineNumber: 64,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                disabled: !(session === null || session === void 0 ? void 0 : session.user),\n                                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().button),\n                                children: \"Enviar coment\\xe1rio\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\projetos\\\\github\\\\tarefas\\\\src\\\\pages\\\\task\\\\[id].tsx\",\n                                lineNumber: 69,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\projetos\\\\github\\\\tarefas\\\\src\\\\pages\\\\task\\\\[id].tsx\",\n                        lineNumber: 63,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\projetos\\\\github\\\\tarefas\\\\src\\\\pages\\\\task\\\\[id].tsx\",\n                lineNumber: 60,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\projetos\\\\github\\\\tarefas\\\\src\\\\pages\\\\task\\\\[id].tsx\",\n        lineNumber: 47,\n        columnNumber: 9\n    }, this);\n}\n_s(Task, \"uh5FW6JEiSQgHENxJ/5rgu09KxI=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession\n    ];\n});\n_c = Task;\nvar _c;\n$RefreshReg$(_c, \"Task\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvdGFzay9baWRdLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDNkI7QUFDVztBQUlTO0FBQ0o7QUFDWTs7QUFZMUMsU0FBU0ssS0FBSyxLQUFlO1FBQWYsRUFBRUMsSUFBSSxFQUFTLEdBQWY7O0lBRXpCLE1BQU0sRUFBRUMsTUFBTUMsT0FBTyxFQUFFLEdBQUdMLDJEQUFVQTtJQUVwQyxNQUFNLENBQUNNLFlBQVlDLGNBQWMsR0FBR04sK0NBQVFBLENBQUM7SUFFN0MsZUFBZU8sY0FBY0MsQ0FBWTtZQU9kSjtRQU52QkksRUFBRUMsY0FBYztRQUVoQixJQUFJSixXQUFXSyxJQUFJLE9BQU8sSUFBSTtZQUMxQkMsTUFBTTtRQUNWO1FBRUEsSUFBSSxFQUFDUCxvQkFBQUEsOEJBQUFBLFFBQVNRLElBQUksS0FBSSxFQUFDUixvQkFBQUEsK0JBQUFBLGdCQUFBQSxRQUFTUSxJQUFJLGNBQWJSLG9DQUFBQSxjQUFlUyxLQUFLLEdBQUU7WUFDekNGLE1BQU07UUFDVjtRQUVBLElBQUksQ0FFSixFQUFFLE9BQU9HLE9BQU8sQ0FFaEI7UUFDQUgsTUFBTU47SUFDVjtJQUVBLHFCQUNJLDhEQUFDVTtRQUFJQyxXQUFXbkIscUVBQWdCOzswQkFDNUIsOERBQUNELGtEQUFJQTswQkFDRCw0RUFBQ3NCOzhCQUFNOzs7Ozs7Ozs7OzswQkFHWCw4REFBQ0M7Z0JBQUtILFdBQVduQixnRUFBVzs7a0NBQ3hCLDhEQUFDdUI7a0NBQUc7Ozs7OztrQ0FFSiw4REFBQ0M7d0JBQVFMLFdBQVduQixnRUFBVztrQ0FDM0IsNEVBQUN5QjtzQ0FBR3BCLEtBQUtxQixNQUFNOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFJdkIsOERBQUNDO2dCQUFRUixXQUFXbkIsNkVBQXdCOztrQ0FDeEMsOERBQUM2QjtrQ0FBRzs7Ozs7O2tDQUVKLDhEQUFDQzt3QkFBS0MsVUFBVXJCOzswQ0FDWiw4REFBQ1QsMERBQVFBO2dDQUNMK0IsT0FBT3hCO2dDQUNQeUIsVUFBVSxDQUFDdEIsSUFBd0NGLGNBQWNFLEVBQUV1QixNQUFNLENBQUNGLEtBQUs7Z0NBQy9FRyxhQUFZOzs7Ozs7MENBRWhCLDhEQUFDQztnQ0FDR0MsVUFBVSxFQUFDOUIsb0JBQUFBLDhCQUFBQSxRQUFTUSxJQUFJO2dDQUN4QkksV0FBV25CLGtFQUFhOzBDQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPbEQ7R0F6RHdCSTs7UUFFTUYsdURBQVVBOzs7S0FGaEJFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy90YXNrL1tpZF0udHN4Pzc3NjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSBcIm5leHRcIlxyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLmNzcydcclxuXHJcbmltcG9ydCB7IGRiIH0gZnJvbSBcIkAvc2VydmljZXMvZmlyZWJhc2VDb25uZWN0aW9uXCI7XHJcbmltcG9ydCB7IGRvYywgY29sbGVjdGlvbiwgcXVlcnksIHdoZXJlLCBnZXREb2MgfSBmcm9tICdmaXJlYmFzZS9maXJlc3RvcmUnXHJcbmltcG9ydCB7IFRleHRhcmVhIH0gZnJvbSBcIkAvY29tcG9uZW50cy90ZXh0YXJlYVwiO1xyXG5pbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgQ2hhbmdlRXZlbnQsIEZvcm1FdmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW50ZXJmYWNlIElUYXNrIHtcclxuICAgIHRhc2s6IHtcclxuICAgICAgICBpZDogc3RyaW5nO1xyXG4gICAgICAgIGNyZWF0ZWQ6IHN0cmluZztcclxuICAgICAgICBpc1B1YmxpYzogYm9vbGVhbjtcclxuICAgICAgICB0YXJlZmE6IHN0cmluZztcclxuICAgICAgICB1c2VyOiBzdHJpbmc7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRhc2soeyB0YXNrIH06IElUYXNrKSB7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhOiBzZXNzaW9uIH0gPSB1c2VTZXNzaW9uKCk7XHJcblxyXG4gICAgY29uc3QgW2lucHV0VmFsdWUsIHNldElucHV0VmFsdWVdID0gdXNlU3RhdGUoJycpXHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlQ29tbWVudChlOiBGb3JtRXZlbnQpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGlmIChpbnB1dFZhbHVlLnRyaW0oKSA9PT0gJycpIHtcclxuICAgICAgICAgICAgYWxlcnQoJ0RpZ2l0ZSB1bSBjb21lbnTDoXJpbycpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXNlc3Npb24/LnVzZXIgfHwgIXNlc3Npb24/LnVzZXI/LmVtYWlsKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdWb2PDqiBwcmVjaXNhIGVzdGFyIGxvZ2FkbyBwYXJhIGNvbWVudGFyJylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBhbGVydChpbnB1dFZhbHVlKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5UYXJlZmEgLSBEZXRhbGhlcyBkYSB0YXJlZmE8L3RpdGxlPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cclxuICAgICAgICAgICAgICAgIDxoMT5UYXJlZmE8L2gxPlxyXG5cclxuICAgICAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT17c3R5bGVzLnRhc2t9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPnt0YXNrLnRhcmVmYX08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICAgICAgIDwvbWFpbj5cclxuXHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmNvbW1lbnRzQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxoMj5EZWl4YXIgY29tZW50w6FyaW88L2gyPlxyXG5cclxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVDb21tZW50fT5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dGFyZWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0VmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZTogQ2hhbmdlRXZlbnQ8SFRNTFRleHRBcmVhRWxlbWVudD4pID0+IHNldElucHV0VmFsdWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRpZ2l0ZSBzZXUgY29tZW50w6FyaW8gYXF1aS4uLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshc2Vzc2lvbj8udXNlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRW52aWFyIGNvbWVudMOhcmlvXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcclxuICAgIGNvbnN0IGlkID0gcGFyYW1zPy5pZCBhcyBzdHJpbmc7XHJcblxyXG4gICAgY29uc3QgZG9jUmVmID0gZG9jKGRiLCBcInRhcmVmYXNcIiwgaWQpXHJcblxyXG4gICAgY29uc3Qgc25hcHNob3QgPSBhd2FpdCBnZXREb2MoZG9jUmVmKVxyXG5cclxuICAgIGlmICghc25hcHNob3QuZGF0YSgpIHx8ICFzbmFwc2hvdC5kYXRhKCk/LmlzUHVibGljKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcmVkaXJlY3Q6IHtcclxuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uOiAnLycsXHJcbiAgICAgICAgICAgICAgICBwZXJtYW5lbnQ6IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbWlsaXNlY29uZHMgPSBzbmFwc2hvdC5kYXRhKCk/LmNyZWF0ZWQ/LnNlY29uZHMgKiAxMDAwXHJcblxyXG4gICAgY29uc3QgdGFzayA9IHtcclxuICAgICAgICBpZCxcclxuICAgICAgICBjcmVhdGVkOiBuZXcgRGF0ZShtaWxpc2Vjb25kcykudG9Mb2NhbGVEYXRlU3RyaW5nKCksXHJcbiAgICAgICAgaXNQdWJsaWM6IHNuYXBzaG90LmRhdGEoKT8uaXNQdWJsaWMsXHJcbiAgICAgICAgdGFyZWZhOiBzbmFwc2hvdC5kYXRhKCk/LnRhcmVmYSxcclxuICAgICAgICB1c2VyOiBzbmFwc2hvdC5kYXRhKCk/LnVzZXIsXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICB0YXNrLFxyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG59OyJdLCJuYW1lcyI6WyJIZWFkIiwic3R5bGVzIiwiVGV4dGFyZWEiLCJ1c2VTZXNzaW9uIiwidXNlU3RhdGUiLCJUYXNrIiwidGFzayIsImRhdGEiLCJzZXNzaW9uIiwiaW5wdXRWYWx1ZSIsInNldElucHV0VmFsdWUiLCJoYW5kbGVDb21tZW50IiwiZSIsInByZXZlbnREZWZhdWx0IiwidHJpbSIsImFsZXJ0IiwidXNlciIsImVtYWlsIiwiZXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJ0aXRsZSIsIm1haW4iLCJoMSIsImFydGljbGUiLCJwIiwidGFyZWZhIiwic2VjdGlvbiIsImNvbW1lbnRzQ29udGFpbmVyIiwiaDIiLCJmb3JtIiwib25TdWJtaXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJidXR0b24iLCJkaXNhYmxlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/task/[id].tsx\n"));

/***/ })

});