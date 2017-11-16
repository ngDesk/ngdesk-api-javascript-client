# NgDeskOperations.DefaultApi

All URIs are relative to *https://localhost/api/v2/operations*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getTicket**](DefaultApi.md#getTicket) | **GET** /tickets/{ticket_id} | 
[**getTickets**](DefaultApi.md#getTickets) | **GET** /tickets | 
[**postMessages**](DefaultApi.md#postMessages) | **POST** /tickets/{ticket_id}/messages | 
[**postTickets**](DefaultApi.md#postTickets) | **POST** /tickets | 
[**putTickets**](DefaultApi.md#putTickets) | **PUT** /tickets | 


<a name="getTicket"></a>
# **getTicket**
> Ticket getTicket(ticketId, opts)



Retrievs a ticket

### Example
```javascript
var NgDeskOperations = require('ng_desk_operations');

var apiInstance = new NgDeskOperations.DefaultApi();

var ticketId = "ticketId_example"; // String | 

var opts = { 
  'authenticationToken': "authenticationToken_example", // String | 
  'category': "category_example", // String | 
  'statuses': "statuses_example", // String | 
  'orderedColumn': "orderedColumn_example", // String | 
  'orderedBy': "orderedBy_example", // String | 
  'clientId': "clientId_example", // String | 
  'clientSecret': "clientSecret_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTicket(ticketId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ticketId** | **String**|  | 
 **authenticationToken** | **String**|  | [optional] 
 **category** | **String**|  | [optional] 
 **statuses** | **String**|  | [optional] 
 **orderedColumn** | **String**|  | [optional] 
 **orderedBy** | **String**|  | [optional] 
 **clientId** | **String**|  | [optional] 
 **clientSecret** | **String**|  | [optional] 

### Return type

[**Ticket**](Ticket.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTickets"></a>
# **getTickets**
> [Ticket] getTickets(opts)



Retrieve tickets

### Example
```javascript
var NgDeskOperations = require('ng_desk_operations');

var apiInstance = new NgDeskOperations.DefaultApi();

var opts = { 
  'authenticationToken': 3.4, // Number | User athentication uuid
  'start': 56, // Number | Start query value
  'length': 56, // Number | Number of rows query
  'draw': 56, // Number | Number of times table has been reloaded
  'q': "q_example", // String | Values provided in q are tokenized and search on columns: TICKET_ID,SUBJECT,REQUESTOR_UERNAME, REQUESTOR_EMAIL, TICKET_MESSAGES
  'sortBy': "sortBy_example", // String | Column name to order table by
  'sortByOrder': "sortByOrder_example", // String | Sort by ascending or descending
  'passedAccountId': "passedAccountId_example", // String | 
  'passedUserId': "passedUserId_example", // String | 
  'viewId': 56, // Number | View Id
  'clientId': "clientId_example", // String | API ID
  'clientSecret': "clientSecret_example" // String | API Secret
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTickets(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authenticationToken** | **Number**| User athentication uuid | [optional] 
 **start** | **Number**| Start query value | [optional] 
 **length** | **Number**| Number of rows query | [optional] 
 **draw** | **Number**| Number of times table has been reloaded | [optional] 
 **q** | **String**| Values provided in q are tokenized and search on columns: TICKET_ID,SUBJECT,REQUESTOR_UERNAME, REQUESTOR_EMAIL, TICKET_MESSAGES | [optional] 
 **sortBy** | **String**| Column name to order table by | [optional] 
 **sortByOrder** | **String**| Sort by ascending or descending | [optional] 
 **passedAccountId** | **String**|  | [optional] 
 **passedUserId** | **String**|  | [optional] 
 **viewId** | **Number**| View Id | [optional] 
 **clientId** | **String**| API ID | [optional] 
 **clientSecret** | **String**| API Secret | [optional] 

### Return type

[**[Ticket]**](Ticket.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="postMessages"></a>
# **postMessages**
> postMessages(body, ticketId, opts)



Insert a messages

### Example
```javascript
var NgDeskOperations = require('ng_desk_operations');

var apiInstance = new NgDeskOperations.DefaultApi();

var body = new NgDeskOperations.Ticket(); // Ticket | The request body for the operation

var ticketId = "ticketId_example"; // String | 

var opts = { 
  'authenticationToken': "authenticationToken_example", // String | User athentication
  'clientId': "clientId_example", // String | api client
  'clientSecret': "clientSecret_example" // String | api secret
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.postMessages(body, ticketId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Ticket**](Ticket.md)| The request body for the operation | 
 **ticketId** | **String**|  | 
 **authenticationToken** | **String**| User athentication | [optional] 
 **clientId** | **String**| api client | [optional] 
 **clientSecret** | **String**| api secret | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postTickets"></a>
# **postTickets**
> Ticket postTickets(body, opts)



Insert a tickets

### Example
```javascript
var NgDeskOperations = require('ng_desk_operations');

var apiInstance = new NgDeskOperations.DefaultApi();

var body = [new NgDeskOperations.TicketMessage()]; // [TicketMessage] | The request body for the operation

var opts = { 
  'authenticationToken': 3.4, // Number | User athentication uuid
  'clientId': "clientId_example", // String | 
  'clientSecret': "clientSecret_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postTickets(body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[TicketMessage]**](TicketMessage.md)| The request body for the operation | 
 **authenticationToken** | **Number**| User athentication uuid | [optional] 
 **clientId** | **String**|  | [optional] 
 **clientSecret** | **String**|  | [optional] 

### Return type

[**Ticket**](Ticket.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putTickets"></a>
# **putTickets**
> [Ticket] putTickets(body, opts)



Update tickets

### Example
```javascript
var NgDeskOperations = require('ng_desk_operations');

var apiInstance = new NgDeskOperations.DefaultApi();

var body = [new NgDeskOperations.Ticket()]; // [Ticket] | The request body for the operation

var opts = { 
  'authenticationToken': true, // Boolean | User athentication uuid
  'clientId': "clientId_example", // String | 
  'clientSecret': "clientSecret_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.putTickets(body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[Ticket]**](Ticket.md)| The request body for the operation | 
 **authenticationToken** | **Boolean**| User athentication uuid | [optional] 
 **clientId** | **String**|  | [optional] 
 **clientSecret** | **String**|  | [optional] 

### Return type

[**[Ticket]**](Ticket.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

