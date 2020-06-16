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
const runtime_1 = require("../runtime");
function UnitCategoryFromJSON(json) {
    return UnitCategoryFromJSONTyped(json, false);
}
exports.UnitCategoryFromJSON = UnitCategoryFromJSON;
function UnitCategoryFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': !runtime_1.exists(json, 'id') ? undefined : json['id'],
        'name': json['name'],
        'standardUnitAbbreviatedName': !runtime_1.exists(json, 'standardUnitAbbreviatedName') ? undefined : json['standardUnitAbbreviatedName'],
    };
}
exports.UnitCategoryFromJSONTyped = UnitCategoryFromJSONTyped;
function UnitCategoryToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'name': value.name,
        'standardUnitAbbreviatedName': value.standardUnitAbbreviatedName,
    };
}
exports.UnitCategoryToJSON = UnitCategoryToJSON;
