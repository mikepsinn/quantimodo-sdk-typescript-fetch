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
 * @interface Activity
 */
export interface Activity {
    /**
     * What do you expect?
     * @type {number}
     * @memberof Activity
     */
    id: number;
    /**
     * What do you expect?
     * @type {number}
     * @memberof Activity
     */
    userId: number;
    /**
     * What do you expect?
     * @type {string}
     * @memberof Activity
     */
    component: string;
    /**
     * What do you expect?
     * @type {string}
     * @memberof Activity
     */
    type: string;
    /**
     * What do you expect?
     * @type {string}
     * @memberof Activity
     */
    action: string;
    /**
     * What do you expect?
     * @type {string}
     * @memberof Activity
     */
    content: string;
    /**
     * What do you expect?
     * @type {string}
     * @memberof Activity
     */
    primaryLink: string;
    /**
     * What do you expect?
     * @type {number}
     * @memberof Activity
     */
    itemId: number;
    /**
     * What do you expect?
     * @type {number}
     * @memberof Activity
     */
    secondaryItemId: number;
    /**
     * What do you expect?
     * @type {string}
     * @memberof Activity
     */
    dateRecorded: string;
    /**
     * What do you expect?
     * @type {number}
     * @memberof Activity
     */
    hideSitewide: number;
    /**
     * What do you expect?
     * @type {number}
     * @memberof Activity
     */
    mpttLeft: number;
    /**
     * What do you expect?
     * @type {number}
     * @memberof Activity
     */
    mpttRight: number;
    /**
     * What do you expect?
     * @type {number}
     * @memberof Activity
     */
    isSpam: number;
    /**
     * Additional activity key-value data
     * @type {Array<object>}
     * @memberof Activity
     */
    metaDataArray?: Array<object>;
}
export declare function ActivityFromJSON(json: any): Activity;
export declare function ActivityFromJSONTyped(json: any, ignoreDiscriminator: boolean): Activity;
export declare function ActivityToJSON(value?: Activity | null): any;
