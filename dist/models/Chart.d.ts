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
 * @interface Chart
 */
export interface Chart {
    /**
     *  Highcharts config that can be used if you have highcharts.js included on the page
     * @type {object}
     * @memberof Chart
     */
    highchartConfig?: object;
    /**
     * Ex: correlationScatterPlot
     * @type {string}
     * @memberof Chart
     */
    chartId?: string;
    /**
     * Ex: Overall Mood following Sleep Duration (R = -0.173)
     * @type {string}
     * @memberof Chart
     */
    chartTitle?: string;
    /**
     * Ex: The chart above indicates that an increase in Sleep Duration is usually followed by an decrease in Overall Mood.
     * @type {string}
     * @memberof Chart
     */
    explanation?: string;
    /**
     * Url to a static svg of the chart
     * @type {string}
     * @memberof Chart
     */
    svgUrl?: string;
    /**
     * SVG string than can be embedded directly in HTML
     * @type {string}
     * @memberof Chart
     */
    svg?: string;
}
export declare function ChartFromJSON(json: any): Chart;
export declare function ChartFromJSONTyped(json: any, ignoreDiscriminator: boolean): Chart;
export declare function ChartToJSON(value?: Chart | null): any;
