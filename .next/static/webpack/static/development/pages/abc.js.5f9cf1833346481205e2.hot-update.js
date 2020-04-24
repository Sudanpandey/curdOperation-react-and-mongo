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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Delete */ "./node_modules/@material-ui/icons/Delete.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Edit */ "./node_modules/@material-ui/icons/Edit.js");
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_6__);


var _this = undefined,
    _jsxFileName = "/home/lewin/crud-operation-mongo/pages/abc.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var formValidationSchema = yup__WEBPACK_IMPORTED_MODULE_2__["object"]().shape({
  name: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().min(2, "Too Short!").max(25, "Too Long!").required("Name is required"),
  mobile: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().min(2, "Too Short!").max(25, "Too Long!").min(6, "Phoneno has to be longer than 6 characters!").required("Valid password  is required"),
  email: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().min(2, "Too Short!").max(25, "Too Long!").required("Email is required"),
  age: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().min(2, "Too Short!").max(25, "Too Long!").required("Age  is required"),
  bloodgroup: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().min(2, "Too Short!").max(25, "Too Long!").required("blood group is required"),
  address: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().min(2, "Too Short!").max(25, "Too Long!").required("Address is required")
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
  return __jsx(formik__WEBPACK_IMPORTED_MODULE_3__["Formik"], {
    enableReinitialize: true,
    initialValues: selectedStudent,
    onSubmit: function onSubmit(values, _ref) {
      var resetForm = _ref.resetForm;

      if (values._id) {
        putData(values);
      } else {
        addData(values);
      }

      resetForm({});
    },
    validationSchema: formValidationSchema,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 5
    }
  }, function (_ref2) {
    var _jsx;

    var values = _ref2.values,
        handleChange = _ref2.handleChange,
        handleBlur = _ref2.handleBlur,
        handleSubmit = _ref2.handleSubmit,
        errors = _ref2.errors,
        touched = _ref2.touched;
    console.log(errors);
    return __jsx("form", {
      onSubmit: handleSubmit,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 11
      }
    }, __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
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
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 15
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
      style: {
        display: "flex"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 17
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
      style: {
        flex: 2,
        padding: "0px 10px",
        height: "100%",
        backgroundColor: "white"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 19
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
      style: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "spacebetween"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 23
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Input"], (_jsx = {
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
      lineNumber: 118,
      columnNumber: 25
    }), _jsx)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
      style: {
        fontSize: 12,
        color: "red"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 25
      }
    }, touched.name && errors.name)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
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
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 25
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
      style: {
        fontSize: 12,
        color: "red"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 25
      }
    }, touched.mobile && errors.mobile))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
      style: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "spacebetween"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172,
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
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 25
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
      style: {
        fontSize: 12,
        color: "red"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 25
      }
    }, touched.email && errors.email)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194,
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
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 25
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
      style: {
        fontSize: 12,
        color: "red"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 25
      }
    }, touched.age && errors.age))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
      style: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "spacebetween"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224,
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
      __self: _this,
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
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 25
      }
    }, touched.bloodgroup && errors.bloodgroup)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246,
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
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 247,
        columnNumber: 25
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
      style: {
        fontSize: 12,
        color: "red"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 264,
        columnNumber: 25
      }
    }, touched.address && errors.address))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
      style: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 269,
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
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 276,
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
      type: "button",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 288,
        columnNumber: 23
      }
    }, "Reset"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
      style: {
        flex: 2,
        padding: "0px 20px",
        height: "100%",
        backgroundColor: "white"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 304,
        columnNumber: 19
      }
    })))));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ })

})
//# sourceMappingURL=abc.js.5f9cf1833346481205e2.hot-update.js.map