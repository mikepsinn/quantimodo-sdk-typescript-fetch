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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface UserBlog
 */
export interface UserBlog {
    /**
     * What do you expect?
     * @type {number}
     * @memberof UserBlog
     */
    id: number;
    /**
     * What do you expect?
     * @type {number}
     * @memberof UserBlog
     */
    userId: number;
    /**
     * What do you expect?
     * @type {number}
     * @memberof UserBlog
     */
    blogId: number;
    /**
     * Additional userblog key-value data
     * @type {Array<object>}
     * @memberof UserBlog
     */
    metaDataArray?: Array<object>;
}

export function UserBlogFromJSON(json: any): UserBlog {
    return UserBlogFromJSONTyped(json, false);
}

export function UserBlogFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserBlog {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'userId': json['userId'],
        'blogId': json['blogId'],
        'metaDataArray': !exists(json, 'metaDataArray') ? undefined : json['metaDataArray'],
    };
}

export function UserBlogToJSON(value?: UserBlog | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'userId': value.userId,
        'blogId': value.blogId,
        'metaDataArray': value.metaDataArray,
    };
}


