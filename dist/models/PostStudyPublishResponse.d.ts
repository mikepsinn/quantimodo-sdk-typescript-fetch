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
 * @interface PostStudyPublishResponse
 */
export interface PostStudyPublishResponse {
    /**
     * Can be used as body of help info popup
     * @type {string}
     * @memberof PostStudyPublishResponse
     */
    description?: string;
    /**
     * Can be used as title in help info popup
     * @type {string}
     * @memberof PostStudyPublishResponse
     */
    summary?: string;
    /**
     * Array of error objects with message property
     * @type {Array<Error>}
     * @memberof PostStudyPublishResponse
     */
    errors?: Array<Error>;
    /**
     * ex. OK or ERROR
     * @type {string}
     * @memberof PostStudyPublishResponse
     */
    status?: string;
    /**
     * true or false
     * @type {boolean}
     * @memberof PostStudyPublishResponse
     */
    success?: boolean;
    /**
     * Response code such as 200
     * @type {number}
     * @memberof PostStudyPublishResponse
     */
    code?: number;
    /**
     * A super neat url you might want to share with your users!
     * @type {string}
     * @memberof PostStudyPublishResponse
     */
    link?: string;
    /**
     *
     * @type {Card}
     * @memberof PostStudyPublishResponse
     */
    card?: Card;
}
export declare function PostStudyPublishResponseFromJSON(json: any): PostStudyPublishResponse;
export declare function PostStudyPublishResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostStudyPublishResponse;
export declare function PostStudyPublishResponseToJSON(value?: PostStudyPublishResponse | null): any;
