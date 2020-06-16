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
import { Card, Image, MessagesRecipient } from './';
/**
 *
 * @export
 * @interface MessagesRecipientsResponse
 */
export interface MessagesRecipientsResponse {
    /**
     *
     * @type {Array<MessagesRecipient>}
     * @memberof MessagesRecipientsResponse
     */
    messagesRecipients: Array<MessagesRecipient>;
    /**
     * MessagesRecipient
     * @type {string}
     * @memberof MessagesRecipientsResponse
     */
    description?: string;
    /**
     * MessagesRecipient
     * @type {string}
     * @memberof MessagesRecipientsResponse
     */
    summary?: string;
    /**
     *
     * @type {Image}
     * @memberof MessagesRecipientsResponse
     */
    image?: Image;
    /**
     * Square icon png url
     * @type {string}
     * @memberof MessagesRecipientsResponse
     */
    avatar?: string;
    /**
     * Ex: ion-ios-person
     * @type {string}
     * @memberof MessagesRecipientsResponse
     */
    ionIcon?: string;
    /**
     * Embeddable list of study summaries with explanation at the top
     * @type {string}
     * @memberof MessagesRecipientsResponse
     */
    html?: string;
    /**
     * Array of error objects with message property
     * @type {Array<Error>}
     * @memberof MessagesRecipientsResponse
     */
    errors?: Array<Error>;
    /**
     * ex. OK or ERROR
     * @type {string}
     * @memberof MessagesRecipientsResponse
     */
    status?: string;
    /**
     * true or false
     * @type {boolean}
     * @memberof MessagesRecipientsResponse
     */
    success?: boolean;
    /**
     * Response code such as 200
     * @type {number}
     * @memberof MessagesRecipientsResponse
     */
    code?: number;
    /**
     * A super neat url you might want to share with your users!
     * @type {string}
     * @memberof MessagesRecipientsResponse
     */
    link?: string;
    /**
     *
     * @type {Card}
     * @memberof MessagesRecipientsResponse
     */
    card?: Card;
}
export declare function MessagesRecipientsResponseFromJSON(json: any): MessagesRecipientsResponse;
export declare function MessagesRecipientsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MessagesRecipientsResponse;
export declare function MessagesRecipientsResponseToJSON(value?: MessagesRecipientsResponse | null): any;