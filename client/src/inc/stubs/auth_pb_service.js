// package: _auth
// file: auth.proto

var auth_pb = require("./auth_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var AuthService = (function () {
  function AuthService() {}
  AuthService.serviceName = "_auth.AuthService";
  return AuthService;
}());

AuthService.AuthenticateUser = {
  methodName: "AuthenticateUser",
  service: AuthService,
  requestStream: false,
  responseStream: false,
  requestType: auth_pb.AuthenticateUserRequest,
  responseType: auth_pb.User
};

AuthService.GetUser = {
  methodName: "GetUser",
  service: AuthService,
  requestStream: false,
  responseStream: false,
  requestType: auth_pb.GetUserRequest,
  responseType: auth_pb.User
};

exports.AuthService = AuthService;

function AuthServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

AuthServiceClient.prototype.authenticateUser = function authenticateUser(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AuthService.AuthenticateUser, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AuthServiceClient.prototype.getUser = function getUser(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AuthService.GetUser, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.AuthServiceClient = AuthServiceClient;

