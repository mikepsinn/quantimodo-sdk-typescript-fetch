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
    GroupsMembersResponse,
    GroupsMembersResponseFromJSON,
    GroupsMembersResponseToJSON,
    GroupsResponse,
    GroupsResponseFromJSON,
    GroupsResponseToJSON,
} from '../models';

export interface GetGroupsRequest {
    sort?: string;
    limit?: number;
    offset?: number;
    updatedAt?: string;
    userId?: number;
    createdAt?: string;
    id?: number;
    clientId?: string;
    platform?: GetGroupsPlatformEnum;
}

export interface GetGroupsMembersRequest {
    sort?: string;
    limit?: number;
    offset?: number;
    updatedAt?: string;
    userId?: number;
    createdAt?: string;
    id?: number;
    clientId?: string;
    platform?: GetGroupsMembersPlatformEnum;
}

export interface PostGroupsRequest {
    sort?: string;
    limit?: number;
    offset?: number;
    updatedAt?: string;
    userId?: number;
    createdAt?: string;
    id?: number;
    clientId?: string;
    platform?: PostGroupsPlatformEnum;
}

export interface PostGroupsMembersRequest {
    sort?: string;
    limit?: number;
    offset?: number;
    updatedAt?: string;
    userId?: number;
    createdAt?: string;
    id?: number;
    clientId?: string;
    platform?: PostGroupsMembersPlatformEnum;
}

/**
 * 
 */
export class GroupsApi extends runtime.BaseAPI {

    /**
     * Get Groups
     * Get Groups
     */
    async getGroupsRaw(requestParameters: GetGroupsRequest): Promise<runtime.ApiResponse<Array<GroupsResponse>>> {
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
            path: `/v3/groups`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(GroupsResponseFromJSON));
    }

    /**
     * Get Groups
     * Get Groups
     */
    async getGroups(requestParameters: GetGroupsRequest): Promise<Array<GroupsResponse>> {
        const response = await this.getGroupsRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get GroupsMembers
     * Get GroupsMembers
     */
    async getGroupsMembersRaw(requestParameters: GetGroupsMembersRequest): Promise<runtime.ApiResponse<Array<GroupsMembersResponse>>> {
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
            path: `/v3/groupsMembers`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(GroupsMembersResponseFromJSON));
    }

    /**
     * Get GroupsMembers
     * Get GroupsMembers
     */
    async getGroupsMembers(requestParameters: GetGroupsMembersRequest): Promise<Array<GroupsMembersResponse>> {
        const response = await this.getGroupsMembersRaw(requestParameters);
        return await response.value();
    }

    /**
     * Post Groups
     * Post Groups
     */
    async postGroupsRaw(requestParameters: PostGroupsRequest): Promise<runtime.ApiResponse<Array<GroupsResponse>>> {
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
            path: `/v3/groups`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(GroupsResponseFromJSON));
    }

    /**
     * Post Groups
     * Post Groups
     */
    async postGroups(requestParameters: PostGroupsRequest): Promise<Array<GroupsResponse>> {
        const response = await this.postGroupsRaw(requestParameters);
        return await response.value();
    }

    /**
     * Post GroupsMembers
     * Post GroupsMembers
     */
    async postGroupsMembersRaw(requestParameters: PostGroupsMembersRequest): Promise<runtime.ApiResponse<Array<GroupsMembersResponse>>> {
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
            path: `/v3/groupsMembers`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(GroupsMembersResponseFromJSON));
    }

    /**
     * Post GroupsMembers
     * Post GroupsMembers
     */
    async postGroupsMembers(requestParameters: PostGroupsMembersRequest): Promise<Array<GroupsMembersResponse>> {
        const response = await this.postGroupsMembersRaw(requestParameters);
        return await response.value();
    }

}

/**
    * @export
    * @enum {string}
    */
export enum GetGroupsPlatformEnum {
    Chrome = 'chrome',
    Android = 'android',
    Ios = 'ios',
    Web = 'web'
}
/**
    * @export
    * @enum {string}
    */
export enum GetGroupsMembersPlatformEnum {
    Chrome = 'chrome',
    Android = 'android',
    Ios = 'ios',
    Web = 'web'
}
/**
    * @export
    * @enum {string}
    */
export enum PostGroupsPlatformEnum {
    Chrome = 'chrome',
    Android = 'android',
    Ios = 'ios',
    Web = 'web'
}
/**
    * @export
    * @enum {string}
    */
export enum PostGroupsMembersPlatformEnum {
    Chrome = 'chrome',
    Android = 'android',
    Ios = 'ios',
    Web = 'web'
}