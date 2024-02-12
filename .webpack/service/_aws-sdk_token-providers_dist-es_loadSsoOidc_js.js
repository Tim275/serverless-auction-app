"use strict";
exports.id = "_aws-sdk_token-providers_dist-es_loadSsoOidc_js";
exports.ids = ["_aws-sdk_token-providers_dist-es_loadSsoOidc_js"];
exports.modules = {

/***/ "../../@aws-sdk/client-sso-oidc/dist-es/SSOOIDCClient.js":
/*!***************************************************************!*\
  !*** ../../@aws-sdk/client-sso-oidc/dist-es/SSOOIDCClient.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SSOOIDCClient: () => (/* binding */ SSOOIDCClient),
/* harmony export */   __Client: () => (/* reexport safe */ _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_9__.Client)
/* harmony export */ });
/* harmony import */ var _aws_sdk_middleware_host_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/middleware-host-header */ "../../@aws-sdk/middleware-host-header/dist-es/index.js");
/* harmony import */ var _aws_sdk_middleware_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-sdk/middleware-logger */ "../../@aws-sdk/middleware-logger/dist-es/index.js");
/* harmony import */ var _aws_sdk_middleware_recursion_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aws-sdk/middleware-recursion-detection */ "../../@aws-sdk/middleware-recursion-detection/dist-es/index.js");
/* harmony import */ var _aws_sdk_middleware_signing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aws-sdk/middleware-signing */ "../../@aws-sdk/middleware-signing/dist-es/index.js");
/* harmony import */ var _aws_sdk_middleware_user_agent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @aws-sdk/middleware-user-agent */ "../../@aws-sdk/middleware-user-agent/dist-es/index.js");
/* harmony import */ var _smithy_config_resolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @smithy/config-resolver */ "../../@smithy/config-resolver/dist-es/index.js");
/* harmony import */ var _smithy_middleware_content_length__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @smithy/middleware-content-length */ "../../@smithy/middleware-content-length/dist-es/index.js");
/* harmony import */ var _smithy_middleware_endpoint__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @smithy/middleware-endpoint */ "../../@smithy/middleware-endpoint/dist-es/index.js");
/* harmony import */ var _smithy_middleware_retry__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @smithy/middleware-retry */ "../../@smithy/middleware-retry/dist-es/index.js");
/* harmony import */ var _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @smithy/smithy-client */ "../../@smithy/smithy-client/dist-es/index.js");
/* harmony import */ var _endpoint_EndpointParameters__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./endpoint/EndpointParameters */ "../../@aws-sdk/client-sso-oidc/dist-es/endpoint/EndpointParameters.js");
/* harmony import */ var _runtimeConfig__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./runtimeConfig */ "../../@aws-sdk/client-sso-oidc/dist-es/runtimeConfig.js");
/* harmony import */ var _runtimeExtensions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./runtimeExtensions */ "../../@aws-sdk/client-sso-oidc/dist-es/runtimeExtensions.js");














class SSOOIDCClient extends _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_9__.Client {
    constructor(...[configuration]) {
        const _config_0 = (0,_runtimeConfig__WEBPACK_IMPORTED_MODULE_10__.getRuntimeConfig)(configuration || {});
        const _config_1 = (0,_endpoint_EndpointParameters__WEBPACK_IMPORTED_MODULE_11__.resolveClientEndpointParameters)(_config_0);
        const _config_2 = (0,_smithy_config_resolver__WEBPACK_IMPORTED_MODULE_5__.resolveRegionConfig)(_config_1);
        const _config_3 = (0,_smithy_middleware_endpoint__WEBPACK_IMPORTED_MODULE_7__.resolveEndpointConfig)(_config_2);
        const _config_4 = (0,_smithy_middleware_retry__WEBPACK_IMPORTED_MODULE_8__.resolveRetryConfig)(_config_3);
        const _config_5 = (0,_aws_sdk_middleware_host_header__WEBPACK_IMPORTED_MODULE_0__.resolveHostHeaderConfig)(_config_4);
        const _config_6 = (0,_aws_sdk_middleware_signing__WEBPACK_IMPORTED_MODULE_3__.resolveAwsAuthConfig)(_config_5);
        const _config_7 = (0,_aws_sdk_middleware_user_agent__WEBPACK_IMPORTED_MODULE_4__.resolveUserAgentConfig)(_config_6);
        const _config_8 = (0,_runtimeExtensions__WEBPACK_IMPORTED_MODULE_12__.resolveRuntimeExtensions)(_config_7, configuration?.extensions || []);
        super(_config_8);
        this.config = _config_8;
        this.middlewareStack.use((0,_smithy_middleware_retry__WEBPACK_IMPORTED_MODULE_8__.getRetryPlugin)(this.config));
        this.middlewareStack.use((0,_smithy_middleware_content_length__WEBPACK_IMPORTED_MODULE_6__.getContentLengthPlugin)(this.config));
        this.middlewareStack.use((0,_aws_sdk_middleware_host_header__WEBPACK_IMPORTED_MODULE_0__.getHostHeaderPlugin)(this.config));
        this.middlewareStack.use((0,_aws_sdk_middleware_logger__WEBPACK_IMPORTED_MODULE_1__.getLoggerPlugin)(this.config));
        this.middlewareStack.use((0,_aws_sdk_middleware_recursion_detection__WEBPACK_IMPORTED_MODULE_2__.getRecursionDetectionPlugin)(this.config));
        this.middlewareStack.use((0,_aws_sdk_middleware_user_agent__WEBPACK_IMPORTED_MODULE_4__.getUserAgentPlugin)(this.config));
    }
    destroy() {
        super.destroy();
    }
}


/***/ }),

/***/ "../../@aws-sdk/client-sso-oidc/dist-es/commands/CreateTokenCommand.js":
/*!*****************************************************************************!*\
  !*** ../../@aws-sdk/client-sso-oidc/dist-es/commands/CreateTokenCommand.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $Command: () => (/* reexport safe */ _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_2__.Command),
/* harmony export */   CreateTokenCommand: () => (/* binding */ CreateTokenCommand)
/* harmony export */ });
/* harmony import */ var _smithy_middleware_endpoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/middleware-endpoint */ "../../@smithy/middleware-endpoint/dist-es/index.js");
/* harmony import */ var _smithy_middleware_serde__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smithy/middleware-serde */ "../../@smithy/middleware-serde/dist-es/index.js");
/* harmony import */ var _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @smithy/smithy-client */ "../../@smithy/smithy-client/dist-es/index.js");
/* harmony import */ var _endpoint_EndpointParameters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../endpoint/EndpointParameters */ "../../@aws-sdk/client-sso-oidc/dist-es/endpoint/EndpointParameters.js");
/* harmony import */ var _models_models_0__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/models_0 */ "../../@aws-sdk/client-sso-oidc/dist-es/models/models_0.js");
/* harmony import */ var _protocols_Aws_restJson1__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../protocols/Aws_restJson1 */ "../../@aws-sdk/client-sso-oidc/dist-es/protocols/Aws_restJson1.js");







class CreateTokenCommand extends _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_2__.Command
    .classBuilder()
    .ep({
    ..._endpoint_EndpointParameters__WEBPACK_IMPORTED_MODULE_3__.commonParams,
})
    .m(function (Command, cs, config, o) {
    return [
        (0,_smithy_middleware_serde__WEBPACK_IMPORTED_MODULE_1__.getSerdePlugin)(config, this.serialize, this.deserialize),
        (0,_smithy_middleware_endpoint__WEBPACK_IMPORTED_MODULE_0__.getEndpointPlugin)(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSSSOOIDCService", "CreateToken", {})
    .n("SSOOIDCClient", "CreateTokenCommand")
    .f(_models_models_0__WEBPACK_IMPORTED_MODULE_4__.CreateTokenRequestFilterSensitiveLog, _models_models_0__WEBPACK_IMPORTED_MODULE_4__.CreateTokenResponseFilterSensitiveLog)
    .ser(_protocols_Aws_restJson1__WEBPACK_IMPORTED_MODULE_5__.se_CreateTokenCommand)
    .de(_protocols_Aws_restJson1__WEBPACK_IMPORTED_MODULE_5__.de_CreateTokenCommand)
    .build() {
}


/***/ }),

/***/ "../../@aws-sdk/client-sso-oidc/dist-es/credentialDefaultProvider.js":
/*!***************************************************************************!*\
  !*** ../../@aws-sdk/client-sso-oidc/dist-es/credentialDefaultProvider.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultProvider: () => (/* binding */ defaultProvider)
/* harmony export */ });
const defaultProvider = ((input) => {
    return () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! @aws-sdk/credential-provider-node */ "../../@aws-sdk/credential-provider-node/dist-es/index.js")).then(({ defaultProvider }) => defaultProvider(input)());
});


