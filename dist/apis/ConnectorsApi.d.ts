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
import { GetConnectorsResponse } from '../models';
export interface ConnectConnectorRequest {
    connectorName: ConnectConnectorConnectorNameEnum;
    userId?: number;
}
export interface DisconnectConnectorRequest {
    connectorName: DisconnectConnectorConnectorNameEnum;
}
export interface GetConnectorsRequest {
    clientId?: string;
    platform?: GetConnectorsPlatformEnum;
}
export interface GetIntegrationJsRequest {
    clientId?: string;
    platform?: GetIntegrationJsPlatformEnum;
}
export interface GetMobileConnectPageRequest {
    userId?: number;
}
export interface UpdateConnectorRequest {
    connectorName: UpdateConnectorConnectorNameEnum;
    userId?: number;
}
/**
 *
 */
export declare class ConnectorsApi extends runtime.BaseAPI {
    /**
     * Attempt to obtain a token from the data provider, store it in the database. With this, the connector to continue to obtain new user data until the token is revoked.
     * Obtain a token from 3rd party data source
     */
    connectConnectorRaw(requestParameters: ConnectConnectorRequest): Promise<runtime.ApiResponse<void>>;
    /**
     * Attempt to obtain a token from the data provider, store it in the database. With this, the connector to continue to obtain new user data until the token is revoked.
     * Obtain a token from 3rd party data source
     */
    connectConnector(requestParameters: ConnectConnectorRequest): Promise<void>;
    /**
     * The disconnect method deletes any stored tokens or connection information from the connectors database.
     * Delete stored connection info
     */
    disconnectConnectorRaw(requestParameters: DisconnectConnectorRequest): Promise<runtime.ApiResponse<void>>;
    /**
     * The disconnect method deletes any stored tokens or connection information from the connectors database.
     * Delete stored connection info
     */
    disconnectConnector(requestParameters: DisconnectConnectorRequest): Promise<void>;
    /**
     * A connector pulls data from other data providers using their API or a screenscraper. Returns a list of all available connectors and information about them such as their id, name, whether the user has provided access, logo url, connection instructions, and the update history.
     * List of Connectors
     */
    getConnectorsRaw(requestParameters: GetConnectorsRequest): Promise<runtime.ApiResponse<GetConnectorsResponse>>;
    /**
     * A connector pulls data from other data providers using their API or a screenscraper. Returns a list of all available connectors and information about them such as their id, name, whether the user has provided access, logo url, connection instructions, and the update history.
     * List of Connectors
     */
    getConnectors(requestParameters: GetConnectorsRequest): Promise<GetConnectorsResponse>;
    /**
     * Get embeddable connect javascript. Usage:   - Embedding in applications with popups for 3rd-party authentication windows.     Use `qmSetupInPopup` function after connecting `connect.js`.   - Embedding in applications with popups for 3rd-party authentication windows.     Requires a selector to block. It will be embedded in this block.     Use `qmSetupOnPage` function after connecting `connect.js`.   - Embedding in mobile applications without popups for 3rd-party authentication.     Use `qmSetupOnMobile` function after connecting `connect.js`.     If using in a Cordova application call  `qmSetupOnIonic` function after connecting `connect.js`.
     * Get embeddable connect javascript
     */
    getIntegrationJsRaw(requestParameters: GetIntegrationJsRequest): Promise<runtime.ApiResponse<void>>;
    /**
     * Get embeddable connect javascript. Usage:   - Embedding in applications with popups for 3rd-party authentication windows.     Use `qmSetupInPopup` function after connecting `connect.js`.   - Embedding in applications with popups for 3rd-party authentication windows.     Requires a selector to block. It will be embedded in this block.     Use `qmSetupOnPage` function after connecting `connect.js`.   - Embedding in mobile applications without popups for 3rd-party authentication.     Use `qmSetupOnMobile` function after connecting `connect.js`.     If using in a Cordova application call  `qmSetupOnIonic` function after connecting `connect.js`.
     * Get embeddable connect javascript
     */
    getIntegrationJs(requestParameters: GetIntegrationJsRequest): Promise<void>;
    /**
     * This page is designed to be opened in a webview.  Instead of using popup authentication boxes, it uses redirection. You can include the user\'s access_token as a URL parameter like https://app.quantimo.do/api/v3/connect/mobile?access_token=123
     * Mobile connect page
     */
    getMobileConnectPageRaw(requestParameters: GetMobileConnectPageRequest): Promise<runtime.ApiResponse<void>>;
    /**
     * This page is designed to be opened in a webview.  Instead of using popup authentication boxes, it uses redirection. You can include the user\'s access_token as a URL parameter like https://app.quantimo.do/api/v3/connect/mobile?access_token=123
     * Mobile connect page
     */
    getMobileConnectPage(requestParameters: GetMobileConnectPageRequest): Promise<void>;
    /**
     * The update method tells the QM Connector Framework to check with the data provider (such as Fitbit or MyFitnessPal) and retrieve any new measurements available.
     * Sync with data source
     */
    updateConnectorRaw(requestParameters: UpdateConnectorRequest): Promise<runtime.ApiResponse<void>>;
    /**
     * The update method tells the QM Connector Framework to check with the data provider (such as Fitbit or MyFitnessPal) and retrieve any new measurements available.
     * Sync with data source
     */
    updateConnector(requestParameters: UpdateConnectorRequest): Promise<void>;
}
/**
    * @export
    * @enum {string}
    */
