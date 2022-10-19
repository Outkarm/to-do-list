/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./_mock_/utilities.js":
/*!*****************************!*\
  !*** ./_mock_/utilities.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// import allTask from \"../modules/tasks-array-module\";\n// import localStorageUpdate from \"../modules/dynamic-storage-update\";\n/* eslint-disable */\r\nconst editTask = (obj, indx) => {\r\n  obj.contentEditable = \"true\";\r\n  obj.onkeydown = (event) => {\r\n    if (event.key === \"Enter\") {\r\n      obj.contentEditable = \"false\";\r\n      allTask.forEach((e) => {\r\n        if (e.index === Number(indx)) {\r\n          e.description = obj.innerText;\r\n        }\r\n      });\r\n      localStorageUpdate(allTask);\r\n    }\r\n  };\r\n};\r\n\r\nconst checkCompleted = (nod) => {\r\n  const checker = nod.querySelector(\"input\");\r\n\r\n  const indexHolder = Number(nod.dataset.index);\r\n  const descriptionHolder = nod.querySelector(\".description\");\r\n\r\n  if (checker.checked) {\r\n    nod.dataset.completed = true;\r\n    allTask.forEach((e) => {\r\n      if (e.index === indexHolder) {\r\n        e.completed = true;\r\n      }\r\n    });\r\n    descriptionHolder.classList.add(\"cross-out\");\r\n  } else {\r\n    nod.dataset.completed = false;\r\n    allTask.forEach((e) => {\r\n      if (e.index === indexHolder) {\r\n        e.completed = false;\r\n      }\r\n    });\r\n    descriptionHolder.classList.remove(\"cross-out\");\r\n  }\r\n  localStorageUpdate(allTask);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ checkCompleted, editTask });\r\n\n\n//# sourceURL=webpack://webpack/./_mock_/utilities.js?");

/***/ }),

/***/ "./modules/check-completed.js":
/*!************************************!*\
  !*** ./modules/check-completed.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _tasks_array_module_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks-array-module.js */ \"./modules/tasks-array-module.js\");\n/* harmony import */ var _dynamic_storage_update_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dynamic-storage-update.js */ \"./modules/dynamic-storage-update.js\");\n/* harmony import */ var _mock_utilities_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_mock_/utilities.js */ \"./_mock_/utilities.js\");\n/* eslint-disable */\r\n\r\n\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_mock_utilities_js__WEBPACK_IMPORTED_MODULE_2__.checkCompleted);\r\n\n\n//# sourceURL=webpack://webpack/./modules/check-completed.js?");

/***/ }),

/***/ "./modules/create-task-node.js":
/*!*************************************!*\
  !*** ./modules/create-task-node.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _remove_task_node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./remove-task-node.js */ \"./modules/remove-task-node.js\");\n/* harmony import */ var _edit_existing_task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-existing-task.js */ \"./modules/edit-existing-task.js\");\n/* harmony import */ var _check_completed_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./check-completed.js */ \"./modules/check-completed.js\");\n\n\n\n\nconst taskNode = (obj) => {\n  const newTask = document.createElement('div');\n  const newTaskContainer = document.createElement('div');\n  const checkMarkInput = document.createElement('input');\n  const objDescription = document.createElement('span');\n  const taskController = document.createElement('i');\n\n  checkMarkInput.type = 'checkbox';\n  objDescription.innerText = `${obj.description}`;\n  taskController.classList.add('fa-solid', 'fa-ellipsis-vertical', 'mttca');\n  objDescription.classList.add('content');\n\n  taskController.onmouseover = () => {\n    taskController.classList.remove('fa-solid', 'fa-ellipsis-vertical');\n    taskController.classList.add('fa-solid', 'fa-trash');\n  };\n\n  taskController.onmouseout = () => {\n    taskController.classList.remove('fa-solid', 'fa-trash');\n    taskController.classList.add('fa-solid', 'fa-ellipsis-vertical');\n  };\n\n  newTaskContainer.appendChild(checkMarkInput);\n  newTaskContainer.appendChild(objDescription);\n\n  newTask.appendChild(newTaskContainer);\n  newTask.appendChild(taskController);\n\n  newTask.dataset.index = obj.index;\n  newTask.dataset.completed = obj.completed;\n  newTask.classList.add('show');\n\n  taskController.addEventListener('click', () => {\n    (0,_remove_task_node_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(obj.index, newTask);\n  });\n\n  objDescription.addEventListener('click', () => {\n    (0,_edit_existing_task_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(objDescription, newTask.dataset.index);\n  });\n\n  checkMarkInput.addEventListener('change', () => {\n    (0,_check_completed_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(newTask);\n  });\n\n  if (obj.completed) {\n    checkMarkInput.checked = true;\n    objDescription.classList.add('cancel');\n  }\n\n  return newTask;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskNode);\n\n\n//# sourceURL=webpack://webpack/./modules/create-task-node.js?");

