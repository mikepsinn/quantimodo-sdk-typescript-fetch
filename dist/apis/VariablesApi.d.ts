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
import * as runtime from '../runtime';
import { CommonResponse, UserTag, UserVariableDelete, Variable, VariableCategory } from '../models';
export interface DeleteUserTagRequest {
    taggedVariableId?: number;
    tagVariableId?: number;
}
export interface DeleteUserVariableRequest {
    variableId: UserVariableDelete;
}
export interface GetVariablesRequest {
    includeCharts?: boolean;
    numberOfRawMeasurements?: string;
    userId?: number;
    variableCategoryName?: GetVariablesVariableCategoryNameEnum;
    name?: string;
    variableName?: string;
    updatedAt?: string;
    sourceName?: string;
    earliestMeasurementTime?: string;
    latestMeasurementTime?: string;
    id?: number;
    lastSourceName?: string;
    limit?: number;
    offset?: number;
    sort?: string;
    includePublic?: boolean;
    manualTracking?: boolean;
    clientId?: string;
    upc?: string;
    effectOrCause?: string;
    publicEffectOrCause?: string;
    exactMatch?: boolean;
    variableCategoryId?: number;
    includePrivate?: boolean;
    searchPhrase?: string;
    synonyms?: string;
    taggedVariableId?: number;
    tagVariableId?: number;
    joinVariableId?: number;
    parentUserTagVariableId?: number;
    childUserTagVariableId?: number;
    ingredientUserTagVariableId?: number;
    ingredientOfUserTagVariableId?: number;
    commonOnly?: boolean;
    userOnly?: boolean;
    platform?: GetVariablesPlatformEnum;
    includeTags?: boolean;
    recalculate?: boolean;
    variableId?: number;
    concise?: boolean;
    refresh?: boolean;
}
export interface PostUserTagsRequest {
    body: UserTag;
    userId?: number;
}
export interface PostUserVariablesRequest {
    userVariables: Array<Variable>;
    includePrivate?: boolean;
    clientId?: string;
    includePublic?: boolean;
    searchPhrase?: string;
    exactMatch?: boolean;
    manualTracking?: boolean;
    variableCategoryName?: PostUserVariablesVariableCategoryNameEnum;
    variableCategoryId?: number;
    synonyms?: string;
    platform?: PostUserVariablesPlatformEnum;
}
export interface ResetUserVariableSettingsRequest {
    variableId: UserVariableDelete;
}
/**
 *
 */
