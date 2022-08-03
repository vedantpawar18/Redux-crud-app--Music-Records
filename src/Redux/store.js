import thunk from "redux-thunk";

const { legacy_createStore , applyMiddleware} = require("redux");
const { reducer } = require("./reducer");


const store= legacy_createStore(reducer, applyMiddleware(thunk));

export {store};