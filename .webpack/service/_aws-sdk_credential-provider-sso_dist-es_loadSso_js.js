"use strict";
exports.id = "_aws-sdk_credential-provider-sso_dist-es_loadSso_js";
exports.ids = ["_aws-sdk_credential-provider-sso_dist-es_loadSso_js"];
exports.modules = {

/***/ "../../@aws-sdk/client-sso/dist-es/SSOClient.js":
/*!******************************************************!*\
  !*** ../../@aws-sdk/client-sso/dist-es/SSOClient.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SSOClient: () => (/* binding */ SSOClient),
/* harmony export */   __Client: () => (/* reexport safe */ _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_8__.Client)
/* harmony export */ });
/* harmony import */ var _aws_sdk_middleware_host_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/middleware-host-header */ "../../@aws-sdk/middleware-host-header/dist-es/index.js");
/* harmony import */ var _aws_sdk_middleware_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-sdk/middleware-logger */ "../../@aws-sdk/middleware-logger/dist-es/index.js");
/* harmony import */ var _aws_sdk_middleware_recursion_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aws-sdk/middleware-recursion-detection */ "../../@aws-sdk/middleware-recursion-detection/dist-es/index.js");
/* harmony import */ var _aws_sdk_middleware_user_agent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aws-sdk/middleware-user-agent */ "../../@aws-sdk/middleware-user-agent/dist-es/index.js");
/* harmony import */ var _smithy_config_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @smithy/config-resolver */ "../../@smithy/config-resolver/dist-es/index.js");
/* harmony import */ var _smithy_middleware_content_length__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @smithy/middleware-content-length */ "../../@smithy/middleware-content-length/dist-es/index.js");
/* harmony import */ var _smithy_middleware_endpoint__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @smithy/middleware-endpoint */ "../../@smithy/middleware-endpoint/dist-es/index.js");
/* harmony import */ var _smithy_middleware_retry__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @smithy/middleware-retry */ "../../@smithy/middleware-retry/dist-es/index.js");
/* harmony import */ var _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @smithy/smithy-client */ "../../@smithy/smithy-client/dist-es/index.js");
/* harmony import */ var _endpoint_EndpointParameters__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./endpoint/EndpointParameters */ "../../@aws-sdk/client-sso/dist-es/endpoint/EndpointParameters.js");
/* harmony import */ var _runtimeConfig__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./runtimeConfig */ "../../@aws-sdk/client-sso/dist-es/runtimeConfig.js");
/* harmony import */ var _runtimeExtensions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./runtimeExtensions */ "../../@aws-sdk/client-sso/dist-es/runtimeExtensions.js");













class SSOClient extends _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_8__.Client {
    constructor(...[configuration]) {
        const _config_0 = (0,_runtimeConfig__WEBPACK_IMPORTED_MODULE_9__.getRuntimeConfig)(configuration || {});
        const _config_1 = (0,_endpoint_EndpointParameters__WEBPACK_IMPORTED_MODULE_10__.resolveClientEndpointParameters)(_config_0);
        const _config_2 = (0,_smithy_config_resolver__WEBPACK_IMPORTED_MODULE_4__.resolveRegionConfig)(_config_1);
        const _config_3 = (0,_smithy_middleware_endpoint__WEBPACK_IMPORTED_MODULE_6__.resolveEndpointConfig)(_config_2);
        const _config_4 = (0,_smithy_middleware_retry__WEBPACK_IMPORTED_MODULE_7__.resolveRetryConfig)(_config_3);
        const _config_5 = (0,_aws_sdk_middleware_host_header__WEBPACK_IMPORTED_MODULE_0__.resolveHostHeaderConfig)(_config_4);
        const _config_6 = (0,_aws_sdk_middleware_user_agent__WEBPACK_IMPORTED_MODULE_3__.resolveUserAgentConfig)(_config_5);
        const _config_7 = (0,_runtimeExtensions__WEBPACK_IMPORTED_MODULE_11__.resolveRuntimeExtensions)(_config_6, configuration?.extensions || []);
        super(_config_7);
        this.config = _config_7;
        this.middlewareStack.use((0,_smithy_middleware_retry__WEBPACK_IMPORTED_MODULE_7__.getRetryPlugin)(this.config));
        this.middlewareStack.use((0,_smithy_middleware_content_length__WEBPACK_IMPORTED_MODULE_5__.getContentLengthPlugin)(this.config));
        this.middlewareStack.use((0,_aws_sdk_middleware_host_header__WEBPACK_IMPORTED_MODULE_0__.getHostHeaderPlugin)(this.config));
        this.middlewareStack.use((0,_aws_sdk_middleware_logger__WEBPACK_IMPORTED_MODULE_1__.getLoggerPlugin)(this.config));
        this.middlewareStack.use((0,_aws_sdk_middleware_recursion_detection__WEBPACK_IMPORTED_MODULE_2__.getRecursionDetectionPlugin)(this.config));
        this.middlewareStack.use((0,_aws_sdk_middleware_user_agent__WEBPACK_IMPORTED_MODULE_3__.getUserAgentPlugin)(this.config));
    }
    destroy() {
        super.destroy();
    }
}


