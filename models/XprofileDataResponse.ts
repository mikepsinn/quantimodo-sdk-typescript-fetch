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
    XprofileDatum,
    XprofileDatumFromJSON,
    XprofileDatumFromJSONTyped,
    XprofileDatumToJSON,
} from './';

/**
 * 
 * @export
 * @interface XprofileDataResponse
 */
export interface XprofileDataResponse {
    /**
     * 
     * @type {Array<XprofileDatum>}
     * @memberof XprofileDataResponse
     */
    xprofileData: Array<XprofileDatum>;
    /**
     * XprofileDatum
     * @type {string}
     * @memberof XprofileDataResponse
     */
    description?: string;
    /**
     * XprofileDatum
     * @type {string}
     * @memberof XprofileDataResponse
     */
    summary?: string;
    /**
     * 
     * @type {Image}
     * @memberof XprofileDataResponse
     */
    image?: Image;
    /**
     * Square icon png url
     * @type {string}
     * @memberof XprofileDataResponse
     */
    avatar?: string;
    /**
     * Ex: ion-ios-person
     * @type {string}
     * @memberof XprofileDataResponse
     */
    ionIcon?: string;
    /**
     * Embeddable list of study summaries with explanation at the top
     * @type {string}
     * @memberof XprofileDataResponse
     */
    html?: string;
    /**
     * Array of error objects with message property
     * @type {Array<Error>}
     * @memberof XprofileDataResponse
     */
    errors?: Array<Error>;
    /**
     * ex. OK or ERROR
     * @type {string}
     * @memberof XprofileDataResponse
     */
    status?: string;
    /**
     * true or false
     * @type {boolean}
     * @memberof XprofileDataResponse
     */
    success?: boolean;
    /**
     * Response code such as 200
     * @type {number}
     * @memberof XprofileDataResponse
     */
    code?: number;
    /**
     * A super neat url you might want to share with your users!
     * @type {string}
     * @memberof XprofileDataResponse
     */
    link?: string;
    /**
     * 
     * @type {Card}
     * @memberof XprofileDataResponse
     */
    card?: Card;
}

export function XprofileDataResponseFromJSON(json: any): XprofileDataResponse {
    return XprofileDataResponseFromJSONTyped(json, false);
}

export function XprofileDataResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): XprofileDataResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'xprofileData': ((json['xprofileData'] as Array<any>).map(XprofileDatumFromJSON)),
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

export function XprofileDataResponseToJSON(value?: XprofileDataResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'xprofileData': ((value.xprofileData as Array<any>).map(XprofileDatumToJSON)),
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


