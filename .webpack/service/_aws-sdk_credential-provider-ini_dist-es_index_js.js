"use strict";
exports.id = "_aws-sdk_credential-provider-ini_dist-es_index_js";
exports.ids = ["_aws-sdk_credential-provider-ini_dist-es_index_js"];
exports.modules = {

/***/ "../../@aws-sdk/credential-provider-ini/dist-es/fromIni.js":
/*!*****************************************************************!*\
  !*** ../../@aws-sdk/credential-provider-ini/dist-es/fromIni.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fromIni: () => (/* binding */ fromIni)
/* harmony export */ });
/* harmony import */ var _smithy_shared_ini_file_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/shared-ini-file-loader */ "../../@smithy/shared-ini-file-loader/dist-es/index.js");
/* harmony import */ var _resolveProfileData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resolveProfileData */ "../../@aws-sdk/credential-provider-ini/dist-es/resolveProfileData.js");


const fromIni = (init = {}) => async () => {
    init.logger?.debug("@aws-sdk/credential-provider-ini", "fromIni");
    const profiles = await (0,_smithy_shared_ini_file_loader__WEBPACK_IMPORTED_MODULE_0__.parseKnownFiles)(init);
    return (0,_resolveProfileData__WEBPACK_IMPORTED_MODULE_1__.resolveProfileData)((0,_smithy_shared_ini_file_loader__WEBPACK_IMPORTED_MODULE_0__.getProfileName)(init), profiles, init);
};


/***/ }),

/***/ "../../@aws-sdk/credential-provider-ini/dist-es/index.js":
/*!***************************************************************!*\
  !*** ../../@aws-sdk/credential-provider-ini/dist-es/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fromIni: () => (/* reexport safe */ _fromIni__WEBPACK_IMPORTED_MODULE_0__.fromIni)
/* harmony export */ });
/* harmony import */ var _fromIni__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fromIni */ "../../@aws-sdk/credential-provider-ini/dist-es/fromIni.js");



/***/ }),

/***/ "../../@aws-sdk/credential-provider-ini/dist-es/resolveAssumeRoleCredentials.js":
/*!**************************************************************************************!*\
  !*** ../../@aws-sdk/credential-provider-ini/dist-es/resolveAssumeRoleCredentials.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isAssumeRoleProfile: () => (/* binding */ isAssumeRoleProfile),
/* harmony export */   resolveAssumeRoleCredentials: () => (/* binding */ resolveAssumeRoleCredentials)
/* harmony export */ });
/* harmony import */ var _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/property-provider */ "../../@smithy/property-provider/dist-es/index.js");
/* harmony import */ var _smithy_shared_ini_file_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smithy/shared-ini-file-loader */ "../../@smithy/shared-ini-file-loader/dist-es/index.js");
/* harmony import */ var _resolveCredentialSource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resolveCredentialSource */ "../../@aws-sdk/credential-provider-ini/dist-es/resolveCredentialSource.js");
/* harmony import */ var _resolveProfileData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resolveProfileData */ "../../@aws-sdk/credential-provider-ini/dist-es/resolveProfileData.js");




const isAssumeRoleProfile = (arg) => Boolean(arg) &&
    typeof arg === "object" &&
    typeof arg.role_arn === "string" &&
    ["undefined", "string"].indexOf(typeof arg.role_session_name) > -1 &&
    ["undefined", "string"].indexOf(typeof arg.external_id) > -1 &&
    ["undefined", "string"].indexOf(typeof arg.mfa_serial) > -1 &&
    (isAssumeRoleWithSourceProfile(arg) || isAssumeRoleWithProviderProfile(arg));
