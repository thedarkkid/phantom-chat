mkdir proto;
cp ../proto/* proto;

mkdir -p src/inc/stubs;

cd proto || exit;

# Path to this plugin
PROTOC_GEN_TS_PATH="../node_modules/.bin/protoc-gen-ts";

# Directory to write generated code to (.js and .d.ts files)
OUT_DIR="../src/inc/stubs";

protoc \
    --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
    --js_out="import_style=commonjs,binary:${OUT_DIR}" \
    --ts_out="service=grpc-web:${OUT_DIR}" \
    --grpc-web_out=import_style=commonjs,mode=grpcwebtext:"${OUT_DIR}"\
    -I=. *.proto

cd ..;

rm -rf proto;