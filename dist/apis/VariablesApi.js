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
class VariablesApi extends runtime.BaseAPI {
    /**
     * Delete previously created user tags or ingredients.
     * Delete user tag or ingredient
     */
    deleteUserTagRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            if (requestParameters.taggedVariableId !== undefined) {
                queryParameters['taggedVariableId'] = requestParameters.taggedVariableId;
            }
            if (requestParameters.tagVariableId !== undefined) {
                queryParameters['tagVariableId'] = requestParameters.tagVariableId;
            }
            const headerParameters = {};
            if (this.configuration && this.configuration.apiKey) {
                queryParameters["access_token"] = this.configuration.apiKey("access_token"); // access_token authentication
            }
            if (this.configuration && this.configuration.accessToken) {
                // oauth required
                if (typeof this.configuration.accessToken === 'function') {
                    headerParameters["Authorization"] = this.configuration.accessToken("quantimodo_oauth2", ["basic"]);
                }
                else {
                    headerParameters["Authorization"] = this.configuration.accessToken;
                }
            }
            const response = yield this.request({
                path: `/v3/userTags/delete`,
                method: 'DELETE',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.CommonResponseFromJSON(jsonValue));
        });
    }
    /**
     * Delete previously created user tags or ingredients.
     * Delete user tag or ingredient
     */
    deleteUserTag(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.deleteUserTagRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * Users can delete all of their measurements for a variable
     * Delete All Measurements For Variable
     */
    deleteUserVariableRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.variableId === null || requestParameters.variableId === undefined) {
                throw new runtime.RequiredError('variableId', 'Required parameter requestParameters.variableId was null or undefined when calling deleteUserVariable.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                queryParameters["access_token"] = this.configuration.apiKey("access_token"); // access_token authentication
            }
            if (this.configuration && this.configuration.accessToken) {
                // oauth required
                if (typeof this.configuration.accessToken === 'function') {
                    headerParameters["Authorization"] = this.configuration.accessToken("quantimodo_oauth2", ["basic"]);
                }
                else {
                    headerParameters["Authorization"] = this.configuration.accessToken;
                }
            }
            const response = yield this.request({
                path: `/v3/userVariables/delete`,
                method: 'DELETE',
                headers: headerParameters,
                query: queryParameters,
                body: models_1.UserVariableDeleteToJSON(requestParameters.variableId),
            });
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Users can delete all of their measurements for a variable
     * Delete All Measurements For Variable
     */
    deleteUserVariable(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.deleteUserVariableRaw(requestParameters);
        });
    }
    /**
     * The variable categories include Activity, Causes of Illness, Cognitive Performance, Conditions, Environment, Foods, Location, Miscellaneous, Mood, Nutrition, Physical Activity, Physique, Sleep, Social Interactions, Symptoms, Treatments, Vital Signs, and Goals.
     * Variable categories
     */
    getVariableCategoriesRaw() {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            if (this.configuration && this.configuration.apiKey) {
                queryParameters["access_token"] = this.configuration.apiKey("access_token"); // access_token authentication
            }
            if (this.configuration && this.configuration.accessToken) {
                // oauth required
                if (typeof this.configuration.accessToken === 'function') {
                    headerParameters["Authorization"] = this.configuration.accessToken("quantimodo_oauth2", ["basic"]);
                }
                else {
                    headerParameters["Authorization"] = this.configuration.accessToken;
                }
            }
            const response = yield this.request({
                path: `/v3/variableCategories`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(models_1.VariableCategoryFromJSON));
        });
    }
    /**
     * The variable categories include Activity, Causes of Illness, Cognitive Performance, Conditions, Environment, Foods, Location, Miscellaneous, Mood, Nutrition, Physical Activity, Physique, Sleep, Social Interactions, Symptoms, Treatments, Vital Signs, and Goals.
     * Variable categories
     */
    getVariableCategories() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getVariableCategoriesRaw();
            return yield response.value();
        });
    }
    /**
     * Get variables. If the user has specified variable settings, these are provided instead of the common variable defaults.
     * Get variables along with related user-specific analysis settings and statistics
     */
    getVariablesRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            if (requestParameters.includeCharts !== undefined) {
                queryParameters['includeCharts'] = requestParameters.includeCharts;
            }
            if (requestParameters.numberOfRawMeasurements !== undefined) {
                queryParameters['numberOfRawMeasurements'] = requestParameters.numberOfRawMeasurements;
            }
            if (requestParameters.userId !== undefined) {
                queryParameters['userId'] = requestParameters.userId;
            }
            if (requestParameters.variableCategoryName !== undefined) {
                queryParameters['variableCategoryName'] = requestParameters.variableCategoryName;
            }
            if (requestParameters.name !== undefined) {
                queryParameters['name'] = requestParameters.name;
            }
            if (requestParameters.variableName !== undefined) {
                queryParameters['variableName'] = requestParameters.variableName;
            }
            if (requestParameters.updatedAt !== undefined) {
                queryParameters['updatedAt'] = requestParameters.updatedAt;
            }
            if (requestParameters.sourceName !== undefined) {
                queryParameters['sourceName'] = requestParameters.sourceName;
            }
            if (requestParameters.earliestMeasurementTime !== undefined) {
                queryParameters['earliestMeasurementTime'] = requestParameters.earliestMeasurementTime;
            }
            if (requestParameters.latestMeasurementTime !== undefined) {
                queryParameters['latestMeasurementTime'] = requestParameters.latestMeasurementTime;
            }
            if (requestParameters.id !== undefined) {
                queryParameters['id'] = requestParameters.id;
            }
            if (requestParameters.lastSourceName !== undefined) {
                queryParameters['lastSourceName'] = requestParameters.lastSourceName;
            }
            if (requestParameters.limit !== undefined) {
                queryParameters['limit'] = requestParameters.limit;
            }
            if (requestParameters.offset !== undefined) {
                queryParameters['offset'] = requestParameters.offset;
            }
            if (requestParameters.sort !== undefined) {
                queryParameters['sort'] = requestParameters.sort;
            }
            if (requestParameters.includePublic !== undefined) {
                queryParameters['includePublic'] = requestParameters.includePublic;
            }
            if (requestParameters.manualTracking !== undefined) {
                queryParameters['manualTracking'] = requestParameters.manualTracking;
            }
            if (requestParameters.clientId !== undefined) {
                queryParameters['clientId'] = requestParameters.clientId;
            }
            if (requestParameters.upc !== undefined) {
                queryParameters['upc'] = requestParameters.upc;
            }
            if (requestParameters.effectOrCause !== undefined) {
                queryParameters['effectOrCause'] = requestParameters.effectOrCause;
            }
            if (requestParameters.publicEffectOrCause !== undefined) {
                queryParameters['publicEffectOrCause'] = requestParameters.publicEffectOrCause;
            }
            if (requestParameters.exactMatch !== undefined) {
                queryParameters['exactMatch'] = requestParameters.exactMatch;
            }
            if (requestParameters.variableCategoryId !== undefined) {
                queryParameters['variableCategoryId'] = requestParameters.variableCategoryId;
            }
            if (requestParameters.includePrivate !== undefined) {
                queryParameters['includePrivate'] = requestParameters.includePrivate;
            }
            if (requestParameters.searchPhrase !== undefined) {
                queryParameters['searchPhrase'] = requestParameters.searchPhrase;
            }
            if (requestParameters.synonyms !== undefined) {
                queryParameters['synonyms'] = requestParameters.synonyms;
            }
            if (requestParameters.taggedVariableId !== undefined) {
                queryParameters['taggedVariableId'] = requestParameters.taggedVariableId;
            }
            if (requestParameters.tagVariableId !== undefined) {
                queryParameters['tagVariableId'] = requestParameters.tagVariableId;
            }
            if (requestParameters.joinVariableId !== undefined) {
                queryParameters['joinVariableId'] = requestParameters.joinVariableId;
            }
            if (requestParameters.parentUserTagVariableId !== undefined) {
                queryParameters['parentUserTagVariableId'] = requestParameters.parentUserTagVariableId;
            }
            if (requestParameters.childUserTagVariableId !== undefined) {
                queryParameters['childUserTagVariableId'] = requestParameters.childUserTagVariableId;
            }
            if (requestParameters.ingredientUserTagVariableId !== undefined) {
                queryParameters['ingredientUserTagVariableId'] = requestParameters.ingredientUserTagVariableId;
            }
            if (requestParameters.ingredientOfUserTagVariableId !== undefined) {
                queryParameters['ingredientOfUserTagVariableId'] = requestParameters.ingredientOfUserTagVariableId;
            }
            if (requestParameters.commonOnly !== undefined) {
                queryParameters['commonOnly'] = requestParameters.commonOnly;
            }
            if (requestParameters.userOnly !== undefined) {
                queryParameters['userOnly'] = requestParameters.userOnly;
            }
            if (requestParameters.platform !== undefined) {
                queryParameters['platform'] = requestParameters.platform;
            }
            if (requestParameters.includeTags !== undefined) {
                queryParameters['includeTags'] = requestParameters.includeTags;
            }
            if (requestParameters.recalculate !== undefined) {
                queryParameters['recalculate'] = requestParameters.recalculate;
            }
            if (requestParameters.variableId !== undefined) {
                queryParameters['variableId'] = requestParameters.variableId;
            }
            if (requestParameters.concise !== undefined) {
                queryParameters['concise'] = requestParameters.concise;
            }
            if (requestParameters.refresh !== undefined) {
                queryParameters['refresh'] = requestParameters.refresh;
            }
            const headerParameters = {};
            if (this.configuration && this.configuration.apiKey) {
                queryParameters["access_token"] = this.configuration.apiKey("access_token"); // access_token authentication
            }
            if (this.configuration && this.configuration.accessToken) {
                // oauth required
                if (typeof this.configuration.accessToken === 'function') {
                    headerParameters["Authorization"] = this.configuration.accessToken("quantimodo_oauth2", ["basic"]);
                }
                else {
                    headerParameters["Authorization"] = this.configuration.accessToken;
                }
            }
            const response = yield this.request({
                path: `/v3/variables`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(models_1.VariableFromJSON));
        });
    }
    /**
     * Get variables. If the user has specified variable settings, these are provided instead of the common variable defaults.
     * Get variables along with related user-specific analysis settings and statistics
     */
    getVariables(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getVariablesRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * This endpoint allows users to tag foods with their ingredients.  This information will then be used to infer the user intake of the different ingredients by just entering the foods. The inferred intake levels will then be used to determine the effects of different nutrients on the user during analysis.
     * Post or update user tags or ingredients
     */
    postUserTagsRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.body === null || requestParameters.body === undefined) {
                throw new runtime.RequiredError('body', 'Required parameter requestParameters.body was null or undefined when calling postUserTags.');
            }
            const queryParameters = {};
            if (requestParameters.userId !== undefined) {
                queryParameters['userId'] = requestParameters.userId;
            }
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                queryParameters["access_token"] = this.configuration.apiKey("access_token"); // access_token authentication
            }
            if (this.configuration && this.configuration.accessToken) {
                // oauth required
                if (typeof this.configuration.accessToken === 'function') {
                    headerParameters["Authorization"] = this.configuration.accessToken("quantimodo_oauth2", ["basic"]);
                }
                else {
                    headerParameters["Authorization"] = this.configuration.accessToken;
                }
            }
            const response = yield this.request({
                path: `/v3/userTags`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: models_1.UserTagToJSON(requestParameters.body),
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.CommonResponseFromJSON(jsonValue));
        });
    }
    /**
     * This endpoint allows users to tag foods with their ingredients.  This information will then be used to infer the user intake of the different ingredients by just entering the foods. The inferred intake levels will then be used to determine the effects of different nutrients on the user during analysis.
     * Post or update user tags or ingredients
     */
    postUserTags(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.postUserTagsRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * Users can change the parameters used in analysis of that variable such as the expected duration of action for a variable to have an effect, the estimated delay before the onset of action. In order to filter out erroneous data, they are able to set the maximum and minimum reasonable daily values for a variable.
     * Update User Settings for a Variable
     */
    postUserVariablesRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.userVariables === null || requestParameters.userVariables === undefined) {
                throw new runtime.RequiredError('userVariables', 'Required parameter requestParameters.userVariables was null or undefined when calling postUserVariables.');
            }
            const queryParameters = {};
            if (requestParameters.includePrivate !== undefined) {
                queryParameters['includePrivate'] = requestParameters.includePrivate;
            }
            if (requestParameters.clientId !== undefined) {
                queryParameters['clientId'] = requestParameters.clientId;
            }
            if (requestParameters.includePublic !== undefined) {
                queryParameters['includePublic'] = requestParameters.includePublic;
            }
            if (requestParameters.searchPhrase !== undefined) {
                queryParameters['searchPhrase'] = requestParameters.searchPhrase;
            }
            if (requestParameters.exactMatch !== undefined) {
                queryParameters['exactMatch'] = requestParameters.exactMatch;
            }
            if (requestParameters.manualTracking !== undefined) {
                queryParameters['manualTracking'] = requestParameters.manualTracking;
            }
            if (requestParameters.variableCategoryName !== undefined) {
                queryParameters['variableCategoryName'] = requestParameters.variableCategoryName;
            }
            if (requestParameters.variableCategoryId !== undefined) {
                queryParameters['variableCategoryId'] = requestParameters.variableCategoryId;
            }
            if (requestParameters.synonyms !== undefined) {
                queryParameters['synonyms'] = requestParameters.synonyms;
            }
            if (requestParameters.platform !== undefined) {
                queryParameters['platform'] = requestParameters.platform;
            }
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                queryParameters["access_token"] = this.configuration.apiKey("access_token"); // access_token authentication
            }
            if (this.configuration && this.configuration.accessToken) {
                // oauth required
                if (typeof this.configuration.accessToken === 'function') {
                    headerParameters["Authorization"] = this.configuration.accessToken("quantimodo_oauth2", ["basic"]);
                }
                else {
                    headerParameters["Authorization"] = this.configuration.accessToken;
                }
            }
            const response = yield this.request({
                path: `/v3/variables`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: requestParameters.userVariables.map(models_1.VariableToJSON),
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.CommonResponseFromJSON(jsonValue));
        });
    }
    /**
     * Users can change the parameters used in analysis of that variable such as the expected duration of action for a variable to have an effect, the estimated delay before the onset of action. In order to filter out erroneous data, they are able to set the maximum and minimum reasonable daily values for a variable.
     * Update User Settings for a Variable
     */
    postUserVariables(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.postUserVariablesRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * Reset user settings for a variable to defaults
     * Reset user settings for a variable to defaults
     */
    resetUserVariableSettingsRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.variableId === null || requestParameters.variableId === undefined) {
                throw new runtime.RequiredError('variableId', 'Required parameter requestParameters.variableId was null or undefined when calling resetUserVariableSettings.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                queryParameters["access_token"] = this.configuration.apiKey("access_token"); // access_token authentication
            }
            if (this.configuration && this.configuration.accessToken) {
                // oauth required
                if (typeof this.configuration.accessToken === 'function') {
                    headerParameters["Authorization"] = this.configuration.accessToken("quantimodo_oauth2", ["basic"]);
                }
                else {
                    headerParameters["Authorization"] = this.configuration.accessToken;
                }
            }
            const response = yield this.request({
                path: `/v3/userVariables/reset`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: models_1.UserVariableDeleteToJSON(requestParameters.variableId),
            });
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Reset user settings for a variable to defaults
     * Reset user settings for a variable to defaults
     */
    resetUserVariableSettings(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.resetUserVariableSettingsRaw(requestParameters);
        });
    }
}
exports.VariablesApi = VariablesApi;
/**
    * @export
    * @enum {string}
    */