/***/ }),

/***/ "../../@aws-sdk/client-sso/dist-es/commands/GetRoleCredentialsCommand.js":
/*!*******************************************************************************!*\
  !*** ../../@aws-sdk/client-sso/dist-es/commands/GetRoleCredentialsCommand.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $Command: () => (/* reexport safe */ _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_2__.Command),
/* harmony export */   GetRoleCredentialsCommand: () => (/* binding */ GetRoleCredentialsCommand)
/* harmony export */ });
/* harmony import */ var _smithy_middleware_endpoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/middleware-endpoint */ "../../@smithy/middleware-endpoint/dist-es/index.js");
/* harmony import */ var _smithy_middleware_serde__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smithy/middleware-serde */ "../../@smithy/middleware-serde/dist-es/index.js");
/* harmony import */ var _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @smithy/smithy-client */ "../../@smithy/smithy-client/dist-es/index.js");
/* harmony import */ var _endpoint_EndpointParameters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../endpoint/EndpointParameters */ "../../@aws-sdk/client-sso/dist-es/endpoint/EndpointParameters.js");
/* harmony import */ var _models_models_0__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/models_0 */ "../../@aws-sdk/client-sso/dist-es/models/models_0.js");
/* harmony import */ var _protocols_Aws_restJson1__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../protocols/Aws_restJson1 */ "../../@aws-sdk/client-sso/dist-es/protocols/Aws_restJson1.js");







class GetRoleCredentialsCommand extends _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_2__.Command
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
    .s("SWBPortalService", "GetRoleCredentials", {})
    .n("SSOClient", "GetRoleCredentialsCommand")
    .f(_models_models_0__WEBPACK_IMPORTED_MODULE_4__.GetRoleCredentialsRequestFilterSensitiveLog, _models_models_0__WEBPACK_IMPORTED_MODULE_4__.GetRoleCredentialsResponseFilterSensitiveLog)
    .ser(_protocols_Aws_restJson1__WEBPACK_IMPORTED_MODULE_5__.se_GetRoleCredentialsCommand)
    .de(_protocols_Aws_restJson1__WEBPACK_IMPORTED_MODULE_5__.de_GetRoleCredentialsCommand)
    .build() {
}


/***/ }),

/***/ "../../@aws-sdk/client-sso/dist-es/endpoint/EndpointParameters.js":
/*!************************************************************************!*\
  !*** ../../@aws-sdk/client-sso/dist-es/endpoint/EndpointParameters.js ***!
  \************************************************************************/
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
        defaultSigningName: "awsssoportal",
    };
};
const commonParams = {
    UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
    Endpoint: { type: "builtInParams", name: "endpoint" },
    Region: { type: "builtInParams", name: "region" },
    UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
};


/***/ }),

/***/ "../../@aws-sdk/client-sso/dist-es/endpoint/endpointResolver.js":
/*!**********************************************************************!*\
  !*** ../../@aws-sdk/client-sso/dist-es/endpoint/endpointResolver.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultEndpointResolver: () => (/* binding */ defaultEndpointResolver)
