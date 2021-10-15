let nock = require('nock');

module.exports.hash = "a70b4f11fe2032a597821e1485e9d50a";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/88888888-8888-8888-8888-888888888888/oauth2/v2.0/token', "response_type=token&grant_type=client_credentials&client_id=azure_client_id&client_secret=azure_client_secret&scope=https%3A%2F%2Fsanitized%2F")
  .reply(200, {"token_type":"Bearer","expires_in":86399,"ext_expires_in":86399,"access_token":"access_token"}, [
  'Cache-Control',
  'no-store, no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  '7ef032e9-caa3-4be7-8d14-1d9e80f41f00',
  'x-ms-ests-server',
  '2.1.12108.11 - SEASLR2 ProdSlices',
  'Set-Cookie',
  'fpc=ArMlshYTEhVEr3qe-Wvo3So; expires=Thu, 11-Nov-2021 03:34:49 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Tue, 12 Oct 2021 03:34:49 GMT',
  'Content-Length',
  '1318'
]);

nock('https://endpoint', {"encodedQueryParams":true})
  .get('/catalog/api/atlas/v2/types/typedefs')
  .query(true)
  'Date',
  'Tue, 12 Oct 2021 03:34:50 GMT',
  'Content-Type',
  'application/json; charset=utf-8',
  'Server',
  'AzurePurview',
  'Cache-Control',
  'no-store, must-revalidate, no-cache, max-age=0',
  'Pragma',
  'no-cache',
  'Transfer-Encoding',
  'chunked',
  'Expires',
  '0',
  'Access-Control-Allow-Headers',
  'authorization,content-type,x-xsrf-header,x-ms-client-request-id,lastmodifiedts',
  'Access-Control-Allow-Methods',
  'GET,OPTIONS,HEAD,PUT,POST,DELETE,PATCH',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,lastmodifiedts',
  'Strict-Transport-Security',
  'max-age=31536000 ; includeSubDomains',
  'x-ms-correlation-request-id',
  'a52ca5a4-94b6-4b6b-b506-0dff55f0d85a',
  'x-ms-request-id',
  '12a6ba29-670e-438b-9d48-0f3ca420d856',
  'X-Frame-Options',
  'DENY',
  'X-Content-Type-Options',
  'nosniff',
  'X-Content-Type-Options',
  'nosniff',
  'x-xss-protection',
  '1; mode=block',
  'Content-Security-Policy',
  "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' blob: data:; connect-src 'self'; img-src 'self' blob: data:; style-src 'self' 'unsafe-inline';font-src 'self' data:"
]);