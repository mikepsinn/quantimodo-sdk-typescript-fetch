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
import { Card, Variable } from './';
/**
 *
 * @export
 * @interface PostMeasurementsDataResponse
 */
export interface PostMeasurementsDataResponse {
    /**
     *
     * @type {Array<Variable>}
     * @memberof PostMeasurementsDataResponse
     */
    userVariables?: Array<Variable>;
    /**
     * Can be used as body of help info popup
     * @type {string}
     * @memberof PostMeasurementsDataResponse
     */
    description?: string;
    /**
     * Can be used as title in help info popup
     * @type {string}
     * @memberof PostMeasurementsDataResponse
     */
    summary?: string;
    /**
     * Array of error objects with message property
     * @type {Array<Error>}
     * @memberof PostMeasurementsDataResponse
     */
    errors?: Array<Error>;
    /**
     * ex. OK or ERROR
     * @type {string}
     * @memberof PostMeasurementsDataResponse
     */
    status?: string;
    /**
     * true or false
     * @type {boolean}
     * @memberof PostMeasurementsDataResponse
     */
    success?: boolean;
    /**
     * Response code such as 200
     * @type {number}
     * @memberof PostMeasurementsDataResponse
     */
    code?: number;
    /**
     * A super neat url you might want to share with your users!
     * @type {string}
     * @memberof PostMeasurementsDataResponse
     */
    link?: string;
    /**
     *
     * @type {Card}
     * @memberof PostMeasurementsDataResponse
     */
    card?: Card;
}
export declare function PostMeasurementsDataResponseFromJSON(json: any): PostMeasurementsDataResponse;
export declare function PostMeasurementsDataResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostMeasurementsDataResponse;
export declare function PostMeasurementsDataResponseToJSON(value?: PostMeasurementsDataResponse | null): any;
