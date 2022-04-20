/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { IotCentralClient } = require("@azure/arm-iotcentral");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Get all private endpoint connections of a IoT Central Application.
 *
 * @summary Get all private endpoint connections of a IoT Central Application.
 * x-ms-original-file: specification/iotcentral/resource-manager/Microsoft.IoTCentral/preview/2021-11-01-preview/examples/PrivateEndpointConnections_List.json
 */
async function privateEndpointConnectionsList() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "resRg";
  const resourceName = "myIoTCentralApp";
  const credential = new DefaultAzureCredential();
  const client = new IotCentralClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.privateEndpointConnections.list(resourceGroupName, resourceName)) {
    resArray.push(item);
  }
  console.log(resArray);
}

privateEndpointConnectionsList().catch(console.error);