const isAssumeRoleWithSourceProfile = (arg) => typeof arg.source_profile === "string" && typeof arg.credential_source === "undefined";
const isAssumeRoleWithProviderProfile = (arg) => typeof arg.credential_source === "string" && typeof arg.source_profile === "undefined";
const resolveAssumeRoleCredentials = async (profileName, profiles, options, visitedProfiles = {}) => {
    options.logger?.debug("@aws-sdk/credential-provider-ini", "resolveAssumeRoleCredentials (STS)");
    const data = profiles[profileName];
    if (!options.roleAssumer) {
        const { getDefaultRoleAssumer } = await __webpack_require__.e(/*! import() */ "_aws-sdk_credential-provider-ini_dist-es_loadSts_js").then(__webpack_require__.bind(__webpack_require__, /*! ./loadSts */ "../../@aws-sdk/credential-provider-ini/dist-es/loadSts.js"));
        options.roleAssumer = getDefaultRoleAssumer({
            ...options.clientConfig,
            credentialProviderLogger: options.logger,
            parentClientConfig: options?.parentClientConfig,
        }, options.clientPlugins);
    }
    const { source_profile } = data;
    if (source_profile && source_profile in visitedProfiles) {
        throw new _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__.CredentialsProviderError(`Detected a cycle attempting to resolve credentials for profile` +
            ` ${(0,_smithy_shared_ini_file_loader__WEBPACK_IMPORTED_MODULE_1__.getProfileName)(options)}. Profiles visited: ` +
            Object.keys(visitedProfiles).join(", "), false);
    }
    const sourceCredsProvider = source_profile
        ? (0,_resolveProfileData__WEBPACK_IMPORTED_MODULE_3__.resolveProfileData)(source_profile, profiles, options, {
            ...visitedProfiles,
            [source_profile]: true,
        })
        : (await (0,_resolveCredentialSource__WEBPACK_IMPORTED_MODULE_2__.resolveCredentialSource)(data.credential_source, profileName)(options))();
    const params = {
        RoleArn: data.role_arn,
        RoleSessionName: data.role_session_name || `aws-sdk-js-${Date.now()}`,
        ExternalId: data.external_id,
        DurationSeconds: parseInt(data.duration_seconds || "3600", 10),
    };
    const { mfa_serial } = data;
    if (mfa_serial) {
        if (!options.mfaCodeProvider) {
            throw new _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__.CredentialsProviderError(`Profile ${profileName} requires multi-factor authentication, but no MFA code callback was provided.`, false);
        }
        params.SerialNumber = mfa_serial;
        params.TokenCode = await options.mfaCodeProvider(mfa_serial);
    }
    const sourceCreds = await sourceCredsProvider;
    return options.roleAssumer(sourceCreds, params);
};


/***/ }),

/***/ "../../@aws-sdk/credential-provider-ini/dist-es/resolveCredentialSource.js":
/*!*********************************************************************************!*\
  !*** ../../@aws-sdk/credential-provider-ini/dist-es/resolveCredentialSource.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resolveCredentialSource: () => (/* binding */ resolveCredentialSource)
/* harmony export */ });
/* harmony import */ var _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/property-provider */ "../../@smithy/property-provider/dist-es/index.js");

const resolveCredentialSource = (credentialSource, profileName) => {
    const sourceProvidersMap = {
        EcsContainer: (options) => __webpack_require__.e(/*! import() */ "_smithy_credential-provider-imds_dist-es_index_js").then(__webpack_require__.bind(__webpack_require__, /*! @smithy/credential-provider-imds */ "../../@smithy/credential-provider-imds/dist-es/index.js")).then(({ fromContainerMetadata }) => fromContainerMetadata(options)),
        Ec2InstanceMetadata: (options) => __webpack_require__.e(/*! import() */ "_smithy_credential-provider-imds_dist-es_index_js").then(__webpack_require__.bind(__webpack_require__, /*! @smithy/credential-provider-imds */ "../../@smithy/credential-provider-imds/dist-es/index.js")).then(({ fromInstanceMetadata }) => fromInstanceMetadata(options)),
        Environment: (options) => __webpack_require__.e(/*! import() */ "_aws-sdk_credential-provider-env_dist-es_index_js").then(__webpack_require__.bind(__webpack_require__, /*! @aws-sdk/credential-provider-env */ "../../@aws-sdk/credential-provider-env/dist-es/index.js")).then(({ fromEnv }) => fromEnv(options)),
    };
    if (credentialSource in sourceProvidersMap) {
        return sourceProvidersMap[credentialSource];
    }
    else {
        throw new _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__.CredentialsProviderError(`Unsupported credential source in profile ${profileName}. Got ${credentialSource}, ` +
            `expected EcsContainer or Ec2InstanceMetadata or Environment.`);
    }
};


/***/ }),

