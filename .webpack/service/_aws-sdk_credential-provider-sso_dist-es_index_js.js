"use strict";
exports.id = "_aws-sdk_credential-provider-sso_dist-es_index_js";
exports.ids = ["_aws-sdk_credential-provider-sso_dist-es_index_js"];
exports.modules = {

/***/ "../../@aws-sdk/credential-provider-sso/dist-es/fromSSO.js":
/*!*****************************************************************!*\
  !*** ../../@aws-sdk/credential-provider-sso/dist-es/fromSSO.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fromSSO: () => (/* binding */ fromSSO)
/* harmony export */ });
/* harmony import */ var _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/property-provider */ "../../@smithy/property-provider/dist-es/index.js");
/* harmony import */ var _smithy_shared_ini_file_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smithy/shared-ini-file-loader */ "../../@smithy/shared-ini-file-loader/dist-es/index.js");
/* harmony import */ var _isSsoProfile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isSsoProfile */ "../../@aws-sdk/credential-provider-sso/dist-es/isSsoProfile.js");
/* harmony import */ var _resolveSSOCredentials__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resolveSSOCredentials */ "../../@aws-sdk/credential-provider-sso/dist-es/resolveSSOCredentials.js");
/* harmony import */ var _validateSsoProfile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./validateSsoProfile */ "../../@aws-sdk/credential-provider-sso/dist-es/validateSsoProfile.js");





const fromSSO = (init = {}) => async () => {
    init.logger?.debug("@aws-sdk/credential-provider-sso", "fromSSO");
    const { ssoStartUrl, ssoAccountId, ssoRegion, ssoRoleName, ssoSession } = init;
    const { ssoClient } = init;
    const profileName = (0,_smithy_shared_ini_file_loader__WEBPACK_IMPORTED_MODULE_1__.getProfileName)(init);
    if (!ssoStartUrl && !ssoAccountId && !ssoRegion && !ssoRoleName && !ssoSession) {
        const profiles = await (0,_smithy_shared_ini_file_loader__WEBPACK_IMPORTED_MODULE_1__.parseKnownFiles)(init);
        const profile = profiles[profileName];
        if (!profile) {
            throw new _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__.CredentialsProviderError(`Profile ${profileName} was not found.`);
        }
        if (!(0,_isSsoProfile__WEBPACK_IMPORTED_MODULE_2__.isSsoProfile)(profile)) {
            throw new _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__.CredentialsProviderError(`Profile ${profileName} is not configured with SSO credentials.`);
        }
        if (profile?.sso_session) {
            const ssoSessions = await (0,_smithy_shared_ini_file_loader__WEBPACK_IMPORTED_MODULE_1__.loadSsoSessionData)(init);
            const session = ssoSessions[profile.sso_session];
            const conflictMsg = ` configurations in profile ${profileName} and sso-session ${profile.sso_session}`;
            if (ssoRegion && ssoRegion !== session.sso_region) {
                throw new _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__.CredentialsProviderError(`Conflicting SSO region` + conflictMsg, false);
            }
            if (ssoStartUrl && ssoStartUrl !== session.sso_start_url) {
                throw new _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__.CredentialsProviderError(`Conflicting SSO start_url` + conflictMsg, false);
            }
            profile.sso_region = session.sso_region;
            profile.sso_start_url = session.sso_start_url;
        }
        const { sso_start_url, sso_account_id, sso_region, sso_role_name, sso_session } = (0,_validateSsoProfile__WEBPACK_IMPORTED_MODULE_4__.validateSsoProfile)(profile);
        return (0,_resolveSSOCredentials__WEBPACK_IMPORTED_MODULE_3__.resolveSSOCredentials)({
            ssoStartUrl: sso_start_url,
            ssoSession: sso_session,
            ssoAccountId: sso_account_id,
            ssoRegion: sso_region,
            ssoRoleName: sso_role_name,
            ssoClient: ssoClient,
            clientConfig: init.clientConfig,
            profile: profileName,
        });
    }
    else if (!ssoStartUrl || !ssoAccountId || !ssoRegion || !ssoRoleName) {
        throw new _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__.CredentialsProviderError("Incomplete configuration. The fromSSO() argument hash must include " +
            '"ssoStartUrl", "ssoAccountId", "ssoRegion", "ssoRoleName"');
    }
    else {
        return (0,_resolveSSOCredentials__WEBPACK_IMPORTED_MODULE_3__.resolveSSOCredentials)({
            ssoStartUrl,
            ssoSession,
            ssoAccountId,
            ssoRegion,
            ssoRoleName,
            ssoClient,
            clientConfig: init.clientConfig,
            profile: profileName,
        });
    }
};


