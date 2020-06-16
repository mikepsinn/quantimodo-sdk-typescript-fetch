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


import * as runtime from '../runtime';
import {
    Unit,
    UnitFromJSON,
    UnitToJSON,
    UnitCategory,
    UnitCategoryFromJSON,
    UnitCategoryToJSON,
} from '../models';

/**
 * 
 */
export class UnitsApi extends runtime.BaseAPI {

    /**
     * Get a list of the categories of measurement units such as \'Distance\', \'Duration\', \'Energy\', \'Frequency\', \'Miscellany\', \'Pressure\', \'Proportion\', \'Rating\', \'Temperature\', \'Volume\', and \'Weight\'.
     * Get unit categories
     */
    async getUnitCategoriesRaw(): Promise<runtime.ApiResponse<Array<UnitCategory>>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["access_token"] = this.configuration.apiKey("access_token"); // access_token authentication
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("quantimodo_oauth2", ["basic"]);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/v3/unitCategories`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(UnitCategoryFromJSON));
    }

    /**
     * Get a list of the categories of measurement units such as \'Distance\', \'Duration\', \'Energy\', \'Frequency\', \'Miscellany\', \'Pressure\', \'Proportion\', \'Rating\', \'Temperature\', \'Volume\', and \'Weight\'.
     * Get unit categories
     */
    async getUnitCategories(): Promise<Array<UnitCategory>> {
        const response = await this.getUnitCategoriesRaw();
        return await response.value();
    }

    /**
     * Get a list of the available measurement units
     * Get units
     */
    async getUnitsRaw(): Promise<runtime.ApiResponse<Array<Unit>>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["access_token"] = this.configuration.apiKey("access_token"); // access_token authentication
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("quantimodo_oauth2", ["basic"]);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/v3/units`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(UnitFromJSON));
    }

    /**
     * Get a list of the available measurement units
     * Get units
     */
    async getUnits(): Promise<Array<Unit>> {
        const response = await this.getUnitsRaw();
        return await response.value();
    }

}