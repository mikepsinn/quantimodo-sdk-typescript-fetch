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

export interface GetAccessTokenRequest {
    grantType: string;
    code: string;
    responseType: string;
    scope: string;
    clientId?: string;
    clientSecret?: string;
    redirectUri?: string;
    state?: string;
    platform?: GetAccessTokenPlatformEnum;
}

export interface GetOauthAuthorizationCodeRequest {
    responseType: string;
    scope: string;
    clientId?: string;
    clientSecret?: string;
    redirectUri?: string;
    state?: string;
    platform?: GetOauthAuthorizationCodePlatformEnum;
}

/**
 * 
 */
export class AuthenticationApi extends runtime.BaseAPI {

    /**
     * Client provides authorization token obtained from /api/v3/oauth2/authorize to this endpoint and receives an access token. Access token can then be used to query API endpoints. ### Request Access Token After user approves your access to the given scope form the https:/app.quantimo.do/v1/oauth2/authorize endpoint, you\'ll receive an authorization code to request an access token. This time make a `POST` request to `/api/v1/oauth/access_token` with parameters including: * `grant_type` Can be `authorization_code` or `refresh_token` since we are getting the `access_token` for the first time we don\'t have a `refresh_token` so this must be `authorization_code`. * `code` Authorization code you received with the previous request. * `redirect_uri` Your application\'s redirect url. ### Refreshing Access Token Access tokens expire at some point, to continue using our api you need to refresh them with `refresh_token` you received along with the `access_token`. To do this make a `POST` request to `/api/v1/oauth/access_token` with correct parameters, which are: * `grant_type` This time grant type must be `refresh_token` since we have it. * `clientId` Your application\'s client id. * `client_secret` Your application\'s client secret. * `refresh_token` The refresh token you received with the `access_token`. Every request you make to this endpoint will give you a new refresh token and make the old one expired. So you can keep getting new access tokens with new refresh tokens. ### Using Access Token Currently we support 2 ways for this, you can\'t use both at the same time. * Adding access token to the request header as `Authorization: Bearer {access_token}` * Adding to the url as a query parameter `?access_token={access_token}` You can read more about OAuth2 from [here](http://oauth.net/2/)
     * Get a user access token
     */
    async getAccessTokenRaw(requestParameters: GetAccessTokenRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.grantType === null || requestParameters.grantType === undefined) {
            throw new runtime.RequiredError('grantType','Required parameter requestParameters.grantType was null or undefined when calling getAccessToken.');
        }

        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code','Required parameter requestParameters.code was null or undefined when calling getAccessToken.');
        }

        if (requestParameters.responseType === null || requestParameters.responseType === undefined) {
            throw new runtime.RequiredError('responseType','Required parameter requestParameters.responseType was null or undefined when calling getAccessToken.');
        }

        if (requestParameters.scope === null || requestParameters.scope === undefined) {
            throw new runtime.RequiredError('scope','Required parameter requestParameters.scope was null or undefined when calling getAccessToken.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.clientId !== undefined) {
            queryParameters['clientId'] = requestParameters.clientId;
        }

        if (requestParameters.clientSecret !== undefined) {
            queryParameters['client_secret'] = requestParameters.clientSecret;
        }

        if (requestParameters.grantType !== undefined) {
            queryParameters['grant_type'] = requestParameters.grantType;
        }

        if (requestParameters.code !== undefined) {
            queryParameters['code'] = requestParameters.code;
        }

        if (requestParameters.responseType !== undefined) {
            queryParameters['response_type'] = requestParameters.responseType;
        }

        if (requestParameters.scope !== undefined) {
            queryParameters['scope'] = requestParameters.scope;
        }

        if (requestParameters.redirectUri !== undefined) {
            queryParameters['redirect_uri'] = requestParameters.redirectUri;
        }

        if (requestParameters.state !== undefined) {
            queryParameters['state'] = requestParameters.state;
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
                headerParameters["Authorization"] = this.configuration.accessToken("quantimodo_oauth2", ["basic"]);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/v3/oauth2/token`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Client provides authorization token obtained from /api/v3/oauth2/authorize to this endpoint and receives an access token. Access token can then be used to query API endpoints. ### Request Access Token After user approves your access to the given scope form the https:/app.quantimo.do/v1/oauth2/authorize endpoint, you\'ll receive an authorization code to request an access token. This time make a `POST` request to `/api/v1/oauth/access_token` with parameters including: * `grant_type` Can be `authorization_code` or `refresh_token` since we are getting the `access_token` for the first time we don\'t have a `refresh_token` so this must be `authorization_code`. * `code` Authorization code you received with the previous request. * `redirect_uri` Your application\'s redirect url. ### Refreshing Access Token Access tokens expire at some point, to continue using our api you need to refresh them with `refresh_token` you received along with the `access_token`. To do this make a `POST` request to `/api/v1/oauth/access_token` with correct parameters, which are: * `grant_type` This time grant type must be `refresh_token` since we have it. * `clientId` Your application\'s client id. * `client_secret` Your application\'s client secret. * `refresh_token` The refresh token you received with the `access_token`. Every request you make to this endpoint will give you a new refresh token and make the old one expired. So you can keep getting new access tokens with new refresh tokens. ### Using Access Token Currently we support 2 ways for this, you can\'t use both at the same time. * Adding access token to the request header as `Authorization: Bearer {access_token}` * Adding to the url as a query parameter `?access_token={access_token}` You can read more about OAuth2 from [here](http://oauth.net/2/)
     * Get a user access token
     */
    async getAccessToken(requestParameters: GetAccessTokenRequest): Promise<void> {
        await this.getAccessTokenRaw(requestParameters);
    }

    /**
     * You can implement OAuth2 authentication to your application using our **OAuth2** endpoints.  You need to redirect users to `/api/v3/oauth2/authorize` endpoint to get an authorization code and include the parameters below.   This page will ask the user if they want to allow a client\'s application to submit or obtain data from their QM account. It will redirect the user to the url provided by the client application with the code as a query parameter or error in case of an error. See the /api/v1/oauth/access_token endpoint for the next steps.
     * Request Authorization Code
     */
    async getOauthAuthorizationCodeRaw(requestParameters: GetOauthAuthorizationCodeRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.responseType === null || requestParameters.responseType === undefined) {
            throw new runtime.RequiredError('responseType','Required parameter requestParameters.responseType was null or undefined when calling getOauthAuthorizationCode.');
        }

        if (requestParameters.scope === null || requestParameters.scope === undefined) {
            throw new runtime.RequiredError('scope','Required parameter requestParameters.scope was null or undefined when calling getOauthAuthorizationCode.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.clientId !== undefined) {
            queryParameters['clientId'] = requestParameters.clientId;
        }

        if (requestParameters.clientSecret !== undefined) {
            queryParameters['client_secret'] = requestParameters.clientSecret;
        }

        if (requestParameters.responseType !== undefined) {
            queryParameters['response_type'] = requestParameters.responseType;
        }

        if (requestParameters.scope !== undefined) {
            queryParameters['scope'] = requestParameters.scope;
        }

        if (requestParameters.redirectUri !== undefined) {
            queryParameters['redirect_uri'] = requestParameters.redirectUri;
        }

        if (requestParameters.state !== undefined) {
            queryParameters['state'] = requestParameters.state;
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
                headerParameters["Authorization"] = this.configuration.accessToken("quantimodo_oauth2", ["basic"]);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/v3/oauth2/authorize`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * You can implement OAuth2 authentication to your application using our **OAuth2** endpoints.  You need to redirect users to `/api/v3/oauth2/authorize` endpoint to get an authorization code and include the parameters below.   This page will ask the user if they want to allow a client\'s application to submit or obtain data from their QM account. It will redirect the user to the url provided by the client application with the code as a query parameter or error in case of an error. See the /api/v1/oauth/access_token endpoint for the next steps.
     * Request Authorization Code
     */
    async getOauthAuthorizationCode(requestParameters: GetOauthAuthorizationCodeRequest): Promise<void> {
        await this.getOauthAuthorizationCodeRaw(requestParameters);
    }

    /**
     * Post GoogleIdToken
     * Post GoogleIdToken
     */
    async postGoogleIdTokenRaw(): Promise<runtime.ApiResponse<void>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v3/googleIdToken`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Post GoogleIdToken
     * Post GoogleIdToken
     */
    async postGoogleIdToken(): Promise<void> {
        await this.postGoogleIdTokenRaw();
    }

}

/**
    * @export
    * @enum {string}
    */
export enum GetAccessTokenPlatformEnum {
    Chrome = 'chrome',
    Android = 'android',
    Ios = 'ios',
    Web = 'web'
}
/**
    * @export
    * @enum {string}
    */
export enum GetOauthAuthorizationCodePlatformEnum {
    Chrome = 'chrome',
    Android = 'android',
    Ios = 'ios',
    Web = 'web'
}