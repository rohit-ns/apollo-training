"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import Server from 'server';
// const server= new Server();
// import path from 'path';
// import { fileLoader, mergeTypes } from 'merge-graphql-schemas';
// const typesArray = fileLoader(path.join(__dirname, './**/*.graphql'));
// console.log(typesArray);
// const typeDefs = mergeTypes(typesArray, { all: true });
// // console.log(typeDefs);
// export default typeDefs;
const path_1 = require("path");
const merge_graphql_schemas_1 = require("merge-graphql-schemas");
const typesArray = merge_graphql_schemas_1.fileLoader(path_1.default.join(__dirname, './**/*.graphql'));
const typeDefs = merge_graphql_schemas_1.mergeTypes(typesArray, { all: true });
exports.default = typeDefs;
//# sourceMappingURL=index.js.map