/***/ }),

/***/ "../../@aws-sdk/credential-provider-sso/dist-es/index.js":
/*!***************************************************************!*\
  !*** ../../@aws-sdk/credential-provider-sso/dist-es/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fromSSO: () => (/* reexport safe */ _fromSSO__WEBPACK_IMPORTED_MODULE_0__.fromSSO),
/* harmony export */   isSsoProfile: () => (/* reexport safe */ _isSsoProfile__WEBPACK_IMPORTED_MODULE_1__.isSsoProfile),
/* harmony export */   validateSsoProfile: () => (/* reexport safe */ _validateSsoProfile__WEBPACK_IMPORTED_MODULE_3__.validateSsoProfile)
/* harmony export */ });
/* harmony import */ var _fromSSO__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fromSSO */ "../../@aws-sdk/credential-provider-sso/dist-es/fromSSO.js");
/* harmony import */ var _isSsoProfile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isSsoProfile */ "../../@aws-sdk/credential-provider-sso/dist-es/isSsoProfile.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "../../@aws-sdk/credential-provider-sso/dist-es/types.js");
/* harmony import */ var _validateSsoProfile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./validateSsoProfile */ "../../@aws-sdk/credential-provider-sso/dist-es/validateSsoProfile.js");






/***/ }),

/***/ "../../@aws-sdk/credential-provider-sso/dist-es/isSsoProfile.js":
/*!**********************************************************************!*\
  !*** ../../@aws-sdk/credential-provider-sso/dist-es/isSsoProfile.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isSsoProfile: () => (/* binding */ isSsoProfile)
/* harmony export */ });
const isSsoProfile = (arg) => arg &&
    (typeof arg.sso_start_url === "string" ||
        typeof arg.sso_account_id === "string" ||
        typeof arg.sso_session === "string" ||
        typeof arg.sso_region === "string" ||
        typeof arg.sso_role_name === "string");


/***/ }),

/***/ "../../@aws-sdk/credential-provider-sso/dist-es/resolveSSOCredentials.js":
/*!*******************************************************************************!*\
  !*** ../../@aws-sdk/credential-provider-sso/dist-es/resolveSSOCredentials.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resolveSSOCredentials: () => (/* binding */ resolveSSOCredentials)
/* harmony export */ });
/* harmony import */ var _aws_sdk_token_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aws-sdk/token-providers */ "../../@aws-sdk/token-providers/dist-es/fromSso.js");
/* harmony import */ var _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/property-provider */ "../../@smithy/property-provider/dist-es/index.js");
/* harmony import */ var _smithy_shared_ini_file_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smithy/shared-ini-file-loader */ "../../@smithy/shared-ini-file-loader/dist-es/index.js");



