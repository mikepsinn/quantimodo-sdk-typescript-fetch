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
import { Button } from './';
/**
 *
 * @export
 * @interface ExplanationStartTracking
 */
export interface ExplanationStartTracking {
    /**
     *
     * @type {Button}
     * @memberof ExplanationStartTracking
     */
    button: Button;
    /**
     * Ex: The more data I have the more accurate your results will be so track regularly!
     * @type {string}
     * @memberof ExplanationStartTracking
     */
    description: string;
    /**
     * Ex: Improve Accuracy
     * @type {string}
     * @memberof ExplanationStartTracking
     */
    title: string;
}
export declare function ExplanationStartTrackingFromJSON(json: any): ExplanationStartTracking;
export declare function ExplanationStartTrackingFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExplanationStartTracking;
export declare function ExplanationStartTrackingToJSON(value?: ExplanationStartTracking | null): any;