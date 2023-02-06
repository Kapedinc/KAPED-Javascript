# KapedPartnerApi.SubmitB2b2cApplication

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applicationType** | **String** | B2B2C | 
**customerCurrentCity** | **String** |  | 
**customerCurrentStreetAddress** | **String** |  | 
**customerFirstName** | **String** |  | 
**customerMiddleName** | **String** |  | 
**customerLastName** | **String** |  | 
**customerMaidenName** | **String** |  | [optional] 
**customerDateOfBirth** | **String** | YYYY-MM-DD | 
**customerSSN** | **Number** |  | 
**customerGender** | [**Gender**](Gender.md) |  | 
**customerEmail** | **String** |  | 
**customerDrivingLicenseNumber** | **Number** |  | 
**customerCurrentState** | [**States**](States.md) |  | 
**customerCurrentZip** | **Number** |  | 
**customerCurrentYears** | **Number** |  | 
**customerPersonalPhone** | **Number** |  | 
**customerHomeType** | **String** | Select Home Type | 
**customerEmployerName** | **String** |  | 
**customerPosition** | **String** |  | 
**customerBusinessPhone** | **Number** |  | 
**customerYearsInJob** | **Number** |  | 
**customerMonthlyIncome** | **Number** |  | 
**customerOtherIncome** | **Number** |  | [optional] 
**customerSourceOtherIncome** | **String** |  | [optional] 
**customerHaveInsurance** | **Boolean** |  | 
**customerTermsConditions** | **Boolean** |  | 
**initialCreditLimit** | **Number** |  | 
**dLFront** | **[Blob]** |  | 
**dLBack** | **[Blob]** |  | 

<a name="ApplicationTypeEnum"></a>
## Enum: ApplicationTypeEnum

* `b2B2C` (value: `"B2B2C"`)


<a name="CustomerHomeTypeEnum"></a>
## Enum: CustomerHomeTypeEnum

* `own` (value: `"Own"`)
* `rent` (value: `"Rent"`)