const SHOULD_FAIL_CREDENTIAL_CHAIN = false;
const resolveSSOCredentials = async ({ ssoStartUrl, ssoSession, ssoAccountId, ssoRegion, ssoRoleName, ssoClient, clientConfig, profile, }) => {
    let token;
    const refreshMessage = `To refresh this SSO session run aws sso login with the corresponding profile.`;
    if (ssoSession) {
        try {
            const _token = await (0,_aws_sdk_token_providers__WEBPACK_IMPORTED_MODULE_2__.fromSso)({ profile })();
            token = {
                accessToken: _token.token,
                expiresAt: new Date(_token.expiration).toISOString(),
            };
        }
        catch (e) {
            throw new _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__.CredentialsProviderError(e.message, SHOULD_FAIL_CREDENTIAL_CHAIN);
        }
    }
    else {
        try {
            token = await (0,_smithy_shared_ini_file_loader__WEBPACK_IMPORTED_MODULE_1__.getSSOTokenFromFile)(ssoStartUrl);
        }
        catch (e) {
            throw new _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__.CredentialsProviderError(`The SSO session associated with this profile is invalid. ${refreshMessage}`, SHOULD_FAIL_CREDENTIAL_CHAIN);
        }
    }
    if (new Date(token.expiresAt).getTime() - Date.now() <= 0) {
        throw new _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__.CredentialsProviderError(`The SSO session associated with this profile has expired. ${refreshMessage}`, SHOULD_FAIL_CREDENTIAL_CHAIN);
    }
    const { accessToken } = token;
    const { SSOClient, GetRoleCredentialsCommand } = await __webpack_require__.e(/*! import() */ "_aws-sdk_credential-provider-sso_dist-es_loadSso_js").then(__webpack_require__.bind(__webpack_require__, /*! ./loadSso */ "../../@aws-sdk/credential-provider-sso/dist-es/loadSso.js"));
    const sso = ssoClient ||
        new SSOClient(Object.assign({}, clientConfig ?? {}, {
            region: clientConfig?.region ?? ssoRegion,
        }));
    let ssoResp;
    try {
        ssoResp = await sso.send(new GetRoleCredentialsCommand({
            accountId: ssoAccountId,
            roleName: ssoRoleName,
            accessToken,
        }));
    }
    catch (e) {
        throw _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__.CredentialsProviderError.from(e, SHOULD_FAIL_CREDENTIAL_CHAIN);
    }
    const { roleCredentials: { accessKeyId, secretAccessKey, sessionToken, expiration, credentialScope } = {} } = ssoResp;
    if (!accessKeyId || !secretAccessKey || !sessionToken || !expiration) {
        throw new _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__.CredentialsProviderError("SSO returns an invalid temporary credential.", SHOULD_FAIL_CREDENTIAL_CHAIN);
    }
    return { accessKeyId, secretAccessKey, sessionToken, expiration: new Date(expiration), credentialScope };
};


/***/ }),

/***/ "../../@aws-sdk/credential-provider-sso/dist-es/types.js":
/*!***************************************************************!*\
  !*** ../../@aws-sdk/credential-provider-sso/dist-es/types.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../@aws-sdk/credential-provider-sso/dist-es/validateSsoProfile.js":
/*!****************************************************************************!*\
  !*** ../../@aws-sdk/credential-provider-sso/dist-es/validateSsoProfile.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   validateSsoProfile: () => (/* binding */ validateSsoProfile)
/* harmony export */ });
/* harmony import */ var _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/property-provider */ "../../@smithy/property-provider/dist-es/index.js");

const validateSsoProfile = (profile) => {
    const { sso_start_url, sso_account_id, sso_region, sso_role_name } = profile;
    if (!sso_start_url || !sso_account_id || !sso_region || !sso_role_name) {
        throw new _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__.CredentialsProviderError(`Profile is configured with invalid SSO credentials. Required parameters "sso_account_id", ` +
            `"sso_region", "sso_role_name", "sso_start_url". Got ${Object.keys(profile).join(", ")}\nReference: https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-sso.html`, false);
    }
    return profile;
};


/***/ }),

/***/ "../../@aws-sdk/token-providers/dist-es/constants.js":
/*!***********************************************************!*\
  !*** ../../@aws-sdk/token-providers/dist-es/constants.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EXPIRE_WINDOW_MS: () => (/* binding */ EXPIRE_WINDOW_MS),
