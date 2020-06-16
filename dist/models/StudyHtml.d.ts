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
 * @interface StudyHtml
 */
export interface StudyHtml {
    /**
     * Embeddable chart html
     * @type {string}
     * @memberof StudyHtml
     */
    chartHtml: string;
    /**
     * Play Store, App Store, Chrome Web Store
     * @type {string}
     * @memberof StudyHtml
     */
    downloadButtonsHtml?: string;
    /**
     * Embeddable study including HTML head section charts.  Modifiable css classes are study-title, study-section-header, study-section-body
     * @type {string}
     * @memberof StudyHtml
     */
    fullPageWithHead?: string;
    /**
     * Embeddable study text html including charts.  Modifiable css classes are study-title, study-section-header, study-section-body
     * @type {string}
     * @memberof StudyHtml
     */
    fullStudyHtml: string;
    /**
     * Embeddable study html including charts and css styling
     * @type {string}
     * @memberof StudyHtml
     */
    fullStudyHtmlWithCssStyles?: string;
    /**
     * Instructions for study participation
     * @type {string}
     * @memberof StudyHtml
     */
    participantInstructionsHtml?: string;
    /**
     * Embeddable table with statistics
     * @type {string}
     * @memberof StudyHtml
     */
    statisticsTableHtml?: string;
    /**
     * Text summary
     * @type {string}
     * @memberof StudyHtml
     */
    studyAbstractHtml?: string;
    /**
     * Title, study image, abstract with CSS styling
     * @type {string}
     * @memberof StudyHtml
     */
    studyHeaderHtml?: string;
    /**
     * PNG image
     * @type {string}
     * @memberof StudyHtml
     */
    studyImageHtml?: string;
    /**
     * Facebook, Twitter, Google+
     * @type {string}
     * @memberof StudyHtml
     */
    studyMetaHtml?: string;
    /**
     * Formatted study text sections
     * @type {string}
     * @memberof StudyHtml
     */
    studyTextHtml?: string;
    /**
     * What do you expect?
     * @type {string}
     * @memberof StudyHtml
     */
    socialSharingButtonHtml?: string;
    /**
     * What do you expect?
     * @type {string}
     * @memberof StudyHtml
     */
    studySummaryBoxHtml?: string;
}
export declare function StudyHtmlFromJSON(json: any): StudyHtml;
export declare function StudyHtmlFromJSONTyped(json: any, ignoreDiscriminator: boolean): StudyHtml;
export declare function StudyHtmlToJSON(value?: StudyHtml | null): any;