/***/ "../../@aws-sdk/credential-provider-ini/dist-es/resolveProcessCredentials.js":
/*!***********************************************************************************!*\
  !*** ../../@aws-sdk/credential-provider-ini/dist-es/resolveProcessCredentials.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isProcessProfile: () => (/* binding */ isProcessProfile),
/* harmony export */   resolveProcessCredentials: () => (/* binding */ resolveProcessCredentials)
/* harmony export */ });
const isProcessProfile = (arg) => Boolean(arg) && typeof arg === "object" && typeof arg.credential_process === "string";
const resolveProcessCredentials = async (options, profile) => __webpack_require__.e(/*! import() */ "_aws-sdk_credential-provider-process_dist-es_index_js").then(__webpack_require__.bind(__webpack_require__, /*! @aws-sdk/credential-provider-process */ "../../@aws-sdk/credential-provider-process/dist-es/index.js")).then(({ fromProcess }) => fromProcess({
    ...options,
    profile,
})());


/***/ }),

/***/ "../../@aws-sdk/credential-provider-ini/dist-es/resolveProfileData.js":
/*!****************************************************************************!*\
  !*** ../../@aws-sdk/credential-provider-ini/dist-es/resolveProfileData.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resolveProfileData: () => (/* binding */ resolveProfileData)
/* harmony export */ });
/* harmony import */ var _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/property-provider */ "../../@smithy/property-provider/dist-es/index.js");
/* harmony import */ var _resolveAssumeRoleCredentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resolveAssumeRoleCredentials */ "../../@aws-sdk/credential-provider-ini/dist-es/resolveAssumeRoleCredentials.js");
/* harmony import */ var _resolveProcessCredentials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resolveProcessCredentials */ "../../@aws-sdk/credential-provider-ini/dist-es/resolveProcessCredentials.js");
/* harmony import */ var _resolveSsoCredentials__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resolveSsoCredentials */ "../../@aws-sdk/credential-provider-ini/dist-es/resolveSsoCredentials.js");
/* harmony import */ var _resolveStaticCredentials__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resolveStaticCredentials */ "../../@aws-sdk/credential-provider-ini/dist-es/resolveStaticCredentials.js");
/* harmony import */ var _resolveWebIdentityCredentials__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resolveWebIdentityCredentials */ "../../@aws-sdk/credential-provider-ini/dist-es/resolveWebIdentityCredentials.js");






const resolveProfileData = async (profileName, profiles, options, visitedProfiles = {}) => {
    const data = profiles[profileName];
    if (Object.keys(visitedProfiles).length > 0 && (0,_resolveStaticCredentials__WEBPACK_IMPORTED_MODULE_4__.isStaticCredsProfile)(data)) {
        return (0,_resolveStaticCredentials__WEBPACK_IMPORTED_MODULE_4__.resolveStaticCredentials)(data, options);
    }
    if ((0,_resolveAssumeRoleCredentials__WEBPACK_IMPORTED_MODULE_1__.isAssumeRoleProfile)(data)) {
        return (0,_resolveAssumeRoleCredentials__WEBPACK_IMPORTED_MODULE_1__.resolveAssumeRoleCredentials)(profileName, profiles, options, visitedProfiles);
    }
    if ((0,_resolveStaticCredentials__WEBPACK_IMPORTED_MODULE_4__.isStaticCredsProfile)(data)) {
        return (0,_resolveStaticCredentials__WEBPACK_IMPORTED_MODULE_4__.resolveStaticCredentials)(data, options);
    }
    if ((0,_resolveWebIdentityCredentials__WEBPACK_IMPORTED_MODULE_5__.isWebIdentityProfile)(data)) {
        return (0,_resolveWebIdentityCredentials__WEBPACK_IMPORTED_MODULE_5__.resolveWebIdentityCredentials)(data, options);
    }
    if ((0,_resolveProcessCredentials__WEBPACK_IMPORTED_MODULE_2__.isProcessProfile)(data)) {
        return (0,_resolveProcessCredentials__WEBPACK_IMPORTED_MODULE_2__.resolveProcessCredentials)(options, profileName);
    }
    if ((0,_resolveSsoCredentials__WEBPACK_IMPORTED_MODULE_3__.isSsoProfile)(data)) {
        return await (0,_resolveSsoCredentials__WEBPACK_IMPORTED_MODULE_3__.resolveSsoCredentials)(profileName, options);
    }
    throw new _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__.CredentialsProviderError(`Profile ${profileName} could not be found or parsed in shared credentials file.`);
};


