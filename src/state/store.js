import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducers from "./reducers/index";

const composedEnchacer = compose(applyMiddleware(thunk), composeWithDevTools());

const store = createStore(reducers, {}, composedEnchacer);

export default store;
