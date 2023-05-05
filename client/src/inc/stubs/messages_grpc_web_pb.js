/**
 * @fileoverview gRPC-Web generated client stub for _messages
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v3.20.3
// source: messages.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var auth_pb = require('./auth_pb.js')
const proto = {};
proto._messages = require('./messages_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto._messages.MessageServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto._messages.MessageServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto._messages.ThreadRequest,
 *   !proto._messages.MessageThread>}
 */
const methodDescriptor_MessageService_GetMessageThread = new grpc.web.MethodDescriptor(
  '/_messages.MessageService/GetMessageThread',
  grpc.web.MethodType.UNARY,
  proto._messages.ThreadRequest,
  proto._messages.MessageThread,
  /**
   * @param {!proto._messages.ThreadRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto._messages.MessageThread.deserializeBinary
);


/**
 * @param {!proto._messages.ThreadRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto._messages.MessageThread)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto._messages.MessageThread>|undefined}
 *     The XHR Node Readable Stream
 */
proto._messages.MessageServiceClient.prototype.getMessageThread =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/_messages.MessageService/GetMessageThread',
      request,
      metadata || {},
      methodDescriptor_MessageService_GetMessageThread,
      callback);
};


/**
 * @param {!proto._messages.ThreadRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto._messages.MessageThread>}
 *     Promise that resolves to the response
 */
proto._messages.MessageServicePromiseClient.prototype.getMessageThread =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/_messages.MessageService/GetMessageThread',
      request,
      metadata || {},
      methodDescriptor_MessageService_GetMessageThread);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto._messages.MessageRequest,
 *   !proto._messages.MessagesResponse>}
 */
const methodDescriptor_MessageService_GetUserMessagesList = new grpc.web.MethodDescriptor(
  '/_messages.MessageService/GetUserMessagesList',
  grpc.web.MethodType.UNARY,
  proto._messages.MessageRequest,
  proto._messages.MessagesResponse,
  /**
   * @param {!proto._messages.MessageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto._messages.MessagesResponse.deserializeBinary
);


/**
 * @param {!proto._messages.MessageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto._messages.MessagesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto._messages.MessagesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto._messages.MessageServiceClient.prototype.getUserMessagesList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/_messages.MessageService/GetUserMessagesList',
      request,
      metadata || {},
      methodDescriptor_MessageService_GetUserMessagesList,
      callback);
};


/**
 * @param {!proto._messages.MessageRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto._messages.MessagesResponse>}
 *     Promise that resolves to the response
 */
proto._messages.MessageServicePromiseClient.prototype.getUserMessagesList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/_messages.MessageService/GetUserMessagesList',
      request,
      metadata || {},
      methodDescriptor_MessageService_GetUserMessagesList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto._messages.MessageRequest,
 *   !proto._messages.MessagesResponse>}
 */
const methodDescriptor_MessageService_GetUserMessagesRequests = new grpc.web.MethodDescriptor(
  '/_messages.MessageService/GetUserMessagesRequests',
  grpc.web.MethodType.UNARY,
  proto._messages.MessageRequest,
  proto._messages.MessagesResponse,
  /**
   * @param {!proto._messages.MessageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto._messages.MessagesResponse.deserializeBinary
);


/**
 * @param {!proto._messages.MessageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto._messages.MessagesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto._messages.MessagesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto._messages.MessageServiceClient.prototype.getUserMessagesRequests =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/_messages.MessageService/GetUserMessagesRequests',
      request,
      metadata || {},
      methodDescriptor_MessageService_GetUserMessagesRequests,
      callback);
};


/**
 * @param {!proto._messages.MessageRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto._messages.MessagesResponse>}
 *     Promise that resolves to the response
 */
proto._messages.MessageServicePromiseClient.prototype.getUserMessagesRequests =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/_messages.MessageService/GetUserMessagesRequests',
      request,
      metadata || {},
      methodDescriptor_MessageService_GetUserMessagesRequests);
};


module.exports = proto._messages;
