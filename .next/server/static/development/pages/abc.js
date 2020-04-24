module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/abc.jsx":
/*!***********************!*\
  !*** ./pages/abc.jsx ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! yup */ "yup");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Delete */ "@material-ui/icons/Delete");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Edit */ "@material-ui/icons/Edit");
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/home/lewin/crud-operation-mongo/pages/abc.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const formValidationSchema = yup__WEBPACK_IMPORTED_MODULE_1__["object"]().shape({
  name: yup__WEBPACK_IMPORTED_MODULE_1__["string"]().min(2, "Too Short!").max(25, "Too Long!").required("Name is required"),
  mobile: yup__WEBPACK_IMPORTED_MODULE_1__["string"]().min(2, "Too Short!").max(25, "Too Long!").min(6, "Password has to be longer than 6 characters!").required("Valid password  is required"),
  email: yup__WEBPACK_IMPORTED_MODULE_1__["string"]().min(2, "Too Short!").max(25, "Too Long!").required("Email is required"),
  age: yup__WEBPACK_IMPORTED_MODULE_1__["string"]().min(2, "Too Short!").max(25, "Too Long!").required("Age  is required"),
  bloodgroup: yup__WEBPACK_IMPORTED_MODULE_1__["string"]().min(2, "Too Short!").max(25, "Too Long!").required("blood group is required"),
  address: yup__WEBPACK_IMPORTED_MODULE_1__["string"]().min(2, "Too Short!").max(25, "Too Long!").required("Address is required")
});
const initialValues = {
  name: "",
  mobile: "",
  email: "",
  age: "",
  bloodgroup: "",
  address: ""
};

