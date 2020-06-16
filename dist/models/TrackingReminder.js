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
const _1 = require("./");
function TrackingReminderFromJSON(json) {
    return TrackingReminderFromJSONTyped(json, false);
}
exports.TrackingReminderFromJSON = TrackingReminderFromJSON;
function TrackingReminderFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'actionArray': !runtime_1.exists(json, 'actionArray') ? undefined : (json['actionArray'].map(_1.TrackingReminderNotificationActionFromJSON)),
        'availableUnits': !runtime_1.exists(json, 'availableUnits') ? undefined : (json['availableUnits'].map(_1.UnitFromJSON)),
        'bestStudyLink': !runtime_1.exists(json, 'bestStudyLink') ? undefined : json['bestStudyLink'],
        'bestStudyCard': !runtime_1.exists(json, 'bestStudyCard') ? undefined : _1.CardFromJSON(json['bestStudyCard']),
        'bestUserStudyLink': !runtime_1.exists(json, 'bestUserStudyLink') ? undefined : json['bestUserStudyLink'],
        'bestUserStudyCard': !runtime_1.exists(json, 'bestUserStudyCard') ? undefined : _1.CardFromJSON(json['bestUserStudyCard']),
        'bestPopulationStudyLink': !runtime_1.exists(json, 'bestPopulationStudyLink') ? undefined : json['bestPopulationStudyLink'],
        'bestPopulationStudyCard': !runtime_1.exists(json, 'bestPopulationStudyCard') ? undefined : _1.CardFromJSON(json['bestPopulationStudyCard']),
        'optimalValueMessage': !runtime_1.exists(json, 'optimalValueMessage') ? undefined : json['optimalValueMessage'],
        'commonOptimalValueMessage': !runtime_1.exists(json, 'commonOptimalValueMessage') ? undefined : json['commonOptimalValueMessage'],
        'userOptimalValueMessage': !runtime_1.exists(json, 'userOptimalValueMessage') ? undefined : json['userOptimalValueMessage'],
        'card': !runtime_1.exists(json, 'card') ? undefined : _1.CardFromJSON(json['card']),
        'clientId': !runtime_1.exists(json, 'clientId') ? undefined : json['clientId'],
        'combinationOperation': !runtime_1.exists(json, 'combinationOperation') ? undefined : json['combinationOperation'],
        'createdAt': !runtime_1.exists(json, 'createdAt') ? undefined : json['createdAt'],
        'displayName': !runtime_1.exists(json, 'displayName') ? undefined : json['displayName'],
        'unitAbbreviatedName': json['unitAbbreviatedName'],
        'unitCategoryId': !runtime_1.exists(json, 'unitCategoryId') ? undefined : json['unitCategoryId'],
        'unitCategoryName': !runtime_1.exists(json, 'unitCategoryName') ? undefined : json['unitCategoryName'],
        'unitId': !runtime_1.exists(json, 'unitId') ? undefined : json['unitId'],
        'unitName': !runtime_1.exists(json, 'unitName') ? undefined : json['unitName'],
        'defaultValue': !runtime_1.exists(json, 'defaultValue') ? undefined : json['defaultValue'],
        'enabled': !runtime_1.exists(json, 'enabled') ? undefined : json['enabled'],
        'email': !runtime_1.exists(json, 'email') ? undefined : json['email'],
        'errorMessage': !runtime_1.exists(json, 'errorMessage') ? undefined : json['errorMessage'],
        'fillingValue': !runtime_1.exists(json, 'fillingValue') ? undefined : json['fillingValue'],
        'firstDailyReminderTime': !runtime_1.exists(json, 'firstDailyReminderTime') ? undefined : json['firstDailyReminderTime'],
        'frequencyTextDescription': !runtime_1.exists(json, 'frequencyTextDescription') ? undefined : json['frequencyTextDescription'],
        'frequencyTextDescriptionWithTime': !runtime_1.exists(json, 'frequencyTextDescriptionWithTime') ? undefined : json['frequencyTextDescriptionWithTime'],
        'id': !runtime_1.exists(json, 'id') ? undefined : json['id'],
        'inputType': !runtime_1.exists(json, 'inputType') ? undefined : json['inputType'],
        'instructions': !runtime_1.exists(json, 'instructions') ? undefined : json['instructions'],
        'ionIcon': !runtime_1.exists(json, 'ionIcon') ? undefined : json['ionIcon'],
        'lastTracked': !runtime_1.exists(json, 'lastTracked') ? undefined : json['lastTracked'],
        'lastValue': !runtime_1.exists(json, 'lastValue') ? undefined : json['lastValue'],
        'latestTrackingReminderNotificationReminderTime': !runtime_1.exists(json, 'latestTrackingReminderNotificationReminderTime') ? undefined : json['latestTrackingReminderNotificationReminderTime'],
        'localDailyReminderNotificationTimes': !runtime_1.exists(json, 'localDailyReminderNotificationTimes') ? undefined : json['localDailyReminderNotificationTimes'],
        'localDailyReminderNotificationTimesForAllReminders': !runtime_1.exists(json, 'localDailyReminderNotificationTimesForAllReminders') ? undefined : json['localDailyReminderNotificationTimesForAllReminders'],
        'manualTracking': !runtime_1.exists(json, 'manualTracking') ? undefined : json['manualTracking'],
        'maximumAllowedValue': !runtime_1.exists(json, 'maximumAllowedValue') ? undefined : json['maximumAllowedValue'],
        'minimumAllowedValue': !runtime_1.exists(json, 'minimumAllowedValue') ? undefined : json['minimumAllowedValue'],
        'nextReminderTimeEpochSeconds': !runtime_1.exists(json, 'nextReminderTimeEpochSeconds') ? undefined : json['nextReminderTimeEpochSeconds'],
        'notificationBar': !runtime_1.exists(json, 'notificationBar') ? undefined : json['notificationBar'],
        'numberOfRawMeasurements': !runtime_1.exists(json, 'numberOfRawMeasurements') ? undefined : json['numberOfRawMeasurements'],
        'numberOfUniqueValues': !runtime_1.exists(json, 'numberOfUniqueValues') ? undefined : json['numberOfUniqueValues'],
        'outcome': !runtime_1.exists(json, 'outcome') ? undefined : json['outcome'],
        'pngPath': !runtime_1.exists(json, 'pngPath') ? undefined : json['pngPath'],
        'pngUrl': !runtime_1.exists(json, 'pngUrl') ? undefined : json['pngUrl'],
        'productUrl': !runtime_1.exists(json, 'productUrl') ? undefined : json['productUrl'],
        'popUp': !runtime_1.exists(json, 'popUp') ? undefined : json['popUp'],
        'question': !runtime_1.exists(json, 'question') ? undefined : json['question'],
        'longQuestion': !runtime_1.exists(json, 'longQuestion') ? undefined : json['longQuestion'],
        'reminderEndTime': !runtime_1.exists(json, 'reminderEndTime') ? undefined : json['reminderEndTime'],
        'reminderFrequency': json['reminderFrequency'],
        'reminderSound': !runtime_1.exists(json, 'reminderSound') ? undefined : json['reminderSound'],
        'reminderStartEpochSeconds': !runtime_1.exists(json, 'reminderStartEpochSeconds') ? undefined : json['reminderStartEpochSeconds'],
        'reminderStartTime': !runtime_1.exists(json, 'reminderStartTime') ? undefined : json['reminderStartTime'],
        'reminderStartTimeLocal': !runtime_1.exists(json, 'reminderStartTimeLocal') ? undefined : json['reminderStartTimeLocal'],
        'reminderStartTimeLocalHumanFormatted': !runtime_1.exists(json, 'reminderStartTimeLocalHumanFormatted') ? undefined : json['reminderStartTimeLocalHumanFormatted'],
        'repeating': !runtime_1.exists(json, 'repeating') ? undefined : json['repeating'],
        'secondDailyReminderTime': !runtime_1.exists(json, 'secondDailyReminderTime') ? undefined : json['secondDailyReminderTime'],
        'secondToLastValue': !runtime_1.exists(json, 'secondToLastValue') ? undefined : json['secondToLastValue'],
        'sms': !runtime_1.exists(json, 'sms') ? undefined : json['sms'],
        'startTrackingDate': !runtime_1.exists(json, 'startTrackingDate') ? undefined : json['startTrackingDate'],
        'stopTrackingDate': !runtime_1.exists(json, 'stopTrackingDate') ? undefined : json['stopTrackingDate'],
        'svgUrl': !runtime_1.exists(json, 'svgUrl') ? undefined : json['svgUrl'],
        'thirdDailyReminderTime': !runtime_1.exists(json, 'thirdDailyReminderTime') ? undefined : json['thirdDailyReminderTime'],
        'thirdToLastValue': !runtime_1.exists(json, 'thirdToLastValue') ? undefined : json['thirdToLastValue'],
        'trackingReminderId': !runtime_1.exists(json, 'trackingReminderId') ? undefined : json['trackingReminderId'],
        'trackingReminderImageUrl': !runtime_1.exists(json, 'trackingReminderImageUrl') ? undefined : json['trackingReminderImageUrl'],
        'upc': !runtime_1.exists(json, 'upc') ? undefined : json['upc'],
        'updatedAt': !runtime_1.exists(json, 'updatedAt') ? undefined : json['updatedAt'],
        'userId': !runtime_1.exists(json, 'userId') ? undefined : json['userId'],
        'userVariableUnitAbbreviatedName': !runtime_1.exists(json, 'userVariableUnitAbbreviatedName') ? undefined : json['userVariableUnitAbbreviatedName'],
        'userVariableUnitCategoryId': !runtime_1.exists(json, 'userVariableUnitCategoryId') ? undefined : json['userVariableUnitCategoryId'],
        'userVariableUnitCategoryName': !runtime_1.exists(json, 'userVariableUnitCategoryName') ? undefined : json['userVariableUnitCategoryName'],
        'userVariableUnitId': !runtime_1.exists(json, 'userVariableUnitId') ? undefined : json['userVariableUnitId'],
        'userVariableUnitName': !runtime_1.exists(json, 'userVariableUnitName') ? undefined : json['userVariableUnitName'],
        'userVariableVariableCategoryId': !runtime_1.exists(json, 'userVariableVariableCategoryId') ? undefined : json['userVariableVariableCategoryId'],
        'userVariableVariableCategoryName': !runtime_1.exists(json, 'userVariableVariableCategoryName') ? undefined : json['userVariableVariableCategoryName'],
        'valence': !runtime_1.exists(json, 'valence') ? undefined : json['valence'],
        'valueAndFrequencyTextDescription': !runtime_1.exists(json, 'valueAndFrequencyTextDescription') ? undefined : json['valueAndFrequencyTextDescription'],
        'valueAndFrequencyTextDescriptionWithTime': !runtime_1.exists(json, 'valueAndFrequencyTextDescriptionWithTime') ? undefined : json['valueAndFrequencyTextDescriptionWithTime'],
        'variableCategoryId': !runtime_1.exists(json, 'variableCategoryId') ? undefined : json['variableCategoryId'],
        'variableCategoryImageUrl': !runtime_1.exists(json, 'variableCategoryImageUrl') ? undefined : json['variableCategoryImageUrl'],
        'variableCategoryName': json['variableCategoryName'],
        'variableDescription': !runtime_1.exists(json, 'variableDescription') ? undefined : json['variableDescription'],
        'variableId': !runtime_1.exists(json, 'variableId') ? undefined : json['variableId'],
        'variableName': json['variableName'],
    };
}
exports.TrackingReminderFromJSONTyped = TrackingReminderFromJSONTyped;
function TrackingReminderToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'actionArray': value.actionArray === undefined ? undefined : (value.actionArray.map(_1.TrackingReminderNotificationActionToJSON)),
        'availableUnits': value.availableUnits === undefined ? undefined : (value.availableUnits.map(_1.UnitToJSON)),
        'bestStudyLink': value.bestStudyLink,
        'bestStudyCard': _1.CardToJSON(value.bestStudyCard),
        'bestUserStudyLink': value.bestUserStudyLink,
        'bestUserStudyCard': _1.CardToJSON(value.bestUserStudyCard),
        'bestPopulationStudyLink': value.bestPopulationStudyLink,
        'bestPopulationStudyCard': _1.CardToJSON(value.bestPopulationStudyCard),
        'optimalValueMessage': value.optimalValueMessage,
        'commonOptimalValueMessage': value.commonOptimalValueMessage,
        'userOptimalValueMessage': value.userOptimalValueMessage,
        'card': _1.CardToJSON(value.card),
        'clientId': value.clientId,
        'combinationOperation': value.combinationOperation,
        'createdAt': value.createdAt,
        'displayName': value.displayName,
        'unitAbbreviatedName': value.unitAbbreviatedName,
        'unitCategoryId': value.unitCategoryId,
        'unitCategoryName': value.unitCategoryName,
        'unitId': value.unitId,
        'unitName': value.unitName,
        'defaultValue': value.defaultValue,
        'enabled': value.enabled,
        'email': value.email,
        'errorMessage': value.errorMessage,
        'fillingValue': value.fillingValue,
        'firstDailyReminderTime': value.firstDailyReminderTime,
        'frequencyTextDescription': value.frequencyTextDescription,
        'frequencyTextDescriptionWithTime': value.frequencyTextDescriptionWithTime,
        'id': value.id,
        'inputType': value.inputType,
        'instructions': value.instructions,
        'ionIcon': value.ionIcon,
        'lastTracked': value.lastTracked,
        'lastValue': value.lastValue,
        'latestTrackingReminderNotificationReminderTime': value.latestTrackingReminderNotificationReminderTime,
        'localDailyReminderNotificationTimes': value.localDailyReminderNotificationTimes,
        'localDailyReminderNotificationTimesForAllReminders': value.localDailyReminderNotificationTimesForAllReminders,
        'manualTracking': value.manualTracking,
        'maximumAllowedValue': value.maximumAllowedValue,
        'minimumAllowedValue': value.minimumAllowedValue,
        'nextReminderTimeEpochSeconds': value.nextReminderTimeEpochSeconds,
        'notificationBar': value.notificationBar,
        'numberOfRawMeasurements': value.numberOfRawMeasurements,
        'numberOfUniqueValues': value.numberOfUniqueValues,
        'outcome': value.outcome,
        'pngPath': value.pngPath,
        'pngUrl': value.pngUrl,
        'productUrl': value.productUrl,
        'popUp': value.popUp,
        'question': value.question,
        'longQuestion': value.longQuestion,
        'reminderEndTime': value.reminderEndTime,
        'reminderFrequency': value.reminderFrequency,
        'reminderSound': value.reminderSound,
        'reminderStartEpochSeconds': value.reminderStartEpochSeconds,
        'reminderStartTime': value.reminderStartTime,
        'reminderStartTimeLocal': value.reminderStartTimeLocal,
        'reminderStartTimeLocalHumanFormatted': value.reminderStartTimeLocalHumanFormatted,
        'repeating': value.repeating,
        'secondDailyReminderTime': value.secondDailyReminderTime,
        'secondToLastValue': value.secondToLastValue,
        'sms': value.sms,
        'startTrackingDate': value.startTrackingDate,
        'stopTrackingDate': value.stopTrackingDate,
        'svgUrl': value.svgUrl,
        'thirdDailyReminderTime': value.thirdDailyReminderTime,
        'thirdToLastValue': value.thirdToLastValue,
        'trackingReminderId': value.trackingReminderId,
        'trackingReminderImageUrl': value.trackingReminderImageUrl,
        'upc': value.upc,
        'updatedAt': value.updatedAt,
        'userId': value.userId,
        'userVariableUnitAbbreviatedName': value.userVariableUnitAbbreviatedName,
        'userVariableUnitCategoryId': value.userVariableUnitCategoryId,
        'userVariableUnitCategoryName': value.userVariableUnitCategoryName,
        'userVariableUnitId': value.userVariableUnitId,
        'userVariableUnitName': value.userVariableUnitName,
        'userVariableVariableCategoryId': value.userVariableVariableCategoryId,
        'userVariableVariableCategoryName': value.userVariableVariableCategoryName,
        'valence': value.valence,
        'valueAndFrequencyTextDescription': value.valueAndFrequencyTextDescription,
        'valueAndFrequencyTextDescriptionWithTime': value.valueAndFrequencyTextDescriptionWithTime,
        'variableCategoryId': value.variableCategoryId,
        'variableCategoryImageUrl': value.variableCategoryImageUrl,
        'variableCategoryName': value.variableCategoryName,
        'variableDescription': value.variableDescription,
        'variableId': value.variableId,
        'variableName': value.variableName,
    };
}
exports.TrackingReminderToJSON = TrackingReminderToJSON;
/**
* @export
* @enum {string}
*/
var TrackingReminderCombinationOperationEnum;
(function (TrackingReminderCombinationOperationEnum) {
    TrackingReminderCombinationOperationEnum["MEAN"] = "MEAN";
    TrackingReminderCombinationOperationEnum["SUM"] = "SUM";
})(TrackingReminderCombinationOperationEnum = exports.TrackingReminderCombinationOperationEnum || (exports.TrackingReminderCombinationOperationEnum = {}));
/**
* @export
* @enum {string}
*/
var TrackingReminderVariableCategoryNameEnum;
(function (TrackingReminderVariableCategoryNameEnum) {
    TrackingReminderVariableCategoryNameEnum["Activity"] = "Activity";
    TrackingReminderVariableCategoryNameEnum["Books"] = "Books";
    TrackingReminderVariableCategoryNameEnum["CausesOfIllness"] = "Causes of Illness";
    TrackingReminderVariableCategoryNameEnum["CognitivePerformance"] = "Cognitive Performance";
    TrackingReminderVariableCategoryNameEnum["Conditions"] = "Conditions";
    TrackingReminderVariableCategoryNameEnum["Emotions"] = "Emotions";
    TrackingReminderVariableCategoryNameEnum["Environment"] = "Environment";
    TrackingReminderVariableCategoryNameEnum["Foods"] = "Foods";
    TrackingReminderVariableCategoryNameEnum["Goals"] = "Goals";
    TrackingReminderVariableCategoryNameEnum["Locations"] = "Locations";
    TrackingReminderVariableCategoryNameEnum["Miscellaneous"] = "Miscellaneous";
    TrackingReminderVariableCategoryNameEnum["MoviesAndTV"] = "Movies and TV";
    TrackingReminderVariableCategoryNameEnum["Music"] = "Music";
    TrackingReminderVariableCategoryNameEnum["Nutrients"] = "Nutrients";
    TrackingReminderVariableCategoryNameEnum["Payments"] = "Payments";
    TrackingReminderVariableCategoryNameEnum["PhysicalActivities"] = "Physical Activities";
    TrackingReminderVariableCategoryNameEnum["Physique"] = "Physique";
    TrackingReminderVariableCategoryNameEnum["Sleep"] = "Sleep";
    TrackingReminderVariableCategoryNameEnum["SocialInteractions"] = "Social Interactions";
    TrackingReminderVariableCategoryNameEnum["Software"] = "Software";
    TrackingReminderVariableCategoryNameEnum["Symptoms"] = "Symptoms";
    TrackingReminderVariableCategoryNameEnum["Treatments"] = "Treatments";
    TrackingReminderVariableCategoryNameEnum["VitalSigns"] = "Vital Signs";
})(TrackingReminderVariableCategoryNameEnum = exports.TrackingReminderVariableCategoryNameEnum || (exports.TrackingReminderVariableCategoryNameEnum = {}));
