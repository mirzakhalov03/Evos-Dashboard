import { legacy_createStore } from "redux";
import reducer from "../reducer/reducer.js";

const store = legacy_createStore(reducer);

export default store
