"use strict";
exports.id = "_aws-sdk_credential-provider-http_dist-es_index_js";
exports.ids = ["_aws-sdk_credential-provider-http_dist-es_index_js"];
exports.modules = {

/***/ "../../@aws-sdk/credential-provider-http/dist-es/fromHttp/checkUrl.js":
/*!****************************************************************************!*\
  !*** ../../@aws-sdk/credential-provider-http/dist-es/fromHttp/checkUrl.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkUrl: () => (/* binding */ checkUrl)
/* harmony export */ });
/* harmony import */ var _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/property-provider */ "../../@smithy/property-provider/dist-es/index.js");

const LOOPBACK_CIDR_IPv4 = "127.0.0.0/8";
const LOOPBACK_CIDR_IPv6 = "::1/128";
const ECS_CONTAINER_HOST = "169.254.170.2";
const EKS_CONTAINER_HOST_IPv4 = "169.254.170.23";
const EKS_CONTAINER_HOST_IPv6 = "[fd00:ec2::23]";
const checkUrl = (url) => {
    if (url.protocol === "https:") {
        return;
    }
    if (url.hostname === ECS_CONTAINER_HOST ||
        url.hostname === EKS_CONTAINER_HOST_IPv4 ||
        url.hostname === EKS_CONTAINER_HOST_IPv6) {
        return;
    }
    if (url.hostname.includes("[")) {
        if (url.hostname === "[::1]" || url.hostname === "[0000:0000:0000:0000:0000:0000:0000:0001]") {
            return;
        }
    }
    else {
        if (url.hostname === "localhost") {
            return;
        }
        const ipComponents = url.hostname.split(".");
        const inRange = (component) => {
            const num = parseInt(component, 10);
            return 0 <= num && num <= 255;
        };
        if (ipComponents[0] === "127" &&
            inRange(ipComponents[1]) &&
            inRange(ipComponents[2]) &&
            inRange(ipComponents[3]) &&
            ipComponents.length === 4) {
            return;
        }
    }
    throw new _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__.CredentialsProviderError(`URL not accepted. It must either be HTTPS or match one of the following:
  - loopback CIDR 127.0.0.0/8 or [::1/128]
  - ECS container host 169.254.170.2
  - EKS container host 169.254.170.23 or [fd00:ec2::23]`);
};


/***/ }),

/***/ "../../@aws-sdk/credential-provider-http/dist-es/fromHttp/fromHttp.js":
/*!****************************************************************************!*\
  !*** ../../@aws-sdk/credential-provider-http/dist-es/fromHttp/fromHttp.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fromHttp: () => (/* binding */ fromHttp)
/* harmony export */ });
/* harmony import */ var _smithy_node_http_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/node-http-handler */ "../../@smithy/node-http-handler/dist-es/index.js");
/* harmony import */ var _smithy_property_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smithy/property-provider */ "../../@smithy/property-provider/dist-es/index.js");
/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs/promises */ "fs/promises");
/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _checkUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkUrl */ "../../@aws-sdk/credential-provider-http/dist-es/fromHttp/checkUrl.js");
/* harmony import */ var _requestHelpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./requestHelpers */ "../../@aws-sdk/credential-provider-http/dist-es/fromHttp/requestHelpers.js");
/* harmony import */ var _retry_wrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./retry-wrapper */ "../../@aws-sdk/credential-provider-http/dist-es/fromHttp/retry-wrapper.js");






const AWS_CONTAINER_CREDENTIALS_RELATIVE_URI = "AWS_CONTAINER_CREDENTIALS_RELATIVE_URI";
const DEFAULT_LINK_LOCAL_HOST = "http://169.254.170.2";
const AWS_CONTAINER_CREDENTIALS_FULL_URI = "AWS_CONTAINER_CREDENTIALS_FULL_URI";
const AWS_CONTAINER_AUTHORIZATION_TOKEN_FILE = "AWS_CONTAINER_AUTHORIZATION_TOKEN_FILE";
const AWS_CONTAINER_AUTHORIZATION_TOKEN = "AWS_CONTAINER_AUTHORIZATION_TOKEN";
const fromHttp = (options) => {
    options.logger?.debug("@aws-sdk/credential-provider-http", "fromHttp");
    let host;
    const relative = options.awsContainerCredentialsRelativeUri ?? process.env[AWS_CONTAINER_CREDENTIALS_RELATIVE_URI];
    const full = options.awsContainerCredentialsFullUri ?? process.env[AWS_CONTAINER_CREDENTIALS_FULL_URI];
    const token = options.awsContainerAuthorizationToken ?? process.env[AWS_CONTAINER_AUTHORIZATION_TOKEN];
    const tokenFile = options.awsContainerAuthorizationTokenFile ?? process.env[AWS_CONTAINER_AUTHORIZATION_TOKEN_FILE];
    if (relative && full) {
        console.warn("AWS SDK HTTP credentials provider:", "you have set both awsContainerCredentialsRelativeUri and awsContainerCredentialsFullUri.");
        console.warn("awsContainerCredentialsFullUri will take precedence.");
    }
    if (token && tokenFile) {
        console.warn("AWS SDK HTTP credentials provider:", "you have set both awsContainerAuthorizationToken and awsContainerAuthorizationTokenFile.");
        console.warn("awsContainerAuthorizationToken will take precedence.");
    }
    if (full) {
        host = full;
    }
    else if (relative) {
        host = `${DEFAULT_LINK_LOCAL_HOST}${relative}`;
    }
    else {
        throw new _smithy_property_provider__WEBPACK_IMPORTED_MODULE_1__.CredentialsProviderError(`No HTTP credential provider host provided.
Set AWS_CONTAINER_CREDENTIALS_FULL_URI or AWS_CONTAINER_CREDENTIALS_RELATIVE_URI.`);
    }
    const url = new URL(host);
    (0,_checkUrl__WEBPACK_IMPORTED_MODULE_3__.checkUrl)(url);
    const requestHandler = new _smithy_node_http_handler__WEBPACK_IMPORTED_MODULE_0__.NodeHttpHandler({
        requestTimeout: options.timeout ?? 1000,
        connectionTimeout: options.timeout ?? 1000,
    });
    return (0,_retry_wrapper__WEBPACK_IMPORTED_MODULE_5__.retryWrapper)(async () => {
        const request = (0,_requestHelpers__WEBPACK_IMPORTED_MODULE_4__.createGetRequest)(url);
        if (token) {
            request.headers.Authorization = token;
        }
        else if (tokenFile) {
            request.headers.Authorization = (await fs_promises__WEBPACK_IMPORTED_MODULE_2___default().readFile(tokenFile)).toString();
        }
        try {
            const result = await requestHandler.handle(request);
            return (0,_requestHelpers__WEBPACK_IMPORTED_MODULE_4__.getCredentials)(result.response);
        }
        catch (e) {
            throw new _smithy_property_provider__WEBPACK_IMPORTED_MODULE_1__.CredentialsProviderError(String(e));
        }
    }, options.maxRetries ?? 3, options.timeout ?? 1000);
};


