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
import { Button, InputField } from './';
/**
 *
 * @export
 * @interface Card
 */
export interface Card {
    /**
     *
     * @type {Array<Button>}
     * @memberof Card
     */
    actionSheetButtons?: Array<Button>;
    /**
     * Smaller square image
     * @type {string}
     * @memberof Card
     */
    avatar?: string;
    /**
     * Smaller circular image
     * @type {string}
     * @memberof Card
     */
    avatarCircular?: string;
    /**
     * Ex: #f2f2f2
     * @type {string}
     * @memberof Card
     */
    backgroundColor?: string;
    /**
     *
     * @type {Array<Button>}
     * @memberof Card
     */
    buttons?: Array<Button>;
    /**
     *
     * @type {Array<Button>}
     * @memberof Card
     */
    buttonsSecondary?: Array<Button>;
    /**
     * Ex: Content
     * @type {string}
     * @memberof Card
     */
    content?: string;
    /**
     * Ex: Title
     * @type {string}
     * @memberof Card
     */
    headerTitle?: string;
    /**
     * HTML for the entire card.
     * @type {string}
     * @memberof Card
     */
    html?: string;
    /**
     * Ex: <div>Content</div>
     * @type {string}
     * @memberof Card
     */
    htmlContent?: string;
    /**
     * HTML element id
     * @type {string}
     * @memberof Card
     */
    id: string;
    /**
     * Larger image of variable dimensions
     * @type {string}
     * @memberof Card
     */
    image?: string;
    /**
     *
     * @type {Array<InputField>}
     * @memberof Card
     */
    inputFields?: Array<InputField>;
    /**
     * Ex: ion-refresh
     * @type {string}
     * @memberof Card
     */
    ionIcon?: string;
    /**
     * A link to a web page or something. Not much more to say about that.
     * @type {string}
     * @memberof Card
     */
    link?: string;
    /**
     * Key value pairs derived from user input fields, button clicks, or preset defaults
     * @type {object}
     * @memberof Card
     */
    parameters?: object;
    /**
     *
     * @type {Array<Card>}
     * @memberof Card
     */
    relatedCards?: Array<Card>;
    /**
     *
     * @type {Button}
     * @memberof Card
     */
    selectedButton?: Button;
    /**
     * Ex: sharingBody
     * @type {string}
     * @memberof Card
     */
    sharingBody?: string;
    /**
     *
     * @type {Array<Button>}
     * @memberof Card
     */
    sharingButtons?: Array<Button>;
    /**
     * Ex: sharingTitle
     * @type {string}
     * @memberof Card
     */
    sharingTitle?: string;
    /**
     * Ex: subTitle
     * @type {string}
     * @memberof Card
     */
    subHeader?: string;
    /**
     * Ex: subTitle
     * @type {string}
     * @memberof Card
     */
    subTitle?: string;
    /**
     * Ex: Title
     * @type {string}
     * @memberof Card
     */
    title?: string;
}
export declare function CardFromJSON(json: any): Card;
export declare function CardFromJSONTyped(json: any, ignoreDiscriminator: boolean): Card;
export declare function CardToJSON(value?: Card | null): any;