/***/ }),

/***/ "../../@aws-sdk/client-sso-oidc/dist-es/endpoint/EndpointParameters.js":
/*!*****************************************************************************!*\
  !*** ../../@aws-sdk/client-sso-oidc/dist-es/endpoint/EndpointParameters.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   commonParams: () => (/* binding */ commonParams),
/* harmony export */   resolveClientEndpointParameters: () => (/* binding */ resolveClientEndpointParameters)
/* harmony export */ });
const resolveClientEndpointParameters = (options) => {
    return {
        ...options,
        useDualstackEndpoint: options.useDualstackEndpoint ?? false,
        useFipsEndpoint: options.useFipsEndpoint ?? false,
        defaultSigningName: "sso-oauth",
    };
};
const commonParams = {
    UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
    Endpoint: { type: "builtInParams", name: "endpoint" },
    Region: { type: "builtInParams", name: "region" },
    UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
};


/***/ }),

/***/ "../../@aws-sdk/client-sso-oidc/dist-es/endpoint/endpointResolver.js":
/*!***************************************************************************!*\
  !*** ../../@aws-sdk/client-sso-oidc/dist-es/endpoint/endpointResolver.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultEndpointResolver: () => (/* binding */ defaultEndpointResolver)
/* harmony export */ });
/* harmony import */ var _smithy_util_endpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/util-endpoints */ "../../@smithy/util-endpoints/dist-es/index.js");
/* harmony import */ var _ruleset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ruleset */ "../../@aws-sdk/client-sso-oidc/dist-es/endpoint/ruleset.js");


const defaultEndpointResolver = (endpointParams, context = {}) => {
    return (0,_smithy_util_endpoints__WEBPACK_IMPORTED_MODULE_0__.resolveEndpoint)(_ruleset__WEBPACK_IMPORTED_MODULE_1__.ruleSet, {
        endpointParams: endpointParams,
        logger: context.logger,
    });
};


/***/ }),

/***/ "../../@aws-sdk/client-sso-oidc/dist-es/endpoint/ruleset.js":
/*!******************************************************************!*\
  !*** ../../@aws-sdk/client-sso-oidc/dist-es/endpoint/ruleset.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ruleSet: () => (/* binding */ ruleSet)
/* harmony export */ });
const u = "required", v = "fn", w = "argv", x = "ref";
const a = true, b = "isSet", c = "booleanEquals", d = "error", e = "endpoint", f = "tree", g = "PartitionResult", h = "getAttr", i = { [u]: false, "type": "String" }, j = { [u]: true, "default": false, "type": "Boolean" }, k = { [x]: "Endpoint" }, l = { [v]: c, [w]: [{ [x]: "UseFIPS" }, true] }, m = { [v]: c, [w]: [{ [x]: "UseDualStack" }, true] }, n = {}, o = { [v]: h, [w]: [{ [x]: g }, "supportsFIPS"] }, p = { [x]: g }, q = { [v]: c, [w]: [true, { [v]: h, [w]: [p, "supportsDualStack"] }] }, r = [l], s = [m], t = [{ [x]: "Region" }];
const _data = { version: "1.0", parameters: { Region: i, UseDualStack: j, UseFIPS: j, Endpoint: i }, rules: [{ conditions: [{ [v]: b, [w]: [k] }], rules: [{ conditions: r, error: "Invalid Configuration: FIPS and custom endpoint are not supported", type: d }, { conditions: s, error: "Invalid Configuration: Dualstack and custom endpoint are not supported", type: d }, { endpoint: { url: k, properties: n, headers: n }, type: e }], type: f }, { conditions: [{ [v]: b, [w]: t }], rules: [{ conditions: [{ [v]: "aws.partition", [w]: t, assign: g }], rules: [{ conditions: [l, m], rules: [{ conditions: [{ [v]: c, [w]: [a, o] }, q], rules: [{ endpoint: { url: "https://oidc-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: n, headers: n }, type: e }], type: f }, { error: "FIPS and DualStack are enabled, but this partition does not support one or both", type: d }], type: f }, { conditions: r, rules: [{ conditions: [{ [v]: c, [w]: [o, a] }], rules: [{ conditions: [{ [v]: "stringEquals", [w]: [{ [v]: h, [w]: [p, "name"] }, "aws-us-gov"] }], endpoint: { url: "https://oidc.{Region}.amazonaws.com", properties: n, headers: n }, type: e }, { endpoint: { url: "https://oidc-fips.{Region}.{PartitionResult#dnsSuffix}", properties: n, headers: n }, type: e }], type: f }, { error: "FIPS is enabled but this partition does not support FIPS", type: d }], type: f }, { conditions: s, rules: [{ conditions: [q], rules: [{ endpoint: { url: "https://oidc.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: n, headers: n }, type: e }], type: f }, { error: "DualStack is enabled but this partition does not support DualStack", type: d }], type: f }, { endpoint: { url: "https://oidc.{Region}.{PartitionResult#dnsSuffix}", properties: n, headers: n }, type: e }], type: f }], type: f }, { error: "Invalid Configuration: Missing Region", type: d }] };
const ruleSet = _data;


/***/ }),

/***/ "../../@aws-sdk/client-sso-oidc/dist-es/models/SSOOIDCServiceException.js":
/*!********************************************************************************!*\
  !*** ../../@aws-sdk/client-sso-oidc/dist-es/models/SSOOIDCServiceException.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SSOOIDCServiceException: () => (/* binding */ SSOOIDCServiceException),
/* harmony export */   __ServiceException: () => (/* reexport safe */ _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.ServiceException)
/* harmony export */ });
/* harmony import */ var _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/smithy-client */ "../../@smithy/smithy-client/dist-es/index.js");


class SSOOIDCServiceException extends _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.ServiceException {
    constructor(options) {
        super(options);
        Object.setPrototypeOf(this, SSOOIDCServiceException.prototype);
    }
}


/***/ }),

/***/ "../../@aws-sdk/client-sso-oidc/dist-es/models/models_0.js":
/*!*****************************************************************!*\
  !*** ../../@aws-sdk/client-sso-oidc/dist-es/models/models_0.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccessDeniedException: () => (/* binding */ AccessDeniedException),
/* harmony export */   AuthorizationPendingException: () => (/* binding */ AuthorizationPendingException),
/* harmony export */   CreateTokenRequestFilterSensitiveLog: () => (/* binding */ CreateTokenRequestFilterSensitiveLog),
/* harmony export */   CreateTokenResponseFilterSensitiveLog: () => (/* binding */ CreateTokenResponseFilterSensitiveLog),
/* harmony export */   CreateTokenWithIAMRequestFilterSensitiveLog: () => (/* binding */ CreateTokenWithIAMRequestFilterSensitiveLog),
/* harmony export */   CreateTokenWithIAMResponseFilterSensitiveLog: () => (/* binding */ CreateTokenWithIAMResponseFilterSensitiveLog),
/* harmony export */   ExpiredTokenException: () => (/* binding */ ExpiredTokenException),
/* harmony export */   InternalServerException: () => (/* binding */ InternalServerException),
/* harmony export */   InvalidClientException: () => (/* binding */ InvalidClientException),
/* harmony export */   InvalidClientMetadataException: () => (/* binding */ InvalidClientMetadataException),
/* harmony export */   InvalidGrantException: () => (/* binding */ InvalidGrantException),
/* harmony export */   InvalidRequestException: () => (/* binding */ InvalidRequestException),
/* harmony export */   InvalidRequestRegionException: () => (/* binding */ InvalidRequestRegionException),
/* harmony export */   InvalidScopeException: () => (/* binding */ InvalidScopeException),
/* harmony export */   RegisterClientResponseFilterSensitiveLog: () => (/* binding */ RegisterClientResponseFilterSensitiveLog),
/* harmony export */   SlowDownException: () => (/* binding */ SlowDownException),
/* harmony export */   StartDeviceAuthorizationRequestFilterSensitiveLog: () => (/* binding */ StartDeviceAuthorizationRequestFilterSensitiveLog),
/* harmony export */   UnauthorizedClientException: () => (/* binding */ UnauthorizedClientException),
/* harmony export */   UnsupportedGrantTypeException: () => (/* binding */ UnsupportedGrantTypeException)
/* harmony export */ });
/* harmony import */ var _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/smithy-client */ "../../@smithy/smithy-client/dist-es/index.js");
/* harmony import */ var _SSOOIDCServiceException__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SSOOIDCServiceException */ "../../@aws-sdk/client-sso-oidc/dist-es/models/SSOOIDCServiceException.js");


