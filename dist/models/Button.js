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
function ButtonFromJSON(json) {
    return ButtonFromJSONTyped(json, false);
}
exports.ButtonFromJSON = ButtonFromJSON;
function ButtonFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'accessibilityText': !runtime_1.exists(json, 'accessibilityText') ? undefined : json['accessibilityText'],
        'action': !runtime_1.exists(json, 'action') ? undefined : json['action'],
        'additionalInformation': !runtime_1.exists(json, 'additionalInformation') ? undefined : json['additionalInformation'],
        'color': !runtime_1.exists(json, 'color') ? undefined : json['color'],
        'confirmationText': !runtime_1.exists(json, 'confirmationText') ? undefined : json['confirmationText'],
        'functionName': !runtime_1.exists(json, 'functionName') ? undefined : json['functionName'],
        'parameters': !runtime_1.exists(json, 'parameters') ? undefined : json['parameters'],
        'html': !runtime_1.exists(json, 'html') ? undefined : json['html'],
        'id': !runtime_1.exists(json, 'id') ? undefined : json['id'],
        'image': !runtime_1.exists(json, 'image') ? undefined : json['image'],
        'ionIcon': !runtime_1.exists(json, 'ionIcon') ? undefined : json['ionIcon'],
        'link': json['link'],
        'stateName': !runtime_1.exists(json, 'stateName') ? undefined : json['stateName'],
        'stateParams': !runtime_1.exists(json, 'stateParams') ? undefined : json['stateParams'],
        'successToastText': !runtime_1.exists(json, 'successToastText') ? undefined : json['successToastText'],
        'successAlertTitle': !runtime_1.exists(json, 'successAlertTitle') ? undefined : json['successAlertTitle'],
        'successAlertBody': !runtime_1.exists(json, 'successAlertBody') ? undefined : json['successAlertBody'],
        'text': json['text'],
        'tooltip': !runtime_1.exists(json, 'tooltip') ? undefined : json['tooltip'],
        'webhookUrl': !runtime_1.exists(json, 'webhookUrl') ? undefined : json['webhookUrl'],
    };
}
exports.ButtonFromJSONTyped = ButtonFromJSONTyped;
function ButtonToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'accessibilityText': value.accessibilityText,
        'action': value.action,
        'additionalInformation': value.additionalInformation,
        'color': value.color,
        'confirmationText': value.confirmationText,
        'functionName': value.functionName,
        'parameters': value.parameters,
        'html': value.html,
        'id': value.id,
        'image': value.image,
        'ionIcon': value.ionIcon,
        'link': value.link,
        'stateName': value.stateName,
        'stateParams': value.stateParams,
        'successToastText': value.successToastText,
        'successAlertTitle': value.successAlertTitle,
        'successAlertBody': value.successAlertBody,
        'text': value.text,
        'tooltip': value.tooltip,
        'webhookUrl': value.webhookUrl,
    };
}
exports.ButtonToJSON = ButtonToJSON;