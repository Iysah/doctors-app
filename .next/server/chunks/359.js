"use strict";
exports.id = 359;
exports.ids = [359];
exports.modules = {

/***/ 1359:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dx: () => (/* binding */ Title),
/* harmony export */   NL: () => (/* binding */ Prompt),
/* harmony export */   Pp: () => (/* binding */ ColoredButton),
/* harmony export */   Sb: () => (/* binding */ BgGreen),
/* harmony export */   TR: () => (/* binding */ Logo),
/* harmony export */   Uj: () => (/* binding */ BgButton),
/* harmony export */   VT: () => (/* binding */ ShowCase),
/* harmony export */   W_: () => (/* binding */ InnerContainer),
/* harmony export */   X6: () => (/* binding */ Heading),
/* harmony export */   im: () => (/* binding */ Wrapper),
/* harmony export */   kI: () => (/* binding */ Info),
/* harmony export */   l0: () => (/* binding */ Form),
/* harmony export */   n7: () => (/* binding */ HowItWorks),
/* harmony export */   zY: () => (/* binding */ BgWhite),
/* harmony export */   zx: () => (/* binding */ Button)
/* harmony export */ });
/* unused harmony export Bg */
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9817);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7158);


const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP.div`
    display: flex;

    @media screen and (max-width: 990px) {
        flex-direction: column;
    }
`;
const Bg = styled_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP.div`
    display: flex;
    justify-content: center;
    min-height: 100vh;
    width: 50%;

    @media screen and (max-width: 990px) {
        min-height: 50vh;
        width: 100%;
    }
`;
const BgGreen = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)(Bg)`
    align-items: center;
    background-color: ${_theme__WEBPACK_IMPORTED_MODULE_0__["default"].colors.primaryColor};
    justify-content: center;
    @media screen and (max-width: 990px) {
        display: none;
        min-height: 480px;
    }
`;
const BgWhite = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)(Bg)`
    background-color: #fff;
    padding: 100px 0;

    @media screen and (min-width: ${_theme__WEBPACK_IMPORTED_MODULE_0__["default"].sizes.wrapperWidth}) {
        align-items: center;
    }
`;
const InnerContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP.div`
    padding: 0 30px;
    min-width: 40%;
    p.grey {
        color: rgba(34, 34, 34, 0.7);
    }

    .large-screen-only {
        @media screen and (max-width: 1250px) {
            display: none;
        }
    }

    @media screen and (max-width: 990px) {
        p.grey {
            text-align: center;
        }
    }
`;
const Logo = styled_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP.div`
    align-items: center;
    display: flex;
    justify-content: center;

    img {
        width: 70%;
    }

    @media screen and (min-width: 990px) {
        position: fixed;
        top: 55%;
        transform: translateY(-50%);
        left: 0%;
        width: 45%;
    }

    @media screen and (max-width: 990px) {
        img {
            width: 60%;
        }
    }
`;
const Title = styled_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP.p`
    color: ${_theme__WEBPACK_IMPORTED_MODULE_0__["default"].colors.primaryColor};
    font-size: 18px;
    @media screen and (max-width: 990px) {
        font-size: 16px;
        text-align: center;
    }
`;
const Heading = styled_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP.h1`
    color: ${_theme__WEBPACK_IMPORTED_MODULE_0__["default"].colors.primaryColor};
    font-size: 30px;
    font-weight: 600;
    margin-top: 18px;
    @media screen and (max-width: 990px) {
        font-size: 20px;
        text-align: center;
    }
`;
const Form = styled_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP.form`
    display: flex;
    flex-direction: column;
    margin-top: 20px;

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
        min-width: 544px;
        outline: none;
        padding: 12px 18px;
        width: 100%;
    }

    label.checkbox {
        color: #646464;
        display: flex;
        font-size: 10px;
        margin-top: 10px;
    }

    label.checkbox span {
        color: #1a4942;
        font-weight: 700;
        margin: 0 2px;
    }

    label.checkbox input {
        display: inline-block;
        min-width: auto;
        margin-right: 4px;
        width: fit-content;
    }

    span.input {
        position: relative;
        display: flex;
    }

    span.eye-icon {
        cursor: pointer;
        position: absolute;
        top: 50%;
        right: 20px;
        transform: translateY(-50%);
    }

    @media screen and (max-width: 1188px) {
        label input {
            min-width: 450px;
        }
    }

    @media screen and (max-width: 520px) {
        label.checkbox {
            font-size: 7.5px;
        }

        label {
            font-size: 12px;
        }

        label input {
            font-size: 14px;
            min-width: 388px;
        }
    }

    @media screen and (max-width: 475px) {
        label input {
            min-width: 250px;
        }
    }

    @media screen and (max-width: 350px) {
        label.checkbox {
            font-size: 6.5px;
        }
    }
`;
const Button = styled_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: block;
    font: inherit;
    outline: none;
`;
const ColoredButton = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)(Button)`
    color: ${_theme__WEBPACK_IMPORTED_MODULE_0__["default"].colors.primaryColor};
    align-self: flex-end;

    @media screen and (max-width: 990px) {
        font-size: 12px;
    }
`;
const BgButton = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)(Button)`
    background-color: ${_theme__WEBPACK_IMPORTED_MODULE_0__["default"].colors.primaryColor};
    border-radius: 5px;
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.25);
    color: #fff;
    font-size: 20px;
    font-weight: 600;
    margin-top: 40px;
    padding: 10px 16px;
    @media screen and (max-width: 990px) {
        font-size: 18px;
    }

    @media screen and (max-width: 475px) {
        font-size: 16px;
    }
`;
const Prompt = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)(Button)`
    color: rgba(34, 34, 34, 0.7);
    font-size: 18px;
    font-weight: 400;
    margin: 60px auto;
    text-align: center;

    span {
        color: ${_theme__WEBPACK_IMPORTED_MODULE_0__["default"].colors.primaryColor};
        font-size: 20px;
        font-weight: 500;
    }

    @media screen and (max-width: 990px) {
        font-size: 14px;

        span {
            font-size: 16px;
        }
    }
`;
const Info = styled_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP.p`
    color: ${_theme__WEBPACK_IMPORTED_MODULE_0__["default"].colors.primaryColor};
    font-size: 18px;
    font-weight: 500;
    line-height: 157%;
    max-width: 500px;
`;
const ShowCase = styled_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP.div`
    display: flex;
    column-gap: 20px;
    overflow-x: auto;
    div.item {
        display: flex;
        flex-direction: column;
        max-width: 180px;
    }

    div.item img {
    }

    div.item h2 {
        color: #222;
        font-size: 18px;
        font-weight: 700;
    }

    .content {
        font-size: 13px;
    }
`;
const HowItWorks = styled_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP.div`
    border-radius: 17px;
    background: #fff;
    box-shadow: 2px 5px 20px 0px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 60px;
    padding: 23px 27px 27px;
    position: relative;
    text-align: center;

    h2 {
        font-size: 21px;
        font-weight: 600;
    }

    img {
        margin: 13px auto;
    }

    p.green {
        color: #40b36e;
        font-size: 14px;
        font-weight: 700;
    }

    span {
        color: #40b36e;
    }

    div.content {
        font-size: 12px;
        font-weight: 500;
    }

    div.absolute {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        align-self: flex-end;
    }

    @media screen and (max-width: 990px) {
        display: none;
    }
`;


/***/ }),

/***/ 7158:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const theme = {
    colors: {
        primaryColor: "#1A4942"
    },
    sizes: {
        wrapperWidth: "1440px"
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);


/***/ })

};
;