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


import * as runtime from '../runtime';
import {
    DeviceToken,
    DeviceTokenFromJSON,
    DeviceTokenToJSON,
    NotificationsResponse,
    NotificationsResponseFromJSON,
    NotificationsResponseToJSON,
} from '../models';

export interface GetNotificationsRequest {
    sort?: string;
    limit?: number;
    offset?: number;
    updatedAt?: string;
    userId?: number;
    createdAt?: string;
    id?: number;
    clientId?: string;
    platform?: GetNotificationsPlatformEnum;
}

export interface PostDeviceTokenRequest {
    body: DeviceToken;
}

export interface PostNotificationsRequest {
    sort?: string;
    limit?: number;
    offset?: number;
    updatedAt?: string;
    userId?: number;
    createdAt?: string;
    id?: number;
    clientId?: string;
    platform?: PostNotificationsPlatformEnum;
}

/**
 * 
 */
export class NotificationsApi extends runtime.BaseAPI {

    /**
     * Get NotificationPreferences
     * Get NotificationPreferences
     */
    async getNotificationPreferencesRaw(): Promise<runtime.ApiResponse<void>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v3/notificationPreferences`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Get NotificationPreferences
     * Get NotificationPreferences
     */
    async getNotificationPreferences(): Promise<void> {
        await this.getNotificationPreferencesRaw();
    }

    /**
     * Get Notifications
     * Get Notifications
     */
    async getNotificationsRaw(requestParameters: GetNotificationsRequest): Promise<runtime.ApiResponse<Array<NotificationsResponse>>> {
        const queryParameters: runtime.HTTPQuery = {};

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

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["access_token"] = this.configuration.apiKey("access_token"); // access_token authentication
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("quantimodo_oauth2", ["readmeasurements"]);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/v3/notifications`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(NotificationsResponseFromJSON));
    }

    /**
     * Get Notifications
     * Get Notifications
     */
    async getNotifications(requestParameters: GetNotificationsRequest): Promise<Array<NotificationsResponse>> {
        const response = await this.getNotificationsRaw(requestParameters);
        return await response.value();
    }

    /**
     * Post user token for Android, iOS, or web push notifications
     * Post DeviceTokens
     */
    async postDeviceTokenRaw(requestParameters: PostDeviceTokenRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling postDeviceToken.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/v3/deviceTokens`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: DeviceTokenToJSON(requestParameters.body),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Post user token for Android, iOS, or web push notifications
     * Post DeviceTokens
     */
    async postDeviceToken(requestParameters: PostDeviceTokenRequest): Promise<void> {
        await this.postDeviceTokenRaw(requestParameters);
    }

    /**
     * Post Notifications
     * Post Notifications
     */
    async postNotificationsRaw(requestParameters: PostNotificationsRequest): Promise<runtime.ApiResponse<Array<NotificationsResponse>>> {
        const queryParameters: runtime.HTTPQuery = {};

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

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["access_token"] = this.configuration.apiKey("access_token"); // access_token authentication
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("quantimodo_oauth2", ["readmeasurements"]);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/v3/notifications`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(NotificationsResponseFromJSON));
    }

    /**
     * Post Notifications
     * Post Notifications
     */
    async postNotifications(requestParameters: PostNotificationsRequest): Promise<Array<NotificationsResponse>> {
        const response = await this.postNotificationsRaw(requestParameters);
        return await response.value();
    }

}

/**
    * @export
    * @enum {string}
    */
export enum GetNotificationsPlatformEnum {
    Chrome = 'chrome',
    Android = 'android',
    Ios = 'ios',
    Web = 'web'
}
/**
    * @export
    * @enum {string}
    */
export enum PostNotificationsPlatformEnum {
    Chrome = 'chrome',
    Android = 'android',
    Ios = 'ios',
    Web = 'web'
}