class AccessDeniedException extends _SSOOIDCServiceException__WEBPACK_IMPORTED_MODULE_1__.SSOOIDCServiceException {
    constructor(opts) {
        super({
            name: "AccessDeniedException",
            $fault: "client",
            ...opts,
        });
        this.name = "AccessDeniedException";
        this.$fault = "client";
        Object.setPrototypeOf(this, AccessDeniedException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
    }
}
class AuthorizationPendingException extends _SSOOIDCServiceException__WEBPACK_IMPORTED_MODULE_1__.SSOOIDCServiceException {
    constructor(opts) {
        super({
            name: "AuthorizationPendingException",
            $fault: "client",
            ...opts,
        });
        this.name = "AuthorizationPendingException";
        this.$fault = "client";
        Object.setPrototypeOf(this, AuthorizationPendingException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
    }
}
class ExpiredTokenException extends _SSOOIDCServiceException__WEBPACK_IMPORTED_MODULE_1__.SSOOIDCServiceException {
    constructor(opts) {
        super({
            name: "ExpiredTokenException",
            $fault: "client",
            ...opts,
        });
        this.name = "ExpiredTokenException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ExpiredTokenException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
    }
}
class InternalServerException extends _SSOOIDCServiceException__WEBPACK_IMPORTED_MODULE_1__.SSOOIDCServiceException {
    constructor(opts) {
        super({
            name: "InternalServerException",
            $fault: "server",
            ...opts,
        });
        this.name = "InternalServerException";
        this.$fault = "server";
        Object.setPrototypeOf(this, InternalServerException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
    }
}
class InvalidClientException extends _SSOOIDCServiceException__WEBPACK_IMPORTED_MODULE_1__.SSOOIDCServiceException {
    constructor(opts) {
        super({
            name: "InvalidClientException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidClientException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidClientException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
    }
}
class InvalidGrantException extends _SSOOIDCServiceException__WEBPACK_IMPORTED_MODULE_1__.SSOOIDCServiceException {
    constructor(opts) {
        super({
            name: "InvalidGrantException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidGrantException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidGrantException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
    }
}
class InvalidRequestException extends _SSOOIDCServiceException__WEBPACK_IMPORTED_MODULE_1__.SSOOIDCServiceException {
    constructor(opts) {
        super({
            name: "InvalidRequestException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidRequestException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidRequestException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
    }
}
class InvalidScopeException extends _SSOOIDCServiceException__WEBPACK_IMPORTED_MODULE_1__.SSOOIDCServiceException {
    constructor(opts) {
        super({
            name: "InvalidScopeException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidScopeException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidScopeException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
    }
}
class SlowDownException extends _SSOOIDCServiceException__WEBPACK_IMPORTED_MODULE_1__.SSOOIDCServiceException {
    constructor(opts) {
        super({
            name: "SlowDownException",
            $fault: "client",
            ...opts,
        });
        this.name = "SlowDownException";
        this.$fault = "client";
        Object.setPrototypeOf(this, SlowDownException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
    }
}
class UnauthorizedClientException extends _SSOOIDCServiceException__WEBPACK_IMPORTED_MODULE_1__.SSOOIDCServiceException {
    constructor(opts) {
        super({
            name: "UnauthorizedClientException",
            $fault: "client",
            ...opts,
        });
        this.name = "UnauthorizedClientException";
        this.$fault = "client";
        Object.setPrototypeOf(this, UnauthorizedClientException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
    }
}
class UnsupportedGrantTypeException extends _SSOOIDCServiceException__WEBPACK_IMPORTED_MODULE_1__.SSOOIDCServiceException {
    constructor(opts) {
        super({
            name: "UnsupportedGrantTypeException",
            $fault: "client",
            ...opts,
        });
        this.name = "UnsupportedGrantTypeException";
        this.$fault = "client";
        Object.setPrototypeOf(this, UnsupportedGrantTypeException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
    }
}
class InvalidRequestRegionException extends _SSOOIDCServiceException__WEBPACK_IMPORTED_MODULE_1__.SSOOIDCServiceException {
    constructor(opts) {
        super({
            name: "InvalidRequestRegionException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidRequestRegionException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidRequestRegionException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
        this.endpoint = opts.endpoint;
        this.region = opts.region;
    }
}
class InvalidClientMetadataException extends _SSOOIDCServiceException__WEBPACK_IMPORTED_MODULE_1__.SSOOIDCServiceException {
    constructor(opts) {
        super({
            name: "InvalidClientMetadataException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidClientMetadataException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidClientMetadataException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
    }
}
const CreateTokenRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.clientSecret && { clientSecret: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
    ...(obj.refreshToken && { refreshToken: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
});
const CreateTokenResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.accessToken && { accessToken: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
    ...(obj.refreshToken && { refreshToken: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
    ...(obj.idToken && { idToken: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
});
const CreateTokenWithIAMRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.refreshToken && { refreshToken: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
    ...(obj.assertion && { assertion: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
    ...(obj.subjectToken && { subjectToken: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
});
const CreateTokenWithIAMResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.accessToken && { accessToken: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
    ...(obj.refreshToken && { refreshToken: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
    ...(obj.idToken && { idToken: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
});
const RegisterClientResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.clientSecret && { clientSecret: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
});
const StartDeviceAuthorizationRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.clientSecret && { clientSecret: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
});


/***/ }),

/***/ "../../@aws-sdk/client-sso-oidc/dist-es/protocols/Aws_restJson1.js":
/*!*************************************************************************!*\
  !*** ../../@aws-sdk/client-sso-oidc/dist-es/protocols/Aws_restJson1.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   de_CreateTokenCommand: () => (/* binding */ de_CreateTokenCommand),
/* harmony export */   de_CreateTokenWithIAMCommand: () => (/* binding */ de_CreateTokenWithIAMCommand),
/* harmony export */   de_RegisterClientCommand: () => (/* binding */ de_RegisterClientCommand),
/* harmony export */   de_StartDeviceAuthorizationCommand: () => (/* binding */ de_StartDeviceAuthorizationCommand),
/* harmony export */   se_CreateTokenCommand: () => (/* binding */ se_CreateTokenCommand),
/* harmony export */   se_CreateTokenWithIAMCommand: () => (/* binding */ se_CreateTokenWithIAMCommand),
/* harmony export */   se_RegisterClientCommand: () => (/* binding */ se_RegisterClientCommand),
/* harmony export */   se_StartDeviceAuthorizationCommand: () => (/* binding */ se_StartDeviceAuthorizationCommand)
/* harmony export */ });
/* harmony import */ var _smithy_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/core */ "../../@smithy/core/dist-es/index.js");
/* harmony import */ var _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smithy/smithy-client */ "../../@smithy/smithy-client/dist-es/index.js");
/* harmony import */ var _models_models_0__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/models_0 */ "../../@aws-sdk/client-sso-oidc/dist-es/models/models_0.js");
/* harmony import */ var _models_SSOOIDCServiceException__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/SSOOIDCServiceException */ "../../@aws-sdk/client-sso-oidc/dist-es/models/SSOOIDCServiceException.js");




const se_CreateTokenCommand = async (input, context) => {
    const b = (0,_smithy_core__WEBPACK_IMPORTED_MODULE_0__.requestBuilder)(input, context);
    const headers = {
        "content-type": "application/json",
    };
    b.bp("/token");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(input, {
        clientId: [],
        clientSecret: [],
        code: [],
        deviceCode: [],
        grantType: [],
        redirectUri: [],
        refreshToken: [],
        scope: (_) => (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(_),
    }));
    b.m("POST").h(headers).b(body);
    return b.build();
};
const se_CreateTokenWithIAMCommand = async (input, context) => {
    const b = (0,_smithy_core__WEBPACK_IMPORTED_MODULE_0__.requestBuilder)(input, context);
    const headers = {
        "content-type": "application/json",
    };
    b.bp("/token");
    const query = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({
        [_ai]: [, "t"],
    });
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(input, {
        assertion: [],
        clientId: [],
        code: [],
        grantType: [],
        redirectUri: [],
        refreshToken: [],
        requestedTokenType: [],
        scope: (_) => (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(_),
        subjectToken: [],
        subjectTokenType: [],
    }));
    b.m("POST").h(headers).q(query).b(body);
    return b.build();
};
const se_RegisterClientCommand = async (input, context) => {
    const b = (0,_smithy_core__WEBPACK_IMPORTED_MODULE_0__.requestBuilder)(input, context);
    const headers = {
        "content-type": "application/json",
    };
    b.bp("/client/register");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(input, {
        clientName: [],
        clientType: [],
        scopes: (_) => (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(_),
    }));
    b.m("POST").h(headers).b(body);
    return b.build();
};
const se_StartDeviceAuthorizationCommand = async (input, context) => {
    const b = (0,_smithy_core__WEBPACK_IMPORTED_MODULE_0__.requestBuilder)(input, context);
    const headers = {
        "content-type": "application/json",
    };
    b.bp("/device_authorization");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(input, {
        clientId: [],
        clientSecret: [],
        startUrl: [],
    }));
    b.m("POST").h(headers).b(body);
    return b.build();
};
const de_CreateTokenCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectNonNull)((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectObject)(await parseBody(output.body, context)), "body");
    const doc = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(data, {
        accessToken: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        expiresIn: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectInt32,
        idToken: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        refreshToken: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        tokenType: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
const de_CreateTokenWithIAMCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectNonNull)((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectObject)(await parseBody(output.body, context)), "body");
    const doc = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(data, {
        accessToken: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        expiresIn: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectInt32,
        idToken: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        issuedTokenType: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        refreshToken: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        scope: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json,
        tokenType: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
const de_RegisterClientCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectNonNull)((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectObject)(await parseBody(output.body, context)), "body");
    const doc = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(data, {
        authorizationEndpoint: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        clientId: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        clientIdIssuedAt: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectLong,
        clientSecret: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        clientSecretExpiresAt: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectLong,
        tokenEndpoint: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
const de_StartDeviceAuthorizationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectNonNull)((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectObject)(await parseBody(output.body, context)), "body");
    const doc = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(data, {
        deviceCode: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        expiresIn: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectInt32,
        interval: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectInt32,
        userCode: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        verificationUri: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        verificationUriComplete: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
const de_CommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.ssooidc#AccessDeniedException":
            throw await de_AccessDeniedExceptionRes(parsedOutput, context);
        case "AuthorizationPendingException":
        case "com.amazonaws.ssooidc#AuthorizationPendingException":
            throw await de_AuthorizationPendingExceptionRes(parsedOutput, context);
        case "ExpiredTokenException":
        case "com.amazonaws.ssooidc#ExpiredTokenException":
            throw await de_ExpiredTokenExceptionRes(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.ssooidc#InternalServerException":
            throw await de_InternalServerExceptionRes(parsedOutput, context);
        case "InvalidClientException":
        case "com.amazonaws.ssooidc#InvalidClientException":
            throw await de_InvalidClientExceptionRes(parsedOutput, context);
        case "InvalidGrantException":
        case "com.amazonaws.ssooidc#InvalidGrantException":
            throw await de_InvalidGrantExceptionRes(parsedOutput, context);
        case "InvalidRequestException":
        case "com.amazonaws.ssooidc#InvalidRequestException":
            throw await de_InvalidRequestExceptionRes(parsedOutput, context);
        case "InvalidScopeException":
        case "com.amazonaws.ssooidc#InvalidScopeException":
            throw await de_InvalidScopeExceptionRes(parsedOutput, context);
        case "SlowDownException":
        case "com.amazonaws.ssooidc#SlowDownException":
            throw await de_SlowDownExceptionRes(parsedOutput, context);
        case "UnauthorizedClientException":
        case "com.amazonaws.ssooidc#UnauthorizedClientException":
            throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
        case "UnsupportedGrantTypeException":
        case "com.amazonaws.ssooidc#UnsupportedGrantTypeException":
            throw await de_UnsupportedGrantTypeExceptionRes(parsedOutput, context);
        case "InvalidRequestRegionException":
        case "com.amazonaws.ssooidc#InvalidRequestRegionException":
            throw await de_InvalidRequestRegionExceptionRes(parsedOutput, context);
        case "InvalidClientMetadataException":
        case "com.amazonaws.ssooidc#InvalidClientMetadataException":
            throw await de_InvalidClientMetadataExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const throwDefaultError = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.withBaseException)(_models_SSOOIDCServiceException__WEBPACK_IMPORTED_MODULE_2__.SSOOIDCServiceException);
const de_AccessDeniedExceptionRes = async (parsedOutput, context) => {
    const contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({});
    const data = parsedOutput.body;
    const doc = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(data, {
        error: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        error_description: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
    });
    Object.assign(contents, doc);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_3__.AccessDeniedException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, parsedOutput.body);
};
const de_AuthorizationPendingExceptionRes = async (parsedOutput, context) => {
    const contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({});
    const data = parsedOutput.body;
    const doc = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(data, {
        error: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        error_description: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
    });
    Object.assign(contents, doc);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_3__.AuthorizationPendingException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, parsedOutput.body);
};
const de_ExpiredTokenExceptionRes = async (parsedOutput, context) => {
    const contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({});
    const data = parsedOutput.body;
    const doc = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(data, {
        error: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        error_description: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
    });
    Object.assign(contents, doc);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_3__.ExpiredTokenException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, parsedOutput.body);
};
const de_InternalServerExceptionRes = async (parsedOutput, context) => {
    const contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({});
    const data = parsedOutput.body;
    const doc = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(data, {
        error: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        error_description: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
    });
    Object.assign(contents, doc);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_3__.InternalServerException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, parsedOutput.body);
};
const de_InvalidClientExceptionRes = async (parsedOutput, context) => {
    const contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({});
    const data = parsedOutput.body;
    const doc = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(data, {
        error: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        error_description: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
    });
    Object.assign(contents, doc);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_3__.InvalidClientException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, parsedOutput.body);
};
const de_InvalidClientMetadataExceptionRes = async (parsedOutput, context) => {
    const contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({});
    const data = parsedOutput.body;
    const doc = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(data, {
        error: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        error_description: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
    });
    Object.assign(contents, doc);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_3__.InvalidClientMetadataException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, parsedOutput.body);
};
const de_InvalidGrantExceptionRes = async (parsedOutput, context) => {
    const contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({});
    const data = parsedOutput.body;
    const doc = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(data, {
        error: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        error_description: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
    });
    Object.assign(contents, doc);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_3__.InvalidGrantException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, parsedOutput.body);
};
const de_InvalidRequestExceptionRes = async (parsedOutput, context) => {
    const contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({});
    const data = parsedOutput.body;
    const doc = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(data, {
        error: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        error_description: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
    });
    Object.assign(contents, doc);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_3__.InvalidRequestException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, parsedOutput.body);
};
const de_InvalidRequestRegionExceptionRes = async (parsedOutput, context) => {
    const contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({});
    const data = parsedOutput.body;
    const doc = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(data, {
        endpoint: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        error: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        error_description: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        region: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
    });
    Object.assign(contents, doc);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_3__.InvalidRequestRegionException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, parsedOutput.body);
};
const de_InvalidScopeExceptionRes = async (parsedOutput, context) => {
    const contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({});
    const data = parsedOutput.body;
    const doc = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(data, {
        error: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        error_description: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
    });
    Object.assign(contents, doc);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_3__.InvalidScopeException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, parsedOutput.body);
};
const de_SlowDownExceptionRes = async (parsedOutput, context) => {
    const contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({});
    const data = parsedOutput.body;
    const doc = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(data, {
        error: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        error_description: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
    });
    Object.assign(contents, doc);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_3__.SlowDownException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, parsedOutput.body);
};
const de_UnauthorizedClientExceptionRes = async (parsedOutput, context) => {
    const contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({});
    const data = parsedOutput.body;
    const doc = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(data, {
        error: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        error_description: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
    });
    Object.assign(contents, doc);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_3__.UnauthorizedClientException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, parsedOutput.body);
};
const de_UnsupportedGrantTypeExceptionRes = async (parsedOutput, context) => {
    const contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({});
    const data = parsedOutput.body;
    const doc = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(data, {
        error: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        error_description: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
    });
    Object.assign(contents, doc);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_3__.UnsupportedGrantTypeException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, parsedOutput.body);
};
const deserializeMetadata = (output) => ({
    httpStatusCode: output.statusCode,
    requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
    extendedRequestId: output.headers["x-amz-id-2"],
    cfId: output.headers["x-amz-cf-id"],
});
const collectBodyString = (streamBody, context) => (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.collectBody)(streamBody, context).then((body) => context.utf8Encoder(body));
const isSerializableHeaderValue = (value) => value !== undefined &&
    value !== null &&
    value !== "" &&
    (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
    (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);
const _ai = "aws_iam";
const parseBody = (streamBody, context) => collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
        return JSON.parse(encoded);
    }
    return {};
});
const parseErrorBody = async (errorBody, context) => {
    const value = await parseBody(errorBody, context);
    value.message = value.message ?? value.Message;
    return value;
};
const loadRestJsonErrorCode = (output, data) => {
    const findKey = (object, key) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());
    const sanitizeErrorCode = (rawValue) => {
        let cleanValue = rawValue;
        if (typeof cleanValue === "number") {
            cleanValue = cleanValue.toString();
        }
        if (cleanValue.indexOf(",") >= 0) {
            cleanValue = cleanValue.split(",")[0];
        }
        if (cleanValue.indexOf(":") >= 0) {
            cleanValue = cleanValue.split(":")[0];
        }
        if (cleanValue.indexOf("#") >= 0) {
            cleanValue = cleanValue.split("#")[1];
        }
        return cleanValue;
    };
    const headerKey = findKey(output.headers, "x-amzn-errortype");
    if (headerKey !== undefined) {
        return sanitizeErrorCode(output.headers[headerKey]);
    }
    if (data.code !== undefined) {
        return sanitizeErrorCode(data.code);
    }
    if (data["__type"] !== undefined) {
        return sanitizeErrorCode(data["__type"]);
    }
};


/***/ }),

/***/ "../../@aws-sdk/client-sso-oidc/dist-es/runtimeConfig.js":
/*!***************************************************************!*\
  !*** ../../@aws-sdk/client-sso-oidc/dist-es/runtimeConfig.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRuntimeConfig: () => (/* binding */ getRuntimeConfig)
/* harmony export */ });
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../package.json */ "../../@aws-sdk/client-sso-oidc/package.json");
/* harmony import */ var _credentialDefaultProvider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./credentialDefaultProvider */ "../../@aws-sdk/client-sso-oidc/dist-es/credentialDefaultProvider.js");
/* harmony import */ var _aws_sdk_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @aws-sdk/core */ "../../@aws-sdk/core/dist-es/client/emitWarningIfUnsupportedVersion.js");
/* harmony import */ var _aws_sdk_util_user_agent_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/util-user-agent-node */ "../../@aws-sdk/util-user-agent-node/dist-es/index.js");
/* harmony import */ var _smithy_config_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smithy/config-resolver */ "../../@smithy/config-resolver/dist-es/index.js");
/* harmony import */ var _smithy_hash_node__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @smithy/hash-node */ "../../@smithy/hash-node/dist-es/index.js");
/* harmony import */ var _smithy_middleware_retry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @smithy/middleware-retry */ "../../@smithy/middleware-retry/dist-es/index.js");
/* harmony import */ var _smithy_node_config_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @smithy/node-config-provider */ "../../@smithy/node-config-provider/dist-es/index.js");
/* harmony import */ var _smithy_node_http_handler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @smithy/node-http-handler */ "../../@smithy/node-http-handler/dist-es/index.js");
/* harmony import */ var _smithy_util_body_length_node__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @smithy/util-body-length-node */ "../../@smithy/util-body-length-node/dist-es/index.js");
/* harmony import */ var _smithy_util_retry__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @smithy/util-retry */ "../../@smithy/util-retry/dist-es/index.js");
/* harmony import */ var _runtimeConfig_shared__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./runtimeConfig.shared */ "../../@aws-sdk/client-sso-oidc/dist-es/runtimeConfig.shared.js");
/* harmony import */ var _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @smithy/smithy-client */ "../../@smithy/smithy-client/dist-es/index.js");
/* harmony import */ var _smithy_util_defaults_mode_node__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @smithy/util-defaults-mode-node */ "../../@smithy/util-defaults-mode-node/dist-es/index.js");















