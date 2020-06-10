import Types from "../../action/types";

const defaultDtate = {
  theme: 'red'
};
export default function onAction(state=defaultDtate, action) {
    switch (action.type) {
        case Types.THEME_CHANGE:
            return {
                ...state,
                theme: action.theme
            };
        default:
            return state;
    }
}

