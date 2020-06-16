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
import { Card, TrackingReminderNotificationAction, Unit } from './';
/**
 *
 * @export
 * @interface TrackingReminder
 */
export interface TrackingReminder {
    /**
     *
     * @type {Array<TrackingReminderNotificationAction>}
     * @memberof TrackingReminder
     */
    actionArray?: Array<TrackingReminderNotificationAction>;
    /**
     *
     * @type {Array<Unit>}
     * @memberof TrackingReminder
     */
    availableUnits?: Array<Unit>;
    /**
     * Link to study comparing variable with strongest relationship for user or population
     * @type {string}
     * @memberof TrackingReminder
     */
    bestStudyLink?: string;
    /**
     *
     * @type {Card}
     * @memberof TrackingReminder
     */
    bestStudyCard?: Card;
    /**
     * Link to study comparing variable with strongest relationship for user
     * @type {string}
     * @memberof TrackingReminder
     */
    bestUserStudyLink?: string;
    /**
     *
     * @type {Card}
     * @memberof TrackingReminder
     */
    bestUserStudyCard?: Card;
    /**
     * Link to study comparing variable with strongest relationship for population
     * @type {string}
     * @memberof TrackingReminder
     */
    bestPopulationStudyLink?: string;
    /**
     *
     * @type {Card}
     * @memberof TrackingReminder
     */
    bestPopulationStudyCard?: Card;
    /**
     * Description of relationship with variable with strongest relationship for user or population
     * @type {string}
     * @memberof TrackingReminder
     */
    optimalValueMessage?: string;
    /**
     * Description of relationship with variable with strongest relationship for population
     * @type {string}
     * @memberof TrackingReminder
     */
    commonOptimalValueMessage?: string;
    /**
     * Description of relationship with variable with strongest relationship for user
     * @type {string}
     * @memberof TrackingReminder
     */
    userOptimalValueMessage?: string;
    /**
     *
     * @type {Card}
     * @memberof TrackingReminder
     */
    card?: Card;
    /**
     * Your QuantiModo client id can be obtained by creating an app at https://builder.quantimo.do
     * @type {string}
     * @memberof TrackingReminder
     */
    clientId?: string;
    /**
     * The way multiple measurements are aggregated over time
     * @type {string}
     * @memberof TrackingReminder
     */
    combinationOperation?: TrackingReminderCombinationOperationEnum;
    /**
     * Ex: 2016-05-18 02:24:08 UTC ISO 8601 YYYY-MM-DDThh:mm:ss
     * @type {string}
     * @memberof TrackingReminder
     */
    createdAt?: string;
    /**
     * Ex: Trader Joe's Bedtime Tea
     * @type {string}
     * @memberof TrackingReminder
     */
    displayName?: string;
    /**
     * Ex: /5
     * @type {string}
     * @memberof TrackingReminder
     */
    unitAbbreviatedName: string;
    /**
     * Ex: 5
     * @type {number}
     * @memberof TrackingReminder
     */
    unitCategoryId?: number;
    /**
     * Ex: Rating
     * @type {string}
     * @memberof TrackingReminder
     */
    unitCategoryName?: string;
    /**
     * Ex: 10
     * @type {number}
     * @memberof TrackingReminder
     */
    unitId?: number;
    /**
     * Ex: 1 to 5 Rating
     * @type {string}
     * @memberof TrackingReminder
     */
    unitName?: string;
    /**
     * Default value to use for the measurement when tracking. Unit: User-specified or common.
     * @type {number}
     * @memberof TrackingReminder
     */
    defaultValue?: number;
    /**
     * If a tracking reminder is enabled, tracking reminder notifications will be generated for this variable.
     * @type {boolean}
     * @memberof TrackingReminder
     */
    enabled?: boolean;
    /**
     * True if the reminders should be delivered via email
     * @type {boolean}
     * @memberof TrackingReminder
     */
    email?: boolean;
    /**
     * Ex: reminderStartTimeLocal is less than $user->earliestReminderTime or greater than  $user->latestReminderTime
     * @type {string}
     * @memberof TrackingReminder
     */
    errorMessage?: string;
    /**
     * Ex: 0. Unit: User-specified or common.
     * @type {number}
     * @memberof TrackingReminder
     */
    fillingValue?: number;
    /**
     * Ex: 02:45:20 in UTC timezone
     * @type {string}
     * @memberof TrackingReminder
     */
    firstDailyReminderTime?: string;
    /**
     * Ex: Daily
     * @type {string}
     * @memberof TrackingReminder
     */
    frequencyTextDescription?: string;
    /**
     * Ex: Daily at 09:45 PM
     * @type {string}
     * @memberof TrackingReminder
     */
    frequencyTextDescriptionWithTime?: string;
    /**
     * id
     * @type {number}
     * @memberof TrackingReminder
     */
    id?: number;
    /**
     * Ex: saddestFaceIsFive
     * @type {string}
     * @memberof TrackingReminder
     */
    inputType?: string;
    /**
     * Ex: I am an instruction!
     * @type {string}
     * @memberof TrackingReminder
     */
    instructions?: string;
    /**
     * Ex: ion-sad-outline
     * @type {string}
     * @memberof TrackingReminder
     */
    ionIcon?: string;
    /**
     * UTC ISO 8601 YYYY-MM-DDThh:mm:ss timestamp for the last time a measurement was received for this user and variable
     * @type {string}
     * @memberof TrackingReminder
     */
    lastTracked?: string;
    /**
     * Ex: 2
     * @type {number}
     * @memberof TrackingReminder
     */
    lastValue?: number;
    /**
     * UTC ISO 8601 YYYY-MM-DDThh:mm:ss  timestamp for the reminder time of the latest tracking reminder notification that has been pre-emptively generated in the database
     * @type {string}
     * @memberof TrackingReminder
     */
    latestTrackingReminderNotificationReminderTime?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof TrackingReminder
     */
    localDailyReminderNotificationTimes?: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof TrackingReminder
     */
    localDailyReminderNotificationTimesForAllReminders?: Array<string>;
    /**
     * Ex: 1
     * @type {boolean}
     * @memberof TrackingReminder
     */
    manualTracking?: boolean;
    /**
     * Ex: 5. Unit: User-specified or common.
     * @type {number}
     * @memberof TrackingReminder
     */
    maximumAllowedValue?: number;
    /**
     * Ex: 1. Unit: User-specified or common.
     * @type {number}
     * @memberof TrackingReminder
     */
    minimumAllowedValue?: number;
    /**
     * Ex: 1501555520
     * @type {number}
     * @memberof TrackingReminder
     */
    nextReminderTimeEpochSeconds?: number;
    /**
     * True if the reminders should appear in the notification bar
     * @type {boolean}
     * @memberof TrackingReminder
     */
    notificationBar?: boolean;
    /**
     * Ex: 445
     * @type {number}
     * @memberof TrackingReminder
     */
    numberOfRawMeasurements?: number;
    /**
     * Ex: 1
     * @type {number}
     * @memberof TrackingReminder
     */
    numberOfUniqueValues?: number;
    /**
     * Indicates whether or not the variable is usually an outcome of interest such as a symptom or emotion
     * @type {boolean}
     * @memberof TrackingReminder
     */
    outcome?: boolean;
    /**
     * Ex: img/variable_categories/symptoms.png
     * @type {string}
     * @memberof TrackingReminder
     */
    pngPath?: string;
    /**
     * Ex: https://web.quantimo.do/img/variable_categories/symptoms.png
     * @type {string}
     * @memberof TrackingReminder
     */
    pngUrl?: string;
    /**
     * Link to associated product for purchase
     * @type {string}
     * @memberof TrackingReminder
     */
    productUrl?: string;
    /**
     * True if the reminders should appear as a popup notification
     * @type {boolean}
     * @memberof TrackingReminder
     */
    popUp?: boolean;
    /**
     * Ex: How is your overall mood?
     * @type {string}
     * @memberof TrackingReminder
     */
    question?: string;
    /**
     * Ex: How is your overall mood on a scale of 1 to 5??
     * @type {string}
     * @memberof TrackingReminder
     */
    longQuestion?: string;
    /**
     * Latest time of day at which reminders should appear in UTC HH:MM:SS format
     * @type {string}
     * @memberof TrackingReminder
     */
    reminderEndTime?: string;
    /**
     * Number of seconds between one reminder and the next
     * @type {number}
     * @memberof TrackingReminder
     */
    reminderFrequency: number;
    /**
     * String identifier for the sound to accompany the reminder
     * @type {string}
     * @memberof TrackingReminder
     */
    reminderSound?: string;
    /**
     * Ex: 1469760320
     * @type {number}
     * @memberof TrackingReminder
     */
    reminderStartEpochSeconds?: number;
    /**
     * Earliest time of day at which reminders should appear in UTC HH:MM:SS format
     * @type {string}
     * @memberof TrackingReminder
     */
    reminderStartTime?: string;
    /**
     * Ex: 21:45:20
     * @type {string}
     * @memberof TrackingReminder
     */
    reminderStartTimeLocal?: string;
    /**
     * Ex: 09:45 PM
     * @type {string}
     * @memberof TrackingReminder
     */
    reminderStartTimeLocalHumanFormatted?: string;
    /**
     * Ex: true
     * @type {boolean}
     * @memberof TrackingReminder
     */
    repeating?: boolean;
    /**
     * Ex: 01:00:00
     * @type {string}
     * @memberof TrackingReminder
     */
    secondDailyReminderTime?: string;
    /**
     * Ex: 1. Unit: User-specified or common.
     * @type {number}
     * @memberof TrackingReminder
     */
    secondToLastValue?: number;
    /**
     * True if the reminders should be delivered via SMS
     * @type {boolean}
     * @memberof TrackingReminder
     */
    sms?: boolean;
    /**
     * Earliest date on which the user should be reminded to track in YYYY-MM-DD format
     * @type {string}
     * @memberof TrackingReminder
     */
    startTrackingDate?: string;
    /**
     * Latest date on which the user should be reminded to track in YYYY-MM-DD format
     * @type {string}
     * @memberof TrackingReminder
     */
    stopTrackingDate?: string;
    /**
     * Ex: https://web.quantimo.do/img/variable_categories/symptoms.svg
     * @type {string}
     * @memberof TrackingReminder
     */
    svgUrl?: string;
    /**
     * Ex: 20:00:00
     * @type {string}
     * @memberof TrackingReminder
     */
    thirdDailyReminderTime?: string;
    /**
     * Ex: 3
     * @type {number}
     * @memberof TrackingReminder
     */
    thirdToLastValue?: number;
    /**
     * Ex: 11841
     * @type {number}
     * @memberof TrackingReminder
     */
    trackingReminderId?: number;
    /**
     * Ex: Not Found
     * @type {string}
     * @memberof TrackingReminder
     */
    trackingReminderImageUrl?: string;
    /**
     * UPC or other barcode scan result
     * @type {string}
     * @memberof TrackingReminder
     */
    upc?: string;
    /**
     * When the record in the database was last updated. Use UTC ISO 8601 YYYY-MM-DDThh:mm:ss  datetime format. Time zone should be UTC and not local.
     * @type {string}
     * @memberof TrackingReminder
     */
    updatedAt?: string;
    /**
     * ID of User
     * @type {number}
     * @memberof TrackingReminder
     */
    userId?: number;
    /**
     * Ex: /5
     * @type {string}
     * @memberof TrackingReminder
     */
    userVariableUnitAbbreviatedName?: string;
    /**
     * Ex: 5
     * @type {number}
     * @memberof TrackingReminder
     */
    userVariableUnitCategoryId?: number;
    /**
     * Ex: Rating
     * @type {string}
     * @memberof TrackingReminder
     */
    userVariableUnitCategoryName?: string;
    /**
     * Ex: 10
     * @type {number}
     * @memberof TrackingReminder
     */
    userVariableUnitId?: number;
    /**
     * Ex: 1 to 5 Rating
     * @type {string}
     * @memberof TrackingReminder
     */
    userVariableUnitName?: string;
    /**
     * Ex: 10
     * @type {number}
     * @memberof TrackingReminder
     */
    userVariableVariableCategoryId?: number;
    /**
     * Ex: Symptoms
     * @type {string}
     * @memberof TrackingReminder
     */
    userVariableVariableCategoryName?: string;
    /**
     * Valence indicates what type of buttons should be used when recording measurements for this variable. positive - Face buttons with the happiest face equating to a 5/5 rating where higher is better like Overall Mood. negative - Face buttons with happiest face equating to a 1/5 rating where lower is better like Headache Severity. numeric - Just 1 to 5 numeric buttons for neutral variables.
     * @type {string}
     * @memberof TrackingReminder
     */
    valence?: string;
    /**
     * Ex: Rate daily
     * @type {string}
     * @memberof TrackingReminder
     */
    valueAndFrequencyTextDescription?: string;
    /**
     * Ex: Rate daily at 09:45 PM
     * @type {string}
     * @memberof TrackingReminder
     */
    valueAndFrequencyTextDescriptionWithTime?: string;
    /**
     * Ex: 10
     * @type {number}
     * @memberof TrackingReminder
     */
    variableCategoryId?: number;
    /**
     * Ex: https://static.quantimo.do/img/variable_categories/sad-96.png
     * @type {string}
     * @memberof TrackingReminder
     */
    variableCategoryImageUrl?: string;
    /**
     * Ex: Emotions, Treatments, Symptoms...
     * @type {string}
     * @memberof TrackingReminder
     */
    variableCategoryName: TrackingReminderVariableCategoryNameEnum;
    /**
     * Valence indicates what type of buttons should be used when recording measurements for this variable. positive - Face buttons with the happiest face equating to a 5/5 rating where higher is better like Overall Mood. negative - Face buttons with happiest face equating to a 1/5 rating where lower is better like Headache Severity. numeric - Just 1 to 5 numeric buttons for neutral variables.
     * @type {string}
     * @memberof TrackingReminder
     */
    variableDescription?: string;
    /**
     * Id for the variable to be tracked
     * @type {number}
     * @memberof TrackingReminder
     */
    variableId?: number;
    /**
     * Name of the variable to be used when sending measurements
     * @type {string}
     * @memberof TrackingReminder
     */
    variableName: string;
}
export declare function TrackingReminderFromJSON(json: any): TrackingReminder;
export declare function TrackingReminderFromJSONTyped(json: any, ignoreDiscriminator: boolean): TrackingReminder;
export declare function TrackingReminderToJSON(value?: TrackingReminder | null): any;
/**
* @export
* @enum {string}
*/
export declare enum TrackingReminderCombinationOperationEnum {
    MEAN = "MEAN",
    SUM = "SUM"
}
/**
* @export
* @enum {string}
*/
export declare enum TrackingReminderVariableCategoryNameEnum {
    Activity = "Activity",
    Books = "Books",
    CausesOfIllness = "Causes of Illness",
    CognitivePerformance = "Cognitive Performance",
    Conditions = "Conditions",
    Emotions = "Emotions",
    Environment = "Environment",
    Foods = "Foods",
    Goals = "Goals",
    Locations = "Locations",
    Miscellaneous = "Miscellaneous",
    MoviesAndTV = "Movies and TV",
    Music = "Music",
    Nutrients = "Nutrients",
    Payments = "Payments",
    PhysicalActivities = "Physical Activities",
    Physique = "Physique",
    Sleep = "Sleep",
    SocialInteractions = "Social Interactions",
    Software = "Software",
    Symptoms = "Symptoms",
    Treatments = "Treatments",
    VitalSigns = "Vital Signs"
}