/* harmony export */   REFRESH_MESSAGE: () => (/* binding */ REFRESH_MESSAGE)
/* harmony export */ });
const EXPIRE_WINDOW_MS = 5 * 60 * 1000;
const REFRESH_MESSAGE = `To refresh this SSO session run 'aws sso login' with the corresponding profile.`;


/***/ }),

/***/ "../../@aws-sdk/token-providers/dist-es/fromSso.js":
/*!*********************************************************!*\
  !*** ../../@aws-sdk/token-providers/dist-es/fromSso.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fromSso: () => (/* binding */ fromSso)
/* harmony export */ });
/* harmony import */ var _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/property-provider */ "../../@smithy/property-provider/dist-es/index.js");
/* harmony import */ var _smithy_shared_ini_file_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smithy/shared-ini-file-loader */ "../../@smithy/shared-ini-file-loader/dist-es/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "../../@aws-sdk/token-providers/dist-es/constants.js");
/* harmony import */ var _getNewSsoOidcToken__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getNewSsoOidcToken */ "../../@aws-sdk/token-providers/dist-es/getNewSsoOidcToken.js");
/* harmony import */ var _validateTokenExpiry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./validateTokenExpiry */ "../../@aws-sdk/token-providers/dist-es/validateTokenExpiry.js");
/* harmony import */ var _validateTokenKey__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./validateTokenKey */ "../../@aws-sdk/token-providers/dist-es/validateTokenKey.js");
/* harmony import */ var _writeSSOTokenToFile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./writeSSOTokenToFile */ "../../@aws-sdk/token-providers/dist-es/writeSSOTokenToFile.js");







