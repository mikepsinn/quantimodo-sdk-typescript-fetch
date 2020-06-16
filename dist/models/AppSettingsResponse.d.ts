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
import { AppSettings, Card } from './';
/**
 *
 * @export
 * @interface AppSettingsResponse
 */
export interface AppSettingsResponse {
    /**
     *
     * @type {AppSettings}
     * @memberof AppSettingsResponse
     */
    appSettings?: AppSettings;
    /**
     * Can be used as body of help info popup
     * @type {string}
     * @memberof AppSettingsResponse
     */
    description: string;
    /**
     * Can be used as title in help info popup
     * @type {string}
     * @memberof AppSettingsResponse
     */
    summary: string;
    /**
     * Array of error objects with message property
     * @type {Array<Error>}
     * @memberof AppSettingsResponse
     */
    errors?: Array<Error>;
    /**
     * ex. OK or ERROR
     * @type {string}
     * @memberof AppSettingsResponse
     */
    status?: string;
    /**
     * true or false
     * @type {boolean}
     * @memberof AppSettingsResponse
     */
    success?: boolean;
    /**
     * Response code such as 200
     * @type {number}
     * @memberof AppSettingsResponse
     */
    code?: number;
    /**
     * A super neat url you might want to share with your users!
     * @type {string}
     * @memberof AppSettingsResponse
     */
    link?: string;
    /**
     *
     * @type {Card}
     * @memberof AppSettingsResponse
     */
    card?: Card;
}
export declare function AppSettingsResponseFromJSON(json: any): AppSettingsResponse;
export declare function AppSettingsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppSettingsResponse;
export declare function AppSettingsResponseToJSON(value?: AppSettingsResponse | null): any;