/***/ }),

/***/ "./modules/create-tasks-array.js":
/*!***************************************!*\
  !*** ./modules/create-tasks-array.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"populateAllTaskArray\": () => (/* binding */ populateAllTaskArray)\n/* harmony export */ });\n/* harmony import */ var _task_template_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task-template.js */ \"./modules/task-template.js\");\n/* harmony import */ var _dynamic_storage_update_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dynamic-storage-update.js */ \"./modules/dynamic-storage-update.js\");\n/* harmony import */ var _re_order_tasks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./re-order-tasks.js */ \"./modules/re-order-tasks.js\");\n/* harmony import */ var _display_task_node_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./display-task-node.js */ \"./modules/display-task-node.js\");\n/* harmony import */ var _tasks_array_module_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tasks-array-module.js */ \"./modules/tasks-array-module.js\");\n\n\n\n\n\n\nconst populateAllTaskArray = (describe) => {\n  (0,_dynamic_storage_update_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_tasks_array_module_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n  const newTaskObject = new _task_template_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](describe);\n  _tasks_array_module_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].push(newTaskObject);\n  (0,_re_order_tasks_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_tasks_array_module_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n  (0,_display_task_node_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(newTaskObject);\n  (0,_dynamic_storage_update_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_tasks_array_module_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (populateAllTaskArray);\n\n\n//# sourceURL=webpack://webpack/./modules/create-tasks-array.js?");

/***/ }),

/***/ "./modules/display-task-node.js":
/*!**************************************!*\
  !*** ./modules/display-task-node.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"toDoList\": () => (/* binding */ toDoList)\n/* harmony export */ });\n/* harmony import */ var _create_task_node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-task-node.js */ \"./modules/create-task-node.js\");\n\n\nconst toDoList = document.querySelector('#to-do-list');\n\nconst displayTaskNode = (obj) => {\n  const separator = document.createElement('hr');\n  const taskReturn = (0,_create_task_node_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(obj);\n  toDoList.appendChild(taskReturn);\n  taskReturn.after(separator);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayTaskNode);\n\n\n//# sourceURL=webpack://webpack/./modules/display-task-node.js?");

/***/ }),

/***/ "./modules/dynamic-storage-update.js":
/*!*******************************************!*\
  !*** ./modules/dynamic-storage-update.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst localStorageUpdate = (storeArr) => {\n  localStorage.setItem('taskStorageArray', JSON.stringify(storeArr));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localStorageUpdate);\n\n\n//# sourceURL=webpack://webpack/./modules/dynamic-storage-update.js?");

/***/ }),

/***/ "./modules/edit-existing-task.js":
/*!***************************************!*\
  !*** ./modules/edit-existing-task.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _tasks_array_module_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks-array-module.js */ \"./modules/tasks-array-module.js\");\n/* harmony import */ var _dynamic_storage_update_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dynamic-storage-update.js */ \"./modules/dynamic-storage-update.js\");\n/* harmony import */ var _mock_utilities_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_mock_/utilities.js */ \"./_mock_/utilities.js\");\n/* eslint-disable */\r\n\r\n\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_mock_utilities_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\r\n\n\n//# sourceURL=webpack://webpack/./modules/edit-existing-task.js?");

/***/ }),

/***/ "./modules/re-order-tasks.js":
/*!***********************************!*\
  !*** ./modules/re-order-tasks.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst reOrderTasks = (arr) => {\n  let indexer = 1;\n  arr.forEach((e) => {\n    e.index = indexer;\n    indexer += 1;\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reOrderTasks);\n\n\n//# sourceURL=webpack://webpack/./modules/re-order-tasks.js?");

/***/ }),

/***/ "./modules/remove-task-node.js":
/*!*************************************!*\
  !*** ./modules/remove-task-node.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _tasks_array_module_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks-array-module.js */ \"./modules/tasks-array-module.js\");\n/* harmony import */ var _dynamic_storage_update_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dynamic-storage-update.js */ \"./modules/dynamic-storage-update.js\");\n/* harmony import */ var _re_order_tasks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./re-order-tasks.js */ \"./modules/re-order-tasks.js\");\n\n\n\n\nconst removeNode = (obj, currNode) => {\n  let flag = 0;\n  _tasks_array_module_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].forEach((e) => {\n    if (e.index === obj) {\n      flag = _tasks_array_module_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].indexOf(e);\n      currNode.parentNode.removeChild(currNode.nextSibling);\n      currNode.parentNode.removeChild(currNode);\n    }\n  });\n  _tasks_array_module_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].splice(flag, 1);\n  (0,_re_order_tasks_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_tasks_array_module_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n  (0,_dynamic_storage_update_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_tasks_array_module_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeNode);\n\n\n//# sourceURL=webpack://webpack/./modules/remove-task-node.js?");

/***/ }),