export declare enum ConnectConnectorConnectorNameEnum {
    Facebook = "facebook",
    Fitbit = "fitbit",
    Github = "github",
    Googlecalendar = "googlecalendar",
    Googlefit = "googlefit",
    Medhelper = "medhelper",
    Mint = "mint",
    Moodpanda = "moodpanda",
    Moodscope = "moodscope",
    Myfitnesspal = "myfitnesspal",
    Mynetdiary = "mynetdiary",
    Netatmo = "netatmo",
    Rescuetime = "rescuetime",
    Runkeeper = "runkeeper",
    Slack = "slack",
    Sleepcloud = "sleepcloud",
    Slice = "slice",
    Up = "up",
    Whatpulse = "whatpulse",
    Withings = "withings",
    Worldweatheronline = "worldweatheronline",
    Foursquare = "foursquare",
    Strava = "strava",
    Gmail = "gmail"
}
/**
    * @export
    * @enum {string}
    */
export declare enum DisconnectConnectorConnectorNameEnum {
    Facebook = "facebook",
    Fitbit = "fitbit",
    Github = "github",
    Googlecalendar = "googlecalendar",
    Googlefit = "googlefit",
    Medhelper = "medhelper",
    Mint = "mint",
    Moodpanda = "moodpanda",
    Moodscope = "moodscope",
    Myfitnesspal = "myfitnesspal",
    Mynetdiary = "mynetdiary",
    Netatmo = "netatmo",
    Rescuetime = "rescuetime",
    Runkeeper = "runkeeper",
    Slack = "slack",
    Sleepcloud = "sleepcloud",
    Slice = "slice",
    Up = "up",
    Whatpulse = "whatpulse",
    Withings = "withings",
    Worldweatheronline = "worldweatheronline",
    Foursquare = "foursquare",
    Strava = "strava",
    Gmail = "gmail"
}
/**
    * @export
    * @enum {string}
    */
export declare enum GetConnectorsPlatformEnum {
    Chrome = "chrome",
    Android = "android",
    Ios = "ios",
    Web = "web"
}
/**
    * @export
    * @enum {string}
    */
export declare enum GetIntegrationJsPlatformEnum {
    Chrome = "chrome",
    Android = "android",
    Ios = "ios",
    Web = "web"
}
/**
    * @export
    * @enum {string}
    */
export declare enum UpdateConnectorConnectorNameEnum {
    Facebook = "facebook",
    Fitbit = "fitbit",
    Github = "github",
    Googlecalendar = "googlecalendar",
    Googlefit = "googlefit",
    Medhelper = "medhelper",
    Mint = "mint",
    Moodpanda = "moodpanda",
    Moodscope = "moodscope",
    Myfitnesspal = "myfitnesspal",
    Mynetdiary = "mynetdiary",
    Netatmo = "netatmo",
    Rescuetime = "rescuetime",
    Runkeeper = "runkeeper",
    Slack = "slack",
    Sleepcloud = "sleepcloud",
    Slice = "slice",
    Up = "up",
    Whatpulse = "whatpulse",
    Withings = "withings",
    Worldweatheronline = "worldweatheronline",
    Foursquare = "foursquare",
    Strava = "strava",
    Gmail = "gmail"
}