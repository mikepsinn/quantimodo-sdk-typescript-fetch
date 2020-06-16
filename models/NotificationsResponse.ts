/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
import {
    Card,
    CardFromJSON,
    CardFromJSONTyped,
    CardToJSON,
    Image,
    ImageFromJSON,
    ImageFromJSONTyped,
    ImageToJSON,
    Notification,
    NotificationFromJSON,
    NotificationFromJSONTyped,
    NotificationToJSON,
} from './';

/**
 * 
 * @export
 * @interface NotificationsResponse
 */
export interface NotificationsResponse {
    /**
     * 
     * @type {Array<Notification>}
     * @memberof NotificationsResponse
     */
    notifications: Array<Notification>;
    /**
     * Notification
     * @type {string}
     * @memberof NotificationsResponse
     */
    description?: string;
    /**
     * Notification
     * @type {string}
     * @memberof NotificationsResponse
     */
    summary?: string;
    /**
     * 
     * @type {Image}
     * @memberof NotificationsResponse
     */
    image?: Image;
    /**
     * Square icon png url
     * @type {string}
     * @memberof NotificationsResponse
     */
    avatar?: string;
    /**
     * Ex: ion-ios-person
     * @type {string}
     * @memberof NotificationsResponse
     */
    ionIcon?: string;
    /**
     * Embeddable list of study summaries with explanation at the top
     * @type {string}
     * @memberof NotificationsResponse
     */
    html?: string;
    /**
     * Array of error objects with message property
     * @type {Array<Error>}
     * @memberof NotificationsResponse
     */
    errors?: Array<Error>;
    /**
     * ex. OK or ERROR
     * @type {string}
     * @memberof NotificationsResponse
     */
    status?: string;
    /**
     * true or false
     * @type {boolean}
     * @memberof NotificationsResponse
     */
    success?: boolean;
    /**
     * Response code such as 200
     * @type {number}
     * @memberof NotificationsResponse
     */
    code?: number;
    /**
     * A super neat url you might want to share with your users!
     * @type {string}
     * @memberof NotificationsResponse
     */
    link?: string;
    /**
     * 
     * @type {Card}
     * @memberof NotificationsResponse
     */
    card?: Card;
}

export function NotificationsResponseFromJSON(json: any): NotificationsResponse {
    return NotificationsResponseFromJSONTyped(json, false);
}

export function NotificationsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): NotificationsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'notifications': ((json['notifications'] as Array<any>).map(NotificationFromJSON)),
        'description': !exists(json, 'description') ? undefined : json['description'],
        'summary': !exists(json, 'summary') ? undefined : json['summary'],
        'image': !exists(json, 'image') ? undefined : ImageFromJSON(json['image']),
        'avatar': !exists(json, 'avatar') ? undefined : json['avatar'],
        'ionIcon': !exists(json, 'ionIcon') ? undefined : json['ionIcon'],
        'html': !exists(json, 'html') ? undefined : json['html'],
        'errors': !exists(json, 'errors') ? undefined : json['errors'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'success': !exists(json, 'success') ? undefined : json['success'],
        'code': !exists(json, 'code') ? undefined : json['code'],
        'link': !exists(json, 'link') ? undefined : json['link'],
        'card': !exists(json, 'card') ? undefined : CardFromJSON(json['card']),
    };
}

export function NotificationsResponseToJSON(value?: NotificationsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'notifications': ((value.notifications as Array<any>).map(NotificationToJSON)),
        'description': value.description,
        'summary': value.summary,
        'image': ImageToJSON(value.image),
        'avatar': value.avatar,
        'ionIcon': value.ionIcon,
        'html': value.html,
        'errors': value.errors,
        'status': value.status,
        'success': value.success,
        'code': value.code,
        'link': value.link,
        'card': CardToJSON(value.card),
    };
}


