"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * quantimodo
 * We make it easy to retrieve and analyze normalized user data from a wide array of devices and applications. Check out our [docs and sdk\'s](https://github.com/QuantiModo/docs) or [contact us](https://help.quantimo.do).
 *
 * The version of the OpenAPI document: 5.8.112511
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const runtime = require("../runtime");
const models_1 = require("../models");
/**
 *
 */
class AppSettingsApi extends runtime.BaseAPI {
    /**
     * Get the settings for your application configurable at https://build.quantimo.do
     * Get client app settings
     */
    getAppSettingsRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            if (requestParameters.clientId !== undefined) {
                queryParameters['clientId'] = requestParameters.clientId;
            }
            if (requestParameters.clientSecret !== undefined) {
                queryParameters['client_secret'] = requestParameters.clientSecret;
            }
            if (requestParameters.platform !== undefined) {
                queryParameters['platform'] = requestParameters.platform;
            }
            const headerParameters = {};
            const response = yield this.request({
                path: `/v3/appSettings`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.AppSettingsResponseFromJSON(jsonValue));
        });
    }
    /**
     * Get the settings for your application configurable at https://build.quantimo.do
     * Get client app settings
     */
    getAppSettings(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getAppSettingsRaw(requestParameters);
            return yield response.value();
        });
    }
}
exports.AppSettingsApi = AppSettingsApi;
/**
    * @export
    * @enum {string}
    */
var GetAppSettingsPlatformEnum;
(function (GetAppSettingsPlatformEnum) {
    GetAppSettingsPlatformEnum["Chrome"] = "chrome";
    GetAppSettingsPlatformEnum["Android"] = "android";
    GetAppSettingsPlatformEnum["Ios"] = "ios";
    GetAppSettingsPlatformEnum["Web"] = "web";
})(GetAppSettingsPlatformEnum = exports.GetAppSettingsPlatformEnum || (exports.GetAppSettingsPlatformEnum = {}));
