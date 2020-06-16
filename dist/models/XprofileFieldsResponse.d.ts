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
import { Card, Image, XprofileField } from './';
/**
 *
 * @export
 * @interface XprofileFieldsResponse
 */
export interface XprofileFieldsResponse {
    /**
     *
     * @type {Array<XprofileField>}
     * @memberof XprofileFieldsResponse
     */
    xprofileFields: Array<XprofileField>;
    /**
     * XprofileField
     * @type {string}
     * @memberof XprofileFieldsResponse
     */
    description?: string;
    /**
     * XprofileField
     * @type {string}
     * @memberof XprofileFieldsResponse
     */
    summary?: string;
    /**
     *
     * @type {Image}
     * @memberof XprofileFieldsResponse
     */
    image?: Image;
    /**
     * Square icon png url
     * @type {string}
     * @memberof XprofileFieldsResponse
     */
    avatar?: string;
    /**
     * Ex: ion-ios-person
     * @type {string}
     * @memberof XprofileFieldsResponse
     */
    ionIcon?: string;
    /**
     * Embeddable list of study summaries with explanation at the top
     * @type {string}
     * @memberof XprofileFieldsResponse
     */
    html?: string;
    /**
     * Array of error objects with message property
     * @type {Array<Error>}
     * @memberof XprofileFieldsResponse
     */
    errors?: Array<Error>;
    /**
     * ex. OK or ERROR
     * @type {string}
     * @memberof XprofileFieldsResponse
     */
    status?: string;
    /**
     * true or false
     * @type {boolean}
     * @memberof XprofileFieldsResponse
     */
    success?: boolean;
    /**
     * Response code such as 200
     * @type {number}
     * @memberof XprofileFieldsResponse
     */
    code?: number;
    /**
     * A super neat url you might want to share with your users!
     * @type {string}
     * @memberof XprofileFieldsResponse
     */
    link?: string;
    /**
     *
     * @type {Card}
     * @memberof XprofileFieldsResponse
     */
    card?: Card;
}
export declare function XprofileFieldsResponseFromJSON(json: any): XprofileFieldsResponse;
export declare function XprofileFieldsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): XprofileFieldsResponse;
export declare function XprofileFieldsResponseToJSON(value?: XprofileFieldsResponse | null): any;