export declare class VariablesApi extends runtime.BaseAPI {
    /**
     * Delete previously created user tags or ingredients.
     * Delete user tag or ingredient
     */
    deleteUserTagRaw(requestParameters: DeleteUserTagRequest): Promise<runtime.ApiResponse<CommonResponse>>;
    /**
     * Delete previously created user tags or ingredients.
     * Delete user tag or ingredient
     */
    deleteUserTag(requestParameters: DeleteUserTagRequest): Promise<CommonResponse>;
    /**
     * Users can delete all of their measurements for a variable
     * Delete All Measurements For Variable
     */
    deleteUserVariableRaw(requestParameters: DeleteUserVariableRequest): Promise<runtime.ApiResponse<void>>;
    /**
     * Users can delete all of their measurements for a variable
     * Delete All Measurements For Variable
     */
    deleteUserVariable(requestParameters: DeleteUserVariableRequest): Promise<void>;
    /**
     * The variable categories include Activity, Causes of Illness, Cognitive Performance, Conditions, Environment, Foods, Location, Miscellaneous, Mood, Nutrition, Physical Activity, Physique, Sleep, Social Interactions, Symptoms, Treatments, Vital Signs, and Goals.
     * Variable categories
     */
    getVariableCategoriesRaw(): Promise<runtime.ApiResponse<Array<VariableCategory>>>;
    /**
     * The variable categories include Activity, Causes of Illness, Cognitive Performance, Conditions, Environment, Foods, Location, Miscellaneous, Mood, Nutrition, Physical Activity, Physique, Sleep, Social Interactions, Symptoms, Treatments, Vital Signs, and Goals.
     * Variable categories
     */
    getVariableCategories(): Promise<Array<VariableCategory>>;
    /**
     * Get variables. If the user has specified variable settings, these are provided instead of the common variable defaults.
     * Get variables along with related user-specific analysis settings and statistics
     */
    getVariablesRaw(requestParameters: GetVariablesRequest): Promise<runtime.ApiResponse<Array<Variable>>>;
    /**
     * Get variables. If the user has specified variable settings, these are provided instead of the common variable defaults.
     * Get variables along with related user-specific analysis settings and statistics
     */
    getVariables(requestParameters: GetVariablesRequest): Promise<Array<Variable>>;
    /**
     * This endpoint allows users to tag foods with their ingredients.  This information will then be used to infer the user intake of the different ingredients by just entering the foods. The inferred intake levels will then be used to determine the effects of different nutrients on the user during analysis.
     * Post or update user tags or ingredients
     */
    postUserTagsRaw(requestParameters: PostUserTagsRequest): Promise<runtime.ApiResponse<CommonResponse>>;
    /**
     * This endpoint allows users to tag foods with their ingredients.  This information will then be used to infer the user intake of the different ingredients by just entering the foods. The inferred intake levels will then be used to determine the effects of different nutrients on the user during analysis.
     * Post or update user tags or ingredients
     */
    postUserTags(requestParameters: PostUserTagsRequest): Promise<CommonResponse>;
    /**
     * Users can change the parameters used in analysis of that variable such as the expected duration of action for a variable to have an effect, the estimated delay before the onset of action. In order to filter out erroneous data, they are able to set the maximum and minimum reasonable daily values for a variable.
     * Update User Settings for a Variable
     */
    postUserVariablesRaw(requestParameters: PostUserVariablesRequest): Promise<runtime.ApiResponse<CommonResponse>>;
    /**
     * Users can change the parameters used in analysis of that variable such as the expected duration of action for a variable to have an effect, the estimated delay before the onset of action. In order to filter out erroneous data, they are able to set the maximum and minimum reasonable daily values for a variable.
     * Update User Settings for a Variable
     */
    postUserVariables(requestParameters: PostUserVariablesRequest): Promise<CommonResponse>;
    /**
     * Reset user settings for a variable to defaults
     * Reset user settings for a variable to defaults
     */
    resetUserVariableSettingsRaw(requestParameters: ResetUserVariableSettingsRequest): Promise<runtime.ApiResponse<void>>;
    /**
     * Reset user settings for a variable to defaults
     * Reset user settings for a variable to defaults
     */
    resetUserVariableSettings(requestParameters: ResetUserVariableSettingsRequest): Promise<void>;
}
/**
    * @export
    * @enum {string}
    */
export declare enum GetVariablesVariableCategoryNameEnum {
    Activities = "Activities",
    Books = "Books",
    CausesOfIllness = "Causes of Illness",
    CognitivePerformance = "Cognitive Performance",
    Conditions = "Conditions",
    Emotions = "Emotions",
    Environment = "Environment",
    Foods = "Foods",
    Location = "Location",
    Miscellaneous = "Miscellaneous",
    MoviesAndTV = "Movies and TV",
    Music = "Music",
    Nutrients = "Nutrients",
    Payments = "Payments",
    PhysicalActivity = "Physical Activity",
    Physique = "Physique",
    Sleep = "Sleep",
    SocialInteractions = "Social Interactions",
    Software = "Software",
    Symptoms = "Symptoms",
    Treatments = "Treatments",
    VitalSigns = "Vital Signs",
    Goals = "Goals"
}
/**
    * @export
    * @enum {string}
    */
export declare enum GetVariablesPlatformEnum {
    Chrome = "chrome",
    Android = "android",
    Ios = "ios",
    Web = "web"
}
/**
    * @export
    * @enum {string}
    */
export declare enum PostUserVariablesVariableCategoryNameEnum {
    Activities = "Activities",
    Books = "Books",
    CausesOfIllness = "Causes of Illness",
    CognitivePerformance = "Cognitive Performance",
    Conditions = "Conditions",
    Emotions = "Emotions",
    Environment = "Environment",
    Foods = "Foods",
    Location = "Location",
    Miscellaneous = "Miscellaneous",
    MoviesAndTV = "Movies and TV",
    Music = "Music",
    Nutrients = "Nutrients",
    Payments = "Payments",
    PhysicalActivity = "Physical Activity",
    Physique = "Physique",
    Sleep = "Sleep",
    SocialInteractions = "Social Interactions",
    Software = "Software",
    Symptoms = "Symptoms",
    Treatments = "Treatments",
    VitalSigns = "Vital Signs",
    Goals = "Goals"
}
/**
    * @export
    * @enum {string}
    */
export declare enum PostUserVariablesPlatformEnum {
    Chrome = "chrome",
    Android = "android",
    Ios = "ios",
    Web = "web"
}