const index = () => {
  // For View data
  const {
    0: students,
    1: seStudents
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);

  const getData = async () => {
    try {
      const {
        data: {
          data
        }
      } = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("http://localhost:3000"); // const response = await axios.get("http://localhost:3000");
      // const data = response.data.data;

      seStudents(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const addData = values => {
    try {
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("http://localhost:3000", values);
      getData();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteData = name => {
    try {
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.delete(`http://localhost:3000?name=${name}`);
      getData();
    } catch (error) {
      console.log(error);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getData();
  });
  return __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], {
    initialValues: initialValues,
    validationSchema: formValidationSchema,
    onSubmit: values => {
      addData(values);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 5
    }
  }, ({
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    touched
  }) => {
    // console.log(errors);
    return __jsx("form", {
      onSubmit: handleSubmit,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 11
      }
    }, __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
      style: {
        height: "auto",
        width: "90%",
        backgroundColor: "white",
        marginLeft: "60px",
        marginTop: "30px",
        boxShadow: "  1px 4px  7px 5px #E5E5E5"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 15
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
      style: {
        display: "flex"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 17
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
      style: {
        flex: 2,
        padding: "0px 20px",
        height: "100%",
        backgroundColor: "white"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 19
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
      style: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "spacebetween"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 23
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Input"], {
      name: "name",
      value: values.name,
      onChange: handleChange,
      type: "text",
      placeholder: "Full Name ",
      disableUnderline: true,
      onChange: handleChange,
      onBlur: handleBlur,
      style: {
        borderRadius: "4px",
        marginTop: "20px",
        backgroundColor: "#F1F1F1",
        marginRight: "20px",
        padding: "10px",
        border: "1px solid  #E5E5E5 "
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 25
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
      style: {
        fontSize: 12,
        color: "red"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 25
      }
    }, touched.name && errors.name)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 23
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Input"], {
      name: "mobile",
      value: values.mobile,
      onChange: handleChange,
      onBlur: handleBlur,
      type: "number",
      placeholder: "Mobile No ",
      disableUnderline: true,
      style: {
        borderRadius: "4px",
        marginTop: "20px",
        backgroundColor: "#F1F1F1",
        marginRight: "20px",
        padding: "10px",
        border: "1px solid  #E5E5E5 "
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 25
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
      style: {
        fontSize: 12,
        color: "red"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 25
      }
    }, touched.mobile && errors.mobile))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
      style: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "spacebetween"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 23
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Input"], {
      name: "email",
      value: values.email,
      onChange: handleChange,
      onBlur: handleBlur,
      type: "text",
      placeholder: "Email ",
      disableUnderline: true,
      style: {
        borderRadius: "4px",
        marginTop: "20px",
        backgroundColor: "#F1F1F1",
        marginRight: "20px",
        padding: "10px",
        border: "1px solid  #E5E5E5 "
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 25
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
      style: {
        fontSize: 12,
        color: "red"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 25
      }
    }, touched.email && errors.email)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224,
        columnNumber: 23
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Input"], {
      name: "age",
      value: values.age,
      onChange: handleChange,
      onBlur: handleBlur,
      type: "number",
      placeholder: "Age ",
      disableUnderline: true,
      style: {
        borderRadius: "4px",
        marginTop: "20px",
        backgroundColor: "#F1F1F1",
        marginRight: "20px",
        padding: "10px",
        border: "1px solid  #E5E5E5 "
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 25
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
      style: {
        fontSize: 12,
        color: "red"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 25
      }
    }, touched.age && errors.age))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
      style: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "spacebetween"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 247,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 254,
        columnNumber: 23
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Input"], {
      name: "bloodgroup",
      value: values.bloodgroup,
      onChange: handleChange,
      onBlur: handleBlur,
      type: "text",
      placeholder: "Blood Group",
      disableUnderline: true,
      style: {
        borderRadius: "4px",
        marginTop: "20px",
        backgroundColor: "#F1F1F1",
        marginRight: "20px",
        padding: "10px",
        border: "1px solid  #E5E5E5 "
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 255,
        columnNumber: 25
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
      style: {
        fontSize: 12,
        color: "red"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 272,
        columnNumber: 25
      }
    }, touched.bloodgroup && errors.bloodgroup)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 276,
        columnNumber: 23
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Input"], {
      name: "address",
      value: values.address,
      onChange: handleChange,
      onBlur: handleBlur,
      type: "text",
      placeholder: "Address ",
      disableUnderline: true,
      style: {
        borderRadius: "4px",
        marginTop: "20px",
        backgroundColor: "#F1F1F1",
        marginRight: "20px",
        padding: "10px",
        border: "1px solid  #E5E5E5 "
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 277,
        columnNumber: 25
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
      style: {
        fontSize: 12,
        color: "red"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 294,
        columnNumber: 25
      }
    }, touched.address && errors.address))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
      style: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 299,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      style: {
        marginTop: "40px",
        padding: "10px",
        marginBottom: "20px"
      },
      variant: "contained",
      color: "primary",
      type: "submit",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 306,
        columnNumber: 23
      }
    }, "Submit"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      style: {
        marginTop: "40px",
        padding: "10px",
        marginBottom: "20px",
        backgroundColor: "#898895"
      },
      variant: "contained",
      color: "black",
      backgroundColor: "#898895",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 318,
        columnNumber: 23
      }
    }, "Reset"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
      style: {
        flex: 2,
        padding: "0px 20px",
        height: "100%",
        backgroundColor: "green"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 333,
        columnNumber: 19
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 342,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableContainer"], {
      component: _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Paper"],
      style: {
        marginTop: "30px",
        marginLeft: "20px",
        marginRight: "20px",
        marginBottom: "30px",
        width: "95%"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 343,
        columnNumber: 23
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Table"], {
      size: "small",
      "aria-label": "a dense table",
      style: {
        width: "600px"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 353,
        columnNumber: 25
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableHead"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 358,
        columnNumber: 27
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableRow"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 359,
        columnNumber: 29
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableCell"], {
      align: "center",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 360,
        columnNumber: 31
      }
    }, "Name"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableCell"], {
      align: "center",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 361,
        columnNumber: 31
      }
    }, "Mobile"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableCell"], {
      align: "center",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 362,
        columnNumber: 31
      }
    }, "Email"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableCell"], {
      align: "center",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 363,
        columnNumber: 31
      }
    }, "Blood"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableCell"], {
      align: "center",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 364,
        columnNumber: 31
      }
    }, "Age"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableCell"], {
      align: "center",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 365,
        columnNumber: 31
      }
    }, "Address"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableCell"], {
      align: "center",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 366,
        columnNumber: 31
      }
    }, "Action"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableBody"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 369,
        columnNumber: 27
      }
    }, students.map(row => __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableRow"], {
      key: row.id,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 371,
        columnNumber: 31
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableCell"], {
      align: "center",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 372,
        columnNumber: 33
      }
    }, row.name), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableCell"], {
      align: "center",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 373,
        columnNumber: 33
      }
    }, row.mobile), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableCell"], {
      align: "center",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 376,
        columnNumber: 33
      }
    }, row.email), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableCell"], {
      align: "center",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 379,
        columnNumber: 33
      }
    }, row.bloodgroup), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableCell"], {
      align: "center",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 382,
        columnNumber: 33
      }
    }, row.age), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableCell"], {
      align: "center",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 383,
        columnNumber: 33
      }
    }, row.address), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableCell"], {
      align: "center",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 386,
        columnNumber: 33
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      onClick: () => deleteData(row.name),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 387,
        columnNumber: 35
      }
    }, __jsx(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_5___default.a, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 388,
        columnNumber: 37
      }
    })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      onClick: () => setSelectedStudent(row),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 390,
        columnNumber: 35
      }
    }, __jsx(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_6___default.a, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 393,
        columnNumber: 37
      }
    }))))))))))))));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ 4:
/*!*****************************!*\
  !*** multi ./pages/abc.jsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/lewin/crud-operation-mongo/pages/abc.jsx */"./pages/abc.jsx");


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/icons/Delete":
/*!********************************************!*\
  !*** external "@material-ui/icons/Delete" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Delete");

/***/ }),

/***/ "@material-ui/icons/Edit":
/*!******************************************!*\
  !*** external "@material-ui/icons/Edit" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Edit");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "yup":
/*!**********************!*\
  !*** external "yup" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("yup");

/***/ })

/******/ });
//# sourceMappingURL=abc.js.map