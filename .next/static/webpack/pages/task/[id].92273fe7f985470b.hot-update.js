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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Task; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.module.css */ \"./src/pages/task/styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_textarea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/textarea */ \"./src/components/textarea/index.tsx\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar __N_SSP = true;\nfunction Task(param) {\n    let { task } = param;\n    _s();\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)();\n    const [inputValue, setInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    async function handleComment(e) {\n        e.preventDefault();\n        if (inputValue.trim() === \"\") {\n            alert(\"Digite um coment\\xe1rio\");\n        }\n        if (!(session === null || session === void 0 ? void 0 : session.user)) {\n            alert(\"Voc\\xea precisa estar logado para comentar\");\n        }\n        alert(inputValue);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Tarefa - Detalhes da tarefa\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\projetos\\\\github\\\\tarefas\\\\src\\\\pages\\\\task\\\\[id].tsx\",\n                    lineNumber: 45,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\projetos\\\\github\\\\tarefas\\\\src\\\\pages\\\\task\\\\[id].tsx\",\n                lineNumber: 44,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Tarefa\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\projetos\\\\github\\\\tarefas\\\\src\\\\pages\\\\task\\\\[id].tsx\",\n                        lineNumber: 49,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().task),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: task.tarefa\n                        }, void 0, false, {\n                            fileName: \"C:\\\\projetos\\\\github\\\\tarefas\\\\src\\\\pages\\\\task\\\\[id].tsx\",\n                            lineNumber: 52,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\projetos\\\\github\\\\tarefas\\\\src\\\\pages\\\\task\\\\[id].tsx\",\n                        lineNumber: 51,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\projetos\\\\github\\\\tarefas\\\\src\\\\pages\\\\task\\\\[id].tsx\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().commentsContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Deixar coment\\xe1rio\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\projetos\\\\github\\\\tarefas\\\\src\\\\pages\\\\task\\\\[id].tsx\",\n                        lineNumber: 57,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: handleComment,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_textarea__WEBPACK_IMPORTED_MODULE_2__.Textarea, {\n                                value: inputValue,\n                                onChange: (e)=>setInputValue(e.target.value),\n                                placeholder: \"Digite seu coment\\xe1rio aqui...\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\projetos\\\\github\\\\tarefas\\\\src\\\\pages\\\\task\\\\[id].tsx\",\n                                lineNumber: 60,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                disabled: !(session === null || session === void 0 ? void 0 : session.user),\n                                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().button),\n                                children: \"Enviar coment\\xe1rio\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\projetos\\\\github\\\\tarefas\\\\src\\\\pages\\\\task\\\\[id].tsx\",\n                                lineNumber: 65,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\projetos\\\\github\\\\tarefas\\\\src\\\\pages\\\\task\\\\[id].tsx\",\n                        lineNumber: 59,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\projetos\\\\github\\\\tarefas\\\\src\\\\pages\\\\task\\\\[id].tsx\",\n                lineNumber: 56,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\projetos\\\\github\\\\tarefas\\\\src\\\\pages\\\\task\\\\[id].tsx\",\n        lineNumber: 43,\n        columnNumber: 9\n    }, this);\n}\n_s(Task, \"uh5FW6JEiSQgHENxJ/5rgu09KxI=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession\n    ];\n});\n_c = Task;\nvar _c;\n$RefreshReg$(_c, \"Task\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvdGFzay9baWRdLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDNkI7QUFDVztBQUlTO0FBQ0o7QUFDWTs7QUFZMUMsU0FBU0ssS0FBSyxLQUFlO1FBQWYsRUFBRUMsSUFBSSxFQUFTLEdBQWY7O0lBRXpCLE1BQU0sRUFBRUMsTUFBTUMsT0FBTyxFQUFFLEdBQUdMLDJEQUFVQTtJQUVwQyxNQUFNLENBQUNNLFlBQVlDLGNBQWMsR0FBR04sK0NBQVFBLENBQUM7SUFFN0MsZUFBZU8sY0FBY0MsQ0FBWTtRQUNyQ0EsRUFBRUMsY0FBYztRQUVoQixJQUFJSixXQUFXSyxJQUFJLE9BQU8sSUFBSTtZQUMxQkMsTUFBTTtRQUNWO1FBRUEsSUFBSSxFQUFDUCxvQkFBQUEsOEJBQUFBLFFBQVNRLElBQUksR0FBRTtZQUNoQkQsTUFBTTtRQUVWO1FBRUFBLE1BQU1OO0lBQ1Y7SUFFQSxxQkFDSSw4REFBQ1E7UUFBSUMsV0FBV2pCLHFFQUFnQjs7MEJBQzVCLDhEQUFDRCxrREFBSUE7MEJBQ0QsNEVBQUNvQjs4QkFBTTs7Ozs7Ozs7Ozs7MEJBR1gsOERBQUNDO2dCQUFLSCxXQUFXakIsZ0VBQVc7O2tDQUN4Qiw4REFBQ3FCO2tDQUFHOzs7Ozs7a0NBRUosOERBQUNDO3dCQUFRTCxXQUFXakIsZ0VBQVc7a0NBQzNCLDRFQUFDdUI7c0NBQUdsQixLQUFLbUIsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSXZCLDhEQUFDQztnQkFBUVIsV0FBV2pCLDZFQUF3Qjs7a0NBQ3hDLDhEQUFDMkI7a0NBQUc7Ozs7OztrQ0FFSiw4REFBQ0M7d0JBQUtDLFVBQVVuQjs7MENBQ1osOERBQUNULDBEQUFRQTtnQ0FDTDZCLE9BQU90QjtnQ0FDUHVCLFVBQVUsQ0FBQ3BCLElBQXdDRixjQUFjRSxFQUFFcUIsTUFBTSxDQUFDRixLQUFLO2dDQUMvRUcsYUFBWTs7Ozs7OzBDQUVoQiw4REFBQ0M7Z0NBQ0dDLFVBQVUsRUFBQzVCLG9CQUFBQSw4QkFBQUEsUUFBU1EsSUFBSTtnQ0FDeEJFLFdBQVdqQixrRUFBYTswQ0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT2xEO0dBckR3Qkk7O1FBRU1GLHVEQUFVQTs7O0tBRmhCRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvdGFzay9baWRdLnRzeD83NzY2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wcyB9IGZyb20gXCJuZXh0XCJcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5jc3MnXHJcblxyXG5pbXBvcnQgeyBkYiB9IGZyb20gXCJAL3NlcnZpY2VzL2ZpcmViYXNlQ29ubmVjdGlvblwiO1xyXG5pbXBvcnQgeyBkb2MsIGNvbGxlY3Rpb24sIHF1ZXJ5LCB3aGVyZSwgZ2V0RG9jIH0gZnJvbSAnZmlyZWJhc2UvZmlyZXN0b3JlJ1xyXG5pbXBvcnQgeyBUZXh0YXJlYSB9IGZyb20gXCJAL2NvbXBvbmVudHMvdGV4dGFyZWFcIjtcclxuaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIENoYW5nZUV2ZW50LCBGb3JtRXZlbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmludGVyZmFjZSBJVGFzayB7XHJcbiAgICB0YXNrOiB7XHJcbiAgICAgICAgaWQ6IHN0cmluZztcclxuICAgICAgICBjcmVhdGVkOiBzdHJpbmc7XHJcbiAgICAgICAgaXNQdWJsaWM6IGJvb2xlYW47XHJcbiAgICAgICAgdGFyZWZhOiBzdHJpbmc7XHJcbiAgICAgICAgdXNlcjogc3RyaW5nO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUYXNrKHsgdGFzayB9OiBJVGFzaykge1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YTogc2Vzc2lvbiB9ID0gdXNlU2Vzc2lvbigpO1xyXG5cclxuICAgIGNvbnN0IFtpbnB1dFZhbHVlLCBzZXRJbnB1dFZhbHVlXSA9IHVzZVN0YXRlKCcnKVxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUNvbW1lbnQoZTogRm9ybUV2ZW50KSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBpZiAoaW5wdXRWYWx1ZS50cmltKCkgPT09ICcnKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdEaWdpdGUgdW0gY29tZW50w6FyaW8nKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFzZXNzaW9uPy51c2VyKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdWb2PDqiBwcmVjaXNhIGVzdGFyIGxvZ2FkbyBwYXJhIGNvbWVudGFyJylcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhbGVydChpbnB1dFZhbHVlKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5UYXJlZmEgLSBEZXRhbGhlcyBkYSB0YXJlZmE8L3RpdGxlPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cclxuICAgICAgICAgICAgICAgIDxoMT5UYXJlZmE8L2gxPlxyXG5cclxuICAgICAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT17c3R5bGVzLnRhc2t9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPnt0YXNrLnRhcmVmYX08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICAgICAgIDwvbWFpbj5cclxuXHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmNvbW1lbnRzQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxoMj5EZWl4YXIgY29tZW50w6FyaW88L2gyPlxyXG5cclxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVDb21tZW50fT5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dGFyZWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0VmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZTogQ2hhbmdlRXZlbnQ8SFRNTFRleHRBcmVhRWxlbWVudD4pID0+IHNldElucHV0VmFsdWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRpZ2l0ZSBzZXUgY29tZW50w6FyaW8gYXF1aS4uLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshc2Vzc2lvbj8udXNlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRW52aWFyIGNvbWVudMOhcmlvXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcclxuICAgIGNvbnN0IGlkID0gcGFyYW1zPy5pZCBhcyBzdHJpbmc7XHJcblxyXG4gICAgY29uc3QgZG9jUmVmID0gZG9jKGRiLCBcInRhcmVmYXNcIiwgaWQpXHJcblxyXG4gICAgY29uc3Qgc25hcHNob3QgPSBhd2FpdCBnZXREb2MoZG9jUmVmKVxyXG5cclxuICAgIGlmICghc25hcHNob3QuZGF0YSgpIHx8ICFzbmFwc2hvdC5kYXRhKCk/LmlzUHVibGljKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcmVkaXJlY3Q6IHtcclxuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uOiAnLycsXHJcbiAgICAgICAgICAgICAgICBwZXJtYW5lbnQ6IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbWlsaXNlY29uZHMgPSBzbmFwc2hvdC5kYXRhKCk/LmNyZWF0ZWQ/LnNlY29uZHMgKiAxMDAwXHJcblxyXG4gICAgY29uc3QgdGFzayA9IHtcclxuICAgICAgICBpZCxcclxuICAgICAgICBjcmVhdGVkOiBuZXcgRGF0ZShtaWxpc2Vjb25kcykudG9Mb2NhbGVEYXRlU3RyaW5nKCksXHJcbiAgICAgICAgaXNQdWJsaWM6IHNuYXBzaG90LmRhdGEoKT8uaXNQdWJsaWMsXHJcbiAgICAgICAgdGFyZWZhOiBzbmFwc2hvdC5kYXRhKCk/LnRhcmVmYSxcclxuICAgICAgICB1c2VyOiBzbmFwc2hvdC5kYXRhKCk/LnVzZXIsXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICB0YXNrLFxyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG59OyJdLCJuYW1lcyI6WyJIZWFkIiwic3R5bGVzIiwiVGV4dGFyZWEiLCJ1c2VTZXNzaW9uIiwidXNlU3RhdGUiLCJUYXNrIiwidGFzayIsImRhdGEiLCJzZXNzaW9uIiwiaW5wdXRWYWx1ZSIsInNldElucHV0VmFsdWUiLCJoYW5kbGVDb21tZW50IiwiZSIsInByZXZlbnREZWZhdWx0IiwidHJpbSIsImFsZXJ0IiwidXNlciIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsInRpdGxlIiwibWFpbiIsImgxIiwiYXJ0aWNsZSIsInAiLCJ0YXJlZmEiLCJzZWN0aW9uIiwiY29tbWVudHNDb250YWluZXIiLCJoMiIsImZvcm0iLCJvblN1Ym1pdCIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsImRpc2FibGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/task/[id].tsx\n"));

/***/ })

});