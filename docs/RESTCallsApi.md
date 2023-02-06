# KapedPartnerApi.RESTCallsApi

All URIs are relative to *https://api.kaped.io/partner*

Method | HTTP request | Description
------------- | ------------- | -------------
[**activeCardGet**](RESTCallsApi.md#activeCardGet) | **GET** /active-card | active-card
[**applicationStatusUpdate**](RESTCallsApi.md#applicationStatusUpdate) | **POST** /application-status-update | Application Status Update
[**checkStatusGet**](RESTCallsApi.md#checkStatusGet) | **GET** /check-status | check-status
[**editApplication**](RESTCallsApi.md#editApplication) | **POST** /edit-application | Edit Application
[**editB2B2CApplication**](RESTCallsApi.md#editB2B2CApplication) | **POST** /edit-b2b2c-application | Edit Application
[**listApplicationGet**](RESTCallsApi.md#listApplicationGet) | **GET** /list-application | list-application
[**loginTokenPost**](RESTCallsApi.md#loginTokenPost) | **POST** /login-token | Login
[**resumeApplication**](RESTCallsApi.md#resumeApplication) | **POST** /resume-application | Resume Application
[**singleApplicationGet**](RESTCallsApi.md#singleApplicationGet) | **GET** /single-application | single-application
[**singleCardGet**](RESTCallsApi.md#singleCardGet) | **GET** /single-card | single-card
[**submitApplication**](RESTCallsApi.md#submitApplication) | **POST** /submit-application | Submit Application
[**submitApplicationB2B2C**](RESTCallsApi.md#submitApplicationB2B2C) | **POST** /submit-b2b2c-application | Submit Application B2B2C
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
> EditApplication editApplication(applicationID, partnerBusinessName, partnerDateIncorporated, partnerBusinessType, partnerBusinessAddress, partnerStreet2, partnerGeneralInformationCity, partnerGeneralInformationState, partnerGeneralInformationZip, partnerWebsite, partnerSIC, partnerOwnership, partnerBusinessDescription, partnerBusinessFax, partnerInitialCreditLimit, partnerCustomerInformationFirstName, partnerCustomerInformationLastName, partnerCustomerInformationHomeAddress, partnerCustomerInformationHomeStreet2, partnerCustomerInformationState, partnerCustomerInformationCity, partnercustomerInformationZip, partnerCustomerInformationPercentOwnership, partnerCustomerInformationDOB, haveInsurance, gender, apiKey)

Edit Application

### Example
```javascript
import {KapedPartnerApi} from 'kaped_partner_api';
let defaultClient = KapedPartnerApi.ApiClient.instance;


let apiInstance = new KapedPartnerApi.RESTCallsApi();
let applicationID = "applicationID_example"; // String | 
let partnerBusinessName = "partnerBusinessName_example"; // String | 
let partnerDateIncorporated = "partnerDateIncorporated_example"; // String | 
let partnerBusinessType = new KapedPartnerApi.Business(); // Business | 
let partnerBusinessAddress = "partnerBusinessAddress_example"; // String | 
let partnerStreet2 = "partnerStreet2_example"; // String | 
let partnerGeneralInformationCity = "partnerGeneralInformationCity_example"; // String | 
let partnerGeneralInformationState = new KapedPartnerApi.States(); // States | 
let partnerGeneralInformationZip = 56; // Number | 
let partnerWebsite = "partnerWebsite_example"; // String | 
let partnerSIC = new KapedPartnerApi.SIC(); // SIC | 
let partnerOwnership = new KapedPartnerApi.Ownership(); // Ownership | 
let partnerBusinessDescription = "partnerBusinessDescription_example"; // String | 
let partnerBusinessFax = 56; // Number | 
let partnerInitialCreditLimit = 56; // Number | 
let partnerCustomerInformationFirstName = "partnerCustomerInformationFirstName_example"; // String | 
let partnerCustomerInformationLastName = "partnerCustomerInformationLastName_example"; // String | 
let partnerCustomerInformationHomeAddress = "partnerCustomerInformationHomeAddress_example"; // String | 
let partnerCustomerInformationHomeStreet2 = "partnerCustomerInformationHomeStreet2_example"; // String | 
let partnerCustomerInformationState = new KapedPartnerApi.States(); // States | 
let partnerCustomerInformationCity = "partnerCustomerInformationCity_example"; // String | 
let partnercustomerInformationZip = 56; // Number | 
let partnerCustomerInformationPercentOwnership = 56; // Number | 
let partnerCustomerInformationDOB = "partnerCustomerInformationDOB_example"; // String | 
let haveInsurance = true; // Boolean | 
let gender = new KapedPartnerApi.Gender(); // Gender | 
let apiKey = "apiKey_example"; // String | 

apiInstance.editApplication(applicationID, partnerBusinessName, partnerDateIncorporated, partnerBusinessType, partnerBusinessAddress, partnerStreet2, partnerGeneralInformationCity, partnerGeneralInformationState, partnerGeneralInformationZip, partnerWebsite, partnerSIC, partnerOwnership, partnerBusinessDescription, partnerBusinessFax, partnerInitialCreditLimit, partnerCustomerInformationFirstName, partnerCustomerInformationLastName, partnerCustomerInformationHomeAddress, partnerCustomerInformationHomeStreet2, partnerCustomerInformationState, partnerCustomerInformationCity, partnercustomerInformationZip, partnerCustomerInformationPercentOwnership, partnerCustomerInformationDOB, haveInsurance, gender, apiKey, (error, data, response) => {
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
 **applicationID** | **String**|  | 
 **partnerBusinessName** | **String**|  | 
 **partnerDateIncorporated** | **String**|  | 
 **partnerBusinessType** | [**Business**](.md)|  | 
 **partnerBusinessAddress** | **String**|  | 
 **partnerStreet2** | **String**|  | 
 **partnerGeneralInformationCity** | **String**|  | 
 **partnerGeneralInformationState** | [**States**](.md)|  | 
 **partnerGeneralInformationZip** | **Number**|  | 
 **partnerWebsite** | **String**|  | 
 **partnerSIC** | [**SIC**](.md)|  | 
 **partnerOwnership** | [**Ownership**](.md)|  | 
 **partnerBusinessDescription** | **String**|  | 
 **partnerBusinessFax** | **Number**|  | 
 **partnerInitialCreditLimit** | **Number**|  | 
 **partnerCustomerInformationFirstName** | **String**|  | 
 **partnerCustomerInformationLastName** | **String**|  | 
 **partnerCustomerInformationHomeAddress** | **String**|  | 
 **partnerCustomerInformationHomeStreet2** | **String**|  | 
 **partnerCustomerInformationState** | [**States**](.md)|  | 
 **partnerCustomerInformationCity** | **String**|  | 
 **partnercustomerInformationZip** | **Number**|  | 
 **partnerCustomerInformationPercentOwnership** | **Number**|  | 
 **partnerCustomerInformationDOB** | **String**|  | 
 **haveInsurance** | **Boolean**|  | 
 **gender** | [**Gender**](.md)|  | 
 **apiKey** | **String**|  | 

### Return type

[**EditApplication**](EditApplication.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="editB2B2CApplication"></a>
# **editB2B2CApplication**
> EditB2b2cApplication editB2B2CApplication(applicationID, partnerBusinessName, partnerDateIncorporated, partnerBusinessType, partnerBusinessAddress, partnerStreet2, partnerGeneralInformationCity, partnerGeneralInformationState, partnerGeneralInformationZip, partnerWebsite, partnerSIC, partnerOwnership, partnerBusinessDescription, partnerBusinessFax, partnerInitialCreditLimit, partnerCustomerInformationFirstName, partnerCustomerInformationLastName, partnerCustomerInformationHomeAddress, partnerCustomerInformationHomeStreet2, partnerCustomerInformationState, partnerCustomerInformationCity, partnercustomerInformationZip, partnerCustomerInformationPercentOwnership, partnerCustomerInformationDOB, haveInsurance, gender, apiKey)

Edit Application

### Example
```javascript
import {KapedPartnerApi} from 'kaped_partner_api';
let defaultClient = KapedPartnerApi.ApiClient.instance;


let apiInstance = new KapedPartnerApi.RESTCallsApi();
let applicationID = "applicationID_example"; // String | 
let partnerBusinessName = "partnerBusinessName_example"; // String | 
let partnerDateIncorporated = "partnerDateIncorporated_example"; // String | 
let partnerBusinessType = new KapedPartnerApi.Business(); // Business | 
let partnerBusinessAddress = "partnerBusinessAddress_example"; // String | 
let partnerStreet2 = "partnerStreet2_example"; // String | 
let partnerGeneralInformationCity = "partnerGeneralInformationCity_example"; // String | 
let partnerGeneralInformationState = new KapedPartnerApi.States(); // States | 
let partnerGeneralInformationZip = 56; // Number | 
let partnerWebsite = "partnerWebsite_example"; // String | 
let partnerSIC = new KapedPartnerApi.SIC(); // SIC | 
let partnerOwnership = new KapedPartnerApi.Ownership(); // Ownership | 
let partnerBusinessDescription = "partnerBusinessDescription_example"; // String | 
let partnerBusinessFax = 56; // Number | 
let partnerInitialCreditLimit = 56; // Number | 
let partnerCustomerInformationFirstName = "partnerCustomerInformationFirstName_example"; // String | 
let partnerCustomerInformationLastName = "partnerCustomerInformationLastName_example"; // String | 
let partnerCustomerInformationHomeAddress = "partnerCustomerInformationHomeAddress_example"; // String | 
let partnerCustomerInformationHomeStreet2 = "partnerCustomerInformationHomeStreet2_example"; // String | 
let partnerCustomerInformationState = new KapedPartnerApi.States(); // States | 
let partnerCustomerInformationCity = "partnerCustomerInformationCity_example"; // String | 
let partnercustomerInformationZip = 56; // Number | 
let partnerCustomerInformationPercentOwnership = 56; // Number | 
let partnerCustomerInformationDOB = "partnerCustomerInformationDOB_example"; // String | 
let haveInsurance = true; // Boolean | 
let gender = new KapedPartnerApi.Gender(); // Gender | 
let apiKey = "apiKey_example"; // String | 

apiInstance.editB2B2CApplication(applicationID, partnerBusinessName, partnerDateIncorporated, partnerBusinessType, partnerBusinessAddress, partnerStreet2, partnerGeneralInformationCity, partnerGeneralInformationState, partnerGeneralInformationZip, partnerWebsite, partnerSIC, partnerOwnership, partnerBusinessDescription, partnerBusinessFax, partnerInitialCreditLimit, partnerCustomerInformationFirstName, partnerCustomerInformationLastName, partnerCustomerInformationHomeAddress, partnerCustomerInformationHomeStreet2, partnerCustomerInformationState, partnerCustomerInformationCity, partnercustomerInformationZip, partnerCustomerInformationPercentOwnership, partnerCustomerInformationDOB, haveInsurance, gender, apiKey, (error, data, response) => {
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
 **applicationID** | **String**|  | 
 **partnerBusinessName** | **String**|  | 
 **partnerDateIncorporated** | **String**|  | 
 **partnerBusinessType** | [**Business**](.md)|  | 
 **partnerBusinessAddress** | **String**|  | 
 **partnerStreet2** | **String**|  | 
 **partnerGeneralInformationCity** | **String**|  | 
 **partnerGeneralInformationState** | [**States**](.md)|  | 
 **partnerGeneralInformationZip** | **Number**|  | 
 **partnerWebsite** | **String**|  | 
 **partnerSIC** | [**SIC**](.md)|  | 
 **partnerOwnership** | [**Ownership**](.md)|  | 
 **partnerBusinessDescription** | **String**|  | 
 **partnerBusinessFax** | **Number**|  | 
 **partnerInitialCreditLimit** | **Number**|  | 
 **partnerCustomerInformationFirstName** | **String**|  | 
 **partnerCustomerInformationLastName** | **String**|  | 
 **partnerCustomerInformationHomeAddress** | **String**|  | 
 **partnerCustomerInformationHomeStreet2** | **String**|  | 
 **partnerCustomerInformationState** | [**States**](.md)|  | 
 **partnerCustomerInformationCity** | **String**|  | 
 **partnercustomerInformationZip** | **Number**|  | 
 **partnerCustomerInformationPercentOwnership** | **Number**|  | 
 **partnerCustomerInformationDOB** | **String**|  | 
 **haveInsurance** | **Boolean**|  | 
 **gender** | [**Gender**](.md)|  | 
 **apiKey** | **String**|  | 

### Return type

[**EditB2b2cApplication**](EditB2b2cApplication.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

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
> Login loginTokenPost(username, apiKey)

Login

### Example
```javascript
import {KapedPartnerApi} from 'kaped_partner_api';

let apiInstance = new KapedPartnerApi.RESTCallsApi();
let username = "username_example"; // String | 
let apiKey = "apiKey_example"; // String | 

apiInstance.loginTokenPost(username, apiKey, (error, data, response) => {
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
 **username** | **String**|  | 
 **apiKey** | **String**|  | 

### Return type

[**Login**](Login.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

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
> SubmitApplication submitApplication(applicationType, partnerBusinessName, partnerTaxID, partnerDateIncorporated, partnerBusinessType, partnerBusinessAddress, partnerStreet2, partnerGeneralInformationCity, partnerGeneralInformationState, partnerGeneralInformationZip, partnerWebsite, partnerSIC, partnerOwnership, partnerBusinessDescription, partnerBusinessPhone, partnerCustomerSupportEmail, partnerBusinessFax, partnerInitialCreditLimit, partnerCustomerInformationFirstName, partnerCustomerInformationLastName, partnerCustomerInformationHomeAddress, partnerCustomerInformationHomeStreet2, partnerCustomerInformationState, partnerCustomerInformationCity, partnercustomerInformationZip, partnerCustomerInformationPercentOwnership, partnerCustomerInformationDrivingLicenseNumber, partnerCustomerInformationLicenseDate, partnerCustomerInformationDOB, partnerCustomerInformationSSN, partnerTermsConditions, haveInsurance, gender, EIN, articles, sSNCard, dLFront, dLBack, apiKey)

Submit Application

### Example
```javascript
import {KapedPartnerApi} from 'kaped_partner_api';
let defaultClient = KapedPartnerApi.ApiClient.instance;


let apiInstance = new KapedPartnerApi.RESTCallsApi();
let applicationType = "applicationType_example"; // String | 
let partnerBusinessName = "partnerBusinessName_example"; // String | 
let partnerTaxID = 1.2; // Number | 
let partnerDateIncorporated = "partnerDateIncorporated_example"; // String | 
let partnerBusinessType = new KapedPartnerApi.Business(); // Business | 
let partnerBusinessAddress = "partnerBusinessAddress_example"; // String | 
let partnerStreet2 = "partnerStreet2_example"; // String | 
let partnerGeneralInformationCity = "partnerGeneralInformationCity_example"; // String | 
let partnerGeneralInformationState = new KapedPartnerApi.States(); // States | 
let partnerGeneralInformationZip = 56; // Number | 
let partnerWebsite = "partnerWebsite_example"; // String | 
let partnerSIC = new KapedPartnerApi.SIC(); // SIC | 
let partnerOwnership = new KapedPartnerApi.Ownership(); // Ownership | 
let partnerBusinessDescription = "partnerBusinessDescription_example"; // String | 
let partnerBusinessPhone = 56; // Number | 
let partnerCustomerSupportEmail = "partnerCustomerSupportEmail_example"; // String | 
let partnerBusinessFax = 56; // Number | 
let partnerInitialCreditLimit = 56; // Number | 
let partnerCustomerInformationFirstName = "partnerCustomerInformationFirstName_example"; // String | 
let partnerCustomerInformationLastName = "partnerCustomerInformationLastName_example"; // String | 
let partnerCustomerInformationHomeAddress = "partnerCustomerInformationHomeAddress_example"; // String | 
let partnerCustomerInformationHomeStreet2 = "partnerCustomerInformationHomeStreet2_example"; // String | 
let partnerCustomerInformationState = new KapedPartnerApi.States(); // States | 
let partnerCustomerInformationCity = "partnerCustomerInformationCity_example"; // String | 
let partnercustomerInformationZip = 56; // Number | 
let partnerCustomerInformationPercentOwnership = 56; // Number | 
let partnerCustomerInformationDrivingLicenseNumber = "partnerCustomerInformationDrivingLicenseNumber_example"; // String | 
let partnerCustomerInformationLicenseDate = "partnerCustomerInformationLicenseDate_example"; // String | 
let partnerCustomerInformationDOB = "partnerCustomerInformationDOB_example"; // String | 
let partnerCustomerInformationSSN = "partnerCustomerInformationSSN_example"; // String | 
let partnerTermsConditions = true; // Boolean | 
let haveInsurance = true; // Boolean | 
let gender = new KapedPartnerApi.Gender(); // Gender | 
let EIN = ["QmFzZTY0IGV4YW1wbGU="]; // [Blob] | 
let articles = ["QmFzZTY0IGV4YW1wbGU="]; // [Blob] | 
let sSNCard = ["QmFzZTY0IGV4YW1wbGU="]; // [Blob] | 
let dLFront = ["QmFzZTY0IGV4YW1wbGU="]; // [Blob] | 
let dLBack = ["QmFzZTY0IGV4YW1wbGU="]; // [Blob] | 
let apiKey = "apiKey_example"; // String | 

apiInstance.submitApplication(applicationType, partnerBusinessName, partnerTaxID, partnerDateIncorporated, partnerBusinessType, partnerBusinessAddress, partnerStreet2, partnerGeneralInformationCity, partnerGeneralInformationState, partnerGeneralInformationZip, partnerWebsite, partnerSIC, partnerOwnership, partnerBusinessDescription, partnerBusinessPhone, partnerCustomerSupportEmail, partnerBusinessFax, partnerInitialCreditLimit, partnerCustomerInformationFirstName, partnerCustomerInformationLastName, partnerCustomerInformationHomeAddress, partnerCustomerInformationHomeStreet2, partnerCustomerInformationState, partnerCustomerInformationCity, partnercustomerInformationZip, partnerCustomerInformationPercentOwnership, partnerCustomerInformationDrivingLicenseNumber, partnerCustomerInformationLicenseDate, partnerCustomerInformationDOB, partnerCustomerInformationSSN, partnerTermsConditions, haveInsurance, gender, EIN, articles, sSNCard, dLFront, dLBack, apiKey, (error, data, response) => {
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
 **applicationType** | **String**|  | 
 **partnerBusinessName** | **String**|  | 
 **partnerTaxID** | **Number**|  | 
 **partnerDateIncorporated** | **String**|  | 
 **partnerBusinessType** | [**Business**](.md)|  | 
 **partnerBusinessAddress** | **String**|  | 
 **partnerStreet2** | **String**|  | 
 **partnerGeneralInformationCity** | **String**|  | 
 **partnerGeneralInformationState** | [**States**](.md)|  | 
 **partnerGeneralInformationZip** | **Number**|  | 
 **partnerWebsite** | **String**|  | 
 **partnerSIC** | [**SIC**](.md)|  | 
 **partnerOwnership** | [**Ownership**](.md)|  | 
 **partnerBusinessDescription** | **String**|  | 
 **partnerBusinessPhone** | **Number**|  | 
 **partnerCustomerSupportEmail** | **String**|  | 
 **partnerBusinessFax** | **Number**|  | 
 **partnerInitialCreditLimit** | **Number**|  | 
 **partnerCustomerInformationFirstName** | **String**|  | 
 **partnerCustomerInformationLastName** | **String**|  | 
 **partnerCustomerInformationHomeAddress** | **String**|  | 
 **partnerCustomerInformationHomeStreet2** | **String**|  | 
 **partnerCustomerInformationState** | [**States**](.md)|  | 
 **partnerCustomerInformationCity** | **String**|  | 
 **partnercustomerInformationZip** | **Number**|  | 
 **partnerCustomerInformationPercentOwnership** | **Number**|  | 
 **partnerCustomerInformationDrivingLicenseNumber** | **String**|  | 
 **partnerCustomerInformationLicenseDate** | **String**|  | 
 **partnerCustomerInformationDOB** | **String**|  | 
 **partnerCustomerInformationSSN** | **String**|  | 
 **partnerTermsConditions** | **Boolean**|  | 
 **haveInsurance** | **Boolean**|  | 
 **gender** | [**Gender**](.md)|  | 
 **EIN** | [**[Blob]**](Blob.md)|  | 
 **articles** | [**[Blob]**](Blob.md)|  | 
 **sSNCard** | [**[Blob]**](Blob.md)|  | 
 **dLFront** | [**[Blob]**](Blob.md)|  | 
 **dLBack** | [**[Blob]**](Blob.md)|  | 
 **apiKey** | **String**|  | 

### Return type

[**SubmitApplication**](SubmitApplication.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="submitApplicationB2B2C"></a>
# **submitApplicationB2B2C**
> SubmitB2b2cApplication submitApplicationB2B2C(applicationType, customerCurrentCity, customerCurrentStreetAddress, customerFirstName, customerMiddleName, customerLastName, customerMaidenName, customerDateOfBirth, customerSSN, customerGender, customerEmail, customerDrivingLicenseNumber, customerCurrentState, customerCurrentZip, customerCurrentYears, customerPersonalPhone, customerHomeType, customerEmployerName, customerPosition, customerBusinessPhone, customerYearsInJob, customerMonthlyIncome, customerOtherIncome, customerSourceOtherIncome, customerHaveInsurance, customerTermsConditions, initialCreditLimit, dLFront, dLBack, apiKey)

Submit Application B2B2C

### Example
```javascript
import {KapedPartnerApi} from 'kaped_partner_api';
let defaultClient = KapedPartnerApi.ApiClient.instance;


let apiInstance = new KapedPartnerApi.RESTCallsApi();
let applicationType = "applicationType_example"; // String | 
let customerCurrentCity = "customerCurrentCity_example"; // String | 
let customerCurrentStreetAddress = "customerCurrentStreetAddress_example"; // String | 
let customerFirstName = "customerFirstName_example"; // String | 
let customerMiddleName = "customerMiddleName_example"; // String | 
let customerLastName = "customerLastName_example"; // String | 
let customerMaidenName = "customerMaidenName_example"; // String | 
let customerDateOfBirth = "customerDateOfBirth_example"; // String | 
let customerSSN = 56; // Number | 
let customerGender = new KapedPartnerApi.Gender(); // Gender | 
let customerEmail = "customerEmail_example"; // String | 
let customerDrivingLicenseNumber = 56; // Number | 
let customerCurrentState = new KapedPartnerApi.States(); // States | 
let customerCurrentZip = 56; // Number | 
let customerCurrentYears = 56; // Number | 
let customerPersonalPhone = 56; // Number | 
let customerHomeType = "customerHomeType_example"; // String | 
let customerEmployerName = "customerEmployerName_example"; // String | 
let customerPosition = "customerPosition_example"; // String | 
let customerBusinessPhone = 56; // Number | 
let customerYearsInJob = 56; // Number | 
let customerMonthlyIncome = 56; // Number | 
let customerOtherIncome = 56; // Number | 
let customerSourceOtherIncome = "customerSourceOtherIncome_example"; // String | 
let customerHaveInsurance = true; // Boolean | 
let customerTermsConditions = true; // Boolean | 
let initialCreditLimit = 56; // Number | 
let dLFront = ["QmFzZTY0IGV4YW1wbGU="]; // [Blob] | 
let dLBack = ["QmFzZTY0IGV4YW1wbGU="]; // [Blob] | 
let apiKey = "apiKey_example"; // String | 

apiInstance.submitApplicationB2B2C(applicationType, customerCurrentCity, customerCurrentStreetAddress, customerFirstName, customerMiddleName, customerLastName, customerMaidenName, customerDateOfBirth, customerSSN, customerGender, customerEmail, customerDrivingLicenseNumber, customerCurrentState, customerCurrentZip, customerCurrentYears, customerPersonalPhone, customerHomeType, customerEmployerName, customerPosition, customerBusinessPhone, customerYearsInJob, customerMonthlyIncome, customerOtherIncome, customerSourceOtherIncome, customerHaveInsurance, customerTermsConditions, initialCreditLimit, dLFront, dLBack, apiKey, (error, data, response) => {
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
 **applicationType** | **String**|  | 
 **customerCurrentCity** | **String**|  | 
 **customerCurrentStreetAddress** | **String**|  | 
 **customerFirstName** | **String**|  | 
 **customerMiddleName** | **String**|  | 
 **customerLastName** | **String**|  | 
 **customerMaidenName** | **String**|  | 
 **customerDateOfBirth** | **String**|  | 
 **customerSSN** | **Number**|  | 
 **customerGender** | [**Gender**](.md)|  | 
 **customerEmail** | **String**|  | 
 **customerDrivingLicenseNumber** | **Number**|  | 
 **customerCurrentState** | [**States**](.md)|  | 
 **customerCurrentZip** | **Number**|  | 
 **customerCurrentYears** | **Number**|  | 
 **customerPersonalPhone** | **Number**|  | 
 **customerHomeType** | **String**|  | 
 **customerEmployerName** | **String**|  | 
 **customerPosition** | **String**|  | 
 **customerBusinessPhone** | **Number**|  | 
 **customerYearsInJob** | **Number**|  | 
 **customerMonthlyIncome** | **Number**|  | 
 **customerOtherIncome** | **Number**|  | 
 **customerSourceOtherIncome** | **String**|  | 
 **customerHaveInsurance** | **Boolean**|  | 
 **customerTermsConditions** | **Boolean**|  | 
 **initialCreditLimit** | **Number**|  | 
 **dLFront** | [**[Blob]**](Blob.md)|  | 
 **dLBack** | [**[Blob]**](Blob.md)|  | 
 **apiKey** | **String**|  | 

### Return type

[**SubmitB2b2cApplication**](SubmitB2b2cApplication.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
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

