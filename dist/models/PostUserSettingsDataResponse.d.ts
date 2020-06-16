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
import { Card } from './';
/**
 *
 * @export
 * @interface PostUserSettingsDataResponse
 */
export interface PostUserSettingsDataResponse {
    /**
     * Ex: 1
     * @type {number}
     * @memberof PostUserSettingsDataResponse
     */
    purchaseId?: number;
    /**
     * Can be used as body of help info popup
     * @type {string}
     * @memberof PostUserSettingsDataResponse
     */
    description?: string;
    /**
     * Can be used as title in help info popup
     * @type {string}
     * @memberof PostUserSettingsDataResponse
     */
    summary?: string;
    /**
     * Array of error objects with message property
     * @type {Array<Error>}
     * @memberof PostUserSettingsDataResponse
     */
    errors?: Array<Error>;
    /**
     * ex. OK or ERROR
     * @type {string}
     * @memberof PostUserSettingsDataResponse
     */
    status?: string;
    /**
     * true or false
     * @type {boolean}
     * @memberof PostUserSettingsDataResponse
     */
    success?: boolean;
    /**
     * Response code such as 200
     * @type {number}
     * @memberof PostUserSettingsDataResponse
     */
    code?: number;
    /**
     * A super neat url you might want to share with your users!
     * @type {string}
     * @memberof PostUserSettingsDataResponse
     */
    link?: string;
    /**
     *
     * @type {Card}
     * @memberof PostUserSettingsDataResponse
     */
    card?: Card;
}
export declare function PostUserSettingsDataResponseFromJSON(json: any): PostUserSettingsDataResponse;
export declare function PostUserSettingsDataResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostUserSettingsDataResponse;
export declare function PostUserSettingsDataResponseToJSON(value?: PostUserSettingsDataResponse | null): any;
