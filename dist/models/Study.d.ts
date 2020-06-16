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
import { Card, Correlation, ParticipantInstruction, StudyCharts, StudyHtml, StudyImages, StudyLinks, StudySharing, StudyText, StudyVotes, Variable } from './';
/**
 * A study analyzes the relationship between a predictor variable like gluten-intake and an outcome of interest such as overall mood.
 * @export
 * @interface Study
 */
export interface Study {
    /**
     * Ex: population, cohort, or individual
     * @type {string}
     * @memberof Study
     */
    type: string;
    /**
     * The user id of the principal investigator or subject if an individual studies
     * @type {number}
     * @memberof Study
     */
    userId?: number;
    /**
     * ID of the cohort study which is necessary to allow participants to join
     * @type {string}
     * @memberof Study
     */
    id?: string;
    /**
     *
     * @type {Variable}
     * @memberof Study
     */
    causeVariable?: Variable;
    /**
     * Ex: Sleep Quality
     * @type {string}
     * @memberof Study
     */
    causeVariableName?: string;
    /**
     *
     * @type {StudyCharts}
     * @memberof Study
     */
    studyCharts?: StudyCharts;
    /**
     *
     * @type {Variable}
     * @memberof Study
     */
    effectVariable?: Variable;
    /**
     * Ex: Overall Mood
     * @type {string}
     * @memberof Study
     */
    effectVariableName?: string;
    /**
     *
     * @type {ParticipantInstruction}
     * @memberof Study
     */
    participantInstructions?: ParticipantInstruction;
    /**
     *
     * @type {Correlation}
     * @memberof Study
     */
    statistics?: Correlation;
    /**
     *
     * @type {Card}
     * @memberof Study
     */
    studyCard?: Card;
    /**
     *
     * @type {StudyHtml}
     * @memberof Study
     */
    studyHtml?: StudyHtml;
    /**
     *
     * @type {StudyImages}
     * @memberof Study
     */
    studyImages?: StudyImages;
    /**
     *
     * @type {StudyLinks}
     * @memberof Study
     */
    studyLinks?: StudyLinks;
    /**
     *
     * @type {StudySharing}
     * @memberof Study
     */
    studySharing?: StudySharing;
    /**
     *
     * @type {StudyText}
     * @memberof Study
     */
    studyText?: StudyText;
    /**
     *
     * @type {StudyVotes}
     * @memberof Study
     */
    studyVotes?: StudyVotes;
    /**
     * True if you are sharing your data with this study
     * @type {boolean}
     * @memberof Study
     */
    joined?: boolean;
}
export declare function StudyFromJSON(json: any): Study;
export declare function StudyFromJSONTyped(json: any, ignoreDiscriminator: boolean): Study;
export declare function StudyToJSON(value?: Study | null): any;