const lastRefreshAttemptTime = new Date(0);
const fromSso = (init = {}) => async () => {
    init.logger?.debug("@aws-sdk/token-providers", "fromSso");
    const profiles = await (0,_smithy_shared_ini_file_loader__WEBPACK_IMPORTED_MODULE_1__.parseKnownFiles)(init);
    const profileName = (0,_smithy_shared_ini_file_loader__WEBPACK_IMPORTED_MODULE_1__.getProfileName)(init);
    const profile = profiles[profileName];
    if (!profile) {
        throw new _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__.TokenProviderError(`Profile '${profileName}' could not be found in shared credentials file.`, false);
    }
    else if (!profile["sso_session"]) {
        throw new _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__.TokenProviderError(`Profile '${profileName}' is missing required property 'sso_session'.`);
    }
    const ssoSessionName = profile["sso_session"];
    const ssoSessions = await (0,_smithy_shared_ini_file_loader__WEBPACK_IMPORTED_MODULE_1__.loadSsoSessionData)(init);
    const ssoSession = ssoSessions[ssoSessionName];
    if (!ssoSession) {
        throw new _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__.TokenProviderError(`Sso session '${ssoSessionName}' could not be found in shared credentials file.`, false);
    }
    for (const ssoSessionRequiredKey of ["sso_start_url", "sso_region"]) {
        if (!ssoSession[ssoSessionRequiredKey]) {
            throw new _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__.TokenProviderError(`Sso session '${ssoSessionName}' is missing required property '${ssoSessionRequiredKey}'.`, false);
        }
    }
    const ssoStartUrl = ssoSession["sso_start_url"];
    const ssoRegion = ssoSession["sso_region"];
    let ssoToken;
    try {
        ssoToken = await (0,_smithy_shared_ini_file_loader__WEBPACK_IMPORTED_MODULE_1__.getSSOTokenFromFile)(ssoSessionName);
    }
    catch (e) {
        throw new _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__.TokenProviderError(`The SSO session token associated with profile=${profileName} was not found or is invalid. ${_constants__WEBPACK_IMPORTED_MODULE_2__.REFRESH_MESSAGE}`, false);
    }
    (0,_validateTokenKey__WEBPACK_IMPORTED_MODULE_3__.validateTokenKey)("accessToken", ssoToken.accessToken);
    (0,_validateTokenKey__WEBPACK_IMPORTED_MODULE_3__.validateTokenKey)("expiresAt", ssoToken.expiresAt);
    const { accessToken, expiresAt } = ssoToken;
    const existingToken = { token: accessToken, expiration: new Date(expiresAt) };
    if (existingToken.expiration.getTime() - Date.now() > _constants__WEBPACK_IMPORTED_MODULE_2__.EXPIRE_WINDOW_MS) {
        return existingToken;
    }
    if (Date.now() - lastRefreshAttemptTime.getTime() < 30 * 1000) {
        (0,_validateTokenExpiry__WEBPACK_IMPORTED_MODULE_4__.validateTokenExpiry)(existingToken);
        return existingToken;
    }
    (0,_validateTokenKey__WEBPACK_IMPORTED_MODULE_3__.validateTokenKey)("clientId", ssoToken.clientId, true);
    (0,_validateTokenKey__WEBPACK_IMPORTED_MODULE_3__.validateTokenKey)("clientSecret", ssoToken.clientSecret, true);
    (0,_validateTokenKey__WEBPACK_IMPORTED_MODULE_3__.validateTokenKey)("refreshToken", ssoToken.refreshToken, true);
    try {
        lastRefreshAttemptTime.setTime(Date.now());
        const newSsoOidcToken = await (0,_getNewSsoOidcToken__WEBPACK_IMPORTED_MODULE_5__.getNewSsoOidcToken)(ssoToken, ssoRegion);
        (0,_validateTokenKey__WEBPACK_IMPORTED_MODULE_3__.validateTokenKey)("accessToken", newSsoOidcToken.accessToken);
        (0,_validateTokenKey__WEBPACK_IMPORTED_MODULE_3__.validateTokenKey)("expiresIn", newSsoOidcToken.expiresIn);
        const newTokenExpiration = new Date(Date.now() + newSsoOidcToken.expiresIn * 1000);
        try {
            await (0,_writeSSOTokenToFile__WEBPACK_IMPORTED_MODULE_6__.writeSSOTokenToFile)(ssoSessionName, {
                ...ssoToken,
                accessToken: newSsoOidcToken.accessToken,
                expiresAt: newTokenExpiration.toISOString(),
                refreshToken: newSsoOidcToken.refreshToken,
            });
        }
        catch (error) {
        }
        return {
            token: newSsoOidcToken.accessToken,
            expiration: newTokenExpiration,
        };
    }
    catch (error) {
        (0,_validateTokenExpiry__WEBPACK_IMPORTED_MODULE_4__.validateTokenExpiry)(existingToken);
        return existingToken;
    }
};


/***/ }),

/***/ "../../@aws-sdk/token-providers/dist-es/getNewSsoOidcToken.js":
/*!********************************************************************!*\
  !*** ../../@aws-sdk/token-providers/dist-es/getNewSsoOidcToken.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getNewSsoOidcToken: () => (/* binding */ getNewSsoOidcToken)
/* harmony export */ });
/* harmony import */ var _getSsoOidcClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getSsoOidcClient */ "../../@aws-sdk/token-providers/dist-es/getSsoOidcClient.js");

const getNewSsoOidcToken = async (ssoToken, ssoRegion) => {
    const { CreateTokenCommand } = await __webpack_require__.e(/*! import() */ "_aws-sdk_token-providers_dist-es_loadSsoOidc_js").then(__webpack_require__.bind(__webpack_require__, /*! ./loadSsoOidc */ "../../@aws-sdk/token-providers/dist-es/loadSsoOidc.js"));
    const ssoOidcClient = await (0,_getSsoOidcClient__WEBPACK_IMPORTED_MODULE_0__.getSsoOidcClient)(ssoRegion);
    return ssoOidcClient.send(new CreateTokenCommand({
        clientId: ssoToken.clientId,
        clientSecret: ssoToken.clientSecret,
        refreshToken: ssoToken.refreshToken,
        grantType: "refresh_token",
    }));
};


