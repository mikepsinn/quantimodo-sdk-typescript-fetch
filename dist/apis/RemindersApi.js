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
class RemindersApi extends runtime.BaseAPI {
    /**
     * Stop getting notifications to record data for a variable.  Previously recorded measurements will be preserved.
     * Delete Tracking Reminder
     */
    deleteTrackingReminderRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.body === null || requestParameters.body === undefined) {
                throw new runtime.RequiredError('body', 'Required parameter requestParameters.body was null or undefined when calling deleteTrackingReminder.');
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
                path: `/v3/trackingReminders/delete`,
                method: 'DELETE',
                headers: headerParameters,
                query: queryParameters,
                body: models_1.TrackingReminderDeleteToJSON(requestParameters.body),
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.CommonResponseFromJSON(jsonValue));
        });
    }
    /**
     * Stop getting notifications to record data for a variable.  Previously recorded measurements will be preserved.
     * Delete Tracking Reminder
     */
    deleteTrackingReminder(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.deleteTrackingReminderRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * Specific tracking reminder notification instances that still need to be tracked.
     * Get specific tracking reminder notifications
     */
    getTrackingReminderNotificationsRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            if (requestParameters.sort !== undefined) {
                queryParameters['sort'] = requestParameters.sort;
            }
            if (requestParameters.userId !== undefined) {
                queryParameters['userId'] = requestParameters.userId;
            }
            if (requestParameters.createdAt !== undefined) {
                queryParameters['createdAt'] = requestParameters.createdAt;
            }
            if (requestParameters.updatedAt !== undefined) {
                queryParameters['updatedAt'] = requestParameters.updatedAt;
            }
            if (requestParameters.limit !== undefined) {
                queryParameters['limit'] = requestParameters.limit;
            }
            if (requestParameters.offset !== undefined) {
                queryParameters['offset'] = requestParameters.offset;
            }
            if (requestParameters.variableCategoryName !== undefined) {
                queryParameters['variableCategoryName'] = requestParameters.variableCategoryName;
            }
            if (requestParameters.reminderTime !== undefined) {
                queryParameters['reminderTime'] = requestParameters.reminderTime;
            }
            if (requestParameters.clientId !== undefined) {
                queryParameters['clientId'] = requestParameters.clientId;
            }
            if (requestParameters.onlyPast !== undefined) {
                queryParameters['onlyPast'] = requestParameters.onlyPast;
            }
            if (requestParameters.includeDeleted !== undefined) {
                queryParameters['includeDeleted'] = requestParameters.includeDeleted;
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
                    headerParameters["Authorization"] = this.configuration.accessToken("quantimodo_oauth2", ["basic"]);
                }
                else {
                    headerParameters["Authorization"] = this.configuration.accessToken;
                }
            }
            const response = yield this.request({
                path: `/v3/trackingReminderNotifications`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.GetTrackingReminderNotificationsResponseFromJSON(jsonValue));
        });
    }
    /**
     * Specific tracking reminder notification instances that still need to be tracked.
     * Get specific tracking reminder notifications
     */
    getTrackingReminderNotifications(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getTrackingReminderNotificationsRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * Users can be reminded to track certain variables at a specified frequency with a default value.
     * Get repeating tracking reminder settings
     */
    getTrackingRemindersRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            if (requestParameters.userId !== undefined) {
                queryParameters['userId'] = requestParameters.userId;
            }
            if (requestParameters.variableCategoryName !== undefined) {
                queryParameters['variableCategoryName'] = requestParameters.variableCategoryName;
            }
            if (requestParameters.createdAt !== undefined) {
                queryParameters['createdAt'] = requestParameters.createdAt;
            }
            if (requestParameters.updatedAt !== undefined) {
                queryParameters['updatedAt'] = requestParameters.updatedAt;
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
            if (requestParameters.clientId !== undefined) {
                queryParameters['clientId'] = requestParameters.clientId;
            }
            if (requestParameters.appVersion !== undefined) {
                queryParameters['appVersion'] = requestParameters.appVersion;
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
                    headerParameters["Authorization"] = this.configuration.accessToken("quantimodo_oauth2", ["basic"]);
                }
                else {
                    headerParameters["Authorization"] = this.configuration.accessToken;
                }
            }
            const response = yield this.request({
                path: `/v3/trackingReminders`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(models_1.TrackingReminderFromJSON));
        });
    }
    /**
     * Users can be reminded to track certain variables at a specified frequency with a default value.
     * Get repeating tracking reminder settings
     */
    getTrackingReminders(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getTrackingRemindersRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * Snooze, skip, or track a tracking reminder notification
     * Snooze, skip, or track a tracking reminder notification
     */
    postTrackingReminderNotificationsRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.body === null || requestParameters.body === undefined) {
                throw new runtime.RequiredError('body', 'Required parameter requestParameters.body was null or undefined when calling postTrackingReminderNotifications.');
            }
            const queryParameters = {};
            if (requestParameters.userId !== undefined) {
                queryParameters['userId'] = requestParameters.userId;
            }
            if (requestParameters.clientId !== undefined) {
                queryParameters['clientId'] = requestParameters.clientId;
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
                path: `/v3/trackingReminderNotifications`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: requestParameters.body.map(models_1.TrackingReminderNotificationPostToJSON),
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.CommonResponseFromJSON(jsonValue));
        });
    }
    /**
     * Snooze, skip, or track a tracking reminder notification
     * Snooze, skip, or track a tracking reminder notification
     */
    postTrackingReminderNotifications(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.postTrackingReminderNotificationsRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * This is to enable users to create reminders to track a variable with a default value at a specified frequency
     * Store a Tracking Reminder
     */
    postTrackingRemindersRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.body === null || requestParameters.body === undefined) {
                throw new runtime.RequiredError('body', 'Required parameter requestParameters.body was null or undefined when calling postTrackingReminders.');
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
                path: `/v3/trackingReminders`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: requestParameters.body.map(models_1.TrackingReminderToJSON),
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.PostTrackingRemindersResponseFromJSON(jsonValue));
        });
    }
    /**
     * This is to enable users to create reminders to track a variable with a default value at a specified frequency
     * Store a Tracking Reminder
     */
    postTrackingReminders(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.postTrackingRemindersRaw(requestParameters);
            return yield response.value();
        });
    }
}
exports.RemindersApi = RemindersApi;
/**
    * @export
    * @enum {string}
    */
