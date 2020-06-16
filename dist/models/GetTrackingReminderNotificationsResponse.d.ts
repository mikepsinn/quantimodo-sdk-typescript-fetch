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
import { Card, TrackingReminderNotification } from './';
/**
 *
 * @export
 * @interface GetTrackingReminderNotificationsResponse
 */
export interface GetTrackingReminderNotificationsResponse {
    /**
     *
     * @type {Array<TrackingReminderNotification>}
     * @memberof GetTrackingReminderNotificationsResponse
     */
    data?: Array<TrackingReminderNotification>;
    /**
     * Can be used as body of help info popup
     * @type {string}
     * @memberof GetTrackingReminderNotificationsResponse
     */
    description: string;
    /**
     * Can be used as title in help info popup
     * @type {string}
     * @memberof GetTrackingReminderNotificationsResponse
     */
    summary: string;
    /**
     * Array of error objects with message property
     * @type {Array<Error>}
     * @memberof GetTrackingReminderNotificationsResponse
     */
    errors?: Array<Error>;
    /**
     * ex. OK or ERROR
     * @type {string}
     * @memberof GetTrackingReminderNotificationsResponse
     */
    status?: string;
    /**
     * true or false
     * @type {boolean}
     * @memberof GetTrackingReminderNotificationsResponse
     */
    success?: boolean;
    /**
     * Response code such as 200
     * @type {number}
     * @memberof GetTrackingReminderNotificationsResponse
     */
    code?: number;
    /**
     * A super neat url you might want to share with your users!
     * @type {string}
     * @memberof GetTrackingReminderNotificationsResponse
     */
    link?: string;
    /**
     *
     * @type {Card}
     * @memberof GetTrackingReminderNotificationsResponse
     */
    card?: Card;
}
export declare function GetTrackingReminderNotificationsResponseFromJSON(json: any): GetTrackingReminderNotificationsResponse;
export declare function GetTrackingReminderNotificationsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetTrackingReminderNotificationsResponse;
export declare function GetTrackingReminderNotificationsResponseToJSON(value?: GetTrackingReminderNotificationsResponse | null): any;