/***/ }),

/***/ "../../@aws-sdk/token-providers/dist-es/getSsoOidcClient.js":
/*!******************************************************************!*\
  !*** ../../@aws-sdk/token-providers/dist-es/getSsoOidcClient.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSsoOidcClient: () => (/* binding */ getSsoOidcClient)
/* harmony export */ });
const ssoOidcClientsHash = {};
const getSsoOidcClient = async (ssoRegion) => {
    const { SSOOIDCClient } = await __webpack_require__.e(/*! import() */ "_aws-sdk_token-providers_dist-es_loadSsoOidc_js").then(__webpack_require__.bind(__webpack_require__, /*! ./loadSsoOidc */ "../../@aws-sdk/token-providers/dist-es/loadSsoOidc.js"));
    if (ssoOidcClientsHash[ssoRegion]) {
        return ssoOidcClientsHash[ssoRegion];
    }
    const ssoOidcClient = new SSOOIDCClient({ region: ssoRegion });
    ssoOidcClientsHash[ssoRegion] = ssoOidcClient;
    return ssoOidcClient;
};


/***/ }),

/***/ "../../@aws-sdk/token-providers/dist-es/validateTokenExpiry.js":
/*!*********************************************************************!*\
  !*** ../../@aws-sdk/token-providers/dist-es/validateTokenExpiry.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   validateTokenExpiry: () => (/* binding */ validateTokenExpiry)
/* harmony export */ });
/* harmony import */ var _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/property-provider */ "../../@smithy/property-provider/dist-es/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "../../@aws-sdk/token-providers/dist-es/constants.js");


const validateTokenExpiry = (token) => {
    if (token.expiration && token.expiration.getTime() < Date.now()) {
        throw new _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__.TokenProviderError(`Token is expired. ${_constants__WEBPACK_IMPORTED_MODULE_1__.REFRESH_MESSAGE}`, false);
    }
};


/***/ }),

/***/ "../../@aws-sdk/token-providers/dist-es/validateTokenKey.js":
/*!******************************************************************!*\
  !*** ../../@aws-sdk/token-providers/dist-es/validateTokenKey.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   validateTokenKey: () => (/* binding */ validateTokenKey)
/* harmony export */ });
/* harmony import */ var _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/property-provider */ "../../@smithy/property-provider/dist-es/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "../../@aws-sdk/token-providers/dist-es/constants.js");


const validateTokenKey = (key, value, forRefresh = false) => {
    if (typeof value === "undefined") {
        throw new _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__.TokenProviderError(`Value not present for '${key}' in SSO Token${forRefresh ? ". Cannot refresh" : ""}. ${_constants__WEBPACK_IMPORTED_MODULE_1__.REFRESH_MESSAGE}`, false);
    }
};


/***/ }),

/***/ "../../@aws-sdk/token-providers/dist-es/writeSSOTokenToFile.js":
/*!*********************************************************************!*\
  !*** ../../@aws-sdk/token-providers/dist-es/writeSSOTokenToFile.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   writeSSOTokenToFile: () => (/* binding */ writeSSOTokenToFile)
/* harmony export */ });
/* harmony import */ var _smithy_shared_ini_file_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/shared-ini-file-loader */ "../../@smithy/shared-ini-file-loader/dist-es/index.js");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);


const { writeFile } = fs__WEBPACK_IMPORTED_MODULE_1__.promises;
const writeSSOTokenToFile = (id, ssoToken) => {
    const tokenFilepath = (0,_smithy_shared_ini_file_loader__WEBPACK_IMPORTED_MODULE_0__.getSSOTokenFilepath)(id);
    const tokenString = JSON.stringify(ssoToken, null, 2);
    return writeFile(tokenFilepath, tokenString);
};


/***/ })

};
;
//# sourceMappingURL=_aws-sdk_credential-provider-sso_dist-es_index_js.js.map