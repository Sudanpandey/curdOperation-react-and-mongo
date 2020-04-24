webpackHotUpdate("static/development/pages/abc.js",{

/***/ "./pages/abc.jsx":
/*!***********************!*\
  !*** ./pages/abc.jsx ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");



var _this = undefined,
    _jsxFileName = "/home/lewin/crud-operation-mongo/pages/abc.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





var formValidationSchema = yup__WEBPACK_IMPORTED_MODULE_3__["object"]().shape({
  name: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().min(2, "Too Short!").max(25, "Too Long!").required("Name is required"),
  mobile: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().min(2, "Too Short!").max(25, "Too Long!").min(6, "Password has to be longer than 6 characters!").required("Valid password  is required"),
  email: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().min(2, "Too Short!").max(25, "Too Long!").required("Email is required"),
  age: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().min(2, "Too Short!").max(25, "Too Long!").required("Age  is required"),
  bloodgroup: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().min(2, "Too Short!").max(25, "Too Long!").required("blood group is required"),
  address: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().min(2, "Too Short!").max(25, "Too Long!").required("Address is required")
});
var initialValues = {
  name: "",
  mobile: "",
  email: "",
  age: "",
  bloodgroup: "",
  address: ""
};

var index = function index() {
  // For View data 
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      students = _useState[0],
      seStudents = _useState[1];

  var getData = function getData() {
    var _await$axios$get, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function getData$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_5___default.a.get("http://localhost:3000"));

          case 3:
            _await$axios$get = _context.sent;
            data = _await$axios$get.data.data;
            // const response = await axios.get("http://localhost:3000");
            // const data = response.data.data;
            // console.log(data);
            seStudents(data);
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 8]], Promise);
  };

  return __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Formik"], {
    initialValues: initialValues,
    validationSchema: formValidationSchema,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 5
    }
  }, function (_ref) {
    var _jsx;

    var values = _ref.values,
        handleChange = _ref.handleChange,
        handleBlur = _ref.handleBlur,
        handleSubmit = _ref.handleSubmit,
        errors = _ref.errors,
        touched = _ref.touched;
    // console.log(errors);
    return __jsx("form", {
      onSubmit: handleSubmit,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 11
      }
    }, __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Box"], {
      style: {
        height: "auto",
        width: "90%",
        backgroundColor: "white",
        marginLeft: "60px",
        marginTop: "30px",
        boxShadow: "  1px 4px  7px 5px #E5E5E5"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 15
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Box"], {
      style: {
        display: "flex"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 17
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Box"], {
      style: {
        flex: 2,
        padding: "0px 20px",
        height: "100%",
        backgroundColor: "white"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 19
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Box"], {
      style: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "spacebetween"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Box"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 23
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Input"], (_jsx = {
      name: "name",
      value: values.name,
      onChange: handleChange,
      type: "text",
      placeholder: "Full Name ",
      disableUnderline: true
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "onChange", handleChange), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "onBlur", handleBlur), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "style", {
      borderRadius: "4px",
      marginTop: "20px",
      backgroundColor: "#F1F1F1",
      marginRight: "20px",
      padding: "10px",
      border: "1px solid  #E5E5E5 "
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__self", _this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__source", {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 25
    }), _jsx)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
      style: {
        fontSize: 12,
        color: "red"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 25
      }
    }, touched.name && errors.name)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Box"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 23
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Input"], {
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
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 25
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
      style: {
        fontSize: 12,
        color: "red"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 25
      }
    }, touched.mobile && errors.mobile))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Box"], {
      style: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "spacebetween"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Box"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 23
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Input"], {
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
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 25
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
      style: {
        fontSize: 12,
        color: "red"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 25
      }
    }, touched.email && errors.email)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Box"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 23
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Input"], {
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
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 25
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
      style: {
        fontSize: 12,
        color: "red"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 25
      }
    }, touched.age && errors.age))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Box"], {
      style: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "spacebetween"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Box"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 23
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Input"], {
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
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 229,
        columnNumber: 25
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
      style: {
        fontSize: 12,
        color: "red"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246,
        columnNumber: 25
      }
    }, touched.bloodgroup && errors.bloodgroup)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Box"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 250,
        columnNumber: 23
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Input"], {
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
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 251,
        columnNumber: 25
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
      style: {
        fontSize: 12,
        color: "red"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 268,
        columnNumber: 25
      }
    }, touched.address && errors.address))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Box"], {
      style: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 273,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      style: {
        marginTop: "40px",
        padding: "10px",
        marginBottom: "20px"
      },
      variant: "contained",
      color: "primary" // type="submit"
      ,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 280,
        columnNumber: 23
      }
    }, "Submit"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      style: {
        marginTop: "40px",
        padding: "10px",
        marginBottom: "20px",
        backgroundColor: "#898895"
      },
      variant: "contained",
      color: "black",
      backgroundColor: "#898895",
      type: "submit",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 292,
        columnNumber: 23
      }
    }, "Reset"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Box"], {
      style: {
        flex: 2,
        padding: "0px 20px",
        height: "100%",
        backgroundColor: "green"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 308,
        columnNumber: 19
      }
    })))));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ })

})
//# sourceMappingURL=abc.js.5e89b1de6b23d8141d14.hot-update.js.map