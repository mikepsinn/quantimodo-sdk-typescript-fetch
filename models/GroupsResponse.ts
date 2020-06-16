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
    Group,
    GroupFromJSON,
    GroupFromJSONTyped,
    GroupToJSON,
    Image,
    ImageFromJSON,
    ImageFromJSONTyped,
    ImageToJSON,
} from './';

/**
 * 
 * @export
 * @interface GroupsResponse
 */
export interface GroupsResponse {
    /**
     * 
     * @type {Array<Group>}
     * @memberof GroupsResponse
     */
    groups: Array<Group>;
    /**
     * Group
     * @type {string}
     * @memberof GroupsResponse
     */
    description?: string;
    /**
     * Group
     * @type {string}
     * @memberof GroupsResponse
     */
    summary?: string;
    /**
     * 
     * @type {Image}
     * @memberof GroupsResponse
     */
    image?: Image;
    /**
     * Square icon png url
     * @type {string}
     * @memberof GroupsResponse
     */
    avatar?: string;
    /**
     * Ex: ion-ios-person
     * @type {string}
     * @memberof GroupsResponse
     */
    ionIcon?: string;
    /**
     * Embeddable list of study summaries with explanation at the top
     * @type {string}
     * @memberof GroupsResponse
     */
    html?: string;
    /**
     * Array of error objects with message property
     * @type {Array<Error>}
     * @memberof GroupsResponse
     */
    errors?: Array<Error>;
    /**
     * ex. OK or ERROR
     * @type {string}
     * @memberof GroupsResponse
     */
    status?: string;
    /**
     * true or false
     * @type {boolean}
     * @memberof GroupsResponse
     */
    success?: boolean;
    /**
     * Response code such as 200
     * @type {number}
     * @memberof GroupsResponse
     */
    code?: number;
    /**
     * A super neat url you might want to share with your users!
     * @type {string}
     * @memberof GroupsResponse
     */
    link?: string;
    /**
     * 
     * @type {Card}
     * @memberof GroupsResponse
     */
    card?: Card;
}

export function GroupsResponseFromJSON(json: any): GroupsResponse {
    return GroupsResponseFromJSONTyped(json, false);
}

export function GroupsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GroupsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'groups': ((json['groups'] as Array<any>).map(GroupFromJSON)),
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

export function GroupsResponseToJSON(value?: GroupsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'groups': ((value.groups as Array<any>).map(GroupToJSON)),
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