var GetTrackingReminderNotificationsVariableCategoryNameEnum;
(function (GetTrackingReminderNotificationsVariableCategoryNameEnum) {
    GetTrackingReminderNotificationsVariableCategoryNameEnum["Activities"] = "Activities";
    GetTrackingReminderNotificationsVariableCategoryNameEnum["Books"] = "Books";
    GetTrackingReminderNotificationsVariableCategoryNameEnum["CausesOfIllness"] = "Causes of Illness";
    GetTrackingReminderNotificationsVariableCategoryNameEnum["CognitivePerformance"] = "Cognitive Performance";
    GetTrackingReminderNotificationsVariableCategoryNameEnum["Conditions"] = "Conditions";
    GetTrackingReminderNotificationsVariableCategoryNameEnum["Emotions"] = "Emotions";
    GetTrackingReminderNotificationsVariableCategoryNameEnum["Environment"] = "Environment";
    GetTrackingReminderNotificationsVariableCategoryNameEnum["Foods"] = "Foods";
    GetTrackingReminderNotificationsVariableCategoryNameEnum["Location"] = "Location";
    GetTrackingReminderNotificationsVariableCategoryNameEnum["Miscellaneous"] = "Miscellaneous";
    GetTrackingReminderNotificationsVariableCategoryNameEnum["MoviesAndTV"] = "Movies and TV";
    GetTrackingReminderNotificationsVariableCategoryNameEnum["Music"] = "Music";
    GetTrackingReminderNotificationsVariableCategoryNameEnum["Nutrients"] = "Nutrients";
    GetTrackingReminderNotificationsVariableCategoryNameEnum["Payments"] = "Payments";
    GetTrackingReminderNotificationsVariableCategoryNameEnum["PhysicalActivity"] = "Physical Activity";
    GetTrackingReminderNotificationsVariableCategoryNameEnum["Physique"] = "Physique";
    GetTrackingReminderNotificationsVariableCategoryNameEnum["Sleep"] = "Sleep";
    GetTrackingReminderNotificationsVariableCategoryNameEnum["SocialInteractions"] = "Social Interactions";
    GetTrackingReminderNotificationsVariableCategoryNameEnum["Software"] = "Software";
    GetTrackingReminderNotificationsVariableCategoryNameEnum["Symptoms"] = "Symptoms";
    GetTrackingReminderNotificationsVariableCategoryNameEnum["Treatments"] = "Treatments";
    GetTrackingReminderNotificationsVariableCategoryNameEnum["VitalSigns"] = "Vital Signs";
    GetTrackingReminderNotificationsVariableCategoryNameEnum["Goals"] = "Goals";
})(GetTrackingReminderNotificationsVariableCategoryNameEnum = exports.GetTrackingReminderNotificationsVariableCategoryNameEnum || (exports.GetTrackingReminderNotificationsVariableCategoryNameEnum = {}));
/**
    * @export
    * @enum {string}
    */
