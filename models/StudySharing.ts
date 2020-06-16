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
/**
 * 
 * @export
 * @interface StudySharing
 */
export interface StudySharing {
    /**
     * Would you like to make this study publicly visible?
     * @type {boolean}
     * @memberof StudySharing
     */
    shareUserMeasurements: boolean;
    /**
     * Ex: N1 Study: Sleep Quality Predicts Higher Overall Mood
     * @type {string}
     * @memberof StudySharing
     */
    sharingDescription: string;
    /**
     * Ex: N1 Study: Sleep Quality Predicts Higher Overall Mood
     * @type {string}
     * @memberof StudySharing
     */
    sharingTitle: string;
}

export function StudySharingFromJSON(json: any): StudySharing {
    return StudySharingFromJSONTyped(json, false);
}

export function StudySharingFromJSONTyped(json: any, ignoreDiscriminator: boolean): StudySharing {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'shareUserMeasurements': json['shareUserMeasurements'],
        'sharingDescription': json['sharingDescription'],
        'sharingTitle': json['sharingTitle'],
    };
}

export function StudySharingToJSON(value?: StudySharing | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'shareUserMeasurements': value.shareUserMeasurements,
        'sharingDescription': value.sharingDescription,
        'sharingTitle': value.sharingTitle,
    };
}