/***/ "./modules/task-template.js":
/*!**********************************!*\
  !*** ./modules/task-template.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass NewTaskTemplate {\n  constructor(str, boole = false, num = 0) {\n    this.description = str;\n    this.completed = boole;\n    this.index = num;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewTaskTemplate);\n\n\n//# sourceURL=webpack://webpack/./modules/task-template.js?");

/***/ }),

/***/ "./modules/tasks-array-module.js":
/*!***************************************!*\
  !*** ./modules/tasks-array-module.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst allTask = JSON.parse(localStorage.getItem('taskStorageArray')) || [];\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (allTask);\n\n\n//# sourceURL=webpack://webpack/./modules/tasks-array-module.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  box-sizing: border-box;\\r\\n  font-family: cursive;\\r\\n  transition: 0.5s;\\r\\n}\\r\\n\\r\\n.to-do-container {\\r\\n  border: 5px solid rgb(29, 28, 28);\\r\\n  width: 62vw;\\r\\n  margin-left: auto;\\r\\n  margin-right: auto;\\r\\n  margin-top: 50px;\\r\\n}\\r\\n\\r\\n.show {\\r\\n  padding-left: 16px;\\r\\n  padding-right: 16px;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  height: 50px;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n#task {\\r\\n  padding-left: 16px;\\r\\n  padding-right: 16px;\\r\\n  height: 50px;\\r\\n  width: 100%;\\r\\n  border: none;\\r\\n  font-style: italic;\\r\\n}\\r\\n\\r\\n#label {\\r\\n  height: 50px;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  padding-left: 16px;\\r\\n  padding-right: 16px;\\r\\n}\\r\\n\\r\\n.content {\\r\\n  padding-top: 8px;\\r\\n  padding-bottom: 8px;\\r\\n  margin-left: 16px;\\r\\n  max-width: 35%;\\r\\n}\\r\\n\\r\\n.cancel {\\r\\n  text-decoration: line-through;\\r\\n  color: rgb(173, 140, 140);\\r\\n}\\r\\n\\r\\n.mttca {\\r\\n  width: 2rem;\\r\\n  height: 75%;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n#clear-the-completed-task {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  background-color: rgba(145, 93, 93, 0.521);\\r\\n  width: 100%;\\r\\n  height: 50px;\\r\\n}\\r\\n\\r\\n#clear-btn {\\r\\n  margin-left: auto;\\r\\n  margin-right: auto;\\r\\n  background-color: rgba(27, 18, 18, 0);\\r\\n  border: none;\\r\\n  padding: 8px;\\r\\n  font-weight: 550;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_tasks_array_module_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/tasks-array-module.js */ \"./modules/tasks-array-module.js\");\n/* harmony import */ var _modules_create_tasks_array_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/create-tasks-array.js */ \"./modules/create-tasks-array.js\");\n/* harmony import */ var _modules_display_task_node_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/display-task-node.js */ \"./modules/display-task-node.js\");\n/* harmony import */ var _modules_dynamic_storage_update_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/dynamic-storage-update.js */ \"./modules/dynamic-storage-update.js\");\n/* harmony import */ var _modules_re_order_tasks_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modules/re-order-tasks.js */ \"./modules/re-order-tasks.js\");\n\n\n\n\n\n\n\nconst taskInput = document.querySelector('#task');\nconst resetBtn = document.querySelector('#reset-button');\nconst clearCompleted = document.querySelector('#clear-btn');\n\n_modules_tasks_array_module_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].forEach((e) => {\n  (0,_modules_display_task_node_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(e);\n});\n\ntaskInput.addEventListener('keydown', (event) => {\n  if (event.key === 'Enter') {\n    if (taskInput.value.length <= 1) {\n      return;\n    }\n    (0,_modules_create_tasks_array_js__WEBPACK_IMPORTED_MODULE_2__.populateAllTaskArray)(taskInput.value);\n    taskInput.value = '';\n  }\n});\n\nresetBtn.addEventListener('click', () => {\n  localStorage.clear();\n  _modules_tasks_array_module_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].splice(_modules_tasks_array_module_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"][0]);\n  while (_modules_display_task_node_js__WEBPACK_IMPORTED_MODULE_3__.toDoList.firstChild) {\n    _modules_display_task_node_js__WEBPACK_IMPORTED_MODULE_3__.toDoList.removeChild(_modules_display_task_node_js__WEBPACK_IMPORTED_MODULE_3__.toDoList.lastChild);\n  }\n});\n\nclearCompleted.addEventListener('click', () => {\n  const filterComplete = _modules_tasks_array_module_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].filter((e) => e.completed === false);\n  (0,_modules_re_order_tasks_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(filterComplete);\n  (0,_modules_dynamic_storage_update_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(filterComplete);\n\n  window.location.reload();\n});\n\n\n//# sourceURL=webpack://webpack/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;