const getRuntimeConfig = (config) => {
    (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_8__.emitWarningIfUnsupportedVersion)(process.version);
    const defaultsMode = (0,_smithy_util_defaults_mode_node__WEBPACK_IMPORTED_MODULE_9__.resolveDefaultsModeConfig)(config);
    const defaultConfigProvider = () => defaultsMode().then(_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_8__.loadConfigsForDefaultMode);
    const clientSharedValues = (0,_runtimeConfig_shared__WEBPACK_IMPORTED_MODULE_10__.getRuntimeConfig)(config);
    (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_11__.emitWarningIfUnsupportedVersion)(process.version);
    return {
        ...clientSharedValues,
        ...config,
        runtime: "node",
        defaultsMode,
        bodyLengthChecker: config?.bodyLengthChecker ?? _smithy_util_body_length_node__WEBPACK_IMPORTED_MODULE_6__.calculateBodyLength,
        credentialDefaultProvider: config?.credentialDefaultProvider ?? _credentialDefaultProvider__WEBPACK_IMPORTED_MODULE_12__.defaultProvider,
        defaultUserAgentProvider: config?.defaultUserAgentProvider ??
            (0,_aws_sdk_util_user_agent_node__WEBPACK_IMPORTED_MODULE_0__.defaultUserAgent)({ serviceId: clientSharedValues.serviceId, clientVersion: _package_json__WEBPACK_IMPORTED_MODULE_13__.version }),
        maxAttempts: config?.maxAttempts ?? (0,_smithy_node_config_provider__WEBPACK_IMPORTED_MODULE_4__.loadConfig)(_smithy_middleware_retry__WEBPACK_IMPORTED_MODULE_3__.NODE_MAX_ATTEMPT_CONFIG_OPTIONS),
        region: config?.region ?? (0,_smithy_node_config_provider__WEBPACK_IMPORTED_MODULE_4__.loadConfig)(_smithy_config_resolver__WEBPACK_IMPORTED_MODULE_1__.NODE_REGION_CONFIG_OPTIONS, _smithy_config_resolver__WEBPACK_IMPORTED_MODULE_1__.NODE_REGION_CONFIG_FILE_OPTIONS),
        requestHandler: config?.requestHandler ?? new _smithy_node_http_handler__WEBPACK_IMPORTED_MODULE_5__.NodeHttpHandler(defaultConfigProvider),
        retryMode: config?.retryMode ??
            (0,_smithy_node_config_provider__WEBPACK_IMPORTED_MODULE_4__.loadConfig)({
                ..._smithy_middleware_retry__WEBPACK_IMPORTED_MODULE_3__.NODE_RETRY_MODE_CONFIG_OPTIONS,
                default: async () => (await defaultConfigProvider()).retryMode || _smithy_util_retry__WEBPACK_IMPORTED_MODULE_7__.DEFAULT_RETRY_MODE,
            }),
        sha256: config?.sha256 ?? _smithy_hash_node__WEBPACK_IMPORTED_MODULE_2__.Hash.bind(null, "sha256"),
        streamCollector: config?.streamCollector ?? _smithy_node_http_handler__WEBPACK_IMPORTED_MODULE_5__.streamCollector,
        useDualstackEndpoint: config?.useDualstackEndpoint ?? (0,_smithy_node_config_provider__WEBPACK_IMPORTED_MODULE_4__.loadConfig)(_smithy_config_resolver__WEBPACK_IMPORTED_MODULE_1__.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS),
        useFipsEndpoint: config?.useFipsEndpoint ?? (0,_smithy_node_config_provider__WEBPACK_IMPORTED_MODULE_4__.loadConfig)(_smithy_config_resolver__WEBPACK_IMPORTED_MODULE_1__.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS),
    };
};