var GetVariablesVariableCategoryNameEnum;
(function (GetVariablesVariableCategoryNameEnum) {
    GetVariablesVariableCategoryNameEnum["Activities"] = "Activities";
    GetVariablesVariableCategoryNameEnum["Books"] = "Books";
    GetVariablesVariableCategoryNameEnum["CausesOfIllness"] = "Causes of Illness";
    GetVariablesVariableCategoryNameEnum["CognitivePerformance"] = "Cognitive Performance";
    GetVariablesVariableCategoryNameEnum["Conditions"] = "Conditions";
    GetVariablesVariableCategoryNameEnum["Emotions"] = "Emotions";
    GetVariablesVariableCategoryNameEnum["Environment"] = "Environment";
    GetVariablesVariableCategoryNameEnum["Foods"] = "Foods";
    GetVariablesVariableCategoryNameEnum["Location"] = "Location";
    GetVariablesVariableCategoryNameEnum["Miscellaneous"] = "Miscellaneous";
    GetVariablesVariableCategoryNameEnum["MoviesAndTV"] = "Movies and TV";
    GetVariablesVariableCategoryNameEnum["Music"] = "Music";
    GetVariablesVariableCategoryNameEnum["Nutrients"] = "Nutrients";
    GetVariablesVariableCategoryNameEnum["Payments"] = "Payments";
    GetVariablesVariableCategoryNameEnum["PhysicalActivity"] = "Physical Activity";
    GetVariablesVariableCategoryNameEnum["Physique"] = "Physique";
    GetVariablesVariableCategoryNameEnum["Sleep"] = "Sleep";
    GetVariablesVariableCategoryNameEnum["SocialInteractions"] = "Social Interactions";
    GetVariablesVariableCategoryNameEnum["Software"] = "Software";
    GetVariablesVariableCategoryNameEnum["Symptoms"] = "Symptoms";
    GetVariablesVariableCategoryNameEnum["Treatments"] = "Treatments";
    GetVariablesVariableCategoryNameEnum["VitalSigns"] = "Vital Signs";
    GetVariablesVariableCategoryNameEnum["Goals"] = "Goals";
})(GetVariablesVariableCategoryNameEnum = exports.GetVariablesVariableCategoryNameEnum || (exports.GetVariablesVariableCategoryNameEnum = {}));
/**
    * @export
    * @enum {string}
    */
