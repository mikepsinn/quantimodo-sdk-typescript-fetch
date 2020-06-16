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
function MessagesNoticeFromJSON(json) {
    return MessagesNoticeFromJSONTyped(json, false);
}
exports.MessagesNoticeFromJSON = MessagesNoticeFromJSON;
function MessagesNoticeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'subject': json['subject'],
        'message': json['message'],
        'dateSent': json['dateSent'],
        'isActive': json['isActive'],
        'metaDataArray': !runtime_1.exists(json, 'metaDataArray') ? undefined : json['metaDataArray'],
    };
}
exports.MessagesNoticeFromJSONTyped = MessagesNoticeFromJSONTyped;
function MessagesNoticeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'subject': value.subject,
        'message': value.message,
        'dateSent': value.dateSent,
        'isActive': value.isActive,
        'metaDataArray': value.metaDataArray,
    };
}
exports.MessagesNoticeToJSON = MessagesNoticeToJSON;
