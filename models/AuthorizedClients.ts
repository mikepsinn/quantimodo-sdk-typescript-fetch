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
    AppSettings,
    AppSettingsFromJSON,
    AppSettingsFromJSONTyped,
    AppSettingsToJSON,
} from './';

/**
 * 
 * @export
 * @interface AuthorizedClients
 */
export interface AuthorizedClients {
    /**
     * Applications with access to user measurements for all variables
     * @type {Array<AppSettings>}
     * @memberof AuthorizedClients
     */
    apps: Array<AppSettings>;
    /**
     * Individuals such as physicians or family members with access to user measurements for all variables
     * @type {Array<AppSettings>}
     * @memberof AuthorizedClients
     */
    individuals: Array<AppSettings>;
    /**
     * Studies with access to generally anonymous user measurements for a specific predictor and outcome variable
     * @type {Array<AppSettings>}
     * @memberof AuthorizedClients
     */
    studies: Array<AppSettings>;
}

export function AuthorizedClientsFromJSON(json: any): AuthorizedClients {
    return AuthorizedClientsFromJSONTyped(json, false);
}

export function AuthorizedClientsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthorizedClients {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apps': ((json['apps'] as Array<any>).map(AppSettingsFromJSON)),
        'individuals': ((json['individuals'] as Array<any>).map(AppSettingsFromJSON)),
        'studies': ((json['studies'] as Array<any>).map(AppSettingsFromJSON)),
    };
}

export function AuthorizedClientsToJSON(value?: AuthorizedClients | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apps': ((value.apps as Array<any>).map(AppSettingsToJSON)),
        'individuals': ((value.individuals as Array<any>).map(AppSettingsToJSON)),
        'studies': ((value.studies as Array<any>).map(AppSettingsToJSON)),
    };
}


