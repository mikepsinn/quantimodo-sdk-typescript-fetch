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
import { AuthorizedClients, Card } from './';
/**
 *
 * @export
 * @interface GetSharesResponse
 */
export interface GetSharesResponse {
    /**
     *
     * @type {AuthorizedClients}
     * @memberof GetSharesResponse
     */
    authorizedClients?: AuthorizedClients;
    /**
     * Can be used as body of help info popup
     * @type {string}
     * @memberof GetSharesResponse
     */
    description: string;
    /**
     * Can be used as title in help info popup
     * @type {string}
     * @memberof GetSharesResponse
     */
    summary: string;
    /**
     * Array of error objects with message property
     * @type {Array<Error>}
     * @memberof GetSharesResponse
     */
    errors?: Array<Error>;
    /**
     * ex. OK or ERROR
     * @type {string}
     * @memberof GetSharesResponse
     */
    status?: string;
    /**
     * true or false
     * @type {boolean}
     * @memberof GetSharesResponse
     */
    success?: boolean;
    /**
     * Response code such as 200
     * @type {number}
     * @memberof GetSharesResponse
     */
    code?: number;
    /**
     * A super neat url you might want to share with your users!
     * @type {string}
     * @memberof GetSharesResponse
     */
    link?: string;
    /**
     *
     * @type {Card}
     * @memberof GetSharesResponse
     */
    card?: Card;
}
export declare function GetSharesResponseFromJSON(json: any): GetSharesResponse;
export declare function GetSharesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetSharesResponse;
export declare function GetSharesResponseToJSON(value?: GetSharesResponse | null): any;