/* harmony export */ });
/* harmony import */ var _smithy_util_endpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/util-endpoints */ "../../@smithy/util-endpoints/dist-es/index.js");
/* harmony import */ var _ruleset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ruleset */ "../../@aws-sdk/client-sso/dist-es/endpoint/ruleset.js");


const defaultEndpointResolver = (endpointParams, context = {}) => {
    return (0,_smithy_util_endpoints__WEBPACK_IMPORTED_MODULE_0__.resolveEndpoint)(_ruleset__WEBPACK_IMPORTED_MODULE_1__.ruleSet, {
        endpointParams: endpointParams,
        logger: context.logger,
    });
};


/***/ }),

/***/ "../../@aws-sdk/client-sso/dist-es/endpoint/ruleset.js":
/*!*************************************************************!*\
  !*** ../../@aws-sdk/client-sso/dist-es/endpoint/ruleset.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ruleSet: () => (/* binding */ ruleSet)
/* harmony export */ });
const u = "required", v = "fn", w = "argv", x = "ref";
const a = true, b = "isSet", c = "booleanEquals", d = "error", e = "endpoint", f = "tree", g = "PartitionResult", h = "getAttr", i = { [u]: false, "type": "String" }, j = { [u]: true, "default": false, "type": "Boolean" }, k = { [x]: "Endpoint" }, l = { [v]: c, [w]: [{ [x]: "UseFIPS" }, true] }, m = { [v]: c, [w]: [{ [x]: "UseDualStack" }, true] }, n = {}, o = { [v]: h, [w]: [{ [x]: g }, "supportsFIPS"] }, p = { [x]: g }, q = { [v]: c, [w]: [true, { [v]: h, [w]: [p, "supportsDualStack"] }] }, r = [l], s = [m], t = [{ [x]: "Region" }];
const _data = { version: "1.0", parameters: { Region: i, UseDualStack: j, UseFIPS: j, Endpoint: i }, rules: [{ conditions: [{ [v]: b, [w]: [k] }], rules: [{ conditions: r, error: "Invalid Configuration: FIPS and custom endpoint are not supported", type: d }, { conditions: s, error: "Invalid Configuration: Dualstack and custom endpoint are not supported", type: d }, { endpoint: { url: k, properties: n, headers: n }, type: e }], type: f }, { conditions: [{ [v]: b, [w]: t }], rules: [{ conditions: [{ [v]: "aws.partition", [w]: t, assign: g }], rules: [{ conditions: [l, m], rules: [{ conditions: [{ [v]: c, [w]: [a, o] }, q], rules: [{ endpoint: { url: "https://portal.sso-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: n, headers: n }, type: e }], type: f }, { error: "FIPS and DualStack are enabled, but this partition does not support one or both", type: d }], type: f }, { conditions: r, rules: [{ conditions: [{ [v]: c, [w]: [o, a] }], rules: [{ conditions: [{ [v]: "stringEquals", [w]: [{ [v]: h, [w]: [p, "name"] }, "aws-us-gov"] }], endpoint: { url: "https://portal.sso.{Region}.amazonaws.com", properties: n, headers: n }, type: e }, { endpoint: { url: "https://portal.sso-fips.{Region}.{PartitionResult#dnsSuffix}", properties: n, headers: n }, type: e }], type: f }, { error: "FIPS is enabled but this partition does not support FIPS", type: d }], type: f }, { conditions: s, rules: [{ conditions: [q], rules: [{ endpoint: { url: "https://portal.sso.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: n, headers: n }, type: e }], type: f }, { error: "DualStack is enabled but this partition does not support DualStack", type: d }], type: f }, { endpoint: { url: "https://portal.sso.{Region}.{PartitionResult#dnsSuffix}", properties: n, headers: n }, type: e }], type: f }], type: f }, { error: "Invalid Configuration: Missing Region", type: d }] };
const ruleSet = _data;


/***/ }),

/***/ "../../@aws-sdk/client-sso/dist-es/models/SSOServiceException.js":
/*!***********************************************************************!*\
  !*** ../../@aws-sdk/client-sso/dist-es/models/SSOServiceException.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SSOServiceException: () => (/* binding */ SSOServiceException),
/* harmony export */   __ServiceException: () => (/* reexport safe */ _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.ServiceException)
/* harmony export */ });
/* harmony import */ var _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/smithy-client */ "../../@smithy/smithy-client/dist-es/index.js");


class SSOServiceException extends _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.ServiceException {
    constructor(options) {
        super(options);
        Object.setPrototypeOf(this, SSOServiceException.prototype);
    }
}


/***/ }),

/***/ "../../@aws-sdk/client-sso/dist-es/models/models_0.js":
/*!************************************************************!*\
  !*** ../../@aws-sdk/client-sso/dist-es/models/models_0.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GetRoleCredentialsRequestFilterSensitiveLog: () => (/* binding */ GetRoleCredentialsRequestFilterSensitiveLog),
/* harmony export */   GetRoleCredentialsResponseFilterSensitiveLog: () => (/* binding */ GetRoleCredentialsResponseFilterSensitiveLog),
/* harmony export */   InvalidRequestException: () => (/* binding */ InvalidRequestException),
/* harmony export */   ListAccountRolesRequestFilterSensitiveLog: () => (/* binding */ ListAccountRolesRequestFilterSensitiveLog),
/* harmony export */   ListAccountsRequestFilterSensitiveLog: () => (/* binding */ ListAccountsRequestFilterSensitiveLog),
/* harmony export */   LogoutRequestFilterSensitiveLog: () => (/* binding */ LogoutRequestFilterSensitiveLog),
/* harmony export */   ResourceNotFoundException: () => (/* binding */ ResourceNotFoundException),
/* harmony export */   RoleCredentialsFilterSensitiveLog: () => (/* binding */ RoleCredentialsFilterSensitiveLog),
/* harmony export */   TooManyRequestsException: () => (/* binding */ TooManyRequestsException),
/* harmony export */   UnauthorizedException: () => (/* binding */ UnauthorizedException)
/* harmony export */ });
/* harmony import */ var _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/smithy-client */ "../../@smithy/smithy-client/dist-es/index.js");
/* harmony import */ var _SSOServiceException__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SSOServiceException */ "../../@aws-sdk/client-sso/dist-es/models/SSOServiceException.js");


