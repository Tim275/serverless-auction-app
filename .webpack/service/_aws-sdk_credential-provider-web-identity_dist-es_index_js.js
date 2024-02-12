"use strict";
exports.id = "_aws-sdk_credential-provider-web-identity_dist-es_index_js";
exports.ids = ["_aws-sdk_credential-provider-web-identity_dist-es_index_js"];
exports.modules = {

/***/ "../../@aws-sdk/credential-provider-web-identity/dist-es/fromTokenFile.js":
/*!********************************************************************************!*\
  !*** ../../@aws-sdk/credential-provider-web-identity/dist-es/fromTokenFile.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fromTokenFile: () => (/* binding */ fromTokenFile)
/* harmony export */ });
/* harmony import */ var _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/property-provider */ "../../@smithy/property-provider/dist-es/index.js");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fromWebToken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fromWebToken */ "../../@aws-sdk/credential-provider-web-identity/dist-es/fromWebToken.js");



const ENV_TOKEN_FILE = "AWS_WEB_IDENTITY_TOKEN_FILE";
const ENV_ROLE_ARN = "AWS_ROLE_ARN";
const ENV_ROLE_SESSION_NAME = "AWS_ROLE_SESSION_NAME";
const fromTokenFile = (init = {}) => async () => {
    init.logger?.debug("@aws-sdk/credential-provider-web-identity", "fromTokenFile");
    const webIdentityTokenFile = init?.webIdentityTokenFile ?? process.env[ENV_TOKEN_FILE];
    const roleArn = init?.roleArn ?? process.env[ENV_ROLE_ARN];
    const roleSessionName = init?.roleSessionName ?? process.env[ENV_ROLE_SESSION_NAME];
    if (!webIdentityTokenFile || !roleArn) {
        throw new _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__.CredentialsProviderError("Web identity configuration not specified");
    }
    return (0,_fromWebToken__WEBPACK_IMPORTED_MODULE_2__.fromWebToken)({
        ...init,
        webIdentityToken: (0,fs__WEBPACK_IMPORTED_MODULE_1__.readFileSync)(webIdentityTokenFile, { encoding: "ascii" }),
        roleArn,
        roleSessionName,
    })();
};


/***/ }),

/***/ "../../@aws-sdk/credential-provider-web-identity/dist-es/fromWebToken.js":
/*!*******************************************************************************!*\
  !*** ../../@aws-sdk/credential-provider-web-identity/dist-es/fromWebToken.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fromWebToken: () => (/* binding */ fromWebToken)
/* harmony export */ });
const fromWebToken = (init) => async () => {
    init.logger?.debug("@aws-sdk/credential-provider-web-identity", "fromWebToken");
    const { roleArn, roleSessionName, webIdentityToken, providerId, policyArns, policy, durationSeconds } = init;
    let { roleAssumerWithWebIdentity } = init;
    if (!roleAssumerWithWebIdentity) {
        const { getDefaultRoleAssumerWithWebIdentity } = await __webpack_require__.e(/*! import() */ "_aws-sdk_credential-provider-web-identity_dist-es_loadSts_js").then(__webpack_require__.bind(__webpack_require__, /*! ./loadSts */ "../../@aws-sdk/credential-provider-web-identity/dist-es/loadSts.js"));
        roleAssumerWithWebIdentity = getDefaultRoleAssumerWithWebIdentity({
            ...init.clientConfig,
            credentialProviderLogger: init.logger,
            parentClientConfig: init.parentClientConfig,
        }, init.clientPlugins);
    }
    return roleAssumerWithWebIdentity({
        RoleArn: roleArn,
        RoleSessionName: roleSessionName ?? `aws-sdk-js-session-${Date.now()}`,
        WebIdentityToken: webIdentityToken,
        ProviderId: providerId,
        PolicyArns: policyArns,
        Policy: policy,
        DurationSeconds: durationSeconds,
    });
};


/***/ }),

/***/ "../../@aws-sdk/credential-provider-web-identity/dist-es/index.js":
/*!************************************************************************!*\
  !*** ../../@aws-sdk/credential-provider-web-identity/dist-es/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fromTokenFile: () => (/* reexport safe */ _fromTokenFile__WEBPACK_IMPORTED_MODULE_0__.fromTokenFile),
/* harmony export */   fromWebToken: () => (/* reexport safe */ _fromWebToken__WEBPACK_IMPORTED_MODULE_1__.fromWebToken)
/* harmony export */ });
/* harmony import */ var _fromTokenFile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fromTokenFile */ "../../@aws-sdk/credential-provider-web-identity/dist-es/fromTokenFile.js");
/* harmony import */ var _fromWebToken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fromWebToken */ "../../@aws-sdk/credential-provider-web-identity/dist-es/fromWebToken.js");




/***/ })

};
;
//# sourceMappingURL=_aws-sdk_credential-provider-web-identity_dist-es_index_js.js.map