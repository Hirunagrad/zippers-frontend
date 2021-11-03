import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { userLoginReducer, userRegisterReducer } from "./reducers/userReducers";

//convert root reducer
const reducer = combineReducers({
  //contain our reducers
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)) //access browser redux devtool extension
);

export default store;
