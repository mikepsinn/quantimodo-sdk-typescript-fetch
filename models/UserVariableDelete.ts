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
 * @interface UserVariableDelete
 */
export interface UserVariableDelete {
    /**
     * Id of the variable whose measurements should be deleted
     * @type {number}
     * @memberof UserVariableDelete
     */
    variableId: number;
}

export function UserVariableDeleteFromJSON(json: any): UserVariableDelete {
    return UserVariableDeleteFromJSONTyped(json, false);
}

export function UserVariableDeleteFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserVariableDelete {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'variableId': json['variableId'],
    };
}

export function UserVariableDeleteToJSON(value?: UserVariableDelete | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'variableId': value.variableId,
    };
}