/***/ }),

/***/ "../../@aws-sdk/client-sso-oidc/dist-es/runtimeConfig.shared.js":
/*!**********************************************************************!*\
  !*** ../../@aws-sdk/client-sso-oidc/dist-es/runtimeConfig.shared.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRuntimeConfig: () => (/* binding */ getRuntimeConfig)
/* harmony export */ });
/* harmony import */ var _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/smithy-client */ "../../@smithy/smithy-client/dist-es/index.js");
/* harmony import */ var _smithy_url_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smithy/url-parser */ "../../@smithy/url-parser/dist-es/index.js");
/* harmony import */ var _smithy_util_base64__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @smithy/util-base64 */ "../../@smithy/util-base64/dist-es/index.js");
/* harmony import */ var _smithy_util_utf8__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @smithy/util-utf8 */ "../../@smithy/util-utf8/dist-es/index.js");
/* harmony import */ var _endpoint_endpointResolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./endpoint/endpointResolver */ "../../@aws-sdk/client-sso-oidc/dist-es/endpoint/endpointResolver.js");





const getRuntimeConfig = (config) => {
    return {
        apiVersion: "2019-06-10",
        base64Decoder: config?.base64Decoder ?? _smithy_util_base64__WEBPACK_IMPORTED_MODULE_2__.fromBase64,
        base64Encoder: config?.base64Encoder ?? _smithy_util_base64__WEBPACK_IMPORTED_MODULE_2__.toBase64,
        disableHostPrefix: config?.disableHostPrefix ?? false,
        endpointProvider: config?.endpointProvider ?? _endpoint_endpointResolver__WEBPACK_IMPORTED_MODULE_4__.defaultEndpointResolver,
        extensions: config?.extensions ?? [],
        logger: config?.logger ?? new _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.NoOpLogger(),
        serviceId: config?.serviceId ?? "SSO OIDC",
        urlParser: config?.urlParser ?? _smithy_url_parser__WEBPACK_IMPORTED_MODULE_1__.parseUrl,
        utf8Decoder: config?.utf8Decoder ?? _smithy_util_utf8__WEBPACK_IMPORTED_MODULE_3__.fromUtf8,
        utf8Encoder: config?.utf8Encoder ?? _smithy_util_utf8__WEBPACK_IMPORTED_MODULE_3__.toUtf8,
    };
};


