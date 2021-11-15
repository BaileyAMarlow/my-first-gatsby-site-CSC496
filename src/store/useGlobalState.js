import { useReducer } from "react";

const reducer = (state, actioin) => {
    switch (action.type) {
        case "TOGGLE_DARK_MODE":
            return { ...state, isDark: !state.isDark }
            default:
                return state
    }
}

const useGlobalState = () => {
    const [state, dispatch] = useReducer (reducer, { isDark: false})

    return { state, dispatch}
}

export default useGlobalState