class InvalidRequestException extends _SSOServiceException__WEBPACK_IMPORTED_MODULE_1__.SSOServiceException {
    constructor(opts) {
        super({
            name: "InvalidRequestException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidRequestException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidRequestException.prototype);
    }
}
class ResourceNotFoundException extends _SSOServiceException__WEBPACK_IMPORTED_MODULE_1__.SSOServiceException {
    constructor(opts) {
        super({
            name: "ResourceNotFoundException",
            $fault: "client",
            ...opts,
        });
        this.name = "ResourceNotFoundException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    }
}
class TooManyRequestsException extends _SSOServiceException__WEBPACK_IMPORTED_MODULE_1__.SSOServiceException {
    constructor(opts) {
        super({
            name: "TooManyRequestsException",
            $fault: "client",
            ...opts,
        });
        this.name = "TooManyRequestsException";
        this.$fault = "client";
        Object.setPrototypeOf(this, TooManyRequestsException.prototype);
    }
}
class UnauthorizedException extends _SSOServiceException__WEBPACK_IMPORTED_MODULE_1__.SSOServiceException {
    constructor(opts) {
        super({
            name: "UnauthorizedException",
            $fault: "client",
            ...opts,
        });
        this.name = "UnauthorizedException";
        this.$fault = "client";
        Object.setPrototypeOf(this, UnauthorizedException.prototype);
    }
}
const GetRoleCredentialsRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.accessToken && { accessToken: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
});
const RoleCredentialsFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.secretAccessKey && { secretAccessKey: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
    ...(obj.sessionToken && { sessionToken: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
});
const GetRoleCredentialsResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.roleCredentials && { roleCredentials: RoleCredentialsFilterSensitiveLog(obj.roleCredentials) }),
});
const ListAccountRolesRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.accessToken && { accessToken: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
});
const ListAccountsRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.accessToken && { accessToken: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
});
const LogoutRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.accessToken && { accessToken: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
});


