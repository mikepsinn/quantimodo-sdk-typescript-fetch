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
/**
 *
 * @export
 * @interface Pair
 */
export interface Pair {
    /**
     * Ex: 101341.66666667
     * @type {number}
     * @memberof Pair
     */
    causeMeasurement: number;
    /**
     * Ex: 101341.66666667
     * @type {number}
     * @memberof Pair
     */
    causeMeasurementValue: number;
    /**
     * Ex: mg
     * @type {string}
     * @memberof Pair
     */
    causeVariableUnitAbbreviatedName: string;
    /**
     * Ex: 7.98
     * @type {number}
     * @memberof Pair
     */
    effectMeasurement: number;
    /**
     * Ex: 7.98
     * @type {number}
     * @memberof Pair
     */
    effectMeasurementValue: number;
    /**
     * Ex: %
     * @type {string}
     * @memberof Pair
     */
    effectVariableUnitAbbreviatedName: string;
    /**
     * Ex: 2015-08-06 15:49:02 UTC ISO 8601 YYYY-MM-DDThh:mm:ss
     * @type {string}
     * @memberof Pair
     */
    eventAt?: string;
    /**
     * Ex: 1438876142
     * @type {number}
     * @memberof Pair
     */
    eventAtUnixTime?: number;
    /**
     * Ex: 2015-08-06 15:49:02 UTC ISO 8601 YYYY-MM-DDThh:mm:ss
     * @type {string}
     * @memberof Pair
     */
    startTimeString?: string;
    /**
     * Ex: 1464937200
     * @type {number}
     * @memberof Pair
     */
    timestamp: number;
}
export declare function PairFromJSON(json: any): Pair;
export declare function PairFromJSONTyped(json: any, ignoreDiscriminator: boolean): Pair;
export declare function PairToJSON(value?: Pair | null): any;
