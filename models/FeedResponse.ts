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
} from './';

/**
 * 
 * @export
 * @interface FeedResponse
 */
export interface FeedResponse {
    /**
     * 
     * @type {Array<Card>}
     * @memberof FeedResponse
     */
    cards: Array<Card>;
    /**
     * Tracking reminder notifications, messages, and study result cards that can be displayed in user feed or stream
     * @type {string}
     * @memberof FeedResponse
     */
    description: string;
    /**
     * Tracking reminder notifications, messages, and study results
     * @type {string}
     * @memberof FeedResponse
     */
    summary: string;
    /**
     * Array of error objects with message property
     * @type {Array<Error>}
     * @memberof FeedResponse
     */
    errors?: Array<Error>;
    /**
     * ex. OK or ERROR
     * @type {string}
     * @memberof FeedResponse
     */
    status?: string;
    /**
     * true or false
     * @type {boolean}
     * @memberof FeedResponse
     */
    success?: boolean;
    /**
     * Response code such as 200
     * @type {number}
     * @memberof FeedResponse
     */
    code?: number;
    /**
     * A super neat url you might want to share with your users!
     * @type {string}
     * @memberof FeedResponse
     */
    link?: string;
    /**
     * 
     * @type {Card}
     * @memberof FeedResponse
     */
    card?: Card;
}

export function FeedResponseFromJSON(json: any): FeedResponse {
    return FeedResponseFromJSONTyped(json, false);
}

export function FeedResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): FeedResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cards': ((json['cards'] as Array<any>).map(CardFromJSON)),
        'description': json['description'],
        'summary': json['summary'],
        'errors': !exists(json, 'errors') ? undefined : json['errors'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'success': !exists(json, 'success') ? undefined : json['success'],
        'code': !exists(json, 'code') ? undefined : json['code'],
        'link': !exists(json, 'link') ? undefined : json['link'],
        'card': !exists(json, 'card') ? undefined : CardFromJSON(json['card']),
    };
}

export function FeedResponseToJSON(value?: FeedResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cards': ((value.cards as Array<any>).map(CardToJSON)),
        'description': value.description,
        'summary': value.summary,
        'errors': value.errors,
        'status': value.status,
        'success': value.success,
        'code': value.code,
        'link': value.link,
        'card': CardToJSON(value.card),
    };
}