/***/ }),

/***/ "../../@aws-sdk/credential-provider-ini/dist-es/resolveSsoCredentials.js":
/*!*******************************************************************************!*\
  !*** ../../@aws-sdk/credential-provider-ini/dist-es/resolveSsoCredentials.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isSsoProfile: () => (/* binding */ isSsoProfile),
/* harmony export */   resolveSsoCredentials: () => (/* binding */ resolveSsoCredentials)
/* harmony export */ });
const resolveSsoCredentials = async (profile, options = {}) => {
    const { fromSSO } = await __webpack_require__.e(/*! import() */ "_aws-sdk_credential-provider-sso_dist-es_index_js").then(__webpack_require__.bind(__webpack_require__, /*! @aws-sdk/credential-provider-sso */ "../../@aws-sdk/credential-provider-sso/dist-es/index.js"));
    return fromSSO({
        profile,
        logger: options.logger,
    })();
};
const isSsoProfile = (arg) => arg &&
    (typeof arg.sso_start_url === "string" ||
        typeof arg.sso_account_id === "string" ||
        typeof arg.sso_session === "string" ||
        typeof arg.sso_region === "string" ||
        typeof arg.sso_role_name === "string");


/***/ }),

/***/ "../../@aws-sdk/credential-provider-ini/dist-es/resolveStaticCredentials.js":
/*!**********************************************************************************!*\
  !*** ../../@aws-sdk/credential-provider-ini/dist-es/resolveStaticCredentials.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isStaticCredsProfile: () => (/* binding */ isStaticCredsProfile),
/* harmony export */   resolveStaticCredentials: () => (/* binding */ resolveStaticCredentials)
/* harmony export */ });
const isStaticCredsProfile = (arg) => Boolean(arg) &&
    typeof arg === "object" &&
    typeof arg.aws_access_key_id === "string" &&
    typeof arg.aws_secret_access_key === "string" &&
    ["undefined", "string"].indexOf(typeof arg.aws_session_token) > -1;
const resolveStaticCredentials = (profile, options) => {
    options?.logger?.debug("@aws-sdk/credential-provider-ini", "resolveStaticCredentials");
    return Promise.resolve({
        accessKeyId: profile.aws_access_key_id,
        secretAccessKey: profile.aws_secret_access_key,
        sessionToken: profile.aws_session_token,
        credentialScope: profile.aws_credential_scope,
    });
};


/***/ }),

/***/ "../../@aws-sdk/credential-provider-ini/dist-es/resolveWebIdentityCredentials.js":
/*!***************************************************************************************!*\
  !*** ../../@aws-sdk/credential-provider-ini/dist-es/resolveWebIdentityCredentials.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isWebIdentityProfile: () => (/* binding */ isWebIdentityProfile),
/* harmony export */   resolveWebIdentityCredentials: () => (/* binding */ resolveWebIdentityCredentials)
/* harmony export */ });
const isWebIdentityProfile = (arg) => Boolean(arg) &&
    typeof arg === "object" &&
    typeof arg.web_identity_token_file === "string" &&
    typeof arg.role_arn === "string" &&
    ["undefined", "string"].indexOf(typeof arg.role_session_name) > -1;
const resolveWebIdentityCredentials = async (profile, options) => __webpack_require__.e(/*! import() */ "_aws-sdk_credential-provider-web-identity_dist-es_index_js").then(__webpack_require__.bind(__webpack_require__, /*! @aws-sdk/credential-provider-web-identity */ "../../@aws-sdk/credential-provider-web-identity/dist-es/index.js")).then(({ fromTokenFile }) => fromTokenFile({
    webIdentityTokenFile: profile.web_identity_token_file,
    roleArn: profile.role_arn,
    roleSessionName: profile.role_session_name,
    roleAssumerWithWebIdentity: options.roleAssumerWithWebIdentity,
    logger: options.logger,
    parentClientConfig: options.parentClientConfig,
})());


/***/ })

};
;
//# sourceMappingURL=_aws-sdk_credential-provider-ini_dist-es_index_js.js.map