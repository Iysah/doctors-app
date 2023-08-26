(() => {
var exports = {};
exports.id = 719;
exports.ids = [719];
exports.modules = {

/***/ 8038:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react");

/***/ }),

/***/ 8704:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-dom/server-rendering-stub");

/***/ }),

/***/ 7897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-server-dom-webpack/client");

/***/ }),

/***/ 6786:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react/jsx-runtime");

/***/ }),

/***/ 5868:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/app-render");

/***/ }),

/***/ 1844:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/get-segment-param");

/***/ }),

/***/ 6624:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/helpers/interception-routes");

/***/ }),

/***/ 5281:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/route-modules/route-module");

/***/ }),

/***/ 7085:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context");

/***/ }),

/***/ 199:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hash");

/***/ }),

/***/ 9569:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hooks-client-context");

/***/ }),

/***/ 893:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix");

/***/ }),

/***/ 7887:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/handle-smooth-scroll");

/***/ }),

/***/ 8735:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot");

/***/ }),

/***/ 8231:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path");

/***/ }),

/***/ 4614:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix");

/***/ }),

/***/ 3750:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash");

/***/ }),

/***/ 9618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/server-inserted-html");

/***/ }),

/***/ 1017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 2781:
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ 7310:
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ 2908:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalError: () => (/* reexport default from dynamic */ next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default.a),
/* harmony export */   __next_app__: () => (/* binding */ __next_app__),
/* harmony export */   originalPathname: () => (/* binding */ originalPathname),
/* harmony export */   pages: () => (/* binding */ pages),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   tree: () => (/* binding */ tree)
/* harmony export */ });
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7262);
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9513);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1823);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2502);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__) if(["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
// @ts-ignore this need to be imported from next/dist to be external


const AppPageRouteModule = next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__.AppPageRouteModule;
// We inject the tree and pages here so that we can use them in the route
// module.
const tree = {
        children: [
        '',
        {
        children: [
        'get-started',
        {
        children: ['__PAGE__', {}, {
          page: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 5521)), "/Users/Adoza/Documents/doctors-app/src/app/get-started/page.js"],
          
        }]
      },
        {
          
          metadata: {
    icon: [(async (props) => (await Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 3881))).default(props))],
    apple: [],
    openGraph: [],
    twitter: [],
    manifest: undefined
  }
        }
      ]
      },
        {
          'layout': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 3709)), "/Users/Adoza/Documents/doctors-app/src/app/layout.js"],
'not-found': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 5493, 23)), "next/dist/client/components/not-found-error"],
          metadata: {
    icon: [(async (props) => (await Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 3881))).default(props))],
    apple: [],
    openGraph: [],
    twitter: [],
    manifest: undefined
  }
        }
      ]
      }.children;
const pages = ["/Users/Adoza/Documents/doctors-app/src/app/get-started/page.js"];

// @ts-expect-error - replaced by webpack/turbopack loader

const __next_app_require__ = __webpack_require__
const __next_app_load_chunk__ = () => Promise.resolve()
const originalPathname = "/get-started/page";
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};

// Create and export the route module that will be consumed.
const routeModule = new AppPageRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_PAGE,
        page: "/get-started/page",
        pathname: "/get-started",
        // The following aren't used in production.
        bundlePath: "",
        filename: "",
        appPaths: []
    },
    userland: {
        loaderTree: tree
    }
});

//# sourceMappingURL=app-page.js.map

/***/ }),

/***/ 3282:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 3273))

/***/ }),

/***/ 3273:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ get_started)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.cjs.js
var styled_components_cjs = __webpack_require__(9817);
// EXTERNAL MODULE: ./src/styles/theme.js
var theme = __webpack_require__(7158);
// EXTERNAL MODULE: ./src/styles/auth.style.js
var auth_style = __webpack_require__(1359);
;// CONCATENATED MODULE: ./src/styles/get-started.style.js



const { colors } = theme["default"];
const Wrapper = styled_components_cjs/* default */.ZP.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    max-width: 900px;
    margin: 90px auto;
    width: 70vw;

    div {
        width: 100%;
    }

    p.grey {
        color: rgba(34, 34, 34, 0.7);
    }

    @media screen and (max-width: 975px) {
        max-width: none;

        p.grey {
            text-align: center;
        }
    }

    @media screen and (max-width: 525px) {
        width: 85vw;
    }
`;
const Title = styled_components_cjs/* default */.ZP.p`
    color: ${theme["default"].colors.primaryColor};
    font-size: 18px;
    @media screen and (max-width: 975px) {
        font-size: 16px;
        text-align: center;
    }
`;
const Heading = styled_components_cjs/* default */.ZP.h1`
    color: ${theme["default"].colors.primaryColor};
    font-size: 30px;
    font-weight: 600;
    margin-top: 18px;
    @media screen and (max-width: 975px) {
        font-size: 20px;
        text-align: center;
    }
