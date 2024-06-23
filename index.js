import { combineReducers } from "redux";
import CrudReducers from "./CrudReducers";

const rootReducers = combineReducers({
    crud:CrudReducers
})

export default rootReducers;