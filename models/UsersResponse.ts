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
    User,
    UserFromJSON,
    UserFromJSONTyped,
    UserToJSON,
} from './';

/**
 * 
 * @export
 * @interface UsersResponse
 */
export interface UsersResponse {
    /**
     * 
     * @type {Array<User>}
     * @memberof UsersResponse
     */
    users: Array<User>;
    /**
     * Users who granted access to their data
     * @type {string}
     * @memberof UsersResponse
     */
    description?: string;
    /**
     * Users who granted access to their data
     * @type {string}
     * @memberof UsersResponse
     */
    summary?: string;
    /**
     * Array of error objects with message property
     * @type {Array<Error>}
     * @memberof UsersResponse
     */
    errors?: Array<Error>;
    /**
     * ex. OK or ERROR
     * @type {string}
     * @memberof UsersResponse
     */
    status?: string;
    /**
     * true or false
     * @type {boolean}
     * @memberof UsersResponse
     */
    success?: boolean;
    /**
     * Response code such as 200
     * @type {number}
     * @memberof UsersResponse
     */
    code?: number;
    /**
     * 
     * @type {Image}
     * @memberof UsersResponse
     */
    image?: Image;
    /**
     * Square icon png url
     * @type {string}
     * @memberof UsersResponse
     */
    avatar?: string;
    /**
     * Ex: ion-ios-person
     * @type {string}
     * @memberof UsersResponse
     */
    ionIcon?: string;
    /**
     * Users who granted access to their data
     * @type {string}
     * @memberof UsersResponse
     */
    html?: string;
    /**
     * A super neat url you might want to share with your users!
     * @type {string}
     * @memberof UsersResponse
     */
    link?: string;
    /**
     * 
     * @type {Card}
     * @memberof UsersResponse
     */
    card?: Card;
}

export function UsersResponseFromJSON(json: any): UsersResponse {
    return UsersResponseFromJSONTyped(json, false);
}

export function UsersResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UsersResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'users': ((json['users'] as Array<any>).map(UserFromJSON)),
        'description': !exists(json, 'description') ? undefined : json['description'],
        'summary': !exists(json, 'summary') ? undefined : json['summary'],
        'errors': !exists(json, 'errors') ? undefined : json['errors'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'success': !exists(json, 'success') ? undefined : json['success'],
        'code': !exists(json, 'code') ? undefined : json['code'],
        'image': !exists(json, 'image') ? undefined : ImageFromJSON(json['image']),
        'avatar': !exists(json, 'avatar') ? undefined : json['avatar'],
        'ionIcon': !exists(json, 'ionIcon') ? undefined : json['ionIcon'],
        'html': !exists(json, 'html') ? undefined : json['html'],
        'link': !exists(json, 'link') ? undefined : json['link'],
        'card': !exists(json, 'card') ? undefined : CardFromJSON(json['card']),
    };
}

export function UsersResponseToJSON(value?: UsersResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'users': ((value.users as Array<any>).map(UserToJSON)),
        'description': value.description,
        'summary': value.summary,
        'errors': value.errors,
        'status': value.status,
        'success': value.success,
        'code': value.code,
        'image': ImageToJSON(value.image),
        'avatar': value.avatar,
        'ionIcon': value.ionIcon,
        'html': value.html,
        'link': value.link,
        'card': CardToJSON(value.card),
    };
}