/***/ }),

/***/ "../../@aws-sdk/client-sso/dist-es/protocols/Aws_restJson1.js":
/*!********************************************************************!*\
  !*** ../../@aws-sdk/client-sso/dist-es/protocols/Aws_restJson1.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   de_GetRoleCredentialsCommand: () => (/* binding */ de_GetRoleCredentialsCommand),
/* harmony export */   de_ListAccountRolesCommand: () => (/* binding */ de_ListAccountRolesCommand),
/* harmony export */   de_ListAccountsCommand: () => (/* binding */ de_ListAccountsCommand),
/* harmony export */   de_LogoutCommand: () => (/* binding */ de_LogoutCommand),
/* harmony export */   se_GetRoleCredentialsCommand: () => (/* binding */ se_GetRoleCredentialsCommand),
/* harmony export */   se_ListAccountRolesCommand: () => (/* binding */ se_ListAccountRolesCommand),
/* harmony export */   se_ListAccountsCommand: () => (/* binding */ se_ListAccountsCommand),
/* harmony export */   se_LogoutCommand: () => (/* binding */ se_LogoutCommand)
/* harmony export */ });
/* harmony import */ var _smithy_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/core */ "../../@smithy/core/dist-es/index.js");
/* harmony import */ var _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smithy/smithy-client */ "../../@smithy/smithy-client/dist-es/index.js");
/* harmony import */ var _models_models_0__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/models_0 */ "../../@aws-sdk/client-sso/dist-es/models/models_0.js");
/* harmony import */ var _models_SSOServiceException__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/SSOServiceException */ "../../@aws-sdk/client-sso/dist-es/models/SSOServiceException.js");




const se_GetRoleCredentialsCommand = async (input, context) => {
    const b = (0,_smithy_core__WEBPACK_IMPORTED_MODULE_0__.requestBuilder)(input, context);
    const headers = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({}, isSerializableHeaderValue, {
        [_xasbt]: input[_aT],
    });
    b.bp("/federation/credentials");
    const query = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({
        [_rn]: [, (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectNonNull)(input[_rN], `roleName`)],
        [_ai]: [, (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectNonNull)(input[_aI], `accountId`)],
    });
    let body;
    b.m("GET").h(headers).q(query).b(body);
    return b.build();
};
const se_ListAccountRolesCommand = async (input, context) => {
    const b = (0,_smithy_core__WEBPACK_IMPORTED_MODULE_0__.requestBuilder)(input, context);
    const headers = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({}, isSerializableHeaderValue, {
        [_xasbt]: input[_aT],
    });
    b.bp("/assignment/roles");
    const query = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({
        [_nt]: [, input[_nT]],
        [_mr]: [() => input.maxResults !== void 0, () => input[_mR].toString()],
        [_ai]: [, (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectNonNull)(input[_aI], `accountId`)],
    });
    let body;
    b.m("GET").h(headers).q(query).b(body);
    return b.build();
};
const se_ListAccountsCommand = async (input, context) => {
    const b = (0,_smithy_core__WEBPACK_IMPORTED_MODULE_0__.requestBuilder)(input, context);
    const headers = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({}, isSerializableHeaderValue, {
        [_xasbt]: input[_aT],
    });
    b.bp("/assignment/accounts");
    const query = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({
        [_nt]: [, input[_nT]],
        [_mr]: [() => input.maxResults !== void 0, () => input[_mR].toString()],
    });
    let body;
    b.m("GET").h(headers).q(query).b(body);
    return b.build();
};
const se_LogoutCommand = async (input, context) => {
    const b = (0,_smithy_core__WEBPACK_IMPORTED_MODULE_0__.requestBuilder)(input, context);
    const headers = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({}, isSerializableHeaderValue, {
        [_xasbt]: input[_aT],
    });
    b.bp("/logout");
    let body;
    b.m("POST").h(headers).b(body);
    return b.build();
};
const de_GetRoleCredentialsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectNonNull)((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectObject)(await parseBody(output.body, context)), "body");
    const doc = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(data, {
        roleCredentials: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json,
    });
    Object.assign(contents, doc);
    return contents;
};
const de_ListAccountRolesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectNonNull)((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectObject)(await parseBody(output.body, context)), "body");
    const doc = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(data, {
        nextToken: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        roleList: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json,
    });
    Object.assign(contents, doc);
    return contents;
};
const de_ListAccountsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectNonNull)((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectObject)(await parseBody(output.body, context)), "body");
    const doc = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(data, {
        accountList: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json,
        nextToken: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
const de_LogoutCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({
        $metadata: deserializeMetadata(output),
    });
    await (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.collectBody)(output.body, context);
    return contents;
};
const de_CommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidRequestException":
        case "com.amazonaws.sso#InvalidRequestException":
            throw await de_InvalidRequestExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.sso#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.sso#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        case "UnauthorizedException":
        case "com.amazonaws.sso#UnauthorizedException":
            throw await de_UnauthorizedExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const throwDefaultError = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.withBaseException)(_models_SSOServiceException__WEBPACK_IMPORTED_MODULE_2__.SSOServiceException);
