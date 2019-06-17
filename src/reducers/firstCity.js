export default function firstcityReducer (state = "San Francisco, CA", action) {
    if (action.type === "SET_FIRSTCITY") {
        return action.payload;
    } else {
        return state;
    }
}