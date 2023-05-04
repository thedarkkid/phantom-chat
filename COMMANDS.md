## Setup Proto
protoc -I=. *.proto --js_out=import_style=commonjs:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:.

if it doesn't work
brew install protobuf@3
brew link --overwrite protobuf@3