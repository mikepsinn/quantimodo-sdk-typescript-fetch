"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require("./");
function AuthorizedClientsFromJSON(json) {
    return AuthorizedClientsFromJSONTyped(json, false);
}
exports.AuthorizedClientsFromJSON = AuthorizedClientsFromJSON;
function AuthorizedClientsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'apps': (json['apps'].map(_1.AppSettingsFromJSON)),
        'individuals': (json['individuals'].map(_1.AppSettingsFromJSON)),
        'studies': (json['studies'].map(_1.AppSettingsFromJSON)),
    };
}
exports.AuthorizedClientsFromJSONTyped = AuthorizedClientsFromJSONTyped;
function AuthorizedClientsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'apps': (value.apps.map(_1.AppSettingsToJSON)),
        'individuals': (value.individuals.map(_1.AppSettingsToJSON)),
        'studies': (value.studies.map(_1.AppSettingsToJSON)),
    };
}
exports.AuthorizedClientsToJSON = AuthorizedClientsToJSON;