var GetVariablesPlatformEnum;
(function (GetVariablesPlatformEnum) {
    GetVariablesPlatformEnum["Chrome"] = "chrome";
    GetVariablesPlatformEnum["Android"] = "android";
    GetVariablesPlatformEnum["Ios"] = "ios";
    GetVariablesPlatformEnum["Web"] = "web";
})(GetVariablesPlatformEnum = exports.GetVariablesPlatformEnum || (exports.GetVariablesPlatformEnum = {}));
/**
    * @export
    * @enum {string}
    */
var PostUserVariablesVariableCategoryNameEnum;
(function (PostUserVariablesVariableCategoryNameEnum) {
    PostUserVariablesVariableCategoryNameEnum["Activities"] = "Activities";
    PostUserVariablesVariableCategoryNameEnum["Books"] = "Books";
    PostUserVariablesVariableCategoryNameEnum["CausesOfIllness"] = "Causes of Illness";
    PostUserVariablesVariableCategoryNameEnum["CognitivePerformance"] = "Cognitive Performance";
    PostUserVariablesVariableCategoryNameEnum["Conditions"] = "Conditions";
    PostUserVariablesVariableCategoryNameEnum["Emotions"] = "Emotions";
    PostUserVariablesVariableCategoryNameEnum["Environment"] = "Environment";
    PostUserVariablesVariableCategoryNameEnum["Foods"] = "Foods";
    PostUserVariablesVariableCategoryNameEnum["Location"] = "Location";
    PostUserVariablesVariableCategoryNameEnum["Miscellaneous"] = "Miscellaneous";
    PostUserVariablesVariableCategoryNameEnum["MoviesAndTV"] = "Movies and TV";
    PostUserVariablesVariableCategoryNameEnum["Music"] = "Music";
    PostUserVariablesVariableCategoryNameEnum["Nutrients"] = "Nutrients";
    PostUserVariablesVariableCategoryNameEnum["Payments"] = "Payments";
    PostUserVariablesVariableCategoryNameEnum["PhysicalActivity"] = "Physical Activity";
    PostUserVariablesVariableCategoryNameEnum["Physique"] = "Physique";
    PostUserVariablesVariableCategoryNameEnum["Sleep"] = "Sleep";
    PostUserVariablesVariableCategoryNameEnum["SocialInteractions"] = "Social Interactions";
    PostUserVariablesVariableCategoryNameEnum["Software"] = "Software";
    PostUserVariablesVariableCategoryNameEnum["Symptoms"] = "Symptoms";
    PostUserVariablesVariableCategoryNameEnum["Treatments"] = "Treatments";
    PostUserVariablesVariableCategoryNameEnum["VitalSigns"] = "Vital Signs";
    PostUserVariablesVariableCategoryNameEnum["Goals"] = "Goals";
})(PostUserVariablesVariableCategoryNameEnum = exports.PostUserVariablesVariableCategoryNameEnum || (exports.PostUserVariablesVariableCategoryNameEnum = {}));
/**
    * @export
    * @enum {string}
    */
var PostUserVariablesPlatformEnum;
(function (PostUserVariablesPlatformEnum) {
    PostUserVariablesPlatformEnum["Chrome"] = "chrome";
    PostUserVariablesPlatformEnum["Android"] = "android";
    PostUserVariablesPlatformEnum["Ios"] = "ios";
    PostUserVariablesPlatformEnum["Web"] = "web";
})(PostUserVariablesPlatformEnum = exports.PostUserVariablesPlatformEnum || (exports.PostUserVariablesPlatformEnum = {}));