const de_InvalidRequestExceptionRes = async (parsedOutput, context) => {
    const contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({});
    const data = parsedOutput.body;
    const doc = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(data, {
        message: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
    });
    Object.assign(contents, doc);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_3__.InvalidRequestException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, parsedOutput.body);
};
const de_ResourceNotFoundExceptionRes = async (parsedOutput, context) => {
    const contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({});
    const data = parsedOutput.body;
    const doc = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(data, {
        message: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
    });
    Object.assign(contents, doc);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_3__.ResourceNotFoundException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, parsedOutput.body);
};
const de_TooManyRequestsExceptionRes = async (parsedOutput, context) => {
    const contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({});
    const data = parsedOutput.body;
    const doc = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(data, {
        message: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
    });
    Object.assign(contents, doc);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_3__.TooManyRequestsException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, parsedOutput.body);
};
const de_UnauthorizedExceptionRes = async (parsedOutput, context) => {
    const contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({});
    const data = parsedOutput.body;
    const doc = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(data, {
        message: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
    });
    Object.assign(contents, doc);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_3__.UnauthorizedException({
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
const _aI = "accountId";
const _aT = "accessToken";
const _ai = "account_id";
const _mR = "maxResults";
const _mr = "max_result";
const _nT = "nextToken";
const _nt = "next_token";
const _rN = "roleName";
const _rn = "role_name";
const _xasbt = "x-amz-sso_bearer_token";
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

/***/ "../../@aws-sdk/client-sso/dist-es/runtimeConfig.js":
/*!**********************************************************!*\
  !*** ../../@aws-sdk/client-sso/dist-es/runtimeConfig.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRuntimeConfig: () => (/* binding */ getRuntimeConfig)
/* harmony export */ });
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../package.json */ "../../@aws-sdk/client-sso/package.json");
/* harmony import */ var _aws_sdk_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @aws-sdk/core */ "../../@aws-sdk/core/dist-es/client/emitWarningIfUnsupportedVersion.js");
/* harmony import */ var _aws_sdk_util_user_agent_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/util-user-agent-node */ "../../@aws-sdk/util-user-agent-node/dist-es/index.js");
/* harmony import */ var _smithy_config_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smithy/config-resolver */ "../../@smithy/config-resolver/dist-es/index.js");
/* harmony import */ var _smithy_hash_node__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @smithy/hash-node */ "../../@smithy/hash-node/dist-es/index.js");
/* harmony import */ var _smithy_middleware_retry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @smithy/middleware-retry */ "../../@smithy/middleware-retry/dist-es/index.js");
/* harmony import */ var _smithy_node_config_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @smithy/node-config-provider */ "../../@smithy/node-config-provider/dist-es/index.js");
/* harmony import */ var _smithy_node_http_handler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @smithy/node-http-handler */ "../../@smithy/node-http-handler/dist-es/index.js");
/* harmony import */ var _smithy_util_body_length_node__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @smithy/util-body-length-node */ "../../@smithy/util-body-length-node/dist-es/index.js");
/* harmony import */ var _smithy_util_retry__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @smithy/util-retry */ "../../@smithy/util-retry/dist-es/index.js");
/* harmony import */ var _runtimeConfig_shared__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./runtimeConfig.shared */ "../../@aws-sdk/client-sso/dist-es/runtimeConfig.shared.js");
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
        defaultUserAgentProvider: config?.defaultUserAgentProvider ??
            (0,_aws_sdk_util_user_agent_node__WEBPACK_IMPORTED_MODULE_0__.defaultUserAgent)({ serviceId: clientSharedValues.serviceId, clientVersion: _package_json__WEBPACK_IMPORTED_MODULE_12__.version }),
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

