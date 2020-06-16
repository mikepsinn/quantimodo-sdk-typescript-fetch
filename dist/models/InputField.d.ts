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
import { Button } from './';
/**
 *
 * @export
 * @interface InputField
 */
export interface InputField {
    /**
     * What do you expect?
     * @type {string}
     * @memberof InputField
     */
    displayName: string;
    /**
     * What do you expect?
     * @type {string}
     * @memberof InputField
     */
    helpText?: string;
    /**
     * What do you expect?
     * @type {string}
     * @memberof InputField
     */
    hint?: string;
    /**
     * What do you expect?
     * @type {string}
     * @memberof InputField
     */
    icon?: string;
    /**
     * HTML element id
     * @type {string}
     * @memberof InputField
     */
    id?: string;
    /**
     * What do you expect?
     * @type {string}
     * @memberof InputField
     */
    image?: string;
    /**
     * What do you expect?
     * @type {string}
     * @memberof InputField
     */
    key?: string;
    /**
     * What do you expect?
     * @type {string}
     * @memberof InputField
     */
    labelLeft?: string;
    /**
     * What do you expect?
     * @type {string}
     * @memberof InputField
     */
    labelRight?: string;
    /**
     * What do you expect?
     * @type {string}
     * @memberof InputField
     */
    link?: string;
    /**
     * What do you expect?
     * @type {number}
     * @memberof InputField
     */
    maxLength?: number;
    /**
     * What do you expect?
     * @type {number}
     * @memberof InputField
     */
    maxValue?: number;
    /**
     * What do you expect?
     * @type {number}
     * @memberof InputField
     */
    minLength?: number;
    /**
     * What do you expect?
     * @type {number}
     * @memberof InputField
     */
    minValue?: number;
    /**
     * Selector list options
     * @type {Array<string>}
     * @memberof InputField
     */
    options?: Array<string>;
    /**
     * Ex: Title
     * @type {string}
     * @memberof InputField
     */
    placeholder?: string;
    /**
     * What do you expect?
     * @type {string}
     * @memberof InputField
     */
    postUrl?: string;
    /**
     * What do you expect?
     * @type {boolean}
     * @memberof InputField
     */
    required?: boolean;
    /**
     * Ex: Title
     * @type {boolean}
     * @memberof InputField
     */
    show?: boolean;
    /**
     *
     * @type {Button}
     * @memberof InputField
     */
    submitButton?: Button;
    /**
     * Ex: Title
     * @type {string}
     * @memberof InputField
     */
    type: InputFieldTypeEnum;
    /**
     * See http://html5pattern.com/ for examples
     * @type {string}
     * @memberof InputField
     */
    validationPattern?: string;
    /**
     * What do you expect?
     * @type {string}
     * @memberof InputField
     */
    value?: string;
}
export declare function InputFieldFromJSON(json: any): InputField;
export declare function InputFieldFromJSONTyped(json: any, ignoreDiscriminator: boolean): InputField;
export declare function InputFieldToJSON(value?: InputField | null): any;
/**
* @export
* @enum {string}
*/
export declare enum InputFieldTypeEnum {
    CheckBox = "check_box",
    Date = "date",
    Email = "email",
    Number = "number",
    PostalCode = "postal_code",
    SelectOption = "select_option",
    String = "string",
    Switch = "switch",
    TextArea = "text_area",
    Unit = "unit",
    VariableCategory = "variable_category"
}