/***/ }),

/***/ "../../@aws-sdk/credential-provider-http/dist-es/fromHttp/requestHelpers.js":
/*!**********************************************************************************!*\
  !*** ../../@aws-sdk/credential-provider-http/dist-es/fromHttp/requestHelpers.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createGetRequest: () => (/* binding */ createGetRequest),
/* harmony export */   getCredentials: () => (/* binding */ getCredentials)
/* harmony export */ });
/* harmony import */ var _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/property-provider */ "../../@smithy/property-provider/dist-es/index.js");
/* harmony import */ var _smithy_protocol_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smithy/protocol-http */ "../../@smithy/protocol-http/dist-es/index.js");
/* harmony import */ var _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @smithy/smithy-client */ "../../@smithy/smithy-client/dist-es/index.js");
/* harmony import */ var _smithy_util_stream__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @smithy/util-stream */ "../../@smithy/util-stream/dist-es/index.js");




function createGetRequest(url) {
    return new _smithy_protocol_http__WEBPACK_IMPORTED_MODULE_1__.HttpRequest({
        protocol: url.protocol,
        hostname: url.hostname,
        port: Number(url.port),
        path: url.pathname,
        query: Array.from(url.searchParams.entries()).reduce((acc, [k, v]) => {
            acc[k] = v;
            return acc;
        }, {}),
        fragment: url.hash,
    });
}
async function getCredentials(response) {
    const contentType = response?.headers["content-type"] ?? response?.headers["Content-Type"] ?? "";
    if (!contentType.includes("json")) {
        console.warn("HTTP credential provider response header content-type was not application/json. Observed: " + contentType + ".");
    }
    const stream = (0,_smithy_util_stream__WEBPACK_IMPORTED_MODULE_3__.sdkStreamMixin)(response.body);
    const str = await stream.transformToString();
    if (response.statusCode === 200) {
        const parsed = JSON.parse(str);
        if (typeof parsed.AccessKeyId !== "string" ||
            typeof parsed.SecretAccessKey !== "string" ||
            typeof parsed.Token !== "string" ||
            typeof parsed.Expiration !== "string") {
            throw new _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__.CredentialsProviderError("HTTP credential provider response not of the required format, an object matching: " +
                "{ AccessKeyId: string, SecretAccessKey: string, Token: string, Expiration: string(rfc3339) }");
        }
        return {
            accessKeyId: parsed.AccessKeyId,
            secretAccessKey: parsed.SecretAccessKey,
            sessionToken: parsed.Token,
            expiration: (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_2__.parseRfc3339DateTime)(parsed.Expiration),
        };
    }
    if (response.statusCode >= 400 && response.statusCode < 500) {
        let parsedBody = {};
        try {
            parsedBody = JSON.parse(str);
        }
        catch (e) { }
        throw Object.assign(new _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__.CredentialsProviderError(`Server responded with status: ${response.statusCode}`), {
            Code: parsedBody.Code,
            Message: parsedBody.Message,
        });
    }
    throw new _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__.CredentialsProviderError(`Server responded with status: ${response.statusCode}`);
}


/***/ }),

/***/ "../../@aws-sdk/credential-provider-http/dist-es/fromHttp/retry-wrapper.js":
/*!*********************************************************************************!*\
  !*** ../../@aws-sdk/credential-provider-http/dist-es/fromHttp/retry-wrapper.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   retryWrapper: () => (/* binding */ retryWrapper)
/* harmony export */ });
const retryWrapper = (toRetry, maxRetries, delayMs) => {
    return async () => {
        for (let i = 0; i < maxRetries; ++i) {
            try {
                return await toRetry();
            }
            catch (e) {
                await new Promise((resolve) => setTimeout(resolve, delayMs));
            }
        }
        return await toRetry();
    };
};


/***/ }),

/***/ "../../@aws-sdk/credential-provider-http/dist-es/index.js":
/*!****************************************************************!*\
  !*** ../../@aws-sdk/credential-provider-http/dist-es/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fromHttp: () => (/* reexport safe */ _fromHttp_fromHttp__WEBPACK_IMPORTED_MODULE_0__.fromHttp)
/* harmony export */ });
/* harmony import */ var _fromHttp_fromHttp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fromHttp/fromHttp */ "../../@aws-sdk/credential-provider-http/dist-es/fromHttp/fromHttp.js");



/***/ })

};
;
//# sourceMappingURL=_aws-sdk_credential-provider-http_dist-es_index_js.js.map