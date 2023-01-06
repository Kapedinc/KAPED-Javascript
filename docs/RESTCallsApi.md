# KapedPartnerApi.RESTCallsApi

All URIs are relative to *https://api.kaped.io/partner*

Method | HTTP request | Description
------------- | ------------- | -------------
[**activeCardGet**](RESTCallsApi.md#activeCardGet) | **GET** /active-card | active-card
[**applicationStatusUpdate**](RESTCallsApi.md#applicationStatusUpdate) | **POST** /application-status-update | Application Status Update
[**checkStatusGet**](RESTCallsApi.md#checkStatusGet) | **GET** /check-status | check-status
[**editApplication**](RESTCallsApi.md#editApplication) | **POST** /edit-application | Edit Application
[**listApplicationGet**](RESTCallsApi.md#listApplicationGet) | **GET** /list-application | list-application
[**loginTokenPost**](RESTCallsApi.md#loginTokenPost) | **POST** /login-token | Login
[**resumeApplication**](RESTCallsApi.md#resumeApplication) | **POST** /resume-application | Resume Application
[**singleApplicationGet**](RESTCallsApi.md#singleApplicationGet) | **GET** /single-application | single-application
[**singleCardGet**](RESTCallsApi.md#singleCardGet) | **GET** /single-card | single-card
[**submitApplication**](RESTCallsApi.md#submitApplication) | **POST** /submit-application | Submit Application
[**viewCardDetail**](RESTCallsApi.md#viewCardDetail) | **POST** /view-card-detail | View card Detail

<a name="activeCardGet"></a>
# **activeCardGet**
> activeCardGet(apiKey)

active-card

### Example
```javascript
import {KapedPartnerApi} from 'kaped_partner_api';
let defaultClient = KapedPartnerApi.ApiClient.instance;


let apiInstance = new KapedPartnerApi.RESTCallsApi();
let apiKey = "apiKey_example"; // String | 

apiInstance.activeCardGet(apiKey, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="applicationStatusUpdate"></a>
# **applicationStatusUpdate**
> applicationStatusUpdate(body, apiKey)

Application Status Update

### Example
```javascript
import {KapedPartnerApi} from 'kaped_partner_api';
let defaultClient = KapedPartnerApi.ApiClient.instance;


let apiInstance = new KapedPartnerApi.RESTCallsApi();
let body = new KapedPartnerApi.ApplicationStatusUpdate(); // ApplicationStatusUpdate | 
let apiKey = "apiKey_example"; // String | 

apiInstance.applicationStatusUpdate(body, apiKey, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ApplicationStatusUpdate**](ApplicationStatusUpdate.md)|  | 
 **apiKey** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="checkStatusGet"></a>
# **checkStatusGet**
> checkStatusGet(apiKey, applicationID)

check-status

### Example
```javascript
import {KapedPartnerApi} from 'kaped_partner_api';
let defaultClient = KapedPartnerApi.ApiClient.instance;


let apiInstance = new KapedPartnerApi.RESTCallsApi();
let apiKey = "apiKey_example"; // String | 
let applicationID = "applicationID_example"; // String | 

apiInstance.checkStatusGet(apiKey, applicationID, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | 
 **applicationID** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="editApplication"></a>
# **editApplication**
> editApplication(body, apiKey)

Edit Application

### Example
```javascript
import {KapedPartnerApi} from 'kaped_partner_api';
let defaultClient = KapedPartnerApi.ApiClient.instance;


let apiInstance = new KapedPartnerApi.RESTCallsApi();
let body = new KapedPartnerApi.EditApplication(); // EditApplication | 
let apiKey = "apiKey_example"; // String | 

apiInstance.editApplication(body, apiKey, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**EditApplication**](EditApplication.md)|  | 
 **apiKey** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="listApplicationGet"></a>
# **listApplicationGet**
> listApplicationGet(apiKey, type)

list-application

### Example
```javascript
import {KapedPartnerApi} from 'kaped_partner_api';
let defaultClient = KapedPartnerApi.ApiClient.instance;


let apiInstance = new KapedPartnerApi.RESTCallsApi();
let apiKey = "apiKey_example"; // String | 
let type = "type_example"; // String | 

apiInstance.listApplicationGet(apiKey, type, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | 
 **type** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="loginTokenPost"></a>
# **loginTokenPost**
> loginTokenPost(body, apiKey)

Login

### Example
```javascript
import {KapedPartnerApi} from 'kaped_partner_api';

let apiInstance = new KapedPartnerApi.RESTCallsApi();
let body = new KapedPartnerApi.Login(); // Login | 
let apiKey = "apiKey_example"; // String | 

apiInstance.loginTokenPost(body, apiKey, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Login**](Login.md)|  | 
 **apiKey** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="resumeApplication"></a>
# **resumeApplication**
> resumeApplication(body, apiKey)

Resume Application

### Example
```javascript
import {KapedPartnerApi} from 'kaped_partner_api';
let defaultClient = KapedPartnerApi.ApiClient.instance;


let apiInstance = new KapedPartnerApi.RESTCallsApi();
let body = new KapedPartnerApi.ResumeApplication(); // ResumeApplication | 
let apiKey = "apiKey_example"; // String | 

apiInstance.resumeApplication(body, apiKey, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ResumeApplication**](ResumeApplication.md)|  | 
 **apiKey** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="singleApplicationGet"></a>
# **singleApplicationGet**
> singleApplicationGet(apiKey, applicationID)

single-application

### Example
```javascript
import {KapedPartnerApi} from 'kaped_partner_api';
let defaultClient = KapedPartnerApi.ApiClient.instance;


let apiInstance = new KapedPartnerApi.RESTCallsApi();
let apiKey = "apiKey_example"; // String | 
let applicationID = "applicationID_example"; // String | 

apiInstance.singleApplicationGet(apiKey, applicationID, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | 
 **applicationID** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="singleCardGet"></a>
# **singleCardGet**
> singleCardGet(apiKey, userUniqueId, month)

single-card

### Example
```javascript
import {KapedPartnerApi} from 'kaped_partner_api';
let defaultClient = KapedPartnerApi.ApiClient.instance;


let apiInstance = new KapedPartnerApi.RESTCallsApi();
let apiKey = "apiKey_example"; // String | 
let userUniqueId = "userUniqueId_example"; // String | 
let month = "month_example"; // String | 

apiInstance.singleCardGet(apiKey, userUniqueId, month, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | 
 **userUniqueId** | **String**|  | 
 **month** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="submitApplication"></a>
# **submitApplication**
> SubmitApplication submitApplication(body, apiKey)

Submit Application

### Example
```javascript
import {KapedPartnerApi} from 'kaped_partner_api';
let defaultClient = KapedPartnerApi.ApiClient.instance;


let apiInstance = new KapedPartnerApi.RESTCallsApi();
let body = new KapedPartnerApi.SubmitApplication(); // SubmitApplication | 
let apiKey = "apiKey_example"; // String | 

apiInstance.submitApplication(body, apiKey, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SubmitApplication**](SubmitApplication.md)|  | 
 **apiKey** | **String**|  | 

### Return type

[**SubmitApplication**](SubmitApplication.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="viewCardDetail"></a>
# **viewCardDetail**
> viewCardDetail(body, apiKey)

View card Detail

### Example
```javascript
import {KapedPartnerApi} from 'kaped_partner_api';
let defaultClient = KapedPartnerApi.ApiClient.instance;


let apiInstance = new KapedPartnerApi.RESTCallsApi();
let body = new KapedPartnerApi.ViewCardDetail(); // ViewCardDetail | 
let apiKey = "apiKey_example"; // String | 

apiInstance.viewCardDetail(body, apiKey, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ViewCardDetail**](ViewCardDetail.md)|  | 
 **apiKey** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