/***/ "../../@aws-sdk/client-sso/dist-es/runtimeConfig.shared.js":
/*!*****************************************************************!*\
  !*** ../../@aws-sdk/client-sso/dist-es/runtimeConfig.shared.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRuntimeConfig: () => (/* binding */ getRuntimeConfig)
/* harmony export */ });
/* harmony import */ var _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/smithy-client */ "../../@smithy/smithy-client/dist-es/index.js");
/* harmony import */ var _smithy_url_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smithy/url-parser */ "../../@smithy/url-parser/dist-es/index.js");
/* harmony import */ var _smithy_util_base64__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @smithy/util-base64 */ "../../@smithy/util-base64/dist-es/index.js");
/* harmony import */ var _smithy_util_utf8__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @smithy/util-utf8 */ "../../@smithy/util-utf8/dist-es/index.js");
/* harmony import */ var _endpoint_endpointResolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./endpoint/endpointResolver */ "../../@aws-sdk/client-sso/dist-es/endpoint/endpointResolver.js");





const getRuntimeConfig = (config) => {
    return {
        apiVersion: "2019-06-10",
        base64Decoder: config?.base64Decoder ?? _smithy_util_base64__WEBPACK_IMPORTED_MODULE_2__.fromBase64,
        base64Encoder: config?.base64Encoder ?? _smithy_util_base64__WEBPACK_IMPORTED_MODULE_2__.toBase64,
        disableHostPrefix: config?.disableHostPrefix ?? false,
        endpointProvider: config?.endpointProvider ?? _endpoint_endpointResolver__WEBPACK_IMPORTED_MODULE_4__.defaultEndpointResolver,
        extensions: config?.extensions ?? [],
        logger: config?.logger ?? new _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.NoOpLogger(),
        serviceId: config?.serviceId ?? "SSO",
        urlParser: config?.urlParser ?? _smithy_url_parser__WEBPACK_IMPORTED_MODULE_1__.parseUrl,
        utf8Decoder: config?.utf8Decoder ?? _smithy_util_utf8__WEBPACK_IMPORTED_MODULE_3__.fromUtf8,
        utf8Encoder: config?.utf8Encoder ?? _smithy_util_utf8__WEBPACK_IMPORTED_MODULE_3__.toUtf8,
    };
};


/***/ }),

/***/ "../../@aws-sdk/client-sso/dist-es/runtimeExtensions.js":
/*!**************************************************************!*\
  !*** ../../@aws-sdk/client-sso/dist-es/runtimeExtensions.js ***!
  \**************************************************************/
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

/***/ "../../@aws-sdk/credential-provider-sso/dist-es/loadSso.js":
/*!*****************************************************************!*\
  !*** ../../@aws-sdk/credential-provider-sso/dist-es/loadSso.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GetRoleCredentialsCommand: () => (/* reexport safe */ _aws_sdk_client_sso__WEBPACK_IMPORTED_MODULE_0__.GetRoleCredentialsCommand),
/* harmony export */   SSOClient: () => (/* reexport safe */ _aws_sdk_client_sso__WEBPACK_IMPORTED_MODULE_1__.SSOClient)
/* harmony export */ });
/* harmony import */ var _aws_sdk_client_sso__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/client-sso */ "../../@aws-sdk/client-sso/dist-es/commands/GetRoleCredentialsCommand.js");
/* harmony import */ var _aws_sdk_client_sso__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-sdk/client-sso */ "../../@aws-sdk/client-sso/dist-es/SSOClient.js");




/***/ }),

