# kaped_partner_api

KapedPartnerApi - JavaScript client for kaped_partner_api
No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 1.2.0
- Package version: 1.2.0
- Build package: io.swagger.codegen.v3.generators.javascript.JavaScriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install kaped_partner_api --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var KapedPartnerApi = require('kaped_partner_api');
var defaultClient = KapedPartnerApi.ApiClient.instance;


var api = new KapedPartnerApi.RESTCallsApi()
var apiKey = "apiKey_example"; // {String} 

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.activeCardGet(apiKey, callback);
```

## Documentation for API Endpoints

All URIs are relative to *https://api.kaped.io/partner*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*KapedPartnerApi.RESTCallsApi* | [**activeCardGet**](docs/RESTCallsApi.md#activeCardGet) | **GET** /active-card | active-card
*KapedPartnerApi.RESTCallsApi* | [**applicationStatusUpdate**](docs/RESTCallsApi.md#applicationStatusUpdate) | **POST** /application-status-update | Application Status Update
*KapedPartnerApi.RESTCallsApi* | [**checkStatusGet**](docs/RESTCallsApi.md#checkStatusGet) | **GET** /check-status | check-status
*KapedPartnerApi.RESTCallsApi* | [**editApplication**](docs/RESTCallsApi.md#editApplication) | **POST** /edit-application | Edit Application
*KapedPartnerApi.RESTCallsApi* | [**editB2B2CApplication**](docs/RESTCallsApi.md#editB2B2CApplication) | **POST** /edit-b2b2c-application | Edit Application
*KapedPartnerApi.RESTCallsApi* | [**listApplicationGet**](docs/RESTCallsApi.md#listApplicationGet) | **GET** /list-application | list-application
*KapedPartnerApi.RESTCallsApi* | [**loginTokenPost**](docs/RESTCallsApi.md#loginTokenPost) | **POST** /login-token | Login
*KapedPartnerApi.RESTCallsApi* | [**resumeApplication**](docs/RESTCallsApi.md#resumeApplication) | **POST** /resume-application | Resume Application
*KapedPartnerApi.RESTCallsApi* | [**singleApplicationGet**](docs/RESTCallsApi.md#singleApplicationGet) | **GET** /single-application | single-application
*KapedPartnerApi.RESTCallsApi* | [**singleCardGet**](docs/RESTCallsApi.md#singleCardGet) | **GET** /single-card | single-card
*KapedPartnerApi.RESTCallsApi* | [**submitApplication**](docs/RESTCallsApi.md#submitApplication) | **POST** /submit-application | Submit Application
*KapedPartnerApi.RESTCallsApi* | [**submitApplicationB2B2C**](docs/RESTCallsApi.md#submitApplicationB2B2C) | **POST** /submit-b2b2c-application | Submit Application B2B2C
*KapedPartnerApi.RESTCallsApi* | [**viewCardDetail**](docs/RESTCallsApi.md#viewCardDetail) | **POST** /view-card-detail | View card Detail

## Documentation for Models

 - [KapedPartnerApi.ApplicationStatusUpdate](docs/ApplicationStatusUpdate.md)
 - [KapedPartnerApi.Business](docs/Business.md)
 - [KapedPartnerApi.EditApplication](docs/EditApplication.md)
 - [KapedPartnerApi.EditB2b2cApplication](docs/EditB2b2cApplication.md)
 - [KapedPartnerApi.Gender](docs/Gender.md)
 - [KapedPartnerApi.Login](docs/Login.md)
 - [KapedPartnerApi.Ownership](docs/Ownership.md)
 - [KapedPartnerApi.ResumeApplication](docs/ResumeApplication.md)
 - [KapedPartnerApi.SIC](docs/SIC.md)
 - [KapedPartnerApi.States](docs/States.md)
 - [KapedPartnerApi.SubmitApplication](docs/SubmitApplication.md)
 - [KapedPartnerApi.SubmitB2b2cApplication](docs/SubmitB2b2cApplication.md)
 - [KapedPartnerApi.ViewCardDetail](docs/ViewCardDetail.md)

## Documentation for Authorization


### bearerAuth


