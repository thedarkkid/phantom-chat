## Setup Proto
protoc -I=. *.proto --js_out=import_style=commonjs:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:.

if it doesn't work
brew install protobuf@3
brew link --overwrite protobuf@3

### Link to run stuff
https://github.com/grpc/grpc-web/tree/master/net/grpc/gateway/examples/helloworld#run-the-example

docker run -d -v "$(pwd)"/envoy.yaml:/etc/envoy/envoy.yaml:ro \
-p 8080:8080 -p 9901:9901 envoyproxy/envoy:v1.22.0