/***/ }),

/***/ "../../@aws-sdk/client-sso-oidc/dist-es/runtimeExtensions.js":
/*!*******************************************************************!*\
  !*** ../../@aws-sdk/client-sso-oidc/dist-es/runtimeExtensions.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resolveRuntimeExtensions: () => (/* binding */ resolveRuntimeExtensions)
/* harmony export */ });
/* harmony import */ var _aws_sdk_region_config_resolver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/region-config-resolver */ "../../@aws-sdk/region-config-resolver/dist-es/index.js");
/* harmony import */ var _smithy_protocol_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smithy/protocol-http */ "../../@smithy/protocol-http/dist-es/index.js");
/* harmony import */ var _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @smithy/smithy-client */ "../../@smithy/smithy-client/dist-es/index.js");



const asPartial = (t) => t;
const resolveRuntimeExtensions = (runtimeConfig, extensions) => {
    const extensionConfiguration = {
        ...asPartial((0,_aws_sdk_region_config_resolver__WEBPACK_IMPORTED_MODULE_0__.getAwsRegionExtensionConfiguration)(runtimeConfig)),
        ...asPartial((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_2__.getDefaultExtensionConfiguration)(runtimeConfig)),
        ...asPartial((0,_smithy_protocol_http__WEBPACK_IMPORTED_MODULE_1__.getHttpHandlerExtensionConfiguration)(runtimeConfig)),
    };
    extensions.forEach((extension) => extension.configure(extensionConfiguration));
    return {
        ...runtimeConfig,
        ...(0,_aws_sdk_region_config_resolver__WEBPACK_IMPORTED_MODULE_0__.resolveAwsRegionExtensionConfiguration)(extensionConfiguration),
        ...(0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_2__.resolveDefaultRuntimeConfig)(extensionConfiguration),
        ...(0,_smithy_protocol_http__WEBPACK_IMPORTED_MODULE_1__.resolveHttpHandlerRuntimeConfig)(extensionConfiguration),
    };
};


/***/ }),

/***/ "../../@aws-sdk/middleware-signing/dist-es/awsAuthConfiguration.js":
/*!*************************************************************************!*\
  !*** ../../@aws-sdk/middleware-signing/dist-es/awsAuthConfiguration.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resolveAwsAuthConfig: () => (/* binding */ resolveAwsAuthConfig),
/* harmony export */   resolveSigV4AuthConfig: () => (/* binding */ resolveSigV4AuthConfig)
/* harmony export */ });
/* harmony import */ var _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/property-provider */ "../../@smithy/property-provider/dist-es/index.js");
/* harmony import */ var _smithy_signature_v4__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smithy/signature-v4 */ "../../@smithy/signature-v4/dist-es/index.js");
/* harmony import */ var _smithy_util_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @smithy/util-middleware */ "../../@smithy/util-middleware/dist-es/index.js");



