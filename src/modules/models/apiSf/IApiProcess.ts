/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { OPERATION } from "../../components/statics";
import { MigrationJobTask, ScriptOrg, IApiJobCreateResult as IApiJobCreateResult, ApiResult } from "..";


export default interface IApiProcess {

    /**
     * Executes complete api operation 
     * including api job create and api job execute
     *
     * @param {Array<any>} allRecords The all source records to process
     * @param {Function} progressCallback The progress callback function
     * @returns {Promise<IApiJobCreateResult>} 
     * @memberof IApiProcess
     */
    executeCRUD(allRecords: Array<any>, progressCallback: (progress: ApiResult) => void): Promise<Array<any>>;

    /**
     * Creates api job
     * @param {Array<any>} allRecords The all source records to process
     * @returns {Promise<IApiJobCreateResult>} 
     * @memberof IApiProcess
     */
    createCRUDApiJobAsync: (allrecords: Array<any>) => Promise<IApiJobCreateResult>;

    /**
     * Executes previously created api job.
     * Returns the same records as the input. 
     * On Insert operation will add a new Record Id value to each returned record.
     *
     * @param {Function} progressCallback The progress callback function
     * @returns {Promise<Array<any>>}
     * @memberof IApiProcess
     */
    processCRUDApiJobAsync: (progressCallback: (progress: ApiResult) => void) => Promise<Array<any>>;

    /**
     * Creates and executes api batch on the given chunk of the input records.
     * The function is a part of the api job execution.
     *
     * @param {Array<any>} chunkRecords The part of the input 
     *                                  records to process with the batch
     * @param {Function} progressCallback The progress callback function
     * @returns {Promise<Array<any>>}
     * @memberof IApiProcess
     */
    processCRUDApiBatchAsync(chunkRecords: Array<any>, progressCallback: (progress: ApiResult) => void): Promise<Array<any>>;


}