var GetTrackingReminderNotificationsPlatformEnum;
(function (GetTrackingReminderNotificationsPlatformEnum) {
    GetTrackingReminderNotificationsPlatformEnum["Chrome"] = "chrome";
    GetTrackingReminderNotificationsPlatformEnum["Android"] = "android";
    GetTrackingReminderNotificationsPlatformEnum["Ios"] = "ios";
    GetTrackingReminderNotificationsPlatformEnum["Web"] = "web";
})(GetTrackingReminderNotificationsPlatformEnum = exports.GetTrackingReminderNotificationsPlatformEnum || (exports.GetTrackingReminderNotificationsPlatformEnum = {}));
/**
    * @export
    * @enum {string}
    */
var GetTrackingRemindersVariableCategoryNameEnum;
(function (GetTrackingRemindersVariableCategoryNameEnum) {
    GetTrackingRemindersVariableCategoryNameEnum["Activities"] = "Activities";
    GetTrackingRemindersVariableCategoryNameEnum["Books"] = "Books";
    GetTrackingRemindersVariableCategoryNameEnum["CausesOfIllness"] = "Causes of Illness";
    GetTrackingRemindersVariableCategoryNameEnum["CognitivePerformance"] = "Cognitive Performance";
    GetTrackingRemindersVariableCategoryNameEnum["Conditions"] = "Conditions";
    GetTrackingRemindersVariableCategoryNameEnum["Emotions"] = "Emotions";
    GetTrackingRemindersVariableCategoryNameEnum["Environment"] = "Environment";
    GetTrackingRemindersVariableCategoryNameEnum["Foods"] = "Foods";
    GetTrackingRemindersVariableCategoryNameEnum["Location"] = "Location";
    GetTrackingRemindersVariableCategoryNameEnum["Miscellaneous"] = "Miscellaneous";
    GetTrackingRemindersVariableCategoryNameEnum["MoviesAndTV"] = "Movies and TV";
    GetTrackingRemindersVariableCategoryNameEnum["Music"] = "Music";
    GetTrackingRemindersVariableCategoryNameEnum["Nutrients"] = "Nutrients";
    GetTrackingRemindersVariableCategoryNameEnum["Payments"] = "Payments";
    GetTrackingRemindersVariableCategoryNameEnum["PhysicalActivity"] = "Physical Activity";
    GetTrackingRemindersVariableCategoryNameEnum["Physique"] = "Physique";
    GetTrackingRemindersVariableCategoryNameEnum["Sleep"] = "Sleep";
    GetTrackingRemindersVariableCategoryNameEnum["SocialInteractions"] = "Social Interactions";
    GetTrackingRemindersVariableCategoryNameEnum["Software"] = "Software";
    GetTrackingRemindersVariableCategoryNameEnum["Symptoms"] = "Symptoms";
    GetTrackingRemindersVariableCategoryNameEnum["Treatments"] = "Treatments";
    GetTrackingRemindersVariableCategoryNameEnum["VitalSigns"] = "Vital Signs";
    GetTrackingRemindersVariableCategoryNameEnum["Goals"] = "Goals";
})(GetTrackingRemindersVariableCategoryNameEnum = exports.GetTrackingRemindersVariableCategoryNameEnum || (exports.GetTrackingRemindersVariableCategoryNameEnum = {}));
/**
    * @export
    * @enum {string}
    */
var GetTrackingRemindersPlatformEnum;
(function (GetTrackingRemindersPlatformEnum) {
    GetTrackingRemindersPlatformEnum["Chrome"] = "chrome";
    GetTrackingRemindersPlatformEnum["Android"] = "android";
    GetTrackingRemindersPlatformEnum["Ios"] = "ios";
    GetTrackingRemindersPlatformEnum["Web"] = "web";
})(GetTrackingRemindersPlatformEnum = exports.GetTrackingRemindersPlatformEnum || (exports.GetTrackingRemindersPlatformEnum = {}));
/**
    * @export
    * @enum {string}
    */
var PostTrackingReminderNotificationsPlatformEnum;
(function (PostTrackingReminderNotificationsPlatformEnum) {
    PostTrackingReminderNotificationsPlatformEnum["Chrome"] = "chrome";
    PostTrackingReminderNotificationsPlatformEnum["Android"] = "android";
    PostTrackingReminderNotificationsPlatformEnum["Ios"] = "ios";
    PostTrackingReminderNotificationsPlatformEnum["Web"] = "web";
})(PostTrackingReminderNotificationsPlatformEnum = exports.PostTrackingReminderNotificationsPlatformEnum || (exports.PostTrackingReminderNotificationsPlatformEnum = {}));