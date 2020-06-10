import {combineReducers} from "redux";
import theme from "./theme";
import popular from "./popular";

/**
 * 合并reducer
 * **/
const index = combineReducers({
    theme,
    popular
});
export default index;