const CREDENTIAL_EXPIRE_WINDOW = 300000;
const resolveAwsAuthConfig = (input) => {
    const normalizedCreds = input.credentials
        ? normalizeCredentialProvider(input.credentials)
        : input.credentialDefaultProvider(Object.assign({}, input, {
            parentClientConfig: input,
        }));
    const { signingEscapePath = true, systemClockOffset = input.systemClockOffset || 0, sha256 } = input;
    let signer;
    if (input.signer) {
        signer = (0,_smithy_util_middleware__WEBPACK_IMPORTED_MODULE_2__.normalizeProvider)(input.signer);
    }
    else if (input.regionInfoProvider) {
        signer = () => (0,_smithy_util_middleware__WEBPACK_IMPORTED_MODULE_2__.normalizeProvider)(input.region)()
            .then(async (region) => [
            (await input.regionInfoProvider(region, {
                useFipsEndpoint: await input.useFipsEndpoint(),
                useDualstackEndpoint: await input.useDualstackEndpoint(),
            })) || {},
            region,
        ])
            .then(([regionInfo, region]) => {
            const { signingRegion, signingService } = regionInfo;
            input.signingRegion = input.signingRegion || signingRegion || region;
            input.signingName = input.signingName || signingService || input.serviceId;
            const params = {
                ...input,
                credentials: normalizedCreds,
                region: input.signingRegion,
                service: input.signingName,
                sha256,
                uriEscapePath: signingEscapePath,
            };
            const SignerCtor = input.signerConstructor || _smithy_signature_v4__WEBPACK_IMPORTED_MODULE_1__.SignatureV4;
            return new SignerCtor(params);
        });
    }
    else {
        signer = async (authScheme) => {
            authScheme = Object.assign({}, {
                name: "sigv4",
                signingName: input.signingName || input.defaultSigningName,
                signingRegion: await (0,_smithy_util_middleware__WEBPACK_IMPORTED_MODULE_2__.normalizeProvider)(input.region)(),
                properties: {},
            }, authScheme);
            const signingRegion = authScheme.signingRegion;
            const signingService = authScheme.signingName;
            input.signingRegion = input.signingRegion || signingRegion;
            input.signingName = input.signingName || signingService || input.serviceId;
            const params = {
                ...input,
                credentials: normalizedCreds,
                region: input.signingRegion,
                service: input.signingName,
                sha256,
                uriEscapePath: signingEscapePath,
            };
            const SignerCtor = input.signerConstructor || _smithy_signature_v4__WEBPACK_IMPORTED_MODULE_1__.SignatureV4;
            return new SignerCtor(params);
        };
    }
    return {
        ...input,
        systemClockOffset,
        signingEscapePath,
        credentials: normalizedCreds,
        signer,
    };
};
const resolveSigV4AuthConfig = (input) => {
    const normalizedCreds = input.credentials
        ? normalizeCredentialProvider(input.credentials)
        : input.credentialDefaultProvider(Object.assign({}, input, {
            parentClientConfig: input,
        }));
    const { signingEscapePath = true, systemClockOffset = input.systemClockOffset || 0, sha256 } = input;
    let signer;
    if (input.signer) {
        signer = (0,_smithy_util_middleware__WEBPACK_IMPORTED_MODULE_2__.normalizeProvider)(input.signer);
    }
    else {
        signer = (0,_smithy_util_middleware__WEBPACK_IMPORTED_MODULE_2__.normalizeProvider)(new _smithy_signature_v4__WEBPACK_IMPORTED_MODULE_1__.SignatureV4({
            credentials: normalizedCreds,
            region: input.region,
            service: input.signingName,
            sha256,
            uriEscapePath: signingEscapePath,
        }));
    }
    return {
        ...input,
        systemClockOffset,
        signingEscapePath,
        credentials: normalizedCreds,
        signer,
    };
};
const normalizeCredentialProvider = (credentials) => {
    if (typeof credentials === "function") {
        return (0,_smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__.memoize)(credentials, (credentials) => credentials.expiration !== undefined &&
            credentials.expiration.getTime() - Date.now() < CREDENTIAL_EXPIRE_WINDOW, (credentials) => credentials.expiration !== undefined);
    }
    return (0,_smithy_util_middleware__WEBPACK_IMPORTED_MODULE_2__.normalizeProvider)(credentials);
};


/***/ }),

/***/ "../../@aws-sdk/middleware-signing/dist-es/awsAuthMiddleware.js":
/*!**********************************************************************!*\
  !*** ../../@aws-sdk/middleware-signing/dist-es/awsAuthMiddleware.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   awsAuthMiddleware: () => (/* binding */ awsAuthMiddleware),
/* harmony export */   awsAuthMiddlewareOptions: () => (/* binding */ awsAuthMiddlewareOptions),
/* harmony export */   getAwsAuthPlugin: () => (/* binding */ getAwsAuthPlugin),
/* harmony export */   getSigV4AuthPlugin: () => (/* binding */ getSigV4AuthPlugin)
/* harmony export */ });
/* harmony import */ var _smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/protocol-http */ "../../@smithy/protocol-http/dist-es/index.js");
/* harmony import */ var _utils_getSkewCorrectedDate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/getSkewCorrectedDate */ "../../@aws-sdk/middleware-signing/dist-es/utils/getSkewCorrectedDate.js");
/* harmony import */ var _utils_getUpdatedSystemClockOffset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/getUpdatedSystemClockOffset */ "../../@aws-sdk/middleware-signing/dist-es/utils/getUpdatedSystemClockOffset.js");



const awsAuthMiddleware = (options) => (next, context) => async function (args) {
    if (!_smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__.HttpRequest.isInstance(args.request))
        return next(args);
    const authScheme = context.endpointV2?.properties?.authSchemes?.[0];
    const multiRegionOverride = authScheme?.name === "sigv4a" ? authScheme?.signingRegionSet?.join(",") : undefined;
    const signer = await options.signer(authScheme);
    let signedRequest;
    const signingOptions = {
        signingDate: (0,_utils_getSkewCorrectedDate__WEBPACK_IMPORTED_MODULE_1__.getSkewCorrectedDate)(options.systemClockOffset),
        signingRegion: multiRegionOverride || context["signing_region"],
        signingService: context["signing_service"],
    };
    if (context.s3ExpressIdentity) {
        const sigV4MultiRegion = signer;
        signedRequest = await sigV4MultiRegion.signWithCredentials(args.request, context.s3ExpressIdentity, signingOptions);
        if (signedRequest.headers["X-Amz-Security-Token"] || signedRequest.headers["x-amz-security-token"]) {
            throw new Error("X-Amz-Security-Token must not be set for s3-express requests.");
        }
    }
    else {
        signedRequest = await signer.sign(args.request, signingOptions);
    }
    const output = await next({
        ...args,
        request: signedRequest,
    }).catch((error) => {
        const serverTime = error.ServerTime ?? getDateHeader(error.$response);
        if (serverTime) {
            options.systemClockOffset = (0,_utils_getUpdatedSystemClockOffset__WEBPACK_IMPORTED_MODULE_2__.getUpdatedSystemClockOffset)(serverTime, options.systemClockOffset);
        }
        throw error;
    });
    const dateHeader = getDateHeader(output.response);
    if (dateHeader) {
        options.systemClockOffset = (0,_utils_getUpdatedSystemClockOffset__WEBPACK_IMPORTED_MODULE_2__.getUpdatedSystemClockOffset)(dateHeader, options.systemClockOffset);
    }
    return output;
};
const getDateHeader = (response) => _smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__.HttpResponse.isInstance(response) ? response.headers?.date ?? response.headers?.Date : undefined;
const awsAuthMiddlewareOptions = {
    name: "awsAuthMiddleware",
    tags: ["SIGNATURE", "AWSAUTH"],
    relation: "after",
    toMiddleware: "retryMiddleware",
    override: true,
};
const getAwsAuthPlugin = (options) => ({
    applyToStack: (clientStack) => {
        clientStack.addRelativeTo(awsAuthMiddleware(options), awsAuthMiddlewareOptions);
    },
});
const getSigV4AuthPlugin = getAwsAuthPlugin;


/***/ }),

/***/ "../../@aws-sdk/middleware-signing/dist-es/index.js":
/*!**********************************************************!*\
  !*** ../../@aws-sdk/middleware-signing/dist-es/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   awsAuthMiddleware: () => (/* reexport safe */ _awsAuthMiddleware__WEBPACK_IMPORTED_MODULE_1__.awsAuthMiddleware),
/* harmony export */   awsAuthMiddlewareOptions: () => (/* reexport safe */ _awsAuthMiddleware__WEBPACK_IMPORTED_MODULE_1__.awsAuthMiddlewareOptions),
/* harmony export */   getAwsAuthPlugin: () => (/* reexport safe */ _awsAuthMiddleware__WEBPACK_IMPORTED_MODULE_1__.getAwsAuthPlugin),
/* harmony export */   getSigV4AuthPlugin: () => (/* reexport safe */ _awsAuthMiddleware__WEBPACK_IMPORTED_MODULE_1__.getSigV4AuthPlugin),
/* harmony export */   resolveAwsAuthConfig: () => (/* reexport safe */ _awsAuthConfiguration__WEBPACK_IMPORTED_MODULE_0__.resolveAwsAuthConfig),
/* harmony export */   resolveSigV4AuthConfig: () => (/* reexport safe */ _awsAuthConfiguration__WEBPACK_IMPORTED_MODULE_0__.resolveSigV4AuthConfig)
/* harmony export */ });
/* harmony import */ var _awsAuthConfiguration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./awsAuthConfiguration */ "../../@aws-sdk/middleware-signing/dist-es/awsAuthConfiguration.js");
/* harmony import */ var _awsAuthMiddleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./awsAuthMiddleware */ "../../@aws-sdk/middleware-signing/dist-es/awsAuthMiddleware.js");




