"use strict";
exports.id = "_aws-sdk_credential-provider-env_dist-es_index_js";
exports.ids = ["_aws-sdk_credential-provider-env_dist-es_index_js"];
exports.modules = {

/***/ "../../@aws-sdk/credential-provider-env/dist-es/fromEnv.js":
/*!*****************************************************************!*\
  !*** ../../@aws-sdk/credential-provider-env/dist-es/fromEnv.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ENV_CREDENTIAL_SCOPE: () => (/* binding */ ENV_CREDENTIAL_SCOPE),
/* harmony export */   ENV_EXPIRATION: () => (/* binding */ ENV_EXPIRATION),
/* harmony export */   ENV_KEY: () => (/* binding */ ENV_KEY),
/* harmony export */   ENV_SECRET: () => (/* binding */ ENV_SECRET),
/* harmony export */   ENV_SESSION: () => (/* binding */ ENV_SESSION),
/* harmony export */   fromEnv: () => (/* binding */ fromEnv)
/* harmony export */ });
/* harmony import */ var _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/property-provider */ "../../@smithy/property-provider/dist-es/index.js");

const ENV_KEY = "AWS_ACCESS_KEY_ID";
const ENV_SECRET = "AWS_SECRET_ACCESS_KEY";
const ENV_SESSION = "AWS_SESSION_TOKEN";
const ENV_EXPIRATION = "AWS_CREDENTIAL_EXPIRATION";
const ENV_CREDENTIAL_SCOPE = "AWS_CREDENTIAL_SCOPE";
const fromEnv = (init) => async () => {
    init?.logger?.debug("@aws-sdk/credential-provider-env", "fromEnv");
    const accessKeyId = process.env[ENV_KEY];
    const secretAccessKey = process.env[ENV_SECRET];
    const sessionToken = process.env[ENV_SESSION];
    const expiry = process.env[ENV_EXPIRATION];
    const credentialScope = process.env[ENV_CREDENTIAL_SCOPE];
    if (accessKeyId && secretAccessKey) {
        return {
            accessKeyId,
            secretAccessKey,
            ...(sessionToken && { sessionToken }),
            ...(expiry && { expiration: new Date(expiry) }),
            ...(credentialScope && { credentialScope }),
        };
    }
    throw new _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__.CredentialsProviderError("Unable to find environment variable credentials.");
};


/***/ }),

/***/ "../../@aws-sdk/credential-provider-env/dist-es/index.js":
/*!***************************************************************!*\
  !*** ../../@aws-sdk/credential-provider-env/dist-es/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ENV_CREDENTIAL_SCOPE: () => (/* reexport safe */ _fromEnv__WEBPACK_IMPORTED_MODULE_0__.ENV_CREDENTIAL_SCOPE),
/* harmony export */   ENV_EXPIRATION: () => (/* reexport safe */ _fromEnv__WEBPACK_IMPORTED_MODULE_0__.ENV_EXPIRATION),
/* harmony export */   ENV_KEY: () => (/* reexport safe */ _fromEnv__WEBPACK_IMPORTED_MODULE_0__.ENV_KEY),
/* harmony export */   ENV_SECRET: () => (/* reexport safe */ _fromEnv__WEBPACK_IMPORTED_MODULE_0__.ENV_SECRET),
/* harmony export */   ENV_SESSION: () => (/* reexport safe */ _fromEnv__WEBPACK_IMPORTED_MODULE_0__.ENV_SESSION),
/* harmony export */   fromEnv: () => (/* reexport safe */ _fromEnv__WEBPACK_IMPORTED_MODULE_0__.fromEnv)
/* harmony export */ });
/* harmony import */ var _fromEnv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fromEnv */ "../../@aws-sdk/credential-provider-env/dist-es/fromEnv.js");



/***/ })

};
;
//# sourceMappingURL=_aws-sdk_credential-provider-env_dist-es_index_js.js.map