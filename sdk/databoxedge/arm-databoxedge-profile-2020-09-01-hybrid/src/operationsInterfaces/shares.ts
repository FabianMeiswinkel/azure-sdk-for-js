/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  Share,
  SharesListByDataBoxEdgeDeviceOptionalParams,
  SharesGetOptionalParams,
  SharesGetResponse,
  SharesCreateOrUpdateOptionalParams,
  SharesCreateOrUpdateResponse,
  SharesDeleteOptionalParams,
  SharesRefreshOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Shares. */
export interface Shares {
  /**
   * Lists all the shares in a Data Box Edge/Data Box Gateway device.
   * @param deviceName The device name.
   * @param resourceGroupName The resource group name.
   * @param options The options parameters.
   */
  listByDataBoxEdgeDevice(
    deviceName: string,
    resourceGroupName: string,
    options?: SharesListByDataBoxEdgeDeviceOptionalParams
  ): PagedAsyncIterableIterator<Share>;
  /**
   * Gets a share by name.
   * @param deviceName The device name.
   * @param name The share name.
   * @param resourceGroupName The resource group name.
   * @param options The options parameters.
   */
  get(
    deviceName: string,
    name: string,
    resourceGroupName: string,
    options?: SharesGetOptionalParams
  ): Promise<SharesGetResponse>;
  /**
   * Creates a new share or updates an existing share on the device.
   * @param deviceName The device name.
   * @param name The share name.
   * @param resourceGroupName The resource group name.
   * @param share The share properties.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    deviceName: string,
    name: string,
    resourceGroupName: string,
    share: Share,
    options?: SharesCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<SharesCreateOrUpdateResponse>,
      SharesCreateOrUpdateResponse
    >
  >;
  /**
   * Creates a new share or updates an existing share on the device.
   * @param deviceName The device name.
   * @param name The share name.
   * @param resourceGroupName The resource group name.
   * @param share The share properties.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    deviceName: string,
    name: string,
    resourceGroupName: string,
    share: Share,
    options?: SharesCreateOrUpdateOptionalParams
  ): Promise<SharesCreateOrUpdateResponse>;
  /**
   * Deletes the share on the Data Box Edge/Data Box Gateway device.
   * @param deviceName The device name.
   * @param name The share name.
   * @param resourceGroupName The resource group name.
   * @param options The options parameters.
   */
  beginDelete(
    deviceName: string,
    name: string,
    resourceGroupName: string,
    options?: SharesDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Deletes the share on the Data Box Edge/Data Box Gateway device.
   * @param deviceName The device name.
   * @param name The share name.
   * @param resourceGroupName The resource group name.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    deviceName: string,
    name: string,
    resourceGroupName: string,
    options?: SharesDeleteOptionalParams
  ): Promise<void>;
  /**
   * Refreshes the share metadata with the data from the cloud.
   * @param deviceName The device name.
   * @param name The share name.
   * @param resourceGroupName The resource group name.
   * @param options The options parameters.
   */
  beginRefresh(
    deviceName: string,
    name: string,
    resourceGroupName: string,
    options?: SharesRefreshOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Refreshes the share metadata with the data from the cloud.
   * @param deviceName The device name.
   * @param name The share name.
   * @param resourceGroupName The resource group name.
   * @param options The options parameters.
   */
  beginRefreshAndWait(
    deviceName: string,
    name: string,
    resourceGroupName: string,
    options?: SharesRefreshOptionalParams
  ): Promise<void>;
}