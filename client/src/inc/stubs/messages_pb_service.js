// package: _messages
// file: messages.proto

var messages_pb = require("./messages_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var MessageService = (function () {
  function MessageService() {}
  MessageService.serviceName = "_messages.MessageService";
  return MessageService;
}());

MessageService.CreateMessageTunnel = {
  methodName: "CreateMessageTunnel",
  service: MessageService,
  requestStream: false,
  responseStream: true,
  requestType: messages_pb.MessageTunnelRequest,
  responseType: messages_pb.MessageThread
};

MessageService.GetMessageThread = {
  methodName: "GetMessageThread",
  service: MessageService,
  requestStream: false,
  responseStream: false,
  requestType: messages_pb.ThreadRequest,
  responseType: messages_pb.MessageThread
};

MessageService.GetUserMessagesList = {
  methodName: "GetUserMessagesList",
  service: MessageService,
  requestStream: false,
  responseStream: false,
  requestType: messages_pb.MessageRequest,
  responseType: messages_pb.MessagesResponse
};

MessageService.GetUserMessagesRequests = {
  methodName: "GetUserMessagesRequests",
  service: MessageService,
  requestStream: false,
  responseStream: false,
  requestType: messages_pb.MessageRequest,
  responseType: messages_pb.MessagesResponse
};

exports.MessageService = MessageService;

function MessageServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

MessageServiceClient.prototype.createMessageTunnel = function createMessageTunnel(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(MessageService.CreateMessageTunnel, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

MessageServiceClient.prototype.getMessageThread = function getMessageThread(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MessageService.GetMessageThread, {
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

MessageServiceClient.prototype.getUserMessagesList = function getUserMessagesList(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MessageService.GetUserMessagesList, {
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

MessageServiceClient.prototype.getUserMessagesRequests = function getUserMessagesRequests(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MessageService.GetUserMessagesRequests, {
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

exports.MessageServiceClient = MessageServiceClient;

