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
    ExplanationStartTracking,
    ExplanationStartTrackingFromJSON,
    ExplanationStartTrackingFromJSONTyped,
    ExplanationStartTrackingToJSON,
    Image,
    ImageFromJSON,
    ImageFromJSONTyped,
    ImageToJSON,
} from './';

/**
 * 
 * @export
 * @interface Explanation
 */
export interface Explanation {
    /**
     * Ex: These factors are most predictive of Overall Mood based on your own data.
     * @type {string}
     * @memberof Explanation
     */
    description: string;
    /**
     * 
     * @type {Image}
     * @memberof Explanation
     */
    image: Image;
    /**
     * Ex: ion-ios-person
     * @type {string}
     * @memberof Explanation
     */
    ionIcon: string;
    /**
     * 
     * @type {ExplanationStartTracking}
     * @memberof Explanation
     */
    startTracking: ExplanationStartTracking;
    /**
     * Ex: Top Predictors of Overall Mood
     * @type {string}
     * @memberof Explanation
     */
    title: string;
    /**
     * Embeddable list of study summaries with explanation at the top
     * @type {string}
     * @memberof Explanation
     */
    html?: string;
}

export function ExplanationFromJSON(json: any): Explanation {
    return ExplanationFromJSONTyped(json, false);
}

export function ExplanationFromJSONTyped(json: any, ignoreDiscriminator: boolean): Explanation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'description': json['description'],
        'image': ImageFromJSON(json['image']),
        'ionIcon': json['ionIcon'],
        'startTracking': ExplanationStartTrackingFromJSON(json['startTracking']),
        'title': json['title'],
        'html': !exists(json, 'html') ? undefined : json['html'],
    };
}

export function ExplanationToJSON(value?: Explanation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'description': value.description,
        'image': ImageToJSON(value.image),
        'ionIcon': value.ionIcon,
        'startTracking': ExplanationStartTrackingToJSON(value.startTracking),
        'title': value.title,
        'html': value.html,
    };
}


