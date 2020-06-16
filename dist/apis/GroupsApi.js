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
class GroupsApi extends runtime.BaseAPI {
    /**
     * Get Groups
     * Get Groups
     */
    getGroupsRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            if (requestParameters.sort !== undefined) {
                queryParameters['sort'] = requestParameters.sort;
            }
            if (requestParameters.limit !== undefined) {
                queryParameters['limit'] = requestParameters.limit;
            }
            if (requestParameters.offset !== undefined) {
                queryParameters['offset'] = requestParameters.offset;
            }
            if (requestParameters.updatedAt !== undefined) {
                queryParameters['updatedAt'] = requestParameters.updatedAt;
            }
            if (requestParameters.userId !== undefined) {
                queryParameters['userId'] = requestParameters.userId;
            }
            if (requestParameters.createdAt !== undefined) {
                queryParameters['createdAt'] = requestParameters.createdAt;
            }
            if (requestParameters.id !== undefined) {
                queryParameters['id'] = requestParameters.id;
            }
            if (requestParameters.clientId !== undefined) {
                queryParameters['clientId'] = requestParameters.clientId;
            }
            if (requestParameters.platform !== undefined) {
                queryParameters['platform'] = requestParameters.platform;
            }
            const headerParameters = {};
            if (this.configuration && this.configuration.apiKey) {
                queryParameters["access_token"] = this.configuration.apiKey("access_token"); // access_token authentication
            }
            if (this.configuration && this.configuration.accessToken) {
                // oauth required
                if (typeof this.configuration.accessToken === 'function') {
                    headerParameters["Authorization"] = this.configuration.accessToken("quantimodo_oauth2", ["readmeasurements"]);
                }
                else {
                    headerParameters["Authorization"] = this.configuration.accessToken;
                }
            }
            const response = yield this.request({
                path: `/v3/groups`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(models_1.GroupsResponseFromJSON));
        });
    }
    /**
     * Get Groups
     * Get Groups
     */
    getGroups(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getGroupsRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * Get GroupsMembers
     * Get GroupsMembers
     */
    getGroupsMembersRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            if (requestParameters.sort !== undefined) {
                queryParameters['sort'] = requestParameters.sort;
            }
            if (requestParameters.limit !== undefined) {
                queryParameters['limit'] = requestParameters.limit;
            }
            if (requestParameters.offset !== undefined) {
                queryParameters['offset'] = requestParameters.offset;
            }
            if (requestParameters.updatedAt !== undefined) {
                queryParameters['updatedAt'] = requestParameters.updatedAt;
            }
            if (requestParameters.userId !== undefined) {
                queryParameters['userId'] = requestParameters.userId;
            }
            if (requestParameters.createdAt !== undefined) {
                queryParameters['createdAt'] = requestParameters.createdAt;
            }
            if (requestParameters.id !== undefined) {
                queryParameters['id'] = requestParameters.id;
            }
            if (requestParameters.clientId !== undefined) {
                queryParameters['clientId'] = requestParameters.clientId;
            }
            if (requestParameters.platform !== undefined) {
                queryParameters['platform'] = requestParameters.platform;
            }
            const headerParameters = {};
            if (this.configuration && this.configuration.apiKey) {
                queryParameters["access_token"] = this.configuration.apiKey("access_token"); // access_token authentication
            }
            if (this.configuration && this.configuration.accessToken) {
                // oauth required
                if (typeof this.configuration.accessToken === 'function') {
                    headerParameters["Authorization"] = this.configuration.accessToken("quantimodo_oauth2", ["readmeasurements"]);
                }
                else {
                    headerParameters["Authorization"] = this.configuration.accessToken;
                }
            }
            const response = yield this.request({
                path: `/v3/groupsMembers`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(models_1.GroupsMembersResponseFromJSON));
        });
    }
    /**
     * Get GroupsMembers
     * Get GroupsMembers
     */
    getGroupsMembers(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getGroupsMembersRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * Post Groups
     * Post Groups
     */
    postGroupsRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            if (requestParameters.sort !== undefined) {
                queryParameters['sort'] = requestParameters.sort;
            }
            if (requestParameters.limit !== undefined) {
                queryParameters['limit'] = requestParameters.limit;
            }
            if (requestParameters.offset !== undefined) {
                queryParameters['offset'] = requestParameters.offset;
            }
            if (requestParameters.updatedAt !== undefined) {
                queryParameters['updatedAt'] = requestParameters.updatedAt;
            }
            if (requestParameters.userId !== undefined) {
                queryParameters['userId'] = requestParameters.userId;
            }
            if (requestParameters.createdAt !== undefined) {
                queryParameters['createdAt'] = requestParameters.createdAt;
            }
            if (requestParameters.id !== undefined) {
                queryParameters['id'] = requestParameters.id;
            }
            if (requestParameters.clientId !== undefined) {
                queryParameters['clientId'] = requestParameters.clientId;
            }
            if (requestParameters.platform !== undefined) {
                queryParameters['platform'] = requestParameters.platform;
            }
            const headerParameters = {};
            if (this.configuration && this.configuration.apiKey) {
                queryParameters["access_token"] = this.configuration.apiKey("access_token"); // access_token authentication
            }
            if (this.configuration && this.configuration.accessToken) {
                // oauth required
                if (typeof this.configuration.accessToken === 'function') {
                    headerParameters["Authorization"] = this.configuration.accessToken("quantimodo_oauth2", ["readmeasurements"]);
                }
                else {
                    headerParameters["Authorization"] = this.configuration.accessToken;
                }
            }
            const response = yield this.request({
                path: `/v3/groups`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(models_1.GroupsResponseFromJSON));
        });
    }
    /**
     * Post Groups
     * Post Groups
     */
    postGroups(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.postGroupsRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * Post GroupsMembers
     * Post GroupsMembers
     */
    postGroupsMembersRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            if (requestParameters.sort !== undefined) {
                queryParameters['sort'] = requestParameters.sort;
            }
            if (requestParameters.limit !== undefined) {
                queryParameters['limit'] = requestParameters.limit;
            }
            if (requestParameters.offset !== undefined) {
                queryParameters['offset'] = requestParameters.offset;
            }
            if (requestParameters.updatedAt !== undefined) {
                queryParameters['updatedAt'] = requestParameters.updatedAt;
            }
            if (requestParameters.userId !== undefined) {
                queryParameters['userId'] = requestParameters.userId;
            }
            if (requestParameters.createdAt !== undefined) {
                queryParameters['createdAt'] = requestParameters.createdAt;
            }
            if (requestParameters.id !== undefined) {
                queryParameters['id'] = requestParameters.id;
            }
            if (requestParameters.clientId !== undefined) {
                queryParameters['clientId'] = requestParameters.clientId;
            }
            if (requestParameters.platform !== undefined) {
                queryParameters['platform'] = requestParameters.platform;
            }
            const headerParameters = {};
            if (this.configuration && this.configuration.apiKey) {
                queryParameters["access_token"] = this.configuration.apiKey("access_token"); // access_token authentication
            }
            if (this.configuration && this.configuration.accessToken) {
                // oauth required
                if (typeof this.configuration.accessToken === 'function') {
                    headerParameters["Authorization"] = this.configuration.accessToken("quantimodo_oauth2", ["readmeasurements"]);
                }
                else {
                    headerParameters["Authorization"] = this.configuration.accessToken;
                }
            }
            const response = yield this.request({
                path: `/v3/groupsMembers`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(models_1.GroupsMembersResponseFromJSON));
        });
    }
    /**
     * Post GroupsMembers
     * Post GroupsMembers
     */
    postGroupsMembers(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.postGroupsMembersRaw(requestParameters);
            return yield response.value();
        });
    }
}
exports.GroupsApi = GroupsApi;
/**
    * @export
    * @enum {string}
    */