/***/ "../../@aws-sdk/client-sso/package.json":
/*!**********************************************!*\
  !*** ../../@aws-sdk/client-sso/package.json ***!
  \**********************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"name":"@aws-sdk/client-sso","description":"AWS SDK for JavaScript Sso Client for Node.js, Browser and React Native","version":"3.511.0","scripts":{"build":"concurrently \'yarn:build:cjs\' \'yarn:build:es\' \'yarn:build:types\'","build:cjs":"node ../../scripts/compilation/inline client-sso","build:es":"tsc -p tsconfig.es.json","build:include:deps":"lerna run --scope $npm_package_name --include-dependencies build","build:types":"tsc -p tsconfig.types.json","build:types:downlevel":"downlevel-dts dist-types dist-types/ts3.4","clean":"rimraf ./dist-* && rimraf *.tsbuildinfo","extract:docs":"api-extractor run --local","generate:client":"node ../../scripts/generate-clients/single-service --solo sso"},"main":"./dist-cjs/index.js","types":"./dist-types/index.d.ts","module":"./dist-es/index.js","sideEffects":false,"dependencies":{"@aws-crypto/sha256-browser":"3.0.0","@aws-crypto/sha256-js":"3.0.0","@aws-sdk/core":"3.511.0","@aws-sdk/middleware-host-header":"3.511.0","@aws-sdk/middleware-logger":"3.511.0","@aws-sdk/middleware-recursion-detection":"3.511.0","@aws-sdk/middleware-user-agent":"3.511.0","@aws-sdk/region-config-resolver":"3.511.0","@aws-sdk/types":"3.511.0","@aws-sdk/util-endpoints":"3.511.0","@aws-sdk/util-user-agent-browser":"3.511.0","@aws-sdk/util-user-agent-node":"3.511.0","@smithy/config-resolver":"^2.1.1","@smithy/core":"^1.3.1","@smithy/fetch-http-handler":"^2.4.1","@smithy/hash-node":"^2.1.1","@smithy/invalid-dependency":"^2.1.1","@smithy/middleware-content-length":"^2.1.1","@smithy/middleware-endpoint":"^2.4.1","@smithy/middleware-retry":"^2.1.1","@smithy/middleware-serde":"^2.1.1","@smithy/middleware-stack":"^2.1.1","@smithy/node-config-provider":"^2.2.1","@smithy/node-http-handler":"^2.3.1","@smithy/protocol-http":"^3.1.1","@smithy/smithy-client":"^2.3.1","@smithy/types":"^2.9.1","@smithy/url-parser":"^2.1.1","@smithy/util-base64":"^2.1.1","@smithy/util-body-length-browser":"^2.1.1","@smithy/util-body-length-node":"^2.2.1","@smithy/util-defaults-mode-browser":"^2.1.1","@smithy/util-defaults-mode-node":"^2.1.1","@smithy/util-endpoints":"^1.1.1","@smithy/util-retry":"^2.1.1","@smithy/util-utf8":"^2.1.1","tslib":"^2.5.0"},"devDependencies":{"@smithy/service-client-documentation-generator":"^2.1.1","@tsconfig/node14":"1.0.3","@types/node":"^14.14.31","concurrently":"7.0.0","downlevel-dts":"0.10.1","rimraf":"3.0.2","typescript":"~4.9.5"},"engines":{"node":">=14.0.0"},"typesVersions":{"<4.0":{"dist-types/*":["dist-types/ts3.4/*"]}},"files":["dist-*/**"],"author":{"name":"AWS SDK for JavaScript Team","url":"https://aws.amazon.com/javascript/"},"license":"Apache-2.0","browser":{"./dist-es/runtimeConfig":"./dist-es/runtimeConfig.browser"},"react-native":{"./dist-es/runtimeConfig":"./dist-es/runtimeConfig.native"},"homepage":"https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-sso","repository":{"type":"git","url":"https://github.com/aws/aws-sdk-js-v3.git","directory":"clients/client-sso"}}');

/***/ })

};
;
//# sourceMappingURL=_aws-sdk_credential-provider-sso_dist-es_loadSso_js.js.map