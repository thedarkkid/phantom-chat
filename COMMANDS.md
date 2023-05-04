## Setup Proto
protoc -I=. *.proto --js_out=import_style=commonjs:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:.

if it doesn't work
brew install protobuf@3
brew link --overwrite protobuf@3

### Link to run stuff
https://github.com/grpc/grpc-web/tree/master/net/grpc/gateway/examples/helloworld#run-the-example