var GetGroupsPlatformEnum;
(function (GetGroupsPlatformEnum) {
    GetGroupsPlatformEnum["Chrome"] = "chrome";
    GetGroupsPlatformEnum["Android"] = "android";
    GetGroupsPlatformEnum["Ios"] = "ios";
    GetGroupsPlatformEnum["Web"] = "web";
})(GetGroupsPlatformEnum = exports.GetGroupsPlatformEnum || (exports.GetGroupsPlatformEnum = {}));
/**
    * @export
    * @enum {string}
    */
var GetGroupsMembersPlatformEnum;
(function (GetGroupsMembersPlatformEnum) {
    GetGroupsMembersPlatformEnum["Chrome"] = "chrome";
    GetGroupsMembersPlatformEnum["Android"] = "android";
    GetGroupsMembersPlatformEnum["Ios"] = "ios";
    GetGroupsMembersPlatformEnum["Web"] = "web";
})(GetGroupsMembersPlatformEnum = exports.GetGroupsMembersPlatformEnum || (exports.GetGroupsMembersPlatformEnum = {}));
/**
    * @export
    * @enum {string}
    */
var PostGroupsPlatformEnum;
(function (PostGroupsPlatformEnum) {
    PostGroupsPlatformEnum["Chrome"] = "chrome";
    PostGroupsPlatformEnum["Android"] = "android";
    PostGroupsPlatformEnum["Ios"] = "ios";
    PostGroupsPlatformEnum["Web"] = "web";
})(PostGroupsPlatformEnum = exports.PostGroupsPlatformEnum || (exports.PostGroupsPlatformEnum = {}));
/**
    * @export
    * @enum {string}
    */
var PostGroupsMembersPlatformEnum;
(function (PostGroupsMembersPlatformEnum) {
    PostGroupsMembersPlatformEnum["Chrome"] = "chrome";
    PostGroupsMembersPlatformEnum["Android"] = "android";
    PostGroupsMembersPlatformEnum["Ios"] = "ios";
    PostGroupsMembersPlatformEnum["Web"] = "web";
})(PostGroupsMembersPlatformEnum = exports.PostGroupsMembersPlatformEnum || (exports.PostGroupsMembersPlatformEnum = {}));