# CgtCalculator.CgtApi

All URIs are relative to *https://virtserver.swaggerhub.com/drdtoit/cgt/V1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**calcCgtEndowmentGGBranchEvents**](CgtApi.md#calcCgtEndowmentGGBranchEvents) | **POST** /calcs/endowment/jurisdictions/gg_branch/events | 
[**calcCgtEndowmentZaEvents**](CgtApi.md#calcCgtEndowmentZaEvents) | **POST** /calcs/endowment/jurisdictions/za/events | 
[**calcCgtLispGgNaturalEvents**](CgtApi.md#calcCgtLispGgNaturalEvents) | **POST** /calcs/lisp/jurisdictions/gg/investor_types/natural/events | 
[**calcCgtLispGgTrustEvents**](CgtApi.md#calcCgtLispGgTrustEvents) | **POST** /calcs/lisp/jurisdictions/gg/investor_types/trust/events | 
[**calcCgtLispZaCompanyEvents**](CgtApi.md#calcCgtLispZaCompanyEvents) | **POST** /calcs/lisp/jurisdictions/za/investor_types/company/events | 
[**calcCgtLispZaEstimates**](CgtApi.md#calcCgtLispZaEstimates) | **POST** /calcs/lisp/jurisdictions/za/estimates | 
[**calcCgtLispZaNaturalEvents**](CgtApi.md#calcCgtLispZaNaturalEvents) | **POST** /calcs/lisp/jurisdictions/za/investor_types/natural/events | 
[**calcCgtLispZaTrustEvents**](CgtApi.md#calcCgtLispZaTrustEvents) | **POST** /calcs/lisp/jurisdictions/za/investor_types/trust/events | 


<a name="calcCgtEndowmentGGBranchEvents"></a>
# **calcCgtEndowmentGGBranchEvents**
> [CgtEndowmentEventsCalcResult] calcCgtEndowmentGGBranchEvents(cgtEndowmentGgBranchEventsCalcRequest)



For a gg branch endowment, calculate estimated capital gain/loss and tax for one or more cgt events.

### Example
```javascript
var CgtCalculator = require('cgt_calculator');

var apiInstance = new CgtCalculator.CgtApi();

var cgtEndowmentGgBranchEventsCalcRequest = new CgtCalculator.CgtEndowmentGgBranchEventsCalcRequest(); // CgtEndowmentGgBranchEventsCalcRequest | Calculate cgt values for a set of cgt evants for a gg branch endowment.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.calcCgtEndowmentGGBranchEvents(cgtEndowmentGgBranchEventsCalcRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cgtEndowmentGgBranchEventsCalcRequest** | [**CgtEndowmentGgBranchEventsCalcRequest**](CgtEndowmentGgBranchEventsCalcRequest.md)| Calculate cgt values for a set of cgt evants for a gg branch endowment. | 

### Return type

[**[CgtEndowmentEventsCalcResult]**](CgtEndowmentEventsCalcResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="calcCgtEndowmentZaEvents"></a>
# **calcCgtEndowmentZaEvents**
> CgtEndowmentEventsCalcResult calcCgtEndowmentZaEvents(cgtEndowmentZaEventsCalcRequest)



For a za endowment, calculate estimated capital gain/loss and tax for one or more cgt events.

### Example
```javascript
var CgtCalculator = require('cgt_calculator');

var apiInstance = new CgtCalculator.CgtApi();

var cgtEndowmentZaEventsCalcRequest = new CgtCalculator.CgtEndowmentZaEventsCalcRequest(); // CgtEndowmentZaEventsCalcRequest | Calculate cgt values for a set of cgt evants for a za endowment.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.calcCgtEndowmentZaEvents(cgtEndowmentZaEventsCalcRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cgtEndowmentZaEventsCalcRequest** | [**CgtEndowmentZaEventsCalcRequest**](CgtEndowmentZaEventsCalcRequest.md)| Calculate cgt values for a set of cgt evants for a za endowment. | 

### Return type

[**CgtEndowmentEventsCalcResult**](CgtEndowmentEventsCalcResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="calcCgtLispGgNaturalEvents"></a>
# **calcCgtLispGgNaturalEvents**
> CgtLispEventsCalcResult calcCgtLispGgNaturalEvents(cgtLispGgNaturalEventsCalcRequest)



For a gg lisp natural investor, calculate estimated capital gain/loss and tax for one or more cgt events.

### Example
```javascript
var CgtCalculator = require('cgt_calculator');

var apiInstance = new CgtCalculator.CgtApi();

var cgtLispGgNaturalEventsCalcRequest = new CgtCalculator.CgtLispGgNaturalEventsCalcRequest(); // CgtLispGgNaturalEventsCalcRequest | Calculate cgt values for a set of cgt evants for a natural person with a gg lisp product.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.calcCgtLispGgNaturalEvents(cgtLispGgNaturalEventsCalcRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cgtLispGgNaturalEventsCalcRequest** | [**CgtLispGgNaturalEventsCalcRequest**](CgtLispGgNaturalEventsCalcRequest.md)| Calculate cgt values for a set of cgt evants for a natural person with a gg lisp product. | 

### Return type

[**CgtLispEventsCalcResult**](CgtLispEventsCalcResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="calcCgtLispGgTrustEvents"></a>
# **calcCgtLispGgTrustEvents**
> CgtLispEventsCalcResult calcCgtLispGgTrustEvents(cgtLispGgTrustEventsCalcRequest)



For a gg lisp trust investor, calculate estimated capital gain/loss and tax for one or more cgt events.

### Example
```javascript
var CgtCalculator = require('cgt_calculator');

var apiInstance = new CgtCalculator.CgtApi();

var cgtLispGgTrustEventsCalcRequest = new CgtCalculator.CgtLispGgTrustEventsCalcRequest(); // CgtLispGgTrustEventsCalcRequest | Calculate cgt values for a set of cgt evants for a trust with a za lisp product.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.calcCgtLispGgTrustEvents(cgtLispGgTrustEventsCalcRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cgtLispGgTrustEventsCalcRequest** | [**CgtLispGgTrustEventsCalcRequest**](CgtLispGgTrustEventsCalcRequest.md)| Calculate cgt values for a set of cgt evants for a trust with a za lisp product. | 

### Return type

[**CgtLispEventsCalcResult**](CgtLispEventsCalcResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="calcCgtLispZaCompanyEvents"></a>
# **calcCgtLispZaCompanyEvents**
> CgtLispEventsCalcResult calcCgtLispZaCompanyEvents(cgtLispZaCompanyEventsCalcRequest)



For a za lisp company investor, calculate estimated capital gain/loss and tax for one or more cgt events.

### Example
```javascript
var CgtCalculator = require('cgt_calculator');

var apiInstance = new CgtCalculator.CgtApi();

var cgtLispZaCompanyEventsCalcRequest = new CgtCalculator.CgtLispZaCompanyEventsCalcRequest(); // CgtLispZaCompanyEventsCalcRequest | Calculate cgt values for a set of cgt evants for a company with a za lisp product.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.calcCgtLispZaCompanyEvents(cgtLispZaCompanyEventsCalcRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cgtLispZaCompanyEventsCalcRequest** | [**CgtLispZaCompanyEventsCalcRequest**](CgtLispZaCompanyEventsCalcRequest.md)| Calculate cgt values for a set of cgt evants for a company with a za lisp product. | 

### Return type

[**CgtLispEventsCalcResult**](CgtLispEventsCalcResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="calcCgtLispZaEstimates"></a>
# **calcCgtLispZaEstimates**
> CgtEstimatesResult calcCgtLispZaEstimates(cgtLispZaEstimatesCalcRequest)



For a za lisp, calculate estimated cgt values.

### Example
```javascript
var CgtCalculator = require('cgt_calculator');

var apiInstance = new CgtCalculator.CgtApi();

var cgtLispZaEstimatesCalcRequest = new CgtCalculator.CgtLispZaEstimatesCalcRequest(); // CgtLispZaEstimatesCalcRequest | Calculate estimated cgt values for za lisp.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.calcCgtLispZaEstimates(cgtLispZaEstimatesCalcRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cgtLispZaEstimatesCalcRequest** | [**CgtLispZaEstimatesCalcRequest**](CgtLispZaEstimatesCalcRequest.md)| Calculate estimated cgt values for za lisp. | 

### Return type

[**CgtEstimatesResult**](CgtEstimatesResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="calcCgtLispZaNaturalEvents"></a>
# **calcCgtLispZaNaturalEvents**
> CgtLispEventsCalcResult calcCgtLispZaNaturalEvents(cgtLispZaNaturalEventsCalcRequest)



For a za lisp natural investor, calculate estimated capital gain/loss and tax for one or more cgt events.

### Example
```javascript
var CgtCalculator = require('cgt_calculator');

var apiInstance = new CgtCalculator.CgtApi();

var cgtLispZaNaturalEventsCalcRequest = new CgtCalculator.CgtLispZaNaturalEventsCalcRequest(); // CgtLispZaNaturalEventsCalcRequest | Calculate cgt values for a set of cgt evants for a natural person with a za lisp product.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.calcCgtLispZaNaturalEvents(cgtLispZaNaturalEventsCalcRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cgtLispZaNaturalEventsCalcRequest** | [**CgtLispZaNaturalEventsCalcRequest**](CgtLispZaNaturalEventsCalcRequest.md)| Calculate cgt values for a set of cgt evants for a natural person with a za lisp product. | 

### Return type

[**CgtLispEventsCalcResult**](CgtLispEventsCalcResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="calcCgtLispZaTrustEvents"></a>
# **calcCgtLispZaTrustEvents**
> CgtLispEventsCalcResult calcCgtLispZaTrustEvents(cgtLispZaTrustEventsCalcRequest)



For a za lisp trust investor, calculate estimated capital gain/loss and tax for one or more cgt events.

### Example
```javascript
var CgtCalculator = require('cgt_calculator');

var apiInstance = new CgtCalculator.CgtApi();

var cgtLispZaTrustEventsCalcRequest = new CgtCalculator.CgtLispZaTrustEventsCalcRequest(); // CgtLispZaTrustEventsCalcRequest | Calculate cgt values for a set of cgt evants for a trust with a za lisp product.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.calcCgtLispZaTrustEvents(cgtLispZaTrustEventsCalcRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cgtLispZaTrustEventsCalcRequest** | [**CgtLispZaTrustEventsCalcRequest**](CgtLispZaTrustEventsCalcRequest.md)| Calculate cgt values for a set of cgt evants for a trust with a za lisp product. | 

### Return type

[**CgtLispEventsCalcResult**](CgtLispEventsCalcResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

