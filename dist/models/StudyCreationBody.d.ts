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
/**
 *
 * @export
 * @interface StudyCreationBody
 */
export interface StudyCreationBody {
    /**
     * Name of predictor variable
     * @type {string}
     * @memberof StudyCreationBody
     */
    causeVariableName: string;
    /**
     * Name of the outcome variable
     * @type {string}
     * @memberof StudyCreationBody
     */
    effectVariableName: string;
    /**
     * Title of your study (optional)
     * @type {string}
     * @memberof StudyCreationBody
     */
    studyTitle?: string;
    /**
     * Individual studies are based on data of a single user. Group studies are based on data from a specific group of individuals who have joined.  Global studies are based on aggregated and anonymously shared data from all users.
     * @type {string}
     * @memberof StudyCreationBody
     */
    type: StudyCreationBodyTypeEnum;
}
export declare function StudyCreationBodyFromJSON(json: any): StudyCreationBody;
export declare function StudyCreationBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): StudyCreationBody;
export declare function StudyCreationBodyToJSON(value?: StudyCreationBody | null): any;
/**
* @export
* @enum {string}
*/
export declare enum StudyCreationBodyTypeEnum {
    Individual = "individual",
    Group = "group",
    Global = "global"
}