/***/ }),

/***/ "../../@aws-sdk/middleware-signing/dist-es/utils/getSkewCorrectedDate.js":
/*!*******************************************************************************!*\
  !*** ../../@aws-sdk/middleware-signing/dist-es/utils/getSkewCorrectedDate.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSkewCorrectedDate: () => (/* binding */ getSkewCorrectedDate)
/* harmony export */ });
const getSkewCorrectedDate = (systemClockOffset) => new Date(Date.now() + systemClockOffset);


/***/ }),

/***/ "../../@aws-sdk/middleware-signing/dist-es/utils/getUpdatedSystemClockOffset.js":
/*!**************************************************************************************!*\
  !*** ../../@aws-sdk/middleware-signing/dist-es/utils/getUpdatedSystemClockOffset.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getUpdatedSystemClockOffset: () => (/* binding */ getUpdatedSystemClockOffset)
/* harmony export */ });
/* harmony import */ var _isClockSkewed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isClockSkewed */ "../../@aws-sdk/middleware-signing/dist-es/utils/isClockSkewed.js");

const getUpdatedSystemClockOffset = (clockTime, currentSystemClockOffset) => {
    const clockTimeInMs = Date.parse(clockTime);
    if ((0,_isClockSkewed__WEBPACK_IMPORTED_MODULE_0__.isClockSkewed)(clockTimeInMs, currentSystemClockOffset)) {
        return clockTimeInMs - Date.now();
    }
    return currentSystemClockOffset;
};


/***/ }),

/***/ "../../@aws-sdk/middleware-signing/dist-es/utils/isClockSkewed.js":
/*!************************************************************************!*\
  !*** ../../@aws-sdk/middleware-signing/dist-es/utils/isClockSkewed.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isClockSkewed: () => (/* binding */ isClockSkewed)
/* harmony export */ });
/* harmony import */ var _getSkewCorrectedDate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getSkewCorrectedDate */ "../../@aws-sdk/middleware-signing/dist-es/utils/getSkewCorrectedDate.js");

const isClockSkewed = (clockTime, systemClockOffset) => Math.abs((0,_getSkewCorrectedDate__WEBPACK_IMPORTED_MODULE_0__.getSkewCorrectedDate)(systemClockOffset).getTime() - clockTime) >= 300000;


/***/ }),

/***/ "../../@aws-sdk/token-providers/dist-es/loadSsoOidc.js":
/*!*************************************************************!*\
  !*** ../../@aws-sdk/token-providers/dist-es/loadSsoOidc.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateTokenCommand: () => (/* reexport safe */ _aws_sdk_client_sso_oidc__WEBPACK_IMPORTED_MODULE_0__.CreateTokenCommand),
/* harmony export */   SSOOIDCClient: () => (/* reexport safe */ _aws_sdk_client_sso_oidc__WEBPACK_IMPORTED_MODULE_1__.SSOOIDCClient)
/* harmony export */ });
/* harmony import */ var _aws_sdk_client_sso_oidc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/client-sso-oidc */ "../../@aws-sdk/client-sso-oidc/dist-es/commands/CreateTokenCommand.js");
/* harmony import */ var _aws_sdk_client_sso_oidc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-sdk/client-sso-oidc */ "../../@aws-sdk/client-sso-oidc/dist-es/SSOOIDCClient.js");




/***/ }),

/***/ "../../@aws-sdk/client-sso-oidc/package.json":
/*!***************************************************!*\
  !*** ../../@aws-sdk/client-sso-oidc/package.json ***!
  \***************************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"name":"@aws-sdk/client-sso-oidc","description":"AWS SDK for JavaScript Sso Oidc Client for Node.js, Browser and React Native","version":"3.511.0","scripts":{"build":"concurrently \'yarn:build:cjs\' \'yarn:build:es\' \'yarn:build:types\'","build:cjs":"node ../../scripts/compilation/inline client-sso-oidc","build:es":"tsc -p tsconfig.es.json","build:include:deps":"lerna run --scope $npm_package_name --include-dependencies build","build:types":"tsc -p tsconfig.types.json","build:types:downlevel":"downlevel-dts dist-types dist-types/ts3.4","clean":"rimraf ./dist-* && rimraf *.tsbuildinfo","extract:docs":"api-extractor run --local","generate:client":"node ../../scripts/generate-clients/single-service --solo sso-oidc"},"main":"./dist-cjs/index.js","types":"./dist-types/index.d.ts","module":"./dist-es/index.js","sideEffects":false,"dependencies":{"@aws-crypto/sha256-browser":"3.0.0","@aws-crypto/sha256-js":"3.0.0","@aws-sdk/client-sts":"3.511.0","@aws-sdk/core":"3.511.0","@aws-sdk/middleware-host-header":"3.511.0","@aws-sdk/middleware-logger":"3.511.0","@aws-sdk/middleware-recursion-detection":"3.511.0","@aws-sdk/middleware-signing":"3.511.0","@aws-sdk/middleware-user-agent":"3.511.0","@aws-sdk/region-config-resolver":"3.511.0","@aws-sdk/types":"3.511.0","@aws-sdk/util-endpoints":"3.511.0","@aws-sdk/util-user-agent-browser":"3.511.0","@aws-sdk/util-user-agent-node":"3.511.0","@smithy/config-resolver":"^2.1.1","@smithy/core":"^1.3.1","@smithy/fetch-http-handler":"^2.4.1","@smithy/hash-node":"^2.1.1","@smithy/invalid-dependency":"^2.1.1","@smithy/middleware-content-length":"^2.1.1","@smithy/middleware-endpoint":"^2.4.1","@smithy/middleware-retry":"^2.1.1","@smithy/middleware-serde":"^2.1.1","@smithy/middleware-stack":"^2.1.1","@smithy/node-config-provider":"^2.2.1","@smithy/node-http-handler":"^2.3.1","@smithy/protocol-http":"^3.1.1","@smithy/smithy-client":"^2.3.1","@smithy/types":"^2.9.1","@smithy/url-parser":"^2.1.1","@smithy/util-base64":"^2.1.1","@smithy/util-body-length-browser":"^2.1.1","@smithy/util-body-length-node":"^2.2.1","@smithy/util-defaults-mode-browser":"^2.1.1","@smithy/util-defaults-mode-node":"^2.1.1","@smithy/util-endpoints":"^1.1.1","@smithy/util-retry":"^2.1.1","@smithy/util-utf8":"^2.1.1","tslib":"^2.5.0"},"devDependencies":{"@smithy/service-client-documentation-generator":"^2.1.1","@tsconfig/node14":"1.0.3","@types/node":"^14.14.31","concurrently":"7.0.0","downlevel-dts":"0.10.1","rimraf":"3.0.2","typescript":"~4.9.5"},"engines":{"node":">=14.0.0"},"typesVersions":{"<4.0":{"dist-types/*":["dist-types/ts3.4/*"]}},"files":["dist-*/**"],"author":{"name":"AWS SDK for JavaScript Team","url":"https://aws.amazon.com/javascript/"},"license":"Apache-2.0","peerDependencies":{"@aws-sdk/credential-provider-node":"^3.511.0"},"browser":{"./dist-es/runtimeConfig":"./dist-es/runtimeConfig.browser"},"react-native":{"./dist-es/runtimeConfig":"./dist-es/runtimeConfig.native"},"homepage":"https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-sso-oidc","repository":{"type":"git","url":"https://github.com/aws/aws-sdk-js-v3.git","directory":"clients/client-sso-oidc"}}');

/***/ })

};
;
//# sourceMappingURL=_aws-sdk_token-providers_dist-es_loadSsoOidc_js.js.map