`;
const RadioButtons = styled_components_cjs/* default */.ZP.div`
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
    label {
        display: block;
        font-size: 20px;
        font-weight: 400;
    }

    label input {
        margin-right: 10px;
    }

    @media screen and (max-width: 975px) {
        label {
            font-size: 16px;
        }
    }

    @media screen and (max-width: 800px) {
        flex-direction: column;
        justify-content: center;
    }
`;
const Instruction = styled_components_cjs/* default */.ZP.p`
    align-self: flex-start;
    color: ${colors.primaryColor};
    font-size: 20px;
    font-weight: 500;
    margin: 50px 0 30px;

    @media screen and (max-width: 975px) {
        font-size: 16px;
    }

    @media screen and (max-width: 475px) {
        font-size: 12px;
    }
`;
const Form = styled_components_cjs/* default */.ZP.form`
    align-self: flex-start;
    display: flex;
    flex-direction: column;
    label {
        display: block;
        margin: 10px 0;
    }

    label input {
        border: none;
        border-radius: 5px;
        background: #efecec;
        box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.25);
        color: rgba(34, 34, 34, 0.7);
        display: block;
        font-family: inherit;
        font-size: 16px;
        max-width: 544px;
        outline: none;
        padding: 12px 18px;
        width: 100%;
    }

    p {
        color: rgba(34, 34, 34, 0.7);
        font-size: 12px;
        font-weight: 400;
    }

    @media screen and (max-width: 800px) {
        width: 100%;
        label {
            width: 100%;
        }
    }

    @media screen and (max-width: 475px) {
        label input {
            font-size: 14px;
        }
    }
`;
const Buttons = styled_components_cjs/* default */.ZP.div`
    align-self: center;
    display: flex;
    flex-direction: column;
    width: auto;
`;
const Submit = (0,styled_components_cjs/* default */.ZP)(auth_style/* Button */.zx)`
    background-color: ${colors.primaryColor};
    border-radius: 5px;
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.25);
    color: #fff;
    font-size: 20px;
    font-weight: 600;
    margin-top: 30px;
    min-width: 320px;
    padding: 10px 16px;
    @media screen and (max-width: 975px) {
        font-size: 17px;
    }

    @media screen and (max-width: 800px) {
        min-width: 100%;
    }

    @media screen and (max-width: 475px) {
        font-size: 15px;
    }
`;
const Logout = (0,styled_components_cjs/* default */.ZP)(auth_style/* Button */.zx)`
    color: ${colors.primaryColor};
    font-size: 18px;
    font-weight: 400;
    text-align: right;
    margin-top: 10px 4px 0 0;
    @media screen and (max-width: 975px) {
        font-size: 16px;
    }

    @media screen and (max-width: 475px) {
        font-size: 14px;
    }
`;
const Email = styled_components_cjs/* default */.ZP.div`
    font-size: 16px;
    margin-top: 70px;
    .black {
        color: #222;
        font-weight: 400;
    }

    .green {
        color: ${colors.primaryColor};
        font-weight: 500;
    }

    @media screen and (max-width: 975px) {
        font-size: 14px;
    }
`; // export const = styled.``

;// CONCATENATED MODULE: ./src/components/get-started.js
/* __next_internal_client_entry_do_not_use__ default auto */ 


const GetStarted = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Wrapper, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Title, {
                        children: "Theraswift | Connect"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Heading, {
                        children: "Lets get you set up with your clinic "
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "grey",
                        children: "We need to add yor clinic to Theraswift connect"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(RadioButtons, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                        htmlFor: "have-code",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "radio",
                                id: "have-code"
                            }),
                            "I have a Theraswift clinic code"
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                        htmlFor: "need-code",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "radio",
                                id: "need-code"
                            }),
                            "I need a Theraswift clinic code"
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Instruction, {
                children: "Please enter your Theraswift clinic code. This is used to validate your clinic"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Form, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                        htmlFor: "code",
                        children: [
                            "Clinic Code",
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "text",
                                id: "code",
                                placeholder: "Enter your clinic code"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        children: [
                            "This is a unique code generated specifically for your clinic",
                            " "
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Buttons, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Submit, {
                                children: "Submit"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Logout, {
                                children: "Log out"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Email, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "black",
                        children: "Need help? Email "
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "green",
                        children: "help@theraswift.com"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const get_started = (GetStarted);


/***/ }),

/***/ 5521:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ page)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(2947);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(1363);
;// CONCATENATED MODULE: ./src/components/get-started.js

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/Adoza/Documents/doctors-app/src/components/get-started.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const get_started = (__default__);
;// CONCATENATED MODULE: ./src/app/get-started/page.js



const Page = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(get_started, {})
    });
};
/* harmony default export */ const page = (Page);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [587,922,41,359], () => (__webpack_exec__(2908)));
module.exports = __webpack_exports__;

})();