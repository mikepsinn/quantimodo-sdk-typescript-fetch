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
function MessagesMessageFromJSON(json) {
    return MessagesMessageFromJSONTyped(json, false);
}
exports.MessagesMessageFromJSON = MessagesMessageFromJSON;
function MessagesMessageFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'threadId': json['threadId'],
        'senderId': json['senderId'],
        'subject': json['subject'],
        'message': json['message'],
        'dateSent': json['dateSent'],
        'metaDataArray': !runtime_1.exists(json, 'metaDataArray') ? undefined : json['metaDataArray'],
    };
}
exports.MessagesMessageFromJSONTyped = MessagesMessageFromJSONTyped;
function MessagesMessageToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'threadId': value.threadId,
        'senderId': value.senderId,
        'subject': value.subject,
        'message': value.message,
        'dateSent': value.dateSent,
        'metaDataArray': value.metaDataArray,
    };
}
exports.MessagesMessageToJSON = MessagesMessageToJSON;