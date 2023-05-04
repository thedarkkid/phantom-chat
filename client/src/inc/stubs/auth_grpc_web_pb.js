/**
 * @fileoverview gRPC-Web generated client stub for _auth
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v3.20.3
// source: auth.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto._auth = require('./auth_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto._auth.AuthServiceClient =
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
proto._auth.AuthServicePromiseClient =
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
 *   !proto._auth.AuthenticateUserRequest,
 *   !proto._auth.User>}
 */
const methodDescriptor_AuthService_AuthenticateUser = new grpc.web.MethodDescriptor(
  '/_auth.AuthService/AuthenticateUser',
  grpc.web.MethodType.UNARY,
  proto._auth.AuthenticateUserRequest,
  proto._auth.User,
  /**
   * @param {!proto._auth.AuthenticateUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto._auth.User.deserializeBinary
);


/**
 * @param {!proto._auth.AuthenticateUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto._auth.User)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto._auth.User>|undefined}
 *     The XHR Node Readable Stream
 */
proto._auth.AuthServiceClient.prototype.authenticateUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/_auth.AuthService/AuthenticateUser',
      request,
      metadata || {},
      methodDescriptor_AuthService_AuthenticateUser,
      callback);
};


/**
 * @param {!proto._auth.AuthenticateUserRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto._auth.User>}
 *     Promise that resolves to the response
 */
proto._auth.AuthServicePromiseClient.prototype.authenticateUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/_auth.AuthService/AuthenticateUser',
      request,
      metadata || {},
      methodDescriptor_AuthService_AuthenticateUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto._auth.GetUserRequest,
 *   !proto._auth.User>}
 */
const methodDescriptor_AuthService_GetUser = new grpc.web.MethodDescriptor(
  '/_auth.AuthService/GetUser',
  grpc.web.MethodType.UNARY,
  proto._auth.GetUserRequest,
  proto._auth.User,
  /**
   * @param {!proto._auth.GetUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto._auth.User.deserializeBinary
);


/**
 * @param {!proto._auth.GetUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto._auth.User)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto._auth.User>|undefined}
 *     The XHR Node Readable Stream
 */
proto._auth.AuthServiceClient.prototype.getUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/_auth.AuthService/GetUser',
      request,
      metadata || {},
      methodDescriptor_AuthService_GetUser,
      callback);
};


/**
 * @param {!proto._auth.GetUserRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto._auth.User>}
 *     Promise that resolves to the response
 */
proto._auth.AuthServicePromiseClient.prototype.getUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/_auth.AuthService/GetUser',
      request,
      metadata || {},
      methodDescriptor_AuthService_GetUser);
};


module.exports = proto._auth;

