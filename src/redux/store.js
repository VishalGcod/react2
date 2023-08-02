import { cakeReducer } from "./cake/cakeReducer";
import { createStore, applyMiddleware } from "redux";
import { icecreamReducer } from "./icecream/icecreamReducer";
import { rootReducer } from "./rootReducer";
import { logger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));